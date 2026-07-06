import React from 'react';
import ProfileImg from '../../../../assets/profile.jpg';
import '../../AboutUs.css';
interface ProfileProps {
  Role: string;
  member: string;
}

const Profile = ({ Role, member }: ProfileProps) => {
  return (
    <div className="bg-canaess-100 border-[3px] py-2 max-sm:w-[100%] w-[50%] px-[1%] border-[#ffb200] rounded-[3%]">
      <div className="flex">
        <div className="w-[32%]">
          <img src={ProfileImg} alt="Member" className="rounded-[100%] border-[3px] border-[#ffb200]" />
        </div>
        <div className="w-[68%]">
        <h2 className="font-semibold p-4 text-white">{Role}</h2>
        <p className="text-white pt-4">{member}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;