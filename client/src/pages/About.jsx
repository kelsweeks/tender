import React from 'react';
import { Link } from 'react-router-dom';
import Jose from '../images/jose.png';
import Kelsey from '../images/kelsey.png';
import TeamIcon from '../images/team-icon.png';

import Header from '../partials/Header';

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20"></div>
              {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
            </div>
              {/* Items */}
              <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                {/* 1st item */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <img src={Jose} width="200" height="200" rx="32"/>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Jose Simosa</h4>
                  <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                   {/* Social links */}
                  <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                    <li className="ml-4">
                      <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* 2nd item */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <img src={Kelsey} width="200" height="200" rx="32"/>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Kelsey Weeks</h4>
                  <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                {/* 3rd item */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <img src={TeamIcon} width="200" height="200" rx="32"/>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Join the team</h4>
                  <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div> 
          </div>
        </section>
        

      </main>

    </div>
  );
}

export default About;