import React from "react";

import { logoTest } from "../assets";

/* Renders a header section with the following elements:
    
  Navigation: A navigation bar containing an image logo (retrieved from logoTest) on the left side 
    and a "GitHub" button on the right side. 
    
  Title and Description: The header includes a title consisting of two lines. The first line reads 
  "Summarise any article with:", followed by a line break. The second line displays "OpenAI GPT-4" 
  with a gradient effect.
    
  App Description: A subheading that provides a description of the web app. */

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logoTest} alt='logo' className='w-30 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/adamross94", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarise any <br className='max-md:hidden' />article with: <br className='max-md:hidden' />
      </h1>
      <h1 className='head_text blues_gradient pt-2'>OpenAI GPT-4</h1>
      <h2 className='desc pt-2'>
      'AI Article Summariser' is a simple web app built upon OpenAI's API, using the GPT-4 model to condense and summarise the content of a URL. 
      The app incorporates ReactJS, TailwindCSS, Redux Toolkit and RapidAPI to achieve its overall functionality. 
      </h2>
    </header>
  );
};

export default Hero;