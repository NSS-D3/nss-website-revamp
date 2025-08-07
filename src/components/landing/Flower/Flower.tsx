import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { forwardRef, useRef, useLayoutEffect } from "react";
import styles from "./flower.module.scss";

gsap.registerPlugin(ScrollTrigger);

interface FlowerProps {
  onStemComplete?: () => void;
}

const Flower = forwardRef<HTMLDivElement, FlowerProps>(
  ({ onStemComplete }, ref) => {
    const stemRef = useRef<SVGPathElement>(null);

    useLayoutEffect(() => {
      // Set initial state immediately to prevent flash
      if (stemRef.current) {
        stemRef.current.style.strokeDashoffset = '781.4827880859375px';
      }
    }, []);

    useGSAP(
      () => {
        // Double-check the initial state
        gsap.set(`.${styles.stem} path`, {
          strokeDashoffset: 781.4827880859375,
        });

        const stemAnimation = gsap.fromTo(
          `.${styles.stem} path`,
          {
            strokeDashoffset: 781.4827880859375,
          },
          {
            scrollTrigger: {
              trigger: `.${styles.container}`,
              start: "44% 20%",
              end: "170% 20%",
              markers: false,
              scrub: 2,
            },
            strokeDashoffset: 0,
            onComplete: () => {
              if (onStemComplete) {
                onStemComplete();
              }
            },
          }
        );
      },
      { dependencies: [onStemComplete] }
    );

    return (
      <div className={styles.container} ref={ref}>
        <div className={styles.flower}>
          <div className={styles.wrapper}>
            <img
              className={styles.pink}
              src="/flower/pink.svg"
              alt="Pink petals of flower"
            />
          </div>
          <div className={styles.wrapper}>
            <img
              className={styles.purple}
              src="/flower/purple.svg"
              alt="Purple petals of flower"
            />
          </div>
          <div className={styles.wrapper}>
            <img
              className={styles.green}
              src="/flower/green.svg"
              alt="Green petals of flower"
            />
          </div>
          <div className={styles.wrapper}>
            <img
              className={styles.orange}
              src="/flower/orange.svg"
              alt="Orange petals of flower"
            />
          </div>
          <div className={styles.wrapper}>
            <img
              className={styles.yellow}
              src="/flower/yellow.svg"
              alt="Yellow petals of flower"
            />
          </div>
        </div>
        <svg
          aria-hidden="true"
          viewBox="0 0 80 702"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.stem}
        >
        <path
          ref={stemRef}
          d="M43.2437 -13C10.4681 49.8102 71.1778 117.04 48.3289 184.061C28.8935 241.129 -7.43485 276.136 26.525 335.362C42.6167 363.374 73.1283 393.996 69.1228 428.481C64.7689 466.341 50.6625 501.104 31.0877 533.779C8.97034 570.7 3.57168 607.133 19.4196 649.1C28.1272 672.205 41.7459 702.027 46.3784 726.247"
          stroke="#fed7aa"
          strokeWidth="20"
          strokeMiterlimit="10"
          style={{
            strokeDasharray: "781.4827880859375px",
          }}
        ></path>
        </svg>
      </div>
    );
  }
);

export default Flower;
