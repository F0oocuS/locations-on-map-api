const entityModel = require('../models/entity.model');
const locationModel = require('../models/location.model');

const transformEntityWithFullLocations = (entity) => {
	return {
		...entity,
		locations: entity.locations.map(locationId => 
			locationModel.getLocationById(locationId)
		).filter(location => location !== undefined)
	};
};

exports.getAllEntities = (req, res, next) => {
	try {
		const entities = entityModel.getAllEntities();
		const entitiesWithFullLocations = entities.map(transformEntityWithFullLocations);
		res.status(200).json(entitiesWithFullLocations);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getEntityById = (req, res, next) => {
	try {
		const entity = entityModel.getEntityById(req.params.id);
		if (!entity) {
			return res.status(404).json({ error: 'Entity not found' });
		}
		const entityWithFullLocations = transformEntityWithFullLocations(entity);
		res.status(200).json(entityWithFullLocations);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.addEntity = (req, res, next) => {
	try {
		const newEntity = entityModel.addEntity(req.body);
		const entityWithFullLocations = transformEntityWithFullLocations(newEntity);
		res.status(201).json(entityWithFullLocations);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

exports.updateEntity = (req, res, next) => {
	try {
		const updatedEntity = entityModel.updateEntity(req.params.id, req.body);
		if (!updatedEntity) {
			return res.status(404).json({ error: 'Entity not found' });
		}
		const entityWithFullLocations = transformEntityWithFullLocations(updatedEntity);
		res.status(200).json(entityWithFullLocations);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

exports.deleteEntity = (req, res, next) => {
	try {
		const deletedEntity = entityModel.deleteEntity(req.params.id);
		if (!deletedEntity) {
			return res.status(404).json({ error: 'Entity not found' });
		}
		const entityWithFullLocations = transformEntityWithFullLocations(deletedEntity);
		res.status(200).json({ message: 'Entity deleted successfully', entity: entityWithFullLocations });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};