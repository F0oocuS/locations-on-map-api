const fs = require('fs');
const path = require('path');
const https = require('https');

async function downloadTiles() {
    const zoom = 15;
    const xStart = 19130;
    const xEnd = 19190;
    const yStart = 11030;
    const yEnd = 11090;
    const baseUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

    // Create directory if it does not exist
    const outputDir = path.join(__dirname, 'storage', 'app', 'tiles');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const zoomDir = path.join(outputDir, zoom.toString());
    if (!fs.existsSync(zoomDir)) {
        fs.mkdirSync(zoomDir, { recursive: true });
    }

    for (let x = xStart; x < xEnd; x++) {
        // Create a directory for each x coordinate
        const xDir = path.join(zoomDir, x.toString());
        if (!fs.existsSync(xDir)) {
            fs.mkdirSync(xDir, { recursive: true });
        }

        for (let y = yStart; y < yEnd; y++) {
            const url = baseUrl
                .replace('{z}', zoom.toString())
                .replace('{x}', x.toString())
                .replace('{y}', y.toString());
            
            try {
                const success = await downloadFile(url, path.join(xDir, `${y}.png`));
                if (success) {
                    console.log(`${zoom}/${x}/${y}`);
                } else {
                    break;
                }
                
                // Add delay between requests to be respectful to OSM servers
                await new Promise(resolve => setTimeout(resolve, 100)); // 100ms delay
                
            } catch (error) {
                console.error(`Error downloading ${zoom}/${x}/${y}:`, error);
                break;
            }
        }
    }
}

function downloadFile(url, filePath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filePath);
        
        const options = {
            headers: {
                'User-Agent': 'locations-on-map-api/1.0 (your-email@example.com)', // Replace with your app name and email
                'Referer': 'https://www.openstreetmap.org/'
            }
        };
        
        https.get(url, options, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve(true);
                });
            } else {
                file.close();
                fs.unlinkSync(filePath); // Delete the file on error
                resolve(false);
            }
        }).on('error', (error) => {
            file.close();
            fs.unlinkSync(filePath); // Delete the file on error
            reject(error);
        });
    });
}

// Run the script
downloadTiles().then(() => {
    console.log('Tile downloading completed');
}).catch((error) => {
    console.error('Script error:', error);
});