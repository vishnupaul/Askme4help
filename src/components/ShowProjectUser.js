import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import SubmitAssignment from './SubmitAssignment';
import axios from 'axios';
import { Context } from '../context/Context';

const ShowProjectUser = () => {
  const [projects, setProjects] = useState([]);

  const token = localStorage.getItem('tokenStore');

  const fetchProjects = async () => {
    if (token) {
      const res = await axios.get(
        'https://paulaskme4help.herokuapp.com/assignment/user/',
        {
          headers: { Authorization: token },
        }
      );
      setProjects(res.data);
    }
  };
  const deleteAssignment = async (id) => {
    try {
      if (token) {
        await axios.delete(
          `https://paulaskme4help.herokuapp.com/assignment/${id}`,
          {
            headers: { Authorization: token },
          }
        );
      }
    } catch (error) {
      window.location.href = '/';
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [deleteAssignment]);

  const { user } = useContext(Context);
  return (
    <>
      <div>
        <div className='section-title contact-head'>
          <h2>
            welcome <span>{user.username}</span>
          </h2>
        </div>
      </div>
      <div className='userProfile'>
        <SubmitAssignment />
        <div className='section-project'>
          <div className='section-title contact-head'>
            <h2>
              Assignments<span>posted</span>
            </h2>
          </div>
          <table>
            <tr>
              <th>Subject</th>
              <th>Topic</th>
              <th>Desc</th>
              <th>Edit </th>
              <th>Delete </th>
            </tr>
            {projects.map((project) => {
              const { branch, topic, Assigdesc, _id } = project;
              return (
                <>
                  <tr>
                    <td>{branch} </td>
                    <td>{topic} </td>
                    <td>{Assigdesc} </td>
                    <td>
                      <button className='btn btn-form'>
                        <Link to={`edit/${_id}`}>Edit</Link>
                      </button>
                    </td>
                    <td>
                      <button
                        type='submit'
                        className='btn btn-form'
                        onClick={() => deleteAssignment(_id)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default ShowProjectUser;
