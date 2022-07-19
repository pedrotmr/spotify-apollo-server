import styles from "../styles/Home.module.css";
import Image from "next/image";

const Playlists = ({ playlists }) => {
  return playlists.map((playlist, playlistId) => (
    <div role='playlists' className={styles.card} key={playlistId}>
      <Image width={200} height={200} src={playlist.images[0].url} />
      <h4>{playlist.name}</h4>
    </div>
  ));
};

export default Playlists;
