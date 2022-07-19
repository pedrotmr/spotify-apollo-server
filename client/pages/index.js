import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Playlist from "../components/Playlists";

export const GET_PLAYLISTS = gql`
  query GetExchangeRates {
    getPlaylists {
      playlists {
        items {
          name
          href
          images {
            url
          }
        }
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_PLAYLISTS);
  const [playlists, setPlaylists] = useState();

  useEffect(() => {
    data && setPlaylists(data.getPlaylists.playlists?.items);
  }, [data]);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (error) return <p style={{ textAlign: "center" }}>Error loading playlists...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Head>
          <title>Spotify GraphQL</title>
        </Head>
        <h1 className={styles.title}>Welcome to Spotify GraphQL Client</h1>
        <p className={styles.description}>
          Small web application to display a few different playlists.
        </p>

        <div className={styles.grid}>
          {playlists && <Playlist playlists={playlists} />}
        </div>
      </div>
    </div>
  );
}
