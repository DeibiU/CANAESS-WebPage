import React from 'react';
import '../AboutUs.css';
import ProfilePanels from './ProfilePanels/Profile';

interface AboutUsProps {
  
}

const AboutUs = ({}: AboutUsProps) => {
  return (
    <div className="AboutUs">
      <div>
        <ProfilePanels/>
        <ProfilePanels/>
        <ProfilePanels/>
        <ProfilePanels/>
      </div>
    </div>
  );
}

export { AboutUs };
