import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';
import {ReactComponent as CheckMark} from '../images/checkmark.svg';
import {ReactComponent as Rating} from '../images/icon-rating.svg';
import {ReactComponent as TrustPilot} from '../images/five-star-trust-pilot.svg';


function Features() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8 body-left">
                <h1 className="h2 mb-4">Time is Running Out! Maximize Your COVID Relief Funds</h1>
                <ul className="benefits">
                  <li><CheckMark /> Get up to 2.5x monthly payroll costs</li>
                  <li><CheckMark /> 100% fully forgivable loan potential</li>
                  <li><CheckMark /> Impacted businesses get up to $33,000 per employee</li>
                  <li><CheckMark /> SBA programs up to $500,000</li>
                </ul>
                <div className="grid grid-cols-2">
                  <div className="mx-auto">
                    <Rating width="125px" height="125px" />
                  </div>
                  <div className="mx-auto">
                    <TrustPilot width="125px" height="125px" />
                  </div>
                </div>
                <p className="disclosures">Rates for the Paycheck Protection Program (“PPP”) are at 1%. PPP loans are made by one or more approved U.S. Small Business Administration (“SBA”) lenders. Loan agreements will identify the appropriate lender to small businesses at signing. Funds are limited, and may not be available at this time. Once funds are available, qualified applications will be submitted to the SBA. BlueVine does not guarantee that applications will be processed and submitted before PPP funds are no longer available. There are no fees for applying for PPP. Approval and loan forgiveness are subject to your ability to meet government-set eligibility requirements.</p>
                <p className="disclosures">To help the government fight financial crime, Federal regulation requires certain financial institutions to obtain, verify, and record information about the beneficial owners of legal entity customers at the time a new account is opened. Legal entities can be abused to disguise involvement in terrorist financing, money laundering, tax evasion, corruption, fraud, and other financial crimes. Requiring the disclosure of key individuals who own or control a legal entity (i.e., the beneficial owners) helps law enforcement investigate and prosecute these crimes.</p>
                <p className="disclosures">Please note, the SBA has limited loan forgiveness for applicants who are self employed. Per SBA rules, if you do not have formal business expenses that you report on your Schedule C, you will be limited to having 75% of your loan forgiven.</p>
              </div>
            </div>

            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 pt-24" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                <form className="w-full lg:w-auto">
                  <input type="text" className="w-full appearance-none border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-4 sm:mr-2 text-white placeholder-gray-500" placeholder="First Name" aria-label="First Name" />
                  <input type="text" className="w-full appearance-none border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-4 sm:mr-2 text-white placeholder-gray-500" placeholder="Last Name" aria-label="Last Name" />
                  <input type="text" className="w-full appearance-none border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-4 sm:mr-2 text-white placeholder-gray-500" placeholder="E-Mail" aria-label="E-Mail" />
                  <input type="email" className="w-full appearance-none border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-4  sm:mr-2 text-white placeholder-gray-500" placeholder="Company" aria-label="Company" />
                  <input type="tel" className="w-full appearance-none border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-4 sm:mr-2 text-white placeholder-gray-500" placeholder="Phone" aria-label="Phone" />
                  <select className="w-full mb-4">
                    <option value="">How Many Employees</option>
                    <option value="1-24">1-24</option>
                    <option value="25-49">25-49</option>
                    <option value="50-99">50-99</option>
                    <option value="100-249">100-249</option>
                    <option value="250-499">250-499</option>
                    <option value="500+">500+</option>
                  </select>
                  <input className="w-full px-4 py-3 bg-blue-500 text-white rounded-full" type="submit" value="Get Started" />
                </form>
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
