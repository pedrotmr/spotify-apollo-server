import { GET_PLAYLISTS } from "../pages/index";

export const successResponse = [
  {
    request: {
      query: GET_PLAYLISTS,
    },
    result: {
      data: {
        getPlaylists: {
          playlists: {
            items: [
              {
                name: "Today's Top Hits",
                href: "https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M",
                images: [
                  {
                    url: "https://i.scdn.co/image/ab67706f000000035c213f4eb727e8c81bbe653e",
                    __typename: "Image",
                  },
                ],
                __typename: "Item",
              },
              {
                name: "Feel Good Dinner",
                href: "https://api.spotify.com/v1/playlists/37i9dQZF1DXbm6HfkbMtFZ",
                images: [
                  {
                    url: "https://i.scdn.co/image/ab67706f000000036188e2ec7f243f5434e889bd",
                    __typename: "Image",
                  },
                ],
                __typename: "Item",
              },
              {
                name: "Groove Theory",
                href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX1tW4VlEfDSS",
                images: [
                  {
                    url: "https://i.scdn.co/image/ab67706f0000000376a3e06aaf57c33ac79b94c0",
                    __typename: "Image",
                  },
                ],
                __typename: "Item",
              },
              {
                name: "Get Turnt",
                href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWY4xHQp97fN6",
                images: [
                  {
                    url: "https://i.scdn.co/image/ab67706f00000003c5763b20f98d237fa8ee4f07",
                    __typename: "Image",
                  },
                ],
                __typename: "Item",
              },
              {
                name: "Folksy Covers",
                href: "https://api.spotify.com/v1/playlists/37i9dQZF1DXcDxnC0UqHJa",
                images: [
                  {
                    url: "https://i.scdn.co/image/ab67706f00000003a2dba0d1f56bc9bdb28b5204",
                    __typename: "Image",
                  },
                ],
                __typename: "Item",
              },
              {
                name: "All New Indie",
                href: "https://api.spotify.com/v1/playlists/37i9dQZF1DXdbXrPNafg9d",
                images: [
                  {
                    url: "https://i.scdn.co/image/ab67706f0000000307b3cda4a81a9339e68a6bd0",
                    __typename: "Image",
                  },
                ],
                __typename: "Item",
              },
              {
                name: "lofi beats",
                href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWWQRwui0ExPn",
                images: [
                  {
                    url: "https://i.scdn.co/image/ab67706f00000003c8114f56f99e3a37159595f6",
                    __typename: "Image",
                  },
                ],
                __typename: "Item",
              },
              {
                name: "Chilled Classical",
                href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWUvHZA1zLcjW",
                images: [
                  {
                    url: "https://i.scdn.co/image/ab67706f0000000313cab9548ae9c021f8cebc32",
                    __typename: "Image",
                  },
                ],
                __typename: "Item",
              },
              {
                name: "Broken Heart",
                href: "https://api.spotify.com/v1/playlists/37i9dQZF1DXbrUpGvoi3TS",
                images: [
                  {
                    url: "https://i.scdn.co/image/ab67706f0000000350f34f0e7a0b73effe02fa6f",
                    __typename: "Image",
                  },
                ],
                __typename: "Item",
              },
              {
                name: "Chill Pop",
                href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX0MLFaUdXnjA",
                images: [
                  {
                    url: "https://i.scdn.co/image/ab67706f00000003ea9ce505df0c78cf552fbb01",
                    __typename: "Image",
                  },
                ],
                __typename: "Item",
              },
            ],
            __typename: "Playlist",
          },
          __typename: "Playlists",
        },
      },
    },
  },
];

export const errorResponse = [
  {
    request: {
      query: GET_PLAYLISTS,
    },
    error: new Error(),
  },
];
