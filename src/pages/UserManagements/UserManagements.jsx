import React from 'react'
import { MdSearch } from 'react-icons/md';
import './UserManagements.css';

const UserManagements = () => {

  const User = [
    { id: '001',    profile: 'img',     userName: 'John Doe',                role: 'Team Leader',          action: 'view profile' },
    { id: '002',    profile: 'img',     userName: 'Jane Smith',              role: 'Backend Developer',    action: 'view profile' },
    { id: '003',    profile: 'img',     userName: 'Eden Hazard',             role: 'Digital Marketer',     action: 'view profile' },
    { id: '004',    profile: 'img',     userName: 'Lily Van',                role: 'FrontEnd Developer',   action: 'view profile' },
    { id: '005',    profile: 'img',     userName: 'Brantley Mell',           role: 'Content Writer',       action: 'view profile' },
    { id: '006',    profile: 'img',     userName: 'John Douglas',            role: 'Designer',             action: 'view profile' },
    { id: '007',    profile: 'img',     userName: 'Dominique Enriques',      role: 'Team Leader',          action: 'view profile' },
    { id: '008',    profile: 'img',     userName: 'Orion Slade',             role: 'Backend Developer',    action: 'view profile' },
    { id: '009',    profile: 'img',     userName: 'Robert Johnson',          role: 'Digital Marketer',     action: 'view profile' },
    { id: '010',    profile: 'img',     userName: 'Emily Davis',             role: 'FrontEnd Developer',   action: 'view profile' },
    { id: '011',    profile: 'img',     userName: 'Michael Wilson',          role: 'Content Writer',       action: 'view profile' },
    { id: '012',    profile: 'img',     userName: 'Bashir Rokeeb',           role: 'Designer',             action: 'view profile' },
    { id: '013',    profile: 'img',     userName: 'Mark Zui',                role: 'Team Leader',          action: 'view profile' },
    { id: '014',    profile: 'img',     userName: 'Zack Doughlas',           role: 'Backend Developer',    action: 'view profile' },
    { id: '015',    profile: 'img',     userName: 'Cartle Gemson',           role: 'Digital Marketer',     action: 'view profile' },
    { id: '016',    profile: 'img',     userName: 'Lily Vein',               role: 'FrontEnd Developer',   action: 'view profile' },
    { id: '017',    profile: 'img',     userName: 'Alan Poe',                role: 'Content Writer',       action: 'view profile' },
    { id: '018',    profile: 'img',     userName: 'Ranky Tech',              role: 'Designer',             action: 'view profile' },
    { id: '019',    profile: 'img',     userName: 'Alan Poe',                role: 'Content Writer',       action: 'view profile' },
    { id: '020',    profile: 'img',     userName: 'Alan Poe',                role: 'Content Writer',       action: 'view profile' },
  ];


  return (
    <div className='UserManagements-container'>
      <div className="user-navbar">
        <h2>Users</h2>
        <div className="user-Actions">
            <button>Add User</button>
        </div>
      </div>

      <div className="user-top-bar">
        <div className="user-numbers">
          <h4>Total of 20 users are listed</h4>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button>
            <MdSearch size={20}/>
          </button>
        </div>
      </div>

      <div className="user-cards">
        {User.map((userr, id) => (
          <div key={id} className="user-card-details">
            <div className="users-info">
              <div className="user-img">
                <img src={userr.profile} alt="img" />
              </div>
              <h3>{userr.userName}</h3>
              <p>{userr.role}</p>
              <button>{userr.action}</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserManagements
