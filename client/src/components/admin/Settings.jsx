import React, { useEffect, useState } from 'react';
import '../../styles/admin/Settings.css';
import { toast } from 'react-toastify';



export default function Settings() {

    const [allowRegistration, setAllowRegistration] = useState("");
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredUsers = users.filter((user) => user.username.includes(searchTerm));

    const itemsPerPage = 6;
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    useEffect(() => {
        fetch("/api/v1/users")
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        fetch("/api/v1/settings")
            .then(response => response.json())
            .then(data => {
                setAllowRegistration(data[0].registrations);
            })
            .catch(error => console.error(error));
    }, []);

    const handleChangeRole = (existUser, newRole) => {
        toast.info(
            <div>
                <p>Are you sure you want to update {existUser.username}'s role?' { }?</p>
                <div className='buttons'>
                    <button className='yes' onClick={() => handleUserRoleSelection('yes', existUser, newRole)}>Yes</button>
                    <button className='no' onClick={() => handleUserRoleSelection('no', existUser, newRole)}>No</button>
                </div>
            </div>,
            {
                autoClose: false,
            }
        )
    };

    const handleUserRoleSelection = (action, existUser, newRole) => {
        if (action === 'yes') {
            fetch(`/api/v1/users/${existUser.id}/role`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    role: newRole
                })
            })
                .then(response => {
                    toast.success(`User ${existUser.username} role updated successfully`);
                    window.location.reload();
                })
                .catch(error => {
                    toast.error(error.message);
                })
        } else {
            toast.dismiss();
        }
    }

    const handleUserSelection = (action, user, userId) => {
        if (action === 'yes') {
            fetch(`/api/v1/users/${userId}`, {
                method: 'DELETE'
            })
                .then(response => {
                    toast.success(`User ${user.username} deleted successfully`);
                    window.location.reload();
                })
                .catch(error => {
                    toast.error(error.message);
                })
        } else {
            toast.dismiss();
        }
    }

    const handleDeleteUser = (user, userId) => {
        toast.info(
            <div>
                <p>Are you sure you want to delete {user.username}?</p>
                <div className='buttons'>
                    <button className='yes' onClick={() => handleUserSelection('yes', user, userId)}>Yes</button>
                    <button className='no' onClick={() => handleUserSelection('no', user, userId)}>No</button>
                </div>
            </div>,
            {
                autoClose: false,
            }
        )
    }

    return (
        <div className='settingsPage'>
            <h1 className='settingsTitle'>General Settings</h1>
            <form className='settingsForm'>
                <label className='registrationTitle'>
                    Set Registration Access:
                    <select
                        value={allowRegistration}
                        onChange={e => setAllowRegistration(e.target.value)}
                    >
                        <option value={true}>Open</option>
                        <option value={false}>Closed</option>
                    </select>
                </label>
            </form>

            <h1 className='settingsTitle'>User Management</h1>
            <div className='searchBar'>
                <h3 className='searchTitle'>Search</h3>
                <input
                    className='searchInput'
                    type='text'
                    placeholder='Search By Username...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <table>
                <thead className='tableHead'>
                    <tr>
                        <th>
                            <span>Username</span>
                        </th>
                        <th>
                            <span>Email</span>
                        </th>
                        <th>
                            <span>Role</span>
                        </th>
                        <th>
                            <span>Action</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.slice(startIndex, endIndex).map(user => (
                        <tr key={user.id}>
                            <td>
                                <span>{user.username}</span>
                            </td>
                            <td>
                                <span>{user.email}</span>
                            </td>
                            <td>
                                <span>{user.role}</span>
                            </td>
                            <td className='actions'>
                                <select
                                    value={user.role}
                                    onChange={e => handleChangeRole(user, e.target.value)}
                                >
                                    <option value="User">User</option>
                                    <option value="Admin">Admin</option>
                                </select>
                                <button className='deleteUser' type="button" onClick={() => handleDeleteUser(user, user.id)}>Delete User</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='settingsButtons'>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button className='pagesButton' key={page} onClick={() => setCurrentPage(page)}>
                        {page}
                    </button>
                ))}
            </div>
        </div>
    )
}
