import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, index, refetch}) => {
    const {email, role} = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('For make admin You have to be admin')
            }
            return res.json()
        })
        .then(data => {
            if(data.modifiedCound > 0){
                toast.success('Successfully make an admin')
                refetch();
            }
            
        })
    }
    return (
            <tr>
                <th>{index + 1}</th>
                <td>{email}</td>
                <td>
                    {(role === 'admin')?<button class="btn btn-xs bg-secondary text-white"> Admin</button>:<button onClick={makeAdmin} class="btn btn-xs bg-primary text-white">Make Admin</button>}
                </td>
            </tr>
    );
};

export default UserRow;