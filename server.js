const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const grievanceRoutes = require('./routes/grievanceRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Routes
app.use('/api/grievances', grievanceRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
