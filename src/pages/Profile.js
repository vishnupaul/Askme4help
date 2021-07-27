import React, { useContext } from 'react';

import { Context } from '../context/Context';
import AdminProfile from '../components/AdminProfile';
import ShowProjectUser from '../components/ShowProjectUser';

const Profile = () => {
  const { user } = useContext(Context);
  return (
    <>
      {user.isAdmin ? (
        <AdminProfile />
      ) : (
        <div className='section'>
          <div className='profile'>
            <ShowProjectUser />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
