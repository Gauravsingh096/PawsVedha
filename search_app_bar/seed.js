const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/searchdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB');

  const searchSchema = new mongoose.Schema({
    breed: String,
    details: String
  });

  const Search = mongoose.model('Search', searchSchema);

  await Search.deleteMany({});

  const data = [
    { breed: 'Labrador Retriever', details: 'Friendly, outgoing, and high-spirited companions.' },
    { breed: 'German Shepherd', details: 'Confident, courageous, and intelligent working dog.' },
    { breed: 'Golden Retriever', details: 'Intelligent, friendly, and devoted sporting breed.' },
    { breed: 'French Bulldog', details: 'Adaptable, playful, and smart with a distinctive bat ear.' },
    { breed: 'Bulldog', details: 'Docile, willful, and friendly with a distinctive pushed-in nose.' },
    { breed: 'Poodle', details: 'Active, proud, and very smart. Comes in three sizes.' },
    { breed: 'Beagle', details: 'Curious, friendly, and merry with a great sense of smell.' },
    { breed: 'Rottweiler', details: 'Confident, fearless, and good-natured guard dog.' },
    { breed: 'German Shorthaired Pointer', details: 'Friendly, smart, and willing to please.' },
    { breed: 'Yorkshire Terrier', details: 'Feisty, affectionate, and small with a big personality.' },
  ];
  await Search.insertMany(data);
  console.log('Database seeded');

  mongoose.connection.close();
});
