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
                    Airrea is revolutionising property investment in the UK. Founded on the principles of transparency, inclusivity, innovation, and integrity,
                    we are on a mission to democratise access to lucrative property deals and make investing simple and seamless for everyone, regardless of experience or background.
                  </p>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    At Airrea, we understand the complexities of the property market and the challenges faced by investors, from identifying the right opportunities
                    to managing transactions. That's why we've created a platform that connects you with verified sellers, offering a wide variety of property deals
                    across all real estate sectors. Whether you're a seasoned investor or a novice, we provide you with the tools, data, and connections you need to succeed in your property investment journey.
                  </p>

                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    Join us as we redefine property investment in the UK. Discover the Airrea advantage today.
                  </p>
                  {/*<a*/}
                  {/*  href="#contact"*/}
                  {/*  className="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"*/}
                  {/*>*/}
                  {/*  Learn More*/}
                  {/*</a>*/}
                </div>
                <div className="text-center">
                  <div className="relative z-10 inline-block">
                    <img
                      src="assets/images/signUp.png"
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