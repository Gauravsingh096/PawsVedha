const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(cors());

// MongoDB 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/searchdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

//schema and model for the dog breeds
const searchSchema = new mongoose.Schema({
  breed: String,
  details:String
});

const Search = mongoose.model('Search', searchSchema);

// API  to search for dog breeds
app.get('/search', async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.send([]);
  }

  try{
    const results = await Search.find({
      breed: { $regex: query, $options: 'i' },
    });
    res.send(results);
  } catch (error) {
    res.status(500).send({ message: 'Server Error' });
  }
});
//breed details by breed name
app.get('/breed-details', async (req, res) => {
    const breed = req.query.breed;
    if (!breed) {
      return res.status(400).send({ message: 'Breed name is required' });
    }
  
    try {
      const breedDetails = await Search.findOne({ breed: breed });
      if (!breedDetails) {
        return res.status(404).send({ message: 'Breed not found' });
      }
      res.send(breedDetails);
    } catch (error) {
      res.status(500).send({ message: 'Server Error' });
    }
  });

// new breed 
app.post('/add', async (req, res) => {
  const { breed } = req.body;

  if (!breed) {
    return res.status(400).send({ message: 'Breed is needed' });
  }

  const newEntry = new Search({ breed, details });

  try {
    await newEntry.save();
    res.status(201).send({ message: 'New breed added' });
  } catch (error) {
    res.status(500).send({ message: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ///////////////////////////////
// gety details 
const getBreedDetailsByName = async (breedName) => {
  try {
    const breedDetails = await Search.findOne({ breed: breedName });
    if (!breedDetails) {
      throw new Error('Breed not found');
    }
    return breedDetails;
  } catch (error) {
    throw new Error('Failed to fetch breed details');
  }
};
app.get('/breed-details', async (req, res) => {
  const breed = req.query.breed;
  
  try {
    if (!breed) {
      throw new Error('Breed name is required');
    }

    const breedDetails = await Search.findOne({ breed: breed });

    if (!breedDetails) {
      throw new Error('Breed not found');
    }

    res.send(breedDetails);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});

