import React from 'react';
import '../../AboutUs.css';
import ProfileImg from '../../../../assets/profile.jpg';
interface ProfileProps {
  
}

const Profile = ({}: ProfileProps) => {
  return (
    <div className="bg-canaess-100 border-[3px] min-w-[47%] py-2 px-[1%] border-[#ffb200]">
      <div className="flex">
        <img src={ProfileImg} alt="Member" className="w-[32%] rounded-[100%] border-[3px] border-[#ffb200]" />
        <div>
        <h3 className="font-semibold p-4 text-white">Name</h3>
        <p className="text-white pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;