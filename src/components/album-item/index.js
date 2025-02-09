import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";

export function AlbumItem({ album, className }) {
  return (
    <article className={`${styles.container} ${className}`}>
      <Image
        src={album.primaryImage}
        className={styles.image}
        alt={album.name}
      />
      <div className={styles.name_container}>
        <h2 className={styles.name}>{album.name}</h2>
        <FontAwesomeIcon icon={faArrowUpLong} className={styles.arrow} />
      </div>
    </article>
  );
}
