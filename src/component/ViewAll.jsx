import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';

const ViewAll = () => {
    const [data, changeData] = useState([]);

    const fetchData = () => {
        axios("https://anishpdm.github.io/dummy-api-new/student.json")
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
                console.log(error.message);
                alert(error.message);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <NavBar />
            <div className="components">
                <div className="rows col col-12-col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">College</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Course</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">__v</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value) => (
                        <tr key={value._id}>
                            <th scope="row">{value._id}</th>
                            <td>{value.firstname}</td>
                            <td>{value.lastname}</td>
                            <td>{value.college}</td>
                            <td>{value.dob}</td>
                            <td>{value.course}</td>
                            <td>{value.mobile}</td>
                            <td>{value.email}</td>
                            <td>{value.address}</td>
                            <td>{value.__v}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewAll;