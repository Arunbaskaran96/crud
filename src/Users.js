import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [userList, setUserlist] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [dele, setDele] = useState(false);
  useEffect(() => {
    getUser();
  }, []);

  let getUser = async () => {
    let users = await axios.get(
      "https://63932e42ab513e12c5061a40.mockapi.io/users"
    );
    setUserlist(users.data);
    setLoading(false);
  };

  let del = async (id) => {
    try {
      alert("Do you want to delete?");
      await axios.delete(
        `https://63932e42ab513e12c5061a40.mockapi.io/users/${id}`
      );
      getUser();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="conatiner" id="main-div">
      {isLoading ? (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <div className="row">
            <div className="col-12">
              <Link
                to="/nav/createuser"
                className="btn btn-primary btn-sm mt-4 mb-4"
              >
                Create User
              </Link>
            </div>
          </div>
          <div className="row">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">City</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user) => {
                  return (
                    <tr>
                      <td>{user.Name}</td>
                      <td>{user.Email}</td>
                      <td>{user.Mobile}</td>
                      <td>{user.City}</td>
                      <td>
                        <Link
                          to={`/nav/userview/${user.id}`}
                          className="btn btn-success btn-sm"
                        >
                          View
                        </Link>
                        <Link
                          to={`/nav/useredit/${user.id}`}
                          className="btn btn-primary btn-sm"
                        >
                          Edit
                        </Link>
                        <button
                          disabled={dele}
                          onClick={() => del(user.id)}
                          className="btn btn-danger btn-sm"
                        >
                          Del
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Users;
