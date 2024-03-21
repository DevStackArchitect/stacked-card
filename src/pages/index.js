import Head from "next/head";
import Image from "next/image";
import { Josefin_Sans } from "next/font/google";
import styles from "@/styles/Home.module.css";
import CardStack from "@/components/CardStacked";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const CardData = [
  {
    id: 1,
    bgColor: "#F4F6FF",
    text: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    imgSrc:"https://images.unsplash.com/photo-1670093179011-06eae060bbf9?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    bgColor: "#E6EAFF",
    text: "Some other test text to check the animation",
    imgSrc:"https://images.unsplash.com/photo-1677638252372-bc53025387c1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    bgColor: "#DAE0FF",
    text: "Another text to check the animation of the cards",
    imgSrc: "https://plus.unsplash.com/premium_photo-1708799051096-d3e74c870d54?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];
export default function Home() {
  return (
      <>
        <Head>
          <title>Stacked Animated Card Slider</title>
          <meta name="description" content="Stacked animated card slider" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={josefinSans.className}>
          <CardStack items={CardData} offset={10} scaleFactor={0.1} />
        </main>
      </>
  );
}
