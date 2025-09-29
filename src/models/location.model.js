const locations = [
	{
		"id": "1",
		"name": "Пузата Хата",
		"description": "Українська мережа ресторанів",
		"createdAt": "2024-01-15T10:00:00.000Z",
		"coords": {
			"lat": 50.4501,
			"lon": 30.5234
		},
		"category": "food",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Шевченківський",
		"settlement": "Київ"
	},
	{
		"id": "2",
		"name": "Парк Шевченка",
		"description": "Центральний парк Києва",
		"createdAt": "2024-01-16T09:30:00.000Z",
		"coords": {
			"lat": 50.4547,
			"lon": 30.5238
		},
		"category": "park",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Шевченківський",
		"settlement": "Київ"
	},
	{
		"id": "3",
		"name": "Національний музей історії України",
		"description": "Головний історичний музей країни",
		"createdAt": "2024-01-17T11:00:00.000Z",
		"coords": {
			"lat": 50.4465,
			"lon": 30.5238
		},
		"category": "museum",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Печерський",
		"settlement": "Київ"
	},
	{
		"id": "4",
		"name": "Глобус",
		"description": "Торговий центр",
		"createdAt": "2024-01-18T14:15:00.000Z",
		"coords": {
			"lat": 50.4431,
			"lon": 30.5189
		},
		"category": "shop",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Печерський",
		"settlement": "Київ"
	},
	{
		"id": "5",
		"name": "Мамина Паста",
		"description": "Італійська кухня",
		"createdAt": "2024-01-19T12:30:00.000Z",
		"coords": {
			"lat": 50.4412,
			"lon": 30.5167
		},
		"category": "food",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Печерський",
		"settlement": "Київ"
	},
	{
		"id": "6",
		"name": "Гідропарк",
		"description": "Парк відпочинку на Дніпрі",
		"createdAt": "2024-01-20T08:45:00.000Z",
		"coords": {
			"lat": 50.4667,
			"lon": 30.5833
		},
		"category": "park",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Дніпровський",
		"settlement": "Київ"
	},
	{
		"id": "7",
		"name": "Музей авіації",
		"description": "Державний музей авіації України",
		"createdAt": "2024-01-21T13:20:00.000Z",
		"coords": {
			"lat": 50.4019,
			"lon": 30.4525
		},
		"category": "museum",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Голосіївський",
		"settlement": "Київ"
	},
	{
		"id": "8",
		"name": "Silpo",
		"description": "Мережа супермаркетів",
		"createdAt": "2024-01-22T16:00:00.000Z",
		"coords": {
			"lat": 50.4475,
			"lon": 30.5216
		},
		"category": "shop",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Шевченківський",
		"settlement": "Київ"
	},
	{
		"id": "9",
		"name": "Золоті Ворота",
		"description": "Історична пам'ятка Києва",
		"createdAt": "2024-01-23T10:30:00.000Z",
		"coords": {
			"lat": 50.4484,
			"lon": 30.5131
		},
		"category": "other",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Шевченківський",
		"settlement": "Київ"
	},
	{
		"id": "10",
		"name": "McDonald's",
		"description": "Міжнародна мережа швидкого харчування",
		"createdAt": "2024-01-24T15:45:00.000Z",
		"coords": {
			"lat": 50.4462,
			"lon": 30.5186
		},
		"category": "food",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Шевченківський",
		"settlement": "Київ"
	},
	{
		"id": "11",
		"name": "Будівля №11",
		"description": "Опис для будівля номер 11",
		"createdAt": "2024-10-06T21:00:00.000Z",
		"coords": {
			"lat": 50.5967,
			"lon": 30.5785
		},
		"category": "other",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Дніпровський",
		"settlement": "Київ"
	},
	{
		"id": "12",
		"name": "Бургерна №12",
		"description": "Опис для бургерна номер 12",
		"createdAt": "2024-03-02T22:00:00.000Z",
		"coords": {
			"lat": 50.3105,
			"lon": 30.939
		},
		"category": "food",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "13",
		"name": "Центр №13",
		"description": "Опис для центр номер 13",
		"createdAt": "2024-04-10T21:00:00.000Z",
		"coords": {
			"lat": 50.4756,
			"lon": 30.7235
		},
		"category": "other",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Дарницький",
		"settlement": "Київ"
	},
	{
		"id": "14",
		"name": "Сквер №14",
		"description": "Опис для сквер номер 14",
		"createdAt": "2024-03-03T22:00:00.000Z",
		"coords": {
			"lat": 50.568,
			"lon": 30.395
		},
		"category": "park",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Подільський",
		"settlement": "Київ"
	},
	{
		"id": "15",
		"name": "Центр №15",
		"description": "Опис для центр номер 15",
		"createdAt": "2024-01-22T22:00:00.000Z",
		"coords": {
			"lat": 50.3963,
			"lon": 30.4544
		},
		"category": "other",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Голосіївський",
		"settlement": "Київ"
	},
	{
		"id": "16",
		"name": "Ресторан №16",
		"description": "Опис для ресторан номер 16",
		"createdAt": "2024-06-01T21:00:00.000Z",
		"coords": {
			"lat": 50.4147,
			"lon": 30.886
		},
		"category": "food",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "17",
		"name": "Галерея №17",
		"description": "Опис для галерея номер 17",
		"createdAt": "2024-09-04T21:00:00.000Z",
		"coords": {
			"lat": 50.3073,
			"lon": 30.8416
		},
		"category": "museum",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "18",
		"name": "Ресторан №18",
		"description": "Опис для ресторан номер 18",
		"createdAt": "2024-12-12T22:00:00.000Z",
		"coords": {
			"lat": 50.6633,
			"lon": 30.3911
		},
		"category": "food",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Подільський",
		"settlement": "Київ"
	},
	{
		"id": "19",
		"name": "Установа №19",
		"description": "Опис для установа номер 19",
		"createdAt": "2024-03-12T22:00:00.000Z",
		"coords": {
			"lat": 50.3072,
			"lon": 30.9781
		},
		"category": "other",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "20",
		"name": "Суші-бар №20",
		"description": "Опис для суші-бар номер 20",
		"createdAt": "2024-04-09T21:00:00.000Z",
		"coords": {
			"lat": 50.6173,
			"lon": 30.8914
		},
		"category": "food",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Броварський район",
		"district": "Деснянський",
		"settlement": "Бровари"
	},
	{
		"id": "21",
		"name": "Магазин №21",
		"description": "Опис для магазин номер 21",
		"createdAt": "2024-11-03T22:00:00.000Z",
		"coords": {
			"lat": 50.6141,
			"lon": 30.7587
		},
		"category": "shop",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Броварський район",
		"district": "Деснянський",
		"settlement": "Бровари"
	},
	{
		"id": "22",
		"name": "Піцерія №22",
		"description": "Опис для піцерія номер 22",
		"createdAt": "2024-09-20T21:00:00.000Z",
		"coords": {
			"lat": 50.6824,
			"lon": 30.8733
		},
		"category": "food",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Броварський район",
		"district": "Деснянський",
		"settlement": "Бровари"
	},
	{
		"id": "23",
		"name": "Музей №23",
		"description": "Опис для музей номер 23",
		"createdAt": "2024-11-19T22:00:00.000Z",
		"coords": {
			"lat": 50.4651,
			"lon": 30.9855
		},
		"category": "museum",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "24",
		"name": "Магазин №24",
		"description": "Опис для магазин номер 24",
		"createdAt": "2024-05-17T21:00:00.000Z",
		"coords": {
			"lat": 50.3225,
			"lon": 30.2468
		},
		"category": "shop",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Обухівський район",
		"district": "Голосіївський",
		"settlement": "Обухів"
	},
	{
		"id": "25",
		"name": "Виставка №25",
		"description": "Опис для виставка номер 25",
		"createdAt": "2024-10-05T21:00:00.000Z",
		"coords": {
			"lat": 50.3787,
			"lon": 30.897
		},
		"category": "museum",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "26",
		"name": "Торговий центр №26",
		"description": "Опис для торговий центр номер 26",
		"createdAt": "2024-10-13T21:00:00.000Z",
		"coords": {
			"lat": 50.3102,
			"lon": 30.8587
		},
		"category": "shop",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "27",
		"name": "Супермаркет №27",
		"description": "Опис для супермаркет номер 27",
		"createdAt": "2024-07-25T21:00:00.000Z",
		"coords": {
			"lat": 50.3354,
			"lon": 30.7585
		},
		"category": "shop",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "28",
		"name": "Центр №28",
		"description": "Опис для центр номер 28",
		"createdAt": "2024-10-19T21:00:00.000Z",
		"coords": {
			"lat": 50.4757,
			"lon": 30.8548
		},
		"category": "museum",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "29",
		"name": "Роща №29",
		"description": "Опис для роща номер 29",
		"createdAt": "2024-10-23T21:00:00.000Z",
		"coords": {
			"lat": 50.3918,
			"lon": 30.9516
		},
		"category": "park",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "30",
		"name": "Алея №30",
		"description": "Опис для алея номер 30",
		"createdAt": "2024-08-17T21:00:00.000Z",
		"coords": {
			"lat": 50.5994,
			"lon": 30.2253
		},
		"category": "park",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Подільський",
		"settlement": "Київ"
	},
	{
		"id": "31",
		"name": "Виставка №31",
		"description": "Опис для виставка номер 31",
		"createdAt": "2024-05-02T21:00:00.000Z",
		"coords": {
			"lat": 50.5005,
			"lon": 30.2125
		},
		"category": "museum",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Святошинський",
		"settlement": "Київ"
	},
	{
		"id": "32",
		"name": "Роща №32",
		"description": "Опис для роща номер 32",
		"createdAt": "2024-11-15T22:00:00.000Z",
		"coords": {
			"lat": 50.4614,
			"lon": 30.2603
		},
		"category": "park",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Святошинський",
		"settlement": "Київ"
	},
	{
		"id": "33",
		"name": "Виставка №33",
		"description": "Опис для виставка номер 33",
		"createdAt": "2024-10-03T21:00:00.000Z",
		"coords": {
			"lat": 50.3585,
			"lon": 30.2858
		},
		"category": "museum",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Обухівський район",
		"district": "Голосіївський",
		"settlement": "Обухів"
	},
	{
		"id": "34",
		"name": "Об'єкт №34",
		"description": "Опис для об'єкт номер 34",
		"createdAt": "2024-11-26T22:00:00.000Z",
		"coords": {
			"lat": 50.3337,
			"lon": 30.2557
		},
		"category": "other",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Обухівський район",
		"district": "Голосіївський",
		"settlement": "Обухів"
	},
	{
		"id": "35",
		"name": "Столова №35",
		"description": "Опис для столова номер 35",
		"createdAt": "2024-04-27T21:00:00.000Z",
		"coords": {
			"lat": 50.6655,
			"lon": 30.3329
		},
		"category": "food",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Подільський",
		"settlement": "Київ"
	},
	{
		"id": "36",
		"name": "Алея №36",
		"description": "Опис для алея номер 36",
		"createdAt": "2024-01-26T22:00:00.000Z",
		"coords": {
			"lat": 50.634,
			"lon": 30.7525
		},
		"category": "park",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Броварський район",
		"district": "Деснянський",
		"settlement": "Бровари"
	},
	{
		"id": "37",
		"name": "Кав'ярня №37",
		"description": "Опис для кав'ярня номер 37",
		"createdAt": "2024-03-04T22:00:00.000Z",
		"coords": {
			"lat": 50.4665,
			"lon": 30.3625
		},
		"category": "food",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Подільський",
		"settlement": "Київ"
	},
	{
		"id": "38",
		"name": "Алея №38",
		"description": "Опис для алея номер 38",
		"createdAt": "2024-05-17T21:00:00.000Z",
		"coords": {
			"lat": 50.5206,
			"lon": 30.3448
		},
		"category": "park",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Подільський",
		"settlement": "Київ"
	},
	{
		"id": "39",
		"name": "Сквер №39",
		"description": "Опис для сквер номер 39",
		"createdAt": "2024-07-04T21:00:00.000Z",
		"coords": {
			"lat": 50.3524,
			"lon": 30.6424
		},
		"category": "park",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Печерський",
		"settlement": "Київ"
	},
	{
		"id": "40",
		"name": "Галерея №40",
		"description": "Опис для галерея номер 40",
		"createdAt": "2024-07-27T21:00:00.000Z",
		"coords": {
			"lat": 50.6698,
			"lon": 30.7437
		},
		"category": "museum",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Броварський район",
		"district": "Деснянський",
		"settlement": "Бровари"
	},
	{
		"id": "41",
		"name": "Центр №41",
		"description": "Опис для центр номер 41",
		"createdAt": "2024-11-26T22:00:00.000Z",
		"coords": {
			"lat": 50.6743,
			"lon": 30.5508
		},
		"category": "other",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Деснянський",
		"settlement": "Київ"
	},
	{
		"id": "42",
		"name": "Магазин №42",
		"description": "Опис для магазин номер 42",
		"createdAt": "2024-07-24T21:00:00.000Z",
		"coords": {
			"lat": 50.527,
			"lon": 30.9745
		},
		"category": "shop",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "43",
		"name": "Сквер №43",
		"description": "Опис для сквер номер 43",
		"createdAt": "2024-07-11T21:00:00.000Z",
		"coords": {
			"lat": 50.4694,
			"lon": 30.7869
		},
		"category": "park",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "44",
		"name": "Центр №44",
		"description": "Опис для центр номер 44",
		"createdAt": "2024-04-03T21:00:00.000Z",
		"coords": {
			"lat": 50.5342,
			"lon": 30.6281
		},
		"category": "other",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Дніпровський",
		"settlement": "Київ"
	},
	{
		"id": "45",
		"name": "Установа №45",
		"description": "Опис для установа номер 45",
		"createdAt": "2024-03-06T22:00:00.000Z",
		"coords": {
			"lat": 50.3015,
			"lon": 30.7535
		},
		"category": "other",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "46",
		"name": "Магазин №46",
		"description": "Опис для магазин номер 46",
		"createdAt": "2024-12-13T22:00:00.000Z",
		"coords": {
			"lat": 50.5845,
			"lon": 30.7809
		},
		"category": "shop",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Броварський район",
		"district": "Деснянський",
		"settlement": "Бровари"
	},
	{
		"id": "47",
		"name": "Піцерія №47",
		"description": "Опис для піцерія номер 47",
		"createdAt": "2024-10-04T21:00:00.000Z",
		"coords": {
			"lat": 50.3098,
			"lon": 30.4972
		},
		"category": "food",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Голосіївський",
		"settlement": "Київ"
	},
	{
		"id": "48",
		"name": "Сквер №48",
		"description": "Опис для сквер номер 48",
		"createdAt": "2024-06-22T21:00:00.000Z",
		"coords": {
			"lat": 50.4993,
			"lon": 30.8435
		},
		"category": "park",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "49",
		"name": "Будівля №49",
		"description": "Опис для будівля номер 49",
		"createdAt": "2024-11-30T22:00:00.000Z",
		"coords": {
			"lat": 50.4493,
			"lon": 30.5283
		},
		"category": "other",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Шевченківський",
		"settlement": "Київ"
	},
	{
		"id": "50",
		"name": "Супермаркет №50",
		"description": "Опис для супермаркет номер 50",
		"createdAt": "2024-05-16T21:00:00.000Z",
		"coords": {
			"lat": 50.635,
			"lon": 30.802
		},
		"category": "shop",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Броварський район",
		"district": "Деснянський",
		"settlement": "Бровари"
	},
	{
		"id": "51",
		"name": "Сад №51",
		"description": "Опис для сад номер 51",
		"createdAt": "2024-11-21T22:00:00.000Z",
		"coords": {
			"lat": 50.4621,
			"lon": 30.9483
		},
		"category": "park",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "52",
		"name": "Офіс №52",
		"description": "Опис для офіс номер 52",
		"createdAt": "2024-10-27T22:00:00.000Z",
		"coords": {
			"lat": 50.4538,
			"lon": 30.9797
		},
		"category": "other",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "53",
		"name": "Об'єкт №53",
		"description": "Опис для об'єкт номер 53",
		"createdAt": "2024-06-12T21:00:00.000Z",
		"coords": {
			"lat": 50.3164,
			"lon": 30.6421
		},
		"category": "other",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Печерський",
		"settlement": "Київ"
	},
	{
		"id": "54",
		"name": "Парк №54",
		"description": "Опис для парк номер 54",
		"createdAt": "2024-04-09T21:00:00.000Z",
		"coords": {
			"lat": 50.5784,
			"lon": 30.5296
		},
		"category": "park",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Шевченківський",
		"settlement": "Київ"
	},
	{
		"id": "55",
		"name": "Супермаркет №55",
		"description": "Опис для супермаркет номер 55",
		"createdAt": "2024-12-24T22:00:00.000Z",
		"coords": {
			"lat": 50.5352,
			"lon": 30.3563
		},
		"category": "shop",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Подільський",
		"settlement": "Київ"
	},
	{
		"id": "56",
		"name": "Кав'ярня №56",
		"description": "Опис для кав'ярня номер 56",
		"createdAt": "2024-04-18T21:00:00.000Z",
		"coords": {
			"lat": 50.3364,
			"lon": 30.3453
		},
		"category": "food",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Обухівський район",
		"district": "Голосіївський",
		"settlement": "Обухів"
	},
	{
		"id": "57",
		"name": "Виставка №57",
		"description": "Опис для виставка номер 57",
		"createdAt": "2024-08-14T21:00:00.000Z",
		"coords": {
			"lat": 50.667,
			"lon": 30.6401
		},
		"category": "museum",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Деснянський",
		"settlement": "Київ"
	},
	{
		"id": "58",
		"name": "Центр №58",
		"description": "Опис для центр номер 58",
		"createdAt": "2024-02-29T22:00:00.000Z",
		"coords": {
			"lat": 50.6894,
			"lon": 30.7146
		},
		"category": "museum",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Броварський район",
		"district": "Деснянський",
		"settlement": "Бровари"
	},
	{
		"id": "59",
		"name": "Бургерна №59",
		"description": "Опис для бургерна номер 59",
		"createdAt": "2024-02-13T22:00:00.000Z",
		"coords": {
			"lat": 50.6942,
			"lon": 30.3835
		},
		"category": "food",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Подільський",
		"settlement": "Київ"
	},
	{
		"id": "60",
		"name": "Супермаркет №60",
		"description": "Опис для супермаркет номер 60",
		"createdAt": "2024-03-24T22:00:00.000Z",
		"coords": {
			"lat": 50.5402,
			"lon": 30.8519
		},
		"category": "shop",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "61",
		"name": "Галерея №61",
		"description": "Опис для галерея номер 61",
		"createdAt": "2024-10-09T21:00:00.000Z",
		"coords": {
			"lat": 50.5501,
			"lon": 30.7208
		},
		"category": "museum",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Броварський район",
		"district": "Деснянський",
		"settlement": "Бровари"
	},
	{
		"id": "62",
		"name": "Суші-бар №62",
		"description": "Опис для суші-бар номер 62",
		"createdAt": "2024-09-25T21:00:00.000Z",
		"coords": {
			"lat": 50.4318,
			"lon": 30.327
		},
		"category": "food",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Подільський",
		"settlement": "Київ"
	},
	{
		"id": "63",
		"name": "Центр №63",
		"description": "Опис для центр номер 63",
		"createdAt": "2024-10-04T21:00:00.000Z",
		"coords": {
			"lat": 50.4733,
			"lon": 30.2923
		},
		"category": "museum",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Святошинський",
		"settlement": "Київ"
	},
	{
		"id": "64",
		"name": "Бутік №64",
		"description": "Опис для бутік номер 64",
		"createdAt": "2024-08-04T21:00:00.000Z",
		"coords": {
			"lat": 50.6946,
			"lon": 30.7747
		},
		"category": "shop",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Броварський район",
		"district": "Деснянський",
		"settlement": "Бровари"
	},
	{
		"id": "65",
		"name": "Центр №65",
		"description": "Опис для центр номер 65",
		"createdAt": "2024-02-03T22:00:00.000Z",
		"coords": {
			"lat": 50.3582,
			"lon": 30.605
		},
		"category": "museum",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Печерський",
		"settlement": "Київ"
	},
	{
		"id": "66",
		"name": "Торговий центр №66",
		"description": "Опис для торговий центр номер 66",
		"createdAt": "2024-09-11T21:00:00.000Z",
		"coords": {
			"lat": 50.4511,
			"lon": 30.4111
		},
		"category": "shop",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Голосіївський",
		"settlement": "Київ"
	},
	{
		"id": "67",
		"name": "Сквер №67",
		"description": "Опис для сквер номер 67",
		"createdAt": "2024-11-04T22:00:00.000Z",
		"coords": {
			"lat": 50.4927,
			"lon": 30.6194
		},
		"category": "park",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Дніпровський",
		"settlement": "Київ"
	},
	{
		"id": "68",
		"name": "Галерея №68",
		"description": "Опис для галерея номер 68",
		"createdAt": "2024-03-01T22:00:00.000Z",
		"coords": {
			"lat": 50.5794,
			"lon": 30.9144
		},
		"category": "museum",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "69",
		"name": "Будівля №69",
		"description": "Опис для будівля номер 69",
		"createdAt": "2024-12-27T22:00:00.000Z",
		"coords": {
			"lat": 50.5474,
			"lon": 30.8247
		},
		"category": "other",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "70",
		"name": "Галерея №70",
		"description": "Опис для галерея номер 70",
		"createdAt": "2024-02-14T22:00:00.000Z",
		"coords": {
			"lat": 50.6347,
			"lon": 30.874
		},
		"category": "museum",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Броварський район",
		"district": "Деснянський",
		"settlement": "Бровари"
	},
	{
		"id": "71",
		"name": "Виставка №71",
		"description": "Опис для виставка номер 71",
		"createdAt": "2024-07-13T21:00:00.000Z",
		"coords": {
			"lat": 50.5079,
			"lon": 30.2815
		},
		"category": "museum",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Святошинський",
		"settlement": "Київ"
	},
	{
		"id": "72",
		"name": "Офіс №72",
		"description": "Опис для офіс номер 72",
		"createdAt": "2024-02-13T22:00:00.000Z",
		"coords": {
			"lat": 50.4898,
			"lon": 30.328
		},
		"category": "other",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Подільський",
		"settlement": "Київ"
	},
	{
		"id": "73",
		"name": "Суші-бар №73",
		"description": "Опис для суші-бар номер 73",
		"createdAt": "2024-06-12T21:00:00.000Z",
		"coords": {
			"lat": 50.4591,
			"lon": 30.9223
		},
		"category": "food",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "74",
		"name": "Сад №74",
		"description": "Опис для сад номер 74",
		"createdAt": "2024-02-09T22:00:00.000Z",
		"coords": {
			"lat": 50.547,
			"lon": 30.7887
		},
		"category": "park",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Броварський район",
		"district": "Деснянський",
		"settlement": "Бровари"
	},
	{
		"id": "75",
		"name": "Кафе №75",
		"description": "Опис для кафе номер 75",
		"createdAt": "2024-05-11T21:00:00.000Z",
		"coords": {
			"lat": 50.6807,
			"lon": 30.4171
		},
		"category": "food",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Подільський",
		"settlement": "Київ"
	},
	{
		"id": "76",
		"name": "Маркет №76",
		"description": "Опис для маркет номер 76",
		"createdAt": "2024-12-03T22:00:00.000Z",
		"coords": {
			"lat": 50.5249,
			"lon": 30.3668
		},
		"category": "shop",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Подільський",
		"settlement": "Київ"
	},
	{
		"id": "77",
		"name": "Галерея №77",
		"description": "Опис для галерея номер 77",
		"createdAt": "2024-02-16T22:00:00.000Z",
		"coords": {
			"lat": 50.382,
			"lon": 30.5707
		},
		"category": "museum",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Печерський",
		"settlement": "Київ"
	},
	{
		"id": "78",
		"name": "Піцерія №78",
		"description": "Опис для піцерія номер 78",
		"createdAt": "2024-10-04T21:00:00.000Z",
		"coords": {
			"lat": 50.3917,
			"lon": 30.9037
		},
		"category": "food",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "79",
		"name": "Виставка №79",
		"description": "Опис для виставка номер 79",
		"createdAt": "2024-05-26T21:00:00.000Z",
		"coords": {
			"lat": 50.6123,
			"lon": 30.6813
		},
		"category": "museum",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Деснянський",
		"settlement": "Київ"
	},
	{
		"id": "80",
		"name": "Центр №80",
		"description": "Опис для центр номер 80",
		"createdAt": "2024-12-18T22:00:00.000Z",
		"coords": {
			"lat": 50.5988,
			"lon": 30.7126
		},
		"category": "other",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Броварський район",
		"district": "Деснянський",
		"settlement": "Бровари"
	},
	{
		"id": "81",
		"name": "Офіс №81",
		"description": "Опис для офіс номер 81",
		"createdAt": "2024-08-24T21:00:00.000Z",
		"coords": {
			"lat": 50.6864,
			"lon": 30.8175
		},
		"category": "other",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Броварський район",
		"district": "Деснянський",
		"settlement": "Бровари"
	},
	{
		"id": "82",
		"name": "Столова №82",
		"description": "Опис для столова номер 82",
		"createdAt": "2024-02-27T22:00:00.000Z",
		"coords": {
			"lat": 50.6885,
			"lon": 30.2259
		},
		"category": "food",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Подільський",
		"settlement": "Київ"
	},
	{
		"id": "83",
		"name": "Кафе №83",
		"description": "Опис для кафе номер 83",
		"createdAt": "2024-05-01T21:00:00.000Z",
		"coords": {
			"lat": 50.3851,
			"lon": 30.9848
		},
		"category": "food",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "84",
		"name": "Офіс №84",
		"description": "Опис для офіс номер 84",
		"createdAt": "2024-11-05T22:00:00.000Z",
		"coords": {
			"lat": 50.5679,
			"lon": 30.4185
		},
		"category": "other",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Подільський",
		"settlement": "Київ"
	},
	{
		"id": "85",
		"name": "Піцерія №85",
		"description": "Опис для піцерія номер 85",
		"createdAt": "2024-01-04T22:00:00.000Z",
		"coords": {
			"lat": 50.3943,
			"lon": 30.3243
		},
		"category": "food",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Обухівський район",
		"district": "Голосіївський",
		"settlement": "Обухів"
	},
	{
		"id": "86",
		"name": "Роща №86",
		"description": "Опис для роща номер 86",
		"createdAt": "2024-08-10T21:00:00.000Z",
		"coords": {
			"lat": 50.5171,
			"lon": 30.5588
		},
		"category": "park",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Шевченківський",
		"settlement": "Київ"
	},
	{
		"id": "87",
		"name": "Роща №87",
		"description": "Опис для роща номер 87",
		"createdAt": "2024-05-01T21:00:00.000Z",
		"coords": {
			"lat": 50.526,
			"lon": 30.5638
		},
		"category": "park",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Шевченківський",
		"settlement": "Київ"
	},
	{
		"id": "88",
		"name": "Кав'ярня №88",
		"description": "Опис для кав'ярня номер 88",
		"createdAt": "2024-05-18T21:00:00.000Z",
		"coords": {
			"lat": 50.4903,
			"lon": 30.8882
		},
		"category": "food",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "89",
		"name": "Ресторан №89",
		"description": "Опис для ресторан номер 89",
		"createdAt": "2024-05-13T21:00:00.000Z",
		"coords": {
			"lat": 50.4928,
			"lon": 30.7417
		},
		"category": "food",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "90",
		"name": "Центр №90",
		"description": "Опис для центр номер 90",
		"createdAt": "2024-09-27T21:00:00.000Z",
		"coords": {
			"lat": 50.5447,
			"lon": 30.7395
		},
		"category": "other",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Броварський район",
		"district": "Деснянський",
		"settlement": "Бровари"
	},
	{
		"id": "91",
		"name": "Будівля №91",
		"description": "Опис для будівля номер 91",
		"createdAt": "2024-12-04T22:00:00.000Z",
		"coords": {
			"lat": 50.5582,
			"lon": 30.6317
		},
		"category": "other",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Дніпровський",
		"settlement": "Київ"
	},
	{
		"id": "92",
		"name": "Об'єкт №92",
		"description": "Опис для об'єкт номер 92",
		"createdAt": "2024-07-31T21:00:00.000Z",
		"coords": {
			"lat": 50.6317,
			"lon": 30.8211
		},
		"category": "other",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Броварський район",
		"district": "Деснянський",
		"settlement": "Бровари"
	},
	{
		"id": "93",
		"name": "Магазин №93",
		"description": "Опис для магазин номер 93",
		"createdAt": "2024-05-20T21:00:00.000Z",
		"coords": {
			"lat": 50.6264,
			"lon": 30.8111
		},
		"category": "shop",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Броварський район",
		"district": "Деснянський",
		"settlement": "Бровари"
	},
	{
		"id": "94",
		"name": "Офіс №94",
		"description": "Опис для офіс номер 94",
		"createdAt": "2024-01-21T22:00:00.000Z",
		"coords": {
			"lat": 50.5497,
			"lon": 30.7994
		},
		"category": "other",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Броварський район",
		"district": "Деснянський",
		"settlement": "Бровари"
	},
	{
		"id": "95",
		"name": "Алея №95",
		"description": "Опис для алея номер 95",
		"createdAt": "2024-06-30T21:00:00.000Z",
		"coords": {
			"lat": 50.3705,
			"lon": 30.4774
		},
		"category": "park",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Голосіївський",
		"settlement": "Київ"
	},
	{
		"id": "96",
		"name": "Центр №96",
		"description": "Опис для центр номер 96",
		"createdAt": "2024-03-22T22:00:00.000Z",
		"coords": {
			"lat": 50.5789,
			"lon": 30.9503
		},
		"category": "other",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "97",
		"name": "Об'єкт №97",
		"description": "Опис для об'єкт номер 97",
		"createdAt": "2024-04-21T21:00:00.000Z",
		"coords": {
			"lat": 50.5814,
			"lon": 30.8279
		},
		"category": "other",
		"addressType": "undefined",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "98",
		"name": "Бутік №98",
		"description": "Опис для бутік номер 98",
		"createdAt": "2024-09-04T21:00:00.000Z",
		"coords": {
			"lat": 50.5514,
			"lon": 30.5093
		},
		"category": "shop",
		"addressType": "live",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Шевченківський",
		"settlement": "Київ"
	},
	{
		"id": "99",
		"name": "Центр №99",
		"description": "Опис для центр номер 99",
		"createdAt": "2024-12-03T22:00:00.000Z",
		"coords": {
			"lat": 50.589,
			"lon": 30.9556
		},
		"category": "museum",
		"addressType": "work",
		"country": "Україна",
		"region": "Київська область",
		"area": "Бориспільський район",
		"district": "Дарницький",
		"settlement": "Бориспіль"
	},
	{
		"id": "100",
		"name": "Ресторан №100",
		"description": "Опис для ресторан номер 100",
		"createdAt": "2024-03-16T22:00:00.000Z",
		"coords": {
			"lat": 50.5106,
			"lon": 30.4786
		},
		"category": "food",
		"addressType": "registration",
		"country": "Україна",
		"region": "Київська область",
		"area": "Київський район",
		"district": "Голосіївський",
		"settlement": "Київ"
	}
];

const getAllLocations = () => {
	return locations;
};

const getLocationById = (id) => {
	return locations.find(location => location.id === id);
};

const addLocation = (locationData) => {
	const maxId = Math.max(...locations.map(location => parseInt(location.id)));
	const newId = (maxId + 1).toString();
	
	const newLocation = {
		id: newId,
		name: locationData.name,
		description: locationData.description || '',
		createdAt: new Date().toISOString(),
		coords: locationData.coords,
		category: locationData.category,
		addressType: locationData.addressType,
		country: locationData.country,
		region: locationData.region,
		area: locationData.area,
		district: locationData.district,
		settlement: locationData.settlement
	};
	
	locations.push(newLocation);
	return newLocation;
};

const updateLocation = (id, locationData) => {
	const locationIndex = locations.findIndex(location => location.id === id);
	
	if (locationIndex === -1) {
		return null;
	}
	
	locations[locationIndex] = {
		...locations[locationIndex],
		...locationData,
		id: id
	};
	
	return locations[locationIndex];
};

const deleteLocation = (id) => {
	const locationIndex = locations.findIndex(location => location.id === id);
	
	if (locationIndex === -1) {
		return null;
	}
	
	const deletedLocation = locations[locationIndex];
	locations.splice(locationIndex, 1);

	return deletedLocation;
};

module.exports = {
	getAllLocations,
	getLocationById,
	addLocation,
	updateLocation,
	deleteLocation
};