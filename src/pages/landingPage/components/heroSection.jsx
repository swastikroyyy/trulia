import { Tabs, TextInput } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as SearchIcon } from 'assets/icons/searchIcon.svg';
import { ReactComponent as SearchPrimaryIcon } from 'assets/icons/searchIconBlue.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/closeIcon.svg';
import { ReactComponent as LocationIcon } from 'assets/icons/location.svg';
import { ReactComponent as CurrentLocationIcon } from 'assets/icons/currentLocation.svg';
import { ReactComponent as CarIcon } from 'assets/icons/car.svg';
import bannerImage from 'assets/icons/banner.jpg';

const HeroSection = ({ setTabValue }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [searchValue, setSearchValue] = useState('Bartlesville, OK');
  const searchRef = useRef(null);

  
  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setIsEditing(false); 
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputClick = () => {
    setIsEditing(true); 
  };

  const handleCancel = () => {
    setIsEditing(false); 
    setSearchValue('Bartlesville, OK');
  };

  return (
    <div
      className='relative !bg-cover bg-center mx-4 h-[75vh] rounded-md mt-16'
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: 'right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
    
      <div className='absolute inset-0 flex flex-col justify-center items-center'>
        <p className='text-white lg:text-[50px] md:text-4xl mobile:text-2xl font-bold text-center px-4 banner mb-11 !tracking-tight !leading-[3.5rem]'>
          Discover a place
          <br />
          you'll love to live
        </p>

       
        <Tabs
          className=''
          variant='pills'
          defaultValue='buy'
          onChange={setTabValue}
          classNames={{
            root: 'tabs-root',
            tab: 'tabDefault tabHover tabSelected tabInactive w-[4em]',
            panel: 'tabs-panel',
            list: 'tabTrans rounded-md !gap-0',
          }}
        >
          <Tabs.List className='tabs-list'>
            <Tabs.Tab value='buy' aria-label='Buy'>
              Buy
            </Tabs.Tab>
            <Tabs.Tab value='rent' aria-label='Rent'>
              Rent
            </Tabs.Tab>
            <Tabs.Tab value='sold' aria-label='Sold'>
              Sold
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>

      
        <div
          className='relative mt-4 flex w-full max-w-lg min-h-14 h-auto'
          ref={searchRef}
        >
         
          {!isEditing ? (
            <div className='flex w-full'>
              <input
                type='text'
                value={searchValue}
                onClick={handleInputClick}
                placeholder='Bartlesville, OK'
                className='w-full px-4 py-2 rounded-l-lg outline-none'
              />
              <button className='px-4 py-2 !bg-[#d93c23] text-white rounded-r-lg'>
                <SearchIcon className='w-8 h-8' />
              </button>
            </div>
          ) : (
            <div className='absolute top-0 left-0 w-full bg-white border rounded-lg shadow-lg py-4 z-20 pb-24'>
              <div className='flex justify-between px-2'>
                <TextInput
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder='Search for City, Neighborhood, Zip, County'
                  className='w-full'
                  leftSection={<SearchPrimaryIcon />}
                  rightSection={
                    searchValue && (
                      <CloseIcon onClick={() => setSearchValue('')} />
                    )
                  }
                  classNames={{
                    input:
                      '!border-4 !border-[#3EB5C0] !rounded-xl !h-12 !text-xl',
                  }}
                />

                <button
                  onClick={handleCancel}
                  className='ml-4 text-blue-500 hover:underline'
                >
                  Cancel
                </button>
              </div>
              <div className=''>
                <div className='cursor-pointer text-[#007882]  px-4 hover:bg-[#E8E9EA] flex items-center gap-x-2 py-2'>
                  <CurrentLocationIcon className='w-4 h-4' />
                  Current Location
                </div>
                <hr className='text-[#F5F6F7]' />
                <div className='cursor-pointer text-[#007882] py-2 px-4 rounded-lg flex items-center gap-x-2 hover:bg-[#E8E9EA]'>
                  <CarIcon className='w-4 h-4' />
                  Search by commute time
                </div>

                <p className='text-[#6B7780] font-bold text-base px-2 mt-3'>
                  Recent Searches
                </p>
                <div className='mt-2 '>
                  <div className='cursor-pointer px-4 flex items-center gap-x-2 hover:bg-[#E8E9EA] py-2'>
                    <LocationIcon className='w-4 h-4' />
                    <div className='text-primary text-[16px]'>
                      Bartlesville, OK
                      <p className='text-[11px] !font-light flex '>
                        City •Apartment •Apartment Community •Condo
                      </p>
                    </div>
                  </div>
                  <hr className='text-[#F5F6F7]' />
                  <div className='cursor-pointer hover:bg-[#E8E9EA] py-2 px-4  flex items-center gap-x-2'>
                    <LocationIcon className='w-4 h-4' />
                    <div className='text-primary text-[16px]'>
                      Atlanta, GA
                      <p className='text-[11px] !font-light'>city</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
