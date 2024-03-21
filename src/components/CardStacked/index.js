"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import Image from "next/image";
let interval;

const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 3000);
  };

  return (
    <div className={styles.wrapper}>
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className={styles.card}
            style={{
              transformOrigin: "right center",
              backgroundColor: card.bgColor,
            }}
            animate={{
              right: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className={styles.container}>
            <Image src={card.imgSrc} alt={"card"} width={300} height={200} className={styles.thumbnailImage} />
            <div className={styles.title}>{card.text}</div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CardStack;
