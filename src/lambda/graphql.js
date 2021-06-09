const { ApolloServer } = require("apollo-server-lambda");
const mongoose = require('mongoose');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

const MONGODB_URI = process.env.MONGODB_URI

console.log(MONGODB_URI)
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB connected')
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error)
})

exports.handler = server.createHandler();