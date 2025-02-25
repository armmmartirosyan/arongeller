import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBuilding } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "./index.module.scss";

export function ArchitectureContent({ project }) {
  return (
    <div className={styles.content}>
      <div className={styles.left_part}>
        <div className={styles.left_part_container}>
          <h1 className={styles.title}>Architecture</h1>

          <div className={styles.text_container}>
            <p className={styles.project_title}>{project.name}</p>
            <p className={styles.project_location}>
              <FontAwesomeIcon
                icon={faLocationDot}
                className={styles.location_icon}
              />
              {project.location}
            </p>
            <p className={styles.project_buildinng_type}>
              <FontAwesomeIcon
                icon={faBuilding}
                className={styles.building_icon}
              />
              {project.buildingType}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.right_part}>
        {project.images.map((image, index) => (
          <div className={styles.image_wrapper} key={index}>
            <Image
              loading="eager"
              priority
              quality={60}
              src={image.src}
              alt={image.alt}
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
