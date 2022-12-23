import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Createuser() {
  const [isLoading, setLoading] = useState(false);
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Mobile: "",
      City: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.Name) {
        errors.Name = "Please enter name";
      }
      if (!values.Email) {
        errors.Email = "Please enter email";
      }
      if (!values.Mobile) {
        errors.Mobile = "Please enter mobile";
      }
      if (!values.City) {
        errors.City = "Please select city";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const addUser = await axios.post(
          "https://63932e42ab513e12c5061a40.mockapi.io/users",
          values
        );

        nav("/nav/users");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <div style={{ backgroundColor: "gray" }}>
        <Link to="/nav/users" className="btn btn-primary btn-sm ">
          Back
        </Link>
      </div>
      <div className="create-div">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>Name</label>
            <br></br>
            <input
              className={`  ${formik.errors.Name ? "is-invalid" : "valid"}`}
              onChange={formik.handleChange}
              name="Name"
              value={formik.values.Name}
              type={"text"}
            ></input>
            <span style={{ color: "red" }}>{formik.errors.Name}</span>
            <br></br>
            <label>Email</label>
            <br></br>
            <input
              className={`  ${formik.errors.Email ? "is-invalid" : "valid"}`}
              onChange={formik.handleChange}
              name="Email"
              value={formik.values.Email}
              type={"email"}
            ></input>
            <span style={{ color: "red" }}>{formik.errors.Email}</span>
            <br></br>
            <label>Mobile</label>
            <br></br>
            <input
              className={`  ${formik.errors.Mobile ? "is-invalid" : "valid"}`}
              name="Mobile"
              onChange={formik.handleChange}
              value={formik.values.Mobile}
              type={"tel"}
            ></input>
            <span style={{ color: "red" }}>{formik.errors.Mobile}</span>
            <br></br>
            <label>City</label>
            <br></br>
            <select
              className={`  ${formik.errors.City ? "is-invalid" : "valid"}`}
              onChange={formik.handleChange}
              name="City"
              value={formik.values.City}
            >
              <option value={""}>--select a city--</option>
              <option value={"chennai"}>Chennai</option>
              <option value={"coimbatore"}>Coimbatore</option>
              <option value={"trichy"}>Trichy</option>
            </select>
            <span style={{ color: "red" }}>{formik.errors.City}</span>
            <br></br>
            <br></br>
            <input disabled={isLoading} type={"submit"} value="create"></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default Createuser;
