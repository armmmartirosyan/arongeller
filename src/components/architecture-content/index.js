"use client";

import { motion } from "framer-motion";
import { blurIn, opacityScale } from "@utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBuilding } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "./index.module.scss";

export function ArchitectureContent({ project }) {
  return (
    <div className={styles.content}>
      <div className={styles.left_part}>
        <motion.div
          className={styles.left_part_bg}
          {...opacityScale({ duration: 0.8 })}
        />
        <div className={styles.left_part_container}>
          <h1 className={styles.title}>Architecture</h1>

          <div className={styles.text_container}>
            <p className={styles.project_title}>{project.name}</p>
            <p className={styles.project_location_container}>
              <FontAwesomeIcon
                icon={faLocationDot}
                className={styles.location_icon}
              />
              <motion.span
                {...blurIn({ duration: 0.8, once: true })}
                className={styles.project_location}
              >
                {project.location}
              </motion.span>
            </p>
            <p className={styles.project_buildinng_type}>
              <FontAwesomeIcon
                icon={faBuilding}
                className={styles.building_icon}
              />
              <motion.span
                {...blurIn({ duration: 0.8, once: true })}
                className={styles.project_buildinng_type}
              >
                {project.buildingType}
              </motion.span>
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
