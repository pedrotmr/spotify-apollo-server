import { describe, test, beforeEach } from "@jest/globals";
import { ApolloServer, gql } from "apollo-server";
import { resolvers } from "../graphql/resolvers";
import { typeDefs } from "../graphql/typeDefs";

const server = new ApolloServer({ typeDefs, resolvers });

describe("get featured playlists", () => {
  let GET_PLAYLISTS;

  beforeEach(() => {
    GET_PLAYLISTS = gql`
      query {
        getPlaylists {
          playlists {
            items {
              name
              images {
                url
              }
            }
          }
        }
      }
    `;
  });

  test("playlists must be queried, thus not null", async () => {
    const response = await server.executeOperation({ query: GET_PLAYLISTS });
    expect(response).toBeTruthy();
    expect(response.errors).toBeUndefined();
  });

  test("list of playlists must have 12 items", async () => {
    const response = await server.executeOperation({ query: GET_PLAYLISTS });
    const { items } = response.data?.getPlaylists?.playlists;
    expect(items).toBeTruthy();
    expect(Object.keys(items)).toHaveLength(12);
  });
});
