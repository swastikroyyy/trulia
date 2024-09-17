import React, { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import data from 'lib/newListing.json';
import { useMediaQuery } from '@mantine/hooks';
import { ReactComponent as BedIcon } from 'assets/icons/bedIcon.svg';
import { ReactComponent as BathIcon } from 'assets/icons/bathIcon.svg';
import { ReactComponent as AreaIcon } from 'assets/icons/areaIcon.svg';
const NewlyListedHome = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div className=' my-6 mt-12 ml-4'>
      <p className='text-center font-bold text-4xl !text-primary pb-8'>
        Newly listed homes in Bartlesville
      </p>

      <Carousel
        slideSize={isMobile ? '80%' : '19%'}
        slideGap='md'
        align='start'
        breakpoints={[{ maxWidth: 'md', slideGap: 20, slideSize: '100%' }]}
        withControls
        draggable={false}
        dragFree={false}
        loop
        previousControlProps={{
          style: {
            visibility: activeSlide === 0 ? 'hidden' : 'visible',
          },
        }}
        onSlideChange={setActiveSlide}
      >
        {data?.map((item, index) => {
          return (
            <Carousel.Slide key={index}>
              <>
                <div className='relative  rounded-md h-44 cursor-pointer'>
                  <img
                    src={item?.image}
                    alt={item?.id}
                    className='object-cover w-full h-full rounded-md '
                  />
                  <div className='absolute inset-0 bg-gradient-custom rounded-md'></div>
                  <div className='absolute top-0 m-2 px-1 text-[#052286] bg-white rounded'>
                    <h3 className='text-[12px] font-bold '>{item?.opening}</h3>
                  </div>
                  <div className='absolute bottom-0 p-4 text-white'></div>
                </div>
                <p className='text-xl font-bold mt-2'>{item?.price}</p>
                <div className='flex items-center font-base text-primary gap-x-1'>
                  <p className='flex items-center font-base text-primary'>
                    <BedIcon className='w-6 h-6' />
                    {item?.bed}bd
                  </p>
                  <p className='flex items-center font-base text-primary'>
                    <BathIcon className='w-6 h-6' />
                    {item?.bathroom}ba
                  </p>
                  <p className='flex items-center font-base text-primary'>
                    <AreaIcon className='w-6 h-6' />
                    {item?.size}sqf..
                  </p>
                </div>
                <p className='text-base text-primary'>{item?.address}</p>
                <p className='text-base text-primary'>{item?.city}</p>
                <p className='text-[10px] mt-2 uppercase'>{item?.agency}</p>
              </>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </div>
  );
};

export default NewlyListedHome;
