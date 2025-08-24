// Генерація тестових локацій
function generateTestLocations() {
    const categories = ['food', 'park', 'museum', 'shop', 'other'];
    const locations = [];
    
    // Додаємо оригінальні 10 локацій
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
    
    // Генеруємо 2000 нових локацій
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
            name: `${baseName} ${i}`,
            description: `Опис для ${baseName.toLowerCase()} ${i}`,
            createdAt: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
            coords: {
                lat: Math.round((50.3 + Math.random() * 0.4) * 10000) / 10000,
                lon: Math.round((30.2 + Math.random() * 0.8) * 10000) / 10000
            },
            category: category
        };
        
        locations.push(location);
    }
    
    return locations;
}

const allLocations = generateTestLocations();
console.log(JSON.stringify(allLocations, null, 2));