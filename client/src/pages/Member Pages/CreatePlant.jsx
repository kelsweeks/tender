import React from 'react';

import Header from '../partials/Header';

function CreatePlant() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Create A Plant</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                      <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="location">location <span className="text-red-600">*</span></label>
                      <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter the plant's location" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="type">Type <span className="text-red-600">*</span></label>
                      <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter the type of plant" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="care">Care <span className="text-red-600">*</span></label>
                      <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter plant care" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Create Plant</button>
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </div>
        </section>
      </main>
    </div>
  );
}

export default CreatePlant;