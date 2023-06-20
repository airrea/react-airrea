import React from 'react'

const About = () => {
  return (
    <section
    id="about"
      
      className="bg-[#cce0eb] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]"
    >
      <div  className="container">
       
       
        <div className="animate__animated wow animate__fadeInUp bg-white" data-wow-delay=".4s">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="items-center justify-between overflow-hidden border lg:flex"
              >
                <div
                
                  className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]"
                >
                  <span
                    className="mb-5 inline-block bg-primary py-2 px-5 text-sm font-medium text-white"
                  >
                    About Us
                  </span>
                  <h2
                    className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]"
                  >
                    Discover All The Information Behind a Postcode
                  </h2>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    The main focus of Airrea is to provide comprehensive information on the local area and neighbourhood.
                    Using interactive geomaps, data tables and trend graphs, Airrea persents all the characteristics that may influence home buying decisions, 
                    including crime rates, local amenities, transportation links, schools and more. 
                  </p>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    By using Airrea, you gain a competitive advantage over other home investors. Comprehensive data combined with the ability to personalize the 
                    liveability metrics most important to you, makes Airrea a vital tool in the successful property investors arsenal. 
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
                  >
                    Learn More
                  </a>
                </div>
                <div className="text-center">
                  <div className="relative z-10 inline-block">
                    <img
                      src="assets/images/liveability.png"
                      alt="image"
                      className="mx-auto lg:ml-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About