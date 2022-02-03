const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

//console.log(typeDefs);

// resolvers object needs to mirror the typeDefs exactly (Query=Query, greeting=greeting)
const resolvers = {
  Query: {
    greeting: () => 'Hello GraphQL world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: 9000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
