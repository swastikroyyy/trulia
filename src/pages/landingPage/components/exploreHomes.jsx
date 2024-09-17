import React, { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { ReactComponent as LeftArrowIcon } from 'assets/icons/leftArrow.svg';
import { useMediaQuery } from '@mantine/hooks';
import data from 'lib/customCarousel.json';

const ExploreHomes = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [currentSlide, setCurrentSlide] = useState(0);
  const renderCard = (item, bgColor) => {
    const cardStyles = bgColor ? { backgroundColor: bgColor } : {};

    if (item?.type === 'image-card') {
      return (
        <div className='relative rounded-md lg:h-full mobile:h-auto group overflow-hidden cursor-pointer'>
          <img
            src={item?.image}
            alt={item?.title}
            className='object-cover w-full h-full rounded-md transition-transform duration-300 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-gradient-custom rounded-md'></div>
          <div className='absolute top-0 p-4 text-white'>
            <h3 className='text-2xl font-bold text-shadow-custom'>
              {item?.title}
            </h3>
          </div>
          <div className='absolute bottom-0 p-4 text-white'>
            {item?.buttonText && (
              <button className='mt-2 px-2  bg-[#F6F9E6] bg-opacity-80 rounded-md  flex items-center  text-primary text-nowrap'>
                <span className='mb-1'> {item?.buttonText} </span>
                <LeftArrowIcon className='w-6 h-6 ml-2' />
              </button>
            )}
          </div>
        </div>
      );
    } else if (item?.type === 'text-card') {
      return (
        <div
          style={cardStyles}
          className='text-white p-4 rounded-md shadow h-full flex flex-col '
        >
          <p className='text-base font-bold'>{item?.title}</p>
          <p className='-mt-1'>{item?.city}</p>
          <p className='text-lg mt-4'>{item?.description}</p>
        </div>
      );
    }
    return null;
  };

  const renderStackedCard = (topCard, bottomCard) => (
    <div className='flex flex-col gap-4 h-full rounded-md shadow'>
      <div className='relative h-48 rounded-md shadow '>
        {renderCard(topCard, topCard?.bgColor)}
      </div>
      <div className='relative h-48 rounded-md shadow'>
        {renderCard(bottomCard, bottomCard?.bgColor)}
      </div>
    </div>
  );

  const imageCards = data?.filter((item) => item?.type === 'image-card');
  const textCards = data?.filter((item) => item?.type === 'text-card');

  const transformedData = [];
  const patterns = [
    { type: 'single', bgColor: null },
    { type: 'stack-text-image', bgColor: '#6B7780' },
    { type: 'stack-image-image', bgColor: null },
    { type: 'single', bgColor: null },
    { type: 'stack-image-text', bgColor: '#144225' },
    { type: 'stack-image-image', bgColor: null },
    { type: 'single', bgColor: null },
    { type: 'stack-image-image', bgColor: null },
    { type: 'stack-text-image', bgColor: '#052286' },
    { type: 'single', bgColor: null },
    { type: 'stack-image-image', bgColor: null },
    { type: 'stack-image-text', bgColor: '#00565D' },
  ];

  patterns.forEach(({ type, bgColor }) => {
    if (type === 'single') {
      if (imageCards?.length > 0) {
        transformedData?.push({
          type: 'single',
          card: imageCards?.shift(),
          bgColor: null,
        });
      } else if (textCards?.length > 0) {
        transformedData?.push({
          type: 'single',
          card: textCards?.shift(),
          bgColor: bgColor,
        });
      }
    } else if (type === 'stack-text-image') {
      if (textCards?.length > 0 && imageCards?.length > 0) {
        transformedData?.push({
          type: 'stacked',
          topCard: { ...textCards?.shift(), bgColor: bgColor },
          bottomCard: imageCards?.shift(),
        });
      }
    } else if (type === 'stack-image-image') {
      if (imageCards?.length > 1) {
        transformedData?.push({
          type: 'stacked',
          topCard: imageCards?.shift(),
          bottomCard: imageCards?.shift(),
        });
      }
    } else if (type === 'stack-image-text') {
      if (imageCards?.length > 0 && textCards?.length > 0) {
        transformedData?.push({
          type: 'stacked',
          topCard: imageCards?.shift(),
          bottomCard: { ...textCards?.shift(), bgColor: bgColor },
        });
      }
    }
  });

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className='relative my-6 ml-4'>
      <p className='text-center font-bold text-4xl !text-primary'>
        Explore homes on Trulia
      </p>
      <p className='text-center py-2 text-base my-3 !text-primary'>
        Take a deep dive and browse homes for sale, original neighborhood
        photos, resident <br /> reviews and local insights to find what is right
        for you.
      </p>
      <Carousel
        slideSize={isMobile ? '80%' : '24%'}
        slideGap='md'
        align='start'
        breakpoints={[{ maxWidth: 'md', slideGap: 20, slideSize: '100%' }]}
        withControls
        draggable={false}
        dragFree={false}
        loop
        nextControlProps={{
          style: {
            visibility:
              currentSlide >= transformedData?.length - 1 ? 'hidden' : 'visible',
          },
        }}
        previousControlProps={{
          style: {
            visibility: currentSlide === 0 ? 'hidden' : 'visible',
          },
        }}
        onSlideChange={handleSlideChange}
      >
        {transformedData?.map((item, index) => {
          if (item?.type === 'stacked') {
            return (
              <Carousel.Slide key={`stacked-${index}`}>
                {renderStackedCard(item?.topCard, item?.bottomCard)}
              </Carousel.Slide>
            );
          } else if (item.type === 'single') {
            return (
              <Carousel.Slide key={`single-${index}`}>
                {renderCard(item?.card, item?.bgColor)}
              </Carousel.Slide>
            );
          }
          return null;
        })}
      </Carousel>
    </div>
  );
};

export default ExploreHomes;
