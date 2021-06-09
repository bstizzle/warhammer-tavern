const { ApolloServer } = require("apollo-server-lambda");
const express = require('express');
const mongoose = require('mongoose');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB connected')
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error)
})

app.listen("/.netlify/functions/graphql", () => {
  console.log(`🚀 Server ready at "/.netlify/functions/graphql"`);
});

exports.handler = server.createHandler();