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
		"category": "food"
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
		"category": "park"
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
		"category": "museum"
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
		"category": "shop"
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
		"category": "food"
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
		"category": "park"
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
		"category": "museum"
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
		"category": "shop"
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
		"category": "other"
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
		"category": "food"
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
		"category": "other"
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
		"category": "food"
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
		"category": "other"
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
		"category": "park"
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
		"category": "other"
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
		"category": "food"
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
		"category": "museum"
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
		"category": "food"
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
		"category": "other"
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
		"category": "food"
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
		"category": "shop"
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
		"category": "food"
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
		"category": "museum"
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
		"category": "shop"
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
		"category": "museum"
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
		"category": "shop"
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
		"category": "shop"
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
		"category": "museum"
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
		"category": "park"
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
		"category": "park"
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
		"category": "museum"
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
		"category": "park"
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
		"category": "museum"
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
		"category": "other"
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
		"category": "food"
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
		"category": "park"
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
		"category": "food"
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
		"category": "park"
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
		"category": "park"
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
		"category": "museum"
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
		"category": "other"
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
		"category": "shop"
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
		"category": "park"
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
		"category": "other"
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
		"category": "other"
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
		"category": "shop"
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
		"category": "food"
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
		"category": "park"
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
		"category": "other"
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
		"category": "shop"
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
		"category": "park"
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
		"category": "other"
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
		"category": "other"
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
		"category": "park"
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
		"category": "shop"
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
		"category": "food"
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
		"category": "museum"
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
		"category": "museum"
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
		"category": "food"
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
		"category": "shop"
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
		"category": "museum"
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
		"category": "food"
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
		"category": "museum"
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
		"category": "shop"
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
		"category": "museum"
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
		"category": "shop"
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
		"category": "park"
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
		"category": "museum"
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
		"category": "other"
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
		"category": "museum"
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
		"category": "museum"
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
		"category": "other"
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
		"category": "food"
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
		"category": "park"
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
		"category": "food"
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
		"category": "shop"
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
		"category": "museum"
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
		"category": "food"
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
		"category": "museum"
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
		"category": "other"
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
		"category": "other"
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
		"category": "food"
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
		"category": "food"
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
		"category": "other"
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
		"category": "food"
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
		"category": "park"
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
		"category": "park"
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
		"category": "food"
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
		"category": "food"
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
		"category": "other"
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
		"category": "other"
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
		"category": "other"
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
		"category": "shop"
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
		"category": "other"
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
		"category": "park"
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
		"category": "other"
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
		"category": "other"
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
		"category": "shop"
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
		"category": "museum"
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
		"category": "food"
	},
	{
		"id": "101",
		"name": "Ресторан №101",
		"description": "Опис для ресторан номер 101",
		"createdAt": "2024-10-16T21:00:00.000Z",
		"coords": {
			"lat": 50.4176,
			"lon": 30.8285
		},
		"category": "food"
	},
	{
		"id": "102",
		"name": "Центр №102",
		"description": "Опис для центр номер 102",
		"createdAt": "2024-06-10T21:00:00.000Z",
		"coords": {
			"lat": 50.3751,
			"lon": 30.7318
		},
		"category": "other"
	},
	{
		"id": "103",
		"name": "Установа №103",
		"description": "Опис для установа номер 103",
		"createdAt": "2024-01-21T22:00:00.000Z",
		"coords": {
			"lat": 50.5245,
			"lon": 30.7373
		},
		"category": "other"
	},
	{
		"id": "104",
		"name": "Магазин №104",
		"description": "Опис для магазин номер 104",
		"createdAt": "2024-03-04T22:00:00.000Z",
		"coords": {
			"lat": 50.5352,
			"lon": 30.2733
		},
		"category": "shop"
	},
	{
		"id": "105",
		"name": "Парк №105",
		"description": "Опис для парк номер 105",
		"createdAt": "2024-01-08T22:00:00.000Z",
		"coords": {
			"lat": 50.5126,
			"lon": 30.3407
		},
		"category": "park"
	},
	{
		"id": "106",
		"name": "Кафе №106",
		"description": "Опис для кафе номер 106",
		"createdAt": "2024-11-11T22:00:00.000Z",
		"coords": {
			"lat": 50.5973,
			"lon": 30.7531
		},
		"category": "food"
	},
	{
		"id": "107",
		"name": "Виставка №107",
		"description": "Опис для виставка номер 107",
		"createdAt": "2024-01-23T22:00:00.000Z",
		"coords": {
			"lat": 50.3085,
			"lon": 30.7351
		},
		"category": "museum"
	},
	{
		"id": "108",
		"name": "Сквер №108",
		"description": "Опис для сквер номер 108",
		"createdAt": "2024-02-09T22:00:00.000Z",
		"coords": {
			"lat": 50.3862,
			"lon": 30.284
		},
		"category": "park"
	},
	{
		"id": "109",
		"name": "Сквер №109",
		"description": "Опис для сквер номер 109",
		"createdAt": "2024-04-07T21:00:00.000Z",
		"coords": {
			"lat": 50.6498,
			"lon": 30.6567
		},
		"category": "park"
	},
	{
		"id": "110",
		"name": "Об'єкт №110",
		"description": "Опис для об'єкт номер 110",
		"createdAt": "2024-04-20T21:00:00.000Z",
		"coords": {
			"lat": 50.5278,
			"lon": 30.833
		},
		"category": "other"
	},
	{
		"id": "111",
		"name": "Піцерія №111",
		"description": "Опис для піцерія номер 111",
		"createdAt": "2024-01-14T22:00:00.000Z",
		"coords": {
			"lat": 50.6988,
			"lon": 30.6285
		},
		"category": "food"
	},
	{
		"id": "112",
		"name": "Столова №112",
		"description": "Опис для столова номер 112",
		"createdAt": "2024-10-18T21:00:00.000Z",
		"coords": {
			"lat": 50.612,
			"lon": 30.6448
		},
		"category": "food"
	},
	{
		"id": "113",
		"name": "Магазин №113",
		"description": "Опис для магазин номер 113",
		"createdAt": "2024-12-17T22:00:00.000Z",
		"coords": {
			"lat": 50.4378,
			"lon": 30.9059
		},
		"category": "shop"
	},
	{
		"id": "114",
		"name": "Піцерія №114",
		"description": "Опис для піцерія номер 114",
		"createdAt": "2024-06-07T21:00:00.000Z",
		"coords": {
			"lat": 50.6137,
			"lon": 30.618
		},
		"category": "food"
	},
	{
		"id": "115",
		"name": "Бутік №115",
		"description": "Опис для бутік номер 115",
		"createdAt": "2024-02-14T22:00:00.000Z",
		"coords": {
			"lat": 50.4594,
			"lon": 30.6266
		},
		"category": "shop"
	},
	{
		"id": "116",
		"name": "Кав'ярня №116",
		"description": "Опис для кав'ярня номер 116",
		"createdAt": "2024-12-19T22:00:00.000Z",
		"coords": {
			"lat": 50.3201,
			"lon": 30.729
		},
		"category": "food"
	},
	{
		"id": "117",
		"name": "Столова №117",
		"description": "Опис для столова номер 117",
		"createdAt": "2024-03-17T22:00:00.000Z",
		"coords": {
			"lat": 50.6803,
			"lon": 30.9185
		},
		"category": "food"
	},
	{
		"id": "118",
		"name": "Виставка №118",
		"description": "Опис для виставка номер 118",
		"createdAt": "2024-01-09T22:00:00.000Z",
		"coords": {
			"lat": 50.583,
			"lon": 30.3361
		},
		"category": "museum"
	},
	{
		"id": "119",
		"name": "Сквер №119",
		"description": "Опис для сквер номер 119",
		"createdAt": "2024-10-14T21:00:00.000Z",
		"coords": {
			"lat": 50.5332,
			"lon": 30.9075
		},
		"category": "park"
	},
	{
		"id": "120",
		"name": "Алея №120",
		"description": "Опис для алея номер 120",
		"createdAt": "2024-11-07T22:00:00.000Z",
		"coords": {
			"lat": 50.419,
			"lon": 30.6363
		},
		"category": "park"
	},
	{
		"id": "121",
		"name": "Торговий центр №121",
		"description": "Опис для торговий центр номер 121",
		"createdAt": "2024-03-05T22:00:00.000Z",
		"coords": {
			"lat": 50.3173,
			"lon": 30.6843
		},
		"category": "shop"
	},
	{
		"id": "122",
		"name": "Музей №122",
		"description": "Опис для музей номер 122",
		"createdAt": "2024-03-01T22:00:00.000Z",
		"coords": {
			"lat": 50.446,
			"lon": 30.603
		},
		"category": "museum"
	},
	{
		"id": "123",
		"name": "Алея №123",
		"description": "Опис для алея номер 123",
		"createdAt": "2024-02-25T22:00:00.000Z",
		"coords": {
			"lat": 50.4788,
			"lon": 30.8645
		},
		"category": "park"
	},
	{
		"id": "124",
		"name": "Піцерія №124",
		"description": "Опис для піцерія номер 124",
		"createdAt": "2024-12-13T22:00:00.000Z",
		"coords": {
			"lat": 50.691,
			"lon": 30.8258
		},
		"category": "food"
	},
	{
		"id": "125",
		"name": "Виставка №125",
		"description": "Опис для виставка номер 125",
		"createdAt": "2024-10-31T22:00:00.000Z",
		"coords": {
			"lat": 50.6752,
			"lon": 30.6057
		},
		"category": "museum"
	},
	{
		"id": "126",
		"name": "Столова №126",
		"description": "Опис для столова номер 126",
		"createdAt": "2024-07-27T21:00:00.000Z",
		"coords": {
			"lat": 50.648,
			"lon": 30.8959
		},
		"category": "food"
	},
	{
		"id": "127",
		"name": "Галерея №127",
		"description": "Опис для галерея номер 127",
		"createdAt": "2024-11-16T22:00:00.000Z",
		"coords": {
			"lat": 50.4708,
			"lon": 30.627
		},
		"category": "museum"
	},
	{
		"id": "128",
		"name": "Музей №128",
		"description": "Опис для музей номер 128",
		"createdAt": "2024-08-07T21:00:00.000Z",
		"coords": {
			"lat": 50.676,
			"lon": 30.8116
		},
		"category": "museum"
	},
	{
		"id": "129",
		"name": "Виставка №129",
		"description": "Опис для виставка номер 129",
		"createdAt": "2024-03-27T22:00:00.000Z",
		"coords": {
			"lat": 50.4923,
			"lon": 30.9632
		},
		"category": "museum"
	},
	{
		"id": "130",
		"name": "Виставка №130",
		"description": "Опис для виставка номер 130",
		"createdAt": "2024-12-06T22:00:00.000Z",
		"coords": {
			"lat": 50.4863,
			"lon": 30.9705
		},
		"category": "museum"
	},
	{
		"id": "131",
		"name": "Суші-бар №131",
		"description": "Опис для суші-бар номер 131",
		"createdAt": "2024-02-13T22:00:00.000Z",
		"coords": {
			"lat": 50.4823,
			"lon": 30.7803
		},
		"category": "food"
	},
	{
		"id": "132",
		"name": "Роща №132",
		"description": "Опис для роща номер 132",
		"createdAt": "2024-11-02T22:00:00.000Z",
		"coords": {
			"lat": 50.6236,
			"lon": 30.5594
		},
		"category": "park"
	},
	{
		"id": "133",
		"name": "Сад №133",
		"description": "Опис для сад номер 133",
		"createdAt": "2024-03-10T22:00:00.000Z",
		"coords": {
			"lat": 50.5028,
			"lon": 30.7167
		},
		"category": "park"
	},
	{
		"id": "134",
		"name": "Бутік №134",
		"description": "Опис для бутік номер 134",
		"createdAt": "2024-12-26T22:00:00.000Z",
		"coords": {
			"lat": 50.5938,
			"lon": 30.4
		},
		"category": "shop"
	},
	{
		"id": "135",
		"name": "Виставка №135",
		"description": "Опис для виставка номер 135",
		"createdAt": "2024-10-15T21:00:00.000Z",
		"coords": {
			"lat": 50.5896,
			"lon": 30.4491
		},
		"category": "museum"
	},
	{
		"id": "136",
		"name": "Кав'ярня №136",
		"description": "Опис для кав'ярня номер 136",
		"createdAt": "2024-04-18T21:00:00.000Z",
		"coords": {
			"lat": 50.3257,
			"lon": 30.549
		},
		"category": "food"
	},
	{
		"id": "137",
		"name": "Об'єкт №137",
		"description": "Опис для об'єкт номер 137",
		"createdAt": "2024-02-10T22:00:00.000Z",
		"coords": {
			"lat": 50.4908,
			"lon": 30.7606
		},
		"category": "other"
	},
	{
		"id": "138",
		"name": "Сад №138",
		"description": "Опис для сад номер 138",
		"createdAt": "2024-09-17T21:00:00.000Z",
		"coords": {
			"lat": 50.3651,
			"lon": 30.9851
		},
		"category": "park"
	},
	{
		"id": "139",
		"name": "Центр №139",
		"description": "Опис для центр номер 139",
		"createdAt": "2024-06-18T21:00:00.000Z",
		"coords": {
			"lat": 50.6054,
			"lon": 30.2308
		},
		"category": "museum"
	},
	{
		"id": "140",
		"name": "Парк №140",
		"description": "Опис для парк номер 140",
		"createdAt": "2024-12-08T22:00:00.000Z",
		"coords": {
			"lat": 50.4029,
			"lon": 30.7529
		},
		"category": "park"
	},
	{
		"id": "141",
		"name": "Роща №141",
		"description": "Опис для роща номер 141",
		"createdAt": "2024-03-21T22:00:00.000Z",
		"coords": {
			"lat": 50.5767,
			"lon": 30.5948
		},
		"category": "park"
	},
	{
		"id": "142",
		"name": "Сад №142",
		"description": "Опис для сад номер 142",
		"createdAt": "2024-10-04T21:00:00.000Z",
		"coords": {
			"lat": 50.4076,
			"lon": 30.5474
		},
		"category": "park"
	},
	{
		"id": "143",
		"name": "Кафе №143",
		"description": "Опис для кафе номер 143",
		"createdAt": "2024-11-14T22:00:00.000Z",
		"coords": {
			"lat": 50.3616,
			"lon": 30.3822
		},
		"category": "food"
	},
	{
		"id": "144",
		"name": "Будівля №144",
		"description": "Опис для будівля номер 144",
		"createdAt": "2024-07-10T21:00:00.000Z",
		"coords": {
			"lat": 50.6619,
			"lon": 30.2865
		},
		"category": "other"
	},
	{
		"id": "145",
		"name": "Кав'ярня №145",
		"description": "Опис для кав'ярня номер 145",
		"createdAt": "2024-12-08T22:00:00.000Z",
		"coords": {
			"lat": 50.317,
			"lon": 30.6393
		},
		"category": "food"
	},
	{
		"id": "146",
		"name": "Сад №146",
		"description": "Опис для сад номер 146",
		"createdAt": "2024-07-27T21:00:00.000Z",
		"coords": {
			"lat": 50.4964,
			"lon": 30.6034
		},
		"category": "park"
	},
	{
		"id": "147",
		"name": "Бутік №147",
		"description": "Опис для бутік номер 147",
		"createdAt": "2024-05-19T21:00:00.000Z",
		"coords": {
			"lat": 50.3033,
			"lon": 30.8132
		},
		"category": "shop"
	},
	{
		"id": "148",
		"name": "Будівля №148",
		"description": "Опис для будівля номер 148",
		"createdAt": "2024-02-18T22:00:00.000Z",
		"coords": {
			"lat": 50.6108,
			"lon": 30.9666
		},
		"category": "other"
	},
	{
		"id": "149",
		"name": "Піцерія №149",
		"description": "Опис для піцерія номер 149",
		"createdAt": "2024-09-11T21:00:00.000Z",
		"coords": {
			"lat": 50.4998,
			"lon": 30.4446
		},
		"category": "food"
	},
	{
		"id": "150",
		"name": "Кав'ярня №150",
		"description": "Опис для кав'ярня номер 150",
		"createdAt": "2024-07-01T21:00:00.000Z",
		"coords": {
			"lat": 50.372,
			"lon": 30.6817
		},
		"category": "food"
	},
	{
		"id": "151",
		"name": "Маркет №151",
		"description": "Опис для маркет номер 151",
		"createdAt": "2024-04-01T21:00:00.000Z",
		"coords": {
			"lat": 50.3351,
			"lon": 30.4409
		},
		"category": "shop"
	},
	{
		"id": "152",
		"name": "Алея №152",
		"description": "Опис для алея номер 152",
		"createdAt": "2024-05-11T21:00:00.000Z",
		"coords": {
			"lat": 50.5397,
			"lon": 30.7596
		},
		"category": "park"
	},
	{
		"id": "153",
		"name": "Піцерія №153",
		"description": "Опис для піцерія номер 153",
		"createdAt": "2024-02-13T22:00:00.000Z",
		"coords": {
			"lat": 50.3501,
			"lon": 30.2681
		},
		"category": "food"
	},
	{
		"id": "154",
		"name": "Магазин №154",
		"description": "Опис для магазин номер 154",
		"createdAt": "2024-06-27T21:00:00.000Z",
		"coords": {
			"lat": 50.3853,
			"lon": 30.4675
		},
		"category": "shop"
	},
	{
		"id": "155",
		"name": "Будівля №155",
		"description": "Опис для будівля номер 155",
		"createdAt": "2024-08-21T21:00:00.000Z",
		"coords": {
			"lat": 50.6683,
			"lon": 30.573
		},
		"category": "other"
	},
	{
		"id": "156",
		"name": "Виставка №156",
		"description": "Опис для виставка номер 156",
		"createdAt": "2024-11-16T22:00:00.000Z",
		"coords": {
			"lat": 50.6408,
			"lon": 30.4019
		},
		"category": "museum"
	},
	{
		"id": "157",
		"name": "Столова №157",
		"description": "Опис для столова номер 157",
		"createdAt": "2024-12-20T22:00:00.000Z",
		"coords": {
			"lat": 50.6047,
			"lon": 30.4859
		},
		"category": "food"
	},
	{
		"id": "158",
		"name": "Парк №158",
		"description": "Опис для парк номер 158",
		"createdAt": "2024-03-22T22:00:00.000Z",
		"coords": {
			"lat": 50.4817,
			"lon": 30.7007
		},
		"category": "park"
	},
	{
		"id": "159",
		"name": "Центр №159",
		"description": "Опис для центр номер 159",
		"createdAt": "2024-09-27T21:00:00.000Z",
		"coords": {
			"lat": 50.6903,
			"lon": 30.5014
		},
		"category": "museum"
	},
	{
		"id": "160",
		"name": "Піцерія №160",
		"description": "Опис для піцерія номер 160",
		"createdAt": "2024-11-23T22:00:00.000Z",
		"coords": {
			"lat": 50.5595,
			"lon": 30.6043
		},
		"category": "food"
	},
	{
		"id": "161",
		"name": "Кав'ярня №161",
		"description": "Опис для кав'ярня номер 161",
		"createdAt": "2024-05-23T21:00:00.000Z",
		"coords": {
			"lat": 50.5858,
			"lon": 30.942
		},
		"category": "food"
	},
	{
		"id": "162",
		"name": "Музей №162",
		"description": "Опис для музей номер 162",
		"createdAt": "2024-04-05T21:00:00.000Z",
		"coords": {
			"lat": 50.3194,
			"lon": 30.4054
		},
		"category": "museum"
	},
	{
		"id": "163",
		"name": "Галерея №163",
		"description": "Опис для галерея номер 163",
		"createdAt": "2024-08-23T21:00:00.000Z",
		"coords": {
			"lat": 50.5569,
			"lon": 30.261
		},
		"category": "museum"
	},
	{
		"id": "164",
		"name": "Будівля №164",
		"description": "Опис для будівля номер 164",
		"createdAt": "2024-10-15T21:00:00.000Z",
		"coords": {
			"lat": 50.4079,
			"lon": 30.4409
		},
		"category": "other"
	},
	{
		"id": "165",
		"name": "Виставка №165",
		"description": "Опис для виставка номер 165",
		"createdAt": "2024-05-10T21:00:00.000Z",
		"coords": {
			"lat": 50.3978,
			"lon": 30.5857
		},
		"category": "museum"
	},
	{
		"id": "166",
		"name": "Парк №166",
		"description": "Опис для парк номер 166",
		"createdAt": "2024-02-11T22:00:00.000Z",
		"coords": {
			"lat": 50.4069,
			"lon": 30.6337
		},
		"category": "park"
	},
	{
		"id": "167",
		"name": "Магазин №167",
		"description": "Опис для магазин номер 167",
		"createdAt": "2024-10-27T22:00:00.000Z",
		"coords": {
			"lat": 50.339,
			"lon": 30.8993
		},
		"category": "shop"
	},
	{
		"id": "168",
		"name": "Столова №168",
		"description": "Опис для столова номер 168",
		"createdAt": "2024-02-04T22:00:00.000Z",
		"coords": {
			"lat": 50.3983,
			"lon": 30.4579
		},
		"category": "food"
	},
	{
		"id": "169",
		"name": "Ресторан №169",
		"description": "Опис для ресторан номер 169",
		"createdAt": "2024-08-20T21:00:00.000Z",
		"coords": {
			"lat": 50.3368,
			"lon": 30.9093
		},
		"category": "food"
	},
	{
		"id": "170",
		"name": "Об'єкт №170",
		"description": "Опис для об'єкт номер 170",
		"createdAt": "2024-07-06T21:00:00.000Z",
		"coords": {
			"lat": 50.4997,
			"lon": 30.7803
		},
		"category": "other"
	},
	{
		"id": "171",
		"name": "Центр №171",
		"description": "Опис для центр номер 171",
		"createdAt": "2024-08-01T21:00:00.000Z",
		"coords": {
			"lat": 50.3646,
			"lon": 30.7271
		},
		"category": "other"
	},
	{
		"id": "172",
		"name": "Сквер №172",
		"description": "Опис для сквер номер 172",
		"createdAt": "2024-10-31T22:00:00.000Z",
		"coords": {
			"lat": 50.5031,
			"lon": 30.6761
		},
		"category": "park"
	},
	{
		"id": "173",
		"name": "Маркет №173",
		"description": "Опис для маркет номер 173",
		"createdAt": "2024-02-25T22:00:00.000Z",
		"coords": {
			"lat": 50.319,
			"lon": 30.7185
		},
		"category": "shop"
	},
	{
		"id": "174",
		"name": "Магазин №174",
		"description": "Опис для магазин номер 174",
		"createdAt": "2024-04-23T21:00:00.000Z",
		"coords": {
			"lat": 50.5016,
			"lon": 30.2083
		},
		"category": "shop"
	},
	{
		"id": "175",
		"name": "Будівля №175",
		"description": "Опис для будівля номер 175",
		"createdAt": "2024-01-08T22:00:00.000Z",
		"coords": {
			"lat": 50.6861,
			"lon": 30.9081
		},
		"category": "other"
	},
	{
		"id": "176",
		"name": "Алея №176",
		"description": "Опис для алея номер 176",
		"createdAt": "2024-09-08T21:00:00.000Z",
		"coords": {
			"lat": 50.5877,
			"lon": 30.2915
		},
		"category": "park"
	},
	{
		"id": "177",
		"name": "Сквер №177",
		"description": "Опис для сквер номер 177",
		"createdAt": "2024-11-03T22:00:00.000Z",
		"coords": {
			"lat": 50.3204,
			"lon": 30.9071
		},
		"category": "park"
	},
	{
		"id": "178",
		"name": "Торговий центр №178",
		"description": "Опис для торговий центр номер 178",
		"createdAt": "2024-05-25T21:00:00.000Z",
		"coords": {
			"lat": 50.6036,
			"lon": 30.577
		},
		"category": "shop"
	},
	{
		"id": "179",
		"name": "Кафе №179",
		"description": "Опис для кафе номер 179",
		"createdAt": "2024-08-25T21:00:00.000Z",
		"coords": {
			"lat": 50.3373,
			"lon": 30.3107
		},
		"category": "food"
	},
	{
		"id": "180",
		"name": "Супермаркет №180",
		"description": "Опис для супермаркет номер 180",
		"createdAt": "2024-01-18T22:00:00.000Z",
		"coords": {
			"lat": 50.4396,
			"lon": 30.7623
		},
		"category": "shop"
	},
	{
		"id": "181",
		"name": "Бутік №181",
		"description": "Опис для бутік номер 181",
		"createdAt": "2024-09-07T21:00:00.000Z",
		"coords": {
			"lat": 50.5008,
			"lon": 30.55
		},
		"category": "shop"
	},
	{
		"id": "182",
		"name": "Центр №182",
		"description": "Опис для центр номер 182",
		"createdAt": "2024-03-19T22:00:00.000Z",
		"coords": {
			"lat": 50.3566,
			"lon": 30.2026
		},
		"category": "museum"
	},
	{
		"id": "183",
		"name": "Роща №183",
		"description": "Опис для роща номер 183",
		"createdAt": "2024-01-20T22:00:00.000Z",
		"coords": {
			"lat": 50.6967,
			"lon": 30.5382
		},
		"category": "park"
	},
	{
		"id": "184",
		"name": "Центр №184",
		"description": "Опис для центр номер 184",
		"createdAt": "2024-09-18T21:00:00.000Z",
		"coords": {
			"lat": 50.6534,
			"lon": 30.3788
		},
		"category": "other"
	},
	{
		"id": "185",
		"name": "Магазин №185",
		"description": "Опис для магазин номер 185",
		"createdAt": "2024-08-16T21:00:00.000Z",
		"coords": {
			"lat": 50.6499,
			"lon": 30.6525
		},
		"category": "shop"
	},
	{
		"id": "186",
		"name": "Установа №186",
		"description": "Опис для установа номер 186",
		"createdAt": "2024-01-18T22:00:00.000Z",
		"coords": {
			"lat": 50.5803,
			"lon": 30.3137
		},
		"category": "other"
	},
	{
		"id": "187",
		"name": "Алея №187",
		"description": "Опис для алея номер 187",
		"createdAt": "2024-04-03T21:00:00.000Z",
		"coords": {
			"lat": 50.3058,
			"lon": 30.5257
		},
		"category": "park"
	},
	{
		"id": "188",
		"name": "Роща №188",
		"description": "Опис для роща номер 188",
		"createdAt": "2024-11-07T22:00:00.000Z",
		"coords": {
			"lat": 50.4694,
			"lon": 30.9479
		},
		"category": "park"
	},
	{
		"id": "189",
		"name": "Алея №189",
		"description": "Опис для алея номер 189",
		"createdAt": "2024-07-02T21:00:00.000Z",
		"coords": {
			"lat": 50.6331,
			"lon": 30.5391
		},
		"category": "park"
	},
	{
		"id": "190",
		"name": "Центр №190",
		"description": "Опис для центр номер 190",
		"createdAt": "2024-07-15T21:00:00.000Z",
		"coords": {
			"lat": 50.4484,
			"lon": 30.7874
		},
		"category": "other"
	},
	{
		"id": "191",
		"name": "Магазин №191",
		"description": "Опис для магазин номер 191",
		"createdAt": "2024-01-24T22:00:00.000Z",
		"coords": {
			"lat": 50.5867,
			"lon": 30.8741
		},
		"category": "shop"
	},
	{
		"id": "192",
		"name": "Сад №192",
		"description": "Опис для сад номер 192",
		"createdAt": "2024-12-26T22:00:00.000Z",
		"coords": {
			"lat": 50.333,
			"lon": 30.5149
		},
		"category": "park"
	},
	{
		"id": "193",
		"name": "Офіс №193",
		"description": "Опис для офіс номер 193",
		"createdAt": "2024-05-16T21:00:00.000Z",
		"coords": {
			"lat": 50.5135,
			"lon": 30.258
		},
		"category": "other"
	},
	{
		"id": "194",
		"name": "Будівля №194",
		"description": "Опис для будівля номер 194",
		"createdAt": "2024-05-19T21:00:00.000Z",
		"coords": {
			"lat": 50.5889,
			"lon": 30.5795
		},
		"category": "other"
	},
	{
		"id": "195",
		"name": "Супермаркет №195",
		"description": "Опис для супермаркет номер 195",
		"createdAt": "2024-02-06T22:00:00.000Z",
		"coords": {
			"lat": 50.4198,
			"lon": 30.3758
		},
		"category": "shop"
	},
	{
		"id": "196",
		"name": "Центр №196",
		"description": "Опис для центр номер 196",
		"createdAt": "2024-01-19T22:00:00.000Z",
		"coords": {
			"lat": 50.5315,
			"lon": 30.465
		},
		"category": "other"
	},
	{
		"id": "197",
		"name": "Алея №197",
		"description": "Опис для алея номер 197",
		"createdAt": "2024-05-06T21:00:00.000Z",
		"coords": {
			"lat": 50.4321,
			"lon": 30.3835
		},
		"category": "park"
	},
	{
		"id": "198",
		"name": "Магазин №198",
		"description": "Опис для магазин номер 198",
		"createdAt": "2024-11-17T22:00:00.000Z",
		"coords": {
			"lat": 50.4125,
			"lon": 30.6071
		},
		"category": "shop"
	},
	{
		"id": "199",
		"name": "Виставка №199",
		"description": "Опис для виставка номер 199",
		"createdAt": "2024-09-15T21:00:00.000Z",
		"coords": {
			"lat": 50.3707,
			"lon": 30.7284
		},
		"category": "museum"
	},
	{
		"id": "200",
		"name": "Будівля №200",
		"description": "Опис для будівля номер 200",
		"createdAt": "2024-05-20T21:00:00.000Z",
		"coords": {
			"lat": 50.3813,
			"lon": 30.2779
		},
		"category": "other"
	},
	{
		"id": "201",
		"name": "Сад №201",
		"description": "Опис для сад номер 201",
		"createdAt": "2024-12-22T22:00:00.000Z",
		"coords": {
			"lat": 50.5652,
			"lon": 30.7191
		},
		"category": "park"
	},
	{
		"id": "202",
		"name": "Виставка №202",
		"description": "Опис для виставка номер 202",
		"createdAt": "2024-03-17T22:00:00.000Z",
		"coords": {
			"lat": 50.4606,
			"lon": 30.5253
		},
		"category": "museum"
	},
	{
		"id": "203",
		"name": "Кафе №203",
		"description": "Опис для кафе номер 203",
		"createdAt": "2024-11-09T22:00:00.000Z",
		"coords": {
			"lat": 50.575,
			"lon": 30.7169
		},
		"category": "food"
	},
	{
		"id": "204",
		"name": "Установа №204",
		"description": "Опис для установа номер 204",
		"createdAt": "2024-07-23T21:00:00.000Z",
		"coords": {
			"lat": 50.654,
			"lon": 30.4516
		},
		"category": "other"
	},
	{
		"id": "205",
		"name": "Ресторан №205",
		"description": "Опис для ресторан номер 205",
		"createdAt": "2024-02-06T22:00:00.000Z",
		"coords": {
			"lat": 50.6279,
			"lon": 30.7265
		},
		"category": "food"
	},
	{
		"id": "206",
		"name": "Магазин №206",
		"description": "Опис для магазин номер 206",
		"createdAt": "2024-11-08T22:00:00.000Z",
		"coords": {
			"lat": 50.5392,
			"lon": 30.7792
		},
		"category": "shop"
	},
	{
		"id": "207",
		"name": "Роща №207",
		"description": "Опис для роща номер 207",
		"createdAt": "2024-06-15T21:00:00.000Z",
		"coords": {
			"lat": 50.6461,
			"lon": 30.3082
		},
		"category": "park"
	},
	{
		"id": "208",
		"name": "Кафе №208",
		"description": "Опис для кафе номер 208",
		"createdAt": "2024-02-27T22:00:00.000Z",
		"coords": {
			"lat": 50.6342,
			"lon": 30.3944
		},
		"category": "food"
	},
	{
		"id": "209",
		"name": "Кав'ярня №209",
		"description": "Опис для кав'ярня номер 209",
		"createdAt": "2024-06-01T21:00:00.000Z",
		"coords": {
			"lat": 50.3244,
			"lon": 30.8867
		},
		"category": "food"
	},
	{
		"id": "210",
		"name": "Роща №210",
		"description": "Опис для роща номер 210",
		"createdAt": "2024-08-24T21:00:00.000Z",
		"coords": {
			"lat": 50.3079,
			"lon": 30.2964
		},
		"category": "park"
	},
	{
		"id": "211",
		"name": "Виставка №211",
		"description": "Опис для виставка номер 211",
		"createdAt": "2024-05-11T21:00:00.000Z",
		"coords": {
			"lat": 50.3454,
			"lon": 30.7035
		},
		"category": "museum"
	},
	{
		"id": "212",
		"name": "Офіс №212",
		"description": "Опис для офіс номер 212",
		"createdAt": "2024-02-11T22:00:00.000Z",
		"coords": {
			"lat": 50.4231,
			"lon": 30.7898
		},
		"category": "other"
	},
	{
		"id": "213",
		"name": "Торговий центр №213",
		"description": "Опис для торговий центр номер 213",
		"createdAt": "2024-04-25T21:00:00.000Z",
		"coords": {
			"lat": 50.6387,
			"lon": 30.2487
		},
		"category": "shop"
	},
	{
		"id": "214",
		"name": "Бутік №214",
		"description": "Опис для бутік номер 214",
		"createdAt": "2024-12-23T22:00:00.000Z",
		"coords": {
			"lat": 50.6382,
			"lon": 30.7556
		},
		"category": "shop"
	},
	{
		"id": "215",
		"name": "Кав'ярня №215",
		"description": "Опис для кав'ярня номер 215",
		"createdAt": "2024-03-05T22:00:00.000Z",
		"coords": {
			"lat": 50.6737,
			"lon": 30.9785
		},
		"category": "food"
	},
	{
		"id": "216",
		"name": "Галерея №216",
		"description": "Опис для галерея номер 216",
		"createdAt": "2024-03-20T22:00:00.000Z",
		"coords": {
			"lat": 50.3405,
			"lon": 30.4504
		},
		"category": "museum"
	},
	{
		"id": "217",
		"name": "Виставка №217",
		"description": "Опис для виставка номер 217",
		"createdAt": "2024-10-23T21:00:00.000Z",
		"coords": {
			"lat": 50.6055,
			"lon": 30.4728
		},
		"category": "museum"
	},
	{
		"id": "218",
		"name": "Роща №218",
		"description": "Опис для роща номер 218",
		"createdAt": "2024-03-16T22:00:00.000Z",
		"coords": {
			"lat": 50.5106,
			"lon": 30.6763
		},
		"category": "park"
	},
	{
		"id": "219",
		"name": "Музей №219",
		"description": "Опис для музей номер 219",
		"createdAt": "2024-08-08T21:00:00.000Z",
		"coords": {
			"lat": 50.4252,
			"lon": 30.8792
		},
		"category": "museum"
	},
	{
		"id": "220",
		"name": "Торговий центр №220",
		"description": "Опис для торговий центр номер 220",
		"createdAt": "2024-03-09T22:00:00.000Z",
		"coords": {
			"lat": 50.545,
			"lon": 30.4251
		},
		"category": "shop"
	},
	{
		"id": "221",
		"name": "Супермаркет №221",
		"description": "Опис для супермаркет номер 221",
		"createdAt": "2024-03-15T22:00:00.000Z",
		"coords": {
			"lat": 50.3855,
			"lon": 30.3957
		},
		"category": "shop"
	},
	{
		"id": "222",
		"name": "Будівля №222",
		"description": "Опис для будівля номер 222",
		"createdAt": "2024-09-12T21:00:00.000Z",
		"coords": {
			"lat": 50.6872,
			"lon": 30.7756
		},
		"category": "other"
	},
	{
		"id": "223",
		"name": "Піцерія №223",
		"description": "Опис для піцерія номер 223",
		"createdAt": "2024-08-13T21:00:00.000Z",
		"coords": {
			"lat": 50.6259,
			"lon": 30.5602
		},
		"category": "food"
	},
	{
		"id": "224",
		"name": "Музей №224",
		"description": "Опис для музей номер 224",
		"createdAt": "2024-05-01T21:00:00.000Z",
		"coords": {
			"lat": 50.6016,
			"lon": 30.6635
		},
		"category": "museum"
	},
	{
		"id": "225",
		"name": "Суші-бар №225",
		"description": "Опис для суші-бар номер 225",
		"createdAt": "2024-01-24T22:00:00.000Z",
		"coords": {
			"lat": 50.5585,
			"lon": 30.5675
		},
		"category": "food"
	},
	{
		"id": "226",
		"name": "Галерея №226",
		"description": "Опис для галерея номер 226",
		"createdAt": "2024-11-06T22:00:00.000Z",
		"coords": {
			"lat": 50.3303,
			"lon": 30.8832
		},
		"category": "museum"
	},
	{
		"id": "227",
		"name": "Сад №227",
		"description": "Опис для сад номер 227",
		"createdAt": "2024-08-17T21:00:00.000Z",
		"coords": {
			"lat": 50.654,
			"lon": 30.8778
		},
		"category": "park"
	},
	{
		"id": "228",
		"name": "Супермаркет №228",
		"description": "Опис для супермаркет номер 228",
		"createdAt": "2024-05-03T21:00:00.000Z",
		"coords": {
			"lat": 50.3454,
			"lon": 30.8174
		},
		"category": "shop"
	},
	{
		"id": "229",
		"name": "Алея №229",
		"description": "Опис для алея номер 229",
		"createdAt": "2024-08-14T21:00:00.000Z",
		"coords": {
			"lat": 50.3643,
			"lon": 30.6303
		},
		"category": "park"
	},
	{
		"id": "230",
		"name": "Піцерія №230",
		"description": "Опис для піцерія номер 230",
		"createdAt": "2024-09-03T21:00:00.000Z",
		"coords": {
			"lat": 50.4902,
			"lon": 30.2683
		},
		"category": "food"
	},
	{
		"id": "231",
		"name": "Центр №231",
		"description": "Опис для центр номер 231",
		"createdAt": "2024-05-16T21:00:00.000Z",
		"coords": {
			"lat": 50.476,
			"lon": 30.5675
		},
		"category": "other"
	},
	{
		"id": "232",
		"name": "Музей №232",
		"description": "Опис для музей номер 232",
		"createdAt": "2024-06-16T21:00:00.000Z",
		"coords": {
			"lat": 50.5003,
			"lon": 30.9069
		},
		"category": "museum"
	},
	{
		"id": "233",
		"name": "Кафе №233",
		"description": "Опис для кафе номер 233",
		"createdAt": "2024-04-11T21:00:00.000Z",
		"coords": {
			"lat": 50.6536,
			"lon": 30.9259
		},
		"category": "food"
	},
	{
		"id": "234",
		"name": "Сквер №234",
		"description": "Опис для сквер номер 234",
		"createdAt": "2024-10-04T21:00:00.000Z",
		"coords": {
			"lat": 50.302,
			"lon": 30.3912
		},
		"category": "park"
	},
	{
		"id": "235",
		"name": "Парк №235",
		"description": "Опис для парк номер 235",
		"createdAt": "2024-09-16T21:00:00.000Z",
		"coords": {
			"lat": 50.3168,
			"lon": 30.7237
		},
		"category": "park"
	},
	{
		"id": "236",
		"name": "Сад №236",
		"description": "Опис для сад номер 236",
		"createdAt": "2024-10-10T21:00:00.000Z",
		"coords": {
			"lat": 50.3237,
			"lon": 30.4853
		},
		"category": "park"
	},
	{
		"id": "237",
		"name": "Будівля №237",
		"description": "Опис для будівля номер 237",
		"createdAt": "2024-12-16T22:00:00.000Z",
		"coords": {
			"lat": 50.6826,
			"lon": 30.6998
		},
		"category": "other"
	},
	{
		"id": "238",
		"name": "Виставка №238",
		"description": "Опис для виставка номер 238",
		"createdAt": "2024-06-22T21:00:00.000Z",
		"coords": {
			"lat": 50.4256,
			"lon": 30.2756
		},
		"category": "museum"
	},
	{
		"id": "239",
		"name": "Центр №239",
		"description": "Опис для центр номер 239",
		"createdAt": "2024-02-05T22:00:00.000Z",
		"coords": {
			"lat": 50.6595,
			"lon": 30.6537
		},
		"category": "other"
	},
	{
		"id": "240",
		"name": "Роща №240",
		"description": "Опис для роща номер 240",
		"createdAt": "2024-11-26T22:00:00.000Z",
		"coords": {
			"lat": 50.6777,
			"lon": 30.6972
		},
		"category": "park"
	},
	{
		"id": "241",
		"name": "Алея №241",
		"description": "Опис для алея номер 241",
		"createdAt": "2024-06-05T21:00:00.000Z",
		"coords": {
			"lat": 50.4174,
			"lon": 30.3145
		},
		"category": "park"
	},
	{
		"id": "242",
		"name": "Парк №242",
		"description": "Опис для парк номер 242",
		"createdAt": "2024-12-05T22:00:00.000Z",
		"coords": {
			"lat": 50.4965,
			"lon": 30.3214
		},
		"category": "park"
	},
	{
		"id": "243",
		"name": "Магазин №243",
		"description": "Опис для магазин номер 243",
		"createdAt": "2024-04-04T21:00:00.000Z",
		"coords": {
			"lat": 50.474,
			"lon": 30.7974
		},
		"category": "shop"
	},
	{
		"id": "244",
		"name": "Кафе №244",
		"description": "Опис для кафе номер 244",
		"createdAt": "2024-05-16T21:00:00.000Z",
		"coords": {
			"lat": 50.5613,
			"lon": 30.5053
		},
		"category": "food"
	},
	{
		"id": "245",
		"name": "Роща №245",
		"description": "Опис для роща номер 245",
		"createdAt": "2024-01-24T22:00:00.000Z",
		"coords": {
			"lat": 50.3373,
			"lon": 30.8026
		},
		"category": "park"
	},
	{
		"id": "246",
		"name": "Офіс №246",
		"description": "Опис для офіс номер 246",
		"createdAt": "2024-12-17T22:00:00.000Z",
		"coords": {
			"lat": 50.4619,
			"lon": 30.7664
		},
		"category": "other"
	},
	{
		"id": "247",
		"name": "Суші-бар №247",
		"description": "Опис для суші-бар номер 247",
		"createdAt": "2024-12-04T22:00:00.000Z",
		"coords": {
			"lat": 50.3705,
			"lon": 30.5261
		},
		"category": "food"
	},
	{
		"id": "248",
		"name": "Сквер №248",
		"description": "Опис для сквер номер 248",
		"createdAt": "2024-04-14T21:00:00.000Z",
		"coords": {
			"lat": 50.3116,
			"lon": 30.5085
		},
		"category": "park"
	},
	{
		"id": "249",
		"name": "Установа №249",
		"description": "Опис для установа номер 249",
		"createdAt": "2024-06-24T21:00:00.000Z",
		"coords": {
			"lat": 50.6587,
			"lon": 30.3805
		},
		"category": "other"
	},
	{
		"id": "250",
		"name": "Сад №250",
		"description": "Опис для сад номер 250",
		"createdAt": "2024-05-05T21:00:00.000Z",
		"coords": {
			"lat": 50.4022,
			"lon": 30.8916
		},
		"category": "park"
	},
	{
		"id": "251",
		"name": "Піцерія №251",
		"description": "Опис для піцерія номер 251",
		"createdAt": "2024-07-31T21:00:00.000Z",
		"coords": {
			"lat": 50.44,
			"lon": 30.7074
		},
		"category": "food"
	},
	{
		"id": "252",
		"name": "Торговий центр №252",
		"description": "Опис для торговий центр номер 252",
		"createdAt": "2024-10-18T21:00:00.000Z",
		"coords": {
			"lat": 50.6726,
			"lon": 30.4311
		},
		"category": "shop"
	},
	{
		"id": "253",
		"name": "Центр №253",
		"description": "Опис для центр номер 253",
		"createdAt": "2024-11-12T22:00:00.000Z",
		"coords": {
			"lat": 50.547,
			"lon": 30.8429
		},
		"category": "museum"
	},
	{
		"id": "254",
		"name": "Маркет №254",
		"description": "Опис для маркет номер 254",
		"createdAt": "2024-07-27T21:00:00.000Z",
		"coords": {
			"lat": 50.3128,
			"lon": 30.309
		},
		"category": "shop"
	},
	{
		"id": "255",
		"name": "Кафе №255",
		"description": "Опис для кафе номер 255",
		"createdAt": "2024-01-20T22:00:00.000Z",
		"coords": {
			"lat": 50.3511,
			"lon": 30.4083
		},
		"category": "food"
	},
	{
		"id": "256",
		"name": "Установа №256",
		"description": "Опис для установа номер 256",
		"createdAt": "2024-03-24T22:00:00.000Z",
		"coords": {
			"lat": 50.429,
			"lon": 30.6138
		},
		"category": "other"
	},
	{
		"id": "257",
		"name": "Бургерна №257",
		"description": "Опис для бургерна номер 257",
		"createdAt": "2024-09-27T21:00:00.000Z",
		"coords": {
			"lat": 50.359,
			"lon": 30.2014
		},
		"category": "food"
	},
	{
		"id": "258",
		"name": "Музей №258",
		"description": "Опис для музей номер 258",
		"createdAt": "2024-07-22T21:00:00.000Z",
		"coords": {
			"lat": 50.5467,
			"lon": 30.5082
		},
		"category": "museum"
	},
	{
		"id": "259",
		"name": "Центр №259",
		"description": "Опис для центр номер 259",
		"createdAt": "2024-05-04T21:00:00.000Z",
		"coords": {
			"lat": 50.5819,
			"lon": 30.5445
		},
		"category": "museum"
	},
	{
		"id": "260",
		"name": "Кав'ярня №260",
		"description": "Опис для кав'ярня номер 260",
		"createdAt": "2024-10-27T22:00:00.000Z",
		"coords": {
			"lat": 50.6268,
			"lon": 30.6962
		},
		"category": "food"
	},
	{
		"id": "261",
		"name": "Установа №261",
		"description": "Опис для установа номер 261",
		"createdAt": "2024-10-06T21:00:00.000Z",
		"coords": {
			"lat": 50.4219,
			"lon": 30.9138
		},
		"category": "other"
	},
	{
		"id": "262",
		"name": "Галерея №262",
		"description": "Опис для галерея номер 262",
		"createdAt": "2024-04-19T21:00:00.000Z",
		"coords": {
			"lat": 50.5668,
			"lon": 30.5239
		},
		"category": "museum"
	},
	{
		"id": "263",
		"name": "Будівля №263",
		"description": "Опис для будівля номер 263",
		"createdAt": "2024-04-06T21:00:00.000Z",
		"coords": {
			"lat": 50.6858,
			"lon": 30.2098
		},
		"category": "other"
	},
	{
		"id": "264",
		"name": "Музей №264",
		"description": "Опис для музей номер 264",
		"createdAt": "2024-07-16T21:00:00.000Z",
		"coords": {
			"lat": 50.4084,
			"lon": 30.7571
		},
		"category": "museum"
	},
	{
		"id": "265",
		"name": "Піцерія №265",
		"description": "Опис для піцерія номер 265",
		"createdAt": "2024-04-03T21:00:00.000Z",
		"coords": {
			"lat": 50.5679,
			"lon": 30.2055
		},
		"category": "food"
	},
	{
		"id": "266",
		"name": "Музей №266",
		"description": "Опис для музей номер 266",
		"createdAt": "2024-02-02T22:00:00.000Z",
		"coords": {
			"lat": 50.6451,
			"lon": 30.2673
		},
		"category": "museum"
	},
	{
		"id": "267",
		"name": "Торговий центр №267",
		"description": "Опис для торговий центр номер 267",
		"createdAt": "2024-01-01T22:00:00.000Z",
		"coords": {
			"lat": 50.4289,
			"lon": 30.5167
		},
		"category": "shop"
	},
	{
		"id": "268",
		"name": "Музей №268",
		"description": "Опис для музей номер 268",
		"createdAt": "2024-05-13T21:00:00.000Z",
		"coords": {
			"lat": 50.5488,
			"lon": 30.6084
		},
		"category": "museum"
	},
	{
		"id": "269",
		"name": "Галерея №269",
		"description": "Опис для галерея номер 269",
		"createdAt": "2024-07-21T21:00:00.000Z",
		"coords": {
			"lat": 50.6931,
			"lon": 30.491
		},
		"category": "museum"
	},
	{
		"id": "270",
		"name": "Столова №270",
		"description": "Опис для столова номер 270",
		"createdAt": "2024-08-14T21:00:00.000Z",
		"coords": {
			"lat": 50.6089,
			"lon": 30.2534
		},
		"category": "food"
	},
	{
		"id": "271",
		"name": "Супермаркет №271",
		"description": "Опис для супермаркет номер 271",
		"createdAt": "2024-05-17T21:00:00.000Z",
		"coords": {
			"lat": 50.664,
			"lon": 30.4842
		},
		"category": "shop"
	},
	{
		"id": "272",
		"name": "Роща №272",
		"description": "Опис для роща номер 272",
		"createdAt": "2024-05-15T21:00:00.000Z",
		"coords": {
			"lat": 50.5632,
			"lon": 30.9045
		},
		"category": "park"
	},
	{
		"id": "273",
		"name": "Сад №273",
		"description": "Опис для сад номер 273",
		"createdAt": "2024-10-19T21:00:00.000Z",
		"coords": {
			"lat": 50.6229,
			"lon": 30.5455
		},
		"category": "park"
	},
	{
		"id": "274",
		"name": "Магазин №274",
		"description": "Опис для магазин номер 274",
		"createdAt": "2024-04-14T21:00:00.000Z",
		"coords": {
			"lat": 50.301,
			"lon": 30.3245
		},
		"category": "shop"
	},
	{
		"id": "275",
		"name": "Маркет №275",
		"description": "Опис для маркет номер 275",
		"createdAt": "2024-06-04T21:00:00.000Z",
		"coords": {
			"lat": 50.6799,
			"lon": 30.3298
		},
		"category": "shop"
	},
	{
		"id": "276",
		"name": "Парк №276",
		"description": "Опис для парк номер 276",
		"createdAt": "2024-02-29T22:00:00.000Z",
		"coords": {
			"lat": 50.5357,
			"lon": 30.244
		},
		"category": "park"
	},
	{
		"id": "277",
		"name": "Об'єкт №277",
		"description": "Опис для об'єкт номер 277",
		"createdAt": "2024-07-16T21:00:00.000Z",
		"coords": {
			"lat": 50.3786,
			"lon": 30.2799
		},
		"category": "other"
	},
	{
		"id": "278",
		"name": "Суші-бар №278",
		"description": "Опис для суші-бар номер 278",
		"createdAt": "2024-07-17T21:00:00.000Z",
		"coords": {
			"lat": 50.6096,
			"lon": 30.4106
		},
		"category": "food"
	},
	{
		"id": "279",
		"name": "Бутік №279",
		"description": "Опис для бутік номер 279",
		"createdAt": "2024-04-18T21:00:00.000Z",
		"coords": {
			"lat": 50.6721,
			"lon": 30.2644
		},
		"category": "shop"
	},
	{
		"id": "280",
		"name": "Центр №280",
		"description": "Опис для центр номер 280",
		"createdAt": "2024-10-05T21:00:00.000Z",
		"coords": {
			"lat": 50.4586,
			"lon": 30.7822
		},
		"category": "museum"
	},
	{
		"id": "281",
		"name": "Бургерна №281",
		"description": "Опис для бургерна номер 281",
		"createdAt": "2024-06-19T21:00:00.000Z",
		"coords": {
			"lat": 50.6217,
			"lon": 30.3207
		},
		"category": "food"
	},
	{
		"id": "282",
		"name": "Сквер №282",
		"description": "Опис для сквер номер 282",
		"createdAt": "2024-08-06T21:00:00.000Z",
		"coords": {
			"lat": 50.6886,
			"lon": 30.9719
		},
		"category": "park"
	},
	{
		"id": "283",
		"name": "Суші-бар №283",
		"description": "Опис для суші-бар номер 283",
		"createdAt": "2024-09-04T21:00:00.000Z",
		"coords": {
			"lat": 50.6475,
			"lon": 30.5138
		},
		"category": "food"
	},
	{
		"id": "284",
		"name": "Офіс №284",
		"description": "Опис для офіс номер 284",
		"createdAt": "2024-05-21T21:00:00.000Z",
		"coords": {
			"lat": 50.5231,
			"lon": 30.5349
		},
		"category": "other"
	},
	{
		"id": "285",
		"name": "Столова №285",
		"description": "Опис для столова номер 285",
		"createdAt": "2024-01-16T22:00:00.000Z",
		"coords": {
			"lat": 50.5381,
			"lon": 30.7781
		},
		"category": "food"
	},
	{
		"id": "286",
		"name": "Бургерна №286",
		"description": "Опис для бургерна номер 286",
		"createdAt": "2024-08-31T21:00:00.000Z",
		"coords": {
			"lat": 50.4223,
			"lon": 30.2146
		},
		"category": "food"
	},
	{
		"id": "287",
		"name": "Парк №287",
		"description": "Опис для парк номер 287",
		"createdAt": "2024-05-19T21:00:00.000Z",
		"coords": {
			"lat": 50.6097,
			"lon": 30.2774
		},
		"category": "park"
	},
	{
		"id": "288",
		"name": "Сквер №288",
		"description": "Опис для сквер номер 288",
		"createdAt": "2024-04-19T21:00:00.000Z",
		"coords": {
			"lat": 50.5951,
			"lon": 30.4594
		},
		"category": "park"
	},
	{
		"id": "289",
		"name": "Роща №289",
		"description": "Опис для роща номер 289",
		"createdAt": "2024-07-26T21:00:00.000Z",
		"coords": {
			"lat": 50.6482,
			"lon": 30.3546
		},
		"category": "park"
	},
	{
		"id": "290",
		"name": "Офіс №290",
		"description": "Опис для офіс номер 290",
		"createdAt": "2024-06-04T21:00:00.000Z",
		"coords": {
			"lat": 50.3133,
			"lon": 30.7966
		},
		"category": "other"
	},
	{
		"id": "291",
		"name": "Галерея №291",
		"description": "Опис для галерея номер 291",
		"createdAt": "2024-10-31T22:00:00.000Z",
		"coords": {
			"lat": 50.4296,
			"lon": 30.3182
		},
		"category": "museum"
	},
	{
		"id": "292",
		"name": "Установа №292",
		"description": "Опис для установа номер 292",
		"createdAt": "2024-04-12T21:00:00.000Z",
		"coords": {
			"lat": 50.4408,
			"lon": 30.6821
		},
		"category": "other"
	},
	{
		"id": "293",
		"name": "Сквер №293",
		"description": "Опис для сквер номер 293",
		"createdAt": "2024-06-23T21:00:00.000Z",
		"coords": {
			"lat": 50.4425,
			"lon": 30.771
		},
		"category": "park"
	},
	{
		"id": "294",
		"name": "Роща №294",
		"description": "Опис для роща номер 294",
		"createdAt": "2024-02-11T22:00:00.000Z",
		"coords": {
			"lat": 50.3099,
			"lon": 30.8455
		},
		"category": "park"
	},
	{
		"id": "295",
		"name": "Магазин №295",
		"description": "Опис для магазин номер 295",
		"createdAt": "2024-09-11T21:00:00.000Z",
		"coords": {
			"lat": 50.4142,
			"lon": 30.3681
		},
		"category": "shop"
	},
	{
		"id": "296",
		"name": "Бургерна №296",
		"description": "Опис для бургерна номер 296",
		"createdAt": "2024-12-23T22:00:00.000Z",
		"coords": {
			"lat": 50.4562,
			"lon": 30.8388
		},
		"category": "food"
	},
	{
		"id": "297",
		"name": "Центр №297",
		"description": "Опис для центр номер 297",
		"createdAt": "2024-09-05T21:00:00.000Z",
		"coords": {
			"lat": 50.3993,
			"lon": 30.8488
		},
		"category": "museum"
	},
	{
		"id": "298",
		"name": "Установа №298",
		"description": "Опис для установа номер 298",
		"createdAt": "2024-10-23T21:00:00.000Z",
		"coords": {
			"lat": 50.3278,
			"lon": 30.2015
		},
		"category": "other"
	},
	{
		"id": "299",
		"name": "Ресторан №299",
		"description": "Опис для ресторан номер 299",
		"createdAt": "2024-09-08T21:00:00.000Z",
		"coords": {
			"lat": 50.4739,
			"lon": 30.5219
		},
		"category": "food"
	},
	{
		"id": "300",
		"name": "Центр №300",
		"description": "Опис для центр номер 300",
		"createdAt": "2024-04-17T21:00:00.000Z",
		"coords": {
			"lat": 50.3539,
			"lon": 30.3688
		},
		"category": "other"
	},
	{
		"id": "301",
		"name": "Парк №301",
		"description": "Опис для парк номер 301",
		"createdAt": "2024-02-09T22:00:00.000Z",
		"coords": {
			"lat": 50.499,
			"lon": 30.5079
		},
		"category": "park"
	},
	{
		"id": "302",
		"name": "Піцерія №302",
		"description": "Опис для піцерія номер 302",
		"createdAt": "2024-02-19T22:00:00.000Z",
		"coords": {
			"lat": 50.4203,
			"lon": 30.591
		},
		"category": "food"
	},
	{
		"id": "303",
		"name": "Галерея №303",
		"description": "Опис для галерея номер 303",
		"createdAt": "2024-11-16T22:00:00.000Z",
		"coords": {
			"lat": 50.4838,
			"lon": 30.5572
		},
		"category": "museum"
	},
	{
		"id": "304",
		"name": "Об'єкт №304",
		"description": "Опис для об'єкт номер 304",
		"createdAt": "2024-09-04T21:00:00.000Z",
		"coords": {
			"lat": 50.573,
			"lon": 30.3255
		},
		"category": "other"
	},
	{
		"id": "305",
		"name": "Музей №305",
		"description": "Опис для музей номер 305",
		"createdAt": "2024-03-17T22:00:00.000Z",
		"coords": {
			"lat": 50.3892,
			"lon": 30.6161
		},
		"category": "museum"
	},
	{
		"id": "306",
		"name": "Піцерія №306",
		"description": "Опис для піцерія номер 306",
		"createdAt": "2024-05-11T21:00:00.000Z",
		"coords": {
			"lat": 50.5271,
			"lon": 30.3384
		},
		"category": "food"
	},
	{
		"id": "307",
		"name": "Об'єкт №307",
		"description": "Опис для об'єкт номер 307",
		"createdAt": "2024-04-03T21:00:00.000Z",
		"coords": {
			"lat": 50.6689,
			"lon": 30.3929
		},
		"category": "other"
	},
	{
		"id": "308",
		"name": "Музей №308",
		"description": "Опис для музей номер 308",
		"createdAt": "2024-11-22T22:00:00.000Z",
		"coords": {
			"lat": 50.5969,
			"lon": 30.9607
		},
		"category": "museum"
	},
	{
		"id": "309",
		"name": "Маркет №309",
		"description": "Опис для маркет номер 309",
		"createdAt": "2024-03-13T22:00:00.000Z",
		"coords": {
			"lat": 50.3642,
			"lon": 30.2053
		},
		"category": "shop"
	},
	{
		"id": "310",
		"name": "Музей №310",
		"description": "Опис для музей номер 310",
		"createdAt": "2024-06-04T21:00:00.000Z",
		"coords": {
			"lat": 50.4898,
			"lon": 30.4431
		},
		"category": "museum"
	},
	{
		"id": "311",
		"name": "Виставка №311",
		"description": "Опис для виставка номер 311",
		"createdAt": "2024-03-26T22:00:00.000Z",
		"coords": {
			"lat": 50.5428,
			"lon": 30.6141
		},
		"category": "museum"
	},
	{
		"id": "312",
		"name": "Музей №312",
		"description": "Опис для музей номер 312",
		"createdAt": "2024-03-17T22:00:00.000Z",
		"coords": {
			"lat": 50.589,
			"lon": 30.5505
		},
		"category": "museum"
	},
	{
		"id": "313",
		"name": "Об'єкт №313",
		"description": "Опис для об'єкт номер 313",
		"createdAt": "2024-04-25T21:00:00.000Z",
		"coords": {
			"lat": 50.4469,
			"lon": 30.2753
		},
		"category": "other"
	},
	{
		"id": "314",
		"name": "Установа №314",
		"description": "Опис для установа номер 314",
		"createdAt": "2024-09-13T21:00:00.000Z",
		"coords": {
			"lat": 50.5177,
			"lon": 30.8719
		},
		"category": "other"
	},
	{
		"id": "315",
		"name": "Виставка №315",
		"description": "Опис для виставка номер 315",
		"createdAt": "2024-08-14T21:00:00.000Z",
		"coords": {
			"lat": 50.3354,
			"lon": 30.3411
		},
		"category": "museum"
	},
	{
		"id": "316",
		"name": "Бутік №316",
		"description": "Опис для бутік номер 316",
		"createdAt": "2024-08-21T21:00:00.000Z",
		"coords": {
			"lat": 50.4153,
			"lon": 30.5338
		},
		"category": "shop"
	},
	{
		"id": "317",
		"name": "Маркет №317",
		"description": "Опис для маркет номер 317",
		"createdAt": "2024-12-06T22:00:00.000Z",
		"coords": {
			"lat": 50.3906,
			"lon": 30.5519
		},
		"category": "shop"
	},
	{
		"id": "318",
		"name": "Парк №318",
		"description": "Опис для парк номер 318",
		"createdAt": "2024-07-25T21:00:00.000Z",
		"coords": {
			"lat": 50.3237,
			"lon": 30.2593
		},
		"category": "park"
	},
	{
		"id": "319",
		"name": "Сад №319",
		"description": "Опис для сад номер 319",
		"createdAt": "2024-12-26T22:00:00.000Z",
		"coords": {
			"lat": 50.6647,
			"lon": 30.4738
		},
		"category": "park"
	},
	{
		"id": "320",
		"name": "Будівля №320",
		"description": "Опис для будівля номер 320",
		"createdAt": "2024-04-12T21:00:00.000Z",
		"coords": {
			"lat": 50.311,
			"lon": 30.4695
		},
		"category": "other"
	},
	{
		"id": "321",
		"name": "Установа №321",
		"description": "Опис для установа номер 321",
		"createdAt": "2024-12-05T22:00:00.000Z",
		"coords": {
			"lat": 50.3327,
			"lon": 30.5605
		},
		"category": "other"
	},
	{
		"id": "322",
		"name": "Галерея №322",
		"description": "Опис для галерея номер 322",
		"createdAt": "2024-10-15T21:00:00.000Z",
		"coords": {
			"lat": 50.6585,
			"lon": 30.8995
		},
		"category": "museum"
	},
	{
		"id": "323",
		"name": "Галерея №323",
		"description": "Опис для галерея номер 323",
		"createdAt": "2024-01-18T22:00:00.000Z",
		"coords": {
			"lat": 50.5687,
			"lon": 30.7699
		},
		"category": "museum"
	},
	{
		"id": "324",
		"name": "Виставка №324",
		"description": "Опис для виставка номер 324",
		"createdAt": "2024-08-12T21:00:00.000Z",
		"coords": {
			"lat": 50.494,
			"lon": 30.5698
		},
		"category": "museum"
	},
	{
		"id": "325",
		"name": "Суші-бар №325",
		"description": "Опис для суші-бар номер 325",
		"createdAt": "2024-06-27T21:00:00.000Z",
		"coords": {
			"lat": 50.669,
			"lon": 30.6808
		},
		"category": "food"
	},
	{
		"id": "326",
		"name": "Піцерія №326",
		"description": "Опис для піцерія номер 326",
		"createdAt": "2024-01-16T22:00:00.000Z",
		"coords": {
			"lat": 50.6142,
			"lon": 30.3898
		},
		"category": "food"
	},
	{
		"id": "327",
		"name": "Будівля №327",
		"description": "Опис для будівля номер 327",
		"createdAt": "2024-11-20T22:00:00.000Z",
		"coords": {
			"lat": 50.4789,
			"lon": 30.6573
		},
		"category": "other"
	},
	{
		"id": "328",
		"name": "Піцерія №328",
		"description": "Опис для піцерія номер 328",
		"createdAt": "2024-08-02T21:00:00.000Z",
		"coords": {
			"lat": 50.3056,
			"lon": 30.8504
		},
		"category": "food"
	},
	{
		"id": "329",
		"name": "Супермаркет №329",
		"description": "Опис для супермаркет номер 329",
		"createdAt": "2024-08-23T21:00:00.000Z",
		"coords": {
			"lat": 50.44,
			"lon": 30.4452
		},
		"category": "shop"
	},
	{
		"id": "330",
		"name": "Магазин №330",
		"description": "Опис для магазин номер 330",
		"createdAt": "2024-01-01T22:00:00.000Z",
		"coords": {
			"lat": 50.5015,
			"lon": 30.6538
		},
		"category": "shop"
	},
	{
		"id": "331",
		"name": "Бутік №331",
		"description": "Опис для бутік номер 331",
		"createdAt": "2024-09-17T21:00:00.000Z",
		"coords": {
			"lat": 50.4658,
			"lon": 30.9903
		},
		"category": "shop"
	},
	{
		"id": "332",
		"name": "Піцерія №332",
		"description": "Опис для піцерія номер 332",
		"createdAt": "2024-09-04T21:00:00.000Z",
		"coords": {
			"lat": 50.5233,
			"lon": 30.3357
		},
		"category": "food"
	},
	{
		"id": "333",
		"name": "Об'єкт №333",
		"description": "Опис для об'єкт номер 333",
		"createdAt": "2024-12-03T22:00:00.000Z",
		"coords": {
			"lat": 50.5311,
			"lon": 30.3147
		},
		"category": "other"
	},
	{
		"id": "334",
		"name": "Сад №334",
		"description": "Опис для сад номер 334",
		"createdAt": "2024-03-03T22:00:00.000Z",
		"coords": {
			"lat": 50.537,
			"lon": 30.8395
		},
		"category": "park"
	},
	{
		"id": "335",
		"name": "Бургерна №335",
		"description": "Опис для бургерна номер 335",
		"createdAt": "2024-06-21T21:00:00.000Z",
		"coords": {
			"lat": 50.6744,
			"lon": 30.3594
		},
		"category": "food"
	},
	{
		"id": "336",
		"name": "Супермаркет №336",
		"description": "Опис для супермаркет номер 336",
		"createdAt": "2024-01-10T22:00:00.000Z",
		"coords": {
			"lat": 50.6908,
			"lon": 30.3162
		},
		"category": "shop"
	},
	{
		"id": "337",
		"name": "Сад №337",
		"description": "Опис для сад номер 337",
		"createdAt": "2024-10-06T21:00:00.000Z",
		"coords": {
			"lat": 50.5794,
			"lon": 30.9912
		},
		"category": "park"
	},
	{
		"id": "338",
		"name": "Центр №338",
		"description": "Опис для центр номер 338",
		"createdAt": "2024-10-23T21:00:00.000Z",
		"coords": {
			"lat": 50.3121,
			"lon": 30.6342
		},
		"category": "museum"
	},
	{
		"id": "339",
		"name": "Роща №339",
		"description": "Опис для роща номер 339",
		"createdAt": "2024-06-30T21:00:00.000Z",
		"coords": {
			"lat": 50.4212,
			"lon": 30.8576
		},
		"category": "park"
	},
	{
		"id": "340",
		"name": "Виставка №340",
		"description": "Опис для виставка номер 340",
		"createdAt": "2024-03-31T21:00:00.000Z",
		"coords": {
			"lat": 50.6648,
			"lon": 30.8595
		},
		"category": "museum"
	},
	{
		"id": "341",
		"name": "Установа №341",
		"description": "Опис для установа номер 341",
		"createdAt": "2024-08-17T21:00:00.000Z",
		"coords": {
			"lat": 50.5059,
			"lon": 30.7114
		},
		"category": "other"
	},
	{
		"id": "342",
		"name": "Центр №342",
		"description": "Опис для центр номер 342",
		"createdAt": "2024-02-01T22:00:00.000Z",
		"coords": {
			"lat": 50.3879,
			"lon": 30.941
		},
		"category": "museum"
	},
	{
		"id": "343",
		"name": "Піцерія №343",
		"description": "Опис для піцерія номер 343",
		"createdAt": "2024-04-14T21:00:00.000Z",
		"coords": {
			"lat": 50.4484,
			"lon": 30.8227
		},
		"category": "food"
	},
	{
		"id": "344",
		"name": "Маркет №344",
		"description": "Опис для маркет номер 344",
		"createdAt": "2024-06-04T21:00:00.000Z",
		"coords": {
			"lat": 50.402,
			"lon": 30.9102
		},
		"category": "shop"
	},
	{
		"id": "345",
		"name": "Об'єкт №345",
		"description": "Опис для об'єкт номер 345",
		"createdAt": "2024-05-26T21:00:00.000Z",
		"coords": {
			"lat": 50.5158,
			"lon": 30.4312
		},
		"category": "other"
	},
	{
		"id": "346",
		"name": "Бургерна №346",
		"description": "Опис для бургерна номер 346",
		"createdAt": "2024-01-22T22:00:00.000Z",
		"coords": {
			"lat": 50.6127,
			"lon": 30.6349
		},
		"category": "food"
	},
	{
		"id": "347",
		"name": "Бутік №347",
		"description": "Опис для бутік номер 347",
		"createdAt": "2024-06-22T21:00:00.000Z",
		"coords": {
			"lat": 50.62,
			"lon": 30.9456
		},
		"category": "shop"
	},
	{
		"id": "348",
		"name": "Торговий центр №348",
		"description": "Опис для торговий центр номер 348",
		"createdAt": "2024-03-27T22:00:00.000Z",
		"coords": {
			"lat": 50.3053,
			"lon": 30.9838
		},
		"category": "shop"
	},
	{
		"id": "349",
		"name": "Об'єкт №349",
		"description": "Опис для об'єкт номер 349",
		"createdAt": "2024-04-27T21:00:00.000Z",
		"coords": {
			"lat": 50.6564,
			"lon": 30.9774
		},
		"category": "other"
	},
	{
		"id": "350",
		"name": "Об'єкт №350",
		"description": "Опис для об'єкт номер 350",
		"createdAt": "2024-03-21T22:00:00.000Z",
		"coords": {
			"lat": 50.6476,
			"lon": 30.4361
		},
		"category": "other"
	},
	{
		"id": "351",
		"name": "Алея №351",
		"description": "Опис для алея номер 351",
		"createdAt": "2024-07-11T21:00:00.000Z",
		"coords": {
			"lat": 50.5576,
			"lon": 30.3614
		},
		"category": "park"
	},
	{
		"id": "352",
		"name": "Бутік №352",
		"description": "Опис для бутік номер 352",
		"createdAt": "2024-03-01T22:00:00.000Z",
		"coords": {
			"lat": 50.6388,
			"lon": 30.5783
		},
		"category": "shop"
	},
	{
		"id": "353",
		"name": "Сад №353",
		"description": "Опис для сад номер 353",
		"createdAt": "2024-04-06T21:00:00.000Z",
		"coords": {
			"lat": 50.6795,
			"lon": 30.8688
		},
		"category": "park"
	},
	{
		"id": "354",
		"name": "Роща №354",
		"description": "Опис для роща номер 354",
		"createdAt": "2024-09-01T21:00:00.000Z",
		"coords": {
			"lat": 50.4922,
			"lon": 30.9638
		},
		"category": "park"
	},
	{
		"id": "355",
		"name": "Сквер №355",
		"description": "Опис для сквер номер 355",
		"createdAt": "2024-07-25T21:00:00.000Z",
		"coords": {
			"lat": 50.4324,
			"lon": 30.2986
		},
		"category": "park"
	},
	{
		"id": "356",
		"name": "Бутік №356",
		"description": "Опис для бутік номер 356",
		"createdAt": "2024-02-26T22:00:00.000Z",
		"coords": {
			"lat": 50.5687,
			"lon": 30.586
		},
		"category": "shop"
	},
	{
		"id": "357",
		"name": "Об'єкт №357",
		"description": "Опис для об'єкт номер 357",
		"createdAt": "2024-11-08T22:00:00.000Z",
		"coords": {
			"lat": 50.4925,
			"lon": 30.571
		},
		"category": "other"
	},
	{
		"id": "358",
		"name": "Виставка №358",
		"description": "Опис для виставка номер 358",
		"createdAt": "2024-05-15T21:00:00.000Z",
		"coords": {
			"lat": 50.4874,
			"lon": 30.9238
		},
		"category": "museum"
	},
	{
		"id": "359",
		"name": "Музей №359",
		"description": "Опис для музей номер 359",
		"createdAt": "2024-10-25T21:00:00.000Z",
		"coords": {
			"lat": 50.3338,
			"lon": 30.9634
		},
		"category": "museum"
	},
	{
		"id": "360",
		"name": "Парк №360",
		"description": "Опис для парк номер 360",
		"createdAt": "2024-11-30T22:00:00.000Z",
		"coords": {
			"lat": 50.5901,
			"lon": 30.2976
		},
		"category": "park"
	},
	{
		"id": "361",
		"name": "Магазин №361",
		"description": "Опис для магазин номер 361",
		"createdAt": "2024-05-05T21:00:00.000Z",
		"coords": {
			"lat": 50.3428,
			"lon": 30.556
		},
		"category": "shop"
	},
	{
		"id": "362",
		"name": "Роща №362",
		"description": "Опис для роща номер 362",
		"createdAt": "2024-12-01T22:00:00.000Z",
		"coords": {
			"lat": 50.6838,
			"lon": 30.7272
		},
		"category": "park"
	},
	{
		"id": "363",
		"name": "Суші-бар №363",
		"description": "Опис для суші-бар номер 363",
		"createdAt": "2024-12-12T22:00:00.000Z",
		"coords": {
			"lat": 50.6158,
			"lon": 30.9802
		},
		"category": "food"
	},
	{
		"id": "364",
		"name": "Офіс №364",
		"description": "Опис для офіс номер 364",
		"createdAt": "2024-05-06T21:00:00.000Z",
		"coords": {
			"lat": 50.6852,
			"lon": 30.5399
		},
		"category": "other"
	},
	{
		"id": "365",
		"name": "Сквер №365",
		"description": "Опис для сквер номер 365",
		"createdAt": "2024-04-05T21:00:00.000Z",
		"coords": {
			"lat": 50.5811,
			"lon": 30.3251
		},
		"category": "park"
	},
	{
		"id": "366",
		"name": "Центр №366",
		"description": "Опис для центр номер 366",
		"createdAt": "2024-01-04T22:00:00.000Z",
		"coords": {
			"lat": 50.661,
			"lon": 30.4108
		},
		"category": "other"
	},
	{
		"id": "367",
		"name": "Виставка №367",
		"description": "Опис для виставка номер 367",
		"createdAt": "2024-08-09T21:00:00.000Z",
		"coords": {
			"lat": 50.3615,
			"lon": 30.8727
		},
		"category": "museum"
	},
	{
		"id": "368",
		"name": "Об'єкт №368",
		"description": "Опис для об'єкт номер 368",
		"createdAt": "2024-08-20T21:00:00.000Z",
		"coords": {
			"lat": 50.4006,
			"lon": 30.2663
		},
		"category": "other"
	},
	{
		"id": "369",
		"name": "Центр №369",
		"description": "Опис для центр номер 369",
		"createdAt": "2024-03-24T22:00:00.000Z",
		"coords": {
			"lat": 50.4304,
			"lon": 30.9377
		},
		"category": "other"
	},
	{
		"id": "370",
		"name": "Сквер №370",
		"description": "Опис для сквер номер 370",
		"createdAt": "2024-06-02T21:00:00.000Z",
		"coords": {
			"lat": 50.588,
			"lon": 30.6966
		},
		"category": "park"
	},
	{
		"id": "371",
		"name": "Алея №371",
		"description": "Опис для алея номер 371",
		"createdAt": "2024-01-16T22:00:00.000Z",
		"coords": {
			"lat": 50.6152,
			"lon": 30.888
		},
		"category": "park"
	},
	{
		"id": "372",
		"name": "Офіс №372",
		"description": "Опис для офіс номер 372",
		"createdAt": "2024-02-14T22:00:00.000Z",
		"coords": {
			"lat": 50.4711,
			"lon": 30.8456
		},
		"category": "other"
	},
	{
		"id": "373",
		"name": "Центр №373",
		"description": "Опис для центр номер 373",
		"createdAt": "2024-08-15T21:00:00.000Z",
		"coords": {
			"lat": 50.4755,
			"lon": 30.6103
		},
		"category": "museum"
	},
	{
		"id": "374",
		"name": "Музей №374",
		"description": "Опис для музей номер 374",
		"createdAt": "2024-07-25T21:00:00.000Z",
		"coords": {
			"lat": 50.4589,
			"lon": 30.3945
		},
		"category": "museum"
	},
	{
		"id": "375",
		"name": "Центр №375",
		"description": "Опис для центр номер 375",
		"createdAt": "2024-04-14T21:00:00.000Z",
		"coords": {
			"lat": 50.4389,
			"lon": 30.9352
		},
		"category": "museum"
	},
	{
		"id": "376",
		"name": "Парк №376",
		"description": "Опис для парк номер 376",
		"createdAt": "2024-09-30T21:00:00.000Z",
		"coords": {
			"lat": 50.6309,
			"lon": 30.8748
		},
		"category": "park"
	},
	{
		"id": "377",
		"name": "Бургерна №377",
		"description": "Опис для бургерна номер 377",
		"createdAt": "2024-10-13T21:00:00.000Z",
		"coords": {
			"lat": 50.6062,
			"lon": 30.8901
		},
		"category": "food"
	},
	{
		"id": "378",
		"name": "Столова №378",
		"description": "Опис для столова номер 378",
		"createdAt": "2024-09-04T21:00:00.000Z",
		"coords": {
			"lat": 50.4039,
			"lon": 30.5408
		},
		"category": "food"
	},
	{
		"id": "379",
		"name": "Бутік №379",
		"description": "Опис для бутік номер 379",
		"createdAt": "2024-04-13T21:00:00.000Z",
		"coords": {
			"lat": 50.3744,
			"lon": 30.6623
		},
		"category": "shop"
	},
	{
		"id": "380",
		"name": "Маркет №380",
		"description": "Опис для маркет номер 380",
		"createdAt": "2024-08-20T21:00:00.000Z",
		"coords": {
			"lat": 50.6387,
			"lon": 30.2584
		},
		"category": "shop"
	},
	{
		"id": "381",
		"name": "Торговий центр №381",
		"description": "Опис для торговий центр номер 381",
		"createdAt": "2024-10-16T21:00:00.000Z",
		"coords": {
			"lat": 50.6502,
			"lon": 30.7437
		},
		"category": "shop"
	},
	{
		"id": "382",
		"name": "Офіс №382",
		"description": "Опис для офіс номер 382",
		"createdAt": "2024-01-05T22:00:00.000Z",
		"coords": {
			"lat": 50.6609,
			"lon": 30.6244
		},
		"category": "other"
	},
	{
		"id": "383",
		"name": "Галерея №383",
		"description": "Опис для галерея номер 383",
		"createdAt": "2024-11-14T22:00:00.000Z",
		"coords": {
			"lat": 50.4655,
			"lon": 30.5056
		},
		"category": "museum"
	},
	{
		"id": "384",
		"name": "Торговий центр №384",
		"description": "Опис для торговий центр номер 384",
		"createdAt": "2024-03-21T22:00:00.000Z",
		"coords": {
			"lat": 50.3359,
			"lon": 30.9511
		},
		"category": "shop"
	},
	{
		"id": "385",
		"name": "Сквер №385",
		"description": "Опис для сквер номер 385",
		"createdAt": "2024-08-19T21:00:00.000Z",
		"coords": {
			"lat": 50.4946,
			"lon": 30.9699
		},
		"category": "park"
	},
	{
		"id": "386",
		"name": "Маркет №386",
		"description": "Опис для маркет номер 386",
		"createdAt": "2024-03-25T22:00:00.000Z",
		"coords": {
			"lat": 50.5998,
			"lon": 30.7348
		},
		"category": "shop"
	},
	{
		"id": "387",
		"name": "Центр №387",
		"description": "Опис для центр номер 387",
		"createdAt": "2024-01-26T22:00:00.000Z",
		"coords": {
			"lat": 50.5963,
			"lon": 30.5004
		},
		"category": "other"
	},
	{
		"id": "388",
		"name": "Столова №388",
		"description": "Опис для столова номер 388",
		"createdAt": "2024-06-26T21:00:00.000Z",
		"coords": {
			"lat": 50.6756,
			"lon": 30.4646
		},
		"category": "food"
	},
	{
		"id": "389",
		"name": "Центр №389",
		"description": "Опис для центр номер 389",
		"createdAt": "2024-11-08T22:00:00.000Z",
		"coords": {
			"lat": 50.5152,
			"lon": 30.861
		},
		"category": "museum"
	},
	{
		"id": "390",
		"name": "Галерея №390",
		"description": "Опис для галерея номер 390",
		"createdAt": "2024-01-15T22:00:00.000Z",
		"coords": {
			"lat": 50.3721,
			"lon": 30.2405
		},
		"category": "museum"
	},
	{
		"id": "391",
		"name": "Алея №391",
		"description": "Опис для алея номер 391",
		"createdAt": "2024-07-21T21:00:00.000Z",
		"coords": {
			"lat": 50.5473,
			"lon": 30.7101
		},
		"category": "park"
	},
	{
		"id": "392",
		"name": "Столова №392",
		"description": "Опис для столова номер 392",
		"createdAt": "2024-10-14T21:00:00.000Z",
		"coords": {
			"lat": 50.3933,
			"lon": 30.8619
		},
		"category": "food"
	},
	{
		"id": "393",
		"name": "Об'єкт №393",
		"description": "Опис для об'єкт номер 393",
		"createdAt": "2024-02-17T22:00:00.000Z",
		"coords": {
			"lat": 50.3697,
			"lon": 30.5814
		},
		"category": "other"
	},
	{
		"id": "394",
		"name": "Центр №394",
		"description": "Опис для центр номер 394",
		"createdAt": "2024-10-08T21:00:00.000Z",
		"coords": {
			"lat": 50.5388,
			"lon": 30.7735
		},
		"category": "museum"
	},
	{
		"id": "395",
		"name": "Бургерна №395",
		"description": "Опис для бургерна номер 395",
		"createdAt": "2024-03-05T22:00:00.000Z",
		"coords": {
			"lat": 50.602,
			"lon": 30.9732
		},
		"category": "food"
	},
	{
		"id": "396",
		"name": "Столова №396",
		"description": "Опис для столова номер 396",
		"createdAt": "2024-11-06T22:00:00.000Z",
		"coords": {
			"lat": 50.4953,
			"lon": 30.8943
		},
		"category": "food"
	},
	{
		"id": "397",
		"name": "Будівля №397",
		"description": "Опис для будівля номер 397",
		"createdAt": "2024-03-20T22:00:00.000Z",
		"coords": {
			"lat": 50.4943,
			"lon": 30.8363
		},
		"category": "other"
	},
	{
		"id": "398",
		"name": "Бутік №398",
		"description": "Опис для бутік номер 398",
		"createdAt": "2024-01-09T22:00:00.000Z",
		"coords": {
			"lat": 50.4615,
			"lon": 30.2731
		},
		"category": "shop"
	},
	{
		"id": "399",
		"name": "Об'єкт №399",
		"description": "Опис для об'єкт номер 399",
		"createdAt": "2024-09-03T21:00:00.000Z",
		"coords": {
			"lat": 50.5749,
			"lon": 30.5413
		},
		"category": "other"
	},
	{
		"id": "400",
		"name": "Піцерія №400",
		"description": "Опис для піцерія номер 400",
		"createdAt": "2024-09-23T21:00:00.000Z",
		"coords": {
			"lat": 50.3547,
			"lon": 30.6618
		},
		"category": "food"
	},
	{
		"id": "401",
		"name": "Кафе №401",
		"description": "Опис для кафе номер 401",
		"createdAt": "2024-03-23T22:00:00.000Z",
		"coords": {
			"lat": 50.6579,
			"lon": 30.607
		},
		"category": "food"
	},
	{
		"id": "402",
		"name": "Будівля №402",
		"description": "Опис для будівля номер 402",
		"createdAt": "2024-05-13T21:00:00.000Z",
		"coords": {
			"lat": 50.441,
			"lon": 30.6805
		},
		"category": "other"
	},
	{
		"id": "403",
		"name": "Музей №403",
		"description": "Опис для музей номер 403",
		"createdAt": "2024-05-22T21:00:00.000Z",
		"coords": {
			"lat": 50.3408,
			"lon": 30.9178
		},
		"category": "museum"
	},
	{
		"id": "404",
		"name": "Ресторан №404",
		"description": "Опис для ресторан номер 404",
		"createdAt": "2024-11-13T22:00:00.000Z",
		"coords": {
			"lat": 50.4316,
			"lon": 30.3957
		},
		"category": "food"
	},
	{
		"id": "405",
		"name": "Центр №405",
		"description": "Опис для центр номер 405",
		"createdAt": "2024-01-20T22:00:00.000Z",
		"coords": {
			"lat": 50.6037,
			"lon": 30.3231
		},
		"category": "museum"
	},
	{
		"id": "406",
		"name": "Об'єкт №406",
		"description": "Опис для об'єкт номер 406",
		"createdAt": "2024-05-11T21:00:00.000Z",
		"coords": {
			"lat": 50.4194,
			"lon": 30.8042
		},
		"category": "other"
	},
	{
		"id": "407",
		"name": "Супермаркет №407",
		"description": "Опис для супермаркет номер 407",
		"createdAt": "2024-06-02T21:00:00.000Z",
		"coords": {
			"lat": 50.3297,
			"lon": 30.5676
		},
		"category": "shop"
	},
	{
		"id": "408",
		"name": "Магазин №408",
		"description": "Опис для магазин номер 408",
		"createdAt": "2024-02-17T22:00:00.000Z",
		"coords": {
			"lat": 50.3558,
			"lon": 30.3933
		},
		"category": "shop"
	},
	{
		"id": "409",
		"name": "Торговий центр №409",
		"description": "Опис для торговий центр номер 409",
		"createdAt": "2024-03-21T22:00:00.000Z",
		"coords": {
			"lat": 50.5959,
			"lon": 30.8235
		},
		"category": "shop"
	},
	{
		"id": "410",
		"name": "Парк №410",
		"description": "Опис для парк номер 410",
		"createdAt": "2024-07-12T21:00:00.000Z",
		"coords": {
			"lat": 50.4235,
			"lon": 30.246
		},
		"category": "park"
	},
	{
		"id": "411",
		"name": "Виставка №411",
		"description": "Опис для виставка номер 411",
		"createdAt": "2024-03-07T22:00:00.000Z",
		"coords": {
			"lat": 50.654,
			"lon": 30.9528
		},
		"category": "museum"
	},
	{
		"id": "412",
		"name": "Установа №412",
		"description": "Опис для установа номер 412",
		"createdAt": "2024-02-14T22:00:00.000Z",
		"coords": {
			"lat": 50.6826,
			"lon": 30.5065
		},
		"category": "other"
	},
	{
		"id": "413",
		"name": "Супермаркет №413",
		"description": "Опис для супермаркет номер 413",
		"createdAt": "2024-09-24T21:00:00.000Z",
		"coords": {
			"lat": 50.468,
			"lon": 30.5873
		},
		"category": "shop"
	},
	{
		"id": "414",
		"name": "Установа №414",
		"description": "Опис для установа номер 414",
		"createdAt": "2024-02-07T22:00:00.000Z",
		"coords": {
			"lat": 50.5246,
			"lon": 30.5579
		},
		"category": "other"
	},
	{
		"id": "415",
		"name": "Роща №415",
		"description": "Опис для роща номер 415",
		"createdAt": "2024-07-10T21:00:00.000Z",
		"coords": {
			"lat": 50.6992,
			"lon": 30.223
		},
		"category": "park"
	},
	{
		"id": "416",
		"name": "Сквер №416",
		"description": "Опис для сквер номер 416",
		"createdAt": "2024-09-12T21:00:00.000Z",
		"coords": {
			"lat": 50.5065,
			"lon": 30.3087
		},
		"category": "park"
	},
	{
		"id": "417",
		"name": "Бургерна №417",
		"description": "Опис для бургерна номер 417",
		"createdAt": "2024-02-16T22:00:00.000Z",
		"coords": {
			"lat": 50.4578,
			"lon": 30.5669
		},
		"category": "food"
	},
	{
		"id": "418",
		"name": "Маркет №418",
		"description": "Опис для маркет номер 418",
		"createdAt": "2024-08-23T21:00:00.000Z",
		"coords": {
			"lat": 50.6631,
			"lon": 30.6386
		},
		"category": "shop"
	},
	{
		"id": "419",
		"name": "Суші-бар №419",
		"description": "Опис для суші-бар номер 419",
		"createdAt": "2024-02-23T22:00:00.000Z",
		"coords": {
			"lat": 50.4551,
			"lon": 30.3516
		},
		"category": "food"
	},
	{
		"id": "420",
		"name": "Будівля №420",
		"description": "Опис для будівля номер 420",
		"createdAt": "2024-09-10T21:00:00.000Z",
		"coords": {
			"lat": 50.5532,
			"lon": 30.6923
		},
		"category": "other"
	},
	{
		"id": "421",
		"name": "Установа №421",
		"description": "Опис для установа номер 421",
		"createdAt": "2024-12-04T22:00:00.000Z",
		"coords": {
			"lat": 50.6164,
			"lon": 30.3764
		},
		"category": "other"
	},
	{
		"id": "422",
		"name": "Об'єкт №422",
		"description": "Опис для об'єкт номер 422",
		"createdAt": "2024-11-12T22:00:00.000Z",
		"coords": {
			"lat": 50.6567,
			"lon": 30.9301
		},
		"category": "other"
	},
	{
		"id": "423",
		"name": "Парк №423",
		"description": "Опис для парк номер 423",
		"createdAt": "2024-09-14T21:00:00.000Z",
		"coords": {
			"lat": 50.6943,
			"lon": 30.2914
		},
		"category": "park"
	},
	{
		"id": "424",
		"name": "Торговий центр №424",
		"description": "Опис для торговий центр номер 424",
		"createdAt": "2024-09-12T21:00:00.000Z",
		"coords": {
			"lat": 50.4588,
			"lon": 30.772
		},
		"category": "shop"
	},
	{
		"id": "425",
		"name": "Ресторан №425",
		"description": "Опис для ресторан номер 425",
		"createdAt": "2024-08-02T21:00:00.000Z",
		"coords": {
			"lat": 50.4705,
			"lon": 30.3262
		},
		"category": "food"
	},
	{
		"id": "426",
		"name": "Парк №426",
		"description": "Опис для парк номер 426",
		"createdAt": "2024-02-24T22:00:00.000Z",
		"coords": {
			"lat": 50.6354,
			"lon": 30.4122
		},
		"category": "park"
	},
	{
		"id": "427",
		"name": "Маркет №427",
		"description": "Опис для маркет номер 427",
		"createdAt": "2024-08-21T21:00:00.000Z",
		"coords": {
			"lat": 50.5043,
			"lon": 30.4994
		},
		"category": "shop"
	},
	{
		"id": "428",
		"name": "Роща №428",
		"description": "Опис для роща номер 428",
		"createdAt": "2024-07-18T21:00:00.000Z",
		"coords": {
			"lat": 50.5668,
			"lon": 30.2825
		},
		"category": "park"
	},
	{
		"id": "429",
		"name": "Торговий центр №429",
		"description": "Опис для торговий центр номер 429",
		"createdAt": "2024-08-27T21:00:00.000Z",
		"coords": {
			"lat": 50.679,
			"lon": 30.8678
		},
		"category": "shop"
	},
	{
		"id": "430",
		"name": "Музей №430",
		"description": "Опис для музей номер 430",
		"createdAt": "2024-01-26T22:00:00.000Z",
		"coords": {
			"lat": 50.589,
			"lon": 30.275
		},
		"category": "museum"
	},
	{
		"id": "431",
		"name": "Галерея №431",
		"description": "Опис для галерея номер 431",
		"createdAt": "2024-05-23T21:00:00.000Z",
		"coords": {
			"lat": 50.414,
			"lon": 30.2278
		},
		"category": "museum"
	},
	{
		"id": "432",
		"name": "Центр №432",
		"description": "Опис для центр номер 432",
		"createdAt": "2024-07-20T21:00:00.000Z",
		"coords": {
			"lat": 50.419,
			"lon": 30.9378
		},
		"category": "museum"
	},
	{
		"id": "433",
		"name": "Сад №433",
		"description": "Опис для сад номер 433",
		"createdAt": "2024-03-21T22:00:00.000Z",
		"coords": {
			"lat": 50.6859,
			"lon": 30.7151
		},
		"category": "park"
	},
	{
		"id": "434",
		"name": "Торговий центр №434",
		"description": "Опис для торговий центр номер 434",
		"createdAt": "2024-03-08T22:00:00.000Z",
		"coords": {
			"lat": 50.6239,
			"lon": 30.289
		},
		"category": "shop"
	},
	{
		"id": "435",
		"name": "Кав'ярня №435",
		"description": "Опис для кав'ярня номер 435",
		"createdAt": "2024-03-20T22:00:00.000Z",
		"coords": {
			"lat": 50.3971,
			"lon": 30.5263
		},
		"category": "food"
	},
	{
		"id": "436",
		"name": "Галерея №436",
		"description": "Опис для галерея номер 436",
		"createdAt": "2024-05-08T21:00:00.000Z",
		"coords": {
			"lat": 50.4357,
			"lon": 30.4789
		},
		"category": "museum"
	},
	{
		"id": "437",
		"name": "Маркет №437",
		"description": "Опис для маркет номер 437",
		"createdAt": "2024-10-07T21:00:00.000Z",
		"coords": {
			"lat": 50.5792,
			"lon": 30.912
		},
		"category": "shop"
	},
	{
		"id": "438",
		"name": "Маркет №438",
		"description": "Опис для маркет номер 438",
		"createdAt": "2024-07-07T21:00:00.000Z",
		"coords": {
			"lat": 50.4819,
			"lon": 30.5308
		},
		"category": "shop"
	},
	{
		"id": "439",
		"name": "Маркет №439",
		"description": "Опис для маркет номер 439",
		"createdAt": "2024-01-18T22:00:00.000Z",
		"coords": {
			"lat": 50.445,
			"lon": 30.6137
		},
		"category": "shop"
	},
	{
		"id": "440",
		"name": "Центр №440",
		"description": "Опис для центр номер 440",
		"createdAt": "2024-10-17T21:00:00.000Z",
		"coords": {
			"lat": 50.3047,
			"lon": 30.977
		},
		"category": "other"
	},
	{
		"id": "441",
		"name": "Музей №441",
		"description": "Опис для музей номер 441",
		"createdAt": "2024-04-22T21:00:00.000Z",
		"coords": {
			"lat": 50.3005,
			"lon": 30.5185
		},
		"category": "museum"
	},
	{
		"id": "442",
		"name": "Піцерія №442",
		"description": "Опис для піцерія номер 442",
		"createdAt": "2024-10-05T21:00:00.000Z",
		"coords": {
			"lat": 50.6531,
			"lon": 30.6516
		},
		"category": "food"
	},
	{
		"id": "443",
		"name": "Виставка №443",
		"description": "Опис для виставка номер 443",
		"createdAt": "2024-08-15T21:00:00.000Z",
		"coords": {
			"lat": 50.5704,
			"lon": 30.2152
		},
		"category": "museum"
	},
	{
		"id": "444",
		"name": "Алея №444",
		"description": "Опис для алея номер 444",
		"createdAt": "2024-01-11T22:00:00.000Z",
		"coords": {
			"lat": 50.627,
			"lon": 30.5168
		},
		"category": "park"
	},
	{
		"id": "445",
		"name": "Кав'ярня №445",
		"description": "Опис для кав'ярня номер 445",
		"createdAt": "2024-06-27T21:00:00.000Z",
		"coords": {
			"lat": 50.3782,
			"lon": 30.6959
		},
		"category": "food"
	},
	{
		"id": "446",
		"name": "Сквер №446",
		"description": "Опис для сквер номер 446",
		"createdAt": "2024-04-16T21:00:00.000Z",
		"coords": {
			"lat": 50.4216,
			"lon": 30.6169
		},
		"category": "park"
	},
	{
		"id": "447",
		"name": "Кафе №447",
		"description": "Опис для кафе номер 447",
		"createdAt": "2024-05-07T21:00:00.000Z",
		"coords": {
			"lat": 50.6295,
			"lon": 30.809
		},
		"category": "food"
	},
	{
		"id": "448",
		"name": "Будівля №448",
		"description": "Опис для будівля номер 448",
		"createdAt": "2024-03-25T22:00:00.000Z",
		"coords": {
			"lat": 50.4849,
			"lon": 30.5905
		},
		"category": "other"
	},
	{
		"id": "449",
		"name": "Парк №449",
		"description": "Опис для парк номер 449",
		"createdAt": "2024-05-14T21:00:00.000Z",
		"coords": {
			"lat": 50.6276,
			"lon": 30.4357
		},
		"category": "park"
	},
	{
		"id": "450",
		"name": "Піцерія №450",
		"description": "Опис для піцерія номер 450",
		"createdAt": "2024-06-02T21:00:00.000Z",
		"coords": {
			"lat": 50.6483,
			"lon": 30.3881
		},
		"category": "food"
	},
	{
		"id": "451",
		"name": "Магазин №451",
		"description": "Опис для магазин номер 451",
		"createdAt": "2024-12-05T22:00:00.000Z",
		"coords": {
			"lat": 50.5541,
			"lon": 30.8149
		},
		"category": "shop"
	},
	{
		"id": "452",
		"name": "Виставка №452",
		"description": "Опис для виставка номер 452",
		"createdAt": "2024-01-04T22:00:00.000Z",
		"coords": {
			"lat": 50.4852,
			"lon": 30.8912
		},
		"category": "museum"
	},
	{
		"id": "453",
		"name": "Центр №453",
		"description": "Опис для центр номер 453",
		"createdAt": "2024-01-22T22:00:00.000Z",
		"coords": {
			"lat": 50.3755,
			"lon": 30.3749
		},
		"category": "museum"
	},
	{
		"id": "454",
		"name": "Магазин №454",
		"description": "Опис для магазин номер 454",
		"createdAt": "2024-01-27T22:00:00.000Z",
		"coords": {
			"lat": 50.5573,
			"lon": 30.7633
		},
		"category": "shop"
	},
	{
		"id": "455",
		"name": "Торговий центр №455",
		"description": "Опис для торговий центр номер 455",
		"createdAt": "2024-07-17T21:00:00.000Z",
		"coords": {
			"lat": 50.6742,
			"lon": 30.2507
		},
		"category": "shop"
	},
	{
		"id": "456",
		"name": "Супермаркет №456",
		"description": "Опис для супермаркет номер 456",
		"createdAt": "2024-07-01T21:00:00.000Z",
		"coords": {
			"lat": 50.4484,
			"lon": 30.4333
		},
		"category": "shop"
	},
	{
		"id": "457",
		"name": "Алея №457",
		"description": "Опис для алея номер 457",
		"createdAt": "2024-03-14T22:00:00.000Z",
		"coords": {
			"lat": 50.3042,
			"lon": 30.343
		},
		"category": "park"
	},
	{
		"id": "458",
		"name": "Бутік №458",
		"description": "Опис для бутік номер 458",
		"createdAt": "2024-01-23T22:00:00.000Z",
		"coords": {
			"lat": 50.4594,
			"lon": 30.8058
		},
		"category": "shop"
	},
	{
		"id": "459",
		"name": "Бутік №459",
		"description": "Опис для бутік номер 459",
		"createdAt": "2024-10-13T21:00:00.000Z",
		"coords": {
			"lat": 50.5954,
			"lon": 30.2207
		},
		"category": "shop"
	},
	{
		"id": "460",
		"name": "Кафе №460",
		"description": "Опис для кафе номер 460",
		"createdAt": "2024-12-07T22:00:00.000Z",
		"coords": {
			"lat": 50.3981,
			"lon": 30.6887
		},
		"category": "food"
	},
	{
		"id": "461",
		"name": "Роща №461",
		"description": "Опис для роща номер 461",
		"createdAt": "2024-05-08T21:00:00.000Z",
		"coords": {
			"lat": 50.34,
			"lon": 30.4417
		},
		"category": "park"
	},
	{
		"id": "462",
		"name": "Центр №462",
		"description": "Опис для центр номер 462",
		"createdAt": "2024-04-14T21:00:00.000Z",
		"coords": {
			"lat": 50.3198,
			"lon": 30.8406
		},
		"category": "other"
	},
	{
		"id": "463",
		"name": "Виставка №463",
		"description": "Опис для виставка номер 463",
		"createdAt": "2024-04-13T21:00:00.000Z",
		"coords": {
			"lat": 50.3076,
			"lon": 30.5658
		},
		"category": "museum"
	},
	{
		"id": "464",
		"name": "Галерея №464",
		"description": "Опис для галерея номер 464",
		"createdAt": "2024-11-26T22:00:00.000Z",
		"coords": {
			"lat": 50.6919,
			"lon": 30.9651
		},
		"category": "museum"
	},
	{
		"id": "465",
		"name": "Магазин №465",
		"description": "Опис для магазин номер 465",
		"createdAt": "2024-08-23T21:00:00.000Z",
		"coords": {
			"lat": 50.3312,
			"lon": 30.6779
		},
		"category": "shop"
	},
	{
		"id": "466",
		"name": "Галерея №466",
		"description": "Опис для галерея номер 466",
		"createdAt": "2024-11-04T22:00:00.000Z",
		"coords": {
			"lat": 50.6295,
			"lon": 30.446
		},
		"category": "museum"
	},
	{
		"id": "467",
		"name": "Галерея №467",
		"description": "Опис для галерея номер 467",
		"createdAt": "2024-09-04T21:00:00.000Z",
		"coords": {
			"lat": 50.3959,
			"lon": 30.3635
		},
		"category": "museum"
	},
	{
		"id": "468",
		"name": "Кафе №468",
		"description": "Опис для кафе номер 468",
		"createdAt": "2024-12-09T22:00:00.000Z",
		"coords": {
			"lat": 50.5908,
			"lon": 30.2853
		},
		"category": "food"
	},
	{
		"id": "469",
		"name": "Торговий центр №469",
		"description": "Опис для торговий центр номер 469",
		"createdAt": "2024-12-21T22:00:00.000Z",
		"coords": {
			"lat": 50.6783,
			"lon": 30.4046
		},
		"category": "shop"
	},
	{
		"id": "470",
		"name": "Виставка №470",
		"description": "Опис для виставка номер 470",
		"createdAt": "2024-04-17T21:00:00.000Z",
		"coords": {
			"lat": 50.5788,
			"lon": 30.3371
		},
		"category": "museum"
	},
	{
		"id": "471",
		"name": "Установа №471",
		"description": "Опис для установа номер 471",
		"createdAt": "2024-01-09T22:00:00.000Z",
		"coords": {
			"lat": 50.3834,
			"lon": 30.438
		},
		"category": "other"
	},
	{
		"id": "472",
		"name": "Сад №472",
		"description": "Опис для сад номер 472",
		"createdAt": "2024-04-18T21:00:00.000Z",
		"coords": {
			"lat": 50.6745,
			"lon": 30.2015
		},
		"category": "park"
	},
	{
		"id": "473",
		"name": "Центр №473",
		"description": "Опис для центр номер 473",
		"createdAt": "2024-03-19T22:00:00.000Z",
		"coords": {
			"lat": 50.5689,
			"lon": 30.2614
		},
		"category": "museum"
	},
	{
		"id": "474",
		"name": "Установа №474",
		"description": "Опис для установа номер 474",
		"createdAt": "2024-07-07T21:00:00.000Z",
		"coords": {
			"lat": 50.5273,
			"lon": 30.9012
		},
		"category": "other"
	},
	{
		"id": "475",
		"name": "Офіс №475",
		"description": "Опис для офіс номер 475",
		"createdAt": "2024-02-19T22:00:00.000Z",
		"coords": {
			"lat": 50.5951,
			"lon": 30.2961
		},
		"category": "other"
	},
	{
		"id": "476",
		"name": "Центр №476",
		"description": "Опис для центр номер 476",
		"createdAt": "2024-04-30T21:00:00.000Z",
		"coords": {
			"lat": 50.4527,
			"lon": 30.9126
		},
		"category": "other"
	},
	{
		"id": "477",
		"name": "Парк №477",
		"description": "Опис для парк номер 477",
		"createdAt": "2024-10-19T21:00:00.000Z",
		"coords": {
			"lat": 50.4245,
			"lon": 30.736
		},
		"category": "park"
	},
	{
		"id": "478",
		"name": "Ресторан №478",
		"description": "Опис для ресторан номер 478",
		"createdAt": "2024-12-11T22:00:00.000Z",
		"coords": {
			"lat": 50.6151,
			"lon": 30.456
		},
		"category": "food"
	},
	{
		"id": "479",
		"name": "Офіс №479",
		"description": "Опис для офіс номер 479",
		"createdAt": "2024-02-27T22:00:00.000Z",
		"coords": {
			"lat": 50.3978,
			"lon": 30.8756
		},
		"category": "other"
	},
	{
		"id": "480",
		"name": "Центр №480",
		"description": "Опис для центр номер 480",
		"createdAt": "2024-12-01T22:00:00.000Z",
		"coords": {
			"lat": 50.42,
			"lon": 30.3407
		},
		"category": "other"
	},
	{
		"id": "481",
		"name": "Маркет №481",
		"description": "Опис для маркет номер 481",
		"createdAt": "2024-09-13T21:00:00.000Z",
		"coords": {
			"lat": 50.3716,
			"lon": 30.4041
		},
		"category": "shop"
	},
	{
		"id": "482",
		"name": "Офіс №482",
		"description": "Опис для офіс номер 482",
		"createdAt": "2024-09-11T21:00:00.000Z",
		"coords": {
			"lat": 50.6716,
			"lon": 30.562
		},
		"category": "other"
	},
	{
		"id": "483",
		"name": "Установа №483",
		"description": "Опис для установа номер 483",
		"createdAt": "2024-09-02T21:00:00.000Z",
		"coords": {
			"lat": 50.4038,
			"lon": 30.5164
		},
		"category": "other"
	},
	{
		"id": "484",
		"name": "Суші-бар №484",
		"description": "Опис для суші-бар номер 484",
		"createdAt": "2024-09-24T21:00:00.000Z",
		"coords": {
			"lat": 50.4664,
			"lon": 30.9722
		},
		"category": "food"
	},
	{
		"id": "485",
		"name": "Піцерія №485",
		"description": "Опис для піцерія номер 485",
		"createdAt": "2024-01-13T22:00:00.000Z",
		"coords": {
			"lat": 50.394,
			"lon": 30.9514
		},
		"category": "food"
	},
	{
		"id": "486",
		"name": "Сад №486",
		"description": "Опис для сад номер 486",
		"createdAt": "2024-11-21T22:00:00.000Z",
		"coords": {
			"lat": 50.3899,
			"lon": 30.4535
		},
		"category": "park"
	},
	{
		"id": "487",
		"name": "Будівля №487",
		"description": "Опис для будівля номер 487",
		"createdAt": "2024-10-12T21:00:00.000Z",
		"coords": {
			"lat": 50.6997,
			"lon": 30.6931
		},
		"category": "other"
	},
	{
		"id": "488",
		"name": "Супермаркет №488",
		"description": "Опис для супермаркет номер 488",
		"createdAt": "2024-05-12T21:00:00.000Z",
		"coords": {
			"lat": 50.5877,
			"lon": 30.4028
		},
		"category": "shop"
	},
	{
		"id": "489",
		"name": "Торговий центр №489",
		"description": "Опис для торговий центр номер 489",
		"createdAt": "2024-09-30T21:00:00.000Z",
		"coords": {
			"lat": 50.4623,
			"lon": 30.2733
		},
		"category": "shop"
	},
	{
		"id": "490",
		"name": "Музей №490",
		"description": "Опис для музей номер 490",
		"createdAt": "2024-11-18T22:00:00.000Z",
		"coords": {
			"lat": 50.4053,
			"lon": 30.4421
		},
		"category": "museum"
	},
	{
		"id": "491",
		"name": "Магазин №491",
		"description": "Опис для магазин номер 491",
		"createdAt": "2024-08-31T21:00:00.000Z",
		"coords": {
			"lat": 50.4678,
			"lon": 30.6461
		},
		"category": "shop"
	},
	{
		"id": "492",
		"name": "Офіс №492",
		"description": "Опис для офіс номер 492",
		"createdAt": "2024-01-15T22:00:00.000Z",
		"coords": {
			"lat": 50.3007,
			"lon": 30.863
		},
		"category": "other"
	},
	{
		"id": "493",
		"name": "Магазин №493",
		"description": "Опис для магазин номер 493",
		"createdAt": "2024-09-15T21:00:00.000Z",
		"coords": {
			"lat": 50.4738,
			"lon": 30.8955
		},
		"category": "shop"
	},
	{
		"id": "494",
		"name": "Ресторан №494",
		"description": "Опис для ресторан номер 494",
		"createdAt": "2024-10-07T21:00:00.000Z",
		"coords": {
			"lat": 50.6799,
			"lon": 30.7775
		},
		"category": "food"
	},
	{
		"id": "495",
		"name": "Виставка №495",
		"description": "Опис для виставка номер 495",
		"createdAt": "2024-05-06T21:00:00.000Z",
		"coords": {
			"lat": 50.5235,
			"lon": 30.4068
		},
		"category": "museum"
	},
	{
		"id": "496",
		"name": "Торговий центр №496",
		"description": "Опис для торговий центр номер 496",
		"createdAt": "2024-11-06T22:00:00.000Z",
		"coords": {
			"lat": 50.6424,
			"lon": 30.7619
		},
		"category": "shop"
	},
	{
		"id": "497",
		"name": "Магазин №497",
		"description": "Опис для магазин номер 497",
		"createdAt": "2024-10-14T21:00:00.000Z",
		"coords": {
			"lat": 50.6658,
			"lon": 30.5482
		},
		"category": "shop"
	},
	{
		"id": "498",
		"name": "Сквер №498",
		"description": "Опис для сквер номер 498",
		"createdAt": "2024-04-16T21:00:00.000Z",
		"coords": {
			"lat": 50.4548,
			"lon": 30.8399
		},
		"category": "park"
	},
	{
		"id": "499",
		"name": "Центр №499",
		"description": "Опис для центр номер 499",
		"createdAt": "2024-06-19T21:00:00.000Z",
		"coords": {
			"lat": 50.6624,
			"lon": 30.4111
		},
		"category": "other"
	},
	{
		"id": "500",
		"name": "Алея №500",
		"description": "Опис для алея номер 500",
		"createdAt": "2024-05-02T21:00:00.000Z",
		"coords": {
			"lat": 50.4211,
			"lon": 30.9719
		},
		"category": "park"
	},
	{
		"id": "501",
		"name": "Бутік №501",
		"description": "Опис для бутік номер 501",
		"createdAt": "2024-06-06T21:00:00.000Z",
		"coords": {
			"lat": 50.5519,
			"lon": 30.3867
		},
		"category": "shop"
	},
	{
		"id": "502",
		"name": "Офіс №502",
		"description": "Опис для офіс номер 502",
		"createdAt": "2024-06-23T21:00:00.000Z",
		"coords": {
			"lat": 50.6922,
			"lon": 30.4052
		},
		"category": "other"
	},
	{
		"id": "503",
		"name": "Сквер №503",
		"description": "Опис для сквер номер 503",
		"createdAt": "2024-09-10T21:00:00.000Z",
		"coords": {
			"lat": 50.5079,
			"lon": 30.272
		},
		"category": "park"
	},
	{
		"id": "504",
		"name": "Виставка №504",
		"description": "Опис для виставка номер 504",
		"createdAt": "2024-11-11T22:00:00.000Z",
		"coords": {
			"lat": 50.5141,
			"lon": 30.6607
		},
		"category": "museum"
	},
	{
		"id": "505",
		"name": "Кафе №505",
		"description": "Опис для кафе номер 505",
		"createdAt": "2024-02-27T22:00:00.000Z",
		"coords": {
			"lat": 50.5555,
			"lon": 30.3957
		},
		"category": "food"
	},
	{
		"id": "506",
		"name": "Кафе №506",
		"description": "Опис для кафе номер 506",
		"createdAt": "2024-08-31T21:00:00.000Z",
		"coords": {
			"lat": 50.4593,
			"lon": 30.5375
		},
		"category": "food"
	},
	{
		"id": "507",
		"name": "Установа №507",
		"description": "Опис для установа номер 507",
		"createdAt": "2024-11-09T22:00:00.000Z",
		"coords": {
			"lat": 50.5337,
			"lon": 30.2658
		},
		"category": "other"
	},
	{
		"id": "508",
		"name": "Виставка №508",
		"description": "Опис для виставка номер 508",
		"createdAt": "2024-03-26T22:00:00.000Z",
		"coords": {
			"lat": 50.5913,
			"lon": 30.8789
		},
		"category": "museum"
	},
	{
		"id": "509",
		"name": "Супермаркет №509",
		"description": "Опис для супермаркет номер 509",
		"createdAt": "2024-12-07T22:00:00.000Z",
		"coords": {
			"lat": 50.6796,
			"lon": 30.7296
		},
		"category": "shop"
	},
	{
		"id": "510",
		"name": "Сад №510",
		"description": "Опис для сад номер 510",
		"createdAt": "2024-03-11T22:00:00.000Z",
		"coords": {
			"lat": 50.6605,
			"lon": 30.317
		},
		"category": "park"
	},
	{
		"id": "511",
		"name": "Будівля №511",
		"description": "Опис для будівля номер 511",
		"createdAt": "2024-09-09T21:00:00.000Z",
		"coords": {
			"lat": 50.3537,
			"lon": 30.3163
		},
		"category": "other"
	},
	{
		"id": "512",
		"name": "Супермаркет №512",
		"description": "Опис для супермаркет номер 512",
		"createdAt": "2024-11-11T22:00:00.000Z",
		"coords": {
			"lat": 50.5242,
			"lon": 30.7668
		},
		"category": "shop"
	},
	{
		"id": "513",
		"name": "Виставка №513",
		"description": "Опис для виставка номер 513",
		"createdAt": "2024-12-02T22:00:00.000Z",
		"coords": {
			"lat": 50.4817,
			"lon": 30.827
		},
		"category": "museum"
	},
	{
		"id": "514",
		"name": "Столова №514",
		"description": "Опис для столова номер 514",
		"createdAt": "2024-06-24T21:00:00.000Z",
		"coords": {
			"lat": 50.6056,
			"lon": 30.5081
		},
		"category": "food"
	},
	{
		"id": "515",
		"name": "Центр №515",
		"description": "Опис для центр номер 515",
		"createdAt": "2024-09-12T21:00:00.000Z",
		"coords": {
			"lat": 50.4162,
			"lon": 30.8079
		},
		"category": "museum"
	},
	{
		"id": "516",
		"name": "Виставка №516",
		"description": "Опис для виставка номер 516",
		"createdAt": "2024-10-03T21:00:00.000Z",
		"coords": {
			"lat": 50.4327,
			"lon": 30.6202
		},
		"category": "museum"
	},
	{
		"id": "517",
		"name": "Будівля №517",
		"description": "Опис для будівля номер 517",
		"createdAt": "2024-01-13T22:00:00.000Z",
		"coords": {
			"lat": 50.3292,
			"lon": 30.9291
		},
		"category": "other"
	},
	{
		"id": "518",
		"name": "Центр №518",
		"description": "Опис для центр номер 518",
		"createdAt": "2024-01-19T22:00:00.000Z",
		"coords": {
			"lat": 50.6161,
			"lon": 30.4433
		},
		"category": "museum"
	},
	{
		"id": "519",
		"name": "Будівля №519",
		"description": "Опис для будівля номер 519",
		"createdAt": "2024-08-17T21:00:00.000Z",
		"coords": {
			"lat": 50.497,
			"lon": 30.5875
		},
		"category": "other"
	},
	{
		"id": "520",
		"name": "Бургерна №520",
		"description": "Опис для бургерна номер 520",
		"createdAt": "2024-08-25T21:00:00.000Z",
		"coords": {
			"lat": 50.3426,
			"lon": 30.3686
		},
		"category": "food"
	},
	{
		"id": "521",
		"name": "Будівля №521",
		"description": "Опис для будівля номер 521",
		"createdAt": "2024-09-24T21:00:00.000Z",
		"coords": {
			"lat": 50.5509,
			"lon": 30.3003
		},
		"category": "other"
	},
	{
		"id": "522",
		"name": "Сквер №522",
		"description": "Опис для сквер номер 522",
		"createdAt": "2024-11-04T22:00:00.000Z",
		"coords": {
			"lat": 50.6138,
			"lon": 30.4525
		},
		"category": "park"
	},
	{
		"id": "523",
		"name": "Центр №523",
		"description": "Опис для центр номер 523",
		"createdAt": "2024-02-09T22:00:00.000Z",
		"coords": {
			"lat": 50.4733,
			"lon": 30.7008
		},
		"category": "other"
	},
	{
		"id": "524",
		"name": "Парк №524",
		"description": "Опис для парк номер 524",
		"createdAt": "2024-08-20T21:00:00.000Z",
		"coords": {
			"lat": 50.3972,
			"lon": 30.8618
		},
		"category": "park"
	},
	{
		"id": "525",
		"name": "Сад №525",
		"description": "Опис для сад номер 525",
		"createdAt": "2024-09-05T21:00:00.000Z",
		"coords": {
			"lat": 50.3591,
			"lon": 30.9709
		},
		"category": "park"
	},
	{
		"id": "526",
		"name": "Піцерія №526",
		"description": "Опис для піцерія номер 526",
		"createdAt": "2024-02-09T22:00:00.000Z",
		"coords": {
			"lat": 50.3623,
			"lon": 30.6393
		},
		"category": "food"
	},
	{
		"id": "527",
		"name": "Центр №527",
		"description": "Опис для центр номер 527",
		"createdAt": "2024-08-07T21:00:00.000Z",
		"coords": {
			"lat": 50.4165,
			"lon": 30.8544
		},
		"category": "other"
	},
	{
		"id": "528",
		"name": "Бургерна №528",
		"description": "Опис для бургерна номер 528",
		"createdAt": "2024-09-17T21:00:00.000Z",
		"coords": {
			"lat": 50.5156,
			"lon": 30.6615
		},
		"category": "food"
	},
	{
		"id": "529",
		"name": "Маркет №529",
		"description": "Опис для маркет номер 529",
		"createdAt": "2024-11-07T22:00:00.000Z",
		"coords": {
			"lat": 50.3114,
			"lon": 30.4393
		},
		"category": "shop"
	},
	{
		"id": "530",
		"name": "Піцерія №530",
		"description": "Опис для піцерія номер 530",
		"createdAt": "2024-10-05T21:00:00.000Z",
		"coords": {
			"lat": 50.3758,
			"lon": 30.6786
		},
		"category": "food"
	},
	{
		"id": "531",
		"name": "Виставка №531",
		"description": "Опис для виставка номер 531",
		"createdAt": "2024-08-04T21:00:00.000Z",
		"coords": {
			"lat": 50.3068,
			"lon": 30.5474
		},
		"category": "museum"
	},
	{
		"id": "532",
		"name": "Кав'ярня №532",
		"description": "Опис для кав'ярня номер 532",
		"createdAt": "2024-12-02T22:00:00.000Z",
		"coords": {
			"lat": 50.6874,
			"lon": 30.5549
		},
		"category": "food"
	},
	{
		"id": "533",
		"name": "Центр №533",
		"description": "Опис для центр номер 533",
		"createdAt": "2024-10-11T21:00:00.000Z",
		"coords": {
			"lat": 50.6177,
			"lon": 30.8832
		},
		"category": "museum"
	},
	{
		"id": "534",
		"name": "Бутік №534",
		"description": "Опис для бутік номер 534",
		"createdAt": "2024-12-13T22:00:00.000Z",
		"coords": {
			"lat": 50.5282,
			"lon": 30.5651
		},
		"category": "shop"
	},
	{
		"id": "535",
		"name": "Установа №535",
		"description": "Опис для установа номер 535",
		"createdAt": "2024-01-03T22:00:00.000Z",
		"coords": {
			"lat": 50.6108,
			"lon": 30.588
		},
		"category": "other"
	},
	{
		"id": "536",
		"name": "Маркет №536",
		"description": "Опис для маркет номер 536",
		"createdAt": "2024-05-12T21:00:00.000Z",
		"coords": {
			"lat": 50.382,
			"lon": 30.5811
		},
		"category": "shop"
	},
	{
		"id": "537",
		"name": "Магазин №537",
		"description": "Опис для магазин номер 537",
		"createdAt": "2024-08-03T21:00:00.000Z",
		"coords": {
			"lat": 50.4976,
			"lon": 30.9379
		},
		"category": "shop"
	},
	{
		"id": "538",
		"name": "Роща №538",
		"description": "Опис для роща номер 538",
		"createdAt": "2024-09-30T21:00:00.000Z",
		"coords": {
			"lat": 50.4731,
			"lon": 30.3659
		},
		"category": "park"
	},
	{
		"id": "539",
		"name": "Роща №539",
		"description": "Опис для роща номер 539",
		"createdAt": "2024-12-14T22:00:00.000Z",
		"coords": {
			"lat": 50.3582,
			"lon": 30.2573
		},
		"category": "park"
	},
	{
		"id": "540",
		"name": "Кав'ярня №540",
		"description": "Опис для кав'ярня номер 540",
		"createdAt": "2024-04-25T21:00:00.000Z",
		"coords": {
			"lat": 50.6195,
			"lon": 30.897
		},
		"category": "food"
	},
	{
		"id": "541",
		"name": "Музей №541",
		"description": "Опис для музей номер 541",
		"createdAt": "2024-01-03T22:00:00.000Z",
		"coords": {
			"lat": 50.5048,
			"lon": 30.3577
		},
		"category": "museum"
	},
	{
		"id": "542",
		"name": "Алея №542",
		"description": "Опис для алея номер 542",
		"createdAt": "2024-12-14T22:00:00.000Z",
		"coords": {
			"lat": 50.3047,
			"lon": 30.8045
		},
		"category": "park"
	},
	{
		"id": "543",
		"name": "Суші-бар №543",
		"description": "Опис для суші-бар номер 543",
		"createdAt": "2024-12-19T22:00:00.000Z",
		"coords": {
			"lat": 50.5013,
			"lon": 30.459
		},
		"category": "food"
	},
	{
		"id": "544",
		"name": "Об'єкт №544",
		"description": "Опис для об'єкт номер 544",
		"createdAt": "2024-04-21T21:00:00.000Z",
		"coords": {
			"lat": 50.5129,
			"lon": 30.6828
		},
		"category": "other"
	},
	{
		"id": "545",
		"name": "Роща №545",
		"description": "Опис для роща номер 545",
		"createdAt": "2024-06-09T21:00:00.000Z",
		"coords": {
			"lat": 50.4617,
			"lon": 30.7919
		},
		"category": "park"
	},
	{
		"id": "546",
		"name": "Супермаркет №546",
		"description": "Опис для супермаркет номер 546",
		"createdAt": "2024-08-23T21:00:00.000Z",
		"coords": {
			"lat": 50.5691,
			"lon": 30.5208
		},
		"category": "shop"
	},
	{
		"id": "547",
		"name": "Бутік №547",
		"description": "Опис для бутік номер 547",
		"createdAt": "2024-01-20T22:00:00.000Z",
		"coords": {
			"lat": 50.5408,
			"lon": 30.7195
		},
		"category": "shop"
	},
	{
		"id": "548",
		"name": "Бутік №548",
		"description": "Опис для бутік номер 548",
		"createdAt": "2024-08-03T21:00:00.000Z",
		"coords": {
			"lat": 50.5869,
			"lon": 30.7065
		},
		"category": "shop"
	},
	{
		"id": "549",
		"name": "Сад №549",
		"description": "Опис для сад номер 549",
		"createdAt": "2024-08-10T21:00:00.000Z",
		"coords": {
			"lat": 50.6275,
			"lon": 30.4613
		},
		"category": "park"
	},
	{
		"id": "550",
		"name": "Сад №550",
		"description": "Опис для сад номер 550",
		"createdAt": "2024-07-15T21:00:00.000Z",
		"coords": {
			"lat": 50.6567,
			"lon": 30.5219
		},
		"category": "park"
	},
	{
		"id": "551",
		"name": "Офіс №551",
		"description": "Опис для офіс номер 551",
		"createdAt": "2024-04-10T21:00:00.000Z",
		"coords": {
			"lat": 50.6745,
			"lon": 30.5758
		},
		"category": "other"
	},
	{
		"id": "552",
		"name": "Алея №552",
		"description": "Опис для алея номер 552",
		"createdAt": "2024-08-06T21:00:00.000Z",
		"coords": {
			"lat": 50.3811,
			"lon": 30.4597
		},
		"category": "park"
	},
	{
		"id": "553",
		"name": "Установа №553",
		"description": "Опис для установа номер 553",
		"createdAt": "2024-06-22T21:00:00.000Z",
		"coords": {
			"lat": 50.6348,
			"lon": 30.2202
		},
		"category": "other"
	},
	{
		"id": "554",
		"name": "Сад №554",
		"description": "Опис для сад номер 554",
		"createdAt": "2024-09-25T21:00:00.000Z",
		"coords": {
			"lat": 50.4024,
			"lon": 30.5008
		},
		"category": "park"
	},
	{
		"id": "555",
		"name": "Бутік №555",
		"description": "Опис для бутік номер 555",
		"createdAt": "2024-04-02T21:00:00.000Z",
		"coords": {
			"lat": 50.6409,
			"lon": 30.4496
		},
		"category": "shop"
	},
	{
		"id": "556",
		"name": "Виставка №556",
		"description": "Опис для виставка номер 556",
		"createdAt": "2024-10-11T21:00:00.000Z",
		"coords": {
			"lat": 50.6092,
			"lon": 30.8275
		},
		"category": "museum"
	},
	{
		"id": "557",
		"name": "Об'єкт №557",
		"description": "Опис для об'єкт номер 557",
		"createdAt": "2024-11-23T22:00:00.000Z",
		"coords": {
			"lat": 50.6014,
			"lon": 30.5013
		},
		"category": "other"
	},
	{
		"id": "558",
		"name": "Парк №558",
		"description": "Опис для парк номер 558",
		"createdAt": "2024-09-08T21:00:00.000Z",
		"coords": {
			"lat": 50.3499,
			"lon": 30.4651
		},
		"category": "park"
	},
	{
		"id": "559",
		"name": "Парк №559",
		"description": "Опис для парк номер 559",
		"createdAt": "2024-02-17T22:00:00.000Z",
		"coords": {
			"lat": 50.5546,
			"lon": 30.916
		},
		"category": "park"
	},
	{
		"id": "560",
		"name": "Магазин №560",
		"description": "Опис для магазин номер 560",
		"createdAt": "2024-01-14T22:00:00.000Z",
		"coords": {
			"lat": 50.6456,
			"lon": 30.3732
		},
		"category": "shop"
	},
	{
		"id": "561",
		"name": "Центр №561",
		"description": "Опис для центр номер 561",
		"createdAt": "2024-03-11T22:00:00.000Z",
		"coords": {
			"lat": 50.6536,
			"lon": 30.489
		},
		"category": "other"
	},
	{
		"id": "562",
		"name": "Кав'ярня №562",
		"description": "Опис для кав'ярня номер 562",
		"createdAt": "2024-07-21T21:00:00.000Z",
		"coords": {
			"lat": 50.3564,
			"lon": 30.7373
		},
		"category": "food"
	},
	{
		"id": "563",
		"name": "Алея №563",
		"description": "Опис для алея номер 563",
		"createdAt": "2024-01-02T22:00:00.000Z",
		"coords": {
			"lat": 50.5445,
			"lon": 30.7181
		},
		"category": "park"
	},
	{
		"id": "564",
		"name": "Музей №564",
		"description": "Опис для музей номер 564",
		"createdAt": "2024-02-01T22:00:00.000Z",
		"coords": {
			"lat": 50.3524,
			"lon": 30.9173
		},
		"category": "museum"
	},
	{
		"id": "565",
		"name": "Кав'ярня №565",
		"description": "Опис для кав'ярня номер 565",
		"createdAt": "2024-09-01T21:00:00.000Z",
		"coords": {
			"lat": 50.3027,
			"lon": 30.6108
		},
		"category": "food"
	},
	{
		"id": "566",
		"name": "Піцерія №566",
		"description": "Опис для піцерія номер 566",
		"createdAt": "2024-10-13T21:00:00.000Z",
		"coords": {
			"lat": 50.5765,
			"lon": 30.2317
		},
		"category": "food"
	},
	{
		"id": "567",
		"name": "Сквер №567",
		"description": "Опис для сквер номер 567",
		"createdAt": "2024-09-30T21:00:00.000Z",
		"coords": {
			"lat": 50.616,
			"lon": 30.2234
		},
		"category": "park"
	},
	{
		"id": "568",
		"name": "Галерея №568",
		"description": "Опис для галерея номер 568",
		"createdAt": "2024-05-01T21:00:00.000Z",
		"coords": {
			"lat": 50.409,
			"lon": 30.752
		},
		"category": "museum"
	},
	{
		"id": "569",
		"name": "Алея №569",
		"description": "Опис для алея номер 569",
		"createdAt": "2024-02-25T22:00:00.000Z",
		"coords": {
			"lat": 50.6837,
			"lon": 30.7
		},
		"category": "park"
	},
	{
		"id": "570",
		"name": "Маркет №570",
		"description": "Опис для маркет номер 570",
		"createdAt": "2024-08-24T21:00:00.000Z",
		"coords": {
			"lat": 50.3145,
			"lon": 30.2095
		},
		"category": "shop"
	},
	{
		"id": "571",
		"name": "Центр №571",
		"description": "Опис для центр номер 571",
		"createdAt": "2024-04-25T21:00:00.000Z",
		"coords": {
			"lat": 50.4556,
			"lon": 30.4628
		},
		"category": "other"
	},
	{
		"id": "572",
		"name": "Роща №572",
		"description": "Опис для роща номер 572",
		"createdAt": "2024-07-09T21:00:00.000Z",
		"coords": {
			"lat": 50.5857,
			"lon": 30.7309
		},
		"category": "park"
	},
	{
		"id": "573",
		"name": "Галерея №573",
		"description": "Опис для галерея номер 573",
		"createdAt": "2024-11-22T22:00:00.000Z",
		"coords": {
			"lat": 50.562,
			"lon": 30.6753
		},
		"category": "museum"
	},
	{
		"id": "574",
		"name": "Суші-бар №574",
		"description": "Опис для суші-бар номер 574",
		"createdAt": "2024-11-10T22:00:00.000Z",
		"coords": {
			"lat": 50.6585,
			"lon": 30.6853
		},
		"category": "food"
	},
	{
		"id": "575",
		"name": "Столова №575",
		"description": "Опис для столова номер 575",
		"createdAt": "2024-08-07T21:00:00.000Z",
		"coords": {
			"lat": 50.6114,
			"lon": 30.7458
		},
		"category": "food"
	},
	{
		"id": "576",
		"name": "Супермаркет №576",
		"description": "Опис для супермаркет номер 576",
		"createdAt": "2024-08-17T21:00:00.000Z",
		"coords": {
			"lat": 50.4,
			"lon": 30.3556
		},
		"category": "shop"
	},
	{
		"id": "577",
		"name": "Виставка №577",
		"description": "Опис для виставка номер 577",
		"createdAt": "2024-09-27T21:00:00.000Z",
		"coords": {
			"lat": 50.5563,
			"lon": 30.408
		},
		"category": "museum"
	},
	{
		"id": "578",
		"name": "Кав'ярня №578",
		"description": "Опис для кав'ярня номер 578",
		"createdAt": "2024-02-11T22:00:00.000Z",
		"coords": {
			"lat": 50.3671,
			"lon": 30.9894
		},
		"category": "food"
	},
	{
		"id": "579",
		"name": "Кафе №579",
		"description": "Опис для кафе номер 579",
		"createdAt": "2024-01-04T22:00:00.000Z",
		"coords": {
			"lat": 50.6214,
			"lon": 30.9618
		},
		"category": "food"
	},
	{
		"id": "580",
		"name": "Виставка №580",
		"description": "Опис для виставка номер 580",
		"createdAt": "2024-07-23T21:00:00.000Z",
		"coords": {
			"lat": 50.6972,
			"lon": 30.7778
		},
		"category": "museum"
	},
	{
		"id": "581",
		"name": "Столова №581",
		"description": "Опис для столова номер 581",
		"createdAt": "2024-05-25T21:00:00.000Z",
		"coords": {
			"lat": 50.3445,
			"lon": 30.3044
		},
		"category": "food"
	},
	{
		"id": "582",
		"name": "Виставка №582",
		"description": "Опис для виставка номер 582",
		"createdAt": "2024-10-09T21:00:00.000Z",
		"coords": {
			"lat": 50.3762,
			"lon": 30.8525
		},
		"category": "museum"
	},
	{
		"id": "583",
		"name": "Будівля №583",
		"description": "Опис для будівля номер 583",
		"createdAt": "2024-06-30T21:00:00.000Z",
		"coords": {
			"lat": 50.4565,
			"lon": 30.8144
		},
		"category": "other"
	},
	{
		"id": "584",
		"name": "Алея №584",
		"description": "Опис для алея номер 584",
		"createdAt": "2024-12-27T22:00:00.000Z",
		"coords": {
			"lat": 50.6458,
			"lon": 30.7862
		},
		"category": "park"
	},
	{
		"id": "585",
		"name": "Суші-бар №585",
		"description": "Опис для суші-бар номер 585",
		"createdAt": "2024-12-13T22:00:00.000Z",
		"coords": {
			"lat": 50.4691,
			"lon": 30.5684
		},
		"category": "food"
	},
	{
		"id": "586",
		"name": "Суші-бар №586",
		"description": "Опис для суші-бар номер 586",
		"createdAt": "2024-10-03T21:00:00.000Z",
		"coords": {
			"lat": 50.5686,
			"lon": 30.9462
		},
		"category": "food"
	},
	{
		"id": "587",
		"name": "Центр №587",
		"description": "Опис для центр номер 587",
		"createdAt": "2024-04-14T21:00:00.000Z",
		"coords": {
			"lat": 50.311,
			"lon": 30.3966
		},
		"category": "other"
	},
	{
		"id": "588",
		"name": "Сад №588",
		"description": "Опис для сад номер 588",
		"createdAt": "2024-09-11T21:00:00.000Z",
		"coords": {
			"lat": 50.3347,
			"lon": 30.5721
		},
		"category": "park"
	},
	{
		"id": "589",
		"name": "Маркет №589",
		"description": "Опис для маркет номер 589",
		"createdAt": "2024-03-07T22:00:00.000Z",
		"coords": {
			"lat": 50.4384,
			"lon": 30.9227
		},
		"category": "shop"
	},
	{
		"id": "590",
		"name": "Торговий центр №590",
		"description": "Опис для торговий центр номер 590",
		"createdAt": "2024-05-02T21:00:00.000Z",
		"coords": {
			"lat": 50.3448,
			"lon": 30.6329
		},
		"category": "shop"
	},
	{
		"id": "591",
		"name": "Парк №591",
		"description": "Опис для парк номер 591",
		"createdAt": "2024-07-21T21:00:00.000Z",
		"coords": {
			"lat": 50.5754,
			"lon": 30.8157
		},
		"category": "park"
	},
	{
		"id": "592",
		"name": "Установа №592",
		"description": "Опис для установа номер 592",
		"createdAt": "2024-05-26T21:00:00.000Z",
		"coords": {
			"lat": 50.433,
			"lon": 30.2457
		},
		"category": "other"
	},
	{
		"id": "593",
		"name": "Галерея №593",
		"description": "Опис для галерея номер 593",
		"createdAt": "2024-08-15T21:00:00.000Z",
		"coords": {
			"lat": 50.4421,
			"lon": 30.9964
		},
		"category": "museum"
	},
	{
		"id": "594",
		"name": "Кафе №594",
		"description": "Опис для кафе номер 594",
		"createdAt": "2024-07-11T21:00:00.000Z",
		"coords": {
			"lat": 50.443,
			"lon": 30.2899
		},
		"category": "food"
	},
	{
		"id": "595",
		"name": "Парк №595",
		"description": "Опис для парк номер 595",
		"createdAt": "2024-10-20T21:00:00.000Z",
		"coords": {
			"lat": 50.5744,
			"lon": 30.9687
		},
		"category": "park"
	},
	{
		"id": "596",
		"name": "Алея №596",
		"description": "Опис для алея номер 596",
		"createdAt": "2024-11-10T22:00:00.000Z",
		"coords": {
			"lat": 50.6583,
			"lon": 30.5092
		},
		"category": "park"
	},
	{
		"id": "597",
		"name": "Столова №597",
		"description": "Опис для столова номер 597",
		"createdAt": "2024-11-19T22:00:00.000Z",
		"coords": {
			"lat": 50.6222,
			"lon": 30.344
		},
		"category": "food"
	},
	{
		"id": "598",
		"name": "Магазин №598",
		"description": "Опис для магазин номер 598",
		"createdAt": "2024-09-22T21:00:00.000Z",
		"coords": {
			"lat": 50.3381,
			"lon": 30.3586
		},
		"category": "shop"
	},
	{
		"id": "599",
		"name": "Алея №599",
		"description": "Опис для алея номер 599",
		"createdAt": "2024-04-22T21:00:00.000Z",
		"coords": {
			"lat": 50.6578,
			"lon": 30.6588
		},
		"category": "park"
	},
	{
		"id": "600",
		"name": "Кав'ярня №600",
		"description": "Опис для кав'ярня номер 600",
		"createdAt": "2024-09-19T21:00:00.000Z",
		"coords": {
			"lat": 50.3904,
			"lon": 30.7896
		},
		"category": "food"
	},
	{
		"id": "601",
		"name": "Сквер №601",
		"description": "Опис для сквер номер 601",
		"createdAt": "2024-04-06T21:00:00.000Z",
		"coords": {
			"lat": 50.4536,
			"lon": 30.4974
		},
		"category": "park"
	},
	{
		"id": "602",
		"name": "Бургерна №602",
		"description": "Опис для бургерна номер 602",
		"createdAt": "2024-06-12T21:00:00.000Z",
		"coords": {
			"lat": 50.4094,
			"lon": 30.9224
		},
		"category": "food"
	},
	{
		"id": "603",
		"name": "Столова №603",
		"description": "Опис для столова номер 603",
		"createdAt": "2024-07-16T21:00:00.000Z",
		"coords": {
			"lat": 50.6538,
			"lon": 30.5243
		},
		"category": "food"
	},
	{
		"id": "604",
		"name": "Музей №604",
		"description": "Опис для музей номер 604",
		"createdAt": "2024-07-02T21:00:00.000Z",
		"coords": {
			"lat": 50.3381,
			"lon": 30.2749
		},
		"category": "museum"
	},
	{
		"id": "605",
		"name": "Магазин №605",
		"description": "Опис для магазин номер 605",
		"createdAt": "2024-12-27T22:00:00.000Z",
		"coords": {
			"lat": 50.5998,
			"lon": 30.4571
		},
		"category": "shop"
	},
	{
		"id": "606",
		"name": "Центр №606",
		"description": "Опис для центр номер 606",
		"createdAt": "2024-07-20T21:00:00.000Z",
		"coords": {
			"lat": 50.4485,
			"lon": 30.6069
		},
		"category": "other"
	},
	{
		"id": "607",
		"name": "Сквер №607",
		"description": "Опис для сквер номер 607",
		"createdAt": "2024-03-26T22:00:00.000Z",
		"coords": {
			"lat": 50.3838,
			"lon": 30.8932
		},
		"category": "park"
	},
	{
		"id": "608",
		"name": "Виставка №608",
		"description": "Опис для виставка номер 608",
		"createdAt": "2024-10-09T21:00:00.000Z",
		"coords": {
			"lat": 50.6291,
			"lon": 30.5207
		},
		"category": "museum"
	},
	{
		"id": "609",
		"name": "Піцерія №609",
		"description": "Опис для піцерія номер 609",
		"createdAt": "2024-10-06T21:00:00.000Z",
		"coords": {
			"lat": 50.4054,
			"lon": 30.4844
		},
		"category": "food"
	},
	{
		"id": "610",
		"name": "Виставка №610",
		"description": "Опис для виставка номер 610",
		"createdAt": "2024-04-11T21:00:00.000Z",
		"coords": {
			"lat": 50.471,
			"lon": 30.7456
		},
		"category": "museum"
	},
	{
		"id": "611",
		"name": "Парк №611",
		"description": "Опис для парк номер 611",
		"createdAt": "2024-03-17T22:00:00.000Z",
		"coords": {
			"lat": 50.6576,
			"lon": 30.8164
		},
		"category": "park"
	},
	{
		"id": "612",
		"name": "Галерея №612",
		"description": "Опис для галерея номер 612",
		"createdAt": "2024-11-14T22:00:00.000Z",
		"coords": {
			"lat": 50.5862,
			"lon": 30.2588
		},
		"category": "museum"
	},
	{
		"id": "613",
		"name": "Виставка №613",
		"description": "Опис для виставка номер 613",
		"createdAt": "2024-11-24T22:00:00.000Z",
		"coords": {
			"lat": 50.5647,
			"lon": 30.6081
		},
		"category": "museum"
	},
	{
		"id": "614",
		"name": "Галерея №614",
		"description": "Опис для галерея номер 614",
		"createdAt": "2024-04-14T21:00:00.000Z",
		"coords": {
			"lat": 50.463,
			"lon": 30.816
		},
		"category": "museum"
	},
	{
		"id": "615",
		"name": "Роща №615",
		"description": "Опис для роща номер 615",
		"createdAt": "2024-06-25T21:00:00.000Z",
		"coords": {
			"lat": 50.6426,
			"lon": 30.7262
		},
		"category": "park"
	},
	{
		"id": "616",
		"name": "Маркет №616",
		"description": "Опис для маркет номер 616",
		"createdAt": "2024-06-15T21:00:00.000Z",
		"coords": {
			"lat": 50.6203,
			"lon": 30.6836
		},
		"category": "shop"
	},
	{
		"id": "617",
		"name": "Виставка №617",
		"description": "Опис для виставка номер 617",
		"createdAt": "2024-01-06T22:00:00.000Z",
		"coords": {
			"lat": 50.483,
			"lon": 30.9857
		},
		"category": "museum"
	},
	{
		"id": "618",
		"name": "Бургерна №618",
		"description": "Опис для бургерна номер 618",
		"createdAt": "2024-09-20T21:00:00.000Z",
		"coords": {
			"lat": 50.3114,
			"lon": 30.998
		},
		"category": "food"
	},
	{
		"id": "619",
		"name": "Виставка №619",
		"description": "Опис для виставка номер 619",
		"createdAt": "2024-07-06T21:00:00.000Z",
		"coords": {
			"lat": 50.371,
			"lon": 30.2499
		},
		"category": "museum"
	},
	{
		"id": "620",
		"name": "Виставка №620",
		"description": "Опис для виставка номер 620",
		"createdAt": "2024-09-08T21:00:00.000Z",
		"coords": {
			"lat": 50.4907,
			"lon": 30.3177
		},
		"category": "museum"
	},
	{
		"id": "621",
		"name": "Центр №621",
		"description": "Опис для центр номер 621",
		"createdAt": "2024-04-22T21:00:00.000Z",
		"coords": {
			"lat": 50.6643,
			"lon": 30.6186
		},
		"category": "other"
	},
	{
		"id": "622",
		"name": "Виставка №622",
		"description": "Опис для виставка номер 622",
		"createdAt": "2024-02-12T22:00:00.000Z",
		"coords": {
			"lat": 50.4962,
			"lon": 30.2115
		},
		"category": "museum"
	},
	{
		"id": "623",
		"name": "Піцерія №623",
		"description": "Опис для піцерія номер 623",
		"createdAt": "2024-08-15T21:00:00.000Z",
		"coords": {
			"lat": 50.406,
			"lon": 30.5614
		},
		"category": "food"
	},
	{
		"id": "624",
		"name": "Алея №624",
		"description": "Опис для алея номер 624",
		"createdAt": "2024-09-07T21:00:00.000Z",
		"coords": {
			"lat": 50.4119,
			"lon": 30.8423
		},
		"category": "park"
	},
	{
		"id": "625",
		"name": "Будівля №625",
		"description": "Опис для будівля номер 625",
		"createdAt": "2024-06-26T21:00:00.000Z",
		"coords": {
			"lat": 50.6398,
			"lon": 30.7924
		},
		"category": "other"
	},
	{
		"id": "626",
		"name": "Будівля №626",
		"description": "Опис для будівля номер 626",
		"createdAt": "2024-02-11T22:00:00.000Z",
		"coords": {
			"lat": 50.4502,
			"lon": 30.5964
		},
		"category": "other"
	},
	{
		"id": "627",
		"name": "Роща №627",
		"description": "Опис для роща номер 627",
		"createdAt": "2024-11-11T22:00:00.000Z",
		"coords": {
			"lat": 50.4768,
			"lon": 30.5588
		},
		"category": "park"
	},
	{
		"id": "628",
		"name": "Центр №628",
		"description": "Опис для центр номер 628",
		"createdAt": "2024-07-12T21:00:00.000Z",
		"coords": {
			"lat": 50.3565,
			"lon": 30.6848
		},
		"category": "museum"
	},
	{
		"id": "629",
		"name": "Музей №629",
		"description": "Опис для музей номер 629",
		"createdAt": "2024-12-05T22:00:00.000Z",
		"coords": {
			"lat": 50.3788,
			"lon": 30.7639
		},
		"category": "museum"
	},
	{
		"id": "630",
		"name": "Сквер №630",
		"description": "Опис для сквер номер 630",
		"createdAt": "2024-10-27T22:00:00.000Z",
		"coords": {
			"lat": 50.6308,
			"lon": 30.6425
		},
		"category": "park"
	},
	{
		"id": "631",
		"name": "Об'єкт №631",
		"description": "Опис для об'єкт номер 631",
		"createdAt": "2024-09-05T21:00:00.000Z",
		"coords": {
			"lat": 50.3898,
			"lon": 30.9505
		},
		"category": "other"
	},
	{
		"id": "632",
		"name": "Супермаркет №632",
		"description": "Опис для супермаркет номер 632",
		"createdAt": "2024-04-08T21:00:00.000Z",
		"coords": {
			"lat": 50.6048,
			"lon": 30.2568
		},
		"category": "shop"
	},
	{
		"id": "633",
		"name": "Роща №633",
		"description": "Опис для роща номер 633",
		"createdAt": "2024-01-11T22:00:00.000Z",
		"coords": {
			"lat": 50.3169,
			"lon": 30.7359
		},
		"category": "park"
	},
	{
		"id": "634",
		"name": "Парк №634",
		"description": "Опис для парк номер 634",
		"createdAt": "2024-07-04T21:00:00.000Z",
		"coords": {
			"lat": 50.5012,
			"lon": 30.6311
		},
		"category": "park"
	},
	{
		"id": "635",
		"name": "Будівля №635",
		"description": "Опис для будівля номер 635",
		"createdAt": "2024-01-25T22:00:00.000Z",
		"coords": {
			"lat": 50.6605,
			"lon": 30.7656
		},
		"category": "other"
	},
	{
		"id": "636",
		"name": "Алея №636",
		"description": "Опис для алея номер 636",
		"createdAt": "2024-09-23T21:00:00.000Z",
		"coords": {
			"lat": 50.4814,
			"lon": 30.658
		},
		"category": "park"
	},
	{
		"id": "637",
		"name": "Сквер №637",
		"description": "Опис для сквер номер 637",
		"createdAt": "2024-04-23T21:00:00.000Z",
		"coords": {
			"lat": 50.639,
			"lon": 30.2341
		},
		"category": "park"
	},
	{
		"id": "638",
		"name": "Центр №638",
		"description": "Опис для центр номер 638",
		"createdAt": "2024-06-08T21:00:00.000Z",
		"coords": {
			"lat": 50.6072,
			"lon": 30.6115
		},
		"category": "museum"
	},
	{
		"id": "639",
		"name": "Виставка №639",
		"description": "Опис для виставка номер 639",
		"createdAt": "2024-04-09T21:00:00.000Z",
		"coords": {
			"lat": 50.6284,
			"lon": 30.2542
		},
		"category": "museum"
	},
	{
		"id": "640",
		"name": "Піцерія №640",
		"description": "Опис для піцерія номер 640",
		"createdAt": "2024-06-23T21:00:00.000Z",
		"coords": {
			"lat": 50.5006,
			"lon": 30.3528
		},
		"category": "food"
	},
	{
		"id": "641",
		"name": "Центр №641",
		"description": "Опис для центр номер 641",
		"createdAt": "2024-10-09T21:00:00.000Z",
		"coords": {
			"lat": 50.4344,
			"lon": 30.6289
		},
		"category": "museum"
	},
	{
		"id": "642",
		"name": "Установа №642",
		"description": "Опис для установа номер 642",
		"createdAt": "2024-12-24T22:00:00.000Z",
		"coords": {
			"lat": 50.665,
			"lon": 30.2431
		},
		"category": "other"
	},
	{
		"id": "643",
		"name": "Кав'ярня №643",
		"description": "Опис для кав'ярня номер 643",
		"createdAt": "2024-03-01T22:00:00.000Z",
		"coords": {
			"lat": 50.5502,
			"lon": 30.7886
		},
		"category": "food"
	},
	{
		"id": "644",
		"name": "Кафе №644",
		"description": "Опис для кафе номер 644",
		"createdAt": "2024-09-04T21:00:00.000Z",
		"coords": {
			"lat": 50.5625,
			"lon": 30.4653
		},
		"category": "food"
	},
	{
		"id": "645",
		"name": "Столова №645",
		"description": "Опис для столова номер 645",
		"createdAt": "2024-05-10T21:00:00.000Z",
		"coords": {
			"lat": 50.3215,
			"lon": 30.7369
		},
		"category": "food"
	},
	{
		"id": "646",
		"name": "Сад №646",
		"description": "Опис для сад номер 646",
		"createdAt": "2024-08-06T21:00:00.000Z",
		"coords": {
			"lat": 50.4733,
			"lon": 30.918
		},
		"category": "park"
	},
	{
		"id": "647",
		"name": "Суші-бар №647",
		"description": "Опис для суші-бар номер 647",
		"createdAt": "2024-06-05T21:00:00.000Z",
		"coords": {
			"lat": 50.3849,
			"lon": 30.9048
		},
		"category": "food"
	},
	{
		"id": "648",
		"name": "Галерея №648",
		"description": "Опис для галерея номер 648",
		"createdAt": "2024-04-16T21:00:00.000Z",
		"coords": {
			"lat": 50.5952,
			"lon": 30.8031
		},
		"category": "museum"
	},
	{
		"id": "649",
		"name": "Об'єкт №649",
		"description": "Опис для об'єкт номер 649",
		"createdAt": "2024-05-31T21:00:00.000Z",
		"coords": {
			"lat": 50.6915,
			"lon": 30.5108
		},
		"category": "other"
	},
	{
		"id": "650",
		"name": "Центр №650",
		"description": "Опис для центр номер 650",
		"createdAt": "2024-05-09T21:00:00.000Z",
		"coords": {
			"lat": 50.546,
			"lon": 30.799
		},
		"category": "museum"
	},
	{
		"id": "651",
		"name": "Бургерна №651",
		"description": "Опис для бургерна номер 651",
		"createdAt": "2024-08-15T21:00:00.000Z",
		"coords": {
			"lat": 50.3264,
			"lon": 30.8399
		},
		"category": "food"
	},
	{
		"id": "652",
		"name": "Центр №652",
		"description": "Опис для центр номер 652",
		"createdAt": "2024-05-14T21:00:00.000Z",
		"coords": {
			"lat": 50.5826,
			"lon": 30.4726
		},
		"category": "other"
	},
	{
		"id": "653",
		"name": "Бутік №653",
		"description": "Опис для бутік номер 653",
		"createdAt": "2024-10-26T21:00:00.000Z",
		"coords": {
			"lat": 50.3653,
			"lon": 30.6547
		},
		"category": "shop"
	},
	{
		"id": "654",
		"name": "Сад №654",
		"description": "Опис для сад номер 654",
		"createdAt": "2024-06-04T21:00:00.000Z",
		"coords": {
			"lat": 50.4191,
			"lon": 30.8229
		},
		"category": "park"
	},
	{
		"id": "655",
		"name": "Сквер №655",
		"description": "Опис для сквер номер 655",
		"createdAt": "2024-11-11T22:00:00.000Z",
		"coords": {
			"lat": 50.3418,
			"lon": 30.4201
		},
		"category": "park"
	},
	{
		"id": "656",
		"name": "Супермаркет №656",
		"description": "Опис для супермаркет номер 656",
		"createdAt": "2024-06-23T21:00:00.000Z",
		"coords": {
			"lat": 50.3297,
			"lon": 30.4622
		},
		"category": "shop"
	},
	{
		"id": "657",
		"name": "Виставка №657",
		"description": "Опис для виставка номер 657",
		"createdAt": "2024-07-20T21:00:00.000Z",
		"coords": {
			"lat": 50.4652,
			"lon": 30.9655
		},
		"category": "museum"
	},
	{
		"id": "658",
		"name": "Парк №658",
		"description": "Опис для парк номер 658",
		"createdAt": "2024-05-12T21:00:00.000Z",
		"coords": {
			"lat": 50.5009,
			"lon": 30.5021
		},
		"category": "park"
	},
	{
		"id": "659",
		"name": "Парк №659",
		"description": "Опис для парк номер 659",
		"createdAt": "2024-07-24T21:00:00.000Z",
		"coords": {
			"lat": 50.6485,
			"lon": 30.2329
		},
		"category": "park"
	},
	{
		"id": "660",
		"name": "Будівля №660",
		"description": "Опис для будівля номер 660",
		"createdAt": "2024-05-26T21:00:00.000Z",
		"coords": {
			"lat": 50.4514,
			"lon": 30.7895
		},
		"category": "other"
	},
	{
		"id": "661",
		"name": "Центр №661",
		"description": "Опис для центр номер 661",
		"createdAt": "2024-02-14T22:00:00.000Z",
		"coords": {
			"lat": 50.5313,
			"lon": 30.7378
		},
		"category": "other"
	},
	{
		"id": "662",
		"name": "Ресторан №662",
		"description": "Опис для ресторан номер 662",
		"createdAt": "2024-02-20T22:00:00.000Z",
		"coords": {
			"lat": 50.3726,
			"lon": 30.7808
		},
		"category": "food"
	},
	{
		"id": "663",
		"name": "Ресторан №663",
		"description": "Опис для ресторан номер 663",
		"createdAt": "2024-05-10T21:00:00.000Z",
		"coords": {
			"lat": 50.5366,
			"lon": 30.9767
		},
		"category": "food"
	},
	{
		"id": "664",
		"name": "Столова №664",
		"description": "Опис для столова номер 664",
		"createdAt": "2024-05-02T21:00:00.000Z",
		"coords": {
			"lat": 50.354,
			"lon": 30.3826
		},
		"category": "food"
	},
	{
		"id": "665",
		"name": "Установа №665",
		"description": "Опис для установа номер 665",
		"createdAt": "2024-05-23T21:00:00.000Z",
		"coords": {
			"lat": 50.5435,
			"lon": 30.8865
		},
		"category": "other"
	},
	{
		"id": "666",
		"name": "Кафе №666",
		"description": "Опис для кафе номер 666",
		"createdAt": "2024-12-06T22:00:00.000Z",
		"coords": {
			"lat": 50.6972,
			"lon": 30.9212
		},
		"category": "food"
	},
	{
		"id": "667",
		"name": "Центр №667",
		"description": "Опис для центр номер 667",
		"createdAt": "2024-08-21T21:00:00.000Z",
		"coords": {
			"lat": 50.3916,
			"lon": 30.9188
		},
		"category": "museum"
	},
	{
		"id": "668",
		"name": "Музей №668",
		"description": "Опис для музей номер 668",
		"createdAt": "2024-06-02T21:00:00.000Z",
		"coords": {
			"lat": 50.5672,
			"lon": 30.4092
		},
		"category": "museum"
	},
	{
		"id": "669",
		"name": "Магазин №669",
		"description": "Опис для магазин номер 669",
		"createdAt": "2024-11-20T22:00:00.000Z",
		"coords": {
			"lat": 50.4991,
			"lon": 30.795
		},
		"category": "shop"
	},
	{
		"id": "670",
		"name": "Піцерія №670",
		"description": "Опис для піцерія номер 670",
		"createdAt": "2024-02-01T22:00:00.000Z",
		"coords": {
			"lat": 50.4402,
			"lon": 30.3056
		},
		"category": "food"
	},
	{
		"id": "671",
		"name": "Маркет №671",
		"description": "Опис для маркет номер 671",
		"createdAt": "2024-08-15T21:00:00.000Z",
		"coords": {
			"lat": 50.5838,
			"lon": 30.8644
		},
		"category": "shop"
	},
	{
		"id": "672",
		"name": "Ресторан №672",
		"description": "Опис для ресторан номер 672",
		"createdAt": "2024-08-11T21:00:00.000Z",
		"coords": {
			"lat": 50.6534,
			"lon": 30.4698
		},
		"category": "food"
	},
	{
		"id": "673",
		"name": "Парк №673",
		"description": "Опис для парк номер 673",
		"createdAt": "2024-11-10T22:00:00.000Z",
		"coords": {
			"lat": 50.6851,
			"lon": 30.6355
		},
		"category": "park"
	},
	{
		"id": "674",
		"name": "Маркет №674",
		"description": "Опис для маркет номер 674",
		"createdAt": "2024-02-22T22:00:00.000Z",
		"coords": {
			"lat": 50.3406,
			"lon": 30.4029
		},
		"category": "shop"
	},
	{
		"id": "675",
		"name": "Парк №675",
		"description": "Опис для парк номер 675",
		"createdAt": "2024-01-17T22:00:00.000Z",
		"coords": {
			"lat": 50.5428,
			"lon": 30.7142
		},
		"category": "park"
	},
	{
		"id": "676",
		"name": "Сквер №676",
		"description": "Опис для сквер номер 676",
		"createdAt": "2024-05-07T21:00:00.000Z",
		"coords": {
			"lat": 50.4705,
			"lon": 30.2099
		},
		"category": "park"
	},
	{
		"id": "677",
		"name": "Кав'ярня №677",
		"description": "Опис для кав'ярня номер 677",
		"createdAt": "2024-02-23T22:00:00.000Z",
		"coords": {
			"lat": 50.4271,
			"lon": 30.2511
		},
		"category": "food"
	},
	{
		"id": "678",
		"name": "Роща №678",
		"description": "Опис для роща номер 678",
		"createdAt": "2024-11-27T22:00:00.000Z",
		"coords": {
			"lat": 50.6108,
			"lon": 30.8658
		},
		"category": "park"
	},
	{
		"id": "679",
		"name": "Будівля №679",
		"description": "Опис для будівля номер 679",
		"createdAt": "2024-05-22T21:00:00.000Z",
		"coords": {
			"lat": 50.4842,
			"lon": 30.5056
		},
		"category": "other"
	},
	{
		"id": "680",
		"name": "Офіс №680",
		"description": "Опис для офіс номер 680",
		"createdAt": "2024-12-16T22:00:00.000Z",
		"coords": {
			"lat": 50.4712,
			"lon": 30.6771
		},
		"category": "other"
	},
	{
		"id": "681",
		"name": "Сад №681",
		"description": "Опис для сад номер 681",
		"createdAt": "2024-12-08T22:00:00.000Z",
		"coords": {
			"lat": 50.3756,
			"lon": 30.8984
		},
		"category": "park"
	},
	{
		"id": "682",
		"name": "Сад №682",
		"description": "Опис для сад номер 682",
		"createdAt": "2024-10-19T21:00:00.000Z",
		"coords": {
			"lat": 50.4028,
			"lon": 30.7058
		},
		"category": "park"
	},
	{
		"id": "683",
		"name": "Музей №683",
		"description": "Опис для музей номер 683",
		"createdAt": "2024-02-09T22:00:00.000Z",
		"coords": {
			"lat": 50.5243,
			"lon": 30.8095
		},
		"category": "museum"
	},
	{
		"id": "684",
		"name": "Галерея №684",
		"description": "Опис для галерея номер 684",
		"createdAt": "2024-01-21T22:00:00.000Z",
		"coords": {
			"lat": 50.3933,
			"lon": 30.2203
		},
		"category": "museum"
	},
	{
		"id": "685",
		"name": "Музей №685",
		"description": "Опис для музей номер 685",
		"createdAt": "2024-03-25T22:00:00.000Z",
		"coords": {
			"lat": 50.3064,
			"lon": 30.6249
		},
		"category": "museum"
	},
	{
		"id": "686",
		"name": "Парк №686",
		"description": "Опис для парк номер 686",
		"createdAt": "2024-10-15T21:00:00.000Z",
		"coords": {
			"lat": 50.4208,
			"lon": 30.4636
		},
		"category": "park"
	},
	{
		"id": "687",
		"name": "Торговий центр №687",
		"description": "Опис для торговий центр номер 687",
		"createdAt": "2024-10-10T21:00:00.000Z",
		"coords": {
			"lat": 50.4814,
			"lon": 30.3253
		},
		"category": "shop"
	},
	{
		"id": "688",
		"name": "Парк №688",
		"description": "Опис для парк номер 688",
		"createdAt": "2024-04-15T21:00:00.000Z",
		"coords": {
			"lat": 50.4149,
			"lon": 30.2841
		},
		"category": "park"
	},
	{
		"id": "689",
		"name": "Ресторан №689",
		"description": "Опис для ресторан номер 689",
		"createdAt": "2024-10-02T21:00:00.000Z",
		"coords": {
			"lat": 50.6289,
			"lon": 30.6039
		},
		"category": "food"
	},
	{
		"id": "690",
		"name": "Магазин №690",
		"description": "Опис для магазин номер 690",
		"createdAt": "2024-06-27T21:00:00.000Z",
		"coords": {
			"lat": 50.331,
			"lon": 30.8967
		},
		"category": "shop"
	},
	{
		"id": "691",
		"name": "Об'єкт №691",
		"description": "Опис для об'єкт номер 691",
		"createdAt": "2024-08-20T21:00:00.000Z",
		"coords": {
			"lat": 50.6256,
			"lon": 30.534
		},
		"category": "other"
	},
	{
		"id": "692",
		"name": "Центр №692",
		"description": "Опис для центр номер 692",
		"createdAt": "2024-06-02T21:00:00.000Z",
		"coords": {
			"lat": 50.373,
			"lon": 30.6321
		},
		"category": "museum"
	},
	{
		"id": "693",
		"name": "Магазин №693",
		"description": "Опис для магазин номер 693",
		"createdAt": "2024-12-06T22:00:00.000Z",
		"coords": {
			"lat": 50.3166,
			"lon": 30.6632
		},
		"category": "shop"
	},
	{
		"id": "694",
		"name": "Музей №694",
		"description": "Опис для музей номер 694",
		"createdAt": "2024-08-20T21:00:00.000Z",
		"coords": {
			"lat": 50.3585,
			"lon": 30.4399
		},
		"category": "museum"
	},
	{
		"id": "695",
		"name": "Піцерія №695",
		"description": "Опис для піцерія номер 695",
		"createdAt": "2024-06-06T21:00:00.000Z",
		"coords": {
			"lat": 50.4531,
			"lon": 30.6773
		},
		"category": "food"
	},
	{
		"id": "696",
		"name": "Виставка №696",
		"description": "Опис для виставка номер 696",
		"createdAt": "2024-10-01T21:00:00.000Z",
		"coords": {
			"lat": 50.3011,
			"lon": 30.8603
		},
		"category": "museum"
	},
	{
		"id": "697",
		"name": "Виставка №697",
		"description": "Опис для виставка номер 697",
		"createdAt": "2024-12-25T22:00:00.000Z",
		"coords": {
			"lat": 50.6278,
			"lon": 30.9427
		},
		"category": "museum"
	},
	{
		"id": "698",
		"name": "Бургерна №698",
		"description": "Опис для бургерна номер 698",
		"createdAt": "2024-06-24T21:00:00.000Z",
		"coords": {
			"lat": 50.4612,
			"lon": 30.8937
		},
		"category": "food"
	},
	{
		"id": "699",
		"name": "Магазин №699",
		"description": "Опис для магазин номер 699",
		"createdAt": "2024-04-21T21:00:00.000Z",
		"coords": {
			"lat": 50.6338,
			"lon": 30.9811
		},
		"category": "shop"
	},
	{
		"id": "700",
		"name": "Виставка №700",
		"description": "Опис для виставка номер 700",
		"createdAt": "2024-03-09T22:00:00.000Z",
		"coords": {
			"lat": 50.4066,
			"lon": 30.2629
		},
		"category": "museum"
	},
	{
		"id": "701",
		"name": "Супермаркет №701",
		"description": "Опис для супермаркет номер 701",
		"createdAt": "2024-06-30T21:00:00.000Z",
		"coords": {
			"lat": 50.3356,
			"lon": 30.8221
		},
		"category": "shop"
	},
	{
		"id": "702",
		"name": "Торговий центр №702",
		"description": "Опис для торговий центр номер 702",
		"createdAt": "2024-03-10T22:00:00.000Z",
		"coords": {
			"lat": 50.46,
			"lon": 30.2331
		},
		"category": "shop"
	},
	{
		"id": "703",
		"name": "Столова №703",
		"description": "Опис для столова номер 703",
		"createdAt": "2024-03-26T22:00:00.000Z",
		"coords": {
			"lat": 50.5015,
			"lon": 30.7605
		},
		"category": "food"
	},
	{
		"id": "704",
		"name": "Роща №704",
		"description": "Опис для роща номер 704",
		"createdAt": "2024-06-20T21:00:00.000Z",
		"coords": {
			"lat": 50.5779,
			"lon": 30.4175
		},
		"category": "park"
	},
	{
		"id": "705",
		"name": "Маркет №705",
		"description": "Опис для маркет номер 705",
		"createdAt": "2024-05-12T21:00:00.000Z",
		"coords": {
			"lat": 50.3164,
			"lon": 30.8863
		},
		"category": "shop"
	},
	{
		"id": "706",
		"name": "Суші-бар №706",
		"description": "Опис для суші-бар номер 706",
		"createdAt": "2024-04-24T21:00:00.000Z",
		"coords": {
			"lat": 50.557,
			"lon": 30.2898
		},
		"category": "food"
	},
	{
		"id": "707",
		"name": "Бургерна №707",
		"description": "Опис для бургерна номер 707",
		"createdAt": "2024-04-20T21:00:00.000Z",
		"coords": {
			"lat": 50.4093,
			"lon": 30.9404
		},
		"category": "food"
	},
	{
		"id": "708",
		"name": "Центр №708",
		"description": "Опис для центр номер 708",
		"createdAt": "2024-10-12T21:00:00.000Z",
		"coords": {
			"lat": 50.4918,
			"lon": 30.9193
		},
		"category": "other"
	},
	{
		"id": "709",
		"name": "Кафе №709",
		"description": "Опис для кафе номер 709",
		"createdAt": "2024-04-22T21:00:00.000Z",
		"coords": {
			"lat": 50.3013,
			"lon": 30.976
		},
		"category": "food"
	},
	{
		"id": "710",
		"name": "Сад №710",
		"description": "Опис для сад номер 710",
		"createdAt": "2024-05-06T21:00:00.000Z",
		"coords": {
			"lat": 50.6513,
			"lon": 30.3241
		},
		"category": "park"
	},
	{
		"id": "711",
		"name": "Торговий центр №711",
		"description": "Опис для торговий центр номер 711",
		"createdAt": "2024-02-26T22:00:00.000Z",
		"coords": {
			"lat": 50.531,
			"lon": 30.6682
		},
		"category": "shop"
	},
	{
		"id": "712",
		"name": "Об'єкт №712",
		"description": "Опис для об'єкт номер 712",
		"createdAt": "2024-12-16T22:00:00.000Z",
		"coords": {
			"lat": 50.6794,
			"lon": 30.5264
		},
		"category": "other"
	},
	{
		"id": "713",
		"name": "Супермаркет №713",
		"description": "Опис для супермаркет номер 713",
		"createdAt": "2024-01-03T22:00:00.000Z",
		"coords": {
			"lat": 50.3587,
			"lon": 30.3186
		},
		"category": "shop"
	},
	{
		"id": "714",
		"name": "Піцерія №714",
		"description": "Опис для піцерія номер 714",
		"createdAt": "2024-01-18T22:00:00.000Z",
		"coords": {
			"lat": 50.3802,
			"lon": 30.5618
		},
		"category": "food"
	},
	{
		"id": "715",
		"name": "Ресторан №715",
		"description": "Опис для ресторан номер 715",
		"createdAt": "2024-10-06T21:00:00.000Z",
		"coords": {
			"lat": 50.3174,
			"lon": 30.4293
		},
		"category": "food"
	},
	{
		"id": "716",
		"name": "Ресторан №716",
		"description": "Опис для ресторан номер 716",
		"createdAt": "2024-09-06T21:00:00.000Z",
		"coords": {
			"lat": 50.4828,
			"lon": 30.6543
		},
		"category": "food"
	},
	{
		"id": "717",
		"name": "Бутік №717",
		"description": "Опис для бутік номер 717",
		"createdAt": "2024-09-06T21:00:00.000Z",
		"coords": {
			"lat": 50.3465,
			"lon": 30.2008
		},
		"category": "shop"
	},
	{
		"id": "718",
		"name": "Кав'ярня №718",
		"description": "Опис для кав'ярня номер 718",
		"createdAt": "2024-06-03T21:00:00.000Z",
		"coords": {
			"lat": 50.6137,
			"lon": 30.6182
		},
		"category": "food"
	},
	{
		"id": "719",
		"name": "Кав'ярня №719",
		"description": "Опис для кав'ярня номер 719",
		"createdAt": "2024-12-14T22:00:00.000Z",
		"coords": {
			"lat": 50.5333,
			"lon": 30.2403
		},
		"category": "food"
	},
	{
		"id": "720",
		"name": "Піцерія №720",
		"description": "Опис для піцерія номер 720",
		"createdAt": "2024-03-31T21:00:00.000Z",
		"coords": {
			"lat": 50.498,
			"lon": 30.9234
		},
		"category": "food"
	},
	{
		"id": "721",
		"name": "Центр №721",
		"description": "Опис для центр номер 721",
		"createdAt": "2024-08-26T21:00:00.000Z",
		"coords": {
			"lat": 50.5443,
			"lon": 30.2314
		},
		"category": "museum"
	},
	{
		"id": "722",
		"name": "Установа №722",
		"description": "Опис для установа номер 722",
		"createdAt": "2024-11-24T22:00:00.000Z",
		"coords": {
			"lat": 50.3127,
			"lon": 30.6329
		},
		"category": "other"
	},
	{
		"id": "723",
		"name": "Центр №723",
		"description": "Опис для центр номер 723",
		"createdAt": "2024-12-15T22:00:00.000Z",
		"coords": {
			"lat": 50.3014,
			"lon": 30.5829
		},
		"category": "museum"
	},
	{
		"id": "724",
		"name": "Бутік №724",
		"description": "Опис для бутік номер 724",
		"createdAt": "2024-10-25T21:00:00.000Z",
		"coords": {
			"lat": 50.3377,
			"lon": 30.9997
		},
		"category": "shop"
	},
	{
		"id": "725",
		"name": "Алея №725",
		"description": "Опис для алея номер 725",
		"createdAt": "2024-01-27T22:00:00.000Z",
		"coords": {
			"lat": 50.6206,
			"lon": 30.3789
		},
		"category": "park"
	},
	{
		"id": "726",
		"name": "Роща №726",
		"description": "Опис для роща номер 726",
		"createdAt": "2024-06-19T21:00:00.000Z",
		"coords": {
			"lat": 50.5547,
			"lon": 30.6309
		},
		"category": "park"
	},
	{
		"id": "727",
		"name": "Піцерія №727",
		"description": "Опис для піцерія номер 727",
		"createdAt": "2024-06-01T21:00:00.000Z",
		"coords": {
			"lat": 50.4606,
			"lon": 30.7807
		},
		"category": "food"
	},
	{
		"id": "728",
		"name": "Виставка №728",
		"description": "Опис для виставка номер 728",
		"createdAt": "2024-06-01T21:00:00.000Z",
		"coords": {
			"lat": 50.459,
			"lon": 30.7437
		},
		"category": "museum"
	},
	{
		"id": "729",
		"name": "Торговий центр №729",
		"description": "Опис для торговий центр номер 729",
		"createdAt": "2024-11-08T22:00:00.000Z",
		"coords": {
			"lat": 50.6531,
			"lon": 30.5461
		},
		"category": "shop"
	},
	{
		"id": "730",
		"name": "Установа №730",
		"description": "Опис для установа номер 730",
		"createdAt": "2024-12-27T22:00:00.000Z",
		"coords": {
			"lat": 50.6322,
			"lon": 30.9939
		},
		"category": "other"
	},
	{
		"id": "731",
		"name": "Будівля №731",
		"description": "Опис для будівля номер 731",
		"createdAt": "2024-11-24T22:00:00.000Z",
		"coords": {
			"lat": 50.5185,
			"lon": 30.2111
		},
		"category": "other"
	},
	{
		"id": "732",
		"name": "Супермаркет №732",
		"description": "Опис для супермаркет номер 732",
		"createdAt": "2024-02-12T22:00:00.000Z",
		"coords": {
			"lat": 50.6876,
			"lon": 30.5641
		},
		"category": "shop"
	},
	{
		"id": "733",
		"name": "Бутік №733",
		"description": "Опис для бутік номер 733",
		"createdAt": "2024-02-20T22:00:00.000Z",
		"coords": {
			"lat": 50.5512,
			"lon": 30.3696
		},
		"category": "shop"
	},
	{
		"id": "734",
		"name": "Магазин №734",
		"description": "Опис для магазин номер 734",
		"createdAt": "2024-07-31T21:00:00.000Z",
		"coords": {
			"lat": 50.568,
			"lon": 30.7772
		},
		"category": "shop"
	},
	{
		"id": "735",
		"name": "Парк №735",
		"description": "Опис для парк номер 735",
		"createdAt": "2024-11-10T22:00:00.000Z",
		"coords": {
			"lat": 50.4356,
			"lon": 30.8872
		},
		"category": "park"
	},
	{
		"id": "736",
		"name": "Галерея №736",
		"description": "Опис для галерея номер 736",
		"createdAt": "2023-12-31T22:00:00.000Z",
		"coords": {
			"lat": 50.309,
			"lon": 30.8464
		},
		"category": "museum"
	},
	{
		"id": "737",
		"name": "Офіс №737",
		"description": "Опис для офіс номер 737",
		"createdAt": "2024-01-08T22:00:00.000Z",
		"coords": {
			"lat": 50.5994,
			"lon": 30.3992
		},
		"category": "other"
	},
	{
		"id": "738",
		"name": "Виставка №738",
		"description": "Опис для виставка номер 738",
		"createdAt": "2024-11-30T22:00:00.000Z",
		"coords": {
			"lat": 50.6965,
			"lon": 30.2736
		},
		"category": "museum"
	},
	{
		"id": "739",
		"name": "Алея №739",
		"description": "Опис для алея номер 739",
		"createdAt": "2024-01-27T22:00:00.000Z",
		"coords": {
			"lat": 50.3901,
			"lon": 30.8415
		},
		"category": "park"
	},
	{
		"id": "740",
		"name": "Роща №740",
		"description": "Опис для роща номер 740",
		"createdAt": "2024-05-23T21:00:00.000Z",
		"coords": {
			"lat": 50.616,
			"lon": 30.3779
		},
		"category": "park"
	},
	{
		"id": "741",
		"name": "Кав'ярня №741",
		"description": "Опис для кав'ярня номер 741",
		"createdAt": "2024-02-25T22:00:00.000Z",
		"coords": {
			"lat": 50.6761,
			"lon": 30.3343
		},
		"category": "food"
	},
	{
		"id": "742",
		"name": "Маркет №742",
		"description": "Опис для маркет номер 742",
		"createdAt": "2024-12-18T22:00:00.000Z",
		"coords": {
			"lat": 50.3651,
			"lon": 30.2604
		},
		"category": "shop"
	},
	{
		"id": "743",
		"name": "Будівля №743",
		"description": "Опис для будівля номер 743",
		"createdAt": "2024-06-23T21:00:00.000Z",
		"coords": {
			"lat": 50.3872,
			"lon": 30.5547
		},
		"category": "other"
	},
	{
		"id": "744",
		"name": "Бутік №744",
		"description": "Опис для бутік номер 744",
		"createdAt": "2024-09-01T21:00:00.000Z",
		"coords": {
			"lat": 50.5045,
			"lon": 30.9091
		},
		"category": "shop"
	},
	{
		"id": "745",
		"name": "Маркет №745",
		"description": "Опис для маркет номер 745",
		"createdAt": "2024-10-14T21:00:00.000Z",
		"coords": {
			"lat": 50.3093,
			"lon": 30.9432
		},
		"category": "shop"
	},
	{
		"id": "746",
		"name": "Бутік №746",
		"description": "Опис для бутік номер 746",
		"createdAt": "2024-05-21T21:00:00.000Z",
		"coords": {
			"lat": 50.5293,
			"lon": 30.3036
		},
		"category": "shop"
	},
	{
		"id": "747",
		"name": "Парк №747",
		"description": "Опис для парк номер 747",
		"createdAt": "2024-09-14T21:00:00.000Z",
		"coords": {
			"lat": 50.6771,
			"lon": 30.5282
		},
		"category": "park"
	},
	{
		"id": "748",
		"name": "Суші-бар №748",
		"description": "Опис для суші-бар номер 748",
		"createdAt": "2024-08-18T21:00:00.000Z",
		"coords": {
			"lat": 50.5904,
			"lon": 30.8083
		},
		"category": "food"
	},
	{
		"id": "749",
		"name": "Установа №749",
		"description": "Опис для установа номер 749",
		"createdAt": "2024-05-04T21:00:00.000Z",
		"coords": {
			"lat": 50.6113,
			"lon": 30.549
		},
		"category": "other"
	},
	{
		"id": "750",
		"name": "Алея №750",
		"description": "Опис для алея номер 750",
		"createdAt": "2024-04-15T21:00:00.000Z",
		"coords": {
			"lat": 50.4044,
			"lon": 30.7591
		},
		"category": "park"
	},
	{
		"id": "751",
		"name": "Алея №751",
		"description": "Опис для алея номер 751",
		"createdAt": "2024-07-17T21:00:00.000Z",
		"coords": {
			"lat": 50.316,
			"lon": 30.4989
		},
		"category": "park"
	},
	{
		"id": "752",
		"name": "Музей №752",
		"description": "Опис для музей номер 752",
		"createdAt": "2024-03-07T22:00:00.000Z",
		"coords": {
			"lat": 50.3551,
			"lon": 30.3101
		},
		"category": "museum"
	},
	{
		"id": "753",
		"name": "Галерея №753",
		"description": "Опис для галерея номер 753",
		"createdAt": "2024-08-01T21:00:00.000Z",
		"coords": {
			"lat": 50.366,
			"lon": 30.7446
		},
		"category": "museum"
	},
	{
		"id": "754",
		"name": "Алея №754",
		"description": "Опис для алея номер 754",
		"createdAt": "2024-08-02T21:00:00.000Z",
		"coords": {
			"lat": 50.5481,
			"lon": 30.8293
		},
		"category": "park"
	},
	{
		"id": "755",
		"name": "Бургерна №755",
		"description": "Опис для бургерна номер 755",
		"createdAt": "2024-09-08T21:00:00.000Z",
		"coords": {
			"lat": 50.6804,
			"lon": 30.4636
		},
		"category": "food"
	},
	{
		"id": "756",
		"name": "Галерея №756",
		"description": "Опис для галерея номер 756",
		"createdAt": "2024-06-05T21:00:00.000Z",
		"coords": {
			"lat": 50.3519,
			"lon": 30.3792
		},
		"category": "museum"
	},
	{
		"id": "757",
		"name": "Центр №757",
		"description": "Опис для центр номер 757",
		"createdAt": "2024-05-23T21:00:00.000Z",
		"coords": {
			"lat": 50.3337,
			"lon": 30.2917
		},
		"category": "museum"
	},
	{
		"id": "758",
		"name": "Піцерія №758",
		"description": "Опис для піцерія номер 758",
		"createdAt": "2024-10-07T21:00:00.000Z",
		"coords": {
			"lat": 50.6861,
			"lon": 30.9939
		},
		"category": "food"
	},
	{
		"id": "759",
		"name": "Бургерна №759",
		"description": "Опис для бургерна номер 759",
		"createdAt": "2024-09-08T21:00:00.000Z",
		"coords": {
			"lat": 50.4757,
			"lon": 30.3716
		},
		"category": "food"
	},
	{
		"id": "760",
		"name": "Бутік №760",
		"description": "Опис для бутік номер 760",
		"createdAt": "2024-09-06T21:00:00.000Z",
		"coords": {
			"lat": 50.3851,
			"lon": 30.2245
		},
		"category": "shop"
	},
	{
		"id": "761",
		"name": "Маркет №761",
		"description": "Опис для маркет номер 761",
		"createdAt": "2024-07-12T21:00:00.000Z",
		"coords": {
			"lat": 50.5115,
			"lon": 30.4789
		},
		"category": "shop"
	},
	{
		"id": "762",
		"name": "Офіс №762",
		"description": "Опис для офіс номер 762",
		"createdAt": "2024-08-13T21:00:00.000Z",
		"coords": {
			"lat": 50.5008,
			"lon": 30.8576
		},
		"category": "other"
	},
	{
		"id": "763",
		"name": "Маркет №763",
		"description": "Опис для маркет номер 763",
		"createdAt": "2024-12-21T22:00:00.000Z",
		"coords": {
			"lat": 50.5283,
			"lon": 30.7661
		},
		"category": "shop"
	},
	{
		"id": "764",
		"name": "Супермаркет №764",
		"description": "Опис для супермаркет номер 764",
		"createdAt": "2024-06-11T21:00:00.000Z",
		"coords": {
			"lat": 50.4396,
			"lon": 30.5376
		},
		"category": "shop"
	},
	{
		"id": "765",
		"name": "Сад №765",
		"description": "Опис для сад номер 765",
		"createdAt": "2024-12-15T22:00:00.000Z",
		"coords": {
			"lat": 50.5946,
			"lon": 30.2682
		},
		"category": "park"
	},
	{
		"id": "766",
		"name": "Бутік №766",
		"description": "Опис для бутік номер 766",
		"createdAt": "2024-08-15T21:00:00.000Z",
		"coords": {
			"lat": 50.6558,
			"lon": 30.6784
		},
		"category": "shop"
	},
	{
		"id": "767",
		"name": "Піцерія №767",
		"description": "Опис для піцерія номер 767",
		"createdAt": "2024-03-09T22:00:00.000Z",
		"coords": {
			"lat": 50.3654,
			"lon": 30.7975
		},
		"category": "food"
	},
	{
		"id": "768",
		"name": "Виставка №768",
		"description": "Опис для виставка номер 768",
		"createdAt": "2024-10-06T21:00:00.000Z",
		"coords": {
			"lat": 50.348,
			"lon": 30.8597
		},
		"category": "museum"
	},
	{
		"id": "769",
		"name": "Музей №769",
		"description": "Опис для музей номер 769",
		"createdAt": "2024-12-03T22:00:00.000Z",
		"coords": {
			"lat": 50.4702,
			"lon": 30.5246
		},
		"category": "museum"
	},
	{
		"id": "770",
		"name": "Офіс №770",
		"description": "Опис для офіс номер 770",
		"createdAt": "2024-12-27T22:00:00.000Z",
		"coords": {
			"lat": 50.3502,
			"lon": 30.7275
		},
		"category": "other"
	},
	{
		"id": "771",
		"name": "Магазин №771",
		"description": "Опис для магазин номер 771",
		"createdAt": "2024-05-06T21:00:00.000Z",
		"coords": {
			"lat": 50.4362,
			"lon": 30.4139
		},
		"category": "shop"
	},
	{
		"id": "772",
		"name": "Парк №772",
		"description": "Опис для парк номер 772",
		"createdAt": "2024-08-18T21:00:00.000Z",
		"coords": {
			"lat": 50.4571,
			"lon": 30.7345
		},
		"category": "park"
	},
	{
		"id": "773",
		"name": "Музей №773",
		"description": "Опис для музей номер 773",
		"createdAt": "2023-12-31T22:00:00.000Z",
		"coords": {
			"lat": 50.356,
			"lon": 30.7132
		},
		"category": "museum"
	},
	{
		"id": "774",
		"name": "Кафе №774",
		"description": "Опис для кафе номер 774",
		"createdAt": "2024-02-08T22:00:00.000Z",
		"coords": {
			"lat": 50.3374,
			"lon": 30.4204
		},
		"category": "food"
	},
	{
		"id": "775",
		"name": "Кафе №775",
		"description": "Опис для кафе номер 775",
		"createdAt": "2024-01-24T22:00:00.000Z",
		"coords": {
			"lat": 50.6248,
			"lon": 30.8641
		},
		"category": "food"
	},
	{
		"id": "776",
		"name": "Об'єкт №776",
		"description": "Опис для об'єкт номер 776",
		"createdAt": "2024-03-22T22:00:00.000Z",
		"coords": {
			"lat": 50.4888,
			"lon": 30.5564
		},
		"category": "other"
	},
	{
		"id": "777",
		"name": "Ресторан №777",
		"description": "Опис для ресторан номер 777",
		"createdAt": "2024-10-10T21:00:00.000Z",
		"coords": {
			"lat": 50.4143,
			"lon": 30.4389
		},
		"category": "food"
	},
	{
		"id": "778",
		"name": "Об'єкт №778",
		"description": "Опис для об'єкт номер 778",
		"createdAt": "2024-02-24T22:00:00.000Z",
		"coords": {
			"lat": 50.3523,
			"lon": 30.5775
		},
		"category": "other"
	},
	{
		"id": "779",
		"name": "Офіс №779",
		"description": "Опис для офіс номер 779",
		"createdAt": "2024-06-02T21:00:00.000Z",
		"coords": {
			"lat": 50.659,
			"lon": 30.6725
		},
		"category": "other"
	},
	{
		"id": "780",
		"name": "Будівля №780",
		"description": "Опис для будівля номер 780",
		"createdAt": "2024-11-23T22:00:00.000Z",
		"coords": {
			"lat": 50.6136,
			"lon": 30.5775
		},
		"category": "other"
	},
	{
		"id": "781",
		"name": "Будівля №781",
		"description": "Опис для будівля номер 781",
		"createdAt": "2024-07-09T21:00:00.000Z",
		"coords": {
			"lat": 50.4148,
			"lon": 30.5592
		},
		"category": "other"
	},
	{
		"id": "782",
		"name": "Кафе №782",
		"description": "Опис для кафе номер 782",
		"createdAt": "2024-02-26T22:00:00.000Z",
		"coords": {
			"lat": 50.6906,
			"lon": 30.9146
		},
		"category": "food"
	},
	{
		"id": "783",
		"name": "Центр №783",
		"description": "Опис для центр номер 783",
		"createdAt": "2024-09-20T21:00:00.000Z",
		"coords": {
			"lat": 50.631,
			"lon": 30.9825
		},
		"category": "museum"
	},
	{
		"id": "784",
		"name": "Об'єкт №784",
		"description": "Опис для об'єкт номер 784",
		"createdAt": "2024-06-25T21:00:00.000Z",
		"coords": {
			"lat": 50.5669,
			"lon": 30.7272
		},
		"category": "other"
	},
	{
		"id": "785",
		"name": "Маркет №785",
		"description": "Опис для маркет номер 785",
		"createdAt": "2024-02-12T22:00:00.000Z",
		"coords": {
			"lat": 50.3775,
			"lon": 30.9415
		},
		"category": "shop"
	},
	{
		"id": "786",
		"name": "Ресторан №786",
		"description": "Опис для ресторан номер 786",
		"createdAt": "2024-12-04T22:00:00.000Z",
		"coords": {
			"lat": 50.3628,
			"lon": 30.503
		},
		"category": "food"
	},
	{
		"id": "787",
		"name": "Торговий центр №787",
		"description": "Опис для торговий центр номер 787",
		"createdAt": "2024-09-30T21:00:00.000Z",
		"coords": {
			"lat": 50.3095,
			"lon": 30.4954
		},
		"category": "shop"
	},
	{
		"id": "788",
		"name": "Столова №788",
		"description": "Опис для столова номер 788",
		"createdAt": "2024-03-22T22:00:00.000Z",
		"coords": {
			"lat": 50.3707,
			"lon": 30.7152
		},
		"category": "food"
	},
	{
		"id": "789",
		"name": "Офіс №789",
		"description": "Опис для офіс номер 789",
		"createdAt": "2024-07-26T21:00:00.000Z",
		"coords": {
			"lat": 50.3564,
			"lon": 30.5934
		},
		"category": "other"
	},
	{
		"id": "790",
		"name": "Галерея №790",
		"description": "Опис для галерея номер 790",
		"createdAt": "2024-07-11T21:00:00.000Z",
		"coords": {
			"lat": 50.5602,
			"lon": 30.548
		},
		"category": "museum"
	},
	{
		"id": "791",
		"name": "Піцерія №791",
		"description": "Опис для піцерія номер 791",
		"createdAt": "2024-08-15T21:00:00.000Z",
		"coords": {
			"lat": 50.4486,
			"lon": 30.7043
		},
		"category": "food"
	},
	{
		"id": "792",
		"name": "Бутік №792",
		"description": "Опис для бутік номер 792",
		"createdAt": "2024-01-18T22:00:00.000Z",
		"coords": {
			"lat": 50.3617,
			"lon": 30.528
		},
		"category": "shop"
	},
	{
		"id": "793",
		"name": "Бутік №793",
		"description": "Опис для бутік номер 793",
		"createdAt": "2024-07-24T21:00:00.000Z",
		"coords": {
			"lat": 50.363,
			"lon": 30.4599
		},
		"category": "shop"
	},
	{
		"id": "794",
		"name": "Центр №794",
		"description": "Опис для центр номер 794",
		"createdAt": "2024-02-12T22:00:00.000Z",
		"coords": {
			"lat": 50.3931,
			"lon": 30.8171
		},
		"category": "other"
	},
	{
		"id": "795",
		"name": "Галерея №795",
		"description": "Опис для галерея номер 795",
		"createdAt": "2024-06-05T21:00:00.000Z",
		"coords": {
			"lat": 50.687,
			"lon": 30.2029
		},
		"category": "museum"
	},
	{
		"id": "796",
		"name": "Виставка №796",
		"description": "Опис для виставка номер 796",
		"createdAt": "2024-11-25T22:00:00.000Z",
		"coords": {
			"lat": 50.5773,
			"lon": 30.7532
		},
		"category": "museum"
	},
	{
		"id": "797",
		"name": "Алея №797",
		"description": "Опис для алея номер 797",
		"createdAt": "2024-06-18T21:00:00.000Z",
		"coords": {
			"lat": 50.4428,
			"lon": 30.333
		},
		"category": "park"
	},
	{
		"id": "798",
		"name": "Парк №798",
		"description": "Опис для парк номер 798",
		"createdAt": "2024-06-30T21:00:00.000Z",
		"coords": {
			"lat": 50.4696,
			"lon": 30.7766
		},
		"category": "park"
	},
	{
		"id": "799",
		"name": "Виставка №799",
		"description": "Опис для виставка номер 799",
		"createdAt": "2024-07-14T21:00:00.000Z",
		"coords": {
			"lat": 50.3644,
			"lon": 30.5411
		},
		"category": "museum"
	},
	{
		"id": "800",
		"name": "Виставка №800",
		"description": "Опис для виставка номер 800",
		"createdAt": "2024-06-05T21:00:00.000Z",
		"coords": {
			"lat": 50.3085,
			"lon": 30.5184
		},
		"category": "museum"
	},
	{
		"id": "801",
		"name": "Офіс №801",
		"description": "Опис для офіс номер 801",
		"createdAt": "2024-11-15T22:00:00.000Z",
		"coords": {
			"lat": 50.6132,
			"lon": 30.5939
		},
		"category": "other"
	},
	{
		"id": "802",
		"name": "Галерея №802",
		"description": "Опис для галерея номер 802",
		"createdAt": "2024-02-04T22:00:00.000Z",
		"coords": {
			"lat": 50.5495,
			"lon": 30.9408
		},
		"category": "museum"
	},
	{
		"id": "803",
		"name": "Сквер №803",
		"description": "Опис для сквер номер 803",
		"createdAt": "2024-01-04T22:00:00.000Z",
		"coords": {
			"lat": 50.5481,
			"lon": 30.3726
		},
		"category": "park"
	},
	{
		"id": "804",
		"name": "Сад №804",
		"description": "Опис для сад номер 804",
		"createdAt": "2024-03-07T22:00:00.000Z",
		"coords": {
			"lat": 50.4946,
			"lon": 30.644
		},
		"category": "park"
	},
	{
		"id": "805",
		"name": "Бутік №805",
		"description": "Опис для бутік номер 805",
		"createdAt": "2024-12-23T22:00:00.000Z",
		"coords": {
			"lat": 50.5278,
			"lon": 30.9505
		},
		"category": "shop"
	},
	{
		"id": "806",
		"name": "Сквер №806",
		"description": "Опис для сквер номер 806",
		"createdAt": "2024-02-05T22:00:00.000Z",
		"coords": {
			"lat": 50.5265,
			"lon": 30.7168
		},
		"category": "park"
	},
	{
		"id": "807",
		"name": "Ресторан №807",
		"description": "Опис для ресторан номер 807",
		"createdAt": "2024-06-01T21:00:00.000Z",
		"coords": {
			"lat": 50.5444,
			"lon": 30.4572
		},
		"category": "food"
	},
	{
		"id": "808",
		"name": "Столова №808",
		"description": "Опис для столова номер 808",
		"createdAt": "2024-02-07T22:00:00.000Z",
		"coords": {
			"lat": 50.5734,
			"lon": 30.2738
		},
		"category": "food"
	},
	{
		"id": "809",
		"name": "Виставка №809",
		"description": "Опис для виставка номер 809",
		"createdAt": "2024-06-05T21:00:00.000Z",
		"coords": {
			"lat": 50.302,
			"lon": 30.8072
		},
		"category": "museum"
	},
	{
		"id": "810",
		"name": "Роща №810",
		"description": "Опис для роща номер 810",
		"createdAt": "2024-01-01T22:00:00.000Z",
		"coords": {
			"lat": 50.3489,
			"lon": 30.3076
		},
		"category": "park"
	},
	{
		"id": "811",
		"name": "Центр №811",
		"description": "Опис для центр номер 811",
		"createdAt": "2024-09-08T21:00:00.000Z",
		"coords": {
			"lat": 50.3404,
			"lon": 30.9185
		},
		"category": "museum"
	},
	{
		"id": "812",
		"name": "Бургерна №812",
		"description": "Опис для бургерна номер 812",
		"createdAt": "2024-04-08T21:00:00.000Z",
		"coords": {
			"lat": 50.584,
			"lon": 30.3701
		},
		"category": "food"
	},
	{
		"id": "813",
		"name": "Маркет №813",
		"description": "Опис для маркет номер 813",
		"createdAt": "2024-06-19T21:00:00.000Z",
		"coords": {
			"lat": 50.6349,
			"lon": 30.614
		},
		"category": "shop"
	},
	{
		"id": "814",
		"name": "Сад №814",
		"description": "Опис для сад номер 814",
		"createdAt": "2024-09-04T21:00:00.000Z",
		"coords": {
			"lat": 50.6262,
			"lon": 30.7545
		},
		"category": "park"
	},
	{
		"id": "815",
		"name": "Парк №815",
		"description": "Опис для парк номер 815",
		"createdAt": "2024-02-26T22:00:00.000Z",
		"coords": {
			"lat": 50.3192,
			"lon": 30.2409
		},
		"category": "park"
	},
	{
		"id": "816",
		"name": "Столова №816",
		"description": "Опис для столова номер 816",
		"createdAt": "2024-03-05T22:00:00.000Z",
		"coords": {
			"lat": 50.5382,
			"lon": 30.9523
		},
		"category": "food"
	},
	{
		"id": "817",
		"name": "Центр №817",
		"description": "Опис для центр номер 817",
		"createdAt": "2024-11-11T22:00:00.000Z",
		"coords": {
			"lat": 50.393,
			"lon": 30.5561
		},
		"category": "other"
	},
	{
		"id": "818",
		"name": "Бургерна №818",
		"description": "Опис для бургерна номер 818",
		"createdAt": "2024-04-14T21:00:00.000Z",
		"coords": {
			"lat": 50.3137,
			"lon": 30.9681
		},
		"category": "food"
	},
	{
		"id": "819",
		"name": "Маркет №819",
		"description": "Опис для маркет номер 819",
		"createdAt": "2024-08-14T21:00:00.000Z",
		"coords": {
			"lat": 50.4658,
			"lon": 30.3628
		},
		"category": "shop"
	},
	{
		"id": "820",
		"name": "Виставка №820",
		"description": "Опис для виставка номер 820",
		"createdAt": "2024-07-01T21:00:00.000Z",
		"coords": {
			"lat": 50.4998,
			"lon": 30.3765
		},
		"category": "museum"
	},
	{
		"id": "821",
		"name": "Супермаркет №821",
		"description": "Опис для супермаркет номер 821",
		"createdAt": "2024-06-08T21:00:00.000Z",
		"coords": {
			"lat": 50.4435,
			"lon": 30.3641
		},
		"category": "shop"
	},
	{
		"id": "822",
		"name": "Сквер №822",
		"description": "Опис для сквер номер 822",
		"createdAt": "2024-10-11T21:00:00.000Z",
		"coords": {
			"lat": 50.4426,
			"lon": 30.6108
		},
		"category": "park"
	},
	{
		"id": "823",
		"name": "Сад №823",
		"description": "Опис для сад номер 823",
		"createdAt": "2024-07-03T21:00:00.000Z",
		"coords": {
			"lat": 50.3995,
			"lon": 30.6398
		},
		"category": "park"
	},
	{
		"id": "824",
		"name": "Суші-бар №824",
		"description": "Опис для суші-бар номер 824",
		"createdAt": "2024-10-26T21:00:00.000Z",
		"coords": {
			"lat": 50.3893,
			"lon": 30.9774
		},
		"category": "food"
	},
	{
		"id": "825",
		"name": "Магазин №825",
		"description": "Опис для магазин номер 825",
		"createdAt": "2024-02-14T22:00:00.000Z",
		"coords": {
			"lat": 50.3758,
			"lon": 30.7211
		},
		"category": "shop"
	},
	{
		"id": "826",
		"name": "Ресторан №826",
		"description": "Опис для ресторан номер 826",
		"createdAt": "2024-02-04T22:00:00.000Z",
		"coords": {
			"lat": 50.4397,
			"lon": 30.4812
		},
		"category": "food"
	},
	{
		"id": "827",
		"name": "Маркет №827",
		"description": "Опис для маркет номер 827",
		"createdAt": "2024-03-12T22:00:00.000Z",
		"coords": {
			"lat": 50.549,
			"lon": 30.5144
		},
		"category": "shop"
	},
	{
		"id": "828",
		"name": "Супермаркет №828",
		"description": "Опис для супермаркет номер 828",
		"createdAt": "2024-05-01T21:00:00.000Z",
		"coords": {
			"lat": 50.6176,
			"lon": 30.4951
		},
		"category": "shop"
	},
	{
		"id": "829",
		"name": "Центр №829",
		"description": "Опис для центр номер 829",
		"createdAt": "2024-01-21T22:00:00.000Z",
		"coords": {
			"lat": 50.6473,
			"lon": 30.2864
		},
		"category": "other"
	},
	{
		"id": "830",
		"name": "Роща №830",
		"description": "Опис для роща номер 830",
		"createdAt": "2024-06-26T21:00:00.000Z",
		"coords": {
			"lat": 50.5587,
			"lon": 30.9632
		},
		"category": "park"
	},
	{
		"id": "831",
		"name": "Сквер №831",
		"description": "Опис для сквер номер 831",
		"createdAt": "2024-10-25T21:00:00.000Z",
		"coords": {
			"lat": 50.5143,
			"lon": 30.6908
		},
		"category": "park"
	},
	{
		"id": "832",
		"name": "Кав'ярня №832",
		"description": "Опис для кав'ярня номер 832",
		"createdAt": "2024-02-02T22:00:00.000Z",
		"coords": {
			"lat": 50.5128,
			"lon": 30.8244
		},
		"category": "food"
	},
	{
		"id": "833",
		"name": "Центр №833",
		"description": "Опис для центр номер 833",
		"createdAt": "2024-09-02T21:00:00.000Z",
		"coords": {
			"lat": 50.5574,
			"lon": 30.8293
		},
		"category": "other"
	},
	{
		"id": "834",
		"name": "Галерея №834",
		"description": "Опис для галерея номер 834",
		"createdAt": "2024-12-04T22:00:00.000Z",
		"coords": {
			"lat": 50.6535,
			"lon": 30.2456
		},
		"category": "museum"
	},
	{
		"id": "835",
		"name": "Виставка №835",
		"description": "Опис для виставка номер 835",
		"createdAt": "2024-04-23T21:00:00.000Z",
		"coords": {
			"lat": 50.3261,
			"lon": 30.3017
		},
		"category": "museum"
	},
	{
		"id": "836",
		"name": "Виставка №836",
		"description": "Опис для виставка номер 836",
		"createdAt": "2024-09-16T21:00:00.000Z",
		"coords": {
			"lat": 50.5026,
			"lon": 30.3045
		},
		"category": "museum"
	},
	{
		"id": "837",
		"name": "Магазин №837",
		"description": "Опис для магазин номер 837",
		"createdAt": "2024-03-03T22:00:00.000Z",
		"coords": {
			"lat": 50.6896,
			"lon": 30.2672
		},
		"category": "shop"
	},
	{
		"id": "838",
		"name": "Виставка №838",
		"description": "Опис для виставка номер 838",
		"createdAt": "2024-02-16T22:00:00.000Z",
		"coords": {
			"lat": 50.5521,
			"lon": 30.6852
		},
		"category": "museum"
	},
	{
		"id": "839",
		"name": "Супермаркет №839",
		"description": "Опис для супермаркет номер 839",
		"createdAt": "2024-07-20T21:00:00.000Z",
		"coords": {
			"lat": 50.3374,
			"lon": 30.5318
		},
		"category": "shop"
	},
	{
		"id": "840",
		"name": "Кав'ярня №840",
		"description": "Опис для кав'ярня номер 840",
		"createdAt": "2024-01-07T22:00:00.000Z",
		"coords": {
			"lat": 50.3895,
			"lon": 30.5767
		},
		"category": "food"
	},
	{
		"id": "841",
		"name": "Кафе №841",
		"description": "Опис для кафе номер 841",
		"createdAt": "2024-04-21T21:00:00.000Z",
		"coords": {
			"lat": 50.6709,
			"lon": 30.781
		},
		"category": "food"
	},
	{
		"id": "842",
		"name": "Центр №842",
		"description": "Опис для центр номер 842",
		"createdAt": "2024-05-19T21:00:00.000Z",
		"coords": {
			"lat": 50.6805,
			"lon": 30.5386
		},
		"category": "museum"
	},
	{
		"id": "843",
		"name": "Алея №843",
		"description": "Опис для алея номер 843",
		"createdAt": "2024-05-22T21:00:00.000Z",
		"coords": {
			"lat": 50.6529,
			"lon": 30.2157
		},
		"category": "park"
	},
	{
		"id": "844",
		"name": "Офіс №844",
		"description": "Опис для офіс номер 844",
		"createdAt": "2024-01-07T22:00:00.000Z",
		"coords": {
			"lat": 50.4995,
			"lon": 30.4052
		},
		"category": "other"
	},
	{
		"id": "845",
		"name": "Бургерна №845",
		"description": "Опис для бургерна номер 845",
		"createdAt": "2024-08-10T21:00:00.000Z",
		"coords": {
			"lat": 50.5669,
			"lon": 30.2263
		},
		"category": "food"
	},
	{
		"id": "846",
		"name": "Виставка №846",
		"description": "Опис для виставка номер 846",
		"createdAt": "2024-07-17T21:00:00.000Z",
		"coords": {
			"lat": 50.6018,
			"lon": 30.8749
		},
		"category": "museum"
	},
	{
		"id": "847",
		"name": "Галерея №847",
		"description": "Опис для галерея номер 847",
		"createdAt": "2024-04-03T21:00:00.000Z",
		"coords": {
			"lat": 50.3865,
			"lon": 30.5038
		},
		"category": "museum"
	},
	{
		"id": "848",
		"name": "Маркет №848",
		"description": "Опис для маркет номер 848",
		"createdAt": "2024-04-18T21:00:00.000Z",
		"coords": {
			"lat": 50.5159,
			"lon": 30.902
		},
		"category": "shop"
	},
	{
		"id": "849",
		"name": "Кафе №849",
		"description": "Опис для кафе номер 849",
		"createdAt": "2024-09-18T21:00:00.000Z",
		"coords": {
			"lat": 50.5975,
			"lon": 30.9724
		},
		"category": "food"
	},
	{
		"id": "850",
		"name": "Сквер №850",
		"description": "Опис для сквер номер 850",
		"createdAt": "2024-07-12T21:00:00.000Z",
		"coords": {
			"lat": 50.395,
			"lon": 30.251
		},
		"category": "park"
	},
	{
		"id": "851",
		"name": "Парк №851",
		"description": "Опис для парк номер 851",
		"createdAt": "2024-07-02T21:00:00.000Z",
		"coords": {
			"lat": 50.6531,
			"lon": 30.9376
		},
		"category": "park"
	},
	{
		"id": "852",
		"name": "Музей №852",
		"description": "Опис для музей номер 852",
		"createdAt": "2024-10-07T21:00:00.000Z",
		"coords": {
			"lat": 50.3294,
			"lon": 30.5076
		},
		"category": "museum"
	},
	{
		"id": "853",
		"name": "Супермаркет №853",
		"description": "Опис для супермаркет номер 853",
		"createdAt": "2024-01-11T22:00:00.000Z",
		"coords": {
			"lat": 50.6063,
			"lon": 30.7627
		},
		"category": "shop"
	},
	{
		"id": "854",
		"name": "Центр №854",
		"description": "Опис для центр номер 854",
		"createdAt": "2024-03-27T22:00:00.000Z",
		"coords": {
			"lat": 50.3068,
			"lon": 30.3888
		},
		"category": "museum"
	},
	{
		"id": "855",
		"name": "Роща №855",
		"description": "Опис для роща номер 855",
		"createdAt": "2024-07-07T21:00:00.000Z",
		"coords": {
			"lat": 50.5498,
			"lon": 30.3422
		},
		"category": "park"
	},
	{
		"id": "856",
		"name": "Установа №856",
		"description": "Опис для установа номер 856",
		"createdAt": "2024-05-24T21:00:00.000Z",
		"coords": {
			"lat": 50.3994,
			"lon": 30.782
		},
		"category": "other"
	},
	{
		"id": "857",
		"name": "Торговий центр №857",
		"description": "Опис для торговий центр номер 857",
		"createdAt": "2024-04-16T21:00:00.000Z",
		"coords": {
			"lat": 50.477,
			"lon": 30.3292
		},
		"category": "shop"
	},
	{
		"id": "858",
		"name": "Алея №858",
		"description": "Опис для алея номер 858",
		"createdAt": "2024-10-01T21:00:00.000Z",
		"coords": {
			"lat": 50.5489,
			"lon": 30.4463
		},
		"category": "park"
	},
	{
		"id": "859",
		"name": "Торговий центр №859",
		"description": "Опис для торговий центр номер 859",
		"createdAt": "2024-07-14T21:00:00.000Z",
		"coords": {
			"lat": 50.6305,
			"lon": 30.8174
		},
		"category": "shop"
	},
	{
		"id": "860",
		"name": "Бутік №860",
		"description": "Опис для бутік номер 860",
		"createdAt": "2024-07-09T21:00:00.000Z",
		"coords": {
			"lat": 50.6535,
			"lon": 30.2908
		},
		"category": "shop"
	},
	{
		"id": "861",
		"name": "Бутік №861",
		"description": "Опис для бутік номер 861",
		"createdAt": "2024-04-02T21:00:00.000Z",
		"coords": {
			"lat": 50.3374,
			"lon": 30.6633
		},
		"category": "shop"
	},
	{
		"id": "862",
		"name": "Центр №862",
		"description": "Опис для центр номер 862",
		"createdAt": "2024-01-07T22:00:00.000Z",
		"coords": {
			"lat": 50.4542,
			"lon": 30.7946
		},
		"category": "other"
	},
	{
		"id": "863",
		"name": "Центр №863",
		"description": "Опис для центр номер 863",
		"createdAt": "2024-11-27T22:00:00.000Z",
		"coords": {
			"lat": 50.4745,
			"lon": 30.3415
		},
		"category": "other"
	},
	{
		"id": "864",
		"name": "Магазин №864",
		"description": "Опис для магазин номер 864",
		"createdAt": "2024-03-03T22:00:00.000Z",
		"coords": {
			"lat": 50.4362,
			"lon": 30.4728
		},
		"category": "shop"
	},
	{
		"id": "865",
		"name": "Бутік №865",
		"description": "Опис для бутік номер 865",
		"createdAt": "2024-09-13T21:00:00.000Z",
		"coords": {
			"lat": 50.4816,
			"lon": 30.3473
		},
		"category": "shop"
	},
	{
		"id": "866",
		"name": "Установа №866",
		"description": "Опис для установа номер 866",
		"createdAt": "2024-04-18T21:00:00.000Z",
		"coords": {
			"lat": 50.5606,
			"lon": 30.7961
		},
		"category": "other"
	},
	{
		"id": "867",
		"name": "Роща №867",
		"description": "Опис для роща номер 867",
		"createdAt": "2024-01-14T22:00:00.000Z",
		"coords": {
			"lat": 50.3755,
			"lon": 30.5855
		},
		"category": "park"
	},
	{
		"id": "868",
		"name": "Роща №868",
		"description": "Опис для роща номер 868",
		"createdAt": "2024-11-01T22:00:00.000Z",
		"coords": {
			"lat": 50.5746,
			"lon": 30.9888
		},
		"category": "park"
	},
	{
		"id": "869",
		"name": "Суші-бар №869",
		"description": "Опис для суші-бар номер 869",
		"createdAt": "2024-06-07T21:00:00.000Z",
		"coords": {
			"lat": 50.4814,
			"lon": 30.6057
		},
		"category": "food"
	},
	{
		"id": "870",
		"name": "Будівля №870",
		"description": "Опис для будівля номер 870",
		"createdAt": "2023-12-31T22:00:00.000Z",
		"coords": {
			"lat": 50.3669,
			"lon": 30.31
		},
		"category": "other"
	},
	{
		"id": "871",
		"name": "Супермаркет №871",
		"description": "Опис для супермаркет номер 871",
		"createdAt": "2024-01-07T22:00:00.000Z",
		"coords": {
			"lat": 50.5151,
			"lon": 30.9341
		},
		"category": "shop"
	},
	{
		"id": "872",
		"name": "Офіс №872",
		"description": "Опис для офіс номер 872",
		"createdAt": "2024-02-09T22:00:00.000Z",
		"coords": {
			"lat": 50.5426,
			"lon": 30.3683
		},
		"category": "other"
	},
	{
		"id": "873",
		"name": "Ресторан №873",
		"description": "Опис для ресторан номер 873",
		"createdAt": "2024-02-23T22:00:00.000Z",
		"coords": {
			"lat": 50.362,
			"lon": 30.5932
		},
		"category": "food"
	},
	{
		"id": "874",
		"name": "Музей №874",
		"description": "Опис для музей номер 874",
		"createdAt": "2024-05-16T21:00:00.000Z",
		"coords": {
			"lat": 50.404,
			"lon": 30.9604
		},
		"category": "museum"
	},
	{
		"id": "875",
		"name": "Установа №875",
		"description": "Опис для установа номер 875",
		"createdAt": "2024-07-04T21:00:00.000Z",
		"coords": {
			"lat": 50.5897,
			"lon": 30.4153
		},
		"category": "other"
	},
	{
		"id": "876",
		"name": "Ресторан №876",
		"description": "Опис для ресторан номер 876",
		"createdAt": "2024-09-23T21:00:00.000Z",
		"coords": {
			"lat": 50.6609,
			"lon": 30.3088
		},
		"category": "food"
	},
	{
		"id": "877",
		"name": "Магазин №877",
		"description": "Опис для магазин номер 877",
		"createdAt": "2024-06-23T21:00:00.000Z",
		"coords": {
			"lat": 50.6162,
			"lon": 30.7241
		},
		"category": "shop"
	},
	{
		"id": "878",
		"name": "Офіс №878",
		"description": "Опис для офіс номер 878",
		"createdAt": "2024-12-27T22:00:00.000Z",
		"coords": {
			"lat": 50.4739,
			"lon": 30.2264
		},
		"category": "other"
	},
	{
		"id": "879",
		"name": "Магазин №879",
		"description": "Опис для магазин номер 879",
		"createdAt": "2024-05-17T21:00:00.000Z",
		"coords": {
			"lat": 50.4331,
			"lon": 30.7854
		},
		"category": "shop"
	},
	{
		"id": "880",
		"name": "Центр №880",
		"description": "Опис для центр номер 880",
		"createdAt": "2024-07-10T21:00:00.000Z",
		"coords": {
			"lat": 50.5093,
			"lon": 30.6332
		},
		"category": "museum"
	},
	{
		"id": "881",
		"name": "Магазин №881",
		"description": "Опис для магазин номер 881",
		"createdAt": "2024-10-23T21:00:00.000Z",
		"coords": {
			"lat": 50.5729,
			"lon": 30.9109
		},
		"category": "shop"
	},
	{
		"id": "882",
		"name": "Музей №882",
		"description": "Опис для музей номер 882",
		"createdAt": "2024-07-26T21:00:00.000Z",
		"coords": {
			"lat": 50.6436,
			"lon": 30.5592
		},
		"category": "museum"
	},
	{
		"id": "883",
		"name": "Музей №883",
		"description": "Опис для музей номер 883",
		"createdAt": "2024-12-21T22:00:00.000Z",
		"coords": {
			"lat": 50.5334,
			"lon": 30.6463
		},
		"category": "museum"
	},
	{
		"id": "884",
		"name": "Магазин №884",
		"description": "Опис для магазин номер 884",
		"createdAt": "2024-08-14T21:00:00.000Z",
		"coords": {
			"lat": 50.4182,
			"lon": 30.2346
		},
		"category": "shop"
	},
	{
		"id": "885",
		"name": "Виставка №885",
		"description": "Опис для виставка номер 885",
		"createdAt": "2024-12-21T22:00:00.000Z",
		"coords": {
			"lat": 50.3942,
			"lon": 30.3932
		},
		"category": "museum"
	},
	{
		"id": "886",
		"name": "Будівля №886",
		"description": "Опис для будівля номер 886",
		"createdAt": "2024-10-23T21:00:00.000Z",
		"coords": {
			"lat": 50.6035,
			"lon": 30.6668
		},
		"category": "other"
	},
	{
		"id": "887",
		"name": "Центр №887",
		"description": "Опис для центр номер 887",
		"createdAt": "2024-05-25T21:00:00.000Z",
		"coords": {
			"lat": 50.6025,
			"lon": 30.4771
		},
		"category": "museum"
	},
	{
		"id": "888",
		"name": "Алея №888",
		"description": "Опис для алея номер 888",
		"createdAt": "2024-09-04T21:00:00.000Z",
		"coords": {
			"lat": 50.4164,
			"lon": 30.7275
		},
		"category": "park"
	},
	{
		"id": "889",
		"name": "Об'єкт №889",
		"description": "Опис для об'єкт номер 889",
		"createdAt": "2024-04-10T21:00:00.000Z",
		"coords": {
			"lat": 50.4943,
			"lon": 30.394
		},
		"category": "other"
	},
	{
		"id": "890",
		"name": "Кафе №890",
		"description": "Опис для кафе номер 890",
		"createdAt": "2024-12-23T22:00:00.000Z",
		"coords": {
			"lat": 50.4428,
			"lon": 30.9626
		},
		"category": "food"
	},
	{
		"id": "891",
		"name": "Сад №891",
		"description": "Опис для сад номер 891",
		"createdAt": "2024-01-22T22:00:00.000Z",
		"coords": {
			"lat": 50.4858,
			"lon": 30.8009
		},
		"category": "park"
	},
	{
		"id": "892",
		"name": "Парк №892",
		"description": "Опис для парк номер 892",
		"createdAt": "2024-05-15T21:00:00.000Z",
		"coords": {
			"lat": 50.6094,
			"lon": 30.8366
		},
		"category": "park"
	},
	{
		"id": "893",
		"name": "Столова №893",
		"description": "Опис для столова номер 893",
		"createdAt": "2024-04-20T21:00:00.000Z",
		"coords": {
			"lat": 50.4085,
			"lon": 30.2462
		},
		"category": "food"
	},
	{
		"id": "894",
		"name": "Галерея №894",
		"description": "Опис для галерея номер 894",
		"createdAt": "2024-11-02T22:00:00.000Z",
		"coords": {
			"lat": 50.4006,
			"lon": 30.9213
		},
		"category": "museum"
	},
	{
		"id": "895",
		"name": "Магазин №895",
		"description": "Опис для магазин номер 895",
		"createdAt": "2024-12-07T22:00:00.000Z",
		"coords": {
			"lat": 50.4317,
			"lon": 30.5502
		},
		"category": "shop"
	},
	{
		"id": "896",
		"name": "Кав'ярня №896",
		"description": "Опис для кав'ярня номер 896",
		"createdAt": "2024-11-09T22:00:00.000Z",
		"coords": {
			"lat": 50.3599,
			"lon": 30.4988
		},
		"category": "food"
	},
	{
		"id": "897",
		"name": "Маркет №897",
		"description": "Опис для маркет номер 897",
		"createdAt": "2024-04-22T21:00:00.000Z",
		"coords": {
			"lat": 50.4456,
			"lon": 30.651
		},
		"category": "shop"
	},
	{
		"id": "898",
		"name": "Супермаркет №898",
		"description": "Опис для супермаркет номер 898",
		"createdAt": "2024-06-01T21:00:00.000Z",
		"coords": {
			"lat": 50.4477,
			"lon": 30.818
		},
		"category": "shop"
	},
	{
		"id": "899",
		"name": "Галерея №899",
		"description": "Опис для галерея номер 899",
		"createdAt": "2024-07-11T21:00:00.000Z",
		"coords": {
			"lat": 50.5903,
			"lon": 30.8567
		},
		"category": "museum"
	},
	{
		"id": "900",
		"name": "Ресторан №900",
		"description": "Опис для ресторан номер 900",
		"createdAt": "2024-01-21T22:00:00.000Z",
		"coords": {
			"lat": 50.3729,
			"lon": 30.3939
		},
		"category": "food"
	},
	{
		"id": "901",
		"name": "Бургерна №901",
		"description": "Опис для бургерна номер 901",
		"createdAt": "2024-11-27T22:00:00.000Z",
		"coords": {
			"lat": 50.5107,
			"lon": 30.773
		},
		"category": "food"
	},
	{
		"id": "902",
		"name": "Суші-бар №902",
		"description": "Опис для суші-бар номер 902",
		"createdAt": "2024-01-08T22:00:00.000Z",
		"coords": {
			"lat": 50.5903,
			"lon": 30.2896
		},
		"category": "food"
	},
	{
		"id": "903",
		"name": "Центр №903",
		"description": "Опис для центр номер 903",
		"createdAt": "2024-01-27T22:00:00.000Z",
		"coords": {
			"lat": 50.5089,
			"lon": 30.2918
		},
		"category": "other"
	},
	{
		"id": "904",
		"name": "Маркет №904",
		"description": "Опис для маркет номер 904",
		"createdAt": "2024-11-04T22:00:00.000Z",
		"coords": {
			"lat": 50.3662,
			"lon": 30.7141
		},
		"category": "shop"
	},
	{
		"id": "905",
		"name": "Сквер №905",
		"description": "Опис для сквер номер 905",
		"createdAt": "2024-03-07T22:00:00.000Z",
		"coords": {
			"lat": 50.5546,
			"lon": 30.3855
		},
		"category": "park"
	},
	{
		"id": "906",
		"name": "Парк №906",
		"description": "Опис для парк номер 906",
		"createdAt": "2024-12-20T22:00:00.000Z",
		"coords": {
			"lat": 50.3363,
			"lon": 30.6928
		},
		"category": "park"
	},
	{
		"id": "907",
		"name": "Сад №907",
		"description": "Опис для сад номер 907",
		"createdAt": "2024-10-16T21:00:00.000Z",
		"coords": {
			"lat": 50.5766,
			"lon": 30.4789
		},
		"category": "park"
	},
	{
		"id": "908",
		"name": "Сад №908",
		"description": "Опис для сад номер 908",
		"createdAt": "2024-11-18T22:00:00.000Z",
		"coords": {
			"lat": 50.5458,
			"lon": 30.6133
		},
		"category": "park"
	},
	{
		"id": "909",
		"name": "Парк №909",
		"description": "Опис для парк номер 909",
		"createdAt": "2024-02-27T22:00:00.000Z",
		"coords": {
			"lat": 50.5138,
			"lon": 30.7004
		},
		"category": "park"
	},
	{
		"id": "910",
		"name": "Сад №910",
		"description": "Опис для сад номер 910",
		"createdAt": "2024-04-27T21:00:00.000Z",
		"coords": {
			"lat": 50.6031,
			"lon": 30.4506
		},
		"category": "park"
	},
	{
		"id": "911",
		"name": "Музей №911",
		"description": "Опис для музей номер 911",
		"createdAt": "2024-12-18T22:00:00.000Z",
		"coords": {
			"lat": 50.3129,
			"lon": 30.2985
		},
		"category": "museum"
	},
	{
		"id": "912",
		"name": "Ресторан №912",
		"description": "Опис для ресторан номер 912",
		"createdAt": "2024-03-19T22:00:00.000Z",
		"coords": {
			"lat": 50.6068,
			"lon": 30.5963
		},
		"category": "food"
	},
	{
		"id": "913",
		"name": "Суші-бар №913",
		"description": "Опис для суші-бар номер 913",
		"createdAt": "2024-12-08T22:00:00.000Z",
		"coords": {
			"lat": 50.4191,
			"lon": 30.3856
		},
		"category": "food"
	},
	{
		"id": "914",
		"name": "Центр №914",
		"description": "Опис для центр номер 914",
		"createdAt": "2024-10-05T21:00:00.000Z",
		"coords": {
			"lat": 50.4166,
			"lon": 30.6791
		},
		"category": "museum"
	},
	{
		"id": "915",
		"name": "Виставка №915",
		"description": "Опис для виставка номер 915",
		"createdAt": "2024-10-09T21:00:00.000Z",
		"coords": {
			"lat": 50.5726,
			"lon": 30.7285
		},
		"category": "museum"
	},
	{
		"id": "916",
		"name": "Роща №916",
		"description": "Опис для роща номер 916",
		"createdAt": "2024-05-25T21:00:00.000Z",
		"coords": {
			"lat": 50.6175,
			"lon": 30.3713
		},
		"category": "park"
	},
	{
		"id": "917",
		"name": "Сквер №917",
		"description": "Опис для сквер номер 917",
		"createdAt": "2024-02-18T22:00:00.000Z",
		"coords": {
			"lat": 50.3846,
			"lon": 30.5364
		},
		"category": "park"
	},
	{
		"id": "918",
		"name": "Суші-бар №918",
		"description": "Опис для суші-бар номер 918",
		"createdAt": "2024-01-11T22:00:00.000Z",
		"coords": {
			"lat": 50.3196,
			"lon": 30.3753
		},
		"category": "food"
	},
	{
		"id": "919",
		"name": "Будівля №919",
		"description": "Опис для будівля номер 919",
		"createdAt": "2024-08-31T21:00:00.000Z",
		"coords": {
			"lat": 50.467,
			"lon": 30.2371
		},
		"category": "other"
	},
	{
		"id": "920",
		"name": "Суші-бар №920",
		"description": "Опис для суші-бар номер 920",
		"createdAt": "2024-01-18T22:00:00.000Z",
		"coords": {
			"lat": 50.5868,
			"lon": 30.8619
		},
		"category": "food"
	},
	{
		"id": "921",
		"name": "Установа №921",
		"description": "Опис для установа номер 921",
		"createdAt": "2024-11-06T22:00:00.000Z",
		"coords": {
			"lat": 50.4585,
			"lon": 30.8047
		},
		"category": "other"
	},
	{
		"id": "922",
		"name": "Галерея №922",
		"description": "Опис для галерея номер 922",
		"createdAt": "2024-01-13T22:00:00.000Z",
		"coords": {
			"lat": 50.5039,
			"lon": 30.4189
		},
		"category": "museum"
	},
	{
		"id": "923",
		"name": "Роща №923",
		"description": "Опис для роща номер 923",
		"createdAt": "2024-10-02T21:00:00.000Z",
		"coords": {
			"lat": 50.5201,
			"lon": 30.3371
		},
		"category": "park"
	},
	{
		"id": "924",
		"name": "Сквер №924",
		"description": "Опис для сквер номер 924",
		"createdAt": "2024-12-19T22:00:00.000Z",
		"coords": {
			"lat": 50.511,
			"lon": 30.7886
		},
		"category": "park"
	},
	{
		"id": "925",
		"name": "Центр №925",
		"description": "Опис для центр номер 925",
		"createdAt": "2024-08-06T21:00:00.000Z",
		"coords": {
			"lat": 50.5025,
			"lon": 30.4028
		},
		"category": "other"
	},
	{
		"id": "926",
		"name": "Магазин №926",
		"description": "Опис для магазин номер 926",
		"createdAt": "2024-07-02T21:00:00.000Z",
		"coords": {
			"lat": 50.4885,
			"lon": 30.8678
		},
		"category": "shop"
	},
	{
		"id": "927",
		"name": "Бутік №927",
		"description": "Опис для бутік номер 927",
		"createdAt": "2024-08-24T21:00:00.000Z",
		"coords": {
			"lat": 50.6049,
			"lon": 30.8263
		},
		"category": "shop"
	},
	{
		"id": "928",
		"name": "Магазин №928",
		"description": "Опис для магазин номер 928",
		"createdAt": "2024-04-10T21:00:00.000Z",
		"coords": {
			"lat": 50.6871,
			"lon": 30.3541
		},
		"category": "shop"
	},
	{
		"id": "929",
		"name": "Центр №929",
		"description": "Опис для центр номер 929",
		"createdAt": "2024-10-08T21:00:00.000Z",
		"coords": {
			"lat": 50.3729,
			"lon": 30.4022
		},
		"category": "other"
	},
	{
		"id": "930",
		"name": "Бургерна №930",
		"description": "Опис для бургерна номер 930",
		"createdAt": "2024-11-02T22:00:00.000Z",
		"coords": {
			"lat": 50.4041,
			"lon": 30.3486
		},
		"category": "food"
	},
	{
		"id": "931",
		"name": "Суші-бар №931",
		"description": "Опис для суші-бар номер 931",
		"createdAt": "2024-10-21T21:00:00.000Z",
		"coords": {
			"lat": 50.4575,
			"lon": 30.317
		},
		"category": "food"
	},
	{
		"id": "932",
		"name": "Маркет №932",
		"description": "Опис для маркет номер 932",
		"createdAt": "2024-08-02T21:00:00.000Z",
		"coords": {
			"lat": 50.4595,
			"lon": 30.6073
		},
		"category": "shop"
	},
	{
		"id": "933",
		"name": "Центр №933",
		"description": "Опис для центр номер 933",
		"createdAt": "2024-09-15T21:00:00.000Z",
		"coords": {
			"lat": 50.4088,
			"lon": 30.5234
		},
		"category": "museum"
	},
	{
		"id": "934",
		"name": "Галерея №934",
		"description": "Опис для галерея номер 934",
		"createdAt": "2024-12-07T22:00:00.000Z",
		"coords": {
			"lat": 50.6431,
			"lon": 30.5057
		},
		"category": "museum"
	},
	{
		"id": "935",
		"name": "Кафе №935",
		"description": "Опис для кафе номер 935",
		"createdAt": "2024-11-04T22:00:00.000Z",
		"coords": {
			"lat": 50.5369,
			"lon": 30.3248
		},
		"category": "food"
	},
	{
		"id": "936",
		"name": "Галерея №936",
		"description": "Опис для галерея номер 936",
		"createdAt": "2024-08-06T21:00:00.000Z",
		"coords": {
			"lat": 50.5822,
			"lon": 30.7037
		},
		"category": "museum"
	},
	{
		"id": "937",
		"name": "Ресторан №937",
		"description": "Опис для ресторан номер 937",
		"createdAt": "2024-06-14T21:00:00.000Z",
		"coords": {
			"lat": 50.3517,
			"lon": 30.2945
		},
		"category": "food"
	},
	{
		"id": "938",
		"name": "Офіс №938",
		"description": "Опис для офіс номер 938",
		"createdAt": "2024-06-12T21:00:00.000Z",
		"coords": {
			"lat": 50.6606,
			"lon": 30.8395
		},
		"category": "other"
	},
	{
		"id": "939",
		"name": "Центр №939",
		"description": "Опис для центр номер 939",
		"createdAt": "2024-09-17T21:00:00.000Z",
		"coords": {
			"lat": 50.57,
			"lon": 30.3196
		},
		"category": "museum"
	},
	{
		"id": "940",
		"name": "Виставка №940",
		"description": "Опис для виставка номер 940",
		"createdAt": "2024-11-03T22:00:00.000Z",
		"coords": {
			"lat": 50.6148,
			"lon": 30.4964
		},
		"category": "museum"
	},
	{
		"id": "941",
		"name": "Будівля №941",
		"description": "Опис для будівля номер 941",
		"createdAt": "2024-11-16T22:00:00.000Z",
		"coords": {
			"lat": 50.5113,
			"lon": 30.33
		},
		"category": "other"
	},
	{
		"id": "942",
		"name": "Установа №942",
		"description": "Опис для установа номер 942",
		"createdAt": "2024-01-10T22:00:00.000Z",
		"coords": {
			"lat": 50.3081,
			"lon": 30.5706
		},
		"category": "other"
	},
	{
		"id": "943",
		"name": "Установа №943",
		"description": "Опис для установа номер 943",
		"createdAt": "2024-01-07T22:00:00.000Z",
		"coords": {
			"lat": 50.6445,
			"lon": 30.5242
		},
		"category": "other"
	},
	{
		"id": "944",
		"name": "Парк №944",
		"description": "Опис для парк номер 944",
		"createdAt": "2024-03-18T22:00:00.000Z",
		"coords": {
			"lat": 50.3641,
			"lon": 30.208
		},
		"category": "park"
	},
	{
		"id": "945",
		"name": "Парк №945",
		"description": "Опис для парк номер 945",
		"createdAt": "2024-09-05T21:00:00.000Z",
		"coords": {
			"lat": 50.5884,
			"lon": 30.4186
		},
		"category": "park"
	},
	{
		"id": "946",
		"name": "Об'єкт №946",
		"description": "Опис для об'єкт номер 946",
		"createdAt": "2024-12-14T22:00:00.000Z",
		"coords": {
			"lat": 50.6613,
			"lon": 30.9193
		},
		"category": "other"
	},
	{
		"id": "947",
		"name": "Центр №947",
		"description": "Опис для центр номер 947",
		"createdAt": "2024-09-09T21:00:00.000Z",
		"coords": {
			"lat": 50.3149,
			"lon": 30.9449
		},
		"category": "other"
	},
	{
		"id": "948",
		"name": "Об'єкт №948",
		"description": "Опис для об'єкт номер 948",
		"createdAt": "2024-07-05T21:00:00.000Z",
		"coords": {
			"lat": 50.4876,
			"lon": 30.2461
		},
		"category": "other"
	},
	{
		"id": "949",
		"name": "Маркет №949",
		"description": "Опис для маркет номер 949",
		"createdAt": "2024-09-04T21:00:00.000Z",
		"coords": {
			"lat": 50.6023,
			"lon": 30.3381
		},
		"category": "shop"
	},
	{
		"id": "950",
		"name": "Столова №950",
		"description": "Опис для столова номер 950",
		"createdAt": "2024-02-05T22:00:00.000Z",
		"coords": {
			"lat": 50.542,
			"lon": 30.5648
		},
		"category": "food"
	},
	{
		"id": "951",
		"name": "Кафе №951",
		"description": "Опис для кафе номер 951",
		"createdAt": "2024-01-09T22:00:00.000Z",
		"coords": {
			"lat": 50.3348,
			"lon": 30.4189
		},
		"category": "food"
	},
	{
		"id": "952",
		"name": "Ресторан №952",
		"description": "Опис для ресторан номер 952",
		"createdAt": "2024-08-03T21:00:00.000Z",
		"coords": {
			"lat": 50.6075,
			"lon": 30.5114
		},
		"category": "food"
	},
	{
		"id": "953",
		"name": "Музей №953",
		"description": "Опис для музей номер 953",
		"createdAt": "2024-07-03T21:00:00.000Z",
		"coords": {
			"lat": 50.5632,
			"lon": 30.2528
		},
		"category": "museum"
	},
	{
		"id": "954",
		"name": "Ресторан №954",
		"description": "Опис для ресторан номер 954",
		"createdAt": "2024-01-05T22:00:00.000Z",
		"coords": {
			"lat": 50.5412,
			"lon": 30.9819
		},
		"category": "food"
	},
	{
		"id": "955",
		"name": "Суші-бар №955",
		"description": "Опис для суші-бар номер 955",
		"createdAt": "2024-03-02T22:00:00.000Z",
		"coords": {
			"lat": 50.5532,
			"lon": 30.7749
		},
		"category": "food"
	},
	{
		"id": "956",
		"name": "Бутік №956",
		"description": "Опис для бутік номер 956",
		"createdAt": "2024-03-25T22:00:00.000Z",
		"coords": {
			"lat": 50.3932,
			"lon": 30.847
		},
		"category": "shop"
	},
	{
		"id": "957",
		"name": "Піцерія №957",
		"description": "Опис для піцерія номер 957",
		"createdAt": "2024-05-24T21:00:00.000Z",
		"coords": {
			"lat": 50.658,
			"lon": 30.9405
		},
		"category": "food"
	},
	{
		"id": "958",
		"name": "Центр №958",
		"description": "Опис для центр номер 958",
		"createdAt": "2024-12-22T22:00:00.000Z",
		"coords": {
			"lat": 50.5863,
			"lon": 30.4758
		},
		"category": "museum"
	},
	{
		"id": "959",
		"name": "Торговий центр №959",
		"description": "Опис для торговий центр номер 959",
		"createdAt": "2024-06-26T21:00:00.000Z",
		"coords": {
			"lat": 50.5988,
			"lon": 30.3145
		},
		"category": "shop"
	},
	{
		"id": "960",
		"name": "Алея №960",
		"description": "Опис для алея номер 960",
		"createdAt": "2024-04-19T21:00:00.000Z",
		"coords": {
			"lat": 50.5087,
			"lon": 30.7649
		},
		"category": "park"
	},
	{
		"id": "961",
		"name": "Кав'ярня №961",
		"description": "Опис для кав'ярня номер 961",
		"createdAt": "2024-10-27T22:00:00.000Z",
		"coords": {
			"lat": 50.3902,
			"lon": 30.6362
		},
		"category": "food"
	},
	{
		"id": "962",
		"name": "Центр №962",
		"description": "Опис для центр номер 962",
		"createdAt": "2024-11-02T22:00:00.000Z",
		"coords": {
			"lat": 50.4437,
			"lon": 30.8123
		},
		"category": "other"
	},
	{
		"id": "963",
		"name": "Центр №963",
		"description": "Опис для центр номер 963",
		"createdAt": "2024-04-12T21:00:00.000Z",
		"coords": {
			"lat": 50.5541,
			"lon": 30.2684
		},
		"category": "other"
	},
	{
		"id": "964",
		"name": "Маркет №964",
		"description": "Опис для маркет номер 964",
		"createdAt": "2024-10-26T21:00:00.000Z",
		"coords": {
			"lat": 50.5818,
			"lon": 30.6669
		},
		"category": "shop"
	},
	{
		"id": "965",
		"name": "Будівля №965",
		"description": "Опис для будівля номер 965",
		"createdAt": "2024-03-24T22:00:00.000Z",
		"coords": {
			"lat": 50.3443,
			"lon": 30.3941
		},
		"category": "other"
	},
	{
		"id": "966",
		"name": "Магазин №966",
		"description": "Опис для магазин номер 966",
		"createdAt": "2024-02-29T22:00:00.000Z",
		"coords": {
			"lat": 50.6077,
			"lon": 30.744
		},
		"category": "shop"
	},
	{
		"id": "967",
		"name": "Магазин №967",
		"description": "Опис для магазин номер 967",
		"createdAt": "2024-04-03T21:00:00.000Z",
		"coords": {
			"lat": 50.5236,
			"lon": 30.6249
		},
		"category": "shop"
	},
	{
		"id": "968",
		"name": "Бутік №968",
		"description": "Опис для бутік номер 968",
		"createdAt": "2024-09-21T21:00:00.000Z",
		"coords": {
			"lat": 50.4245,
			"lon": 30.8708
		},
		"category": "shop"
	},
	{
		"id": "969",
		"name": "Роща №969",
		"description": "Опис для роща номер 969",
		"createdAt": "2024-07-18T21:00:00.000Z",
		"coords": {
			"lat": 50.637,
			"lon": 30.4331
		},
		"category": "park"
	},
	{
		"id": "970",
		"name": "Піцерія №970",
		"description": "Опис для піцерія номер 970",
		"createdAt": "2024-08-18T21:00:00.000Z",
		"coords": {
			"lat": 50.4508,
			"lon": 30.2211
		},
		"category": "food"
	},
	{
		"id": "971",
		"name": "Столова №971",
		"description": "Опис для столова номер 971",
		"createdAt": "2024-03-08T22:00:00.000Z",
		"coords": {
			"lat": 50.6156,
			"lon": 30.9856
		},
		"category": "food"
	},
	{
		"id": "972",
		"name": "Сад №972",
		"description": "Опис для сад номер 972",
		"createdAt": "2024-09-21T21:00:00.000Z",
		"coords": {
			"lat": 50.327,
			"lon": 30.9165
		},
		"category": "park"
	},
	{
		"id": "973",
		"name": "Сад №973",
		"description": "Опис для сад номер 973",
		"createdAt": "2024-02-20T22:00:00.000Z",
		"coords": {
			"lat": 50.5644,
			"lon": 30.2979
		},
		"category": "park"
	},
	{
		"id": "974",
		"name": "Кафе №974",
		"description": "Опис для кафе номер 974",
		"createdAt": "2024-12-16T22:00:00.000Z",
		"coords": {
			"lat": 50.4434,
			"lon": 30.6428
		},
		"category": "food"
	},
	{
		"id": "975",
		"name": "Ресторан №975",
		"description": "Опис для ресторан номер 975",
		"createdAt": "2024-09-04T21:00:00.000Z",
		"coords": {
			"lat": 50.514,
			"lon": 30.6346
		},
		"category": "food"
	},
	{
		"id": "976",
		"name": "Маркет №976",
		"description": "Опис для маркет номер 976",
		"createdAt": "2024-02-19T22:00:00.000Z",
		"coords": {
			"lat": 50.3494,
			"lon": 30.6947
		},
		"category": "shop"
	},
	{
		"id": "977",
		"name": "Маркет №977",
		"description": "Опис для маркет номер 977",
		"createdAt": "2024-01-23T22:00:00.000Z",
		"coords": {
			"lat": 50.674,
			"lon": 30.2282
		},
		"category": "shop"
	},
	{
		"id": "978",
		"name": "Об'єкт №978",
		"description": "Опис для об'єкт номер 978",
		"createdAt": "2024-02-19T22:00:00.000Z",
		"coords": {
			"lat": 50.6339,
			"lon": 30.346
		},
		"category": "other"
	},
	{
		"id": "979",
		"name": "Магазин №979",
		"description": "Опис для магазин номер 979",
		"createdAt": "2024-09-24T21:00:00.000Z",
		"coords": {
			"lat": 50.3626,
			"lon": 30.4305
		},
		"category": "shop"
	},
	{
		"id": "980",
		"name": "Парк №980",
		"description": "Опис для парк номер 980",
		"createdAt": "2024-09-04T21:00:00.000Z",
		"coords": {
			"lat": 50.4369,
			"lon": 30.2704
		},
		"category": "park"
	},
	{
		"id": "981",
		"name": "Кафе №981",
		"description": "Опис для кафе номер 981",
		"createdAt": "2024-10-24T21:00:00.000Z",
		"coords": {
			"lat": 50.3027,
			"lon": 30.59
		},
		"category": "food"
	},
	{
		"id": "982",
		"name": "Виставка №982",
		"description": "Опис для виставка номер 982",
		"createdAt": "2024-09-18T21:00:00.000Z",
		"coords": {
			"lat": 50.3749,
			"lon": 30.7317
		},
		"category": "museum"
	},
	{
		"id": "983",
		"name": "Маркет №983",
		"description": "Опис для маркет номер 983",
		"createdAt": "2024-08-13T21:00:00.000Z",
		"coords": {
			"lat": 50.4416,
			"lon": 30.2856
		},
		"category": "shop"
	},
	{
		"id": "984",
		"name": "Маркет №984",
		"description": "Опис для маркет номер 984",
		"createdAt": "2024-11-08T22:00:00.000Z",
		"coords": {
			"lat": 50.6946,
			"lon": 30.7413
		},
		"category": "shop"
	},
	{
		"id": "985",
		"name": "Роща №985",
		"description": "Опис для роща номер 985",
		"createdAt": "2024-09-26T21:00:00.000Z",
		"coords": {
			"lat": 50.471,
			"lon": 30.5266
		},
		"category": "park"
	},
	{
		"id": "986",
		"name": "Алея №986",
		"description": "Опис для алея номер 986",
		"createdAt": "2024-10-26T21:00:00.000Z",
		"coords": {
			"lat": 50.558,
			"lon": 30.4865
		},
		"category": "park"
	},
	{
		"id": "987",
		"name": "Музей №987",
		"description": "Опис для музей номер 987",
		"createdAt": "2024-06-04T21:00:00.000Z",
		"coords": {
			"lat": 50.6823,
			"lon": 30.2176
		},
		"category": "museum"
	},
	{
		"id": "988",
		"name": "Магазин №988",
		"description": "Опис для магазин номер 988",
		"createdAt": "2024-03-14T22:00:00.000Z",
		"coords": {
			"lat": 50.451,
			"lon": 30.7268
		},
		"category": "shop"
	},
	{
		"id": "989",
		"name": "Галерея №989",
		"description": "Опис для галерея номер 989",
		"createdAt": "2024-12-21T22:00:00.000Z",
		"coords": {
			"lat": 50.4797,
			"lon": 30.9938
		},
		"category": "museum"
	},
	{
		"id": "990",
		"name": "Столова №990",
		"description": "Опис для столова номер 990",
		"createdAt": "2024-02-04T22:00:00.000Z",
		"coords": {
			"lat": 50.6939,
			"lon": 30.2478
		},
		"category": "food"
	},
	{
		"id": "991",
		"name": "Офіс №991",
		"description": "Опис для офіс номер 991",
		"createdAt": "2024-12-25T22:00:00.000Z",
		"coords": {
			"lat": 50.4509,
			"lon": 30.7448
		},
		"category": "other"
	},
	{
		"id": "992",
		"name": "Музей №992",
		"description": "Опис для музей номер 992",
		"createdAt": "2024-01-17T22:00:00.000Z",
		"coords": {
			"lat": 50.3405,
			"lon": 30.5138
		},
		"category": "museum"
	},
	{
		"id": "993",
		"name": "Виставка №993",
		"description": "Опис для виставка номер 993",
		"createdAt": "2024-02-12T22:00:00.000Z",
		"coords": {
			"lat": 50.6489,
			"lon": 30.7853
		},
		"category": "museum"
	},
	{
		"id": "994",
		"name": "Виставка №994",
		"description": "Опис для виставка номер 994",
		"createdAt": "2024-08-07T21:00:00.000Z",
		"coords": {
			"lat": 50.3914,
			"lon": 30.2151
		},
		"category": "museum"
	},
	{
		"id": "995",
		"name": "Кафе №995",
		"description": "Опис для кафе номер 995",
		"createdAt": "2024-09-13T21:00:00.000Z",
		"coords": {
			"lat": 50.4376,
			"lon": 30.2297
		},
		"category": "food"
	},
	{
		"id": "996",
		"name": "Будівля №996",
		"description": "Опис для будівля номер 996",
		"createdAt": "2024-06-07T21:00:00.000Z",
		"coords": {
			"lat": 50.6983,
			"lon": 30.7715
		},
		"category": "other"
	},
	{
		"id": "997",
		"name": "Парк №997",
		"description": "Опис для парк номер 997",
		"createdAt": "2024-01-31T22:00:00.000Z",
		"coords": {
			"lat": 50.327,
			"lon": 30.4558
		},
		"category": "park"
	},
	{
		"id": "998",
		"name": "Сад №998",
		"description": "Опис для сад номер 998",
		"createdAt": "2024-02-03T22:00:00.000Z",
		"coords": {
			"lat": 50.3383,
			"lon": 30.3158
		},
		"category": "park"
	},
	{
		"id": "999",
		"name": "Установа №999",
		"description": "Опис для установа номер 999",
		"createdAt": "2024-10-22T21:00:00.000Z",
		"coords": {
			"lat": 50.4325,
			"lon": 30.2552
		},
		"category": "other"
	},
	{
		"id": "1000",
		"name": "Маркет №1000",
		"description": "Опис для маркет номер 1000",
		"createdAt": "2024-03-02T22:00:00.000Z",
		"coords": {
			"lat": 50.4023,
			"lon": 30.7719
		},
		"category": "shop"
	},
	{
		"id": "1001",
		"name": "Центр №1001",
		"description": "Опис для центр номер 1001",
		"createdAt": "2024-02-16T22:00:00.000Z",
		"coords": {
			"lat": 50.6741,
			"lon": 30.6952
		},
		"category": "other"
	},
	{
		"id": "1002",
		"name": "Об'єкт №1002",
		"description": "Опис для об'єкт номер 1002",
		"createdAt": "2024-12-14T22:00:00.000Z",
		"coords": {
			"lat": 50.6029,
			"lon": 30.8689
		},
		"category": "other"
	},
	{
		"id": "1003",
		"name": "Центр №1003",
		"description": "Опис для центр номер 1003",
		"createdAt": "2024-08-19T21:00:00.000Z",
		"coords": {
			"lat": 50.3955,
			"lon": 30.4273
		},
		"category": "museum"
	},
	{
		"id": "1004",
		"name": "Бургерна №1004",
		"description": "Опис для бургерна номер 1004",
		"createdAt": "2024-09-08T21:00:00.000Z",
		"coords": {
			"lat": 50.3925,
			"lon": 30.2489
		},
		"category": "food"
	},
	{
		"id": "1005",
		"name": "Бутік №1005",
		"description": "Опис для бутік номер 1005",
		"createdAt": "2024-10-03T21:00:00.000Z",
		"coords": {
			"lat": 50.3078,
			"lon": 30.5533
		},
		"category": "shop"
	},
	{
		"id": "1006",
		"name": "Музей №1006",
		"description": "Опис для музей номер 1006",
		"createdAt": "2024-11-02T22:00:00.000Z",
		"coords": {
			"lat": 50.489,
			"lon": 30.5743
		},
		"category": "museum"
	},
	{
		"id": "1007",
		"name": "Столова №1007",
		"description": "Опис для столова номер 1007",
		"createdAt": "2024-07-22T21:00:00.000Z",
		"coords": {
			"lat": 50.5827,
			"lon": 30.2727
		},
		"category": "food"
	},
	{
		"id": "1008",
		"name": "Сквер №1008",
		"description": "Опис для сквер номер 1008",
		"createdAt": "2024-12-24T22:00:00.000Z",
		"coords": {
			"lat": 50.4531,
			"lon": 30.839
		},
		"category": "park"
	},
	{
		"id": "1009",
		"name": "Піцерія №1009",
		"description": "Опис для піцерія номер 1009",
		"createdAt": "2024-10-06T21:00:00.000Z",
		"coords": {
			"lat": 50.316,
			"lon": 30.3737
		},
		"category": "food"
	},
	{
		"id": "1010",
		"name": "Будівля №1010",
		"description": "Опис для будівля номер 1010",
		"createdAt": "2024-05-31T21:00:00.000Z",
		"coords": {
			"lat": 50.5477,
			"lon": 30.3204
		},
		"category": "other"
	},
	{
		"id": "1011",
		"name": "Галерея №1011",
		"description": "Опис для галерея номер 1011",
		"createdAt": "2024-04-15T21:00:00.000Z",
		"coords": {
			"lat": 50.3233,
			"lon": 30.5147
		},
		"category": "museum"
	},
	{
		"id": "1012",
		"name": "Бутік №1012",
		"description": "Опис для бутік номер 1012",
		"createdAt": "2024-03-25T22:00:00.000Z",
		"coords": {
			"lat": 50.6602,
			"lon": 30.9191
		},
		"category": "shop"
	},
	{
		"id": "1013",
		"name": "Маркет №1013",
		"description": "Опис для маркет номер 1013",
		"createdAt": "2024-04-11T21:00:00.000Z",
		"coords": {
			"lat": 50.3732,
			"lon": 30.5629
		},
		"category": "shop"
	},
	{
		"id": "1014",
		"name": "Кав'ярня №1014",
		"description": "Опис для кав'ярня номер 1014",
		"createdAt": "2024-06-04T21:00:00.000Z",
		"coords": {
			"lat": 50.6108,
			"lon": 30.7395
		},
		"category": "food"
	},
	{
		"id": "1015",
		"name": "Сквер №1015",
		"description": "Опис для сквер номер 1015",
		"createdAt": "2024-09-25T21:00:00.000Z",
		"coords": {
			"lat": 50.6083,
			"lon": 30.738
		},
		"category": "park"
	},
	{
		"id": "1016",
		"name": "Роща №1016",
		"description": "Опис для роща номер 1016",
		"createdAt": "2024-04-24T21:00:00.000Z",
		"coords": {
			"lat": 50.5225,
			"lon": 30.7981
		},
		"category": "park"
	},
	{
		"id": "1017",
		"name": "Бургерна №1017",
		"description": "Опис для бургерна номер 1017",
		"createdAt": "2024-09-26T21:00:00.000Z",
		"coords": {
			"lat": 50.6537,
			"lon": 30.7853
		},
		"category": "food"
	},
	{
		"id": "1018",
		"name": "Музей №1018",
		"description": "Опис для музей номер 1018",
		"createdAt": "2024-12-02T22:00:00.000Z",
		"coords": {
			"lat": 50.4664,
			"lon": 30.7493
		},
		"category": "museum"
	},
	{
		"id": "1019",
		"name": "Центр №1019",
		"description": "Опис для центр номер 1019",
		"createdAt": "2024-06-07T21:00:00.000Z",
		"coords": {
			"lat": 50.6665,
			"lon": 30.7582
		},
		"category": "other"
	},
	{
		"id": "1020",
		"name": "Будівля №1020",
		"description": "Опис для будівля номер 1020",
		"createdAt": "2024-01-20T22:00:00.000Z",
		"coords": {
			"lat": 50.4836,
			"lon": 30.3422
		},
		"category": "other"
	},
	{
		"id": "1021",
		"name": "Виставка №1021",
		"description": "Опис для виставка номер 1021",
		"createdAt": "2024-05-22T21:00:00.000Z",
		"coords": {
			"lat": 50.4239,
			"lon": 30.7505
		},
		"category": "museum"
	},
	{
		"id": "1022",
		"name": "Об'єкт №1022",
		"description": "Опис для об'єкт номер 1022",
		"createdAt": "2024-05-26T21:00:00.000Z",
		"coords": {
			"lat": 50.3008,
			"lon": 30.6793
		},
		"category": "other"
	},
	{
		"id": "1023",
		"name": "Суші-бар №1023",
		"description": "Опис для суші-бар номер 1023",
		"createdAt": "2024-09-13T21:00:00.000Z",
		"coords": {
			"lat": 50.5387,
			"lon": 30.6154
		},
		"category": "food"
	},
	{
		"id": "1024",
		"name": "Суші-бар №1024",
		"description": "Опис для суші-бар номер 1024",
		"createdAt": "2024-04-19T21:00:00.000Z",
		"coords": {
			"lat": 50.6103,
			"lon": 30.3822
		},
		"category": "food"
	},
	{
		"id": "1025",
		"name": "Будівля №1025",
		"description": "Опис для будівля номер 1025",
		"createdAt": "2024-03-16T22:00:00.000Z",
		"coords": {
			"lat": 50.6846,
			"lon": 30.7847
		},
		"category": "other"
	},
	{
		"id": "1026",
		"name": "Роща №1026",
		"description": "Опис для роща номер 1026",
		"createdAt": "2024-06-17T21:00:00.000Z",
		"coords": {
			"lat": 50.3843,
			"lon": 30.9642
		},
		"category": "park"
	},
	{
		"id": "1027",
		"name": "Офіс №1027",
		"description": "Опис для офіс номер 1027",
		"createdAt": "2024-07-14T21:00:00.000Z",
		"coords": {
			"lat": 50.6866,
			"lon": 30.6018
		},
		"category": "other"
	},
	{
		"id": "1028",
		"name": "Бургерна №1028",
		"description": "Опис для бургерна номер 1028",
		"createdAt": "2024-03-16T22:00:00.000Z",
		"coords": {
			"lat": 50.5983,
			"lon": 30.2662
		},
		"category": "food"
	},
	{
		"id": "1029",
		"name": "Суші-бар №1029",
		"description": "Опис для суші-бар номер 1029",
		"createdAt": "2024-04-05T21:00:00.000Z",
		"coords": {
			"lat": 50.5712,
			"lon": 30.931
		},
		"category": "food"
	},
	{
		"id": "1030",
		"name": "Столова №1030",
		"description": "Опис для столова номер 1030",
		"createdAt": "2024-03-09T22:00:00.000Z",
		"coords": {
			"lat": 50.3346,
			"lon": 30.7371
		},
		"category": "food"
	},
	{
		"id": "1031",
		"name": "Центр №1031",
		"description": "Опис для центр номер 1031",
		"createdAt": "2024-03-17T22:00:00.000Z",
		"coords": {
			"lat": 50.6541,
			"lon": 30.2935
		},
		"category": "other"
	},
	{
		"id": "1032",
		"name": "Будівля №1032",
		"description": "Опис для будівля номер 1032",
		"createdAt": "2024-08-09T21:00:00.000Z",
		"coords": {
			"lat": 50.4126,
			"lon": 30.6407
		},
		"category": "other"
	},
	{
		"id": "1033",
		"name": "Маркет №1033",
		"description": "Опис для маркет номер 1033",
		"createdAt": "2024-08-09T21:00:00.000Z",
		"coords": {
			"lat": 50.4598,
			"lon": 30.7571
		},
		"category": "shop"
	},
	{
		"id": "1034",
		"name": "Алея №1034",
		"description": "Опис для алея номер 1034",
		"createdAt": "2024-08-13T21:00:00.000Z",
		"coords": {
			"lat": 50.6692,
			"lon": 30.4871
		},
		"category": "park"
	},
	{
		"id": "1035",
		"name": "Піцерія №1035",
		"description": "Опис для піцерія номер 1035",
		"createdAt": "2024-06-20T21:00:00.000Z",
		"coords": {
			"lat": 50.6531,
			"lon": 30.2168
		},
		"category": "food"
	},
	{
		"id": "1036",
		"name": "Ресторан №1036",
		"description": "Опис для ресторан номер 1036",
		"createdAt": "2024-06-23T21:00:00.000Z",
		"coords": {
			"lat": 50.4574,
			"lon": 30.3293
		},
		"category": "food"
	},
	{
		"id": "1037",
		"name": "Бутік №1037",
		"description": "Опис для бутік номер 1037",
		"createdAt": "2024-11-09T22:00:00.000Z",
		"coords": {
			"lat": 50.6709,
			"lon": 30.8384
		},
		"category": "shop"
	},
	{
		"id": "1038",
		"name": "Бутік №1038",
		"description": "Опис для бутік номер 1038",
		"createdAt": "2024-04-18T21:00:00.000Z",
		"coords": {
			"lat": 50.6972,
			"lon": 30.9175
		},
		"category": "shop"
	},
	{
		"id": "1039",
		"name": "Центр №1039",
		"description": "Опис для центр номер 1039",
		"createdAt": "2024-12-19T22:00:00.000Z",
		"coords": {
			"lat": 50.4923,
			"lon": 30.2894
		},
		"category": "museum"
	},
	{
		"id": "1040",
		"name": "Парк №1040",
		"description": "Опис для парк номер 1040",
		"createdAt": "2024-09-14T21:00:00.000Z",
		"coords": {
			"lat": 50.4457,
			"lon": 30.7322
		},
		"category": "park"
	},
	{
		"id": "1041",
		"name": "Алея №1041",
		"description": "Опис для алея номер 1041",
		"createdAt": "2024-01-04T22:00:00.000Z",
		"coords": {
			"lat": 50.336,
			"lon": 30.9354
		},
		"category": "park"
	},
	{
		"id": "1042",
		"name": "Магазин №1042",
		"description": "Опис для магазин номер 1042",
		"createdAt": "2024-10-02T21:00:00.000Z",
		"coords": {
			"lat": 50.352,
			"lon": 30.744
		},
		"category": "shop"
	},
	{
		"id": "1043",
		"name": "Галерея №1043",
		"description": "Опис для галерея номер 1043",
		"createdAt": "2024-03-20T22:00:00.000Z",
		"coords": {
			"lat": 50.5974,
			"lon": 30.5573
		},
		"category": "museum"
	},
	{
		"id": "1044",
		"name": "Центр №1044",
		"description": "Опис для центр номер 1044",
		"createdAt": "2024-09-20T21:00:00.000Z",
		"coords": {
			"lat": 50.663,
			"lon": 30.9884
		},
		"category": "other"
	},
	{
		"id": "1045",
		"name": "Музей №1045",
		"description": "Опис для музей номер 1045",
		"createdAt": "2024-02-04T22:00:00.000Z",
		"coords": {
			"lat": 50.5804,
			"lon": 30.4431
		},
		"category": "museum"
	},
	{
		"id": "1046",
		"name": "Центр №1046",
		"description": "Опис для центр номер 1046",
		"createdAt": "2024-11-05T22:00:00.000Z",
		"coords": {
			"lat": 50.4724,
			"lon": 30.3174
		},
		"category": "other"
	},
	{
		"id": "1047",
		"name": "Ресторан №1047",
		"description": "Опис для ресторан номер 1047",
		"createdAt": "2024-01-21T22:00:00.000Z",
		"coords": {
			"lat": 50.6359,
			"lon": 30.3896
		},
		"category": "food"
	},
	{
		"id": "1048",
		"name": "Бутік №1048",
		"description": "Опис для бутік номер 1048",
		"createdAt": "2024-11-25T22:00:00.000Z",
		"coords": {
			"lat": 50.6897,
			"lon": 30.6469
		},
		"category": "shop"
	},
	{
		"id": "1049",
		"name": "Об'єкт №1049",
		"description": "Опис для об'єкт номер 1049",
		"createdAt": "2024-08-08T21:00:00.000Z",
		"coords": {
			"lat": 50.6436,
			"lon": 30.817
		},
		"category": "other"
	},
	{
		"id": "1050",
		"name": "Магазин №1050",
		"description": "Опис для магазин номер 1050",
		"createdAt": "2024-12-09T22:00:00.000Z",
		"coords": {
			"lat": 50.5667,
			"lon": 30.9563
		},
		"category": "shop"
	},
	{
		"id": "1051",
		"name": "Будівля №1051",
		"description": "Опис для будівля номер 1051",
		"createdAt": "2024-01-24T22:00:00.000Z",
		"coords": {
			"lat": 50.6427,
			"lon": 30.2213
		},
		"category": "other"
	},
	{
		"id": "1052",
		"name": "Галерея №1052",
		"description": "Опис для галерея номер 1052",
		"createdAt": "2024-03-05T22:00:00.000Z",
		"coords": {
			"lat": 50.5665,
			"lon": 30.6407
		},
		"category": "museum"
	},
	{
		"id": "1053",
		"name": "Парк №1053",
		"description": "Опис для парк номер 1053",
		"createdAt": "2024-08-26T21:00:00.000Z",
		"coords": {
			"lat": 50.6933,
			"lon": 30.5529
		},
		"category": "park"
	},
	{
		"id": "1054",
		"name": "Роща №1054",
		"description": "Опис для роща номер 1054",
		"createdAt": "2024-05-21T21:00:00.000Z",
		"coords": {
			"lat": 50.3451,
			"lon": 30.3143
		},
		"category": "park"
	},
	{
		"id": "1055",
		"name": "Центр №1055",
		"description": "Опис для центр номер 1055",
		"createdAt": "2024-04-16T21:00:00.000Z",
		"coords": {
			"lat": 50.3991,
			"lon": 30.9146
		},
		"category": "museum"
	},
	{
		"id": "1056",
		"name": "Суші-бар №1056",
		"description": "Опис для суші-бар номер 1056",
		"createdAt": "2024-01-26T22:00:00.000Z",
		"coords": {
			"lat": 50.5578,
			"lon": 30.784
		},
		"category": "food"
	},
	{
		"id": "1057",
		"name": "Алея №1057",
		"description": "Опис для алея номер 1057",
		"createdAt": "2024-11-21T22:00:00.000Z",
		"coords": {
			"lat": 50.4785,
			"lon": 30.533
		},
		"category": "park"
	},
	{
		"id": "1058",
		"name": "Центр №1058",
		"description": "Опис для центр номер 1058",
		"createdAt": "2024-07-24T21:00:00.000Z",
		"coords": {
			"lat": 50.6584,
			"lon": 30.9695
		},
		"category": "other"
	},
	{
		"id": "1059",
		"name": "Виставка №1059",
		"description": "Опис для виставка номер 1059",
		"createdAt": "2024-01-17T22:00:00.000Z",
		"coords": {
			"lat": 50.4297,
			"lon": 30.3148
		},
		"category": "museum"
	},
	{
		"id": "1060",
		"name": "Бутік №1060",
		"description": "Опис для бутік номер 1060",
		"createdAt": "2024-11-04T22:00:00.000Z",
		"coords": {
			"lat": 50.3167,
			"lon": 30.5522
		},
		"category": "shop"
	},
	{
		"id": "1061",
		"name": "Алея №1061",
		"description": "Опис для алея номер 1061",
		"createdAt": "2024-12-08T22:00:00.000Z",
		"coords": {
			"lat": 50.4983,
			"lon": 30.2989
		},
		"category": "park"
	},
	{
		"id": "1062",
		"name": "Парк №1062",
		"description": "Опис для парк номер 1062",
		"createdAt": "2024-02-23T22:00:00.000Z",
		"coords": {
			"lat": 50.608,
			"lon": 30.5909
		},
		"category": "park"
	},
	{
		"id": "1063",
		"name": "Установа №1063",
		"description": "Опис для установа номер 1063",
		"createdAt": "2024-02-10T22:00:00.000Z",
		"coords": {
			"lat": 50.6494,
			"lon": 30.4528
		},
		"category": "other"
	},
	{
		"id": "1064",
		"name": "Кав'ярня №1064",
		"description": "Опис для кав'ярня номер 1064",
		"createdAt": "2024-09-22T21:00:00.000Z",
		"coords": {
			"lat": 50.6889,
			"lon": 30.6202
		},
		"category": "food"
	},
	{
		"id": "1065",
		"name": "Галерея №1065",
		"description": "Опис для галерея номер 1065",
		"createdAt": "2024-08-14T21:00:00.000Z",
		"coords": {
			"lat": 50.4339,
			"lon": 30.9564
		},
		"category": "museum"
	},
	{
		"id": "1066",
		"name": "Центр №1066",
		"description": "Опис для центр номер 1066",
		"createdAt": "2024-01-10T22:00:00.000Z",
		"coords": {
			"lat": 50.3123,
			"lon": 30.6894
		},
		"category": "museum"
	},
	{
		"id": "1067",
		"name": "Офіс №1067",
		"description": "Опис для офіс номер 1067",
		"createdAt": "2024-07-27T21:00:00.000Z",
		"coords": {
			"lat": 50.6246,
			"lon": 30.2504
		},
		"category": "other"
	},
	{
		"id": "1068",
		"name": "Алея №1068",
		"description": "Опис для алея номер 1068",
		"createdAt": "2024-06-22T21:00:00.000Z",
		"coords": {
			"lat": 50.33,
			"lon": 30.3963
		},
		"category": "park"
	},
	{
		"id": "1069",
		"name": "Алея №1069",
		"description": "Опис для алея номер 1069",
		"createdAt": "2024-04-10T21:00:00.000Z",
		"coords": {
			"lat": 50.5438,
			"lon": 30.9718
		},
		"category": "park"
	},
	{
		"id": "1070",
		"name": "Роща №1070",
		"description": "Опис для роща номер 1070",
		"createdAt": "2024-11-06T22:00:00.000Z",
		"coords": {
			"lat": 50.4966,
			"lon": 30.7235
		},
		"category": "park"
	},
	{
		"id": "1071",
		"name": "Центр №1071",
		"description": "Опис для центр номер 1071",
		"createdAt": "2024-04-08T21:00:00.000Z",
		"coords": {
			"lat": 50.685,
			"lon": 30.707
		},
		"category": "other"
	},
	{
		"id": "1072",
		"name": "Установа №1072",
		"description": "Опис для установа номер 1072",
		"createdAt": "2024-04-24T21:00:00.000Z",
		"coords": {
			"lat": 50.3506,
			"lon": 30.3391
		},
		"category": "other"
	},
	{
		"id": "1073",
		"name": "Установа №1073",
		"description": "Опис для установа номер 1073",
		"createdAt": "2024-01-08T22:00:00.000Z",
		"coords": {
			"lat": 50.3964,
			"lon": 30.5052
		},
		"category": "other"
	},
	{
		"id": "1074",
		"name": "Будівля №1074",
		"description": "Опис для будівля номер 1074",
		"createdAt": "2024-03-26T22:00:00.000Z",
		"coords": {
			"lat": 50.645,
			"lon": 30.3145
		},
		"category": "other"
	},
	{
		"id": "1075",
		"name": "Музей №1075",
		"description": "Опис для музей номер 1075",
		"createdAt": "2024-03-16T22:00:00.000Z",
		"coords": {
			"lat": 50.5163,
			"lon": 30.3364
		},
		"category": "museum"
	},
	{
		"id": "1076",
		"name": "Центр №1076",
		"description": "Опис для центр номер 1076",
		"createdAt": "2024-08-24T21:00:00.000Z",
		"coords": {
			"lat": 50.4585,
			"lon": 30.9038
		},
		"category": "museum"
	},
	{
		"id": "1077",
		"name": "Музей №1077",
		"description": "Опис для музей номер 1077",
		"createdAt": "2024-12-24T22:00:00.000Z",
		"coords": {
			"lat": 50.3461,
			"lon": 30.3306
		},
		"category": "museum"
	},
	{
		"id": "1078",
		"name": "Бургерна №1078",
		"description": "Опис для бургерна номер 1078",
		"createdAt": "2024-02-23T22:00:00.000Z",
		"coords": {
			"lat": 50.4872,
			"lon": 30.6671
		},
		"category": "food"
	},
	{
		"id": "1079",
		"name": "Офіс №1079",
		"description": "Опис для офіс номер 1079",
		"createdAt": "2024-06-19T21:00:00.000Z",
		"coords": {
			"lat": 50.4222,
			"lon": 30.8949
		},
		"category": "other"
	},
	{
		"id": "1080",
		"name": "Торговий центр №1080",
		"description": "Опис для торговий центр номер 1080",
		"createdAt": "2024-11-11T22:00:00.000Z",
		"coords": {
			"lat": 50.6427,
			"lon": 30.7878
		},
		"category": "shop"
	},
	{
		"id": "1081",
		"name": "Центр №1081",
		"description": "Опис для центр номер 1081",
		"createdAt": "2024-08-22T21:00:00.000Z",
		"coords": {
			"lat": 50.3532,
			"lon": 30.9281
		},
		"category": "museum"
	},
	{
		"id": "1082",
		"name": "Парк №1082",
		"description": "Опис для парк номер 1082",
		"createdAt": "2024-07-02T21:00:00.000Z",
		"coords": {
			"lat": 50.5928,
			"lon": 30.6993
		},
		"category": "park"
	},
	{
		"id": "1083",
		"name": "Музей №1083",
		"description": "Опис для музей номер 1083",
		"createdAt": "2024-12-20T22:00:00.000Z",
		"coords": {
			"lat": 50.354,
			"lon": 30.683
		},
		"category": "museum"
	},
	{
		"id": "1084",
		"name": "Виставка №1084",
		"description": "Опис для виставка номер 1084",
		"createdAt": "2024-10-01T21:00:00.000Z",
		"coords": {
			"lat": 50.4811,
			"lon": 30.4239
		},
		"category": "museum"
	},
	{
		"id": "1085",
		"name": "Центр №1085",
		"description": "Опис для центр номер 1085",
		"createdAt": "2024-02-20T22:00:00.000Z",
		"coords": {
			"lat": 50.6621,
			"lon": 30.5752
		},
		"category": "other"
	},
	{
		"id": "1086",
		"name": "Супермаркет №1086",
		"description": "Опис для супермаркет номер 1086",
		"createdAt": "2024-09-23T21:00:00.000Z",
		"coords": {
			"lat": 50.6132,
			"lon": 30.8153
		},
		"category": "shop"
	},
	{
		"id": "1087",
		"name": "Установа №1087",
		"description": "Опис для установа номер 1087",
		"createdAt": "2024-05-14T21:00:00.000Z",
		"coords": {
			"lat": 50.4696,
			"lon": 30.4911
		},
		"category": "other"
	},
	{
		"id": "1088",
		"name": "Центр №1088",
		"description": "Опис для центр номер 1088",
		"createdAt": "2024-06-14T21:00:00.000Z",
		"coords": {
			"lat": 50.6932,
			"lon": 30.6415
		},
		"category": "museum"
	},
	{
		"id": "1089",
		"name": "Столова №1089",
		"description": "Опис для столова номер 1089",
		"createdAt": "2024-02-05T22:00:00.000Z",
		"coords": {
			"lat": 50.5605,
			"lon": 30.4813
		},
		"category": "food"
	},
	{
		"id": "1090",
		"name": "Галерея №1090",
		"description": "Опис для галерея номер 1090",
		"createdAt": "2024-07-20T21:00:00.000Z",
		"coords": {
			"lat": 50.316,
			"lon": 30.4651
		},
		"category": "museum"
	},
	{
		"id": "1091",
		"name": "Офіс №1091",
		"description": "Опис для офіс номер 1091",
		"createdAt": "2024-10-19T21:00:00.000Z",
		"coords": {
			"lat": 50.5326,
			"lon": 30.428
		},
		"category": "other"
	},
	{
		"id": "1092",
		"name": "Офіс №1092",
		"description": "Опис для офіс номер 1092",
		"createdAt": "2024-01-18T22:00:00.000Z",
		"coords": {
			"lat": 50.4727,
			"lon": 30.8775
		},
		"category": "other"
	},
	{
		"id": "1093",
		"name": "Кафе №1093",
		"description": "Опис для кафе номер 1093",
		"createdAt": "2024-09-15T21:00:00.000Z",
		"coords": {
			"lat": 50.6158,
			"lon": 30.6487
		},
		"category": "food"
	},
	{
		"id": "1094",
		"name": "Установа №1094",
		"description": "Опис для установа номер 1094",
		"createdAt": "2024-11-27T22:00:00.000Z",
		"coords": {
			"lat": 50.5121,
			"lon": 30.7031
		},
		"category": "other"
	},
	{
		"id": "1095",
		"name": "Кафе №1095",
		"description": "Опис для кафе номер 1095",
		"createdAt": "2024-03-11T22:00:00.000Z",
		"coords": {
			"lat": 50.6185,
			"lon": 30.261
		},
		"category": "food"
	},
	{
		"id": "1096",
		"name": "Алея №1096",
		"description": "Опис для алея номер 1096",
		"createdAt": "2024-12-01T22:00:00.000Z",
		"coords": {
			"lat": 50.6287,
			"lon": 30.3741
		},
		"category": "park"
	},
	{
		"id": "1097",
		"name": "Піцерія №1097",
		"description": "Опис для піцерія номер 1097",
		"createdAt": "2024-11-09T22:00:00.000Z",
		"coords": {
			"lat": 50.6512,
			"lon": 30.6893
		},
		"category": "food"
	},
	{
		"id": "1098",
		"name": "Парк №1098",
		"description": "Опис для парк номер 1098",
		"createdAt": "2024-07-27T21:00:00.000Z",
		"coords": {
			"lat": 50.5561,
			"lon": 30.6348
		},
		"category": "park"
	},
	{
		"id": "1099",
		"name": "Музей №1099",
		"description": "Опис для музей номер 1099",
		"createdAt": "2024-11-17T22:00:00.000Z",
		"coords": {
			"lat": 50.5952,
			"lon": 30.4497
		},
		"category": "museum"
	},
	{
		"id": "1100",
		"name": "Торговий центр №1100",
		"description": "Опис для торговий центр номер 1100",
		"createdAt": "2024-03-09T22:00:00.000Z",
		"coords": {
			"lat": 50.3687,
			"lon": 30.3502
		},
		"category": "shop"
	},
	{
		"id": "1101",
		"name": "Установа №1101",
		"description": "Опис для установа номер 1101",
		"createdAt": "2024-03-15T22:00:00.000Z",
		"coords": {
			"lat": 50.3358,
			"lon": 30.8091
		},
		"category": "other"
	},
	{
		"id": "1102",
		"name": "Бутік №1102",
		"description": "Опис для бутік номер 1102",
		"createdAt": "2024-04-11T21:00:00.000Z",
		"coords": {
			"lat": 50.6444,
			"lon": 30.9126
		},
		"category": "shop"
	},
	{
		"id": "1103",
		"name": "Піцерія №1103",
		"description": "Опис для піцерія номер 1103",
		"createdAt": "2024-02-23T22:00:00.000Z",
		"coords": {
			"lat": 50.4462,
			"lon": 30.4666
		},
		"category": "food"
	},
	{
		"id": "1104",
		"name": "Виставка №1104",
		"description": "Опис для виставка номер 1104",
		"createdAt": "2024-02-24T22:00:00.000Z",
		"coords": {
			"lat": 50.5204,
			"lon": 30.5299
		},
		"category": "museum"
	},
	{
		"id": "1105",
		"name": "Торговий центр №1105",
		"description": "Опис для торговий центр номер 1105",
		"createdAt": "2024-06-19T21:00:00.000Z",
		"coords": {
			"lat": 50.3087,
			"lon": 30.4453
		},
		"category": "shop"
	},
	{
		"id": "1106",
		"name": "Бутік №1106",
		"description": "Опис для бутік номер 1106",
		"createdAt": "2024-11-22T22:00:00.000Z",
		"coords": {
			"lat": 50.3999,
			"lon": 30.4782
		},
		"category": "shop"
	},
	{
		"id": "1107",
		"name": "Установа №1107",
		"description": "Опис для установа номер 1107",
		"createdAt": "2024-07-06T21:00:00.000Z",
		"coords": {
			"lat": 50.6537,
			"lon": 30.6294
		},
		"category": "other"
	},
	{
		"id": "1108",
		"name": "Виставка №1108",
		"description": "Опис для виставка номер 1108",
		"createdAt": "2024-01-19T22:00:00.000Z",
		"coords": {
			"lat": 50.3372,
			"lon": 30.5735
		},
		"category": "museum"
	},
	{
		"id": "1109",
		"name": "Суші-бар №1109",
		"description": "Опис для суші-бар номер 1109",
		"createdAt": "2024-01-01T22:00:00.000Z",
		"coords": {
			"lat": 50.6525,
			"lon": 30.6291
		},
		"category": "food"
	},
	{
		"id": "1110",
		"name": "Центр №1110",
		"description": "Опис для центр номер 1110",
		"createdAt": "2024-07-27T21:00:00.000Z",
		"coords": {
			"lat": 50.3333,
			"lon": 30.6265
		},
		"category": "other"
	},
	{
		"id": "1111",
		"name": "Музей №1111",
		"description": "Опис для музей номер 1111",
		"createdAt": "2024-10-25T21:00:00.000Z",
		"coords": {
			"lat": 50.6735,
			"lon": 30.2069
		},
		"category": "museum"
	},
	{
		"id": "1112",
		"name": "Маркет №1112",
		"description": "Опис для маркет номер 1112",
		"createdAt": "2024-06-23T21:00:00.000Z",
		"coords": {
			"lat": 50.4889,
			"lon": 30.8431
		},
		"category": "shop"
	},
	{
		"id": "1113",
		"name": "Бургерна №1113",
		"description": "Опис для бургерна номер 1113",
		"createdAt": "2024-01-24T22:00:00.000Z",
		"coords": {
			"lat": 50.4856,
			"lon": 30.6115
		},
		"category": "food"
	},
	{
		"id": "1114",
		"name": "Парк №1114",
		"description": "Опис для парк номер 1114",
		"createdAt": "2024-10-13T21:00:00.000Z",
		"coords": {
			"lat": 50.4095,
			"lon": 30.7788
		},
		"category": "park"
	},
	{
		"id": "1115",
		"name": "Роща №1115",
		"description": "Опис для роща номер 1115",
		"createdAt": "2024-03-07T22:00:00.000Z",
		"coords": {
			"lat": 50.5072,
			"lon": 30.5862
		},
		"category": "park"
	},
	{
		"id": "1116",
		"name": "Супермаркет №1116",
		"description": "Опис для супермаркет номер 1116",
		"createdAt": "2024-03-27T22:00:00.000Z",
		"coords": {
			"lat": 50.6467,
			"lon": 30.6804
		},
		"category": "shop"
	},
	{
		"id": "1117",
		"name": "Супермаркет №1117",
		"description": "Опис для супермаркет номер 1117",
		"createdAt": "2024-01-08T22:00:00.000Z",
		"coords": {
			"lat": 50.3023,
			"lon": 30.4622
		},
		"category": "shop"
	},
	{
		"id": "1118",
		"name": "Кав'ярня №1118",
		"description": "Опис для кав'ярня номер 1118",
		"createdAt": "2024-08-14T21:00:00.000Z",
		"coords": {
			"lat": 50.5558,
			"lon": 30.8133
		},
		"category": "food"
	},
	{
		"id": "1119",
		"name": "Музей №1119",
		"description": "Опис для музей номер 1119",
		"createdAt": "2024-07-01T21:00:00.000Z",
		"coords": {
			"lat": 50.5623,
			"lon": 30.5223
		},
		"category": "museum"
	},
	{
		"id": "1120",
		"name": "Об'єкт №1120",
		"description": "Опис для об'єкт номер 1120",
		"createdAt": "2024-04-06T21:00:00.000Z",
		"coords": {
			"lat": 50.4185,
			"lon": 30.8241
		},
		"category": "other"
	},
	{
		"id": "1121",
		"name": "Сквер №1121",
		"description": "Опис для сквер номер 1121",
		"createdAt": "2024-11-18T22:00:00.000Z",
		"coords": {
			"lat": 50.5693,
			"lon": 30.5269
		},
		"category": "park"
	},
	{
		"id": "1122",
		"name": "Ресторан №1122",
		"description": "Опис для ресторан номер 1122",
		"createdAt": "2024-04-26T21:00:00.000Z",
		"coords": {
			"lat": 50.4607,
			"lon": 30.9254
		},
		"category": "food"
	},
	{
		"id": "1123",
		"name": "Супермаркет №1123",
		"description": "Опис для супермаркет номер 1123",
		"createdAt": "2024-06-22T21:00:00.000Z",
		"coords": {
			"lat": 50.6789,
			"lon": 30.4762
		},
		"category": "shop"
	},
	{
		"id": "1124",
		"name": "Торговий центр №1124",
		"description": "Опис для торговий центр номер 1124",
		"createdAt": "2024-11-20T22:00:00.000Z",
		"coords": {
			"lat": 50.3,
			"lon": 30.8266
		},
		"category": "shop"
	},
	{
		"id": "1125",
		"name": "Алея №1125",
		"description": "Опис для алея номер 1125",
		"createdAt": "2024-06-05T21:00:00.000Z",
		"coords": {
			"lat": 50.3079,
			"lon": 30.7469
		},
		"category": "park"
	},
	{
		"id": "1126",
		"name": "Бутік №1126",
		"description": "Опис для бутік номер 1126",
		"createdAt": "2024-07-07T21:00:00.000Z",
		"coords": {
			"lat": 50.488,
			"lon": 30.7583
		},
		"category": "shop"
	},
	{
		"id": "1127",
		"name": "Торговий центр №1127",
		"description": "Опис для торговий центр номер 1127",
		"createdAt": "2024-04-03T21:00:00.000Z",
		"coords": {
			"lat": 50.5018,
			"lon": 30.8231
		},
		"category": "shop"
	},
	{
		"id": "1128",
		"name": "Бутік №1128",
		"description": "Опис для бутік номер 1128",
		"createdAt": "2024-10-20T21:00:00.000Z",
		"coords": {
			"lat": 50.6503,
			"lon": 30.3834
		},
		"category": "shop"
	},
	{
		"id": "1129",
		"name": "Центр №1129",
		"description": "Опис для центр номер 1129",
		"createdAt": "2024-11-22T22:00:00.000Z",
		"coords": {
			"lat": 50.5317,
			"lon": 30.84
		},
		"category": "museum"
	},
	{
		"id": "1130",
		"name": "Центр №1130",
		"description": "Опис для центр номер 1130",
		"createdAt": "2024-12-18T22:00:00.000Z",
		"coords": {
			"lat": 50.3162,
			"lon": 30.6312
		},
		"category": "museum"
	},
	{
		"id": "1131",
		"name": "Галерея №1131",
		"description": "Опис для галерея номер 1131",
		"createdAt": "2024-05-21T21:00:00.000Z",
		"coords": {
			"lat": 50.495,
			"lon": 30.447
		},
		"category": "museum"
	},
	{
		"id": "1132",
		"name": "Ресторан №1132",
		"description": "Опис для ресторан номер 1132",
		"createdAt": "2024-01-03T22:00:00.000Z",
		"coords": {
			"lat": 50.3505,
			"lon": 30.4206
		},
		"category": "food"
	},
	{
		"id": "1133",
		"name": "Об'єкт №1133",
		"description": "Опис для об'єкт номер 1133",
		"createdAt": "2023-12-31T22:00:00.000Z",
		"coords": {
			"lat": 50.6786,
			"lon": 30.5097
		},
		"category": "other"
	},
	{
		"id": "1134",
		"name": "Магазин №1134",
		"description": "Опис для магазин номер 1134",
		"createdAt": "2024-04-04T21:00:00.000Z",
		"coords": {
			"lat": 50.3521,
			"lon": 30.9078
		},
		"category": "shop"
	},
	{
		"id": "1135",
		"name": "Маркет №1135",
		"description": "Опис для маркет номер 1135",
		"createdAt": "2024-06-25T21:00:00.000Z",
		"coords": {
			"lat": 50.4167,
			"lon": 30.8362
		},
		"category": "shop"
	},
	{
		"id": "1136",
		"name": "Столова №1136",
		"description": "Опис для столова номер 1136",
		"createdAt": "2024-09-10T21:00:00.000Z",
		"coords": {
			"lat": 50.6972,
			"lon": 30.8496
		},
		"category": "food"
	},
	{
		"id": "1137",
		"name": "Маркет №1137",
		"description": "Опис для маркет номер 1137",
		"createdAt": "2024-05-19T21:00:00.000Z",
		"coords": {
			"lat": 50.564,
			"lon": 30.629
		},
		"category": "shop"
	},
	{
		"id": "1138",
		"name": "Об'єкт №1138",
		"description": "Опис для об'єкт номер 1138",
		"createdAt": "2024-08-26T21:00:00.000Z",
		"coords": {
			"lat": 50.6258,
			"lon": 30.4507
		},
		"category": "other"
	},
	{
		"id": "1139",
		"name": "Алея №1139",
		"description": "Опис для алея номер 1139",
		"createdAt": "2024-03-03T22:00:00.000Z",
		"coords": {
			"lat": 50.5809,
			"lon": 30.8562
		},
		"category": "park"
	},
	{
		"id": "1140",
		"name": "Центр №1140",
		"description": "Опис для центр номер 1140",
		"createdAt": "2024-07-04T21:00:00.000Z",
		"coords": {
			"lat": 50.4363,
			"lon": 30.4773
		},
		"category": "other"
	},
	{
		"id": "1141",
		"name": "Супермаркет №1141",
		"description": "Опис для супермаркет номер 1141",
		"createdAt": "2024-08-06T21:00:00.000Z",
		"coords": {
			"lat": 50.4106,
			"lon": 30.2217
		},
		"category": "shop"
	},
	{
		"id": "1142",
		"name": "Об'єкт №1142",
		"description": "Опис для об'єкт номер 1142",
		"createdAt": "2024-04-07T21:00:00.000Z",
		"coords": {
			"lat": 50.4172,
			"lon": 30.8723
		},
		"category": "other"
	},
	{
		"id": "1143",
		"name": "Установа №1143",
		"description": "Опис для установа номер 1143",
		"createdAt": "2024-01-26T22:00:00.000Z",
		"coords": {
			"lat": 50.6575,
			"lon": 30.5537
		},
		"category": "other"
	},
	{
		"id": "1144",
		"name": "Магазин №1144",
		"description": "Опис для магазин номер 1144",
		"createdAt": "2024-02-13T22:00:00.000Z",
		"coords": {
			"lat": 50.5545,
			"lon": 30.8414
		},
		"category": "shop"
	},
	{
		"id": "1145",
		"name": "Суші-бар №1145",
		"description": "Опис для суші-бар номер 1145",
		"createdAt": "2024-06-20T21:00:00.000Z",
		"coords": {
			"lat": 50.6834,
			"lon": 30.5909
		},
		"category": "food"
	},
	{
		"id": "1146",
		"name": "Центр №1146",
		"description": "Опис для центр номер 1146",
		"createdAt": "2024-01-16T22:00:00.000Z",
		"coords": {
			"lat": 50.3091,
			"lon": 30.7905
		},
		"category": "museum"
	},
	{
		"id": "1147",
		"name": "Магазин №1147",
		"description": "Опис для магазин номер 1147",
		"createdAt": "2024-01-21T22:00:00.000Z",
		"coords": {
			"lat": 50.3233,
			"lon": 30.2163
		},
		"category": "shop"
	},
	{
		"id": "1148",
		"name": "Кав'ярня №1148",
		"description": "Опис для кав'ярня номер 1148",
		"createdAt": "2024-02-11T22:00:00.000Z",
		"coords": {
			"lat": 50.5653,
			"lon": 30.4282
		},
		"category": "food"
	},
	{
		"id": "1149",
		"name": "Музей №1149",
		"description": "Опис для музей номер 1149",
		"createdAt": "2024-07-18T21:00:00.000Z",
		"coords": {
			"lat": 50.5862,
			"lon": 30.6773
		},
		"category": "museum"
	},
	{
		"id": "1150",
		"name": "Кав'ярня №1150",
		"description": "Опис для кав'ярня номер 1150",
		"createdAt": "2024-10-24T21:00:00.000Z",
		"coords": {
			"lat": 50.3422,
			"lon": 30.2381
		},
		"category": "food"
	},
	{
		"id": "1151",
		"name": "Центр №1151",
		"description": "Опис для центр номер 1151",
		"createdAt": "2024-08-31T21:00:00.000Z",
		"coords": {
			"lat": 50.671,
			"lon": 30.618
		},
		"category": "other"
	},
	{
		"id": "1152",
		"name": "Бутік №1152",
		"description": "Опис для бутік номер 1152",
		"createdAt": "2024-03-01T22:00:00.000Z",
		"coords": {
			"lat": 50.4705,
			"lon": 30.3945
		},
		"category": "shop"
	},
	{
		"id": "1153",
		"name": "Торговий центр №1153",
		"description": "Опис для торговий центр номер 1153",
		"createdAt": "2024-02-05T22:00:00.000Z",
		"coords": {
			"lat": 50.6235,
			"lon": 30.7659
		},
		"category": "shop"
	},
	{
		"id": "1154",
		"name": "Об'єкт №1154",
		"description": "Опис для об'єкт номер 1154",
		"createdAt": "2024-05-16T21:00:00.000Z",
		"coords": {
			"lat": 50.4114,
			"lon": 30.9901
		},
		"category": "other"
	},
	{
		"id": "1155",
		"name": "Алея №1155",
		"description": "Опис для алея номер 1155",
		"createdAt": "2024-06-10T21:00:00.000Z",
		"coords": {
			"lat": 50.6699,
			"lon": 30.3826
		},
		"category": "park"
	},
	{
		"id": "1156",
		"name": "Сад №1156",
		"description": "Опис для сад номер 1156",
		"createdAt": "2024-02-05T22:00:00.000Z",
		"coords": {
			"lat": 50.3026,
			"lon": 30.529
		},
		"category": "park"
	},
	{
		"id": "1157",
		"name": "Столова №1157",
		"description": "Опис для столова номер 1157",
		"createdAt": "2024-10-01T21:00:00.000Z",
		"coords": {
			"lat": 50.6864,
			"lon": 30.8123
		},
		"category": "food"
	},
	{
		"id": "1158",
		"name": "Столова №1158",
		"description": "Опис для столова номер 1158",
		"createdAt": "2024-05-17T21:00:00.000Z",
		"coords": {
			"lat": 50.6386,
			"lon": 30.9592
		},
		"category": "food"
	},
	{
		"id": "1159",
		"name": "Бутік №1159",
		"description": "Опис для бутік номер 1159",
		"createdAt": "2024-04-22T21:00:00.000Z",
		"coords": {
			"lat": 50.3264,
			"lon": 30.912
		},
		"category": "shop"
	},
	{
		"id": "1160",
		"name": "Магазин №1160",
		"description": "Опис для магазин номер 1160",
		"createdAt": "2024-02-06T22:00:00.000Z",
		"coords": {
			"lat": 50.6248,
			"lon": 30.5725
		},
		"category": "shop"
	},
	{
		"id": "1161",
		"name": "Супермаркет №1161",
		"description": "Опис для супермаркет номер 1161",
		"createdAt": "2024-02-08T22:00:00.000Z",
		"coords": {
			"lat": 50.5476,
			"lon": 30.5247
		},
		"category": "shop"
	},
	{
		"id": "1162",
		"name": "Офіс №1162",
		"description": "Опис для офіс номер 1162",
		"createdAt": "2024-08-11T21:00:00.000Z",
		"coords": {
			"lat": 50.6619,
			"lon": 30.791
		},
		"category": "other"
	},
	{
		"id": "1163",
		"name": "Торговий центр №1163",
		"description": "Опис для торговий центр номер 1163",
		"createdAt": "2024-02-01T22:00:00.000Z",
		"coords": {
			"lat": 50.517,
			"lon": 30.4287
		},
		"category": "shop"
	},
	{
		"id": "1164",
		"name": "Торговий центр №1164",
		"description": "Опис для торговий центр номер 1164",
		"createdAt": "2024-05-19T21:00:00.000Z",
		"coords": {
			"lat": 50.6285,
			"lon": 30.59
		},
		"category": "shop"
	},
	{
		"id": "1165",
		"name": "Об'єкт №1165",
		"description": "Опис для об'єкт номер 1165",
		"createdAt": "2024-12-10T22:00:00.000Z",
		"coords": {
			"lat": 50.388,
			"lon": 30.3902
		},
		"category": "other"
	},
	{
		"id": "1166",
		"name": "Парк №1166",
		"description": "Опис для парк номер 1166",
		"createdAt": "2024-03-12T22:00:00.000Z",
		"coords": {
			"lat": 50.391,
			"lon": 30.4131
		},
		"category": "park"
	},
	{
		"id": "1167",
		"name": "Бургерна №1167",
		"description": "Опис для бургерна номер 1167",
		"createdAt": "2024-06-12T21:00:00.000Z",
		"coords": {
			"lat": 50.4467,
			"lon": 30.2376
		},
		"category": "food"
	},
	{
		"id": "1168",
		"name": "Маркет №1168",
		"description": "Опис для маркет номер 1168",
		"createdAt": "2024-08-08T21:00:00.000Z",
		"coords": {
			"lat": 50.5949,
			"lon": 30.9938
		},
		"category": "shop"
	},
	{
		"id": "1169",
		"name": "Сквер №1169",
		"description": "Опис для сквер номер 1169",
		"createdAt": "2024-08-04T21:00:00.000Z",
		"coords": {
			"lat": 50.3209,
			"lon": 30.9172
		},
		"category": "park"
	},
	{
		"id": "1170",
		"name": "Центр №1170",
		"description": "Опис для центр номер 1170",
		"createdAt": "2024-07-16T21:00:00.000Z",
		"coords": {
			"lat": 50.5358,
			"lon": 30.8789
		},
		"category": "museum"
	},
	{
		"id": "1171",
		"name": "Музей №1171",
		"description": "Опис для музей номер 1171",
		"createdAt": "2024-02-29T22:00:00.000Z",
		"coords": {
			"lat": 50.4196,
			"lon": 30.567
		},
		"category": "museum"
	},
	{
		"id": "1172",
		"name": "Торговий центр №1172",
		"description": "Опис для торговий центр номер 1172",
		"createdAt": "2024-02-23T22:00:00.000Z",
		"coords": {
			"lat": 50.4181,
			"lon": 30.3362
		},
		"category": "shop"
	},
	{
		"id": "1173",
		"name": "Алея №1173",
		"description": "Опис для алея номер 1173",
		"createdAt": "2024-10-08T21:00:00.000Z",
		"coords": {
			"lat": 50.3708,
			"lon": 30.5017
		},
		"category": "park"
	},
	{
		"id": "1174",
		"name": "Кав'ярня №1174",
		"description": "Опис для кав'ярня номер 1174",
		"createdAt": "2024-07-22T21:00:00.000Z",
		"coords": {
			"lat": 50.3079,
			"lon": 30.4761
		},
		"category": "food"
	},
	{
		"id": "1175",
		"name": "Музей №1175",
		"description": "Опис для музей номер 1175",
		"createdAt": "2024-03-12T22:00:00.000Z",
		"coords": {
			"lat": 50.5338,
			"lon": 30.4735
		},
		"category": "museum"
	},
	{
		"id": "1176",
		"name": "Роща №1176",
		"description": "Опис для роща номер 1176",
		"createdAt": "2024-09-07T21:00:00.000Z",
		"coords": {
			"lat": 50.3172,
			"lon": 30.4305
		},
		"category": "park"
	},
	{
		"id": "1177",
		"name": "Бутік №1177",
		"description": "Опис для бутік номер 1177",
		"createdAt": "2024-02-24T22:00:00.000Z",
		"coords": {
			"lat": 50.5995,
			"lon": 30.6949
		},
		"category": "shop"
	},
	{
		"id": "1178",
		"name": "Парк №1178",
		"description": "Опис для парк номер 1178",
		"createdAt": "2024-03-02T22:00:00.000Z",
		"coords": {
			"lat": 50.632,
			"lon": 30.9375
		},
		"category": "park"
	},
	{
		"id": "1179",
		"name": "Об'єкт №1179",
		"description": "Опис для об'єкт номер 1179",
		"createdAt": "2024-12-02T22:00:00.000Z",
		"coords": {
			"lat": 50.5277,
			"lon": 30.7796
		},
		"category": "other"
	},
	{
		"id": "1180",
		"name": "Алея №1180",
		"description": "Опис для алея номер 1180",
		"createdAt": "2024-02-22T22:00:00.000Z",
		"coords": {
			"lat": 50.3481,
			"lon": 30.6575
		},
		"category": "park"
	},
	{
		"id": "1181",
		"name": "Сквер №1181",
		"description": "Опис для сквер номер 1181",
		"createdAt": "2024-01-21T22:00:00.000Z",
		"coords": {
			"lat": 50.5298,
			"lon": 30.2095
		},
		"category": "park"
	},
	{
		"id": "1182",
		"name": "Будівля №1182",
		"description": "Опис для будівля номер 1182",
		"createdAt": "2024-01-12T22:00:00.000Z",
		"coords": {
			"lat": 50.3369,
			"lon": 30.796
		},
		"category": "other"
	},
	{
		"id": "1183",
		"name": "Об'єкт №1183",
		"description": "Опис для об'єкт номер 1183",
		"createdAt": "2024-12-10T22:00:00.000Z",
		"coords": {
			"lat": 50.6309,
			"lon": 30.3708
		},
		"category": "other"
	},
	{
		"id": "1184",
		"name": "Офіс №1184",
		"description": "Опис для офіс номер 1184",
		"createdAt": "2024-03-11T22:00:00.000Z",
		"coords": {
			"lat": 50.3286,
			"lon": 30.2429
		},
		"category": "other"
	},
	{
		"id": "1185",
		"name": "Маркет №1185",
		"description": "Опис для маркет номер 1185",
		"createdAt": "2024-09-07T21:00:00.000Z",
		"coords": {
			"lat": 50.3458,
			"lon": 30.5417
		},
		"category": "shop"
	},
	{
		"id": "1186",
		"name": "Центр №1186",
		"description": "Опис для центр номер 1186",
		"createdAt": "2024-05-13T21:00:00.000Z",
		"coords": {
			"lat": 50.5544,
			"lon": 30.4789
		},
		"category": "other"
	},
	{
		"id": "1187",
		"name": "Центр №1187",
		"description": "Опис для центр номер 1187",
		"createdAt": "2024-11-20T22:00:00.000Z",
		"coords": {
			"lat": 50.3127,
			"lon": 30.9605
		},
		"category": "museum"
	},
	{
		"id": "1188",
		"name": "Сквер №1188",
		"description": "Опис для сквер номер 1188",
		"createdAt": "2024-11-27T22:00:00.000Z",
		"coords": {
			"lat": 50.4469,
			"lon": 30.8867
		},
		"category": "park"
	},
	{
		"id": "1189",
		"name": "Бутік №1189",
		"description": "Опис для бутік номер 1189",
		"createdAt": "2024-09-04T21:00:00.000Z",
		"coords": {
			"lat": 50.3811,
			"lon": 30.4719
		},
		"category": "shop"
	},
	{
		"id": "1190",
		"name": "Торговий центр №1190",
		"description": "Опис для торговий центр номер 1190",
		"createdAt": "2024-09-27T21:00:00.000Z",
		"coords": {
			"lat": 50.6727,
			"lon": 30.4082
		},
		"category": "shop"
	},
	{
		"id": "1191",
		"name": "Сад №1191",
		"description": "Опис для сад номер 1191",
		"createdAt": "2024-07-08T21:00:00.000Z",
		"coords": {
			"lat": 50.5541,
			"lon": 30.2349
		},
		"category": "park"
	},
	{
		"id": "1192",
		"name": "Виставка №1192",
		"description": "Опис для виставка номер 1192",
		"createdAt": "2024-06-08T21:00:00.000Z",
		"coords": {
			"lat": 50.3534,
			"lon": 30.6302
		},
		"category": "museum"
	},
	{
		"id": "1193",
		"name": "Алея №1193",
		"description": "Опис для алея номер 1193",
		"createdAt": "2024-12-10T22:00:00.000Z",
		"coords": {
			"lat": 50.4325,
			"lon": 30.4047
		},
		"category": "park"
	},
	{
		"id": "1194",
		"name": "Бутік №1194",
		"description": "Опис для бутік номер 1194",
		"createdAt": "2024-08-06T21:00:00.000Z",
		"coords": {
			"lat": 50.4654,
			"lon": 30.5847
		},
		"category": "shop"
	},
	{
		"id": "1195",
		"name": "Піцерія №1195",
		"description": "Опис для піцерія номер 1195",
		"createdAt": "2024-03-16T22:00:00.000Z",
		"coords": {
			"lat": 50.6123,
			"lon": 30.6248
		},
		"category": "food"
	},
	{
		"id": "1196",
		"name": "Будівля №1196",
		"description": "Опис для будівля номер 1196",
		"createdAt": "2024-05-17T21:00:00.000Z",
		"coords": {
			"lat": 50.4887,
			"lon": 30.9432
		},
		"category": "other"
	},
	{
		"id": "1197",
		"name": "Маркет №1197",
		"description": "Опис для маркет номер 1197",
		"createdAt": "2024-09-10T21:00:00.000Z",
		"coords": {
			"lat": 50.3568,
			"lon": 30.4409
		},
		"category": "shop"
	},
	{
		"id": "1198",
		"name": "Центр №1198",
		"description": "Опис для центр номер 1198",
		"createdAt": "2024-10-03T21:00:00.000Z",
		"coords": {
			"lat": 50.3095,
			"lon": 30.5675
		},
		"category": "other"
	},
	{
		"id": "1199",
		"name": "Супермаркет №1199",
		"description": "Опис для супермаркет номер 1199",
		"createdAt": "2024-04-16T21:00:00.000Z",
		"coords": {
			"lat": 50.6514,
			"lon": 30.2976
		},
		"category": "shop"
	},
	{
		"id": "1200",
		"name": "Об'єкт №1200",
		"description": "Опис для об'єкт номер 1200",
		"createdAt": "2024-10-12T21:00:00.000Z",
		"coords": {
			"lat": 50.3295,
			"lon": 30.53
		},
		"category": "other"
	},
	{
		"id": "1201",
		"name": "Будівля №1201",
		"description": "Опис для будівля номер 1201",
		"createdAt": "2024-03-15T22:00:00.000Z",
		"coords": {
			"lat": 50.4445,
			"lon": 30.4735
		},
		"category": "other"
	},
	{
		"id": "1202",
		"name": "Центр №1202",
		"description": "Опис для центр номер 1202",
		"createdAt": "2024-07-16T21:00:00.000Z",
		"coords": {
			"lat": 50.5453,
			"lon": 30.6522
		},
		"category": "museum"
	},
	{
		"id": "1203",
		"name": "Бутік №1203",
		"description": "Опис для бутік номер 1203",
		"createdAt": "2024-02-13T22:00:00.000Z",
		"coords": {
			"lat": 50.5574,
			"lon": 30.5105
		},
		"category": "shop"
	},
	{
		"id": "1204",
		"name": "Ресторан №1204",
		"description": "Опис для ресторан номер 1204",
		"createdAt": "2024-06-30T21:00:00.000Z",
		"coords": {
			"lat": 50.4765,
			"lon": 30.7332
		},
		"category": "food"
	},
	{
		"id": "1205",
		"name": "Центр №1205",
		"description": "Опис для центр номер 1205",
		"createdAt": "2024-12-09T22:00:00.000Z",
		"coords": {
			"lat": 50.4834,
			"lon": 30.258
		},
		"category": "museum"
	},
	{
		"id": "1206",
		"name": "Столова №1206",
		"description": "Опис для столова номер 1206",
		"createdAt": "2024-04-06T21:00:00.000Z",
		"coords": {
			"lat": 50.6269,
			"lon": 30.5978
		},
		"category": "food"
	},
	{
		"id": "1207",
		"name": "Центр №1207",
		"description": "Опис для центр номер 1207",
		"createdAt": "2024-08-24T21:00:00.000Z",
		"coords": {
			"lat": 50.4692,
			"lon": 30.5965
		},
		"category": "museum"
	},
	{
		"id": "1208",
		"name": "Суші-бар №1208",
		"description": "Опис для суші-бар номер 1208",
		"createdAt": "2024-12-05T22:00:00.000Z",
		"coords": {
			"lat": 50.3322,
			"lon": 30.4564
		},
		"category": "food"
	},
	{
		"id": "1209",
		"name": "Піцерія №1209",
		"description": "Опис для піцерія номер 1209",
		"createdAt": "2024-10-17T21:00:00.000Z",
		"coords": {
			"lat": 50.5548,
			"lon": 30.7497
		},
		"category": "food"
	},
	{
		"id": "1210",
		"name": "Галерея №1210",
		"description": "Опис для галерея номер 1210",
		"createdAt": "2024-02-27T22:00:00.000Z",
		"coords": {
			"lat": 50.6397,
			"lon": 30.5193
		},
		"category": "museum"
	},
	{
		"id": "1211",
		"name": "Суші-бар №1211",
		"description": "Опис для суші-бар номер 1211",
		"createdAt": "2024-04-17T21:00:00.000Z",
		"coords": {
			"lat": 50.6335,
			"lon": 30.8855
		},
		"category": "food"
	},
	{
		"id": "1212",
		"name": "Бургерна №1212",
		"description": "Опис для бургерна номер 1212",
		"createdAt": "2024-02-20T22:00:00.000Z",
		"coords": {
			"lat": 50.6635,
			"lon": 30.8735
		},
		"category": "food"
	},
	{
		"id": "1213",
		"name": "Центр №1213",
		"description": "Опис для центр номер 1213",
		"createdAt": "2024-09-05T21:00:00.000Z",
		"coords": {
			"lat": 50.6316,
			"lon": 30.2175
		},
		"category": "museum"
	},
	{
		"id": "1214",
		"name": "Музей №1214",
		"description": "Опис для музей номер 1214",
		"createdAt": "2024-09-04T21:00:00.000Z",
		"coords": {
			"lat": 50.6765,
			"lon": 30.4694
		},
		"category": "museum"
	},
	{
		"id": "1215",
		"name": "Центр №1215",
		"description": "Опис для центр номер 1215",
		"createdAt": "2024-01-15T22:00:00.000Z",
		"coords": {
			"lat": 50.5522,
			"lon": 30.5328
		},
		"category": "museum"
	},
	{
		"id": "1216",
		"name": "Бургерна №1216",
		"description": "Опис для бургерна номер 1216",
		"createdAt": "2024-09-16T21:00:00.000Z",
		"coords": {
			"lat": 50.3819,
			"lon": 30.2537
		},
		"category": "food"
	},
	{
		"id": "1217",
		"name": "Бургерна №1217",
		"description": "Опис для бургерна номер 1217",
		"createdAt": "2024-11-14T22:00:00.000Z",
		"coords": {
			"lat": 50.3688,
			"lon": 30.898
		},
		"category": "food"
	},
	{
		"id": "1218",
		"name": "Столова №1218",
		"description": "Опис для столова номер 1218",
		"createdAt": "2024-08-19T21:00:00.000Z",
		"coords": {
			"lat": 50.6101,
			"lon": 30.2033
		},
		"category": "food"
	},
	{
		"id": "1219",
		"name": "Будівля №1219",
		"description": "Опис для будівля номер 1219",
		"createdAt": "2024-07-27T21:00:00.000Z",
		"coords": {
			"lat": 50.3089,
			"lon": 30.7743
		},
		"category": "other"
	},
	{
		"id": "1220",
		"name": "Маркет №1220",
		"description": "Опис для маркет номер 1220",
		"createdAt": "2024-03-13T22:00:00.000Z",
		"coords": {
			"lat": 50.3534,
			"lon": 30.3009
		},
		"category": "shop"
	},
	{
		"id": "1221",
		"name": "Виставка №1221",
		"description": "Опис для виставка номер 1221",
		"createdAt": "2024-03-13T22:00:00.000Z",
		"coords": {
			"lat": 50.4245,
			"lon": 30.3431
		},
		"category": "museum"
	},
	{
		"id": "1222",
		"name": "Кафе №1222",
		"description": "Опис для кафе номер 1222",
		"createdAt": "2024-02-24T22:00:00.000Z",
		"coords": {
			"lat": 50.6334,
			"lon": 30.8015
		},
		"category": "food"
	},
	{
		"id": "1223",
		"name": "Будівля №1223",
		"description": "Опис для будівля номер 1223",
		"createdAt": "2024-05-08T21:00:00.000Z",
		"coords": {
			"lat": 50.4737,
			"lon": 30.5552
		},
		"category": "other"
	},
	{
		"id": "1224",
		"name": "Об'єкт №1224",
		"description": "Опис для об'єкт номер 1224",
		"createdAt": "2024-12-14T22:00:00.000Z",
		"coords": {
			"lat": 50.4678,
			"lon": 30.613
		},
		"category": "other"
	},
	{
		"id": "1225",
		"name": "Бутік №1225",
		"description": "Опис для бутік номер 1225",
		"createdAt": "2024-04-08T21:00:00.000Z",
		"coords": {
			"lat": 50.4769,
			"lon": 30.4356
		},
		"category": "shop"
	},
	{
		"id": "1226",
		"name": "Сад №1226",
		"description": "Опис для сад номер 1226",
		"createdAt": "2024-12-11T22:00:00.000Z",
		"coords": {
			"lat": 50.3315,
			"lon": 30.6499
		},
		"category": "park"
	},
	{
		"id": "1227",
		"name": "Маркет №1227",
		"description": "Опис для маркет номер 1227",
		"createdAt": "2024-11-24T22:00:00.000Z",
		"coords": {
			"lat": 50.5592,
			"lon": 30.5254
		},
		"category": "shop"
	},
	{
		"id": "1228",
		"name": "Магазин №1228",
		"description": "Опис для магазин номер 1228",
		"createdAt": "2024-05-31T21:00:00.000Z",
		"coords": {
			"lat": 50.506,
			"lon": 30.8204
		},
		"category": "shop"
	},
	{
		"id": "1229",
		"name": "Магазин №1229",
		"description": "Опис для магазин номер 1229",
		"createdAt": "2024-03-05T22:00:00.000Z",
		"coords": {
			"lat": 50.4349,
			"lon": 30.274
		},
		"category": "shop"
	},
	{
		"id": "1230",
		"name": "Кафе №1230",
		"description": "Опис для кафе номер 1230",
		"createdAt": "2024-03-07T22:00:00.000Z",
		"coords": {
			"lat": 50.6587,
			"lon": 30.8412
		},
		"category": "food"
	},
	{
		"id": "1231",
		"name": "Алея №1231",
		"description": "Опис для алея номер 1231",
		"createdAt": "2024-06-07T21:00:00.000Z",
		"coords": {
			"lat": 50.6014,
			"lon": 30.3958
		},
		"category": "park"
	},
	{
		"id": "1232",
		"name": "Виставка №1232",
		"description": "Опис для виставка номер 1232",
		"createdAt": "2024-07-20T21:00:00.000Z",
		"coords": {
			"lat": 50.5471,
			"lon": 30.5532
		},
		"category": "museum"
	},
	{
		"id": "1233",
		"name": "Центр №1233",
		"description": "Опис для центр номер 1233",
		"createdAt": "2024-09-27T21:00:00.000Z",
		"coords": {
			"lat": 50.4077,
			"lon": 30.8196
		},
		"category": "other"
	},
	{
		"id": "1234",
		"name": "Офіс №1234",
		"description": "Опис для офіс номер 1234",
		"createdAt": "2024-04-19T21:00:00.000Z",
		"coords": {
			"lat": 50.5087,
			"lon": 30.3112
		},
		"category": "other"
	},
	{
		"id": "1235",
		"name": "Центр №1235",
		"description": "Опис для центр номер 1235",
		"createdAt": "2024-05-07T21:00:00.000Z",
		"coords": {
			"lat": 50.6143,
			"lon": 30.8448
		},
		"category": "other"
	},
	{
		"id": "1236",
		"name": "Сад №1236",
		"description": "Опис для сад номер 1236",
		"createdAt": "2024-10-21T21:00:00.000Z",
		"coords": {
			"lat": 50.6656,
			"lon": 30.3867
		},
		"category": "park"
	},
	{
		"id": "1237",
		"name": "Будівля №1237",
		"description": "Опис для будівля номер 1237",
		"createdAt": "2024-06-26T21:00:00.000Z",
		"coords": {
			"lat": 50.4004,
			"lon": 30.2744
		},
		"category": "other"
	},
	{
		"id": "1238",
		"name": "Центр №1238",
		"description": "Опис для центр номер 1238",
		"createdAt": "2024-03-09T22:00:00.000Z",
		"coords": {
			"lat": 50.6508,
			"lon": 30.7676
		},
		"category": "museum"
	},
	{
		"id": "1239",
		"name": "Столова №1239",
		"description": "Опис для столова номер 1239",
		"createdAt": "2024-05-18T21:00:00.000Z",
		"coords": {
			"lat": 50.4612,
			"lon": 30.6143
		},
		"category": "food"
	},
	{
		"id": "1240",
		"name": "Сквер №1240",
		"description": "Опис для сквер номер 1240",
		"createdAt": "2024-08-18T21:00:00.000Z",
		"coords": {
			"lat": 50.5034,
			"lon": 30.9032
		},
		"category": "park"
	},
	{
		"id": "1241",
		"name": "Бургерна №1241",
		"description": "Опис для бургерна номер 1241",
		"createdAt": "2024-04-09T21:00:00.000Z",
		"coords": {
			"lat": 50.3075,
			"lon": 30.6147
		},
		"category": "food"
	},
	{
		"id": "1242",
		"name": "Бутік №1242",
		"description": "Опис для бутік номер 1242",
		"createdAt": "2024-10-25T21:00:00.000Z",
		"coords": {
			"lat": 50.6597,
			"lon": 30.7012
		},
		"category": "shop"
	},
	{
		"id": "1243",
		"name": "Кафе №1243",
		"description": "Опис для кафе номер 1243",
		"createdAt": "2024-04-30T21:00:00.000Z",
		"coords": {
			"lat": 50.3879,
			"lon": 30.6189
		},
		"category": "food"
	},
	{
		"id": "1244",
		"name": "Ресторан №1244",
		"description": "Опис для ресторан номер 1244",
		"createdAt": "2024-06-04T21:00:00.000Z",
		"coords": {
			"lat": 50.4499,
			"lon": 30.9389
		},
		"category": "food"
	},
	{
		"id": "1245",
		"name": "Магазин №1245",
		"description": "Опис для магазин номер 1245",
		"createdAt": "2023-12-31T22:00:00.000Z",
		"coords": {
			"lat": 50.382,
			"lon": 30.7132
		},
		"category": "shop"
	},
	{
		"id": "1246",
		"name": "Центр №1246",
		"description": "Опис для центр номер 1246",
		"createdAt": "2024-10-16T21:00:00.000Z",
		"coords": {
			"lat": 50.6132,
			"lon": 30.8854
		},
		"category": "museum"
	},
	{
		"id": "1247",
		"name": "Маркет №1247",
		"description": "Опис для маркет номер 1247",
		"createdAt": "2024-09-30T21:00:00.000Z",
		"coords": {
			"lat": 50.4112,
			"lon": 30.4236
		},
		"category": "shop"
	},
	{
		"id": "1248",
		"name": "Будівля №1248",
		"description": "Опис для будівля номер 1248",
		"createdAt": "2024-02-17T22:00:00.000Z",
		"coords": {
			"lat": 50.5664,
			"lon": 30.8062
		},
		"category": "other"
	},
	{
		"id": "1249",
		"name": "Магазин №1249",
		"description": "Опис для магазин номер 1249",
		"createdAt": "2024-07-10T21:00:00.000Z",
		"coords": {
			"lat": 50.4125,
			"lon": 30.3932
		},
		"category": "shop"
	},
	{
		"id": "1250",
		"name": "Піцерія №1250",
		"description": "Опис для піцерія номер 1250",
		"createdAt": "2024-11-01T22:00:00.000Z",
		"coords": {
			"lat": 50.3703,
			"lon": 30.4509
		},
		"category": "food"
	},
	{
		"id": "1251",
		"name": "Магазин №1251",
		"description": "Опис для магазин номер 1251",
		"createdAt": "2024-09-02T21:00:00.000Z",
		"coords": {
			"lat": 50.5647,
			"lon": 30.5801
		},
		"category": "shop"
	},
	{
		"id": "1252",
		"name": "Торговий центр №1252",
		"description": "Опис для торговий центр номер 1252",
		"createdAt": "2024-05-03T21:00:00.000Z",
		"coords": {
			"lat": 50.3198,
			"lon": 30.3358
		},
		"category": "shop"
	},
	{
		"id": "1253",
		"name": "Сквер №1253",
		"description": "Опис для сквер номер 1253",
		"createdAt": "2024-01-02T22:00:00.000Z",
		"coords": {
			"lat": 50.6212,
			"lon": 30.2149
		},
		"category": "park"
	},
	{
		"id": "1254",
		"name": "Супермаркет №1254",
		"description": "Опис для супермаркет номер 1254",
		"createdAt": "2024-07-08T21:00:00.000Z",
		"coords": {
			"lat": 50.6439,
			"lon": 30.6667
		},
		"category": "shop"
	},
	{
		"id": "1255",
		"name": "Сад №1255",
		"description": "Опис для сад номер 1255",
		"createdAt": "2024-03-17T22:00:00.000Z",
		"coords": {
			"lat": 50.3871,
			"lon": 30.6133
		},
		"category": "park"
	},
	{
		"id": "1256",
		"name": "Сквер №1256",
		"description": "Опис для сквер номер 1256",
		"createdAt": "2024-05-19T21:00:00.000Z",
		"coords": {
			"lat": 50.3585,
			"lon": 30.8653
		},
		"category": "park"
	},
	{
		"id": "1257",
		"name": "Центр №1257",
		"description": "Опис для центр номер 1257",
		"createdAt": "2024-12-15T22:00:00.000Z",
		"coords": {
			"lat": 50.3841,
			"lon": 30.8151
		},
		"category": "museum"
	},
	{
		"id": "1258",
		"name": "Супермаркет №1258",
		"description": "Опис для супермаркет номер 1258",
		"createdAt": "2024-08-21T21:00:00.000Z",
		"coords": {
			"lat": 50.3311,
			"lon": 30.4034
		},
		"category": "shop"
	},
	{
		"id": "1259",
		"name": "Музей №1259",
		"description": "Опис для музей номер 1259",
		"createdAt": "2024-02-05T22:00:00.000Z",
		"coords": {
			"lat": 50.3369,
			"lon": 30.5006
		},
		"category": "museum"
	},
	{
		"id": "1260",
		"name": "Галерея №1260",
		"description": "Опис для галерея номер 1260",
		"createdAt": "2024-01-12T22:00:00.000Z",
		"coords": {
			"lat": 50.3432,
			"lon": 30.9124
		},
		"category": "museum"
	},
	{
		"id": "1261",
		"name": "Парк №1261",
		"description": "Опис для парк номер 1261",
		"createdAt": "2024-10-19T21:00:00.000Z",
		"coords": {
			"lat": 50.3465,
			"lon": 30.2755
		},
		"category": "park"
	},
	{
		"id": "1262",
		"name": "Бургерна №1262",
		"description": "Опис для бургерна номер 1262",
		"createdAt": "2024-10-16T21:00:00.000Z",
		"coords": {
			"lat": 50.3428,
			"lon": 30.2923
		},
		"category": "food"
	},
	{
		"id": "1263",
		"name": "Маркет №1263",
		"description": "Опис для маркет номер 1263",
		"createdAt": "2024-06-03T21:00:00.000Z",
		"coords": {
			"lat": 50.426,
			"lon": 30.9098
		},
		"category": "shop"
	},
	{
		"id": "1264",
		"name": "Музей №1264",
		"description": "Опис для музей номер 1264",
		"createdAt": "2024-10-05T21:00:00.000Z",
		"coords": {
			"lat": 50.4429,
			"lon": 30.2003
		},
		"category": "museum"
	},
	{
		"id": "1265",
		"name": "Роща №1265",
		"description": "Опис для роща номер 1265",
		"createdAt": "2024-11-02T22:00:00.000Z",
		"coords": {
			"lat": 50.6809,
			"lon": 30.2428
		},
		"category": "park"
	},
	{
		"id": "1266",
		"name": "Ресторан №1266",
		"description": "Опис для ресторан номер 1266",
		"createdAt": "2024-12-26T22:00:00.000Z",
		"coords": {
			"lat": 50.6044,
			"lon": 30.5365
		},
		"category": "food"
	},
	{
		"id": "1267",
		"name": "Галерея №1267",
		"description": "Опис для галерея номер 1267",
		"createdAt": "2024-02-05T22:00:00.000Z",
		"coords": {
			"lat": 50.5016,
			"lon": 30.9552
		},
		"category": "museum"
	},
	{
		"id": "1268",
		"name": "Ресторан №1268",
		"description": "Опис для ресторан номер 1268",
		"createdAt": "2024-11-06T22:00:00.000Z",
		"coords": {
			"lat": 50.5319,
			"lon": 30.5665
		},
		"category": "food"
	},
	{
		"id": "1269",
		"name": "Маркет №1269",
		"description": "Опис для маркет номер 1269",
		"createdAt": "2024-10-06T21:00:00.000Z",
		"coords": {
			"lat": 50.5044,
			"lon": 30.5068
		},
		"category": "shop"
	},
	{
		"id": "1270",
		"name": "Офіс №1270",
		"description": "Опис для офіс номер 1270",
		"createdAt": "2024-11-01T22:00:00.000Z",
		"coords": {
			"lat": 50.6826,
			"lon": 30.2751
		},
		"category": "other"
	},
	{
		"id": "1271",
		"name": "Сквер №1271",
		"description": "Опис для сквер номер 1271",
		"createdAt": "2024-02-10T22:00:00.000Z",
		"coords": {
			"lat": 50.6767,
			"lon": 30.5998
		},
		"category": "park"
	},
	{
		"id": "1272",
		"name": "Алея №1272",
		"description": "Опис для алея номер 1272",
		"createdAt": "2024-01-14T22:00:00.000Z",
		"coords": {
			"lat": 50.4326,
			"lon": 30.3247
		},
		"category": "park"
	},
	{
		"id": "1273",
		"name": "Бургерна №1273",
		"description": "Опис для бургерна номер 1273",
		"createdAt": "2024-02-09T22:00:00.000Z",
		"coords": {
			"lat": 50.496,
			"lon": 30.2479
		},
		"category": "food"
	},
	{
		"id": "1274",
		"name": "Роща №1274",
		"description": "Опис для роща номер 1274",
		"createdAt": "2024-08-10T21:00:00.000Z",
		"coords": {
			"lat": 50.4238,
			"lon": 30.8801
		},
		"category": "park"
	},
	{
		"id": "1275",
		"name": "Супермаркет №1275",
		"description": "Опис для супермаркет номер 1275",
		"createdAt": "2024-11-27T22:00:00.000Z",
		"coords": {
			"lat": 50.4283,
			"lon": 30.8751
		},
		"category": "shop"
	},
	{
		"id": "1276",
		"name": "Алея №1276",
		"description": "Опис для алея номер 1276",
		"createdAt": "2024-05-06T21:00:00.000Z",
		"coords": {
			"lat": 50.4748,
			"lon": 30.3787
		},
		"category": "park"
	},
	{
		"id": "1277",
		"name": "Музей №1277",
		"description": "Опис для музей номер 1277",
		"createdAt": "2024-06-16T21:00:00.000Z",
		"coords": {
			"lat": 50.5427,
			"lon": 30.7769
		},
		"category": "museum"
	},
	{
		"id": "1278",
		"name": "Центр №1278",
		"description": "Опис для центр номер 1278",
		"createdAt": "2024-02-06T22:00:00.000Z",
		"coords": {
			"lat": 50.3294,
			"lon": 30.435
		},
		"category": "museum"
	},
	{
		"id": "1279",
		"name": "Музей №1279",
		"description": "Опис для музей номер 1279",
		"createdAt": "2024-12-19T22:00:00.000Z",
		"coords": {
			"lat": 50.484,
			"lon": 30.8201
		},
		"category": "museum"
	},
	{
		"id": "1280",
		"name": "Роща №1280",
		"description": "Опис для роща номер 1280",
		"createdAt": "2024-04-21T21:00:00.000Z",
		"coords": {
			"lat": 50.4571,
			"lon": 30.5771
		},
		"category": "park"
	},
	{
		"id": "1281",
		"name": "Супермаркет №1281",
		"description": "Опис для супермаркет номер 1281",
		"createdAt": "2024-11-21T22:00:00.000Z",
		"coords": {
			"lat": 50.6804,
			"lon": 30.3357
		},
		"category": "shop"
	},
	{
		"id": "1282",
		"name": "Кафе №1282",
		"description": "Опис для кафе номер 1282",
		"createdAt": "2024-06-08T21:00:00.000Z",
		"coords": {
			"lat": 50.6691,
			"lon": 30.4552
		},
		"category": "food"
	},
	{
		"id": "1283",
		"name": "Галерея №1283",
		"description": "Опис для галерея номер 1283",
		"createdAt": "2024-02-12T22:00:00.000Z",
		"coords": {
			"lat": 50.4719,
			"lon": 30.8969
		},
		"category": "museum"
	},
	{
		"id": "1284",
		"name": "Галерея №1284",
		"description": "Опис для галерея номер 1284",
		"createdAt": "2024-04-09T21:00:00.000Z",
		"coords": {
			"lat": 50.4165,
			"lon": 30.4409
		},
		"category": "museum"
	},
	{
		"id": "1285",
		"name": "Установа №1285",
		"description": "Опис для установа номер 1285",
		"createdAt": "2024-01-03T22:00:00.000Z",
		"coords": {
			"lat": 50.4111,
			"lon": 30.3211
		},
		"category": "other"
	},
	{
		"id": "1286",
		"name": "Піцерія №1286",
		"description": "Опис для піцерія номер 1286",
		"createdAt": "2024-09-10T21:00:00.000Z",
		"coords": {
			"lat": 50.6971,
			"lon": 30.6825
		},
		"category": "food"
	},
	{
		"id": "1287",
		"name": "Ресторан №1287",
		"description": "Опис для ресторан номер 1287",
		"createdAt": "2024-08-24T21:00:00.000Z",
		"coords": {
			"lat": 50.4502,
			"lon": 30.3152
		},
		"category": "food"
	},
	{
		"id": "1288",
		"name": "Установа №1288",
		"description": "Опис для установа номер 1288",
		"createdAt": "2024-09-24T21:00:00.000Z",
		"coords": {
			"lat": 50.6519,
			"lon": 30.6914
		},
		"category": "other"
	},
	{
		"id": "1289",
		"name": "Бутік №1289",
		"description": "Опис для бутік номер 1289",
		"createdAt": "2024-08-01T21:00:00.000Z",
		"coords": {
			"lat": 50.3036,
			"lon": 30.6447
		},
		"category": "shop"
	},
	{
		"id": "1290",
		"name": "Центр №1290",
		"description": "Опис для центр номер 1290",
		"createdAt": "2024-05-03T21:00:00.000Z",
		"coords": {
			"lat": 50.4526,
			"lon": 30.7477
		},
		"category": "other"
	},
	{
		"id": "1291",
		"name": "Столова №1291",
		"description": "Опис для столова номер 1291",
		"createdAt": "2024-09-04T21:00:00.000Z",
		"coords": {
			"lat": 50.4696,
			"lon": 30.4438
		},
		"category": "food"
	},
	{
		"id": "1292",
		"name": "Піцерія №1292",
		"description": "Опис для піцерія номер 1292",
		"createdAt": "2024-05-31T21:00:00.000Z",
		"coords": {
			"lat": 50.4715,
			"lon": 30.388
		},
		"category": "food"
	},
	{
		"id": "1293",
		"name": "Торговий центр №1293",
		"description": "Опис для торговий центр номер 1293",
		"createdAt": "2024-05-26T21:00:00.000Z",
		"coords": {
			"lat": 50.3302,
			"lon": 30.7934
		},
		"category": "shop"
	},
	{
		"id": "1294",
		"name": "Ресторан №1294",
		"description": "Опис для ресторан номер 1294",
		"createdAt": "2024-03-16T22:00:00.000Z",
		"coords": {
			"lat": 50.6372,
			"lon": 30.7999
		},
		"category": "food"
	},
	{
		"id": "1295",
		"name": "Піцерія №1295",
		"description": "Опис для піцерія номер 1295",
		"createdAt": "2024-11-20T22:00:00.000Z",
		"coords": {
			"lat": 50.6331,
			"lon": 30.2924
		},
		"category": "food"
	},
	{
		"id": "1296",
		"name": "Будівля №1296",
		"description": "Опис для будівля номер 1296",
		"createdAt": "2024-06-15T21:00:00.000Z",
		"coords": {
			"lat": 50.5915,
			"lon": 30.3735
		},
		"category": "other"
	},
	{
		"id": "1297",
		"name": "Торговий центр №1297",
		"description": "Опис для торговий центр номер 1297",
		"createdAt": "2024-04-24T21:00:00.000Z",
		"coords": {
			"lat": 50.5615,
			"lon": 30.7441
		},
		"category": "shop"
	},
	{
		"id": "1298",
		"name": "Центр №1298",
		"description": "Опис для центр номер 1298",
		"createdAt": "2024-07-19T21:00:00.000Z",
		"coords": {
			"lat": 50.6625,
			"lon": 30.7756
		},
		"category": "museum"
	},
	{
		"id": "1299",
		"name": "Галерея №1299",
		"description": "Опис для галерея номер 1299",
		"createdAt": "2024-02-19T22:00:00.000Z",
		"coords": {
			"lat": 50.657,
			"lon": 30.8882
		},
		"category": "museum"
	},
	{
		"id": "1300",
		"name": "Кафе №1300",
		"description": "Опис для кафе номер 1300",
		"createdAt": "2024-09-01T21:00:00.000Z",
		"coords": {
			"lat": 50.3414,
			"lon": 30.272
		},
		"category": "food"
	},
	{
		"id": "1301",
		"name": "Магазин №1301",
		"description": "Опис для магазин номер 1301",
		"createdAt": "2024-03-01T22:00:00.000Z",
		"coords": {
			"lat": 50.5957,
			"lon": 30.4251
		},
		"category": "shop"
	},
	{
		"id": "1302",
		"name": "Установа №1302",
		"description": "Опис для установа номер 1302",
		"createdAt": "2024-02-20T22:00:00.000Z",
		"coords": {
			"lat": 50.3349,
			"lon": 30.2236
		},
		"category": "other"
	},
	{
		"id": "1303",
		"name": "Парк №1303",
		"description": "Опис для парк номер 1303",
		"createdAt": "2024-03-15T22:00:00.000Z",
		"coords": {
			"lat": 50.6959,
			"lon": 30.7586
		},
		"category": "park"
	},
	{
		"id": "1304",
		"name": "Роща №1304",
		"description": "Опис для роща номер 1304",
		"createdAt": "2024-08-01T21:00:00.000Z",
		"coords": {
			"lat": 50.4795,
			"lon": 30.3704
		},
		"category": "park"
	},
	{
		"id": "1305",
		"name": "Галерея №1305",
		"description": "Опис для галерея номер 1305",
		"createdAt": "2024-11-04T22:00:00.000Z",
		"coords": {
			"lat": 50.3508,
			"lon": 30.5806
		},
		"category": "museum"
	},
	{
		"id": "1306",
		"name": "Столова №1306",
		"description": "Опис для столова номер 1306",
		"createdAt": "2024-03-31T21:00:00.000Z",
		"coords": {
			"lat": 50.42,
			"lon": 30.5909
		},
		"category": "food"
	},
	{
		"id": "1307",
		"name": "Виставка №1307",
		"description": "Опис для виставка номер 1307",
		"createdAt": "2024-05-25T21:00:00.000Z",
		"coords": {
			"lat": 50.4716,
			"lon": 30.7696
		},
		"category": "museum"
	},
	{
		"id": "1308",
		"name": "Сад №1308",
		"description": "Опис для сад номер 1308",
		"createdAt": "2024-05-02T21:00:00.000Z",
		"coords": {
			"lat": 50.4497,
			"lon": 30.5369
		},
		"category": "park"
	},
	{
		"id": "1309",
		"name": "Бутік №1309",
		"description": "Опис для бутік номер 1309",
		"createdAt": "2024-07-25T21:00:00.000Z",
		"coords": {
			"lat": 50.6982,
			"lon": 30.9982
		},
		"category": "shop"
	},
	{
		"id": "1310",
		"name": "Сад №1310",
		"description": "Опис для сад номер 1310",
		"createdAt": "2024-09-04T21:00:00.000Z",
		"coords": {
			"lat": 50.4633,
			"lon": 30.4815
		},
		"category": "park"
	},
	{
		"id": "1311",
		"name": "Суші-бар №1311",
		"description": "Опис для суші-бар номер 1311",
		"createdAt": "2024-05-16T21:00:00.000Z",
		"coords": {
			"lat": 50.6212,
			"lon": 30.3769
		},
		"category": "food"
	},
	{
		"id": "1312",
		"name": "Галерея №1312",
		"description": "Опис для галерея номер 1312",
		"createdAt": "2024-07-05T21:00:00.000Z",
		"coords": {
			"lat": 50.5663,
			"lon": 30.6695
		},
		"category": "museum"
	},
	{
		"id": "1313",
		"name": "Галерея №1313",
		"description": "Опис для галерея номер 1313",
		"createdAt": "2024-02-17T22:00:00.000Z",
		"coords": {
			"lat": 50.4242,
			"lon": 30.6494
		},
		"category": "museum"
	},
	{
		"id": "1314",
		"name": "Супермаркет №1314",
		"description": "Опис для супермаркет номер 1314",
		"createdAt": "2024-04-06T21:00:00.000Z",
		"coords": {
			"lat": 50.337,
			"lon": 30.6786
		},
		"category": "shop"
	},
	{
		"id": "1315",
		"name": "Музей №1315",
		"description": "Опис для музей номер 1315",
		"createdAt": "2024-01-13T22:00:00.000Z",
		"coords": {
			"lat": 50.4751,
			"lon": 30.537
		},
		"category": "museum"
	},
	{
		"id": "1316",
		"name": "Алея №1316",
		"description": "Опис для алея номер 1316",
		"createdAt": "2024-06-14T21:00:00.000Z",
		"coords": {
			"lat": 50.5634,
			"lon": 30.4159
		},
		"category": "park"
	},
	{
		"id": "1317",
		"name": "Центр №1317",
		"description": "Опис для центр номер 1317",
		"createdAt": "2024-02-08T22:00:00.000Z",
		"coords": {
			"lat": 50.6827,
			"lon": 30.5798
		},
		"category": "museum"
	},
	{
		"id": "1318",
		"name": "Суші-бар №1318",
		"description": "Опис для суші-бар номер 1318",
		"createdAt": "2024-06-21T21:00:00.000Z",
		"coords": {
			"lat": 50.6761,
			"lon": 30.7695
		},
		"category": "food"
	},
	{
		"id": "1319",
		"name": "Магазин №1319",
		"description": "Опис для магазин номер 1319",
		"createdAt": "2024-12-23T22:00:00.000Z",
		"coords": {
			"lat": 50.6725,
			"lon": 30.9379
		},
		"category": "shop"
	},
	{
		"id": "1320",
		"name": "Музей №1320",
		"description": "Опис для музей номер 1320",
		"createdAt": "2024-08-07T21:00:00.000Z",
		"coords": {
			"lat": 50.3791,
			"lon": 30.8104
		},
		"category": "museum"
	},
	{
		"id": "1321",
		"name": "Будівля №1321",
		"description": "Опис для будівля номер 1321",
		"createdAt": "2024-03-10T22:00:00.000Z",
		"coords": {
			"lat": 50.3363,
			"lon": 30.815
		},
		"category": "other"
	},
	{
		"id": "1322",
		"name": "Офіс №1322",
		"description": "Опис для офіс номер 1322",
		"createdAt": "2024-09-11T21:00:00.000Z",
		"coords": {
			"lat": 50.5061,
			"lon": 30.6829
		},
		"category": "other"
	},
	{
		"id": "1323",
		"name": "Суші-бар №1323",
		"description": "Опис для суші-бар номер 1323",
		"createdAt": "2024-09-19T21:00:00.000Z",
		"coords": {
			"lat": 50.3542,
			"lon": 30.5873
		},
		"category": "food"
	},
	{
		"id": "1324",
		"name": "Роща №1324",
		"description": "Опис для роща номер 1324",
		"createdAt": "2024-12-10T22:00:00.000Z",
		"coords": {
			"lat": 50.3331,
			"lon": 30.5927
		},
		"category": "park"
	},
	{
		"id": "1325",
		"name": "Піцерія №1325",
		"description": "Опис для піцерія номер 1325",
		"createdAt": "2024-07-31T21:00:00.000Z",
		"coords": {
			"lat": 50.6328,
			"lon": 30.5591
		},
		"category": "food"
	},
	{
		"id": "1326",
		"name": "Установа №1326",
		"description": "Опис для установа номер 1326",
		"createdAt": "2024-07-01T21:00:00.000Z",
		"coords": {
			"lat": 50.6759,
			"lon": 30.4594
		},
		"category": "other"
	},
	{
		"id": "1327",
		"name": "Столова №1327",
		"description": "Опис для столова номер 1327",
		"createdAt": "2024-09-01T21:00:00.000Z",
		"coords": {
			"lat": 50.4602,
			"lon": 30.6921
		},
		"category": "food"
	},
	{
		"id": "1328",
		"name": "Парк №1328",
		"description": "Опис для парк номер 1328",
		"createdAt": "2024-07-27T21:00:00.000Z",
		"coords": {
			"lat": 50.4102,
			"lon": 30.4803
		},
		"category": "park"
	},
	{
		"id": "1329",
		"name": "Сквер №1329",
		"description": "Опис для сквер номер 1329",
		"createdAt": "2024-07-12T21:00:00.000Z",
		"coords": {
			"lat": 50.6377,
			"lon": 30.8965
		},
		"category": "park"
	},
	{
		"id": "1330",
		"name": "Кафе №1330",
		"description": "Опис для кафе номер 1330",
		"createdAt": "2024-07-14T21:00:00.000Z",
		"coords": {
			"lat": 50.357,
			"lon": 30.9119
		},
		"category": "food"
	},
	{
		"id": "1331",
		"name": "Будівля №1331",
		"description": "Опис для будівля номер 1331",
		"createdAt": "2024-04-15T21:00:00.000Z",
		"coords": {
			"lat": 50.6112,
			"lon": 30.8025
		},
		"category": "other"
	},
	{
		"id": "1332",
		"name": "Галерея №1332",
		"description": "Опис для галерея номер 1332",
		"createdAt": "2024-04-20T21:00:00.000Z",
		"coords": {
			"lat": 50.6983,
			"lon": 30.4034
		},
		"category": "museum"
	},
	{
		"id": "1333",
		"name": "Супермаркет №1333",
		"description": "Опис для супермаркет номер 1333",
		"createdAt": "2024-12-04T22:00:00.000Z",
		"coords": {
			"lat": 50.6809,
			"lon": 30.5246
		},
		"category": "shop"
	},
	{
		"id": "1334",
		"name": "Магазин №1334",
		"description": "Опис для магазин номер 1334",
		"createdAt": "2024-02-22T22:00:00.000Z",
		"coords": {
			"lat": 50.538,
			"lon": 30.2012
		},
		"category": "shop"
	},
	{
		"id": "1335",
		"name": "Виставка №1335",
		"description": "Опис для виставка номер 1335",
		"createdAt": "2024-05-16T21:00:00.000Z",
		"coords": {
			"lat": 50.4961,
			"lon": 30.2302
		},
		"category": "museum"
	},
	{
		"id": "1336",
		"name": "Виставка №1336",
		"description": "Опис для виставка номер 1336",
		"createdAt": "2024-09-09T21:00:00.000Z",
		"coords": {
			"lat": 50.472,
			"lon": 30.3325
		},
		"category": "museum"
	},
	{
		"id": "1337",
		"name": "Піцерія №1337",
		"description": "Опис для піцерія номер 1337",
		"createdAt": "2024-03-06T22:00:00.000Z",
		"coords": {
			"lat": 50.6225,
			"lon": 30.79
		},
		"category": "food"
	},
	{
		"id": "1338",
		"name": "Маркет №1338",
		"description": "Опис для маркет номер 1338",
		"createdAt": "2024-12-01T22:00:00.000Z",
		"coords": {
			"lat": 50.4015,
			"lon": 30.8004
		},
		"category": "shop"
	},
	{
		"id": "1339",
		"name": "Офіс №1339",
		"description": "Опис для офіс номер 1339",
		"createdAt": "2024-08-11T21:00:00.000Z",
		"coords": {
			"lat": 50.3043,
			"lon": 30.9824
		},
		"category": "other"
	},
	{
		"id": "1340",
		"name": "Музей №1340",
		"description": "Опис для музей номер 1340",
		"createdAt": "2024-06-26T21:00:00.000Z",
		"coords": {
			"lat": 50.4882,
			"lon": 30.9575
		},
		"category": "museum"
	},
	{
		"id": "1341",
		"name": "Маркет №1341",
		"description": "Опис для маркет номер 1341",
		"createdAt": "2024-03-10T22:00:00.000Z",
		"coords": {
			"lat": 50.4958,
			"lon": 30.9033
		},
		"category": "shop"
	},
	{
		"id": "1342",
		"name": "Кав'ярня №1342",
		"description": "Опис для кав'ярня номер 1342",
		"createdAt": "2024-05-23T21:00:00.000Z",
		"coords": {
			"lat": 50.5593,
			"lon": 30.9009
		},
		"category": "food"
	},
	{
		"id": "1343",
		"name": "Будівля №1343",
		"description": "Опис для будівля номер 1343",
		"createdAt": "2024-03-10T22:00:00.000Z",
		"coords": {
			"lat": 50.3943,
			"lon": 30.9916
		},
		"category": "other"
	},
	{
		"id": "1344",
		"name": "Виставка №1344",
		"description": "Опис для виставка номер 1344",
		"createdAt": "2024-10-19T21:00:00.000Z",
		"coords": {
			"lat": 50.3424,
			"lon": 30.4438
		},
		"category": "museum"
	},
	{
		"id": "1345",
		"name": "Кав'ярня №1345",
		"description": "Опис для кав'ярня номер 1345",
		"createdAt": "2024-04-10T21:00:00.000Z",
		"coords": {
			"lat": 50.4496,
			"lon": 30.2133
		},
		"category": "food"
	},
	{
		"id": "1346",
		"name": "Об'єкт №1346",
		"description": "Опис для об'єкт номер 1346",
		"createdAt": "2024-01-04T22:00:00.000Z",
		"coords": {
			"lat": 50.4433,
			"lon": 30.6492
		},
		"category": "other"
	},
	{
		"id": "1347",
		"name": "Центр №1347",
		"description": "Опис для центр номер 1347",
		"createdAt": "2024-09-10T21:00:00.000Z",
		"coords": {
			"lat": 50.4723,
			"lon": 30.4027
		},
		"category": "other"
	},
	{
		"id": "1348",
		"name": "Об'єкт №1348",
		"description": "Опис для об'єкт номер 1348",
		"createdAt": "2024-12-27T22:00:00.000Z",
		"coords": {
			"lat": 50.5825,
			"lon": 30.791
		},
		"category": "other"
	},
	{
		"id": "1349",
		"name": "Центр №1349",
		"description": "Опис для центр номер 1349",
		"createdAt": "2024-09-17T21:00:00.000Z",
		"coords": {
			"lat": 50.5444,
			"lon": 30.699
		},
		"category": "other"
	},
	{
		"id": "1350",
		"name": "Кафе №1350",
		"description": "Опис для кафе номер 1350",
		"createdAt": "2024-12-16T22:00:00.000Z",
		"coords": {
			"lat": 50.522,
			"lon": 30.324
		},
		"category": "food"
	},
	{
		"id": "1351",
		"name": "Офіс №1351",
		"description": "Опис для офіс номер 1351",
		"createdAt": "2024-05-14T21:00:00.000Z",
		"coords": {
			"lat": 50.6539,
			"lon": 30.6685
		},
		"category": "other"
	},
	{
		"id": "1352",
		"name": "Алея №1352",
		"description": "Опис для алея номер 1352",
		"createdAt": "2024-11-03T22:00:00.000Z",
		"coords": {
			"lat": 50.3145,
			"lon": 30.2111
		},
		"category": "park"
	},
	{
		"id": "1353",
		"name": "Маркет №1353",
		"description": "Опис для маркет номер 1353",
		"createdAt": "2024-11-27T22:00:00.000Z",
		"coords": {
			"lat": 50.4263,
			"lon": 30.6693
		},
		"category": "shop"
	},
	{
		"id": "1354",
		"name": "Сад №1354",
		"description": "Опис для сад номер 1354",
		"createdAt": "2024-06-20T21:00:00.000Z",
		"coords": {
			"lat": 50.3238,
			"lon": 30.861
		},
		"category": "park"
	},
	{
		"id": "1355",
		"name": "Виставка №1355",
		"description": "Опис для виставка номер 1355",
		"createdAt": "2024-07-14T21:00:00.000Z",
		"coords": {
			"lat": 50.6405,
			"lon": 30.4214
		},
		"category": "museum"
	},
	{
		"id": "1356",
		"name": "Установа №1356",
		"description": "Опис для установа номер 1356",
		"createdAt": "2024-11-16T22:00:00.000Z",
		"coords": {
			"lat": 50.5196,
			"lon": 30.9865
		},
		"category": "other"
	},
	{
		"id": "1357",
		"name": "Музей №1357",
		"description": "Опис для музей номер 1357",
		"createdAt": "2024-01-04T22:00:00.000Z",
		"coords": {
			"lat": 50.3925,
			"lon": 30.6616
		},
		"category": "museum"
	},
	{
		"id": "1358",
		"name": "Столова №1358",
		"description": "Опис для столова номер 1358",
		"createdAt": "2024-05-16T21:00:00.000Z",
		"coords": {
			"lat": 50.6365,
			"lon": 30.2972
		},
		"category": "food"
	},
	{
		"id": "1359",
		"name": "Центр №1359",
		"description": "Опис для центр номер 1359",
		"createdAt": "2024-10-08T21:00:00.000Z",
		"coords": {
			"lat": 50.4878,
			"lon": 30.7993
		},
		"category": "other"
	},
	{
		"id": "1360",
		"name": "Супермаркет №1360",
		"description": "Опис для супермаркет номер 1360",
		"createdAt": "2024-10-14T21:00:00.000Z",
		"coords": {
			"lat": 50.5191,
			"lon": 30.724
		},
		"category": "shop"
	},
	{
		"id": "1361",
		"name": "Виставка №1361",
		"description": "Опис для виставка номер 1361",
		"createdAt": "2024-06-10T21:00:00.000Z",
		"coords": {
			"lat": 50.3103,
			"lon": 30.4845
		},
		"category": "museum"
	},
	{
		"id": "1362",
		"name": "Виставка №1362",
		"description": "Опис для виставка номер 1362",
		"createdAt": "2024-04-07T21:00:00.000Z",
		"coords": {
			"lat": 50.6715,
			"lon": 30.7615
		},
		"category": "museum"
	},
	{
		"id": "1363",
		"name": "Центр №1363",
		"description": "Опис для центр номер 1363",
		"createdAt": "2024-07-09T21:00:00.000Z",
		"coords": {
			"lat": 50.5625,
			"lon": 30.3178
		},
		"category": "museum"
	},
	{
		"id": "1364",
		"name": "Магазин №1364",
		"description": "Опис для магазин номер 1364",
		"createdAt": "2024-01-09T22:00:00.000Z",
		"coords": {
			"lat": 50.4211,
			"lon": 30.2992
		},
		"category": "shop"
	},
	{
		"id": "1365",
		"name": "Офіс №1365",
		"description": "Опис для офіс номер 1365",
		"createdAt": "2024-10-13T21:00:00.000Z",
		"coords": {
			"lat": 50.3082,
			"lon": 30.7562
		},
		"category": "other"
	},
	{
		"id": "1366",
		"name": "Маркет №1366",
		"description": "Опис для маркет номер 1366",
		"createdAt": "2024-06-19T21:00:00.000Z",
		"coords": {
			"lat": 50.5449,
			"lon": 30.2904
		},
		"category": "shop"
	},
	{
		"id": "1367",
		"name": "Виставка №1367",
		"description": "Опис для виставка номер 1367",
		"createdAt": "2024-06-25T21:00:00.000Z",
		"coords": {
			"lat": 50.6766,
			"lon": 30.4733
		},
		"category": "museum"
	},
	{
		"id": "1368",
		"name": "Кав'ярня №1368",
		"description": "Опис для кав'ярня номер 1368",
		"createdAt": "2024-10-10T21:00:00.000Z",
		"coords": {
			"lat": 50.3555,
			"lon": 30.6117
		},
		"category": "food"
	},
	{
		"id": "1369",
		"name": "Торговий центр №1369",
		"description": "Опис для торговий центр номер 1369",
		"createdAt": "2024-09-19T21:00:00.000Z",
		"coords": {
			"lat": 50.6158,
			"lon": 30.3351
		},
		"category": "shop"
	},
	{
		"id": "1370",
		"name": "Об'єкт №1370",
		"description": "Опис для об'єкт номер 1370",
		"createdAt": "2024-09-13T21:00:00.000Z",
		"coords": {
			"lat": 50.4663,
			"lon": 30.5704
		},
		"category": "other"
	},
	{
		"id": "1371",
		"name": "Алея №1371",
		"description": "Опис для алея номер 1371",
		"createdAt": "2024-04-01T21:00:00.000Z",
		"coords": {
			"lat": 50.6262,
			"lon": 30.8348
		},
		"category": "park"
	},
	{
		"id": "1372",
		"name": "Супермаркет №1372",
		"description": "Опис для супермаркет номер 1372",
		"createdAt": "2024-07-12T21:00:00.000Z",
		"coords": {
			"lat": 50.5438,
			"lon": 30.9894
		},
		"category": "shop"
	},
	{
		"id": "1373",
		"name": "Центр №1373",
		"description": "Опис для центр номер 1373",
		"createdAt": "2024-10-09T21:00:00.000Z",
		"coords": {
			"lat": 50.4177,
			"lon": 30.3413
		},
		"category": "museum"
	},
	{
		"id": "1374",
		"name": "Суші-бар №1374",
		"description": "Опис для суші-бар номер 1374",
		"createdAt": "2024-01-11T22:00:00.000Z",
		"coords": {
			"lat": 50.64,
			"lon": 30.4509
		},
		"category": "food"
	},
	{
		"id": "1375",
		"name": "Музей №1375",
		"description": "Опис для музей номер 1375",
		"createdAt": "2024-07-14T21:00:00.000Z",
		"coords": {
			"lat": 50.3313,
			"lon": 30.7175
		},
		"category": "museum"
	},
	{
		"id": "1376",
		"name": "Центр №1376",
		"description": "Опис для центр номер 1376",
		"createdAt": "2024-01-07T22:00:00.000Z",
		"coords": {
			"lat": 50.4756,
			"lon": 30.727
		},
		"category": "museum"
	},
	{
		"id": "1377",
		"name": "Парк №1377",
		"description": "Опис для парк номер 1377",
		"createdAt": "2024-12-02T22:00:00.000Z",
		"coords": {
			"lat": 50.5271,
			"lon": 30.5427
		},
		"category": "park"
	},
	{
		"id": "1378",
		"name": "Маркет №1378",
		"description": "Опис для маркет номер 1378",
		"createdAt": "2024-08-11T21:00:00.000Z",
		"coords": {
			"lat": 50.5964,
			"lon": 30.2012
		},
		"category": "shop"
	},
	{
		"id": "1379",
		"name": "Столова №1379",
		"description": "Опис для столова номер 1379",
		"createdAt": "2024-09-09T21:00:00.000Z",
		"coords": {
			"lat": 50.4079,
			"lon": 30.9429
		},
		"category": "food"
	},
	{
		"id": "1380",
		"name": "Маркет №1380",
		"description": "Опис для маркет номер 1380",
		"createdAt": "2024-12-19T22:00:00.000Z",
		"coords": {
			"lat": 50.5234,
			"lon": 30.7883
		},
		"category": "shop"
	},
	{
		"id": "1381",
		"name": "Виставка №1381",
		"description": "Опис для виставка номер 1381",
		"createdAt": "2024-09-27T21:00:00.000Z",
		"coords": {
			"lat": 50.3783,
			"lon": 30.2099
		},
		"category": "museum"
	},
	{
		"id": "1382",
		"name": "Установа №1382",
		"description": "Опис для установа номер 1382",
		"createdAt": "2024-08-15T21:00:00.000Z",
		"coords": {
			"lat": 50.5712,
			"lon": 30.4826
		},
		"category": "other"
	},
	{
		"id": "1383",
		"name": "Торговий центр №1383",
		"description": "Опис для торговий центр номер 1383",
		"createdAt": "2024-09-27T21:00:00.000Z",
		"coords": {
			"lat": 50.4081,
			"lon": 30.5816
		},
		"category": "shop"
	},
	{
		"id": "1384",
		"name": "Кафе №1384",
		"description": "Опис для кафе номер 1384",
		"createdAt": "2024-04-07T21:00:00.000Z",
		"coords": {
			"lat": 50.5837,
			"lon": 30.5893
		},
		"category": "food"
	},
	{
		"id": "1385",
		"name": "Піцерія №1385",
		"description": "Опис для піцерія номер 1385",
		"createdAt": "2024-05-22T21:00:00.000Z",
		"coords": {
			"lat": 50.6403,
			"lon": 30.3781
		},
		"category": "food"
	},
	{
		"id": "1386",
		"name": "Бургерна №1386",
		"description": "Опис для бургерна номер 1386",
		"createdAt": "2024-05-13T21:00:00.000Z",
		"coords": {
			"lat": 50.6535,
			"lon": 30.4937
		},
		"category": "food"
	},
	{
		"id": "1387",
		"name": "Супермаркет №1387",
		"description": "Опис для супермаркет номер 1387",
		"createdAt": "2024-05-31T21:00:00.000Z",
		"coords": {
			"lat": 50.3062,
			"lon": 30.9754
		},
		"category": "shop"
	},
	{
		"id": "1388",
		"name": "Об'єкт №1388",
		"description": "Опис для об'єкт номер 1388",
		"createdAt": "2024-01-08T22:00:00.000Z",
		"coords": {
			"lat": 50.622,
			"lon": 30.2651
		},
		"category": "other"
	},
	{
		"id": "1389",
		"name": "Бутік №1389",
		"description": "Опис для бутік номер 1389",
		"createdAt": "2024-05-17T21:00:00.000Z",
		"coords": {
			"lat": 50.4062,
			"lon": 30.7716
		},
		"category": "shop"
	},
	{
		"id": "1390",
		"name": "Алея №1390",
		"description": "Опис для алея номер 1390",
		"createdAt": "2024-02-07T22:00:00.000Z",
		"coords": {
			"lat": 50.3832,
			"lon": 30.8008
		},
		"category": "park"
	},
	{
		"id": "1391",
		"name": "Кафе №1391",
		"description": "Опис для кафе номер 1391",
		"createdAt": "2024-03-07T22:00:00.000Z",
		"coords": {
			"lat": 50.5251,
			"lon": 30.2243
		},
		"category": "food"
	},
	{
		"id": "1392",
		"name": "Виставка №1392",
		"description": "Опис для виставка номер 1392",
		"createdAt": "2024-08-18T21:00:00.000Z",
		"coords": {
			"lat": 50.3433,
			"lon": 30.8823
		},
		"category": "museum"
	},
	{
		"id": "1393",
		"name": "Бургерна №1393",
		"description": "Опис для бургерна номер 1393",
		"createdAt": "2024-07-20T21:00:00.000Z",
		"coords": {
			"lat": 50.4526,
			"lon": 30.3255
		},
		"category": "food"
	},
	{
		"id": "1394",
		"name": "Бутік №1394",
		"description": "Опис для бутік номер 1394",
		"createdAt": "2024-09-08T21:00:00.000Z",
		"coords": {
			"lat": 50.3266,
			"lon": 30.6615
		},
		"category": "shop"
	},
	{
		"id": "1395",
		"name": "Роща №1395",
		"description": "Опис для роща номер 1395",
		"createdAt": "2024-07-11T21:00:00.000Z",
		"coords": {
			"lat": 50.5482,
			"lon": 30.6213
		},
		"category": "park"
	},
	{
		"id": "1396",
		"name": "Сад №1396",
		"description": "Опис для сад номер 1396",
		"createdAt": "2024-03-20T22:00:00.000Z",
		"coords": {
			"lat": 50.3663,
			"lon": 30.6077
		},
		"category": "park"
	},
	{
		"id": "1397",
		"name": "Сквер №1397",
		"description": "Опис для сквер номер 1397",
		"createdAt": "2024-09-25T21:00:00.000Z",
		"coords": {
			"lat": 50.5734,
			"lon": 30.5823
		},
		"category": "park"
	},
	{
		"id": "1398",
		"name": "Маркет №1398",
		"description": "Опис для маркет номер 1398",
		"createdAt": "2024-08-13T21:00:00.000Z",
		"coords": {
			"lat": 50.3954,
			"lon": 30.4132
		},
		"category": "shop"
	},
	{
		"id": "1399",
		"name": "Музей №1399",
		"description": "Опис для музей номер 1399",
		"createdAt": "2024-01-18T22:00:00.000Z",
		"coords": {
			"lat": 50.3139,
			"lon": 30.3083
		},
		"category": "museum"
	},
	{
		"id": "1400",
		"name": "Кафе №1400",
		"description": "Опис для кафе номер 1400",
		"createdAt": "2024-11-24T22:00:00.000Z",
		"coords": {
			"lat": 50.6994,
			"lon": 30.6851
		},
		"category": "food"
	},
	{
		"id": "1401",
		"name": "Галерея №1401",
		"description": "Опис для галерея номер 1401",
		"createdAt": "2024-08-14T21:00:00.000Z",
		"coords": {
			"lat": 50.6122,
			"lon": 30.3308
		},
		"category": "museum"
	},
	{
		"id": "1402",
		"name": "Піцерія №1402",
		"description": "Опис для піцерія номер 1402",
		"createdAt": "2024-02-21T22:00:00.000Z",
		"coords": {
			"lat": 50.6907,
			"lon": 30.7345
		},
		"category": "food"
	},
	{
		"id": "1403",
		"name": "Супермаркет №1403",
		"description": "Опис для супермаркет номер 1403",
		"createdAt": "2024-12-24T22:00:00.000Z",
		"coords": {
			"lat": 50.362,
			"lon": 30.2583
		},
		"category": "shop"
	},
	{
		"id": "1404",
		"name": "Роща №1404",
		"description": "Опис для роща номер 1404",
		"createdAt": "2024-10-31T22:00:00.000Z",
		"coords": {
			"lat": 50.3849,
			"lon": 30.3986
		},
		"category": "park"
	},
	{
		"id": "1405",
		"name": "Парк №1405",
		"description": "Опис для парк номер 1405",
		"createdAt": "2024-09-18T21:00:00.000Z",
		"coords": {
			"lat": 50.3848,
			"lon": 30.2415
		},
		"category": "park"
	},
	{
		"id": "1406",
		"name": "Центр №1406",
		"description": "Опис для центр номер 1406",
		"createdAt": "2024-10-17T21:00:00.000Z",
		"coords": {
			"lat": 50.6365,
			"lon": 30.8269
		},
		"category": "museum"
	},
	{
		"id": "1407",
		"name": "Бутік №1407",
		"description": "Опис для бутік номер 1407",
		"createdAt": "2024-11-10T22:00:00.000Z",
		"coords": {
			"lat": 50.5787,
			"lon": 30.4325
		},
		"category": "shop"
	},
	{
		"id": "1408",
		"name": "Ресторан №1408",
		"description": "Опис для ресторан номер 1408",
		"createdAt": "2024-01-07T22:00:00.000Z",
		"coords": {
			"lat": 50.4327,
			"lon": 30.4642
		},
		"category": "food"
	},
	{
		"id": "1409",
		"name": "Офіс №1409",
		"description": "Опис для офіс номер 1409",
		"createdAt": "2024-03-24T22:00:00.000Z",
		"coords": {
			"lat": 50.5996,
			"lon": 30.4436
		},
		"category": "other"
	},
	{
		"id": "1410",
		"name": "Ресторан №1410",
		"description": "Опис для ресторан номер 1410",
		"createdAt": "2024-07-11T21:00:00.000Z",
		"coords": {
			"lat": 50.3382,
			"lon": 30.3216
		},
		"category": "food"
	},
	{
		"id": "1411",
		"name": "Суші-бар №1411",
		"description": "Опис для суші-бар номер 1411",
		"createdAt": "2024-05-16T21:00:00.000Z",
		"coords": {
			"lat": 50.5461,
			"lon": 30.597
		},
		"category": "food"
	},
	{
		"id": "1412",
		"name": "Установа №1412",
		"description": "Опис для установа номер 1412",
		"createdAt": "2024-08-19T21:00:00.000Z",
		"coords": {
			"lat": 50.6866,
			"lon": 30.7152
		},
		"category": "other"
	},
	{
		"id": "1413",
		"name": "Центр №1413",
		"description": "Опис для центр номер 1413",
		"createdAt": "2024-05-12T21:00:00.000Z",
		"coords": {
			"lat": 50.3283,
			"lon": 30.6477
		},
		"category": "museum"
	},
	{
		"id": "1414",
		"name": "Установа №1414",
		"description": "Опис для установа номер 1414",
		"createdAt": "2024-09-15T21:00:00.000Z",
		"coords": {
			"lat": 50.4421,
			"lon": 30.3949
		},
		"category": "other"
	},
	{
		"id": "1415",
		"name": "Піцерія №1415",
		"description": "Опис для піцерія номер 1415",
		"createdAt": "2024-04-18T21:00:00.000Z",
		"coords": {
			"lat": 50.3301,
			"lon": 30.8351
		},
		"category": "food"
	},
	{
		"id": "1416",
		"name": "Піцерія №1416",
		"description": "Опис для піцерія номер 1416",
		"createdAt": "2024-04-06T21:00:00.000Z",
		"coords": {
			"lat": 50.4912,
			"lon": 30.7575
		},
		"category": "food"
	},
	{
		"id": "1417",
		"name": "Об'єкт №1417",
		"description": "Опис для об'єкт номер 1417",
		"createdAt": "2024-08-26T21:00:00.000Z",
		"coords": {
			"lat": 50.698,
			"lon": 30.2095
		},
		"category": "other"
	},
	{
		"id": "1418",
		"name": "Суші-бар №1418",
		"description": "Опис для суші-бар номер 1418",
		"createdAt": "2024-07-22T21:00:00.000Z",
		"coords": {
			"lat": 50.4942,
			"lon": 30.8822
		},
		"category": "food"
	},
	{
		"id": "1419",
		"name": "Маркет №1419",
		"description": "Опис для маркет номер 1419",
		"createdAt": "2024-04-06T21:00:00.000Z",
		"coords": {
			"lat": 50.3139,
			"lon": 30.5277
		},
		"category": "shop"
	},
	{
		"id": "1420",
		"name": "Роща №1420",
		"description": "Опис для роща номер 1420",
		"createdAt": "2024-06-26T21:00:00.000Z",
		"coords": {
			"lat": 50.6985,
			"lon": 30.7316
		},
		"category": "park"
	},
	{
		"id": "1421",
		"name": "Піцерія №1421",
		"description": "Опис для піцерія номер 1421",
		"createdAt": "2024-05-16T21:00:00.000Z",
		"coords": {
			"lat": 50.5086,
			"lon": 30.5652
		},
		"category": "food"
	},
	{
		"id": "1422",
		"name": "Торговий центр №1422",
		"description": "Опис для торговий центр номер 1422",
		"createdAt": "2024-04-10T21:00:00.000Z",
		"coords": {
			"lat": 50.68,
			"lon": 30.4259
		},
		"category": "shop"
	},
	{
		"id": "1423",
		"name": "Піцерія №1423",
		"description": "Опис для піцерія номер 1423",
		"createdAt": "2024-01-06T22:00:00.000Z",
		"coords": {
			"lat": 50.3241,
			"lon": 30.2261
		},
		"category": "food"
	},
	{
		"id": "1424",
		"name": "Супермаркет №1424",
		"description": "Опис для супермаркет номер 1424",
		"createdAt": "2024-06-18T21:00:00.000Z",
		"coords": {
			"lat": 50.5107,
			"lon": 30.2244
		},
		"category": "shop"
	},
	{
		"id": "1425",
		"name": "Бутік №1425",
		"description": "Опис для бутік номер 1425",
		"createdAt": "2024-07-12T21:00:00.000Z",
		"coords": {
			"lat": 50.4853,
			"lon": 30.4959
		},
		"category": "shop"
	},
	{
		"id": "1426",
		"name": "Центр №1426",
		"description": "Опис для центр номер 1426",
		"createdAt": "2024-02-08T22:00:00.000Z",
		"coords": {
			"lat": 50.3152,
			"lon": 30.4136
		},
		"category": "museum"
	},
	{
		"id": "1427",
		"name": "Маркет №1427",
		"description": "Опис для маркет номер 1427",
		"createdAt": "2024-02-11T22:00:00.000Z",
		"coords": {
			"lat": 50.3666,
			"lon": 30.391
		},
		"category": "shop"
	},
	{
		"id": "1428",
		"name": "Об'єкт №1428",
		"description": "Опис для об'єкт номер 1428",
		"createdAt": "2024-01-02T22:00:00.000Z",
		"coords": {
			"lat": 50.3585,
			"lon": 30.9604
		},
		"category": "other"
	},
	{
		"id": "1429",
		"name": "Супермаркет №1429",
		"description": "Опис для супермаркет номер 1429",
		"createdAt": "2024-12-19T22:00:00.000Z",
		"coords": {
			"lat": 50.3721,
			"lon": 30.8051
		},
		"category": "shop"
	},
	{
		"id": "1430",
		"name": "Установа №1430",
		"description": "Опис для установа номер 1430",
		"createdAt": "2024-08-31T21:00:00.000Z",
		"coords": {
			"lat": 50.6802,
			"lon": 30.2661
		},
		"category": "other"
	},
	{
		"id": "1431",
		"name": "Виставка №1431",
		"description": "Опис для виставка номер 1431",
		"createdAt": "2024-10-09T21:00:00.000Z",
		"coords": {
			"lat": 50.329,
			"lon": 30.2665
		},
		"category": "museum"
	},
	{
		"id": "1432",
		"name": "Центр №1432",
		"description": "Опис для центр номер 1432",
		"createdAt": "2024-07-08T21:00:00.000Z",
		"coords": {
			"lat": 50.6516,
			"lon": 30.889
		},
		"category": "other"
	},
	{
		"id": "1433",
		"name": "Роща №1433",
		"description": "Опис для роща номер 1433",
		"createdAt": "2024-06-25T21:00:00.000Z",
		"coords": {
			"lat": 50.3802,
			"lon": 30.7918
		},
		"category": "park"
	},
	{
		"id": "1434",
		"name": "Алея №1434",
		"description": "Опис для алея номер 1434",
		"createdAt": "2024-11-09T22:00:00.000Z",
		"coords": {
			"lat": 50.6324,
			"lon": 30.4358
		},
		"category": "park"
	},
	{
		"id": "1435",
		"name": "Галерея №1435",
		"description": "Опис для галерея номер 1435",
		"createdAt": "2024-03-03T22:00:00.000Z",
		"coords": {
			"lat": 50.3512,
			"lon": 30.9379
		},
		"category": "museum"
	},
	{
		"id": "1436",
		"name": "Супермаркет №1436",
		"description": "Опис для супермаркет номер 1436",
		"createdAt": "2024-09-10T21:00:00.000Z",
		"coords": {
			"lat": 50.5249,
			"lon": 30.8536
		},
		"category": "shop"
	},
	{
		"id": "1437",
		"name": "Торговий центр №1437",
		"description": "Опис для торговий центр номер 1437",
		"createdAt": "2024-08-20T21:00:00.000Z",
		"coords": {
			"lat": 50.6599,
			"lon": 30.7777
		},
		"category": "shop"
	},
	{
		"id": "1438",
		"name": "Торговий центр №1438",
		"description": "Опис для торговий центр номер 1438",
		"createdAt": "2024-08-20T21:00:00.000Z",
		"coords": {
			"lat": 50.4237,
			"lon": 30.2414
		},
		"category": "shop"
	},
	{
		"id": "1439",
		"name": "Кав'ярня №1439",
		"description": "Опис для кав'ярня номер 1439",
		"createdAt": "2024-10-31T22:00:00.000Z",
		"coords": {
			"lat": 50.3965,
			"lon": 30.9534
		},
		"category": "food"
	},
	{
		"id": "1440",
		"name": "Роща №1440",
		"description": "Опис для роща номер 1440",
		"createdAt": "2024-04-06T21:00:00.000Z",
		"coords": {
			"lat": 50.3565,
			"lon": 30.674
		},
		"category": "park"
	},
	{
		"id": "1441",
		"name": "Будівля №1441",
		"description": "Опис для будівля номер 1441",
		"createdAt": "2024-05-06T21:00:00.000Z",
		"coords": {
			"lat": 50.3531,
			"lon": 30.2317
		},
		"category": "other"
	},
	{
		"id": "1442",
		"name": "Торговий центр №1442",
		"description": "Опис для торговий центр номер 1442",
		"createdAt": "2024-11-26T22:00:00.000Z",
		"coords": {
			"lat": 50.4242,
			"lon": 30.9722
		},
		"category": "shop"
	},
	{
		"id": "1443",
		"name": "Супермаркет №1443",
		"description": "Опис для супермаркет номер 1443",
		"createdAt": "2024-01-31T22:00:00.000Z",
		"coords": {
			"lat": 50.5123,
			"lon": 30.7521
		},
		"category": "shop"
	},
	{
		"id": "1444",
		"name": "Об'єкт №1444",
		"description": "Опис для об'єкт номер 1444",
		"createdAt": "2024-03-04T22:00:00.000Z",
		"coords": {
			"lat": 50.3717,
			"lon": 30.3505
		},
		"category": "other"
	},
	{
		"id": "1445",
		"name": "Установа №1445",
		"description": "Опис для установа номер 1445",
		"createdAt": "2024-07-26T21:00:00.000Z",
		"coords": {
			"lat": 50.3337,
			"lon": 30.8938
		},
		"category": "other"
	},
	{
		"id": "1446",
		"name": "Торговий центр №1446",
		"description": "Опис для торговий центр номер 1446",
		"createdAt": "2024-06-06T21:00:00.000Z",
		"coords": {
			"lat": 50.3285,
			"lon": 30.4616
		},
		"category": "shop"
	},
	{
		"id": "1447",
		"name": "Магазин №1447",
		"description": "Опис для магазин номер 1447",
		"createdAt": "2023-12-31T22:00:00.000Z",
		"coords": {
			"lat": 50.6419,
			"lon": 30.667
		},
		"category": "shop"
	},
	{
		"id": "1448",
		"name": "Кав'ярня №1448",
		"description": "Опис для кав'ярня номер 1448",
		"createdAt": "2024-01-22T22:00:00.000Z",
		"coords": {
			"lat": 50.6352,
			"lon": 30.4686
		},
		"category": "food"
	},
	{
		"id": "1449",
		"name": "Музей №1449",
		"description": "Опис для музей номер 1449",
		"createdAt": "2024-02-24T22:00:00.000Z",
		"coords": {
			"lat": 50.454,
			"lon": 30.5951
		},
		"category": "museum"
	},
	{
		"id": "1450",
		"name": "Музей №1450",
		"description": "Опис для музей номер 1450",
		"createdAt": "2024-08-08T21:00:00.000Z",
		"coords": {
			"lat": 50.5468,
			"lon": 30.2798
		},
		"category": "museum"
	},
	{
		"id": "1451",
		"name": "Сад №1451",
		"description": "Опис для сад номер 1451",
		"createdAt": "2024-05-31T21:00:00.000Z",
		"coords": {
			"lat": 50.4687,
			"lon": 30.9146
		},
		"category": "park"
	},
	{
		"id": "1452",
		"name": "Сквер №1452",
		"description": "Опис для сквер номер 1452",
		"createdAt": "2024-06-18T21:00:00.000Z",
		"coords": {
			"lat": 50.6602,
			"lon": 30.806
		},
		"category": "park"
	},
	{
		"id": "1453",
		"name": "Об'єкт №1453",
		"description": "Опис для об'єкт номер 1453",
		"createdAt": "2024-01-07T22:00:00.000Z",
		"coords": {
			"lat": 50.4261,
			"lon": 30.5036
		},
		"category": "other"
	},
	{
		"id": "1454",
		"name": "Будівля №1454",
		"description": "Опис для будівля номер 1454",
		"createdAt": "2024-09-15T21:00:00.000Z",
		"coords": {
			"lat": 50.3335,
			"lon": 30.4153
		},
		"category": "other"
	},
	{
		"id": "1455",
		"name": "Супермаркет №1455",
		"description": "Опис для супермаркет номер 1455",
		"createdAt": "2024-08-03T21:00:00.000Z",
		"coords": {
			"lat": 50.6472,
			"lon": 30.2277
		},
		"category": "shop"
	},
	{
		"id": "1456",
		"name": "Алея №1456",
		"description": "Опис для алея номер 1456",
		"createdAt": "2024-04-15T21:00:00.000Z",
		"coords": {
			"lat": 50.4443,
			"lon": 30.7509
		},
		"category": "park"
	},
	{
		"id": "1457",
		"name": "Столова №1457",
		"description": "Опис для столова номер 1457",
		"createdAt": "2024-06-23T21:00:00.000Z",
		"coords": {
			"lat": 50.5523,
			"lon": 30.7126
		},
		"category": "food"
	},
	{
		"id": "1458",
		"name": "Сквер №1458",
		"description": "Опис для сквер номер 1458",
		"createdAt": "2024-10-25T21:00:00.000Z",
		"coords": {
			"lat": 50.6931,
			"lon": 30.849
		},
		"category": "park"
	},
	{
		"id": "1459",
		"name": "Столова №1459",
		"description": "Опис для столова номер 1459",
		"createdAt": "2024-03-05T22:00:00.000Z",
		"coords": {
			"lat": 50.3504,
			"lon": 30.683
		},
		"category": "food"
	},
	{
		"id": "1460",
		"name": "Парк №1460",
		"description": "Опис для парк номер 1460",
		"createdAt": "2024-05-04T21:00:00.000Z",
		"coords": {
			"lat": 50.4208,
			"lon": 30.2399
		},
		"category": "park"
	},
	{
		"id": "1461",
		"name": "Центр №1461",
		"description": "Опис для центр номер 1461",
		"createdAt": "2024-08-08T21:00:00.000Z",
		"coords": {
			"lat": 50.4844,
			"lon": 30.9012
		},
		"category": "museum"
	},
	{
		"id": "1462",
		"name": "Галерея №1462",
		"description": "Опис для галерея номер 1462",
		"createdAt": "2024-12-11T22:00:00.000Z",
		"coords": {
			"lat": 50.523,
			"lon": 30.2763
		},
		"category": "museum"
	},
	{
		"id": "1463",
		"name": "Центр №1463",
		"description": "Опис для центр номер 1463",
		"createdAt": "2024-02-13T22:00:00.000Z",
		"coords": {
			"lat": 50.3569,
			"lon": 30.4157
		},
		"category": "museum"
	},
	{
		"id": "1464",
		"name": "Торговий центр №1464",
		"description": "Опис для торговий центр номер 1464",
		"createdAt": "2024-12-14T22:00:00.000Z",
		"coords": {
			"lat": 50.5066,
			"lon": 30.7486
		},
		"category": "shop"
	},
	{
		"id": "1465",
		"name": "Будівля №1465",
		"description": "Опис для будівля номер 1465",
		"createdAt": "2024-06-05T21:00:00.000Z",
		"coords": {
			"lat": 50.5294,
			"lon": 30.2719
		},
		"category": "other"
	},
	{
		"id": "1466",
		"name": "Маркет №1466",
		"description": "Опис для маркет номер 1466",
		"createdAt": "2024-05-05T21:00:00.000Z",
		"coords": {
			"lat": 50.3373,
			"lon": 30.658
		},
		"category": "shop"
	},
	{
		"id": "1467",
		"name": "Об'єкт №1467",
		"description": "Опис для об'єкт номер 1467",
		"createdAt": "2024-02-19T22:00:00.000Z",
		"coords": {
			"lat": 50.3515,
			"lon": 30.7768
		},
		"category": "other"
	},
	{
		"id": "1468",
		"name": "Маркет №1468",
		"description": "Опис для маркет номер 1468",
		"createdAt": "2024-10-11T21:00:00.000Z",
		"coords": {
			"lat": 50.3693,
			"lon": 30.8788
		},
		"category": "shop"
	},
	{
		"id": "1469",
		"name": "Маркет №1469",
		"description": "Опис для маркет номер 1469",
		"createdAt": "2024-07-14T21:00:00.000Z",
		"coords": {
			"lat": 50.6262,
			"lon": 30.5867
		},
		"category": "shop"
	},
	{
		"id": "1470",
		"name": "Парк №1470",
		"description": "Опис для парк номер 1470",
		"createdAt": "2024-04-15T21:00:00.000Z",
		"coords": {
			"lat": 50.692,
			"lon": 30.9258
		},
		"category": "park"
	},
	{
		"id": "1471",
		"name": "Магазин №1471",
		"description": "Опис для магазин номер 1471",
		"createdAt": "2024-08-13T21:00:00.000Z",
		"coords": {
			"lat": 50.4113,
			"lon": 30.8307
		},
		"category": "shop"
	},
	{
		"id": "1472",
		"name": "Музей №1472",
		"description": "Опис для музей номер 1472",
		"createdAt": "2024-01-04T22:00:00.000Z",
		"coords": {
			"lat": 50.4855,
			"lon": 30.3345
		},
		"category": "museum"
	},
	{
		"id": "1473",
		"name": "Алея №1473",
		"description": "Опис для алея номер 1473",
		"createdAt": "2024-07-17T21:00:00.000Z",
		"coords": {
			"lat": 50.3504,
			"lon": 30.988
		},
		"category": "park"
	},
	{
		"id": "1474",
		"name": "Галерея №1474",
		"description": "Опис для галерея номер 1474",
		"createdAt": "2024-03-06T22:00:00.000Z",
		"coords": {
			"lat": 50.6266,
			"lon": 30.5022
		},
		"category": "museum"
	},
	{
		"id": "1475",
		"name": "Магазин №1475",
		"description": "Опис для магазин номер 1475",
		"createdAt": "2024-04-09T21:00:00.000Z",
		"coords": {
			"lat": 50.4791,
			"lon": 30.7521
		},
		"category": "shop"
	},
	{
		"id": "1476",
		"name": "Кафе №1476",
		"description": "Опис для кафе номер 1476",
		"createdAt": "2024-12-06T22:00:00.000Z",
		"coords": {
			"lat": 50.3787,
			"lon": 30.9798
		},
		"category": "food"
	},
	{
		"id": "1477",
		"name": "Парк №1477",
		"description": "Опис для парк номер 1477",
		"createdAt": "2024-01-04T22:00:00.000Z",
		"coords": {
			"lat": 50.4892,
			"lon": 30.9097
		},
		"category": "park"
	},
	{
		"id": "1478",
		"name": "Маркет №1478",
		"description": "Опис для маркет номер 1478",
		"createdAt": "2024-06-01T21:00:00.000Z",
		"coords": {
			"lat": 50.6694,
			"lon": 30.6325
		},
		"category": "shop"
	},
	{
		"id": "1479",
		"name": "Столова №1479",
		"description": "Опис для столова номер 1479",
		"createdAt": "2024-03-08T22:00:00.000Z",
		"coords": {
			"lat": 50.345,
			"lon": 30.6579
		},
		"category": "food"
	},
	{
		"id": "1480",
		"name": "Супермаркет №1480",
		"description": "Опис для супермаркет номер 1480",
		"createdAt": "2024-09-02T21:00:00.000Z",
		"coords": {
			"lat": 50.444,
			"lon": 30.3066
		},
		"category": "shop"
	},
	{
		"id": "1481",
		"name": "Об'єкт №1481",
		"description": "Опис для об'єкт номер 1481",
		"createdAt": "2024-01-05T22:00:00.000Z",
		"coords": {
			"lat": 50.6839,
			"lon": 30.307
		},
		"category": "other"
	},
	{
		"id": "1482",
		"name": "Центр №1482",
		"description": "Опис для центр номер 1482",
		"createdAt": "2024-09-25T21:00:00.000Z",
		"coords": {
			"lat": 50.3643,
			"lon": 30.2534
		},
		"category": "other"
	},
	{
		"id": "1483",
		"name": "Алея №1483",
		"description": "Опис для алея номер 1483",
		"createdAt": "2024-06-16T21:00:00.000Z",
		"coords": {
			"lat": 50.6113,
			"lon": 30.288
		},
		"category": "park"
	},
	{
		"id": "1484",
		"name": "Сад №1484",
		"description": "Опис для сад номер 1484",
		"createdAt": "2024-02-19T22:00:00.000Z",
		"coords": {
			"lat": 50.6566,
			"lon": 30.5078
		},
		"category": "park"
	},
	{
		"id": "1485",
		"name": "Магазин №1485",
		"description": "Опис для магазин номер 1485",
		"createdAt": "2024-11-03T22:00:00.000Z",
		"coords": {
			"lat": 50.333,
			"lon": 30.6824
		},
		"category": "shop"
	},
	{
		"id": "1486",
		"name": "Центр №1486",
		"description": "Опис для центр номер 1486",
		"createdAt": "2024-01-06T22:00:00.000Z",
		"coords": {
			"lat": 50.5808,
			"lon": 30.3752
		},
		"category": "other"
	},
	{
		"id": "1487",
		"name": "Установа №1487",
		"description": "Опис для установа номер 1487",
		"createdAt": "2024-03-24T22:00:00.000Z",
		"coords": {
			"lat": 50.5381,
			"lon": 30.6077
		},
		"category": "other"
	},
	{
		"id": "1488",
		"name": "Магазин №1488",
		"description": "Опис для магазин номер 1488",
		"createdAt": "2024-10-09T21:00:00.000Z",
		"coords": {
			"lat": 50.3234,
			"lon": 30.5333
		},
		"category": "shop"
	},
	{
		"id": "1489",
		"name": "Виставка №1489",
		"description": "Опис для виставка номер 1489",
		"createdAt": "2024-06-26T21:00:00.000Z",
		"coords": {
			"lat": 50.4499,
			"lon": 30.3975
		},
		"category": "museum"
	},
	{
		"id": "1490",
		"name": "Галерея №1490",
		"description": "Опис для галерея номер 1490",
		"createdAt": "2024-05-08T21:00:00.000Z",
		"coords": {
			"lat": 50.5619,
			"lon": 30.6568
		},
		"category": "museum"
	},
	{
		"id": "1491",
		"name": "Бутік №1491",
		"description": "Опис для бутік номер 1491",
		"createdAt": "2024-05-08T21:00:00.000Z",
		"coords": {
			"lat": 50.6131,
			"lon": 30.73
		},
		"category": "shop"
	},
	{
		"id": "1492",
		"name": "Сквер №1492",
		"description": "Опис для сквер номер 1492",
		"createdAt": "2024-10-04T21:00:00.000Z",
		"coords": {
			"lat": 50.3215,
			"lon": 30.2048
		},
		"category": "park"
	},
	{
		"id": "1493",
		"name": "Алея №1493",
		"description": "Опис для алея номер 1493",
		"createdAt": "2024-01-06T22:00:00.000Z",
		"coords": {
			"lat": 50.3274,
			"lon": 30.6454
		},
		"category": "park"
	},
	{
		"id": "1494",
		"name": "Центр №1494",
		"description": "Опис для центр номер 1494",
		"createdAt": "2024-05-06T21:00:00.000Z",
		"coords": {
			"lat": 50.4456,
			"lon": 30.6885
		},
		"category": "other"
	},
	{
		"id": "1495",
		"name": "Суші-бар №1495",
		"description": "Опис для суші-бар номер 1495",
		"createdAt": "2024-12-10T22:00:00.000Z",
		"coords": {
			"lat": 50.3042,
			"lon": 30.5953
		},
		"category": "food"
	},
	{
		"id": "1496",
		"name": "Столова №1496",
		"description": "Опис для столова номер 1496",
		"createdAt": "2024-06-08T21:00:00.000Z",
		"coords": {
			"lat": 50.5372,
			"lon": 30.8795
		},
		"category": "food"
	},
	{
		"id": "1497",
		"name": "Будівля №1497",
		"description": "Опис для будівля номер 1497",
		"createdAt": "2024-06-27T21:00:00.000Z",
		"coords": {
			"lat": 50.4934,
			"lon": 30.6231
		},
		"category": "other"
	},
	{
		"id": "1498",
		"name": "Музей №1498",
		"description": "Опис для музей номер 1498",
		"createdAt": "2024-11-17T22:00:00.000Z",
		"coords": {
			"lat": 50.6872,
			"lon": 30.9944
		},
		"category": "museum"
	},
	{
		"id": "1499",
		"name": "Кав'ярня №1499",
		"description": "Опис для кав'ярня номер 1499",
		"createdAt": "2024-01-31T22:00:00.000Z",
		"coords": {
			"lat": 50.3178,
			"lon": 30.3959
		},
		"category": "food"
	},
	{
		"id": "1500",
		"name": "Бургерна №1500",
		"description": "Опис для бургерна номер 1500",
		"createdAt": "2024-05-14T21:00:00.000Z",
		"coords": {
			"lat": 50.3844,
			"lon": 30.408
		},
		"category": "food"
	},
	{
		"id": "1501",
		"name": "Будівля №1501",
		"description": "Опис для будівля номер 1501",
		"createdAt": "2024-08-15T21:00:00.000Z",
		"coords": {
			"lat": 50.3392,
			"lon": 30.9853
		},
		"category": "other"
	},
	{
		"id": "1502",
		"name": "Магазин №1502",
		"description": "Опис для магазин номер 1502",
		"createdAt": "2024-03-18T22:00:00.000Z",
		"coords": {
			"lat": 50.4253,
			"lon": 30.2174
		},
		"category": "shop"
	},
	{
		"id": "1503",
		"name": "Супермаркет №1503",
		"description": "Опис для супермаркет номер 1503",
		"createdAt": "2024-07-24T21:00:00.000Z",
		"coords": {
			"lat": 50.5748,
			"lon": 30.8423
		},
		"category": "shop"
	},
	{
		"id": "1504",
		"name": "Роща №1504",
		"description": "Опис для роща номер 1504",
		"createdAt": "2024-03-18T22:00:00.000Z",
		"coords": {
			"lat": 50.3185,
			"lon": 30.6211
		},
		"category": "park"
	},
	{
		"id": "1505",
		"name": "Торговий центр №1505",
		"description": "Опис для торговий центр номер 1505",
		"createdAt": "2024-04-21T21:00:00.000Z",
		"coords": {
			"lat": 50.4171,
			"lon": 30.8976
		},
		"category": "shop"
	},
	{
		"id": "1506",
		"name": "Маркет №1506",
		"description": "Опис для маркет номер 1506",
		"createdAt": "2024-08-09T21:00:00.000Z",
		"coords": {
			"lat": 50.4707,
			"lon": 30.9645
		},
		"category": "shop"
	},
	{
		"id": "1507",
		"name": "Кав'ярня №1507",
		"description": "Опис для кав'ярня номер 1507",
		"createdAt": "2024-05-13T21:00:00.000Z",
		"coords": {
			"lat": 50.4039,
			"lon": 30.5199
		},
		"category": "food"
	},
	{
		"id": "1508",
		"name": "Установа №1508",
		"description": "Опис для установа номер 1508",
		"createdAt": "2024-06-24T21:00:00.000Z",
		"coords": {
			"lat": 50.4118,
			"lon": 30.7228
		},
		"category": "other"
	},
	{
		"id": "1509",
		"name": "Виставка №1509",
		"description": "Опис для виставка номер 1509",
		"createdAt": "2024-06-13T21:00:00.000Z",
		"coords": {
			"lat": 50.5045,
			"lon": 30.4766
		},
		"category": "museum"
	},
	{
		"id": "1510",
		"name": "Маркет №1510",
		"description": "Опис для маркет номер 1510",
		"createdAt": "2024-10-14T21:00:00.000Z",
		"coords": {
			"lat": 50.6173,
			"lon": 30.9332
		},
		"category": "shop"
	},
	{
		"id": "1511",
		"name": "Об'єкт №1511",
		"description": "Опис для об'єкт номер 1511",
		"createdAt": "2024-02-18T22:00:00.000Z",
		"coords": {
			"lat": 50.3745,
			"lon": 30.6189
		},
		"category": "other"
	},
	{
		"id": "1512",
		"name": "Галерея №1512",
		"description": "Опис для галерея номер 1512",
		"createdAt": "2024-04-04T21:00:00.000Z",
		"coords": {
			"lat": 50.3789,
			"lon": 30.74
		},
		"category": "museum"
	},
	{
		"id": "1513",
		"name": "Супермаркет №1513",
		"description": "Опис для супермаркет номер 1513",
		"createdAt": "2024-01-16T22:00:00.000Z",
		"coords": {
			"lat": 50.573,
			"lon": 30.5593
		},
		"category": "shop"
	},
	{
		"id": "1514",
		"name": "Офіс №1514",
		"description": "Опис для офіс номер 1514",
		"createdAt": "2024-01-17T22:00:00.000Z",
		"coords": {
			"lat": 50.5159,
			"lon": 30.6176
		},
		"category": "other"
	},
	{
		"id": "1515",
		"name": "Сквер №1515",
		"description": "Опис для сквер номер 1515",
		"createdAt": "2024-09-20T21:00:00.000Z",
		"coords": {
			"lat": 50.5633,
			"lon": 30.5224
		},
		"category": "park"
	},
	{
		"id": "1516",
		"name": "Об'єкт №1516",
		"description": "Опис для об'єкт номер 1516",
		"createdAt": "2024-02-15T22:00:00.000Z",
		"coords": {
			"lat": 50.4356,
			"lon": 30.969
		},
		"category": "other"
	},
	{
		"id": "1517",
		"name": "Роща №1517",
		"description": "Опис для роща номер 1517",
		"createdAt": "2024-10-04T21:00:00.000Z",
		"coords": {
			"lat": 50.4889,
			"lon": 30.5487
		},
		"category": "park"
	},
	{
		"id": "1518",
		"name": "Торговий центр №1518",
		"description": "Опис для торговий центр номер 1518",
		"createdAt": "2024-01-12T22:00:00.000Z",
		"coords": {
			"lat": 50.3896,
			"lon": 30.3562
		},
		"category": "shop"
	},
	{
		"id": "1519",
		"name": "Бургерна №1519",
		"description": "Опис для бургерна номер 1519",
		"createdAt": "2024-12-23T22:00:00.000Z",
		"coords": {
			"lat": 50.3923,
			"lon": 30.6326
		},
		"category": "food"
	},
	{
		"id": "1520",
		"name": "Об'єкт №1520",
		"description": "Опис для об'єкт номер 1520",
		"createdAt": "2024-11-26T22:00:00.000Z",
		"coords": {
			"lat": 50.5658,
			"lon": 30.9631
		},
		"category": "other"
	},
	{
		"id": "1521",
		"name": "Виставка №1521",
		"description": "Опис для виставка номер 1521",
		"createdAt": "2024-06-03T21:00:00.000Z",
		"coords": {
			"lat": 50.5448,
			"lon": 30.4071
		},
		"category": "museum"
	},
	{
		"id": "1522",
		"name": "Музей №1522",
		"description": "Опис для музей номер 1522",
		"createdAt": "2024-05-15T21:00:00.000Z",
		"coords": {
			"lat": 50.4789,
			"lon": 30.6488
		},
		"category": "museum"
	},
	{
		"id": "1523",
		"name": "Маркет №1523",
		"description": "Опис для маркет номер 1523",
		"createdAt": "2024-08-19T21:00:00.000Z",
		"coords": {
			"lat": 50.6051,
			"lon": 30.5371
		},
		"category": "shop"
	},
	{
		"id": "1524",
		"name": "Центр №1524",
		"description": "Опис для центр номер 1524",
		"createdAt": "2024-06-18T21:00:00.000Z",
		"coords": {
			"lat": 50.6859,
			"lon": 30.6893
		},
		"category": "museum"
	},
	{
		"id": "1525",
		"name": "Суші-бар №1525",
		"description": "Опис для суші-бар номер 1525",
		"createdAt": "2024-05-18T21:00:00.000Z",
		"coords": {
			"lat": 50.6857,
			"lon": 30.3352
		},
		"category": "food"
	},
	{
		"id": "1526",
		"name": "Установа №1526",
		"description": "Опис для установа номер 1526",
		"createdAt": "2024-01-10T22:00:00.000Z",
		"coords": {
			"lat": 50.6571,
			"lon": 30.6948
		},
		"category": "other"
	},
	{
		"id": "1527",
		"name": "Виставка №1527",
		"description": "Опис для виставка номер 1527",
		"createdAt": "2024-10-25T21:00:00.000Z",
		"coords": {
			"lat": 50.4947,
			"lon": 30.6487
		},
		"category": "museum"
	},
	{
		"id": "1528",
		"name": "Маркет №1528",
		"description": "Опис для маркет номер 1528",
		"createdAt": "2024-11-06T22:00:00.000Z",
		"coords": {
			"lat": 50.564,
			"lon": 30.8548
		},
		"category": "shop"
	},
	{
		"id": "1529",
		"name": "Установа №1529",
		"description": "Опис для установа номер 1529",
		"createdAt": "2024-10-26T21:00:00.000Z",
		"coords": {
			"lat": 50.5299,
			"lon": 30.7941
		},
		"category": "other"
	},
	{
		"id": "1530",
		"name": "Бургерна №1530",
		"description": "Опис для бургерна номер 1530",
		"createdAt": "2024-10-17T21:00:00.000Z",
		"coords": {
			"lat": 50.4055,
			"lon": 30.3877
		},
		"category": "food"
	},
	{
		"id": "1531",
		"name": "Центр №1531",
		"description": "Опис для центр номер 1531",
		"createdAt": "2024-09-22T21:00:00.000Z",
		"coords": {
			"lat": 50.6155,
			"lon": 30.4383
		},
		"category": "museum"
	},
	{
		"id": "1532",
		"name": "Алея №1532",
		"description": "Опис для алея номер 1532",
		"createdAt": "2024-03-05T22:00:00.000Z",
		"coords": {
			"lat": 50.4387,
			"lon": 30.5078
		},
		"category": "park"
	},
	{
		"id": "1533",
		"name": "Офіс №1533",
		"description": "Опис для офіс номер 1533",
		"createdAt": "2024-04-17T21:00:00.000Z",
		"coords": {
			"lat": 50.5528,
			"lon": 30.5619
		},
		"category": "other"
	},
	{
		"id": "1534",
		"name": "Офіс №1534",
		"description": "Опис для офіс номер 1534",
		"createdAt": "2024-07-16T21:00:00.000Z",
		"coords": {
			"lat": 50.427,
			"lon": 30.5103
		},
		"category": "other"
	},
	{
		"id": "1535",
		"name": "Установа №1535",
		"description": "Опис для установа номер 1535",
		"createdAt": "2024-06-21T21:00:00.000Z",
		"coords": {
			"lat": 50.6672,
			"lon": 30.682
		},
		"category": "other"
	},
	{
		"id": "1536",
		"name": "Магазин №1536",
		"description": "Опис для магазин номер 1536",
		"createdAt": "2024-09-22T21:00:00.000Z",
		"coords": {
			"lat": 50.4126,
			"lon": 30.3511
		},
		"category": "shop"
	},
	{
		"id": "1537",
		"name": "Кав'ярня №1537",
		"description": "Опис для кав'ярня номер 1537",
		"createdAt": "2024-12-18T22:00:00.000Z",
		"coords": {
			"lat": 50.5524,
			"lon": 30.9435
		},
		"category": "food"
	},
	{
		"id": "1538",
		"name": "Центр №1538",
		"description": "Опис для центр номер 1538",
		"createdAt": "2024-11-11T22:00:00.000Z",
		"coords": {
			"lat": 50.4943,
			"lon": 30.472
		},
		"category": "museum"
	},
	{
		"id": "1539",
		"name": "Сад №1539",
		"description": "Опис для сад номер 1539",
		"createdAt": "2024-12-26T22:00:00.000Z",
		"coords": {
			"lat": 50.6186,
			"lon": 30.2388
		},
		"category": "park"
	},
	{
		"id": "1540",
		"name": "Суші-бар №1540",
		"description": "Опис для суші-бар номер 1540",
		"createdAt": "2024-07-15T21:00:00.000Z",
		"coords": {
			"lat": 50.6191,
			"lon": 30.8914
		},
		"category": "food"
	},
	{
		"id": "1541",
		"name": "Роща №1541",
		"description": "Опис для роща номер 1541",
		"createdAt": "2024-08-08T21:00:00.000Z",
		"coords": {
			"lat": 50.3673,
			"lon": 30.4112
		},
		"category": "park"
	},
	{
		"id": "1542",
		"name": "Сад №1542",
		"description": "Опис для сад номер 1542",
		"createdAt": "2024-09-08T21:00:00.000Z",
		"coords": {
			"lat": 50.3327,
			"lon": 30.9431
		},
		"category": "park"
	},
	{
		"id": "1543",
		"name": "Суші-бар №1543",
		"description": "Опис для суші-бар номер 1543",
		"createdAt": "2024-05-26T21:00:00.000Z",
		"coords": {
			"lat": 50.58,
			"lon": 30.2887
		},
		"category": "food"
	},
	{
		"id": "1544",
		"name": "Сквер №1544",
		"description": "Опис для сквер номер 1544",
		"createdAt": "2024-06-17T21:00:00.000Z",
		"coords": {
			"lat": 50.3691,
			"lon": 30.7292
		},
		"category": "park"
	},
	{
		"id": "1545",
		"name": "Супермаркет №1545",
		"description": "Опис для супермаркет номер 1545",
		"createdAt": "2024-11-14T22:00:00.000Z",
		"coords": {
			"lat": 50.5984,
			"lon": 30.672
		},
		"category": "shop"
	},
	{
		"id": "1546",
		"name": "Піцерія №1546",
		"description": "Опис для піцерія номер 1546",
		"createdAt": "2024-05-18T21:00:00.000Z",
		"coords": {
			"lat": 50.547,
			"lon": 30.7873
		},
		"category": "food"
	},
	{
		"id": "1547",
		"name": "Виставка №1547",
		"description": "Опис для виставка номер 1547",
		"createdAt": "2024-01-07T22:00:00.000Z",
		"coords": {
			"lat": 50.4711,
			"lon": 30.9557
		},
		"category": "museum"
	},
	{
		"id": "1548",
		"name": "Галерея №1548",
		"description": "Опис для галерея номер 1548",
		"createdAt": "2024-10-05T21:00:00.000Z",
		"coords": {
			"lat": 50.4059,
			"lon": 30.9172
		},
		"category": "museum"
	},
	{
		"id": "1549",
		"name": "Кав'ярня №1549",
		"description": "Опис для кав'ярня номер 1549",
		"createdAt": "2024-07-06T21:00:00.000Z",
		"coords": {
			"lat": 50.3217,
			"lon": 30.9524
		},
		"category": "food"
	},
	{
		"id": "1550",
		"name": "Маркет №1550",
		"description": "Опис для маркет номер 1550",
		"createdAt": "2024-04-09T21:00:00.000Z",
		"coords": {
			"lat": 50.662,
			"lon": 30.4917
		},
		"category": "shop"
	},
	{
		"id": "1551",
		"name": "Будівля №1551",
		"description": "Опис для будівля номер 1551",
		"createdAt": "2024-07-03T21:00:00.000Z",
		"coords": {
			"lat": 50.336,
			"lon": 30.2698
		},
		"category": "other"
	},
	{
		"id": "1552",
		"name": "Центр №1552",
		"description": "Опис для центр номер 1552",
		"createdAt": "2024-08-04T21:00:00.000Z",
		"coords": {
			"lat": 50.4134,
			"lon": 30.2812
		},
		"category": "museum"
	},
	{
		"id": "1553",
		"name": "Музей №1553",
		"description": "Опис для музей номер 1553",
		"createdAt": "2024-04-10T21:00:00.000Z",
		"coords": {
			"lat": 50.4736,
			"lon": 30.785
		},
		"category": "museum"
	},
	{
		"id": "1554",
		"name": "Супермаркет №1554",
		"description": "Опис для супермаркет номер 1554",
		"createdAt": "2024-01-26T22:00:00.000Z",
		"coords": {
			"lat": 50.3963,
			"lon": 30.2296
		},
		"category": "shop"
	},
	{
		"id": "1555",
		"name": "Галерея №1555",
		"description": "Опис для галерея номер 1555",
		"createdAt": "2024-04-10T21:00:00.000Z",
		"coords": {
			"lat": 50.5228,
			"lon": 30.8434
		},
		"category": "museum"
	},
	{
		"id": "1556",
		"name": "Кав'ярня №1556",
		"description": "Опис для кав'ярня номер 1556",
		"createdAt": "2024-04-22T21:00:00.000Z",
		"coords": {
			"lat": 50.4177,
			"lon": 30.9997
		},
		"category": "food"
	},
	{
		"id": "1557",
		"name": "Магазин №1557",
		"description": "Опис для магазин номер 1557",
		"createdAt": "2024-05-31T21:00:00.000Z",
		"coords": {
			"lat": 50.4737,
			"lon": 30.9978
		},
		"category": "shop"
	},
	{
		"id": "1558",
		"name": "Виставка №1558",
		"description": "Опис для виставка номер 1558",
		"createdAt": "2024-09-05T21:00:00.000Z",
		"coords": {
			"lat": 50.6388,
			"lon": 30.4189
		},
		"category": "museum"
	},
	{
		"id": "1559",
		"name": "Установа №1559",
		"description": "Опис для установа номер 1559",
		"createdAt": "2024-05-18T21:00:00.000Z",
		"coords": {
			"lat": 50.5845,
			"lon": 30.5718
		},
		"category": "other"
	},
	{
		"id": "1560",
		"name": "Супермаркет №1560",
		"description": "Опис для супермаркет номер 1560",
		"createdAt": "2024-09-08T21:00:00.000Z",
		"coords": {
			"lat": 50.5628,
			"lon": 30.2465
		},
		"category": "shop"
	},
	{
		"id": "1561",
		"name": "Бутік №1561",
		"description": "Опис для бутік номер 1561",
		"createdAt": "2024-02-06T22:00:00.000Z",
		"coords": {
			"lat": 50.5712,
			"lon": 30.8587
		},
		"category": "shop"
	},
	{
		"id": "1562",
		"name": "Супермаркет №1562",
		"description": "Опис для супермаркет номер 1562",
		"createdAt": "2024-11-16T22:00:00.000Z",
		"coords": {
			"lat": 50.4385,
			"lon": 30.8135
		},
		"category": "shop"
	},
	{
		"id": "1563",
		"name": "Будівля №1563",
		"description": "Опис для будівля номер 1563",
		"createdAt": "2024-06-18T21:00:00.000Z",
		"coords": {
			"lat": 50.3898,
			"lon": 30.3738
		},
		"category": "other"
	},
	{
		"id": "1564",
		"name": "Виставка №1564",
		"description": "Опис для виставка номер 1564",
		"createdAt": "2024-12-01T22:00:00.000Z",
		"coords": {
			"lat": 50.6036,
			"lon": 30.7165
		},
		"category": "museum"
	},
	{
		"id": "1565",
		"name": "Маркет №1565",
		"description": "Опис для маркет номер 1565",
		"createdAt": "2024-05-01T21:00:00.000Z",
		"coords": {
			"lat": 50.4801,
			"lon": 30.5459
		},
		"category": "shop"
	},
	{
		"id": "1566",
		"name": "Магазин №1566",
		"description": "Опис для магазин номер 1566",
		"createdAt": "2024-12-08T22:00:00.000Z",
		"coords": {
			"lat": 50.4793,
			"lon": 30.4503
		},
		"category": "shop"
	},
	{
		"id": "1567",
		"name": "Парк №1567",
		"description": "Опис для парк номер 1567",
		"createdAt": "2024-07-02T21:00:00.000Z",
		"coords": {
			"lat": 50.5375,
			"lon": 30.358
		},
		"category": "park"
	},
	{
		"id": "1568",
		"name": "Супермаркет №1568",
		"description": "Опис для супермаркет номер 1568",
		"createdAt": "2024-06-24T21:00:00.000Z",
		"coords": {
			"lat": 50.5635,
			"lon": 30.5858
		},
		"category": "shop"
	},
	{
		"id": "1569",
		"name": "Центр №1569",
		"description": "Опис для центр номер 1569",
		"createdAt": "2024-06-20T21:00:00.000Z",
		"coords": {
			"lat": 50.332,
			"lon": 30.8175
		},
		"category": "museum"
	},
	{
		"id": "1570",
		"name": "Парк №1570",
		"description": "Опис для парк номер 1570",
		"createdAt": "2024-04-30T21:00:00.000Z",
		"coords": {
			"lat": 50.3068,
			"lon": 30.2497
		},
		"category": "park"
	},
	{
		"id": "1571",
		"name": "Супермаркет №1571",
		"description": "Опис для супермаркет номер 1571",
		"createdAt": "2024-04-11T21:00:00.000Z",
		"coords": {
			"lat": 50.3204,
			"lon": 30.2436
		},
		"category": "shop"
	},
	{
		"id": "1572",
		"name": "Виставка №1572",
		"description": "Опис для виставка номер 1572",
		"createdAt": "2024-06-03T21:00:00.000Z",
		"coords": {
			"lat": 50.3889,
			"lon": 30.6243
		},
		"category": "museum"
	},
	{
		"id": "1573",
		"name": "Центр №1573",
		"description": "Опис для центр номер 1573",
		"createdAt": "2024-01-02T22:00:00.000Z",
		"coords": {
			"lat": 50.4569,
			"lon": 30.6553
		},
		"category": "museum"
	},
	{
		"id": "1574",
		"name": "Об'єкт №1574",
		"description": "Опис для об'єкт номер 1574",
		"createdAt": "2024-02-14T22:00:00.000Z",
		"coords": {
			"lat": 50.3767,
			"lon": 30.6545
		},
		"category": "other"
	},
	{
		"id": "1575",
		"name": "Парк №1575",
		"description": "Опис для парк номер 1575",
		"createdAt": "2024-10-12T21:00:00.000Z",
		"coords": {
			"lat": 50.4466,
			"lon": 30.7679
		},
		"category": "park"
	},
	{
		"id": "1576",
		"name": "Центр №1576",
		"description": "Опис для центр номер 1576",
		"createdAt": "2024-03-16T22:00:00.000Z",
		"coords": {
			"lat": 50.5385,
			"lon": 30.3963
		},
		"category": "other"
	},
	{
		"id": "1577",
		"name": "Піцерія №1577",
		"description": "Опис для піцерія номер 1577",
		"createdAt": "2024-11-20T22:00:00.000Z",
		"coords": {
			"lat": 50.3416,
			"lon": 30.4808
		},
		"category": "food"
	},
	{
		"id": "1578",
		"name": "Роща №1578",
		"description": "Опис для роща номер 1578",
		"createdAt": "2024-07-23T21:00:00.000Z",
		"coords": {
			"lat": 50.6462,
			"lon": 30.9554
		},
		"category": "park"
	},
	{
		"id": "1579",
		"name": "Будівля №1579",
		"description": "Опис для будівля номер 1579",
		"createdAt": "2024-07-22T21:00:00.000Z",
		"coords": {
			"lat": 50.518,
			"lon": 30.6943
		},
		"category": "other"
	},
	{
		"id": "1580",
		"name": "Центр №1580",
		"description": "Опис для центр номер 1580",
		"createdAt": "2024-04-15T21:00:00.000Z",
		"coords": {
			"lat": 50.3782,
			"lon": 30.3146
		},
		"category": "museum"
	},
	{
		"id": "1581",
		"name": "Будівля №1581",
		"description": "Опис для будівля номер 1581",
		"createdAt": "2024-09-16T21:00:00.000Z",
		"coords": {
			"lat": 50.5798,
			"lon": 30.9423
		},
		"category": "other"
	},
	{
		"id": "1582",
		"name": "Супермаркет №1582",
		"description": "Опис для супермаркет номер 1582",
		"createdAt": "2024-03-09T22:00:00.000Z",
		"coords": {
			"lat": 50.6928,
			"lon": 30.6356
		},
		"category": "shop"
	},
	{
		"id": "1583",
		"name": "Столова №1583",
		"description": "Опис для столова номер 1583",
		"createdAt": "2024-01-26T22:00:00.000Z",
		"coords": {
			"lat": 50.6273,
			"lon": 30.9599
		},
		"category": "food"
	},
	{
		"id": "1584",
		"name": "Супермаркет №1584",
		"description": "Опис для супермаркет номер 1584",
		"createdAt": "2024-08-12T21:00:00.000Z",
		"coords": {
			"lat": 50.6388,
			"lon": 30.7813
		},
		"category": "shop"
	},
	{
		"id": "1585",
		"name": "Виставка №1585",
		"description": "Опис для виставка номер 1585",
		"createdAt": "2024-04-05T21:00:00.000Z",
		"coords": {
			"lat": 50.6658,
			"lon": 30.8602
		},
		"category": "museum"
	},
	{
		"id": "1586",
		"name": "Роща №1586",
		"description": "Опис для роща номер 1586",
		"createdAt": "2024-09-05T21:00:00.000Z",
		"coords": {
			"lat": 50.3584,
			"lon": 30.7823
		},
		"category": "park"
	},
	{
		"id": "1587",
		"name": "Будівля №1587",
		"description": "Опис для будівля номер 1587",
		"createdAt": "2024-01-17T22:00:00.000Z",
		"coords": {
			"lat": 50.6198,
			"lon": 30.4965
		},
		"category": "other"
	},
	{
		"id": "1588",
		"name": "Супермаркет №1588",
		"description": "Опис для супермаркет номер 1588",
		"createdAt": "2024-09-07T21:00:00.000Z",
		"coords": {
			"lat": 50.4597,
			"lon": 30.5579
		},
		"category": "shop"
	},
	{
		"id": "1589",
		"name": "Музей №1589",
		"description": "Опис для музей номер 1589",
		"createdAt": "2024-05-14T21:00:00.000Z",
		"coords": {
			"lat": 50.4406,
			"lon": 30.2355
		},
		"category": "museum"
	},
	{
		"id": "1590",
		"name": "Бутік №1590",
		"description": "Опис для бутік номер 1590",
		"createdAt": "2024-01-07T22:00:00.000Z",
		"coords": {
			"lat": 50.6175,
			"lon": 30.8279
		},
		"category": "shop"
	},
	{
		"id": "1591",
		"name": "Роща №1591",
		"description": "Опис для роща номер 1591",
		"createdAt": "2024-10-13T21:00:00.000Z",
		"coords": {
			"lat": 50.659,
			"lon": 30.2366
		},
		"category": "park"
	},
	{
		"id": "1592",
		"name": "Суші-бар №1592",
		"description": "Опис для суші-бар номер 1592",
		"createdAt": "2024-10-08T21:00:00.000Z",
		"coords": {
			"lat": 50.6109,
			"lon": 30.9638
		},
		"category": "food"
	},
	{
		"id": "1593",
		"name": "Будівля №1593",
		"description": "Опис для будівля номер 1593",
		"createdAt": "2024-02-11T22:00:00.000Z",
		"coords": {
			"lat": 50.4411,
			"lon": 30.5281
		},
		"category": "other"
	},
	{
		"id": "1594",
		"name": "Парк №1594",
		"description": "Опис для парк номер 1594",
		"createdAt": "2024-05-27T21:00:00.000Z",
		"coords": {
			"lat": 50.316,
			"lon": 30.2017
		},
		"category": "park"
	},
	{
		"id": "1595",
		"name": "Кафе №1595",
		"description": "Опис для кафе номер 1595",
		"createdAt": "2024-12-23T22:00:00.000Z",
		"coords": {
			"lat": 50.349,
			"lon": 30.4705
		},
		"category": "food"
	},
	{
		"id": "1596",
		"name": "Роща №1596",
		"description": "Опис для роща номер 1596",
		"createdAt": "2024-06-13T21:00:00.000Z",
		"coords": {
			"lat": 50.4271,
			"lon": 30.457
		},
		"category": "park"
	},
	{
		"id": "1597",
		"name": "Ресторан №1597",
		"description": "Опис для ресторан номер 1597",
		"createdAt": "2024-03-15T22:00:00.000Z",
		"coords": {
			"lat": 50.3592,
			"lon": 30.9562
		},
		"category": "food"
	},
	{
		"id": "1598",
		"name": "Виставка №1598",
		"description": "Опис для виставка номер 1598",
		"createdAt": "2024-12-17T22:00:00.000Z",
		"coords": {
			"lat": 50.3701,
			"lon": 30.47
		},
		"category": "museum"
	},
	{
		"id": "1599",
		"name": "Установа №1599",
		"description": "Опис для установа номер 1599",
		"createdAt": "2024-06-10T21:00:00.000Z",
		"coords": {
			"lat": 50.6345,
			"lon": 30.8317
		},
		"category": "other"
	},
	{
		"id": "1600",
		"name": "Маркет №1600",
		"description": "Опис для маркет номер 1600",
		"createdAt": "2024-07-05T21:00:00.000Z",
		"coords": {
			"lat": 50.4692,
			"lon": 30.5033
		},
		"category": "shop"
	},
	{
		"id": "1601",
		"name": "Бургерна №1601",
		"description": "Опис для бургерна номер 1601",
		"createdAt": "2024-12-19T22:00:00.000Z",
		"coords": {
			"lat": 50.5123,
			"lon": 30.3084
		},
		"category": "food"
	},
	{
		"id": "1602",
		"name": "Сквер №1602",
		"description": "Опис для сквер номер 1602",
		"createdAt": "2024-04-15T21:00:00.000Z",
		"coords": {
			"lat": 50.4904,
			"lon": 30.8821
		},
		"category": "park"
	},
	{
		"id": "1603",
		"name": "Установа №1603",
		"description": "Опис для установа номер 1603",
		"createdAt": "2024-10-16T21:00:00.000Z",
		"coords": {
			"lat": 50.638,
			"lon": 30.5827
		},
		"category": "other"
	},
	{
		"id": "1604",
		"name": "Виставка №1604",
		"description": "Опис для виставка номер 1604",
		"createdAt": "2024-08-11T21:00:00.000Z",
		"coords": {
			"lat": 50.4461,
			"lon": 30.877
		},
		"category": "museum"
	},
	{
		"id": "1605",
		"name": "Магазин №1605",
		"description": "Опис для магазин номер 1605",
		"createdAt": "2024-10-18T21:00:00.000Z",
		"coords": {
			"lat": 50.6858,
			"lon": 30.4264
		},
		"category": "shop"
	},
	{
		"id": "1606",
		"name": "Установа №1606",
		"description": "Опис для установа номер 1606",
		"createdAt": "2024-12-19T22:00:00.000Z",
		"coords": {
			"lat": 50.3624,
			"lon": 30.6015
		},
		"category": "other"
	},
	{
		"id": "1607",
		"name": "Піцерія №1607",
		"description": "Опис для піцерія номер 1607",
		"createdAt": "2024-11-07T22:00:00.000Z",
		"coords": {
			"lat": 50.6779,
			"lon": 30.668
		},
		"category": "food"
	},
	{
		"id": "1608",
		"name": "Маркет №1608",
		"description": "Опис для маркет номер 1608",
		"createdAt": "2024-08-08T21:00:00.000Z",
		"coords": {
			"lat": 50.5708,
			"lon": 30.5406
		},
		"category": "shop"
	},
	{
		"id": "1609",
		"name": "Центр №1609",
		"description": "Опис для центр номер 1609",
		"createdAt": "2024-03-17T22:00:00.000Z",
		"coords": {
			"lat": 50.5918,
			"lon": 30.691
		},
		"category": "other"
	},
	{
		"id": "1610",
		"name": "Центр №1610",
		"description": "Опис для центр номер 1610",
		"createdAt": "2024-08-09T21:00:00.000Z",
		"coords": {
			"lat": 50.4053,
			"lon": 30.9134
		},
		"category": "other"
	},
	{
		"id": "1611",
		"name": "Роща №1611",
		"description": "Опис для роща номер 1611",
		"createdAt": "2024-01-20T22:00:00.000Z",
		"coords": {
			"lat": 50.4793,
			"lon": 30.5251
		},
		"category": "park"
	},
	{
		"id": "1612",
		"name": "Магазин №1612",
		"description": "Опис для магазин номер 1612",
		"createdAt": "2024-04-08T21:00:00.000Z",
		"coords": {
			"lat": 50.5123,
			"lon": 30.3054
		},
		"category": "shop"
	},
	{
		"id": "1613",
		"name": "Магазин №1613",
		"description": "Опис для магазин номер 1613",
		"createdAt": "2024-06-09T21:00:00.000Z",
		"coords": {
			"lat": 50.5121,
			"lon": 30.9076
		},
		"category": "shop"
	},
	{
		"id": "1614",
		"name": "Парк №1614",
		"description": "Опис для парк номер 1614",
		"createdAt": "2024-04-08T21:00:00.000Z",
		"coords": {
			"lat": 50.3691,
			"lon": 30.4801
		},
		"category": "park"
	},
	{
		"id": "1615",
		"name": "Парк №1615",
		"description": "Опис для парк номер 1615",
		"createdAt": "2024-11-12T22:00:00.000Z",
		"coords": {
			"lat": 50.4164,
			"lon": 30.3668
		},
		"category": "park"
	},
	{
		"id": "1616",
		"name": "Центр №1616",
		"description": "Опис для центр номер 1616",
		"createdAt": "2024-11-22T22:00:00.000Z",
		"coords": {
			"lat": 50.4774,
			"lon": 30.9245
		},
		"category": "museum"
	},
	{
		"id": "1617",
		"name": "Виставка №1617",
		"description": "Опис для виставка номер 1617",
		"createdAt": "2024-12-13T22:00:00.000Z",
		"coords": {
			"lat": 50.3255,
			"lon": 30.2581
		},
		"category": "museum"
	},
	{
		"id": "1618",
		"name": "Піцерія №1618",
		"description": "Опис для піцерія номер 1618",
		"createdAt": "2024-05-24T21:00:00.000Z",
		"coords": {
			"lat": 50.6346,
			"lon": 30.8594
		},
		"category": "food"
	},
	{
		"id": "1619",
		"name": "Супермаркет №1619",
		"description": "Опис для супермаркет номер 1619",
		"createdAt": "2024-08-21T21:00:00.000Z",
		"coords": {
			"lat": 50.4527,
			"lon": 30.2397
		},
		"category": "shop"
	},
	{
		"id": "1620",
		"name": "Галерея №1620",
		"description": "Опис для галерея номер 1620",
		"createdAt": "2024-06-04T21:00:00.000Z",
		"coords": {
			"lat": 50.6177,
			"lon": 30.7667
		},
		"category": "museum"
	},
	{
		"id": "1621",
		"name": "Музей №1621",
		"description": "Опис для музей номер 1621",
		"createdAt": "2024-11-30T22:00:00.000Z",
		"coords": {
			"lat": 50.3198,
			"lon": 30.9698
		},
		"category": "museum"
	},
	{
		"id": "1622",
		"name": "Музей №1622",
		"description": "Опис для музей номер 1622",
		"createdAt": "2024-01-20T22:00:00.000Z",
		"coords": {
			"lat": 50.5038,
			"lon": 30.6253
		},
		"category": "museum"
	},
	{
		"id": "1623",
		"name": "Будівля №1623",
		"description": "Опис для будівля номер 1623",
		"createdAt": "2024-07-02T21:00:00.000Z",
		"coords": {
			"lat": 50.6991,
			"lon": 30.6865
		},
		"category": "other"
	},
	{
		"id": "1624",
		"name": "Виставка №1624",
		"description": "Опис для виставка номер 1624",
		"createdAt": "2024-02-03T22:00:00.000Z",
		"coords": {
			"lat": 50.5407,
			"lon": 30.3348
		},
		"category": "museum"
	},
	{
		"id": "1625",
		"name": "Центр №1625",
		"description": "Опис для центр номер 1625",
		"createdAt": "2024-09-15T21:00:00.000Z",
		"coords": {
			"lat": 50.3967,
			"lon": 30.6773
		},
		"category": "museum"
	},
	{
		"id": "1626",
		"name": "Магазин №1626",
		"description": "Опис для магазин номер 1626",
		"createdAt": "2024-03-31T21:00:00.000Z",
		"coords": {
			"lat": 50.6512,
			"lon": 30.2933
		},
		"category": "shop"
	},
	{
		"id": "1627",
		"name": "Будівля №1627",
		"description": "Опис для будівля номер 1627",
		"createdAt": "2024-07-02T21:00:00.000Z",
		"coords": {
			"lat": 50.3114,
			"lon": 30.7272
		},
		"category": "other"
	},
	{
		"id": "1628",
		"name": "Музей №1628",
		"description": "Опис для музей номер 1628",
		"createdAt": "2024-09-15T21:00:00.000Z",
		"coords": {
			"lat": 50.6539,
			"lon": 30.8621
		},
		"category": "museum"
	},
	{
		"id": "1629",
		"name": "Галерея №1629",
		"description": "Опис для галерея номер 1629",
		"createdAt": "2024-01-25T22:00:00.000Z",
		"coords": {
			"lat": 50.6055,
			"lon": 30.4253
		},
		"category": "museum"
	},
	{
		"id": "1630",
		"name": "Торговий центр №1630",
		"description": "Опис для торговий центр номер 1630",
		"createdAt": "2024-09-03T21:00:00.000Z",
		"coords": {
			"lat": 50.6879,
			"lon": 30.6064
		},
		"category": "shop"
	},
	{
		"id": "1631",
		"name": "Алея №1631",
		"description": "Опис для алея номер 1631",
		"createdAt": "2024-08-17T21:00:00.000Z",
		"coords": {
			"lat": 50.407,
			"lon": 30.5805
		},
		"category": "park"
	},
	{
		"id": "1632",
		"name": "Сквер №1632",
		"description": "Опис для сквер номер 1632",
		"createdAt": "2024-05-26T21:00:00.000Z",
		"coords": {
			"lat": 50.6356,
			"lon": 30.7364
		},
		"category": "park"
	},
	{
		"id": "1633",
		"name": "Супермаркет №1633",
		"description": "Опис для супермаркет номер 1633",
		"createdAt": "2024-12-14T22:00:00.000Z",
		"coords": {
			"lat": 50.3381,
			"lon": 30.9421
		},
		"category": "shop"
	},
	{
		"id": "1634",
		"name": "Бутік №1634",
		"description": "Опис для бутік номер 1634",
		"createdAt": "2024-04-16T21:00:00.000Z",
		"coords": {
			"lat": 50.5068,
			"lon": 30.7203
		},
		"category": "shop"
	},
	{
		"id": "1635",
		"name": "Бургерна №1635",
		"description": "Опис для бургерна номер 1635",
		"createdAt": "2024-04-06T21:00:00.000Z",
		"coords": {
			"lat": 50.6154,
			"lon": 30.5433
		},
		"category": "food"
	},
	{
		"id": "1636",
		"name": "Кафе №1636",
		"description": "Опис для кафе номер 1636",
		"createdAt": "2024-04-19T21:00:00.000Z",
		"coords": {
			"lat": 50.6743,
			"lon": 30.7828
		},
		"category": "food"
	},
	{
		"id": "1637",
		"name": "Сквер №1637",
		"description": "Опис для сквер номер 1637",
		"createdAt": "2024-01-26T22:00:00.000Z",
		"coords": {
			"lat": 50.562,
			"lon": 30.6409
		},
		"category": "park"
	},
	{
		"id": "1638",
		"name": "Галерея №1638",
		"description": "Опис для галерея номер 1638",
		"createdAt": "2024-10-31T22:00:00.000Z",
		"coords": {
			"lat": 50.4678,
			"lon": 30.6738
		},
		"category": "museum"
	},
	{
		"id": "1639",
		"name": "Галерея №1639",
		"description": "Опис для галерея номер 1639",
		"createdAt": "2024-08-23T21:00:00.000Z",
		"coords": {
			"lat": 50.3142,
			"lon": 30.356
		},
		"category": "museum"
	},
	{
		"id": "1640",
		"name": "Алея №1640",
		"description": "Опис для алея номер 1640",
		"createdAt": "2024-05-08T21:00:00.000Z",
		"coords": {
			"lat": 50.4149,
			"lon": 30.99
		},
		"category": "park"
	},
	{
		"id": "1641",
		"name": "Столова №1641",
		"description": "Опис для столова номер 1641",
		"createdAt": "2024-06-22T21:00:00.000Z",
		"coords": {
			"lat": 50.5762,
			"lon": 30.9634
		},
		"category": "food"
	},
	{
		"id": "1642",
		"name": "Магазин №1642",
		"description": "Опис для магазин номер 1642",
		"createdAt": "2024-02-25T22:00:00.000Z",
		"coords": {
			"lat": 50.3821,
			"lon": 30.2579
		},
		"category": "shop"
	},
	{
		"id": "1643",
		"name": "Парк №1643",
		"description": "Опис для парк номер 1643",
		"createdAt": "2024-08-06T21:00:00.000Z",
		"coords": {
			"lat": 50.6002,
			"lon": 30.5924
		},
		"category": "park"
	},
	{
		"id": "1644",
		"name": "Музей №1644",
		"description": "Опис для музей номер 1644",
		"createdAt": "2024-07-10T21:00:00.000Z",
		"coords": {
			"lat": 50.5597,
			"lon": 30.7268
		},
		"category": "museum"
	},
	{
		"id": "1645",
		"name": "Сквер №1645",
		"description": "Опис для сквер номер 1645",
		"createdAt": "2024-08-09T21:00:00.000Z",
		"coords": {
			"lat": 50.5454,
			"lon": 30.5412
		},
		"category": "park"
	},
	{
		"id": "1646",
		"name": "Виставка №1646",
		"description": "Опис для виставка номер 1646",
		"createdAt": "2024-02-29T22:00:00.000Z",
		"coords": {
			"lat": 50.4981,
			"lon": 30.4804
		},
		"category": "museum"
	},
	{
		"id": "1647",
		"name": "Офіс №1647",
		"description": "Опис для офіс номер 1647",
		"createdAt": "2024-11-04T22:00:00.000Z",
		"coords": {
			"lat": 50.545,
			"lon": 30.236
		},
		"category": "other"
	},
	{
		"id": "1648",
		"name": "Офіс №1648",
		"description": "Опис для офіс номер 1648",
		"createdAt": "2024-10-19T21:00:00.000Z",
		"coords": {
			"lat": 50.336,
			"lon": 30.4165
		},
		"category": "other"
	},
	{
		"id": "1649",
		"name": "Будівля №1649",
		"description": "Опис для будівля номер 1649",
		"createdAt": "2024-12-12T22:00:00.000Z",
		"coords": {
			"lat": 50.3749,
			"lon": 30.5695
		},
		"category": "other"
	},
	{
		"id": "1650",
		"name": "Парк №1650",
		"description": "Опис для парк номер 1650",
		"createdAt": "2024-04-24T21:00:00.000Z",
		"coords": {
			"lat": 50.3246,
			"lon": 30.66
		},
		"category": "park"
	},
	{
		"id": "1651",
		"name": "Роща №1651",
		"description": "Опис для роща номер 1651",
		"createdAt": "2024-04-05T21:00:00.000Z",
		"coords": {
			"lat": 50.6534,
			"lon": 30.7133
		},
		"category": "park"
	},
	{
		"id": "1652",
		"name": "Центр №1652",
		"description": "Опис для центр номер 1652",
		"createdAt": "2024-02-15T22:00:00.000Z",
		"coords": {
			"lat": 50.379,
			"lon": 30.5868
		},
		"category": "other"
	},
	{
		"id": "1653",
		"name": "Ресторан №1653",
		"description": "Опис для ресторан номер 1653",
		"createdAt": "2024-09-14T21:00:00.000Z",
		"coords": {
			"lat": 50.362,
			"lon": 30.254
		},
		"category": "food"
	},
	{
		"id": "1654",
		"name": "Музей №1654",
		"description": "Опис для музей номер 1654",
		"createdAt": "2024-07-24T21:00:00.000Z",
		"coords": {
			"lat": 50.5274,
			"lon": 30.2493
		},
		"category": "museum"
	},
	{
		"id": "1655",
		"name": "Установа №1655",
		"description": "Опис для установа номер 1655",
		"createdAt": "2024-02-04T22:00:00.000Z",
		"coords": {
			"lat": 50.5921,
			"lon": 30.3199
		},
		"category": "other"
	},
	{
		"id": "1656",
		"name": "Бургерна №1656",
		"description": "Опис для бургерна номер 1656",
		"createdAt": "2024-12-27T22:00:00.000Z",
		"coords": {
			"lat": 50.5608,
			"lon": 30.5951
		},
		"category": "food"
	},
	{
		"id": "1657",
		"name": "Кафе №1657",
		"description": "Опис для кафе номер 1657",
		"createdAt": "2024-04-02T21:00:00.000Z",
		"coords": {
			"lat": 50.417,
			"lon": 30.4623
		},
		"category": "food"
	},
	{
		"id": "1658",
		"name": "Музей №1658",
		"description": "Опис для музей номер 1658",
		"createdAt": "2024-04-30T21:00:00.000Z",
		"coords": {
			"lat": 50.4354,
			"lon": 30.5814
		},
		"category": "museum"
	},
	{
		"id": "1659",
		"name": "Сквер №1659",
		"description": "Опис для сквер номер 1659",
		"createdAt": "2024-08-20T21:00:00.000Z",
		"coords": {
			"lat": 50.6791,
			"lon": 30.5258
		},
		"category": "park"
	},
	{
		"id": "1660",
		"name": "Установа №1660",
		"description": "Опис для установа номер 1660",
		"createdAt": "2024-04-21T21:00:00.000Z",
		"coords": {
			"lat": 50.6202,
			"lon": 30.5294
		},
		"category": "other"
	},
	{
		"id": "1661",
		"name": "Установа №1661",
		"description": "Опис для установа номер 1661",
		"createdAt": "2024-10-12T21:00:00.000Z",
		"coords": {
			"lat": 50.5746,
			"lon": 30.5132
		},
		"category": "other"
	},
	{
		"id": "1662",
		"name": "Галерея №1662",
		"description": "Опис для галерея номер 1662",
		"createdAt": "2024-08-06T21:00:00.000Z",
		"coords": {
			"lat": 50.688,
			"lon": 30.6665
		},
		"category": "museum"
	},
	{
		"id": "1663",
		"name": "Галерея №1663",
		"description": "Опис для галерея номер 1663",
		"createdAt": "2024-09-27T21:00:00.000Z",
		"coords": {
			"lat": 50.5359,
			"lon": 30.9754
		},
		"category": "museum"
	},
	{
		"id": "1664",
		"name": "Бутік №1664",
		"description": "Опис для бутік номер 1664",
		"createdAt": "2024-09-12T21:00:00.000Z",
		"coords": {
			"lat": 50.5498,
			"lon": 30.6302
		},
		"category": "shop"
	},
	{
		"id": "1665",
		"name": "Офіс №1665",
		"description": "Опис для офіс номер 1665",
		"createdAt": "2024-05-08T21:00:00.000Z",
		"coords": {
			"lat": 50.6895,
			"lon": 30.7356
		},
		"category": "other"
	},
	{
		"id": "1666",
		"name": "Суші-бар №1666",
		"description": "Опис для суші-бар номер 1666",
		"createdAt": "2024-09-22T21:00:00.000Z",
		"coords": {
			"lat": 50.6881,
			"lon": 30.7993
		},
		"category": "food"
	},
	{
		"id": "1667",
		"name": "Бутік №1667",
		"description": "Опис для бутік номер 1667",
		"createdAt": "2024-02-12T22:00:00.000Z",
		"coords": {
			"lat": 50.5973,
			"lon": 30.9876
		},
		"category": "shop"
	},
	{
		"id": "1668",
		"name": "Алея №1668",
		"description": "Опис для алея номер 1668",
		"createdAt": "2024-09-02T21:00:00.000Z",
		"coords": {
			"lat": 50.3902,
			"lon": 30.9304
		},
		"category": "park"
	},
	{
		"id": "1669",
		"name": "Алея №1669",
		"description": "Опис для алея номер 1669",
		"createdAt": "2024-08-23T21:00:00.000Z",
		"coords": {
			"lat": 50.6124,
			"lon": 30.7714
		},
		"category": "park"
	},
	{
		"id": "1670",
		"name": "Будівля №1670",
		"description": "Опис для будівля номер 1670",
		"createdAt": "2024-05-11T21:00:00.000Z",
		"coords": {
			"lat": 50.3728,
			"lon": 30.6562
		},
		"category": "other"
	},
	{
		"id": "1671",
		"name": "Суші-бар №1671",
		"description": "Опис для суші-бар номер 1671",
		"createdAt": "2024-09-03T21:00:00.000Z",
		"coords": {
			"lat": 50.5442,
			"lon": 30.9305
		},
		"category": "food"
	},
	{
		"id": "1672",
		"name": "Сквер №1672",
		"description": "Опис для сквер номер 1672",
		"createdAt": "2024-06-05T21:00:00.000Z",
		"coords": {
			"lat": 50.4073,
			"lon": 30.897
		},
		"category": "park"
	},
	{
		"id": "1673",
		"name": "Виставка №1673",
		"description": "Опис для виставка номер 1673",
		"createdAt": "2024-08-16T21:00:00.000Z",
		"coords": {
			"lat": 50.3047,
			"lon": 30.7795
		},
		"category": "museum"
	},
	{
		"id": "1674",
		"name": "Офіс №1674",
		"description": "Опис для офіс номер 1674",
		"createdAt": "2024-05-01T21:00:00.000Z",
		"coords": {
			"lat": 50.6198,
			"lon": 30.7741
		},
		"category": "other"
	},
	{
		"id": "1675",
		"name": "Кав'ярня №1675",
		"description": "Опис для кав'ярня номер 1675",
		"createdAt": "2023-12-31T22:00:00.000Z",
		"coords": {
			"lat": 50.6708,
			"lon": 30.4159
		},
		"category": "food"
	},
	{
		"id": "1676",
		"name": "Маркет №1676",
		"description": "Опис для маркет номер 1676",
		"createdAt": "2024-08-31T21:00:00.000Z",
		"coords": {
			"lat": 50.6331,
			"lon": 30.5914
		},
		"category": "shop"
	},
	{
		"id": "1677",
		"name": "Супермаркет №1677",
		"description": "Опис для супермаркет номер 1677",
		"createdAt": "2024-08-03T21:00:00.000Z",
		"coords": {
			"lat": 50.4636,
			"lon": 30.4853
		},
		"category": "shop"
	},
	{
		"id": "1678",
		"name": "Центр №1678",
		"description": "Опис для центр номер 1678",
		"createdAt": "2024-06-24T21:00:00.000Z",
		"coords": {
			"lat": 50.3522,
			"lon": 30.2509
		},
		"category": "other"
	},
	{
		"id": "1679",
		"name": "Об'єкт №1679",
		"description": "Опис для об'єкт номер 1679",
		"createdAt": "2024-06-06T21:00:00.000Z",
		"coords": {
			"lat": 50.5008,
			"lon": 30.4715
		},
		"category": "other"
	},
	{
		"id": "1680",
		"name": "Виставка №1680",
		"description": "Опис для виставка номер 1680",
		"createdAt": "2024-05-20T21:00:00.000Z",
		"coords": {
			"lat": 50.512,
			"lon": 30.2745
		},
		"category": "museum"
	},
	{
		"id": "1681",
		"name": "Сквер №1681",
		"description": "Опис для сквер номер 1681",
		"createdAt": "2024-12-21T22:00:00.000Z",
		"coords": {
			"lat": 50.3079,
			"lon": 30.2191
		},
		"category": "park"
	},
	{
		"id": "1682",
		"name": "Будівля №1682",
		"description": "Опис для будівля номер 1682",
		"createdAt": "2024-12-01T22:00:00.000Z",
		"coords": {
			"lat": 50.5716,
			"lon": 30.8056
		},
		"category": "other"
	},
	{
		"id": "1683",
		"name": "Кафе №1683",
		"description": "Опис для кафе номер 1683",
		"createdAt": "2024-04-07T21:00:00.000Z",
		"coords": {
			"lat": 50.589,
			"lon": 30.9531
		},
		"category": "food"
	},
	{
		"id": "1684",
		"name": "Роща №1684",
		"description": "Опис для роща номер 1684",
		"createdAt": "2024-09-23T21:00:00.000Z",
		"coords": {
			"lat": 50.5511,
			"lon": 30.3019
		},
		"category": "park"
	},
	{
		"id": "1685",
		"name": "Бутік №1685",
		"description": "Опис для бутік номер 1685",
		"createdAt": "2024-06-24T21:00:00.000Z",
		"coords": {
			"lat": 50.3788,
			"lon": 30.6743
		},
		"category": "shop"
	},
	{
		"id": "1686",
		"name": "Ресторан №1686",
		"description": "Опис для ресторан номер 1686",
		"createdAt": "2024-12-06T22:00:00.000Z",
		"coords": {
			"lat": 50.4768,
			"lon": 30.3737
		},
		"category": "food"
	},
	{
		"id": "1687",
		"name": "Будівля №1687",
		"description": "Опис для будівля номер 1687",
		"createdAt": "2024-05-04T21:00:00.000Z",
		"coords": {
			"lat": 50.5934,
			"lon": 30.5361
		},
		"category": "other"
	},
	{
		"id": "1688",
		"name": "Центр №1688",
		"description": "Опис для центр номер 1688",
		"createdAt": "2024-06-27T21:00:00.000Z",
		"coords": {
			"lat": 50.3621,
			"lon": 30.2783
		},
		"category": "other"
	},
	{
		"id": "1689",
		"name": "Виставка №1689",
		"description": "Опис для виставка номер 1689",
		"createdAt": "2024-06-01T21:00:00.000Z",
		"coords": {
			"lat": 50.3926,
			"lon": 30.475
		},
		"category": "museum"
	},
	{
		"id": "1690",
		"name": "Об'єкт №1690",
		"description": "Опис для об'єкт номер 1690",
		"createdAt": "2024-12-07T22:00:00.000Z",
		"coords": {
			"lat": 50.3768,
			"lon": 30.6941
		},
		"category": "other"
	},
	{
		"id": "1691",
		"name": "Бургерна №1691",
		"description": "Опис для бургерна номер 1691",
		"createdAt": "2024-06-26T21:00:00.000Z",
		"coords": {
			"lat": 50.674,
			"lon": 30.5121
		},
		"category": "food"
	},
	{
		"id": "1692",
		"name": "Офіс №1692",
		"description": "Опис для офіс номер 1692",
		"createdAt": "2024-09-15T21:00:00.000Z",
		"coords": {
			"lat": 50.4288,
			"lon": 30.4938
		},
		"category": "other"
	},
	{
		"id": "1693",
		"name": "Сквер №1693",
		"description": "Опис для сквер номер 1693",
		"createdAt": "2024-01-26T22:00:00.000Z",
		"coords": {
			"lat": 50.6621,
			"lon": 30.9283
		},
		"category": "park"
	},
	{
		"id": "1694",
		"name": "Роща №1694",
		"description": "Опис для роща номер 1694",
		"createdAt": "2024-03-05T22:00:00.000Z",
		"coords": {
			"lat": 50.5141,
			"lon": 30.3018
		},
		"category": "park"
	},
	{
		"id": "1695",
		"name": "Кав'ярня №1695",
		"description": "Опис для кав'ярня номер 1695",
		"createdAt": "2024-06-12T21:00:00.000Z",
		"coords": {
			"lat": 50.5254,
			"lon": 30.8939
		},
		"category": "food"
	},
	{
		"id": "1696",
		"name": "Центр №1696",
		"description": "Опис для центр номер 1696",
		"createdAt": "2024-10-20T21:00:00.000Z",
		"coords": {
			"lat": 50.4456,
			"lon": 30.9842
		},
		"category": "other"
	},
	{
		"id": "1697",
		"name": "Роща №1697",
		"description": "Опис для роща номер 1697",
		"createdAt": "2024-09-21T21:00:00.000Z",
		"coords": {
			"lat": 50.6822,
			"lon": 30.3981
		},
		"category": "park"
	},
	{
		"id": "1698",
		"name": "Роща №1698",
		"description": "Опис для роща номер 1698",
		"createdAt": "2024-10-01T21:00:00.000Z",
		"coords": {
			"lat": 50.3495,
			"lon": 30.5197
		},
		"category": "park"
	},
	{
		"id": "1699",
		"name": "Парк №1699",
		"description": "Опис для парк номер 1699",
		"createdAt": "2024-03-23T22:00:00.000Z",
		"coords": {
			"lat": 50.5623,
			"lon": 30.5097
		},
		"category": "park"
	},
	{
		"id": "1700",
		"name": "Офіс №1700",
		"description": "Опис для офіс номер 1700",
		"createdAt": "2024-09-06T21:00:00.000Z",
		"coords": {
			"lat": 50.6229,
			"lon": 30.6214
		},
		"category": "other"
	},
	{
		"id": "1701",
		"name": "Офіс №1701",
		"description": "Опис для офіс номер 1701",
		"createdAt": "2024-04-17T21:00:00.000Z",
		"coords": {
			"lat": 50.4432,
			"lon": 30.7455
		},
		"category": "other"
	},
	{
		"id": "1702",
		"name": "Маркет №1702",
		"description": "Опис для маркет номер 1702",
		"createdAt": "2024-10-08T21:00:00.000Z",
		"coords": {
			"lat": 50.5984,
			"lon": 30.2392
		},
		"category": "shop"
	},
	{
		"id": "1703",
		"name": "Маркет №1703",
		"description": "Опис для маркет номер 1703",
		"createdAt": "2024-03-08T22:00:00.000Z",
		"coords": {
			"lat": 50.4359,
			"lon": 30.7351
		},
		"category": "shop"
	},
	{
		"id": "1704",
		"name": "Центр №1704",
		"description": "Опис для центр номер 1704",
		"createdAt": "2024-04-05T21:00:00.000Z",
		"coords": {
			"lat": 50.3245,
			"lon": 30.9334
		},
		"category": "museum"
	},
	{
		"id": "1705",
		"name": "Об'єкт №1705",
		"description": "Опис для об'єкт номер 1705",
		"createdAt": "2024-09-19T21:00:00.000Z",
		"coords": {
			"lat": 50.3301,
			"lon": 30.8618
		},
		"category": "other"
	},
	{
		"id": "1706",
		"name": "Кав'ярня №1706",
		"description": "Опис для кав'ярня номер 1706",
		"createdAt": "2024-04-24T21:00:00.000Z",
		"coords": {
			"lat": 50.626,
			"lon": 30.6418
		},
		"category": "food"
	},
	{
		"id": "1707",
		"name": "Торговий центр №1707",
		"description": "Опис для торговий центр номер 1707",
		"createdAt": "2024-11-20T22:00:00.000Z",
		"coords": {
			"lat": 50.6183,
			"lon": 30.7155
		},
		"category": "shop"
	},
	{
		"id": "1708",
		"name": "Центр №1708",
		"description": "Опис для центр номер 1708",
		"createdAt": "2024-06-03T21:00:00.000Z",
		"coords": {
			"lat": 50.4377,
			"lon": 30.2349
		},
		"category": "other"
	},
	{
		"id": "1709",
		"name": "Сквер №1709",
		"description": "Опис для сквер номер 1709",
		"createdAt": "2024-06-27T21:00:00.000Z",
		"coords": {
			"lat": 50.6322,
			"lon": 30.2664
		},
		"category": "park"
	},
	{
		"id": "1710",
		"name": "Бутік №1710",
		"description": "Опис для бутік номер 1710",
		"createdAt": "2024-02-10T22:00:00.000Z",
		"coords": {
			"lat": 50.4409,
			"lon": 30.7359
		},
		"category": "shop"
	},
	{
		"id": "1711",
		"name": "Виставка №1711",
		"description": "Опис для виставка номер 1711",
		"createdAt": "2024-08-01T21:00:00.000Z",
		"coords": {
			"lat": 50.4395,
			"lon": 30.711
		},
		"category": "museum"
	},
	{
		"id": "1712",
		"name": "Піцерія №1712",
		"description": "Опис для піцерія номер 1712",
		"createdAt": "2024-08-03T21:00:00.000Z",
		"coords": {
			"lat": 50.4646,
			"lon": 30.8947
		},
		"category": "food"
	},
	{
		"id": "1713",
		"name": "Галерея №1713",
		"description": "Опис для галерея номер 1713",
		"createdAt": "2024-07-07T21:00:00.000Z",
		"coords": {
			"lat": 50.6198,
			"lon": 30.9716
		},
		"category": "museum"
	},
	{
		"id": "1714",
		"name": "Магазин №1714",
		"description": "Опис для магазин номер 1714",
		"createdAt": "2024-08-02T21:00:00.000Z",
		"coords": {
			"lat": 50.4983,
			"lon": 30.6013
		},
		"category": "shop"
	},
	{
		"id": "1715",
		"name": "Піцерія №1715",
		"description": "Опис для піцерія номер 1715",
		"createdAt": "2024-04-24T21:00:00.000Z",
		"coords": {
			"lat": 50.6066,
			"lon": 30.858
		},
		"category": "food"
	},
	{
		"id": "1716",
		"name": "Будівля №1716",
		"description": "Опис для будівля номер 1716",
		"createdAt": "2024-07-22T21:00:00.000Z",
		"coords": {
			"lat": 50.6554,
			"lon": 30.2581
		},
		"category": "other"
	},
	{
		"id": "1717",
		"name": "Музей №1717",
		"description": "Опис для музей номер 1717",
		"createdAt": "2024-07-03T21:00:00.000Z",
		"coords": {
			"lat": 50.4094,
			"lon": 30.9517
		},
		"category": "museum"
	},
	{
		"id": "1718",
		"name": "Бутік №1718",
		"description": "Опис для бутік номер 1718",
		"createdAt": "2024-02-27T22:00:00.000Z",
		"coords": {
			"lat": 50.5632,
			"lon": 30.6038
		},
		"category": "shop"
	},
	{
		"id": "1719",
		"name": "Магазин №1719",
		"description": "Опис для магазин номер 1719",
		"createdAt": "2024-05-24T21:00:00.000Z",
		"coords": {
			"lat": 50.5929,
			"lon": 30.5223
		},
		"category": "shop"
	},
	{
		"id": "1720",
		"name": "Центр №1720",
		"description": "Опис для центр номер 1720",
		"createdAt": "2024-04-09T21:00:00.000Z",
		"coords": {
			"lat": 50.6744,
			"lon": 30.3082
		},
		"category": "other"
	},
	{
		"id": "1721",
		"name": "Бутік №1721",
		"description": "Опис для бутік номер 1721",
		"createdAt": "2024-05-13T21:00:00.000Z",
		"coords": {
			"lat": 50.4058,
			"lon": 30.544
		},
		"category": "shop"
	},
	{
		"id": "1722",
		"name": "Офіс №1722",
		"description": "Опис для офіс номер 1722",
		"createdAt": "2024-03-22T22:00:00.000Z",
		"coords": {
			"lat": 50.6424,
			"lon": 30.6682
		},
		"category": "other"
	},
	{
		"id": "1723",
		"name": "Сквер №1723",
		"description": "Опис для сквер номер 1723",
		"createdAt": "2024-11-01T22:00:00.000Z",
		"coords": {
			"lat": 50.3986,
			"lon": 30.8566
		},
		"category": "park"
	},
	{
		"id": "1724",
		"name": "Бутік №1724",
		"description": "Опис для бутік номер 1724",
		"createdAt": "2024-01-09T22:00:00.000Z",
		"coords": {
			"lat": 50.4092,
			"lon": 30.3598
		},
		"category": "shop"
	},
	{
		"id": "1725",
		"name": "Сквер №1725",
		"description": "Опис для сквер номер 1725",
		"createdAt": "2024-06-07T21:00:00.000Z",
		"coords": {
			"lat": 50.354,
			"lon": 30.877
		},
		"category": "park"
	},
	{
		"id": "1726",
		"name": "Центр №1726",
		"description": "Опис для центр номер 1726",
		"createdAt": "2024-09-05T21:00:00.000Z",
		"coords": {
			"lat": 50.4305,
			"lon": 30.6431
		},
		"category": "museum"
	},
	{
		"id": "1727",
		"name": "Виставка №1727",
		"description": "Опис для виставка номер 1727",
		"createdAt": "2024-11-15T22:00:00.000Z",
		"coords": {
			"lat": 50.4585,
			"lon": 30.8116
		},
		"category": "museum"
	},
	{
		"id": "1728",
		"name": "Бургерна №1728",
		"description": "Опис для бургерна номер 1728",
		"createdAt": "2024-02-18T22:00:00.000Z",
		"coords": {
			"lat": 50.4793,
			"lon": 30.2309
		},
		"category": "food"
	},
	{
		"id": "1729",
		"name": "Піцерія №1729",
		"description": "Опис для піцерія номер 1729",
		"createdAt": "2024-04-17T21:00:00.000Z",
		"coords": {
			"lat": 50.3186,
			"lon": 30.4357
		},
		"category": "food"
	},
	{
		"id": "1730",
		"name": "Торговий центр №1730",
		"description": "Опис для торговий центр номер 1730",
		"createdAt": "2024-05-18T21:00:00.000Z",
		"coords": {
			"lat": 50.3573,
			"lon": 30.949
		},
		"category": "shop"
	},
	{
		"id": "1731",
		"name": "Центр №1731",
		"description": "Опис для центр номер 1731",
		"createdAt": "2024-12-17T22:00:00.000Z",
		"coords": {
			"lat": 50.3211,
			"lon": 30.4619
		},
		"category": "other"
	},
	{
		"id": "1732",
		"name": "Центр №1732",
		"description": "Опис для центр номер 1732",
		"createdAt": "2024-11-19T22:00:00.000Z",
		"coords": {
			"lat": 50.37,
			"lon": 30.8283
		},
		"category": "other"
	},
	{
		"id": "1733",
		"name": "Піцерія №1733",
		"description": "Опис для піцерія номер 1733",
		"createdAt": "2024-10-05T21:00:00.000Z",
		"coords": {
			"lat": 50.525,
			"lon": 30.2855
		},
		"category": "food"
	},
	{
		"id": "1734",
		"name": "Сад №1734",
		"description": "Опис для сад номер 1734",
		"createdAt": "2024-03-09T22:00:00.000Z",
		"coords": {
			"lat": 50.3069,
			"lon": 30.8761
		},
		"category": "park"
	},
	{
		"id": "1735",
		"name": "Столова №1735",
		"description": "Опис для столова номер 1735",
		"createdAt": "2024-06-02T21:00:00.000Z",
		"coords": {
			"lat": 50.6151,
			"lon": 30.8836
		},
		"category": "food"
	},
	{
		"id": "1736",
		"name": "Сад №1736",
		"description": "Опис для сад номер 1736",
		"createdAt": "2024-08-14T21:00:00.000Z",
		"coords": {
			"lat": 50.6596,
			"lon": 30.6148
		},
		"category": "park"
	},
	{
		"id": "1737",
		"name": "Будівля №1737",
		"description": "Опис для будівля номер 1737",
		"createdAt": "2024-07-03T21:00:00.000Z",
		"coords": {
			"lat": 50.3051,
			"lon": 30.8984
		},
		"category": "other"
	},
	{
		"id": "1738",
		"name": "Піцерія №1738",
		"description": "Опис для піцерія номер 1738",
		"createdAt": "2024-10-10T21:00:00.000Z",
		"coords": {
			"lat": 50.5978,
			"lon": 30.4287
		},
		"category": "food"
	},
	{
		"id": "1739",
		"name": "Виставка №1739",
		"description": "Опис для виставка номер 1739",
		"createdAt": "2024-10-27T22:00:00.000Z",
		"coords": {
			"lat": 50.4052,
			"lon": 30.7747
		},
		"category": "museum"
	},
	{
		"id": "1740",
		"name": "Маркет №1740",
		"description": "Опис для маркет номер 1740",
		"createdAt": "2024-01-12T22:00:00.000Z",
		"coords": {
			"lat": 50.354,
			"lon": 30.9502
		},
		"category": "shop"
	},
	{
		"id": "1741",
		"name": "Бургерна №1741",
		"description": "Опис для бургерна номер 1741",
		"createdAt": "2024-05-01T21:00:00.000Z",
		"coords": {
			"lat": 50.6233,
			"lon": 30.7338
		},
		"category": "food"
	},
	{
		"id": "1742",
		"name": "Бутік №1742",
		"description": "Опис для бутік номер 1742",
		"createdAt": "2024-11-24T22:00:00.000Z",
		"coords": {
			"lat": 50.5462,
			"lon": 30.9224
		},
		"category": "shop"
	},
	{
		"id": "1743",
		"name": "Роща №1743",
		"description": "Опис для роща номер 1743",
		"createdAt": "2024-12-14T22:00:00.000Z",
		"coords": {
			"lat": 50.6886,
			"lon": 30.9073
		},
		"category": "park"
	},
	{
		"id": "1744",
		"name": "Ресторан №1744",
		"description": "Опис для ресторан номер 1744",
		"createdAt": "2024-06-20T21:00:00.000Z",
		"coords": {
			"lat": 50.6584,
			"lon": 30.2984
		},
		"category": "food"
	},
	{
		"id": "1745",
		"name": "Центр №1745",
		"description": "Опис для центр номер 1745",
		"createdAt": "2024-10-04T21:00:00.000Z",
		"coords": {
			"lat": 50.3703,
			"lon": 30.9037
		},
		"category": "museum"
	},
	{
		"id": "1746",
		"name": "Столова №1746",
		"description": "Опис для столова номер 1746",
		"createdAt": "2024-05-20T21:00:00.000Z",
		"coords": {
			"lat": 50.5332,
			"lon": 30.89
		},
		"category": "food"
	},
	{
		"id": "1747",
		"name": "Офіс №1747",
		"description": "Опис для офіс номер 1747",
		"createdAt": "2024-01-03T22:00:00.000Z",
		"coords": {
			"lat": 50.5164,
			"lon": 30.3346
		},
		"category": "other"
	},
	{
		"id": "1748",
		"name": "Маркет №1748",
		"description": "Опис для маркет номер 1748",
		"createdAt": "2024-02-17T22:00:00.000Z",
		"coords": {
			"lat": 50.5265,
			"lon": 30.7555
		},
		"category": "shop"
	},
	{
		"id": "1749",
		"name": "Установа №1749",
		"description": "Опис для установа номер 1749",
		"createdAt": "2024-12-11T22:00:00.000Z",
		"coords": {
			"lat": 50.3816,
			"lon": 30.9051
		},
		"category": "other"
	},
	{
		"id": "1750",
		"name": "Бутік №1750",
		"description": "Опис для бутік номер 1750",
		"createdAt": "2024-05-22T21:00:00.000Z",
		"coords": {
			"lat": 50.6557,
			"lon": 30.9248
		},
		"category": "shop"
	},
	{
		"id": "1751",
		"name": "Виставка №1751",
		"description": "Опис для виставка номер 1751",
		"createdAt": "2024-03-11T22:00:00.000Z",
		"coords": {
			"lat": 50.3459,
			"lon": 30.3058
		},
		"category": "museum"
	},
	{
		"id": "1752",
		"name": "Музей №1752",
		"description": "Опис для музей номер 1752",
		"createdAt": "2024-12-26T22:00:00.000Z",
		"coords": {
			"lat": 50.3287,
			"lon": 30.2566
		},
		"category": "museum"
	},
	{
		"id": "1753",
		"name": "Бургерна №1753",
		"description": "Опис для бургерна номер 1753",
		"createdAt": "2024-07-23T21:00:00.000Z",
		"coords": {
			"lat": 50.4538,
			"lon": 30.9183
		},
		"category": "food"
	},
	{
		"id": "1754",
		"name": "Кафе №1754",
		"description": "Опис для кафе номер 1754",
		"createdAt": "2024-07-24T21:00:00.000Z",
		"coords": {
			"lat": 50.4786,
			"lon": 30.2226
		},
		"category": "food"
	},
	{
		"id": "1755",
		"name": "Установа №1755",
		"description": "Опис для установа номер 1755",
		"createdAt": "2024-06-01T21:00:00.000Z",
		"coords": {
			"lat": 50.4147,
			"lon": 30.4907
		},
		"category": "other"
	},
	{
		"id": "1756",
		"name": "Центр №1756",
		"description": "Опис для центр номер 1756",
		"createdAt": "2024-10-05T21:00:00.000Z",
		"coords": {
			"lat": 50.4291,
			"lon": 30.7551
		},
		"category": "museum"
	},
	{
		"id": "1757",
		"name": "Музей №1757",
		"description": "Опис для музей номер 1757",
		"createdAt": "2024-08-22T21:00:00.000Z",
		"coords": {
			"lat": 50.632,
			"lon": 30.7471
		},
		"category": "museum"
	},
	{
		"id": "1758",
		"name": "Ресторан №1758",
		"description": "Опис для ресторан номер 1758",
		"createdAt": "2024-11-08T22:00:00.000Z",
		"coords": {
			"lat": 50.6341,
			"lon": 30.2396
		},
		"category": "food"
	},
	{
		"id": "1759",
		"name": "Офіс №1759",
		"description": "Опис для офіс номер 1759",
		"createdAt": "2024-10-02T21:00:00.000Z",
		"coords": {
			"lat": 50.3638,
			"lon": 30.9599
		},
		"category": "other"
	},
	{
		"id": "1760",
		"name": "Центр №1760",
		"description": "Опис для центр номер 1760",
		"createdAt": "2024-12-26T22:00:00.000Z",
		"coords": {
			"lat": 50.512,
			"lon": 30.5503
		},
		"category": "museum"
	},
	{
		"id": "1761",
		"name": "Виставка №1761",
		"description": "Опис для виставка номер 1761",
		"createdAt": "2024-09-06T21:00:00.000Z",
		"coords": {
			"lat": 50.5269,
			"lon": 30.8617
		},
		"category": "museum"
	},
	{
		"id": "1762",
		"name": "Супермаркет №1762",
		"description": "Опис для супермаркет номер 1762",
		"createdAt": "2024-02-06T22:00:00.000Z",
		"coords": {
			"lat": 50.5182,
			"lon": 30.4715
		},
		"category": "shop"
	},
	{
		"id": "1763",
		"name": "Кав'ярня №1763",
		"description": "Опис для кав'ярня номер 1763",
		"createdAt": "2024-03-11T22:00:00.000Z",
		"coords": {
			"lat": 50.5315,
			"lon": 30.5029
		},
		"category": "food"
	},
	{
		"id": "1764",
		"name": "Установа №1764",
		"description": "Опис для установа номер 1764",
		"createdAt": "2024-04-27T21:00:00.000Z",
		"coords": {
			"lat": 50.6795,
			"lon": 30.3639
		},
		"category": "other"
	},
	{
		"id": "1765",
		"name": "Офіс №1765",
		"description": "Опис для офіс номер 1765",
		"createdAt": "2024-12-02T22:00:00.000Z",
		"coords": {
			"lat": 50.3724,
			"lon": 30.6901
		},
		"category": "other"
	},
	{
		"id": "1766",
		"name": "Сад №1766",
		"description": "Опис для сад номер 1766",
		"createdAt": "2024-11-15T22:00:00.000Z",
		"coords": {
			"lat": 50.6576,
			"lon": 30.7964
		},
		"category": "park"
	},
	{
		"id": "1767",
		"name": "Центр №1767",
		"description": "Опис для центр номер 1767",
		"createdAt": "2024-06-16T21:00:00.000Z",
		"coords": {
			"lat": 50.461,
			"lon": 30.4002
		},
		"category": "museum"
	},
	{
		"id": "1768",
		"name": "Магазин №1768",
		"description": "Опис для магазин номер 1768",
		"createdAt": "2024-07-01T21:00:00.000Z",
		"coords": {
			"lat": 50.5827,
			"lon": 30.8099
		},
		"category": "shop"
	},
	{
		"id": "1769",
		"name": "Кафе №1769",
		"description": "Опис для кафе номер 1769",
		"createdAt": "2024-06-23T21:00:00.000Z",
		"coords": {
			"lat": 50.3994,
			"lon": 30.8365
		},
		"category": "food"
	},
	{
		"id": "1770",
		"name": "Виставка №1770",
		"description": "Опис для виставка номер 1770",
		"createdAt": "2024-01-05T22:00:00.000Z",
		"coords": {
			"lat": 50.6167,
			"lon": 30.9277
		},
		"category": "museum"
	},
	{
		"id": "1771",
		"name": "Сад №1771",
		"description": "Опис для сад номер 1771",
		"createdAt": "2024-10-31T22:00:00.000Z",
		"coords": {
			"lat": 50.4776,
			"lon": 30.7956
		},
		"category": "park"
	},
	{
		"id": "1772",
		"name": "Галерея №1772",
		"description": "Опис для галерея номер 1772",
		"createdAt": "2024-09-08T21:00:00.000Z",
		"coords": {
			"lat": 50.3106,
			"lon": 30.9961
		},
		"category": "museum"
	},
	{
		"id": "1773",
		"name": "Піцерія №1773",
		"description": "Опис для піцерія номер 1773",
		"createdAt": "2024-02-02T22:00:00.000Z",
		"coords": {
			"lat": 50.5993,
			"lon": 30.4074
		},
		"category": "food"
	},
	{
		"id": "1774",
		"name": "Установа №1774",
		"description": "Опис для установа номер 1774",
		"createdAt": "2024-09-15T21:00:00.000Z",
		"coords": {
			"lat": 50.5893,
			"lon": 30.3178
		},
		"category": "other"
	},
	{
		"id": "1775",
		"name": "Магазин №1775",
		"description": "Опис для магазин номер 1775",
		"createdAt": "2024-05-03T21:00:00.000Z",
		"coords": {
			"lat": 50.4412,
			"lon": 30.2815
		},
		"category": "shop"
	},
	{
		"id": "1776",
		"name": "Парк №1776",
		"description": "Опис для парк номер 1776",
		"createdAt": "2024-06-18T21:00:00.000Z",
		"coords": {
			"lat": 50.655,
			"lon": 30.777
		},
		"category": "park"
	},
	{
		"id": "1777",
		"name": "Кафе №1777",
		"description": "Опис для кафе номер 1777",
		"createdAt": "2024-10-09T21:00:00.000Z",
		"coords": {
			"lat": 50.3813,
			"lon": 30.9227
		},
		"category": "food"
	},
	{
		"id": "1778",
		"name": "Парк №1778",
		"description": "Опис для парк номер 1778",
		"createdAt": "2024-01-18T22:00:00.000Z",
		"coords": {
			"lat": 50.6119,
			"lon": 30.4394
		},
		"category": "park"
	},
	{
		"id": "1779",
		"name": "Парк №1779",
		"description": "Опис для парк номер 1779",
		"createdAt": "2024-05-10T21:00:00.000Z",
		"coords": {
			"lat": 50.4328,
			"lon": 30.2812
		},
		"category": "park"
	},
	{
		"id": "1780",
		"name": "Музей №1780",
		"description": "Опис для музей номер 1780",
		"createdAt": "2024-06-19T21:00:00.000Z",
		"coords": {
			"lat": 50.5536,
			"lon": 30.8433
		},
		"category": "museum"
	},
	{
		"id": "1781",
		"name": "Центр №1781",
		"description": "Опис для центр номер 1781",
		"createdAt": "2024-06-30T21:00:00.000Z",
		"coords": {
			"lat": 50.6473,
			"lon": 30.6302
		},
		"category": "other"
	},
	{
		"id": "1782",
		"name": "Кав'ярня №1782",
		"description": "Опис для кав'ярня номер 1782",
		"createdAt": "2024-01-21T22:00:00.000Z",
		"coords": {
			"lat": 50.307,
			"lon": 30.5257
		},
		"category": "food"
	},
	{
		"id": "1783",
		"name": "Сад №1783",
		"description": "Опис для сад номер 1783",
		"createdAt": "2024-01-26T22:00:00.000Z",
		"coords": {
			"lat": 50.5339,
			"lon": 30.3224
		},
		"category": "park"
	},
	{
		"id": "1784",
		"name": "Алея №1784",
		"description": "Опис для алея номер 1784",
		"createdAt": "2024-04-08T21:00:00.000Z",
		"coords": {
			"lat": 50.6521,
			"lon": 30.9806
		},
		"category": "park"
	},
	{
		"id": "1785",
		"name": "Супермаркет №1785",
		"description": "Опис для супермаркет номер 1785",
		"createdAt": "2024-01-27T22:00:00.000Z",
		"coords": {
			"lat": 50.4801,
			"lon": 30.2509
		},
		"category": "shop"
	},
	{
		"id": "1786",
		"name": "Роща №1786",
		"description": "Опис для роща номер 1786",
		"createdAt": "2024-10-22T21:00:00.000Z",
		"coords": {
			"lat": 50.4989,
			"lon": 30.8775
		},
		"category": "park"
	},
	{
		"id": "1787",
		"name": "Об'єкт №1787",
		"description": "Опис для об'єкт номер 1787",
		"createdAt": "2024-02-26T22:00:00.000Z",
		"coords": {
			"lat": 50.3588,
			"lon": 30.6472
		},
		"category": "other"
	},
	{
		"id": "1788",
		"name": "Музей №1788",
		"description": "Опис для музей номер 1788",
		"createdAt": "2024-08-15T21:00:00.000Z",
		"coords": {
			"lat": 50.6922,
			"lon": 30.7785
		},
		"category": "museum"
	},
	{
		"id": "1789",
		"name": "Роща №1789",
		"description": "Опис для роща номер 1789",
		"createdAt": "2024-08-02T21:00:00.000Z",
		"coords": {
			"lat": 50.4193,
			"lon": 30.2316
		},
		"category": "park"
	},
	{
		"id": "1790",
		"name": "Бутік №1790",
		"description": "Опис для бутік номер 1790",
		"createdAt": "2024-07-08T21:00:00.000Z",
		"coords": {
			"lat": 50.5923,
			"lon": 30.5842
		},
		"category": "shop"
	},
	{
		"id": "1791",
		"name": "Об'єкт №1791",
		"description": "Опис для об'єкт номер 1791",
		"createdAt": "2024-12-25T22:00:00.000Z",
		"coords": {
			"lat": 50.4956,
			"lon": 30.9
		},
		"category": "other"
	},
	{
		"id": "1792",
		"name": "Центр №1792",
		"description": "Опис для центр номер 1792",
		"createdAt": "2024-07-16T21:00:00.000Z",
		"coords": {
			"lat": 50.4845,
			"lon": 30.533
		},
		"category": "other"
	},
	{
		"id": "1793",
		"name": "Об'єкт №1793",
		"description": "Опис для об'єкт номер 1793",
		"createdAt": "2024-07-12T21:00:00.000Z",
		"coords": {
			"lat": 50.4964,
			"lon": 30.8585
		},
		"category": "other"
	},
	{
		"id": "1794",
		"name": "Будівля №1794",
		"description": "Опис для будівля номер 1794",
		"createdAt": "2024-10-01T21:00:00.000Z",
		"coords": {
			"lat": 50.5804,
			"lon": 30.931
		},
		"category": "other"
	},
	{
		"id": "1795",
		"name": "Виставка №1795",
		"description": "Опис для виставка номер 1795",
		"createdAt": "2024-07-08T21:00:00.000Z",
		"coords": {
			"lat": 50.6408,
			"lon": 30.8479
		},
		"category": "museum"
	},
	{
		"id": "1796",
		"name": "Виставка №1796",
		"description": "Опис для виставка номер 1796",
		"createdAt": "2024-09-07T21:00:00.000Z",
		"coords": {
			"lat": 50.5792,
			"lon": 30.8639
		},
		"category": "museum"
	},
	{
		"id": "1797",
		"name": "Торговий центр №1797",
		"description": "Опис для торговий центр номер 1797",
		"createdAt": "2024-02-22T22:00:00.000Z",
		"coords": {
			"lat": 50.3799,
			"lon": 30.4489
		},
		"category": "shop"
	},
	{
		"id": "1798",
		"name": "Парк №1798",
		"description": "Опис для парк номер 1798",
		"createdAt": "2024-05-09T21:00:00.000Z",
		"coords": {
			"lat": 50.5495,
			"lon": 30.5953
		},
		"category": "park"
	},
	{
		"id": "1799",
		"name": "Офіс №1799",
		"description": "Опис для офіс номер 1799",
		"createdAt": "2024-04-21T21:00:00.000Z",
		"coords": {
			"lat": 50.6423,
			"lon": 30.4297
		},
		"category": "other"
	},
	{
		"id": "1800",
		"name": "Бутік №1800",
		"description": "Опис для бутік номер 1800",
		"createdAt": "2024-11-25T22:00:00.000Z",
		"coords": {
			"lat": 50.3924,
			"lon": 30.3242
		},
		"category": "shop"
	},
	{
		"id": "1801",
		"name": "Столова №1801",
		"description": "Опис для столова номер 1801",
		"createdAt": "2024-06-19T21:00:00.000Z",
		"coords": {
			"lat": 50.3973,
			"lon": 30.8365
		},
		"category": "food"
	},
	{
		"id": "1802",
		"name": "Об'єкт №1802",
		"description": "Опис для об'єкт номер 1802",
		"createdAt": "2024-03-26T22:00:00.000Z",
		"coords": {
			"lat": 50.6539,
			"lon": 30.3304
		},
		"category": "other"
	},
	{
		"id": "1803",
		"name": "Галерея №1803",
		"description": "Опис для галерея номер 1803",
		"createdAt": "2024-04-01T21:00:00.000Z",
		"coords": {
			"lat": 50.6799,
			"lon": 30.6639
		},
		"category": "museum"
	},
	{
		"id": "1804",
		"name": "Виставка №1804",
		"description": "Опис для виставка номер 1804",
		"createdAt": "2024-12-14T22:00:00.000Z",
		"coords": {
			"lat": 50.4515,
			"lon": 30.4359
		},
		"category": "museum"
	},
	{
		"id": "1805",
		"name": "Бутік №1805",
		"description": "Опис для бутік номер 1805",
		"createdAt": "2024-01-18T22:00:00.000Z",
		"coords": {
			"lat": 50.504,
			"lon": 30.9541
		},
		"category": "shop"
	},
	{
		"id": "1806",
		"name": "Супермаркет №1806",
		"description": "Опис для супермаркет номер 1806",
		"createdAt": "2024-12-13T22:00:00.000Z",
		"coords": {
			"lat": 50.6058,
			"lon": 30.4967
		},
		"category": "shop"
	},
	{
		"id": "1807",
		"name": "Кав'ярня №1807",
		"description": "Опис для кав'ярня номер 1807",
		"createdAt": "2024-05-23T21:00:00.000Z",
		"coords": {
			"lat": 50.5071,
			"lon": 30.2491
		},
		"category": "food"
	},
	{
		"id": "1808",
		"name": "Роща №1808",
		"description": "Опис для роща номер 1808",
		"createdAt": "2024-06-19T21:00:00.000Z",
		"coords": {
			"lat": 50.4126,
			"lon": 30.5788
		},
		"category": "park"
	},
	{
		"id": "1809",
		"name": "Магазин №1809",
		"description": "Опис для магазин номер 1809",
		"createdAt": "2024-04-21T21:00:00.000Z",
		"coords": {
			"lat": 50.5647,
			"lon": 30.6248
		},
		"category": "shop"
	},
	{
		"id": "1810",
		"name": "Бутік №1810",
		"description": "Опис для бутік номер 1810",
		"createdAt": "2024-06-13T21:00:00.000Z",
		"coords": {
			"lat": 50.3261,
			"lon": 30.6131
		},
		"category": "shop"
	},
	{
		"id": "1811",
		"name": "Бутік №1811",
		"description": "Опис для бутік номер 1811",
		"createdAt": "2024-12-15T22:00:00.000Z",
		"coords": {
			"lat": 50.5187,
			"lon": 30.3876
		},
		"category": "shop"
	},
	{
		"id": "1812",
		"name": "Центр №1812",
		"description": "Опис для центр номер 1812",
		"createdAt": "2024-06-21T21:00:00.000Z",
		"coords": {
			"lat": 50.6237,
			"lon": 30.732
		},
		"category": "other"
	},
	{
		"id": "1813",
		"name": "Об'єкт №1813",
		"description": "Опис для об'єкт номер 1813",
		"createdAt": "2024-09-16T21:00:00.000Z",
		"coords": {
			"lat": 50.551,
			"lon": 30.8108
		},
		"category": "other"
	},
	{
		"id": "1814",
		"name": "Кафе №1814",
		"description": "Опис для кафе номер 1814",
		"createdAt": "2024-03-19T22:00:00.000Z",
		"coords": {
			"lat": 50.4048,
			"lon": 30.2898
		},
		"category": "food"
	},
	{
		"id": "1815",
		"name": "Музей №1815",
		"description": "Опис для музей номер 1815",
		"createdAt": "2024-11-12T22:00:00.000Z",
		"coords": {
			"lat": 50.5586,
			"lon": 30.808
		},
		"category": "museum"
	},
	{
		"id": "1816",
		"name": "Центр №1816",
		"description": "Опис для центр номер 1816",
		"createdAt": "2024-02-04T22:00:00.000Z",
		"coords": {
			"lat": 50.4666,
			"lon": 30.6646
		},
		"category": "museum"
	},
	{
		"id": "1817",
		"name": "Кав'ярня №1817",
		"description": "Опис для кав'ярня номер 1817",
		"createdAt": "2024-10-01T21:00:00.000Z",
		"coords": {
			"lat": 50.397,
			"lon": 30.4799
		},
		"category": "food"
	},
	{
		"id": "1818",
		"name": "Парк №1818",
		"description": "Опис для парк номер 1818",
		"createdAt": "2024-09-25T21:00:00.000Z",
		"coords": {
			"lat": 50.4643,
			"lon": 30.315
		},
		"category": "park"
	},
	{
		"id": "1819",
		"name": "Бургерна №1819",
		"description": "Опис для бургерна номер 1819",
		"createdAt": "2024-03-24T22:00:00.000Z",
		"coords": {
			"lat": 50.5647,
			"lon": 30.2474
		},
		"category": "food"
	},
	{
		"id": "1820",
		"name": "Роща №1820",
		"description": "Опис для роща номер 1820",
		"createdAt": "2024-11-17T22:00:00.000Z",
		"coords": {
			"lat": 50.674,
			"lon": 30.4837
		},
		"category": "park"
	},
	{
		"id": "1821",
		"name": "Алея №1821",
		"description": "Опис для алея номер 1821",
		"createdAt": "2024-07-12T21:00:00.000Z",
		"coords": {
			"lat": 50.4825,
			"lon": 30.8738
		},
		"category": "park"
	},
	{
		"id": "1822",
		"name": "Центр №1822",
		"description": "Опис для центр номер 1822",
		"createdAt": "2024-03-10T22:00:00.000Z",
		"coords": {
			"lat": 50.6706,
			"lon": 30.416
		},
		"category": "museum"
	},
	{
		"id": "1823",
		"name": "Галерея №1823",
		"description": "Опис для галерея номер 1823",
		"createdAt": "2024-02-26T22:00:00.000Z",
		"coords": {
			"lat": 50.5914,
			"lon": 30.7346
		},
		"category": "museum"
	},
	{
		"id": "1824",
		"name": "Сквер №1824",
		"description": "Опис для сквер номер 1824",
		"createdAt": "2024-02-22T22:00:00.000Z",
		"coords": {
			"lat": 50.6148,
			"lon": 30.8725
		},
		"category": "park"
	},
	{
		"id": "1825",
		"name": "Будівля №1825",
		"description": "Опис для будівля номер 1825",
		"createdAt": "2024-07-22T21:00:00.000Z",
		"coords": {
			"lat": 50.5074,
			"lon": 30.4595
		},
		"category": "other"
	},
	{
		"id": "1826",
		"name": "Кафе №1826",
		"description": "Опис для кафе номер 1826",
		"createdAt": "2024-10-11T21:00:00.000Z",
		"coords": {
			"lat": 50.307,
			"lon": 30.2682
		},
		"category": "food"
	},
	{
		"id": "1827",
		"name": "Галерея №1827",
		"description": "Опис для галерея номер 1827",
		"createdAt": "2024-08-13T21:00:00.000Z",
		"coords": {
			"lat": 50.518,
			"lon": 30.8224
		},
		"category": "museum"
	},
	{
		"id": "1828",
		"name": "Кафе №1828",
		"description": "Опис для кафе номер 1828",
		"createdAt": "2024-04-23T21:00:00.000Z",
		"coords": {
			"lat": 50.5168,
			"lon": 30.7536
		},
		"category": "food"
	},
	{
		"id": "1829",
		"name": "Столова №1829",
		"description": "Опис для столова номер 1829",
		"createdAt": "2024-02-27T22:00:00.000Z",
		"coords": {
			"lat": 50.6898,
			"lon": 30.7264
		},
		"category": "food"
	},
	{
		"id": "1830",
		"name": "Сквер №1830",
		"description": "Опис для сквер номер 1830",
		"createdAt": "2024-01-08T22:00:00.000Z",
		"coords": {
			"lat": 50.3575,
			"lon": 30.6616
		},
		"category": "park"
	},
	{
		"id": "1831",
		"name": "Ресторан №1831",
		"description": "Опис для ресторан номер 1831",
		"createdAt": "2024-06-16T21:00:00.000Z",
		"coords": {
			"lat": 50.5989,
			"lon": 30.5752
		},
		"category": "food"
	},
	{
		"id": "1832",
		"name": "Бургерна №1832",
		"description": "Опис для бургерна номер 1832",
		"createdAt": "2024-02-15T22:00:00.000Z",
		"coords": {
			"lat": 50.4003,
			"lon": 30.3622
		},
		"category": "food"
	},
	{
		"id": "1833",
		"name": "Парк №1833",
		"description": "Опис для парк номер 1833",
		"createdAt": "2024-02-29T22:00:00.000Z",
		"coords": {
			"lat": 50.3571,
			"lon": 30.5552
		},
		"category": "park"
	},
	{
		"id": "1834",
		"name": "Бургерна №1834",
		"description": "Опис для бургерна номер 1834",
		"createdAt": "2024-12-01T22:00:00.000Z",
		"coords": {
			"lat": 50.4459,
			"lon": 30.4376
		},
		"category": "food"
	},
	{
		"id": "1835",
		"name": "Сад №1835",
		"description": "Опис для сад номер 1835",
		"createdAt": "2024-04-22T21:00:00.000Z",
		"coords": {
			"lat": 50.4145,
			"lon": 30.5712
		},
		"category": "park"
	},
	{
		"id": "1836",
		"name": "Бутік №1836",
		"description": "Опис для бутік номер 1836",
		"createdAt": "2024-07-15T21:00:00.000Z",
		"coords": {
			"lat": 50.3388,
			"lon": 30.6594
		},
		"category": "shop"
	},
	{
		"id": "1837",
		"name": "Центр №1837",
		"description": "Опис для центр номер 1837",
		"createdAt": "2024-10-17T21:00:00.000Z",
		"coords": {
			"lat": 50.6664,
			"lon": 30.315
		},
		"category": "museum"
	},
	{
		"id": "1838",
		"name": "Кав'ярня №1838",
		"description": "Опис для кав'ярня номер 1838",
		"createdAt": "2024-10-20T21:00:00.000Z",
		"coords": {
			"lat": 50.5832,
			"lon": 30.8923
		},
		"category": "food"
	},
	{
		"id": "1839",
		"name": "Бургерна №1839",
		"description": "Опис для бургерна номер 1839",
		"createdAt": "2024-04-18T21:00:00.000Z",
		"coords": {
			"lat": 50.5413,
			"lon": 30.2048
		},
		"category": "food"
	},
	{
		"id": "1840",
		"name": "Офіс №1840",
		"description": "Опис для офіс номер 1840",
		"createdAt": "2024-09-30T21:00:00.000Z",
		"coords": {
			"lat": 50.5255,
			"lon": 30.72
		},
		"category": "other"
	},
	{
		"id": "1841",
		"name": "Будівля №1841",
		"description": "Опис для будівля номер 1841",
		"createdAt": "2024-02-29T22:00:00.000Z",
		"coords": {
			"lat": 50.6372,
			"lon": 30.8129
		},
		"category": "other"
	},
	{
		"id": "1842",
		"name": "Центр №1842",
		"description": "Опис для центр номер 1842",
		"createdAt": "2024-01-01T22:00:00.000Z",
		"coords": {
			"lat": 50.4889,
			"lon": 30.4986
		},
		"category": "museum"
	},
	{
		"id": "1843",
		"name": "Піцерія №1843",
		"description": "Опис для піцерія номер 1843",
		"createdAt": "2024-01-03T22:00:00.000Z",
		"coords": {
			"lat": 50.3421,
			"lon": 30.932
		},
		"category": "food"
	},
	{
		"id": "1844",
		"name": "Центр №1844",
		"description": "Опис для центр номер 1844",
		"createdAt": "2024-09-08T21:00:00.000Z",
		"coords": {
			"lat": 50.5848,
			"lon": 30.3012
		},
		"category": "museum"
	},
	{
		"id": "1845",
		"name": "Роща №1845",
		"description": "Опис для роща номер 1845",
		"createdAt": "2024-10-21T21:00:00.000Z",
		"coords": {
			"lat": 50.471,
			"lon": 30.5151
		},
		"category": "park"
	},
	{
		"id": "1846",
		"name": "Суші-бар №1846",
		"description": "Опис для суші-бар номер 1846",
		"createdAt": "2024-09-01T21:00:00.000Z",
		"coords": {
			"lat": 50.436,
			"lon": 30.4739
		},
		"category": "food"
	},
	{
		"id": "1847",
		"name": "Сквер №1847",
		"description": "Опис для сквер номер 1847",
		"createdAt": "2024-06-13T21:00:00.000Z",
		"coords": {
			"lat": 50.3123,
			"lon": 30.7519
		},
		"category": "park"
	},
	{
		"id": "1848",
		"name": "Галерея №1848",
		"description": "Опис для галерея номер 1848",
		"createdAt": "2024-03-31T21:00:00.000Z",
		"coords": {
			"lat": 50.3687,
			"lon": 30.7594
		},
		"category": "museum"
	},
	{
		"id": "1849",
		"name": "Об'єкт №1849",
		"description": "Опис для об'єкт номер 1849",
		"createdAt": "2024-09-03T21:00:00.000Z",
		"coords": {
			"lat": 50.5496,
			"lon": 30.637
		},
		"category": "other"
	},
	{
		"id": "1850",
		"name": "Офіс №1850",
		"description": "Опис для офіс номер 1850",
		"createdAt": "2024-12-26T22:00:00.000Z",
		"coords": {
			"lat": 50.5325,
			"lon": 30.2571
		},
		"category": "other"
	},
	{
		"id": "1851",
		"name": "Виставка №1851",
		"description": "Опис для виставка номер 1851",
		"createdAt": "2024-08-08T21:00:00.000Z",
		"coords": {
			"lat": 50.4272,
			"lon": 30.4418
		},
		"category": "museum"
	},
	{
		"id": "1852",
		"name": "Центр №1852",
		"description": "Опис для центр номер 1852",
		"createdAt": "2024-02-26T22:00:00.000Z",
		"coords": {
			"lat": 50.3171,
			"lon": 30.3126
		},
		"category": "other"
	},
	{
		"id": "1853",
		"name": "Парк №1853",
		"description": "Опис для парк номер 1853",
		"createdAt": "2024-04-24T21:00:00.000Z",
		"coords": {
			"lat": 50.6923,
			"lon": 30.2888
		},
		"category": "park"
	},
	{
		"id": "1854",
		"name": "Алея №1854",
		"description": "Опис для алея номер 1854",
		"createdAt": "2024-07-08T21:00:00.000Z",
		"coords": {
			"lat": 50.549,
			"lon": 30.7103
		},
		"category": "park"
	},
	{
		"id": "1855",
		"name": "Супермаркет №1855",
		"description": "Опис для супермаркет номер 1855",
		"createdAt": "2024-11-16T22:00:00.000Z",
		"coords": {
			"lat": 50.3505,
			"lon": 30.9389
		},
		"category": "shop"
	},
	{
		"id": "1856",
		"name": "Офіс №1856",
		"description": "Опис для офіс номер 1856",
		"createdAt": "2024-04-13T21:00:00.000Z",
		"coords": {
			"lat": 50.6296,
			"lon": 30.4745
		},
		"category": "other"
	},
	{
		"id": "1857",
		"name": "Виставка №1857",
		"description": "Опис для виставка номер 1857",
		"createdAt": "2024-08-02T21:00:00.000Z",
		"coords": {
			"lat": 50.3678,
			"lon": 30.2415
		},
		"category": "museum"
	},
	{
		"id": "1858",
		"name": "Бургерна №1858",
		"description": "Опис для бургерна номер 1858",
		"createdAt": "2024-10-25T21:00:00.000Z",
		"coords": {
			"lat": 50.5532,
			"lon": 30.3264
		},
		"category": "food"
	},
	{
		"id": "1859",
		"name": "Суші-бар №1859",
		"description": "Опис для суші-бар номер 1859",
		"createdAt": "2024-11-14T22:00:00.000Z",
		"coords": {
			"lat": 50.4867,
			"lon": 30.919
		},
		"category": "food"
	},
	{
		"id": "1860",
		"name": "Маркет №1860",
		"description": "Опис для маркет номер 1860",
		"createdAt": "2024-04-24T21:00:00.000Z",
		"coords": {
			"lat": 50.5949,
			"lon": 30.8146
		},
		"category": "shop"
	},
	{
		"id": "1861",
		"name": "Офіс №1861",
		"description": "Опис для офіс номер 1861",
		"createdAt": "2024-06-13T21:00:00.000Z",
		"coords": {
			"lat": 50.3965,
			"lon": 30.9303
		},
		"category": "other"
	},
	{
		"id": "1862",
		"name": "Установа №1862",
		"description": "Опис для установа номер 1862",
		"createdAt": "2024-07-24T21:00:00.000Z",
		"coords": {
			"lat": 50.5097,
			"lon": 30.2218
		},
		"category": "other"
	},
	{
		"id": "1863",
		"name": "Маркет №1863",
		"description": "Опис для маркет номер 1863",
		"createdAt": "2024-02-05T22:00:00.000Z",
		"coords": {
			"lat": 50.3249,
			"lon": 30.9028
		},
		"category": "shop"
	},
	{
		"id": "1864",
		"name": "Сад №1864",
		"description": "Опис для сад номер 1864",
		"createdAt": "2024-06-14T21:00:00.000Z",
		"coords": {
			"lat": 50.4843,
			"lon": 30.3311
		},
		"category": "park"
	},
	{
		"id": "1865",
		"name": "Центр №1865",
		"description": "Опис для центр номер 1865",
		"createdAt": "2024-09-14T21:00:00.000Z",
		"coords": {
			"lat": 50.5396,
			"lon": 30.3612
		},
		"category": "other"
	},
	{
		"id": "1866",
		"name": "Роща №1866",
		"description": "Опис для роща номер 1866",
		"createdAt": "2024-12-06T22:00:00.000Z",
		"coords": {
			"lat": 50.493,
			"lon": 30.9984
		},
		"category": "park"
	},
	{
		"id": "1867",
		"name": "Бутік №1867",
		"description": "Опис для бутік номер 1867",
		"createdAt": "2024-01-18T22:00:00.000Z",
		"coords": {
			"lat": 50.6093,
			"lon": 30.4934
		},
		"category": "shop"
	},
	{
		"id": "1868",
		"name": "Бутік №1868",
		"description": "Опис для бутік номер 1868",
		"createdAt": "2024-05-05T21:00:00.000Z",
		"coords": {
			"lat": 50.6854,
			"lon": 30.996
		},
		"category": "shop"
	},
	{
		"id": "1869",
		"name": "Піцерія №1869",
		"description": "Опис для піцерія номер 1869",
		"createdAt": "2024-01-14T22:00:00.000Z",
		"coords": {
			"lat": 50.5695,
			"lon": 30.7106
		},
		"category": "food"
	},
	{
		"id": "1870",
		"name": "Сквер №1870",
		"description": "Опис для сквер номер 1870",
		"createdAt": "2024-07-04T21:00:00.000Z",
		"coords": {
			"lat": 50.3913,
			"lon": 30.3135
		},
		"category": "park"
	},
	{
		"id": "1871",
		"name": "Маркет №1871",
		"description": "Опис для маркет номер 1871",
		"createdAt": "2024-05-19T21:00:00.000Z",
		"coords": {
			"lat": 50.3706,
			"lon": 30.2831
		},
		"category": "shop"
	},
	{
		"id": "1872",
		"name": "Бургерна №1872",
		"description": "Опис для бургерна номер 1872",
		"createdAt": "2024-03-20T22:00:00.000Z",
		"coords": {
			"lat": 50.6992,
			"lon": 30.6954
		},
		"category": "food"
	},
	{
		"id": "1873",
		"name": "Торговий центр №1873",
		"description": "Опис для торговий центр номер 1873",
		"createdAt": "2024-07-06T21:00:00.000Z",
		"coords": {
			"lat": 50.3148,
			"lon": 30.99
		},
		"category": "shop"
	},
	{
		"id": "1874",
		"name": "Суші-бар №1874",
		"description": "Опис для суші-бар номер 1874",
		"createdAt": "2024-12-20T22:00:00.000Z",
		"coords": {
			"lat": 50.4445,
			"lon": 30.8678
		},
		"category": "food"
	},
	{
		"id": "1875",
		"name": "Будівля №1875",
		"description": "Опис для будівля номер 1875",
		"createdAt": "2024-03-26T22:00:00.000Z",
		"coords": {
			"lat": 50.3623,
			"lon": 30.9851
		},
		"category": "other"
	},
	{
		"id": "1876",
		"name": "Суші-бар №1876",
		"description": "Опис для суші-бар номер 1876",
		"createdAt": "2024-04-08T21:00:00.000Z",
		"coords": {
			"lat": 50.3234,
			"lon": 30.5137
		},
		"category": "food"
	},
	{
		"id": "1877",
		"name": "Галерея №1877",
		"description": "Опис для галерея номер 1877",
		"createdAt": "2024-03-08T22:00:00.000Z",
		"coords": {
			"lat": 50.3329,
			"lon": 30.943
		},
		"category": "museum"
	},
	{
		"id": "1878",
		"name": "Будівля №1878",
		"description": "Опис для будівля номер 1878",
		"createdAt": "2024-09-16T21:00:00.000Z",
		"coords": {
			"lat": 50.5208,
			"lon": 30.8781
		},
		"category": "other"
	},
	{
		"id": "1879",
		"name": "Бутік №1879",
		"description": "Опис для бутік номер 1879",
		"createdAt": "2024-06-08T21:00:00.000Z",
		"coords": {
			"lat": 50.4955,
			"lon": 30.7408
		},
		"category": "shop"
	},
	{
		"id": "1880",
		"name": "Кафе №1880",
		"description": "Опис для кафе номер 1880",
		"createdAt": "2024-05-01T21:00:00.000Z",
		"coords": {
			"lat": 50.415,
			"lon": 30.517
		},
		"category": "food"
	},
	{
		"id": "1881",
		"name": "Магазин №1881",
		"description": "Опис для магазин номер 1881",
		"createdAt": "2024-07-27T21:00:00.000Z",
		"coords": {
			"lat": 50.653,
			"lon": 30.777
		},
		"category": "shop"
	},
	{
		"id": "1882",
		"name": "Виставка №1882",
		"description": "Опис для виставка номер 1882",
		"createdAt": "2024-12-05T22:00:00.000Z",
		"coords": {
			"lat": 50.5355,
			"lon": 30.5875
		},
		"category": "museum"
	},
	{
		"id": "1883",
		"name": "Кав'ярня №1883",
		"description": "Опис для кав'ярня номер 1883",
		"createdAt": "2024-09-26T21:00:00.000Z",
		"coords": {
			"lat": 50.5289,
			"lon": 30.7083
		},
		"category": "food"
	},
	{
		"id": "1884",
		"name": "Об'єкт №1884",
		"description": "Опис для об'єкт номер 1884",
		"createdAt": "2024-06-21T21:00:00.000Z",
		"coords": {
			"lat": 50.6675,
			"lon": 30.9133
		},
		"category": "other"
	},
	{
		"id": "1885",
		"name": "Сквер №1885",
		"description": "Опис для сквер номер 1885",
		"createdAt": "2024-10-20T21:00:00.000Z",
		"coords": {
			"lat": 50.3549,
			"lon": 30.9331
		},
		"category": "park"
	},
	{
		"id": "1886",
		"name": "Офіс №1886",
		"description": "Опис для офіс номер 1886",
		"createdAt": "2024-07-05T21:00:00.000Z",
		"coords": {
			"lat": 50.4193,
			"lon": 30.7637
		},
		"category": "other"
	},
	{
		"id": "1887",
		"name": "Музей №1887",
		"description": "Опис для музей номер 1887",
		"createdAt": "2024-05-08T21:00:00.000Z",
		"coords": {
			"lat": 50.4886,
			"lon": 30.3024
		},
		"category": "museum"
	},
	{
		"id": "1888",
		"name": "Кав'ярня №1888",
		"description": "Опис для кав'ярня номер 1888",
		"createdAt": "2024-05-20T21:00:00.000Z",
		"coords": {
			"lat": 50.4544,
			"lon": 30.5094
		},
		"category": "food"
	},
	{
		"id": "1889",
		"name": "Роща №1889",
		"description": "Опис для роща номер 1889",
		"createdAt": "2024-02-13T22:00:00.000Z",
		"coords": {
			"lat": 50.5849,
			"lon": 30.6042
		},
		"category": "park"
	},
	{
		"id": "1890",
		"name": "Центр №1890",
		"description": "Опис для центр номер 1890",
		"createdAt": "2024-04-25T21:00:00.000Z",
		"coords": {
			"lat": 50.5777,
			"lon": 30.9219
		},
		"category": "museum"
	},
	{
		"id": "1891",
		"name": "Алея №1891",
		"description": "Опис для алея номер 1891",
		"createdAt": "2024-12-22T22:00:00.000Z",
		"coords": {
			"lat": 50.6569,
			"lon": 30.4538
		},
		"category": "park"
	},
	{
		"id": "1892",
		"name": "Бургерна №1892",
		"description": "Опис для бургерна номер 1892",
		"createdAt": "2024-02-24T22:00:00.000Z",
		"coords": {
			"lat": 50.5995,
			"lon": 30.4901
		},
		"category": "food"
	},
	{
		"id": "1893",
		"name": "Установа №1893",
		"description": "Опис для установа номер 1893",
		"createdAt": "2024-12-08T22:00:00.000Z",
		"coords": {
			"lat": 50.6186,
			"lon": 30.6508
		},
		"category": "other"
	},
	{
		"id": "1894",
		"name": "Піцерія №1894",
		"description": "Опис для піцерія номер 1894",
		"createdAt": "2024-11-23T22:00:00.000Z",
		"coords": {
			"lat": 50.4319,
			"lon": 30.8689
		},
		"category": "food"
	},
	{
		"id": "1895",
		"name": "Центр №1895",
		"description": "Опис для центр номер 1895",
		"createdAt": "2024-07-15T21:00:00.000Z",
		"coords": {
			"lat": 50.5825,
			"lon": 30.6415
		},
		"category": "museum"
	},
	{
		"id": "1896",
		"name": "Магазин №1896",
		"description": "Опис для магазин номер 1896",
		"createdAt": "2024-01-11T22:00:00.000Z",
		"coords": {
			"lat": 50.4153,
			"lon": 30.7159
		},
		"category": "shop"
	},
	{
		"id": "1897",
		"name": "Столова №1897",
		"description": "Опис для столова номер 1897",
		"createdAt": "2024-03-03T22:00:00.000Z",
		"coords": {
			"lat": 50.3587,
			"lon": 30.3848
		},
		"category": "food"
	},
	{
		"id": "1898",
		"name": "Парк №1898",
		"description": "Опис для парк номер 1898",
		"createdAt": "2024-01-24T22:00:00.000Z",
		"coords": {
			"lat": 50.5689,
			"lon": 30.7108
		},
		"category": "park"
	},
	{
		"id": "1899",
		"name": "Виставка №1899",
		"description": "Опис для виставка номер 1899",
		"createdAt": "2024-07-06T21:00:00.000Z",
		"coords": {
			"lat": 50.6707,
			"lon": 30.4811
		},
		"category": "museum"
	},
	{
		"id": "1900",
		"name": "Магазин №1900",
		"description": "Опис для магазин номер 1900",
		"createdAt": "2024-08-26T21:00:00.000Z",
		"coords": {
			"lat": 50.5037,
			"lon": 30.6304
		},
		"category": "shop"
	},
	{
		"id": "1901",
		"name": "Маркет №1901",
		"description": "Опис для маркет номер 1901",
		"createdAt": "2024-09-09T21:00:00.000Z",
		"coords": {
			"lat": 50.32,
			"lon": 30.7848
		},
		"category": "shop"
	},
	{
		"id": "1902",
		"name": "Центр №1902",
		"description": "Опис для центр номер 1902",
		"createdAt": "2024-11-15T22:00:00.000Z",
		"coords": {
			"lat": 50.4876,
			"lon": 30.5397
		},
		"category": "other"
	},
	{
		"id": "1903",
		"name": "Маркет №1903",
		"description": "Опис для маркет номер 1903",
		"createdAt": "2024-09-10T21:00:00.000Z",
		"coords": {
			"lat": 50.3239,
			"lon": 30.634
		},
		"category": "shop"
	},
	{
		"id": "1904",
		"name": "Супермаркет №1904",
		"description": "Опис для супермаркет номер 1904",
		"createdAt": "2024-08-06T21:00:00.000Z",
		"coords": {
			"lat": 50.47,
			"lon": 30.6739
		},
		"category": "shop"
	},
	{
		"id": "1905",
		"name": "Кафе №1905",
		"description": "Опис для кафе номер 1905",
		"createdAt": "2024-11-18T22:00:00.000Z",
		"coords": {
			"lat": 50.6149,
			"lon": 30.7297
		},
		"category": "food"
	},
	{
		"id": "1906",
		"name": "Бутік №1906",
		"description": "Опис для бутік номер 1906",
		"createdAt": "2024-12-01T22:00:00.000Z",
		"coords": {
			"lat": 50.351,
			"lon": 30.5717
		},
		"category": "shop"
	},
	{
		"id": "1907",
		"name": "Суші-бар №1907",
		"description": "Опис для суші-бар номер 1907",
		"createdAt": "2024-07-03T21:00:00.000Z",
		"coords": {
			"lat": 50.3583,
			"lon": 30.302
		},
		"category": "food"
	},
	{
		"id": "1908",
		"name": "Кафе №1908",
		"description": "Опис для кафе номер 1908",
		"createdAt": "2024-12-27T22:00:00.000Z",
		"coords": {
			"lat": 50.4052,
			"lon": 30.8526
		},
		"category": "food"
	},
	{
		"id": "1909",
		"name": "Ресторан №1909",
		"description": "Опис для ресторан номер 1909",
		"createdAt": "2024-04-21T21:00:00.000Z",
		"coords": {
			"lat": 50.5103,
			"lon": 30.3324
		},
		"category": "food"
	},
	{
		"id": "1910",
		"name": "Бургерна №1910",
		"description": "Опис для бургерна номер 1910",
		"createdAt": "2024-06-20T21:00:00.000Z",
		"coords": {
			"lat": 50.6535,
			"lon": 30.3852
		},
		"category": "food"
	},
	{
		"id": "1911",
		"name": "Галерея №1911",
		"description": "Опис для галерея номер 1911",
		"createdAt": "2024-04-27T21:00:00.000Z",
		"coords": {
			"lat": 50.5651,
			"lon": 30.5189
		},
		"category": "museum"
	},
	{
		"id": "1912",
		"name": "Сквер №1912",
		"description": "Опис для сквер номер 1912",
		"createdAt": "2024-07-15T21:00:00.000Z",
		"coords": {
			"lat": 50.6178,
			"lon": 30.514
		},
		"category": "park"
	},
	{
		"id": "1913",
		"name": "Музей №1913",
		"description": "Опис для музей номер 1913",
		"createdAt": "2024-05-12T21:00:00.000Z",
		"coords": {
			"lat": 50.5854,
			"lon": 30.5597
		},
		"category": "museum"
	},
	{
		"id": "1914",
		"name": "Сад №1914",
		"description": "Опис для сад номер 1914",
		"createdAt": "2024-09-26T21:00:00.000Z",
		"coords": {
			"lat": 50.6938,
			"lon": 30.7761
		},
		"category": "park"
	},
	{
		"id": "1915",
		"name": "Піцерія №1915",
		"description": "Опис для піцерія номер 1915",
		"createdAt": "2024-07-11T21:00:00.000Z",
		"coords": {
			"lat": 50.6195,
			"lon": 30.4511
		},
		"category": "food"
	},
	{
		"id": "1916",
		"name": "Бургерна №1916",
		"description": "Опис для бургерна номер 1916",
		"createdAt": "2024-08-22T21:00:00.000Z",
		"coords": {
			"lat": 50.3253,
			"lon": 30.3368
		},
		"category": "food"
	},
	{
		"id": "1917",
		"name": "Роща №1917",
		"description": "Опис для роща номер 1917",
		"createdAt": "2024-12-13T22:00:00.000Z",
		"coords": {
			"lat": 50.5424,
			"lon": 30.4051
		},
		"category": "park"
	},
	{
		"id": "1918",
		"name": "Ресторан №1918",
		"description": "Опис для ресторан номер 1918",
		"createdAt": "2024-10-09T21:00:00.000Z",
		"coords": {
			"lat": 50.6048,
			"lon": 30.303
		},
		"category": "food"
	},
	{
		"id": "1919",
		"name": "Музей №1919",
		"description": "Опис для музей номер 1919",
		"createdAt": "2024-06-04T21:00:00.000Z",
		"coords": {
			"lat": 50.5622,
			"lon": 30.4704
		},
		"category": "museum"
	},
	{
		"id": "1920",
		"name": "Будівля №1920",
		"description": "Опис для будівля номер 1920",
		"createdAt": "2024-06-15T21:00:00.000Z",
		"coords": {
			"lat": 50.3951,
			"lon": 30.5214
		},
		"category": "other"
	},
	{
		"id": "1921",
		"name": "Сад №1921",
		"description": "Опис для сад номер 1921",
		"createdAt": "2024-01-11T22:00:00.000Z",
		"coords": {
			"lat": 50.4089,
			"lon": 30.2004
		},
		"category": "park"
	},
	{
		"id": "1922",
		"name": "Торговий центр №1922",
		"description": "Опис для торговий центр номер 1922",
		"createdAt": "2024-10-19T21:00:00.000Z",
		"coords": {
			"lat": 50.5121,
			"lon": 30.3463
		},
		"category": "shop"
	},
	{
		"id": "1923",
		"name": "Галерея №1923",
		"description": "Опис для галерея номер 1923",
		"createdAt": "2024-01-27T22:00:00.000Z",
		"coords": {
			"lat": 50.5067,
			"lon": 30.8504
		},
		"category": "museum"
	},
	{
		"id": "1924",
		"name": "Сад №1924",
		"description": "Опис для сад номер 1924",
		"createdAt": "2024-05-11T21:00:00.000Z",
		"coords": {
			"lat": 50.5842,
			"lon": 30.8643
		},
		"category": "park"
	},
	{
		"id": "1925",
		"name": "Алея №1925",
		"description": "Опис для алея номер 1925",
		"createdAt": "2024-06-01T21:00:00.000Z",
		"coords": {
			"lat": 50.4093,
			"lon": 30.9035
		},
		"category": "park"
	},
	{
		"id": "1926",
		"name": "Виставка №1926",
		"description": "Опис для виставка номер 1926",
		"createdAt": "2024-08-25T21:00:00.000Z",
		"coords": {
			"lat": 50.4369,
			"lon": 30.9349
		},
		"category": "museum"
	},
	{
		"id": "1927",
		"name": "Парк №1927",
		"description": "Опис для парк номер 1927",
		"createdAt": "2024-11-01T22:00:00.000Z",
		"coords": {
			"lat": 50.3965,
			"lon": 30.9787
		},
		"category": "park"
	},
	{
		"id": "1928",
		"name": "Суші-бар №1928",
		"description": "Опис для суші-бар номер 1928",
		"createdAt": "2024-04-12T21:00:00.000Z",
		"coords": {
			"lat": 50.5175,
			"lon": 30.8565
		},
		"category": "food"
	},
	{
		"id": "1929",
		"name": "Об'єкт №1929",
		"description": "Опис для об'єкт номер 1929",
		"createdAt": "2024-06-08T21:00:00.000Z",
		"coords": {
			"lat": 50.4237,
			"lon": 30.4434
		},
		"category": "other"
	},
	{
		"id": "1930",
		"name": "Супермаркет №1930",
		"description": "Опис для супермаркет номер 1930",
		"createdAt": "2024-12-09T22:00:00.000Z",
		"coords": {
			"lat": 50.5251,
			"lon": 30.641
		},
		"category": "shop"
	},
	{
		"id": "1931",
		"name": "Магазин №1931",
		"description": "Опис для магазин номер 1931",
		"createdAt": "2024-04-14T21:00:00.000Z",
		"coords": {
			"lat": 50.3837,
			"lon": 30.551
		},
		"category": "shop"
	},
	{
		"id": "1932",
		"name": "Алея №1932",
		"description": "Опис для алея номер 1932",
		"createdAt": "2024-04-24T21:00:00.000Z",
		"coords": {
			"lat": 50.3573,
			"lon": 30.6692
		},
		"category": "park"
	},
	{
		"id": "1933",
		"name": "Бутік №1933",
		"description": "Опис для бутік номер 1933",
		"createdAt": "2024-10-09T21:00:00.000Z",
		"coords": {
			"lat": 50.4246,
			"lon": 30.2507
		},
		"category": "shop"
	},
	{
		"id": "1934",
		"name": "Ресторан №1934",
		"description": "Опис для ресторан номер 1934",
		"createdAt": "2024-10-01T21:00:00.000Z",
		"coords": {
			"lat": 50.4364,
			"lon": 30.5193
		},
		"category": "food"
	},
	{
		"id": "1935",
		"name": "Виставка №1935",
		"description": "Опис для виставка номер 1935",
		"createdAt": "2024-02-27T22:00:00.000Z",
		"coords": {
			"lat": 50.6911,
			"lon": 30.4968
		},
		"category": "museum"
	},
	{
		"id": "1936",
		"name": "Музей №1936",
		"description": "Опис для музей номер 1936",
		"createdAt": "2024-10-04T21:00:00.000Z",
		"coords": {
			"lat": 50.6852,
			"lon": 30.7066
		},
		"category": "museum"
	},
	{
		"id": "1937",
		"name": "Ресторан №1937",
		"description": "Опис для ресторан номер 1937",
		"createdAt": "2024-04-15T21:00:00.000Z",
		"coords": {
			"lat": 50.6675,
			"lon": 30.5373
		},
		"category": "food"
	},
	{
		"id": "1938",
		"name": "Торговий центр №1938",
		"description": "Опис для торговий центр номер 1938",
		"createdAt": "2024-05-18T21:00:00.000Z",
		"coords": {
			"lat": 50.3675,
			"lon": 30.4387
		},
		"category": "shop"
	},
	{
		"id": "1939",
		"name": "Бургерна №1939",
		"description": "Опис для бургерна номер 1939",
		"createdAt": "2024-07-02T21:00:00.000Z",
		"coords": {
			"lat": 50.4663,
			"lon": 30.9941
		},
		"category": "food"
	},
	{
		"id": "1940",
		"name": "Алея №1940",
		"description": "Опис для алея номер 1940",
		"createdAt": "2024-07-14T21:00:00.000Z",
		"coords": {
			"lat": 50.5007,
			"lon": 30.6256
		},
		"category": "park"
	},
	{
		"id": "1941",
		"name": "Роща №1941",
		"description": "Опис для роща номер 1941",
		"createdAt": "2024-10-19T21:00:00.000Z",
		"coords": {
			"lat": 50.4771,
			"lon": 30.4071
		},
		"category": "park"
	},
	{
		"id": "1942",
		"name": "Столова №1942",
		"description": "Опис для столова номер 1942",
		"createdAt": "2024-10-14T21:00:00.000Z",
		"coords": {
			"lat": 50.4541,
			"lon": 30.5529
		},
		"category": "food"
	},
	{
		"id": "1943",
		"name": "Музей №1943",
		"description": "Опис для музей номер 1943",
		"createdAt": "2024-04-22T21:00:00.000Z",
		"coords": {
			"lat": 50.6226,
			"lon": 30.5216
		},
		"category": "museum"
	},
	{
		"id": "1944",
		"name": "Парк №1944",
		"description": "Опис для парк номер 1944",
		"createdAt": "2024-06-08T21:00:00.000Z",
		"coords": {
			"lat": 50.4872,
			"lon": 30.6659
		},
		"category": "park"
	},
	{
		"id": "1945",
		"name": "Виставка №1945",
		"description": "Опис для виставка номер 1945",
		"createdAt": "2024-06-06T21:00:00.000Z",
		"coords": {
			"lat": 50.6106,
			"lon": 30.9036
		},
		"category": "museum"
	},
	{
		"id": "1946",
		"name": "Виставка №1946",
		"description": "Опис для виставка номер 1946",
		"createdAt": "2024-02-14T22:00:00.000Z",
		"coords": {
			"lat": 50.5864,
			"lon": 30.299
		},
		"category": "museum"
	},
	{
		"id": "1947",
		"name": "Піцерія №1947",
		"description": "Опис для піцерія номер 1947",
		"createdAt": "2024-12-15T22:00:00.000Z",
		"coords": {
			"lat": 50.4417,
			"lon": 30.3867
		},
		"category": "food"
	},
	{
		"id": "1948",
		"name": "Об'єкт №1948",
		"description": "Опис для об'єкт номер 1948",
		"createdAt": "2024-05-11T21:00:00.000Z",
		"coords": {
			"lat": 50.64,
			"lon": 30.6696
		},
		"category": "other"
	},
	{
		"id": "1949",
		"name": "Суші-бар №1949",
		"description": "Опис для суші-бар номер 1949",
		"createdAt": "2024-09-16T21:00:00.000Z",
		"coords": {
			"lat": 50.6476,
			"lon": 30.3379
		},
		"category": "food"
	},
	{
		"id": "1950",
		"name": "Музей №1950",
		"description": "Опис для музей номер 1950",
		"createdAt": "2024-05-18T21:00:00.000Z",
		"coords": {
			"lat": 50.4371,
			"lon": 30.225
		},
		"category": "museum"
	},
	{
		"id": "1951",
		"name": "Будівля №1951",
		"description": "Опис для будівля номер 1951",
		"createdAt": "2024-09-17T21:00:00.000Z",
		"coords": {
			"lat": 50.6277,
			"lon": 30.6275
		},
		"category": "other"
	},
	{
		"id": "1952",
		"name": "Кав'ярня №1952",
		"description": "Опис для кав'ярня номер 1952",
		"createdAt": "2024-08-12T21:00:00.000Z",
		"coords": {
			"lat": 50.6419,
			"lon": 30.6601
		},
		"category": "food"
	},
	{
		"id": "1953",
		"name": "Будівля №1953",
		"description": "Опис для будівля номер 1953",
		"createdAt": "2024-04-14T21:00:00.000Z",
		"coords": {
			"lat": 50.5092,
			"lon": 30.3018
		},
		"category": "other"
	},
	{
		"id": "1954",
		"name": "Установа №1954",
		"description": "Опис для установа номер 1954",
		"createdAt": "2024-08-11T21:00:00.000Z",
		"coords": {
			"lat": 50.3883,
			"lon": 30.2897
		},
		"category": "other"
	},
	{
		"id": "1955",
		"name": "Об'єкт №1955",
		"description": "Опис для об'єкт номер 1955",
		"createdAt": "2024-12-11T22:00:00.000Z",
		"coords": {
			"lat": 50.6644,
			"lon": 30.5166
		},
		"category": "other"
	},
	{
		"id": "1956",
		"name": "Кав'ярня №1956",
		"description": "Опис для кав'ярня номер 1956",
		"createdAt": "2024-11-18T22:00:00.000Z",
		"coords": {
			"lat": 50.4025,
			"lon": 30.9218
		},
		"category": "food"
	},
	{
		"id": "1957",
		"name": "Музей №1957",
		"description": "Опис для музей номер 1957",
		"createdAt": "2024-07-26T21:00:00.000Z",
		"coords": {
			"lat": 50.6264,
			"lon": 30.9172
		},
		"category": "museum"
	},
	{
		"id": "1958",
		"name": "Бутік №1958",
		"description": "Опис для бутік номер 1958",
		"createdAt": "2024-12-10T22:00:00.000Z",
		"coords": {
			"lat": 50.4294,
			"lon": 30.3648
		},
		"category": "shop"
	},
	{
		"id": "1959",
		"name": "Магазин №1959",
		"description": "Опис для магазин номер 1959",
		"createdAt": "2024-12-25T22:00:00.000Z",
		"coords": {
			"lat": 50.5023,
			"lon": 30.577
		},
		"category": "shop"
	},
	{
		"id": "1960",
		"name": "Столова №1960",
		"description": "Опис для столова номер 1960",
		"createdAt": "2024-07-23T21:00:00.000Z",
		"coords": {
			"lat": 50.6569,
			"lon": 30.7041
		},
		"category": "food"
	},
	{
		"id": "1961",
		"name": "Сквер №1961",
		"description": "Опис для сквер номер 1961",
		"createdAt": "2024-03-09T22:00:00.000Z",
		"coords": {
			"lat": 50.3736,
			"lon": 30.6062
		},
		"category": "park"
	},
	{
		"id": "1962",
		"name": "Виставка №1962",
		"description": "Опис для виставка номер 1962",
		"createdAt": "2024-09-09T21:00:00.000Z",
		"coords": {
			"lat": 50.6145,
			"lon": 30.7613
		},
		"category": "museum"
	},
	{
		"id": "1963",
		"name": "Центр №1963",
		"description": "Опис для центр номер 1963",
		"createdAt": "2024-04-01T21:00:00.000Z",
		"coords": {
			"lat": 50.593,
			"lon": 30.3382
		},
		"category": "museum"
	},
	{
		"id": "1964",
		"name": "Музей №1964",
		"description": "Опис для музей номер 1964",
		"createdAt": "2024-03-22T22:00:00.000Z",
		"coords": {
			"lat": 50.6663,
			"lon": 30.8764
		},
		"category": "museum"
	},
	{
		"id": "1965",
		"name": "Маркет №1965",
		"description": "Опис для маркет номер 1965",
		"createdAt": "2024-04-16T21:00:00.000Z",
		"coords": {
			"lat": 50.4011,
			"lon": 30.5003
		},
		"category": "shop"
	},
	{
		"id": "1966",
		"name": "Бургерна №1966",
		"description": "Опис для бургерна номер 1966",
		"createdAt": "2024-02-13T22:00:00.000Z",
		"coords": {
			"lat": 50.498,
			"lon": 30.5358
		},
		"category": "food"
	},
	{
		"id": "1967",
		"name": "Бутік №1967",
		"description": "Опис для бутік номер 1967",
		"createdAt": "2024-07-15T21:00:00.000Z",
		"coords": {
			"lat": 50.4686,
			"lon": 30.2141
		},
		"category": "shop"
	},
	{
		"id": "1968",
		"name": "Центр №1968",
		"description": "Опис для центр номер 1968",
		"createdAt": "2024-12-08T22:00:00.000Z",
		"coords": {
			"lat": 50.5073,
			"lon": 30.2373
		},
		"category": "museum"
	},
	{
		"id": "1969",
		"name": "Будівля №1969",
		"description": "Опис для будівля номер 1969",
		"createdAt": "2024-11-30T22:00:00.000Z",
		"coords": {
			"lat": 50.6042,
			"lon": 30.8881
		},
		"category": "other"
	},
	{
		"id": "1970",
		"name": "Маркет №1970",
		"description": "Опис для маркет номер 1970",
		"createdAt": "2024-03-02T22:00:00.000Z",
		"coords": {
			"lat": 50.5185,
			"lon": 30.2577
		},
		"category": "shop"
	},
	{
		"id": "1971",
		"name": "Суші-бар №1971",
		"description": "Опис для суші-бар номер 1971",
		"createdAt": "2024-06-22T21:00:00.000Z",
		"coords": {
			"lat": 50.6887,
			"lon": 30.5625
		},
		"category": "food"
	},
	{
		"id": "1972",
		"name": "Маркет №1972",
		"description": "Опис для маркет номер 1972",
		"createdAt": "2024-03-03T22:00:00.000Z",
		"coords": {
			"lat": 50.636,
			"lon": 30.9218
		},
		"category": "shop"
	},
	{
		"id": "1973",
		"name": "Супермаркет №1973",
		"description": "Опис для супермаркет номер 1973",
		"createdAt": "2024-09-27T21:00:00.000Z",
		"coords": {
			"lat": 50.4448,
			"lon": 30.8653
		},
		"category": "shop"
	},
	{
		"id": "1974",
		"name": "Будівля №1974",
		"description": "Опис для будівля номер 1974",
		"createdAt": "2024-03-01T22:00:00.000Z",
		"coords": {
			"lat": 50.3695,
			"lon": 30.3733
		},
		"category": "other"
	},
	{
		"id": "1975",
		"name": "Виставка №1975",
		"description": "Опис для виставка номер 1975",
		"createdAt": "2024-01-01T22:00:00.000Z",
		"coords": {
			"lat": 50.3654,
			"lon": 30.2323
		},
		"category": "museum"
	},
	{
		"id": "1976",
		"name": "Алея №1976",
		"description": "Опис для алея номер 1976",
		"createdAt": "2024-03-09T22:00:00.000Z",
		"coords": {
			"lat": 50.6497,
			"lon": 30.2766
		},
		"category": "park"
	},
	{
		"id": "1977",
		"name": "Ресторан №1977",
		"description": "Опис для ресторан номер 1977",
		"createdAt": "2024-12-09T22:00:00.000Z",
		"coords": {
			"lat": 50.4613,
			"lon": 30.9819
		},
		"category": "food"
	},
	{
		"id": "1978",
		"name": "Ресторан №1978",
		"description": "Опис для ресторан номер 1978",
		"createdAt": "2024-04-25T21:00:00.000Z",
		"coords": {
			"lat": 50.5044,
			"lon": 30.4346
		},
		"category": "food"
	},
	{
		"id": "1979",
		"name": "Бутік №1979",
		"description": "Опис для бутік номер 1979",
		"createdAt": "2024-01-05T22:00:00.000Z",
		"coords": {
			"lat": 50.4959,
			"lon": 30.7004
		},
		"category": "shop"
	},
	{
		"id": "1980",
		"name": "Об'єкт №1980",
		"description": "Опис для об'єкт номер 1980",
		"createdAt": "2024-09-24T21:00:00.000Z",
		"coords": {
			"lat": 50.6954,
			"lon": 30.2072
		},
		"category": "other"
	},
	{
		"id": "1981",
		"name": "Галерея №1981",
		"description": "Опис для галерея номер 1981",
		"createdAt": "2024-07-06T21:00:00.000Z",
		"coords": {
			"lat": 50.3541,
			"lon": 30.9509
		},
		"category": "museum"
	},
	{
		"id": "1982",
		"name": "Магазин №1982",
		"description": "Опис для магазин номер 1982",
		"createdAt": "2024-10-01T21:00:00.000Z",
		"coords": {
			"lat": 50.4375,
			"lon": 30.563
		},
		"category": "shop"
	},
	{
		"id": "1983",
		"name": "Музей №1983",
		"description": "Опис для музей номер 1983",
		"createdAt": "2024-10-15T21:00:00.000Z",
		"coords": {
			"lat": 50.5286,
			"lon": 30.2863
		},
		"category": "museum"
	},
	{
		"id": "1984",
		"name": "Бургерна №1984",
		"description": "Опис для бургерна номер 1984",
		"createdAt": "2024-12-01T22:00:00.000Z",
		"coords": {
			"lat": 50.6776,
			"lon": 30.9715
		},
		"category": "food"
	},
	{
		"id": "1985",
		"name": "Будівля №1985",
		"description": "Опис для будівля номер 1985",
		"createdAt": "2024-02-14T22:00:00.000Z",
		"coords": {
			"lat": 50.4481,
			"lon": 30.8254
		},
		"category": "other"
	},
	{
		"id": "1986",
		"name": "Піцерія №1986",
		"description": "Опис для піцерія номер 1986",
		"createdAt": "2024-02-03T22:00:00.000Z",
		"coords": {
			"lat": 50.4306,
			"lon": 30.2093
		},
		"category": "food"
	},
	{
		"id": "1987",
		"name": "Маркет №1987",
		"description": "Опис для маркет номер 1987",
		"createdAt": "2024-03-03T22:00:00.000Z",
		"coords": {
			"lat": 50.6507,
			"lon": 30.5018
		},
		"category": "shop"
	},
	{
		"id": "1988",
		"name": "Роща №1988",
		"description": "Опис для роща номер 1988",
		"createdAt": "2024-09-03T21:00:00.000Z",
		"coords": {
			"lat": 50.4492,
			"lon": 30.7887
		},
		"category": "park"
	},
	{
		"id": "1989",
		"name": "Парк №1989",
		"description": "Опис для парк номер 1989",
		"createdAt": "2024-04-20T21:00:00.000Z",
		"coords": {
			"lat": 50.3581,
			"lon": 30.2351
		},
		"category": "park"
	},
	{
		"id": "1990",
		"name": "Маркет №1990",
		"description": "Опис для маркет номер 1990",
		"createdAt": "2024-08-02T21:00:00.000Z",
		"coords": {
			"lat": 50.4351,
			"lon": 30.4217
		},
		"category": "shop"
	},
	{
		"id": "1991",
		"name": "Парк №1991",
		"description": "Опис для парк номер 1991",
		"createdAt": "2024-10-19T21:00:00.000Z",
		"coords": {
			"lat": 50.5372,
			"lon": 30.2689
		},
		"category": "park"
	},
	{
		"id": "1992",
		"name": "Суші-бар №1992",
		"description": "Опис для суші-бар номер 1992",
		"createdAt": "2024-03-07T22:00:00.000Z",
		"coords": {
			"lat": 50.5372,
			"lon": 30.4626
		},
		"category": "food"
	},
	{
		"id": "1993",
		"name": "Об'єкт №1993",
		"description": "Опис для об'єкт номер 1993",
		"createdAt": "2024-03-03T22:00:00.000Z",
		"coords": {
			"lat": 50.6898,
			"lon": 30.4559
		},
		"category": "other"
	},
	{
		"id": "1994",
		"name": "Ресторан №1994",
		"description": "Опис для ресторан номер 1994",
		"createdAt": "2024-03-18T22:00:00.000Z",
		"coords": {
			"lat": 50.4153,
			"lon": 30.7269
		},
		"category": "food"
	},
	{
		"id": "1995",
		"name": "Центр №1995",
		"description": "Опис для центр номер 1995",
		"createdAt": "2024-07-01T21:00:00.000Z",
		"coords": {
			"lat": 50.6091,
			"lon": 30.5665
		},
		"category": "other"
	},
	{
		"id": "1996",
		"name": "Кав'ярня №1996",
		"description": "Опис для кав'ярня номер 1996",
		"createdAt": "2024-12-03T22:00:00.000Z",
		"coords": {
			"lat": 50.5223,
			"lon": 30.2532
		},
		"category": "food"
	},
	{
		"id": "1997",
		"name": "Центр №1997",
		"description": "Опис для центр номер 1997",
		"createdAt": "2024-06-13T21:00:00.000Z",
		"coords": {
			"lat": 50.4039,
			"lon": 30.9497
		},
		"category": "museum"
	},
	{
		"id": "1998",
		"name": "Сад №1998",
		"description": "Опис для сад номер 1998",
		"createdAt": "2024-02-15T22:00:00.000Z",
		"coords": {
			"lat": 50.3133,
			"lon": 30.5968
		},
		"category": "park"
	},
	{
		"id": "1999",
		"name": "Установа №1999",
		"description": "Опис для установа номер 1999",
		"createdAt": "2024-10-10T21:00:00.000Z",
		"coords": {
			"lat": 50.5459,
			"lon": 30.4315
		},
		"category": "other"
	},
	{
		"id": "2000",
		"name": "Галерея №2000",
		"description": "Опис для галерея номер 2000",
		"createdAt": "2024-07-09T21:00:00.000Z",
		"coords": {
			"lat": 50.5646,
			"lon": 30.4252
		},
		"category": "museum"
	},
	{
		"id": "2001",
		"name": "Супермаркет №2001",
		"description": "Опис для супермаркет номер 2001",
		"createdAt": "2024-10-07T21:00:00.000Z",
		"coords": {
			"lat": 50.4345,
			"lon": 30.8086
		},
		"category": "shop"
	},
	{
		"id": "2002",
		"name": "Будівля №2002",
		"description": "Опис для будівля номер 2002",
		"createdAt": "2024-06-06T21:00:00.000Z",
		"coords": {
			"lat": 50.4317,
			"lon": 30.5468
		},
		"category": "other"
	},
	{
		"id": "2003",
		"name": "Кав'ярня №2003",
		"description": "Опис для кав'ярня номер 2003",
		"createdAt": "2024-10-21T21:00:00.000Z",
		"coords": {
			"lat": 50.6001,
			"lon": 30.66
		},
		"category": "food"
	},
	{
		"id": "2004",
		"name": "Будівля №2004",
		"description": "Опис для будівля номер 2004",
		"createdAt": "2024-12-10T22:00:00.000Z",
		"coords": {
			"lat": 50.4756,
			"lon": 30.283
		},
		"category": "other"
	},
	{
		"id": "2005",
		"name": "Бутік №2005",
		"description": "Опис для бутік номер 2005",
		"createdAt": "2024-12-15T22:00:00.000Z",
		"coords": {
			"lat": 50.3642,
			"lon": 30.7142
		},
		"category": "shop"
	},
	{
		"id": "2006",
		"name": "Сад №2006",
		"description": "Опис для сад номер 2006",
		"createdAt": "2024-12-20T22:00:00.000Z",
		"coords": {
			"lat": 50.3412,
			"lon": 30.9698
		},
		"category": "park"
	},
	{
		"id": "2007",
		"name": "Сквер №2007",
		"description": "Опис для сквер номер 2007",
		"createdAt": "2024-05-22T21:00:00.000Z",
		"coords": {
			"lat": 50.3468,
			"lon": 30.8837
		},
		"category": "park"
	},
	{
		"id": "2008",
		"name": "Офіс №2008",
		"description": "Опис для офіс номер 2008",
		"createdAt": "2024-11-24T22:00:00.000Z",
		"coords": {
			"lat": 50.3812,
			"lon": 30.6821
		},
		"category": "other"
	},
	{
		"id": "2009",
		"name": "Бутік №2009",
		"description": "Опис для бутік номер 2009",
		"createdAt": "2024-03-15T22:00:00.000Z",
		"coords": {
			"lat": 50.6248,
			"lon": 30.6294
		},
		"category": "shop"
	},
	{
		"id": "2010",
		"name": "Маркет №2010",
		"description": "Опис для маркет номер 2010",
		"createdAt": "2024-11-11T22:00:00.000Z",
		"coords": {
			"lat": 50.4882,
			"lon": 30.7204
		},
		"category": "shop"
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
		category: locationData.category
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