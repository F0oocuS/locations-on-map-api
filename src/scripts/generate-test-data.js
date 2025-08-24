const fs = require('fs');

const categories = ['food', 'park', 'museum', 'shop', 'other'];
const foodNames = ['McDonald\'s', 'KFC', 'Subway', 'Pizza Hut', 'Burger King', 'Тaco Bell', 'Starbucks', 'Dunkin\'', 'Domino\'s', 'Papa John\'s'];
const parkNames = ['Central Park', 'Riverside Park', 'Memorial Park', 'City Park', 'Green Park', 'Victory Park', 'Liberty Park', 'Oak Park', 'Pine Park', 'Maple Park'];
const museumNames = ['Art Museum', 'History Museum', 'Science Museum', 'Natural History', 'Modern Art', 'Cultural Center', 'Heritage Museum', 'War Museum', 'Technology Museum', 'Local Museum'];
const shopNames = ['Walmart', 'Target', 'Best Buy', 'Home Depot', 'Costco', 'CVS', 'Walgreens', 'Macy\'s', 'Nike', 'Apple Store'];
const otherNames = ['City Hall', 'Library', 'Post Office', 'Bank', 'Hospital', 'School', 'University', 'Stadium', 'Theater', 'Cinema'];

const namesByCategory = {
    food: foodNames,
    park: parkNames,
    museum: museumNames,
    shop: shopNames,
    other: otherNames
};

const descriptions = {
    food: ['Delicious meals', 'Fast food restaurant', 'Great coffee', 'Family restaurant', 'Local cuisine'],
    park: ['Beautiful nature', 'Great for walks', 'Family friendly', 'Outdoor activities', 'Peaceful environment'],
    museum: ['Educational experience', 'Rich history', 'Interactive exhibits', 'Cultural heritage', 'Art collection'],
    shop: ['Quality products', 'Great prices', 'Wide selection', 'Customer service', 'Popular store'],
    other: ['Important landmark', 'Public service', 'Community center', 'Historic building', 'Local attraction']
};

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomCoords() {
    // Coordinates around Kyiv area
    const lat = 50.3 + Math.random() * 0.4; // 50.3 to 50.7
    const lon = 30.2 + Math.random() * 0.8; // 30.2 to 31.0
    return {
        lat: Math.round(lat * 10000) / 10000,
        lon: Math.round(lon * 10000) / 10000
    };
}

function generateRandomDate() {
    const start = new Date('2024-01-01');
    const end = new Date('2024-12-31');
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    return new Date(randomTime).toISOString();
}

function generateTestLocations(count) {
    const locations = [];
    
    for (let i = 11; i <= count + 10; i++) {
        const category = getRandomElement(categories);
        const baseName = getRandomElement(namesByCategory[category]);
        const name = `${baseName} ${i}`;
        const description = getRandomElement(descriptions[category]);
        
        locations.push({
            id: i.toString(),
            name: name,
            description: description,
            createdAt: generateRandomDate(),
            coords: generateRandomCoords(),
            category: category
        });
    }
    
    return locations;
}

// Generate 2000 test locations
const testLocations = generateTestLocations(2000);

// Read the existing file
const modelPath = './src/models/location.model.js';
let fileContent = fs.readFileSync(modelPath, 'utf8');

// Find the existing locations array and replace it
const existingLocations = `const locations = [
	{
		id: '1',
		name: 'Пузата Хата',
		description: 'Українська мережа ресторанів',
		createdAt: '2024-01-15T10:00:00.000Z',
		coords: { lat: 50.4501, lon: 30.5234 },
		category: 'food'
	},
	{
		id: '2',
		name: 'Парк Шевченка',
		description: 'Центральний парк Києва',
		createdAt: '2024-01-16T09:30:00.000Z',
		coords: { lat: 50.4547, lon: 30.5238 },
		category: 'park'
	},
	{
		id: '3',
		name: 'Національний музей історії України',
		description: 'Головний історичний музей країни',
		createdAt: '2024-01-17T11:00:00.000Z',
		coords: { lat: 50.4465, lon: 30.5238 },
		category: 'museum'
	},
	{
		id: '4',
		name: 'Глобус',
		description: 'Торговий центр',
		createdAt: '2024-01-18T14:15:00.000Z',
		coords: { lat: 50.4431, lon: 30.5189 },
		category: 'shop'
	},
	{
		id: '5',
		name: 'Мамина Паста',
		description: 'Італійська кухня',
		createdAt: '2024-01-19T12:30:00.000Z',
		coords: { lat: 50.4412, lon: 30.5167 },
		category: 'food'
	},
	{
		id: '6',
		name: 'Гідропарк',
		description: 'Парк відпочинку на Дніпрі',
		createdAt: '2024-01-20T08:45:00.000Z',
		coords: { lat: 50.4667, lon: 30.5833 },
		category: 'park'
	},
	{
		id: '7',
		name: 'Музей авіації',
		description: 'Державний музей авіації України',
		createdAt: '2024-01-21T13:20:00.000Z',
		coords: { lat: 50.4019, lon: 30.4525 },
		category: 'museum'
	},
	{
		id: '8',
		name: 'Silpo',
		description: 'Мережа супермаркетів',
		createdAt: '2024-01-22T16:00:00.000Z',
		coords: { lat: 50.4475, lon: 30.5216 },
		category: 'shop'
	},
	{
		id: '9',
		name: 'Золоті Ворота',
		description: 'Історична пам\'ятка Києва',
		createdAt: '2024-01-23T10:30:00.000Z',
		coords: { lat: 50.4484, lon: 30.5131 },
		category: 'other'
	},
	{
		id: '10',
		name: 'McDonald\'s',
		description: 'Міжнародна мережа швидкого харчування',
		createdAt: '2024-01-24T15:45:00.000Z',
		coords: { lat: 50.4462, lon: 30.5186 },
		category: 'food'
	}
];`;

// Create new locations array with original 10 + 2000 new ones
const allLocations = [
	{
		id: '1',
		name: 'Пузата Хата',
		description: 'Українська мережа ресторанів',
		createdAt: '2024-01-15T10:00:00.000Z',
		coords: { lat: 50.4501, lon: 30.5234 },
		category: 'food'
	},
	{
		id: '2',
		name: 'Парк Шевченка',
		description: 'Центральний парк Києва',
		createdAt: '2024-01-16T09:30:00.000Z',
		coords: { lat: 50.4547, lon: 30.5238 },
		category: 'park'
	},
	{
		id: '3',
		name: 'Національний музей історії України',
		description: 'Головний історичний музей країни',
		createdAt: '2024-01-17T11:00:00.000Z',
		coords: { lat: 50.4465, lon: 30.5238 },
		category: 'museum'
	},
	{
		id: '4',
		name: 'Глобус',
		description: 'Торговий центр',
		createdAt: '2024-01-18T14:15:00.000Z',
		coords: { lat: 50.4431, lon: 30.5189 },
		category: 'shop'
	},
	{
		id: '5',
		name: 'Мамина Паста',
		description: 'Італійська кухня',
		createdAt: '2024-01-19T12:30:00.000Z',
		coords: { lat: 50.4412, lon: 30.5167 },
		category: 'food'
	},
	{
		id: '6',
		name: 'Гідропарк',
		description: 'Парк відпочинку на Дніпрі',
		createdAt: '2024-01-20T08:45:00.000Z',
		coords: { lat: 50.4667, lon: 30.5833 },
		category: 'park'
	},
	{
		id: '7',
		name: 'Музей авіації',
		description: 'Державний музей авіації України',
		createdAt: '2024-01-21T13:20:00.000Z',
		coords: { lat: 50.4019, lon: 30.4525 },
		category: 'museum'
	},
	{
		id: '8',
		name: 'Silpo',
		description: 'Мережа супермаркетів',
		createdAt: '2024-01-22T16:00:00.000Z',
		coords: { lat: 50.4475, lon: 30.5216 },
		category: 'shop'
	},
	{
		id: '9',
		name: 'Золоті Ворота',
		description: 'Історична пам\'ятка Києва',
		createdAt: '2024-01-23T10:30:00.000Z',
		coords: { lat: 50.4484, lon: 30.5131 },
		category: 'other'
	},
	{
		id: '10',
		name: 'McDonald\'s',
		description: 'Міжнародна мережа швидкого харчування',
		createdAt: '2024-01-24T15:45:00.000Z',
		coords: { lat: 50.4462, lon: 30.5186 },
		category: 'food'
	},
	...testLocations
];

const newLocationsString = `const locations = ${JSON.stringify(allLocations, null, '\t')};`;

// Replace the locations array in the file
fileContent = fileContent.replace(existingLocations, newLocationsString);

// Write the updated content back to the file
fs.writeFileSync(modelPath, fileContent, 'utf8');

console.log('Successfully generated 2000 test locations and updated the model file!');
console.log(`Total locations now: ${allLocations.length}`);