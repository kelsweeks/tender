import React from 'react';
import { Link } from 'react-router-dom';

import Jose from '../images/jose.png';
import Kelsey from '../images/kelsey.png';
import TeamIcon from '../images/team-icon.png';

import Header from '../partials/Header';

function PlantTenderList() {
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
              <h2 className="h2 mb-4">Plant Tenders</h2>
              <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
            </div>
              {/* Items */}
              <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                {/* 1st item */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <img src={Jose} width="200" height="200" rx="32"/>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Jose Simosa</h4>
                  <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                {/* 2nd item */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <img src={Kelsey} width="200" height="200" rx="32"/>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Kelsey Weeks</h4>
                  <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                {/* 3rd item */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <img src={Kelsey} width="200" height="200" rx="32"/>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Kelsey Weeks</h4>
                  <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                {/* 4th item */}
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <img src={Kelsey} width="200" height="200" rx="32"/>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Kelsey Weeks</h4>
                  <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                {/* 5th item */}
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

export default PlantTenderList;