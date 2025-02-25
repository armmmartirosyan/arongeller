import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";
import Link from "next/link";

export function AlbumItem({ album, className, textContainerClass }) {
  return (
    <article className={`${styles.container} ${className}`}>
      <Image
        loading="eager"
        priority
        quality={60}
        src={album.primaryImage}
        className={styles.image}
        alt={album.name}
      />
      <div className={`${styles.name_container} ${textContainerClass}`}>
        <h2 className={styles.name}>{album.name}</h2>
        <Link
          href={`/architecture/${album.number}`}
          className={styles.link_container}
        >
          <p className={styles.link}>Details</p>
          <FontAwesomeIcon icon={faArrowUpLong} className={styles.arrow} />
        </Link>
      </div>
    </article>
  );
}
