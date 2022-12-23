import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edituser() {
  const params = useParams();
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
      setLoading(true);
      await axios.put(
        `https://63932e42ab513e12c5061a40.mockapi.io/users/${params.id}`,
        values
      );

      nav("/nav/users");
    },
  });
  useEffect(() => {
    getUser();
  }, []);
  let getUser = async () => {
    try {
      const edit = await axios.get(
        `https://63932e42ab513e12c5061a40.mockapi.io/users/${params.id}`
      );
      formik.setValues(edit.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "gray" }}>
        <Link to="/nav/users" className="btn btn-primary btn-sm ">
          Back
        </Link>
      </div>
      <div className="edit-div">
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
              onChange={formik.handleChange}
              name="Email"
              value={formik.values.Email}
              type={"text"}
            ></input>
            <span style={{ color: "red" }}>{formik.errors.Email}</span>
            <br></br>
            <label>Mobile</label>
            <br></br>
            <input
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
              onChange={formik.handleChange}
              name="City"
              value={formik.values.City}
            >
              <option value={""}>--select a city--</option>
              <option value={"ch"}>Chennai</option>
              <option value={"cm"}>Coimbatore</option>
              <option value={"tr"}>Trichy</option>
            </select>
            <span style={{ color: "red" }}>{formik.errors.City}</span>
            <br></br>
            <br></br>
            <input disabled={isLoading} type={"submit"} value="Update"></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default Edituser;
