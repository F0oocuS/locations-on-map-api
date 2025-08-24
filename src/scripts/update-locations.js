const fs = require('fs');

// Функція для генерації тестових локацій
function generateLocations() {
    const categories = ['food', 'park', 'museum', 'shop', 'other'];
    const locations = [];
    
    // Оригінальні 10 локацій
    const originalLocations = [
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
    ];
    
    locations.push(...originalLocations);
    
    // Генерація 2000 нових локацій
    const names = {
        food: ['Ресторан', 'Кафе', 'Піцерія', 'Бургерна', 'Кав\'ярня', 'Суші-бар', 'Столова'],
        park: ['Парк', 'Сквер', 'Сад', 'Алея', 'Роща'],
        museum: ['Музей', 'Галерея', 'Виставка', 'Центр'],
        shop: ['Магазин', 'Торговий центр', 'Супермаркет', 'Маркет', 'Бутік'],
        other: ['Будівля', 'Центр', 'Офіс', 'Установа', 'Об\'єкт']
    };
    
    for (let i = 11; i <= 2010; i++) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        const baseName = names[category][Math.floor(Math.random() * names[category].length)];
        
        const location = {
            id: i.toString(),
            name: `${baseName} №${i}`,
            description: `Опис для ${baseName.toLowerCase()} номер ${i}`,
            createdAt: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
            coords: {
                lat: parseFloat((50.3 + Math.random() * 0.4).toFixed(4)),
                lon: parseFloat((30.2 + Math.random() * 0.8).toFixed(4))
            },
            category: category
        };
        
        locations.push(location);
    }
    
    return locations;
}

// Генеруємо нові локації
const allLocations = generateLocations();

// Створюємо новий вміст файлу
const newFileContent = `const locations = ${JSON.stringify(allLocations, null, '\t')};

const getAllLocations = () => {
\treturn locations;
};

const getLocationById = (id) => {
\treturn locations.find(location => location.id === id);
};

const addLocation = (locationData) => {
\tconst maxId = Math.max(...locations.map(location => parseInt(location.id)));
\tconst newId = (maxId + 1).toString();
\t
\tconst newLocation = {
\t\tid: newId,
\t\tname: locationData.name,
\t\tdescription: locationData.description || '',
\t\tcreatedAt: new Date().toISOString(),
\t\tcoords: locationData.coords,
\t\tcategory: locationData.category
\t};
\t
\tlocations.push(newLocation);
\treturn newLocation;
};

const updateLocation = (id, locationData) => {
\tconst locationIndex = locations.findIndex(location => location.id === id);
\t
\tif (locationIndex === -1) {
\t\treturn null;
\t}
\t
\tlocations[locationIndex] = {
\t\t...locations[locationIndex],
\t\t...locationData,
\t\tid: id
\t};
\t
\treturn locations[locationIndex];
};

const deleteLocation = (id) => {
\tconst locationIndex = locations.findIndex(location => location.id === id);
\t
\tif (locationIndex === -1) {
\t\treturn null;
\t}
\t
\tconst deletedLocation = locations[locationIndex];
\tlocations.splice(locationIndex, 1);

\treturn deletedLocation;
};

module.exports = {
\tgetAllLocations,
\tgetLocationById,
\taddLocation,
\tupdateLocation,
\tdeleteLocation
};`;

// Записуємо новий файл
fs.writeFileSync('./src/models/location.model.js', newFileContent, 'utf8');

console.log(`✅ Успішно згенеровано ${allLocations.length} локацій!`);
console.log('📍 Оригінальних локацій: 10');
console.log('🎯 Нових тестових локацій: 2000');
console.log('📊 Загальна кількість: 2010');