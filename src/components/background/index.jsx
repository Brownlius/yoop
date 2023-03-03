import { motion } from "framer-motion";
import styles from "./index.module.scss";


const background = ({children, onClick}) => {
  return (
    <motion.div
      className={styles.background}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
export default background;
