const Grievance = require('../models/Grievance');

// Get all grievances
const getGrievances = async (req, res) => {
  try {
    const grievances = await Grievance.find();
    res.status(200).json(grievances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new grievance
const createGrievance = async (req, res) => {
  const { customerName, email, issue } = req.body;

  try {
    const newGrievance = await Grievance.create({ customerName, email, issue });
    res.status(201).json(newGrievance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getGrievances, createGrievance };
