
const locationModel = require('../models/location.model');

exports.getAllLocations = (req, res, next) => {
	try {
		const locations = locationModel.getAllLocations();
		res.status(200).json(locations);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getLocationById = (req, res, next) => {
	try {
		const location = locationModel.getLocationById(req.params.id);
		if (!location) {
			return res.status(404).json({ error: 'Location not found' });
		}
		res.status(200).json(location);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.addLocation = (req, res, next) => {
	try {
		const newLocation = locationModel.addLocation(req.body);
		res.status(201).json(newLocation);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

exports.updateLocation = (req, res, next) => {
	try {
		const updatedLocation = locationModel.updateLocation(req.params.id, req.body);
		if (!updatedLocation) {
			return res.status(404).json({ error: 'Location not found' });
		}
		res.status(200).json(updatedLocation);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

exports.deleteLocation = (req, res, next) => {
	try {
		const deletedLocation = locationModel.deleteLocation(req.params.id);
		if (!deletedLocation) {
			return res.status(404).json({ error: 'Location not found' });
		}
		res.status(200).json({ message: 'Location deleted successfully', location: deletedLocation });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};