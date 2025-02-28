"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "nuka-carousel";
import Image from "next/image";
import styles from "./index.module.scss";

export function PortfolioItem({ item }) {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Carousel
          // renderCenterLeftControls={({ previousSlide }) => (
          //   <button onClick={previousSlide}>leg</button>
          // )}
          // renderCenterRightControls={({ nextSlide }) => (
          //   <button onClick={nextSlide}>lll</button>
          // )}
          className={styles.carousel}
          scrollDistance="slide"
          wrapMode="wrap"
          showArrows
          swiping
        >
          {item.images.map((image, index) => (
            <figure className={styles.item} key={index}>
              <Image
                loading="eager"
                priority
                quality={60}
                src={image}
                className={styles.image}
                alt={item.name}
              />
            </figure>
          ))}
        </Carousel>

        <p className={styles.name}>
          {item.name}
          {item.shortDescription && ` - ${item.shortDescription}`}
        </p>
        <p className={styles.location}>
          <FontAwesomeIcon
            icon={faLocationDot}
            className={styles.location_icon}
          />
          {item.location}
        </p>
      </div>
    </section>
  );
}
