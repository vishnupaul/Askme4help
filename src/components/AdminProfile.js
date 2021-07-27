import React, { useState, useEffect } from 'react';

import axios from 'axios';

const AdminProfile = () => {
  const [projects, setProjects] = useState([]);
  const fetchProjects = async () => {
    const res = await axios.get(
      'https://paulaskme4help.herokuapp.com/assignment'
    );
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <div className='section'>
      <div className='section-title'>
        <h2>
          Welcome<span> Admin</span>
        </h2>
      </div>
      <table>
        <tr>
          <th>username</th>
          <th>Email</th>
          <th>Country</th>
          <th>Phone</th>
          <th>Branch</th>
          <th>Topic</th>
          <th>Desc</th>
        </tr>
        {projects.map((project) => {
          const { name, email, country, phone, branch, topic, Assigdesc } =
            project;
          return (
            <>
              <tr>
                <td>{name}</td>
                <td>{email} </td>
                <td>{country} </td>
                <td>{phone}</td>
                <td>{branch} </td>
                <td>{topic} </td>
                <td>{Assigdesc} </td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default AdminProfile;
