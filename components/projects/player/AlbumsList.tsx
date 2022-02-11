import { ReactElement } from "react";
import styles from "@styles/Player.module.scss";
import { Album } from "types/Player";
import AlbumLabel from "./AlbumLabel";

interface AlbumListProps {
  albums: Album[];
}

const AlbumsList = ({ albums }: AlbumListProps): ReactElement => {
  const albumsList = albums.map((item) => (
    <AlbumLabel {...item} key={item._id} />
  ));

  return (
    <div id={styles.albumsList}>
      <div className={styles.albumHeader}>
        <h1>Albums</h1>
      </div>
      {albumsList}
    </div>
  );
};

export default AlbumsList;
