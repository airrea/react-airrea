import React from 'react'
// {useEffect} from 'react'
import Hero from './Hero'
import Features from './Features'
import About from './About'
import Team from './Team'
import FAQ from './FAQ'
import Contact from './Contact'

const Home = () => {
    const handleClick = (elementId, event) => {
        // Prevent the default behavior of the <a> tag
        event.preventDefault();

        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({
            top: 50,
            behavior: 'smooth',

          });
        }
      }

  return (
    <>
      <Hero handleClick={handleClick}/>
    {/* Hero Section End  */}
    {/* Feature Section start */}
    <Features />
    {/* feature section end */}

    {/* about section start  */}
    <About/>
    {/* about section end */}
    {/* team section start */}
    <div id='#team'>
    <Team />
    </div>
    {/* team section end */}

    {/* faq section start */}
    <FAQ />
    {/* faq section end  */}
    {/* contact section start */}
    <Contact />
    {/* contact section end  */}


    </>
  )
}

export default Home