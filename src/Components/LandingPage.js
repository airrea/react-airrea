import React,{useEffect} from 'react';
import { Link, Outlet } from 'react-router-dom';



const LandingPage = () => {

     // dynamic import and initialise wowjs package
  const loadwow = async()=>{
    const WOW = await import('wowjs');
    new WOW.WOW({live: false}).init();
  }

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






  useEffect(()=>{

      loadwow();
      (function () {
        "use strict";

        // ======= Sticky
        window.onscroll = function () {
          const ud_header = document.querySelector(".ud-header");
          const sticky = ud_header.offsetTop;
          const logo = document.querySelector(".header-logo");

          if (window.pageYOffset > sticky) {
            ud_header.classList.add("sticky");
          } else {
            ud_header.classList.remove("sticky");
          }



          // show or hide the back-top-top button
          const backToTop = document.querySelector(".back-to-top");
          if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
          ) {
            backToTop.style.display = "flex";
          } else {
            backToTop.style.display = "none";
          }
        };

        // ===== responsive navbar
        let navbarToggler = document.querySelector("#navbarToggler");
        const navbarCollapse = document.querySelector("#navbarCollapse");

        navbarToggler.addEventListener("click", () => {
          navbarToggler.classList.toggle("navbarTogglerActive");
          navbarCollapse.classList.toggle("hidden");
        });

        //===== close navbar-collapse when a  clicked
        document
          .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
          .forEach((e) =>
            e.addEventListener("click", () => {
              navbarToggler.classList.remove("navbarTogglerActive");
              navbarCollapse.classList.add("hidden");
            })
          );

        // ===== Sub-menu
        const submenuItems = document.querySelectorAll(".submenu-item");
        submenuItems.forEach((el) => {
          el.querySelector("a").addEventListener("click", () => {
            el.querySelector(".submenu").classList.toggle("hidden");
          });
        });

        // ===== Faq accordion
        const faqs = document.querySelectorAll(".single-faq");
        faqs.forEach((el) => {
          el.querySelector(".faq-btn").addEventListener("click", () => {
            el.querySelector(".icon").classList.toggle("rotate-180");
            el.querySelector(".faq-content").classList.toggle("hidden");
          });
        });



        // ====== scroll top js
        function scrollTo(element, to = 0, duration = 500) {
          const start = element.scrollTop;
          const change = to - start;
          const increment = 20;
          let currentTime = 0;

          const animateScroll = () => {
            currentTime += increment;

            const val = Math.easeInOutQuad(currentTime, start, change, duration);

            element.scrollTop = val;

            if (currentTime < duration) {
              setTimeout(animateScroll, increment);
            }
          };

          animateScroll();
        }

        Math.easeInOutQuad = function (t, b, c, d) {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        document.querySelector(".back-to-top").onclick = () => {
          scrollTo(document.documentElement);
        };
      })();
},[]);



return (
    <>
  <div className="scroll-smooth bg-img" >
      {/* Navbar section start */}
      <div className=" relative ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-2/5 max-w-full py-3 px-6">
            <div  onClick={(event) => handleClick('home', event)} className="navbar-logo block w-full py-5">
              <img
                src='/assets/images/airrea.png'
                alt="logo"
                className="header-logo "

              />
            </div>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                id="navbarToggler"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-white "
                ></span>
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-white"
                ></span>
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-white"
                ></span>
              </button>
              <nav
                id="navbarCollapse"
                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-black py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6 "
              >
                <ul className="blcok lg:flex">
                  <li className="group relative">
                    <a
                    onClick={(event) => handleClick('home', event)}
                      href="#home"
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-black lg:group-hover:text-black lg:group-hover:opacity-70"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group relative">
                    <a
                      href="#about"
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-black lg:group-hover:text-black lg:group-hover:opacity-70 xl:ml-12"
                      onClick={(event) => handleClick('about', event)}
                    >
                      About
                    </a>
                  </li>
                  <li className="group relative">
                    <a
                      href="#team"
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-black lg:group-hover:text-black lg:group-hover:opacity-70 xl:ml-12"
                      onClick={(event) => handleClick('team', event)}
                    >
                      Team
                    </a>
                  </li>
                  <li className="group relative">
                    <a
                    onClick={(event) => handleClick('contact', event)}
                      href="#contact"
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-black lg:group-hover:text-black lg:group-hover:opacity-70 xl:ml-12"
                    >
                      Contact
                    </a>
                  </li>

                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              {/*<a*/}
              {/*  href="signin.html"*/}
              {/*  className="signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-3 text-base font-medium text-black duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark mx-1"*/}
              {/*>*/}
              {/*  Blog*/}
              {/*</a>*/}
              {/*<Link*/}
              {/*  to='/timeline'*/}
              {/*  className="signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-3 text-base font-medium text-black duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark mx-1"*/}
              {/*>*/}
              {/*  Timeline*/}
              {/*</Link>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Navbar section End  */}


  {/* Outlet */}
  <Outlet />

  {/* Outlet */}


  </div>
  <a
      // href="javascript:void(0)"
      className="back-to-top fixed bottom-8 right-8 left-auto z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark"
  >
    <span
        className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"
    ></span>
  </a>
  </>


  )
  }



export default LandingPage