
'use client';
import { useState } from "react";
import action from "@/actions/Action";
import {z} from "zod";

function ContactUs() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div id="join" className="h-auto w-full rounded-md flex flex-col items-center justify-center mx-auto py-12 gap-6 md:gap-8 md:flex-row"> 
    <div className="flex flex-col items-center gap-3 md:gap-4 w-full md:w-1/2 text-center py-8 px-4 md:px-0"> 
      <h1 className="mt-4 md:mt-0 mb-2 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r h-20 from-white to-blue-500">
        Contact Us
      </h1> 
        {!isSubmitted ? (
          <form action="submit" className="flex flex-col items-center gap-2 w-80 relative">
            <div className="flex flex-col w-full relative">
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 pl-4 pr-10 w-full border border-gray-300 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center justify-center bg-black text-white rounded-full p-2 m-1"
                onClick={(e) => {
                  e.preventDefault();
                  const res = z.string().email()
                  const result = res.safeParse(email)

                  if (result.success) {
                    (async () => {
                      
                      await action(email);
                    })();
                    console.log(email);
                    setEmail('');
                    setIsSubmitted(true);
                  }
                  else{
                    const emailElement = document.getElementById('email');
                    emailElement?.classList.add('text-red-600')
                    setEmail("Not an Email");
                    setTimeout(()=>{
                      const emailElement = document.getElementById('email');
                      emailElement?.classList.remove('text-red-600')
                      setEmail('')
                    }, 700)
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
        ) : (
          <p  className="mt-2 md:mt-0 text-1xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            Thank You , We will reach out to you
            </p>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
