import React from "react";
import { features } from "./../Constants/index";
import styles, { layout } from "./../Styles";
import { motion } from "framer-motion";
import { fadeIn } from "./../Constants/variants";

const FeatureCard = ({ icon, nameSensor, content, index }) => {
  return (
    <motion.div
      id="Cards"
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView={"show"}
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {nameSensor}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
          {content}
        </p>
      </div>
    </motion.div>
  );
};

export default function AboutUs() {
  return (
    <section id="About-Us" className={`${layout.section} `}>
      <div className={`${layout.sectionInfo} `}>
        <h2 className={styles.heading2}>
          Hermes is equipped <br className="sm:bolck " /> with precise sensors
        </h2>
        <p className={`${styles.paragraph} max-w-[490px] mt-5`}>
          En 1879 se usaron 37 gatos para entregar et correo a algunos pueblos.
          Sin embargo, se dieron cuenta de que no eran los suficientemente
          disciplinados para continuar la tarea y se abandonó el proyecto.
        </p>
      </div>
      <div className={`${layout.sectionImg} flex-col `}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}
