import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

{/* Created by Yogesh Tripathi and Pranav Deval Pandey */}

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./threejs.png'
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                Shop <br className="xl:block hidden" /> Wizard
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              
              <p className="max-w-md font-normal text-gray-600 text-base">
              ShopWizard is a revolutionary 3-D Fashion Customizer app that harnesses the power of Generative AI to transform the shopping experience in offline Shopping malls.You can effortlessly customize fashion items, like t-shirts, by altering colors, patterns, and generating AI-driven logos and designs. This innovative approach redefines the shopping mall experience, allowing customers to channel their creativity and receive personalized fashion products that resonate with their individual style preferences.
              </p>

              <CustomButton 
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home