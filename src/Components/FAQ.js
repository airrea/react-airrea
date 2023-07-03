import React from 'react'

const FAQ = () => {
  return (
    <section
      className="relative z-20 overflow-hidden bg-[#B9D3E2] pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2
                className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]"
              >
                Any Questions? Answered
              </h2>
              <p
                className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed"
              >
                Airrea is a platform that will become a valuable tool for property investors and potential buyers in the near future,
                here are some commonly asked questions.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className=" animate__animated single-faq wow animate__fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8"
              data-wow-delay=".1s
              "
            >
              <button className="faq-btn flex w-full items-center text-left">
                <div
                  className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary"
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-base font-semibold text-black sm:text-lg">
                    When will Airrea be available?
                  </h4>
                </div>
              </button>
              <div className="faq-content hidden pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color">
                  Airrea is scheduled to launch in March 2024. Stay tuned and sign up for our newsletter for the latest updates and developments.
                  We're excited to have you on board!

                </p>
              </div>
            </div>
            <div
              className="animate__animated single-faq wow animate__fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8"
              data-wow-delay=".15s
              "
            >
              <button className="faq-btn flex w-full items-center text-left" >
                <div
                  className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary"
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-base font-semibold text-black sm:text-lg">
                    How can Airrea help me source properties?
                  </h4>
                </div>
              </button>
              <div className="faq-content hidden pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color">
                  Airrea provides a comprehensive database of various property deals across all real estate sectors in the UK.
                  Whether you're looking for residential, commercial, or industrial properties, we present all the available options in a single,
                  easy-to-navigate platform. You can search, filter, and compare properties according to your investment goals
                </p>
              </div>
            </div>
            <div
              className="animate__animated single-faq wow animate__fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8"
              data-wow-delay=".2s
              "
            >
              <button className="faq-btn flex w-full items-center text-left">
                <div
                  className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary"
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-base font-semibold text-black sm:text-lg">
                    How does Airrea provide a trusted enviroment?
                  </h4>
                </div>
              </button>
              <div className="faq-content hidden pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color">
                  At Airrea, trust and security are paramount. We perform rigorous verification of all sellers on our platform to ensure you're dealing with genuine property owners and operators.
                  Additionally, we've partnered with industry-leading service providers such as Harper James Solicitors and Cator Wells Investment Firm to provide expert advice and assistance.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="animate__animated single-faq wow animate__fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8"
              data-wow-delay=".1s
              "
            >
              <button className="faq-btn flex w-full items-center text-left">
                <div
                  className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary"
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-base font-semibold text-black sm:text-lg">
                    How is Airrea different to other property platforms?
                  </h4>
                </div>
              </button>
              <div className="faq-content hidden pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color">
                  Unlike other property platforms, Airrea focuses on serving investors. Our platform is built around a rich database of property deals, reliable seller verification,
                  and connection to industry leaders, making us a comprehensive solution for property investors. We aim to democratize property investment by making it accessible, transparent, and efficient.
                </p>
              </div>
            </div>
            <div
              className="animate__animated single-faq wow animate__fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8"
              data-wow-delay=".15s
              "
            >
              <button className="faq-btn flex w-full items-center text-left">
                <div
                  className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary"
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-base font-semibold text-black sm:text-lg">
                    How does Airrea protect home buyers?
                  </h4>
                </div>
              </button>
              <div className="faq-content hidden pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color">
                  We protect home buyers by ensuring every property deal on our platform comes from a verified seller. Our rigorous verification process aims to weed out any fraudulent activity,
                  giving you peace of mind as you make your investment. Additionally, our partnership with Harper James Solicitors can assist you with legal services throughout your property buying process.
                </p>
              </div>
            </div>
            <div
              className="animate__animated single-faq wow animate__fadeInUp mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8"
              data-wow-delay=".2s
              "
            >
              <button className="faq-btn flex w-full items-center text-left">
                <div
                  className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary"
                >
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    className="icon fill-current"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="text-base font-semibold text-black sm:text-lg">
                    How does Airrea help me sell properties?
                  </h4>
                </div>
              </button>
              <div className="faq-content hidden pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color">
                  If you're looking to sell, Airrea can connect you with a broad network of investors seeking property deals. Simply list your property and let our platform do the work.
                  Once an investor is interested, they can get in touch with you directly through Airrea, simplifying and speeding up the selling process. Our verification process also benefits sellers by fostering trust among our user community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default FAQ