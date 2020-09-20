const { ApolloServer }  = require('apollo-server');
const typeDefs          = require('./schema');
const resolvers         = require('./resolvers');

const PORT = 4001;


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({port : PORT}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
