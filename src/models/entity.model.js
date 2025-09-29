const entities = [
	{
		"id": "1",
		"name": "Іван Петренко",
		"description": "Власник мережі ресторанів української кухні",
		"type": "person",
		"locations": ["1", "5", "10", "18", "22", "35", "47", "59", "75", "89"]
	},
	{
		"id": "2",
		"name": "Київпарк",
		"description": "Комунальне підприємство з утримання парків та скверів",
		"type": "organization", 
		"locations": ["2", "6", "14", "29", "30", "36", "38", "43", "48", "54"]
	},
	{
		"id": "3",
		"name": "Олена Коваленко",
		"description": "Директор мережі музеїв та галерей",
		"type": "person",
		"locations": ["3", "7", "17", "23", "25", "31", "33", "40", "57", "61"]
	},
	{
		"id": "4",
		"name": "Ретейл Груп",
		"description": "Торгова мережа супермаркетів та торгових центрів",
		"type": "organization",
		"locations": ["4", "8", "21", "24", "26", "27", "42", "50", "55", "60"]
	},
	{
		"id": "5",
		"name": "Андрій Шевченко",
		"description": "Підприємець у сфері громадського харчування",
		"type": "person",
		"locations": ["12", "16", "20", "37", "56", "62", "73", "78", "83", "88"]
	},
	{
		"id": "6",
		"name": "БудІнвест",
		"description": "Будівельно-інвестиційна компанія",
		"type": "organization",
		"locations": ["11", "15", "19", "34", "41", "44", "49", "52", "69", "91"]
	},
	{
		"id": "7",
		"name": "Марина Сидоренко",
		"description": "Куратор культурних та освітніх проектів",
		"type": "person",
		"locations": ["13", "28", "58", "63", "65", "68", "70", "71", "77", "79"]
	},
	{
		"id": "8",
		"name": "Офіс Солюшнс",
		"description": "Компанія з управління офісними приміщеннями",
		"type": "organization",
		"locations": ["45", "72", "81", "84", "94", "96", "97", "92", "80", "90"]
	},
	{
		"id": "9",
		"name": "Степан Мельник",
		"description": "Власник торгових точок та бутіків",
		"type": "person",
		"locations": ["64", "66", "76", "93", "95", "98", "39", "51", "67", "74"]
	},
	{
		"id": "10",
		"name": "Універсальні Послуги",
		"description": "Компанія з надання різноманітних комунальних послуг",
		"type": "all",
		"locations": ["9", "32", "46", "53", "85", "86", "87", "99", "100", "82"]
	}
];

const getAllEntities = () => {
	return entities;
};

const getEntityById = (id) => {
	return entities.find(entity => entity.id === id);
};

const addEntity = (entityData) => {
	const maxId = Math.max(...entities.map(entity => parseInt(entity.id)));
	const newId = (maxId + 1).toString();
	
	const newEntity = {
		id: newId,
		name: entityData.name,
		description: entityData.description || '',
		type: entityData.type,
		locations: entityData.locations || []
	};
	
	entities.push(newEntity);
	return newEntity;
};

const updateEntity = (id, entityData) => {
	const entityIndex = entities.findIndex(entity => entity.id === id);
	
	if (entityIndex === -1) {
		return null;
	}
	
	entities[entityIndex] = {
		...entities[entityIndex],
		...entityData,
		id: id
	};
	
	return entities[entityIndex];
};

const deleteEntity = (id) => {
	const entityIndex = entities.findIndex(entity => entity.id === id);
	
	if (entityIndex === -1) {
		return null;
	}
	
	const deletedEntity = entities[entityIndex];
	entities.splice(entityIndex, 1);

	return deletedEntity;
};

module.exports = {
	getAllEntities,
	getEntityById,
	addEntity,
	updateEntity,
	deleteEntity
};