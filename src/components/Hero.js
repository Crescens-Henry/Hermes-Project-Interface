import React from "react";
import TankRobot from "./../Assets/Img/TankRobot.png";
import styles from "./../Styles";
import GetStarted from "./atoms/GetStarted";
import { motion } from "framer-motion";
import { fadeIn } from "./../Constants/variants";

export default function Hero() {
  return (
    <motion.section
      id="Home"
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView={"show"}
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          Hermes is an explorer robot that serves to support remote monitoring
        </div>

        <div className="flex flex-row justify-between items-center w-3/4">
          <h1 className="flex-none font-pppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
            the next <br className="sm:block hidden" />{" "}
            <span className=" text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-pppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full">
          of robotic support
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          The investigation of the development of a scouting robot to help
          different occupations, such as use in hard-to-reach places this type
          of technology could play a crucial role in the exploration and
          response to emergency situations.
        </p>
      </div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        className="hidden md:flex justify-around"
      >
        <div
          className={`flex-1 flex ${styles.flexStart} md:my-0 my-10 relative`}
        >
          <img
            src={TankRobot}
            alt="robot"
            className="w-[100%] h-[100%] relative z-[5]"
          />
          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
      </motion.div>
    </motion.section>
  );
}
