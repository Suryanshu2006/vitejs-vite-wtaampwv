// write the component code here
import React from 'react';

const Usercard = () => {
  const profilePhoto = 'https://randomuser.me/api/portraits/men/7.jpg';
  const name = 'User Name';
  const email = 'User.name@kalvium.com';
  const phone = '+91 1234567890';
  const address = '123, ABC Street, Patna, Bihar, India';

  return (
    <div className="assignment">
      <div className="assignment 2">
        <img
          className="assignment 3"
          src={profilePhoto}
          alt="Profile"
        />
        <h2 className="text-xl font-semibold text-gray-800 mt-3">{name}</h2>
        <p className="text-gray-600 text-sm mt-1">{email}</p>
        <p className="text-gray-600 text-sm">{phone}</p>
        <p className="text-gray-600 text-sm text-center mt-2 px-2">{address}</p>
      </div>
    </div>
  );
};

export default Usercard;