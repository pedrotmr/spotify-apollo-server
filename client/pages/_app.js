import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//       query TestQuery {
//         getPlaylists {
//           playlists {
//             items {
//               name
//               href
//               images {
//                 url
//               }
//             }
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result.data));

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
