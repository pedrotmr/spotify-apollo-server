import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    getPlaylists: Playlists
  }

  type Playlists {
    playlists: Playlist
    message: String
  }

  type Playlist {
    href: String
    items: [Item]
    limit: Int
    next: String
    offset: Int
    total: Int
  }

  type Item {
    images: [Image]
    name: String
    id: ID
    href: String
  }

  type Image {
    url: String
    height: Int
    width: Int
  }
`;