import { _fetch } from "../apiToken";

export const resolvers = {
  Query: {
    getPlaylists: async () => {
      const response = await _fetch(
        `https://api.spotify.com/v1/browse/featured-playlists?market=US`
      );
      return response;
    },
  },
};
