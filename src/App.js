import dice from "./img/icon-dice.svg";
import dividerMob from "./img/pattern-divider-mobile.svg";
import { useEffect, useState } from "react";
// import Loader from './Component/Loader'
import { motion } from "framer-motion";
import Loader from "./Component/Loader";
import Button from "./Component/Button";
import Quotes from "./Component/Quotes";
function App() {
  const [loader, setLoader] = useState(true);
  const [quote, setQuoteData] = useState([]);

  async function fetchAPI() {
    try {
      setLoader(true);
      const result = await fetch("https://api.adviceslip.com/advice");
      const data = await result.json();
      setQuoteData(data.slip);
      setLoader(false);
    } catch (e) {
      setLoader(true);
      console.log(e);
    }
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  function generateNewQuotes() {
    fetchAPI();
  }

  const mainVariant = {
    start: { width: 0, height: 0, borderRadius: ["100%", "50%"] },
    end: { width: 360, height: 360, borderRadius: "5%" },
    transition: { delay: 0.5, duration: 1.5 },
  };

  const textVariant = {
    start: { opacity: 0 },
    end: { opacity: 1 },
    transition: { delay: 2.5, duration: 1.5 },
  };

  const buttonContainerVariant = {
    start: { y: -30, boxShadow: "0px 0px 20px hsl(150, 100%, 66%)" },
    end: { y: 0, boxShadow: "0px 0px 0px hsl(150, 100%, 66%)" },
    transition: { delay: 1, duration: 1.5 },
  };

  return loader ? (
    <Loader />
  ) : (
    <div className="flex min-h-screen items-center justify-center bg-neutral-Dark-Blue font-main">
      <motion.main
        variants={mainVariant}
        initial={mainVariant.start} // from
        animate={mainVariant.end} // to
        transition={mainVariant.transition}
        className=" relative flex w-[70%] flex-col items-center justify-evenly rounded-md bg-neutral-Dark-Grayish-Blue p-8 text-center lg:w-[480px]"
      >
        <article className=" mb-4">
          <motion.h1
            variants={textVariant}
            initial={textVariant.start}
            animate={textVariant.end}
            transition={textVariant.transition}
            className="mb-4 text-lg text-primary-Neo-Green"
          >
            Advice #{quote.id}
          </motion.h1>

          <Quotes textVariant={textVariant} advice={quote.advice} />
        </article>

        <motion.img
          variants={textVariant}
          animate={textVariant.end}
          initial={textVariant.start}
          transition={textVariant.transition}
          className="mb-4"
          src={dividerMob}
          alt="diverMobile"
        />

        <motion.div
          variants={buttonContainerVariant}
          initial={buttonContainerVariant.start}
          animate={buttonContainerVariant.end}
          transition={buttonContainerVariant.transition}
          className="absolute left-auto bottom-[-1.6rem] flex justify-center rounded-full "
        >
          <Button generateNewQuotes={generateNewQuotes} dice={dice} />
        </motion.div>
      </motion.main>
    </div>
  );
}

export default App;
