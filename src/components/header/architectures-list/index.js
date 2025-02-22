import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { PROJECTS } from "@constants";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

export function ArchitecturesList({ onClose, mode }) {
  return (
    <div
      className={`${styles.architecture_container} ${styles[mode]}`}
      onClick={onClose}
    >
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.close}
          onClick={onClose}
        />
        <div className={styles.list}>
          {PROJECTS.map((project) => (
            <article key={project.number} className={styles.list_item}>
              <Image
                priority
                quality={60}
                src={project.primaryImage}
                className={styles.image}
                alt={project.name}
              />
              <Link href={"#"} className={styles.name}>
                {project.name}
                <FontAwesomeIcon icon={faAngleRight} className={styles.angle} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
