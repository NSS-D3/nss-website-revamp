import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { forwardRef, useLayoutEffect, useRef } from "react";
import styles from "./flower.module.scss";

gsap.registerPlugin(ScrollTrigger);

interface FlowerProps {
  onStemComplete?: () => void;
}

const Flower = forwardRef<HTMLDivElement, FlowerProps>(
  ({ onStemComplete }, ref) => {
    const pathRef = useRef<SVGPathElement>(null);

    // Initialize the path to be invisible immediately on mount
    useLayoutEffect(() => {
      if (pathRef.current) {
        const pathLength = pathRef.current.getTotalLength();
        // Set the stroke properties immediately to prevent flash
        pathRef.current.style.strokeDasharray = `${pathLength}`;
        pathRef.current.style.strokeDashoffset = `${pathLength}`;
      }
    }, []);

    useGSAP(
      () => {
        const stemPath = pathRef.current;
        if (!stemPath) return;

        const pathLength = stemPath.getTotalLength();
        
        // Ensure the path is set up correctly for animation
        gsap.set(stemPath, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });
        
        gsap.fromTo(
          stemPath,
          {
            strokeDashoffset: pathLength,
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
            ease: "none",
            onComplete: () => {
              if (onStemComplete) {
                onStemComplete();
              }
            },
          }
        );
      },
      { dependencies: [] }
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
            ref={pathRef}
            d="M43.2437 -13C10.4681 49.8102 71.1778 117.04 48.3289 184.061C28.8935 241.129 -7.43485 276.136 26.525 335.362C42.6167 363.374 73.1283 393.996 69.1228 428.481C64.7689 466.341 50.6625 501.104 31.0877 533.779C8.97034 570.7 3.57168 607.133 19.4196 649.1C28.1272 672.205 41.7459 702.027 46.3784 726.247"
            stroke="#fed7aa"
            strokeWidth="20"
            strokeMiterlimit="10"
          ></path>
        </svg>
      </div>
    );
  }
);

export default Flower;
