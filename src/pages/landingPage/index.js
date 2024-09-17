import { useState } from 'react';
import ExploreHomes from './components/exploreHomes';
import FindHelp from './components/findHelp';
import Header from './components/header';
import HeroSection from './components/heroSection';
import NewlyListedHome from './components/newlyListedHome';
const Landingpage = () => {
  const [tabValue, setTabValue] = useState('buy');
  return (
    <div>
      <Header />
      <HeroSection setTabValue={setTabValue} />
      {tabValue === 'rent' ? (
        <>
          <NewlyListedHome />
          <FindHelp />
          <ExploreHomes />
        </>
      ) : (
        <>
          <ExploreHomes />
          <NewlyListedHome />
          <FindHelp />
        </>
      )}
    </div>
  );
};

export default Landingpage;
