const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const Schema = require('./schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: Schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => console.log('App running on port 4000'));