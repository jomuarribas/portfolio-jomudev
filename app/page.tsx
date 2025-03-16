"use client";
import { useEffect, useRef } from "react";
import Desktop from "./components/desktop/Desktop";
import Header from "./components/Header/Header";
import NavDown from "./components/NavDown/NavDown";
import { motion } from "framer-motion";
import { useWindowManager } from "./context/windowManagerContext";
import Welcome from "./components/info/welcome";

export default function Home() {
  const { addWindow } = useWindowManager();

  const hasOpenedWelcome = useRef(false);

  useEffect(() => {
    if (!hasOpenedWelcome.current) {
      if (window.innerWidth < 768) {
        addWindow("Bienvenid@", <Welcome />, "95%", "70%");
        hasOpenedWelcome.current = true;
      } else {
        addWindow("Bienvenid@", <Welcome />, "50%", "60%");
        hasOpenedWelcome.current = true;
      }
    }
  }, [addWindow]);

  return (
    <div>
      <motion.div
        className="flex flex-col text-white items-center space-x-2 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="200.000000pt"
          height="140.000000pt"
          viewBox="0 0 990.000000 1084.000000"
          preserveAspectRatio="xMidYMid meet"
          className="text-sky-300"
        >
          <g
            transform="translate(0.000000,1084.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="none"
          >
            <path
              d="M7587 10403 l-708 -425 7 -3906 7 -3907 -1224 -729 -1224 -728 2
-122 c2 -66 6 -226 9 -353 6 -231 6 -233 28 -228 11 3 120 20 241 40 693 109
1160 252 1689 517 306 153 874 482 1384 801 l513 321 -2 4440 c-2 2443 -5
4500 -8 4573 l-6 131 -708 -425z"
            />
            <path
              d="M4675 10294 c-1476 -94 -2794 -799 -3677 -1964 -544 -719 -872 -1557
-975 -2490 -24 -217 -24 -763 0 -980 69 -623 233 -1189 497 -1715 100 -200
247 -454 266 -462 10 -3 624 324 642 342 3 3 -10 28 -28 57 -350 556 -554
1133 -637 1803 -25 197 -24 731 0 930 63 510 188 940 402 1380 586 1204 1722
2064 3035 2299 286 51 401 60 750 60 349 0 464 -9 750 -60 269 -48 580 -137
813 -232 l97 -40 0 397 0 398 -149 47 c-311 99 -675 175 -1011 211 -138 15
-644 27 -775 19z"
            />
            <path
              d="M4220 8271 l-1835 -1089 -5 -1961 -5 -1962 -695 -408 -695 -409 -3
-845 -2 -845 832 485 c458 267 1088 634 1401 816 l567 330 0 2091 0 2091 416
250 c229 138 421 251 425 253 5 2 10 -1117 11 -2550 l3 -2554 713 429 712 429
0 3269 c0 1798 -1 3269 -2 3269 -2 0 -829 -491 -1838 -1089z"
            />
            <path
              d="M8560 8127 l0 -607 62 -108 c266 -461 442 -1008 515 -1597 25 -201
25 -732 -1 -935 -72 -584 -244 -1118 -514 -1594 l-62 -109 0 -606 1 -606 51
55 c625 677 1065 1582 1218 2503 53 325 64 459 64 827 0 367 -11 511 -64 828
-155 925 -593 1823 -1218 2502 l-51 55 -1 -608z"
            />
          </g>
        </svg>
        <p className="text-4xl text-sky-200">jomuDev</p>
      </motion.div>
      <Header />
      <Desktop />
      <NavDown />
    </div>
  );
}
