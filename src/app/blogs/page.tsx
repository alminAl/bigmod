import React from 'react';
import LatestStories from './_components/LatestStories';
import { StaffPicks } from './_components/StaffPicks';
import Contact from '@/components/home/Contact';

const Blogs = () => {
  return (
    <div>
      <LatestStories />
      <StaffPicks />
      <Contact />
    </div>
  );
};

export default Blogs;
