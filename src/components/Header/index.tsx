import { forwardRef, useState } from "react";
import styles from "./style.module.css";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";

const Header = forwardRef<HTMLDivElement>(function Index(props, ref) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <div
            ref={ref}
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.button}>
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
});

export default Header;
