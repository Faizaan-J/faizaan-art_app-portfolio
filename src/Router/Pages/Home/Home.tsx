import { motion, stagger } from "motion/react";
import getCurrentGradeFromGraduationYear from "./GraduationYear";
import { graduationYear, school } from "../../../Constants";

import Wave from "../../../Components/Wave/Wave";

import "./Home.css";

const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

const gradeName = getCurrentGradeFromGraduationYear(graduationYear);
const schoolName = school.name;

const Home = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                visible: { transition: { delayChildren: stagger(0.2, { startDelay: 0.2 }) } },
            }}
        >
            <motion.h1 variants={fadeInDown}>Hello!</motion.h1>
            <motion.h1 variants={fadeInDown} style={{ fontSize: "5em" }}>
                <Wave />
            </motion.h1>
            <motion.h2 variants={fadeInDown}>My name is Faizaan Jamil.</motion.h2>
            <motion.h2 variants={fadeInDown}>I am a {gradeName} at {schoolName}.</motion.h2>
        </motion.div>
    )
}

export default Home;