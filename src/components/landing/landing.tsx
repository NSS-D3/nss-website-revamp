import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

import { useRef } from "react";
import { useNavigate } from "react-router";
import { staggerTextOptions } from "../../utils/helpers";
import Flower from "./Flower/Flower";
import styles from "./landing.module.scss";
import StaggeredText from "./StaggeredText/StaggeredText";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const flowerRef: any = useRef();
  const navigate = useNavigate();

  useGSAP(
    () => {
      const entryTl = gsap.timeline();

      entryTl
        .to(`.${styles.mainLogo}`, {
          opacity: 0.15,
          duration: 0.5,
          delay: 1,
        })
        .from(`.${styles.title1} .stagger`, staggerTextOptions)
        .from(
          `.${styles.btnWrapper}`,
          {
            opacity: 0,
            duration: 0.5,
          },
          "-=0.5"
        )
        .from(flowerRef.current, {
          opacity: 0,
          duration: 0.5,
        });

      if (window.innerWidth > 550) {
        gsap.from(`.${styles.title2} .stagger`, {
          scrollTrigger: {
            trigger: `.${styles.title2}`,
            start: "top 80%",
            end: "110% bottom",
            markers: false,
          },
          ...staggerTextOptions,
        });
      } else {
        gsap.from(`.${styles.title2} .stagger`, {
          ...staggerTextOptions,
          delay: 2,
        });
      }

      gsap.fromTo(
        flowerRef.current,
        {
          yPercent: window.innerWidth <= 550 ? 50 : 20,
        },
        {
          yPercent: window.innerWidth <= 550 ? 0 : -30,
          duration: 1,
          scrollTrigger: {
            trigger: window.innerWidth <= 550 ? "body" : flowerRef.current,
            start: window.innerWidth <= 550 ? "top top" : "-50% top",
            end: window.innerWidth <= 550 ? "5% top" : "10% top",
            scrub: 2,
            markers: false,
          },
        }
      );
    },
    { dependencies: [] }
  );
  return (
    <main className={styles.wrapper}>
      {/* <div className={styles.btnWrapper}>
        <LandingButton
          text="Our Team"
          onClick={() => {
            navigate("/team");
          }}
        />
      </div> */}
      <div className={styles.content}>
        <div className={styles.title1}>
          <h1>
            <StaggeredText text="Not" />
            <span> </span>
            <StaggeredText text="Me" />
          </h1>
          <h1>
            <StaggeredText text="BUT" />
            <span> </span>
            <StaggeredText text="You" />
          </h1>
        </div>
        <Flower ref={flowerRef} />
        <div className={styles.title2}>
          <h1>
            <StaggeredText text="Byline" />
          </h1>
          <h1>
            <StaggeredText text="Number" />
          </h1>
          <h1>
            <StaggeredText text="Two" />
          </h1>
        </div>
      </div>
      <img src="/logo/logo.svg" className={styles.mainLogo} draggable={false} />
    </main>
  );
}
