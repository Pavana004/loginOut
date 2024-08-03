import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("auth"));
    setData(res);
  }, []);

  const handleRemove = () => {
    localStorage.removeItem("auth");
    history("/");
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Full_name</th>
            <th scope="col">Username</th>
            <th scope="col">Email_id</th>
            <th scope="col">Mobile_number</th>
            <th scope="col">Country_row_id</th>
            <th scope="col">Referral_username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.full_name}</td>
            <td>{data.username}</td>
            <td>{data.email_id}</td>
            <td>{data.mobile_number}</td>
            <td>{data.country_row_id}</td>
            <td>{data.referral_username}</td>
          </tr>
        </tbody>
      </table>

      <div className="button">
        <button className="btn btn-danger" onClick={handleRemove}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
