import React from "react";
import { Nav, Hero, AboutUs } from "./../components/ImportComponents";
import styles from "./../Styles";

export default function Layout() {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Nav />
        </div>
      </div>
      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutUs />
        </div>
      </div>
    </div>
  );
}
