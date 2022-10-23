import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/Rectangle 1.png';

const Home = () => {
  const [placeName, setPlaceName] = useState('sajek');
  return (
    <div className="relative">
      <img
        src={heroImage}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-7xl sm:leading-none uppercase">
                {placeName}
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                You will love the places in Bangladesh. Specially <span className="lowercase">{placeName}</span> is the beautiful place you visit in your all visits.
              </p>
              <Link
                to={`/booking/${placeName}`}
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-black bg-guru-color p-4"
              >
                Booking
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              {/* scroll snap */}
              <div className="grid grid-cols-2 gap-4 p-10">
                <button onClick={()=> setPlaceName('sajek')} className="relative block overflow-hidden rounded-xl bg-sajek-image bg-cover bg-center bg-no-repeat">
                  <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                    4.5
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-4 w-4 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                  <div className="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
                    <h3 className="text-2xl font-bold">Sajek</h3>
                  </div>
                </button>
                <button onClick={()=> setPlaceName('sundorbon')} className="relative block overflow-hidden rounded-xl bg-sundorbon-image bg-cover bg-center bg-no-repeat">
                  <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                    4.5
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-4 w-4 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                  <div className="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
                    <h3 className="text-2xl font-bold">Sundorban</h3>
                  </div>
                </button>
                <button onClick={()=> setPlaceName('sreemongol')} className="relative block overflow-hidden rounded-xl bg-sreemongol-image bg-cover bg-center bg-no-repeat">
                  <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                    4.5
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-4 w-4 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                  <div className="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
                    <h3 className="text-2xl font-bold">Sreemongol</h3>
                  </div>
                </button>
                <button onClick={()=> setPlaceName('nilgiri')} className="relative block overflow-hidden rounded-xl bg-sundorbon-image bg-cover bg-center bg-no-repeat">
                  <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                    4.5
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-4 w-4 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>
                  <div className="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
                    <h3 className="text-2xl font-bold">Nilgiri</h3>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;