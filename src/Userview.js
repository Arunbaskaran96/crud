import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Userview() {
  const params = useParams();
  const [view, setView] = useState({});
  const [isLoad, setLoad] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    try {
      const user = await axios.get(
        `https://63932e42ab513e12c5061a40.mockapi.io/users/${params.id}`
      );
      setLoad(false);
      setView(user.data);
    } catch (error) {
      console.log(error);
    }
  };

  return isLoad ? (
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  ) : (
    <>
      <div style={{ backgroundColor: "gray" }}>
        <Link to="/nav/users" className="btn btn-primary btn-sm ">
          Back
        </Link>
      </div>
      <div className="view">
        <div className="view-div">
          <h4>Name:{view.Name}</h4>
          <h6>Email:{view.Email}</h6>
          <h6>Mobile:{view.Mobile}</h6>
          <h6>City:{view.City}</h6>
        </div>
      </div>
    </>
  );
}

export default Userview;
