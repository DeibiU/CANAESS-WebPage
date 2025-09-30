import React from 'react';
import '../../AboutUs.css';
interface ProfileProps {
  
}

const Profile = ({}: ProfileProps) => {
  return (
    <div className="AboutUs">
      <div>
        <img src="" alt="Member's image" />
        <h3>Name</h3>
        <text name="infoMember" id="info"></text>
      </div>
    </div>
  );
}

export default Profile;