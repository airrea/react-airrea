import React,{useState} from 'react';
import axios from 'axios';
import {Input} from "./Input";
import {
  email_validation,
  message_validation,
  name_validation,
  num_validation
} from "../utils/inputValidations";
import {BsFillCheckSquareFill} from "react-icons/bs";
import {FormProvider, useForm} from "react-hook-form";

const Contact = () => {

  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const registerInterest = methods.handleSubmit(async data =>{

    const {name,email,phone,message} = data
    try{
      await axios.post('http://localhost:4000/register-interest', {
        name,
        email,
        phone,
        message
      }).then(()=> {
        methods.reset()
        setSuccess(true);
        setTimeout(() => {setSuccess(false);}, 5000);
      });

    } catch(error) {
      console.log(error.message)
    }
  })


  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
    <div
      className="absolute top-0 left-0 z-[-1] h-1/2 w-full bg-[#B9D3E2] lg:h-[45%] xl:h-1/2"
    ></div>
    <div className="container px-4">
      <div className="-mx-4 flex flex-wrap items-center">
        <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
          <div className="ud-contact-content-wrapper">
            <div className="ud-contact-title mb-12 lg:mb-[150px]">
              <span className="mb-5 text-base font-semibold text-dark">
                REGISTER YOUR INTEREST
              </span>
              <h2 className="text-[35px] font-semibold">
                Got any questions?
                 <br />
                We would love to hear from you!
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
          <div
            className="animate__animated wow animate__fadeInUp rounded-lg bg-white py-10 px-8 shadow-testimonial sm:py-12 sm:px-10 md:p-[60px] lg:p-10 lg:py-12 lg:px-10 2xl:p-[60px]"
            data-wow-delay=".2s"
          >
            <h3 className="mb-8 text-2xl font-semibold md:text-[26px]">
              Register Interest
            </h3>
            <FormProvider{...methods}>
              <form
                  onSubmit={e => e.preventDefault()}
                  noValidate
                  autoComplete="off"
              >
                  <div >
                    <Input{...name_validation}/>
                    <Input{...email_validation}/>
                    <Input{...num_validation}/>
                    <Input{...message_validation}/>
                  </div>
                  <div className="mb-0">
                    {success && (
                        <p className="flex items-center gap-1 mb-5 font-semibold text-green-500">
                          <BsFillCheckSquareFill /> Successfully Submitted
                        </p>
                    )}
                    <button
                        onClick={registerInterest}
                        type="submit"
                        className="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark"
                    >
                      Send Message
                    </button>
                  </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact