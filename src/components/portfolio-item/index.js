"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "nuka-carousel";
import Image from "next/image";
import { LettersPullUp } from "@components";
import styles from "./index.module.scss";

export function PortfolioItem({ item }) {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Carousel
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
        <p className={styles.location_container}>
          <FontAwesomeIcon
            icon={faLocationDot}
            className={styles.location_icon}
          />
          <LettersPullUp className={styles.location}>
            {item.location}
          </LettersPullUp>
        </p>
      </div>
    </section>
  );
}
