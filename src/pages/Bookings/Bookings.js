import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import heroImage from '../../assets/images/Rectangle 1.png';

const Bookings = () => {
  const place = useLoaderData();
  const [dateInfo, setDateInfo] = useState({
    fromDate: '',
    toDate: ''
  });

  // const today = dateInfo.fromDate;
  // console.log(today.toLocaleDateString())

  return (
    <div>
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
                  {place?.name}
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">{place?.placeDetails}</p>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                {/* booking info */}
                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white text-black">
                  <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Hotel Bookings</h1>
                    <p className="text-sm dark:text-gray-400">Please select destinations and date</p>
                  </div>
                  <form className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="origin" className="block mb-2 text-sm">Origin</label>
                        <input type="text" name="origin" id="origin" placeholder="Dhaka" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-white text-black" />
                      </div>
                      <div>
                        <label htmlFor="destination" className="block mb-2 text-sm">Destination</label>
                        <input type="text" name="destination" id="destination" value={place?.name} placeholder="Dhaka" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-white text-black"  readOnly/>
                      </div>
                      <div>
                        {/* dates */}
                        <div className="flex justify-between gap-4">
                          <div>
                            <label htmlFor="destination" className="block mb-2 text-sm">From</label>
                            <input onBlur={(e)=> setDateInfo({...dateInfo, fromDate: e.target.valueAsDate})} type="date" name="destination" id="destination" placeholder="Dhaka" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-white text-black" />
                          </div>
                          <div>
                            <label htmlFor="destination" className="block mb-2 text-sm">To</label>
                            <input onBlur={(e) => setDateInfo({...dateInfo, toDate: e.target.valueAsDate})} type="date" name="destination" id="destination" placeholder="Dhaka" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-white text-black" />
                          </div>
                        </div>
                      </div>
                      {/* <div>
                        <div className="flex justify-between mb-2">
                          <label htmlFor="password" className="text-sm">Password</label>                          
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                      </div> */}
                    </div>
                    <div className="space-y-2">
                      <div>
                        <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-guru-color text-gray-900">Start Booking</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;