import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Nav from "../src/component/Nav";
import image1 from "../public/asset/1.jpeg";
import image2 from "../public/asset/2.jpeg";
import image3 from "../public/asset/3.jpeg";
import image4 from "../public/asset/4.jpeg";
import MySwiper from "../src/component/MySwiper";

const Home: NextPage = () => {
  const HeroArray = [image1, image2, image3, image4];

  // try out different carousel
  const tryCarousel = (
    <>
      <MySwiper />
    </>
  );

  return (
    <>
      <div className="bg-red-500 mt-40 ml-10 flex ">
        <Nav />
        <div className="carousel w-[800px] h-[400px] relative ml-0">
          {tryCarousel}
        </div>
      </div>
    </>
  );
};

export default Home;
