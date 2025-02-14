import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./AttendeeDetails.css";
import { FaEnvelope } from "react-icons/fa";
import ProgressLineIcon from "./assets/progressline.svg";
import EnvelopeIcon from "./assets/envelope.svg";
import ProgressIconTwo from "./assets/progressicontwo.svg";

const AttendeeDetails = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      specialRequest: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      specialRequest: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  return (
    <div className="container">
      <div className="header">
        <h2 className="title">Attendee Details</h2>
        <p className="step">Step 2/3</p>
      </div>

      <img
        src={ProgressIconTwo}
        alt="Progress Icon"
        className="progress-svg-icon"
      />

      <form className="form-container" onSubmit={formik.handleSubmit}>
        <div className="upload-area">
          <div className="upload-section">
            <p>Upload Profile Photo</p>
            <div className="upload-container">
              <div className="upload-box">
                <span className="upload-text">
                  Drag & drop or click to upload
                </span>
              </div>
            </div>
          </div>
        </div>

        <img
          src={ProgressLineIcon}
          alt="Progress Icon"
          className="progress-svg-icon"
        />

        <label htmlFor="name" className="name">
          Enter your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="input-field"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error-text">{formik.errors.name}</div>
        ) : null}

        <label htmlFor="email" className="email">
          Enter your email *
        </label>
        <div className="email-field">
          <img src={EnvelopeIcon} alt="Progress Icon" className="email-icon" />

          <input
            id="email"
            name="email"
            type="email"
            className="input-field"
            placeholder="hello@avioflagos.io"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        {formik.touched.email && !formik.values.email && formik.errors.email ? (
          <div className="error-text">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="specialRequest" className="textarea">
          Special request?
        </label>
        <textarea
          id="specialRequest"
          name="specialRequest"
          className="textarea-field"
          placeholder="Textarea"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.specialRequest}
        ></textarea>

        <div className="button-group">
          <button type="button" className="back-button">
            Back
          </button>
          <button type="submit" className="submit-button">
            Get My Free Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttendeeDetails;
