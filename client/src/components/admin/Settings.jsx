import React, { useEffect, useState } from 'react';


export default function Settings() {

    const [allowRegistration, setAllowRegistration] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/api/v1/users")
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            })
            .catch(error => console.error(error));
    }, []);

    const handleSaveGeneralSettings = () => { };

    const handleSaveUserManagement = () => { };

    const handleChangeRole = (userId, newRole) => {
        fetch(`/api/v1/users/${userId}/role`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                role: newRole
            })
        })
            .then(response => {
                if (response.ok) {
                    const updatedUsers = users.map(user => {
                        if (user.id === userId) {
                            return { ...user, role: newRole }
                        }
                        return user;
                    });
                    setUsers(updatedUsers);
                } else {
                    throw new Error('Failed to update user role');
                }
            })
            .catch(error => console.error(error));
    };

    return (
        <div className='settingsPage'>
            <h1>General Settings</h1>
            <form>
                <label>
                    Allow Registration:
                    <input type="checkbox" checked={allowRegistration} onChange={(e) => setAllowRegistration(e.target.checked)} />
                </label>
                <button type="button" onClick={handleSaveGeneralSettings}>Save</button>
            </form>

            <h1>User Management</h1>
            <form>
                <label>
                    Max Users per Account:
                    <input type="text" />
                </label>
                <label>
                    Default User Role:
                    <select>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </label>
                <button type="button" onClick={handleSaveUserManagement}>Save</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <select
                                    value={user.role}
                                    onChange={e => handleChangeRole(user.id, e.target.value)}
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
