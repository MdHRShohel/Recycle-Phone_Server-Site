import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Dashboard = () => {
    const users = useLoaderData();

    return (
        <div>
            <h2 className='text-3xl text-center font-semibold  mt-10'>All Users</h2>

            <div className="overflow-x-auto w-5/6 mx-auto my-10">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                Avater
                            </th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => <tr key={user._id}>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-circle w-16 h-16">
                                                <img src={user?.photoURL} alt="Avater" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {user?.displayName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{user?.email}</span>
                                </td>
                                <td>{user?.check === true ? 'Saller' : 'Buyer'}</td>
                                <th>
                                    <button className="btn btn-error btn-sm">Delete</button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Dashboard;