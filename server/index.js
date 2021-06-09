const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const config = require('./dev');
const port = parseInt(process.env.PORT, 10) || 4000;

const server = new ApolloServer({ typeDefs, resolvers })
const app = express();
server.applyMiddleware({ app });

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB connected')
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error)
})

app.listen(port, () => {
  console.log(`🚀 Server ready at ${port}`);
});