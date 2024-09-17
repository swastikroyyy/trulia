import React from 'react';
import { ReactComponent as BuyAHomeIcon } from 'assets/icons/buyAHome.svg';
import { ReactComponent as NeighborhoodsIcon } from 'assets/icons/neighborhoods.svg';
import { ReactComponent as RentAHomeIcon } from 'assets/icons/rentAHome.svg';
import PrimaryButton from 'components/primaryButton';
const FindHelp = () => {
  return (
    <div className='py-6'>
      <p className='text-center font-bold text-4xl text-primary'>
        See how Trulia can help
      </p>

      <div className='flex md:justify-between flex-col md:flex-row md:px-4 lg:px-48'>
        <div className='text-center'>
          <BuyAHomeIcon className='w-32 h-32 !m-auto ' />

          <p className='text-2xl font-bold mb-3 text-primary'>Buy a home</p>
          <p className='text-base text-primary'>
            With over 1 million+ homes for <br /> sale available on the website,
            <br /> Trulia can match you with a house <br /> you will want to
            call home.
          </p>
          <div className='pt-6'>
            <PrimaryButton>Find a home</PrimaryButton>
          </div>
        </div>
        <div className='text-center'>
          <RentAHomeIcon className='w-32 h-32 !m-auto' />
          <p className='text-2xl font-bold mb-3 text-primary'>Rent a home</p>
          <p className='text-base text-primary'>
            With 35+ filters and custom <br /> keyword search, Trulia can help
            <br /> you easily find a home or <br /> apartment for rent that
            you'll <br />
            love.
          </p>
          <div className='pt-6'>
            <PrimaryButton>Find a rental</PrimaryButton>
          </div>
        </div>
        <div className='text-center'>
          <NeighborhoodsIcon className='w-32 h-32 !m-auto' />
          <p className='text-2xl font-bold mb-3 text-primary'>
            See neighborhoods
          </p>
          <p className='text-base text-primary'>
            With more neighborhood insights <br /> than any other real estate{' '}
            <br /> website, we've captured the color <br /> and diversity of
            communities.
          </p>
          <div className='pt-6'>
            <PrimaryButton>Learn more</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindHelp;
