const mongoose = require('mongoose');

const grievanceSchema = mongoose.Schema({
  customerName: { type: String, required: true },
  email: { type: String, required: true },
  issue: { type: String, required: true },
  status: { type: String, default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Grievance', grievanceSchema);
