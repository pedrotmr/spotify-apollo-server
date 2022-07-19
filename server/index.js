import { ApolloServer } from "apollo-server";
import { _fetch } from "./apiToken";
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/typeDefs";

const server = new ApolloServer({ typeDefs, resolvers, playground: true, introspection: true });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
