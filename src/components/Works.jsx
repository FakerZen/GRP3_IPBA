import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full"></div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>
          Overview of our Promotional Plan
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Target Audience</h2>
      </motion.div>

      <div className={`${styles.paddingX} w-full flex`}>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Novice programmers who are struggling to learn coding concepts or
          individuals with no prior coding experience who are interested in
          learning how to code.
        </motion.p>
      </div>

      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Promotional Objectives:</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className= {`${styles.paddingX} mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]`}
      >
        <strong>Our goal is to become the go-to resource for novice programmers.</strong> We want
        to build brand awareness and recognition within this community, driving
        traffic to our streaming platform and nurturing leads for future courses
        or workshops. Ultimately, we aim to establish ourselves as a trusted
        voice in programming education, helping beginners overcome their coding
        hurdles and unlock their potential.
        
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "plan");
