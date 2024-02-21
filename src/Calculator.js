import React, { useState } from "react";
import Contents from "./Contents";
import "./Calculator.css";

const Calculator = () => {
  const [showContents, setShowContents] = useState(false);

  const handleClick = () => {
    setShowContents(true);
  };

  const buttonClick = () => {
    setShowContents(false);
  };

  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height_feet: "",
    height_inches: "",
    weight: "",
    style: "",
    target: "",
  });

  const [errors, setErrors] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Simple validation example (you can add more complex validation logic)
    if (!formData.age) {
      newErrors.age = "Age is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (!formData.height_feet) {
      newErrors.height = "Height is required";
    }

    if (!formData.height_inches) {
      newErrors.inches = "Inches is required";
    }

    if (!formData.weight) {
      newErrors.weight = "Weight is required";
    }

    if (!formData.style) {
      newErrors.style = "Style is required";
    }

    if (!formData.target) {
      newErrors.target = "Target is required";
    }

    if (Object.keys(newErrors).length === 0) {
      handleFormSubmit(); // Call your function here if no errors
    } else {
      // Update the state with errors
      setErrors(newErrors);
    }
  };

  const handleFormSubmit = (e) => {

    var age = parseFloat(document.getElementById('age').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height_feet').value) * 30.48 +
                 parseFloat(document.getElementById('height_inches').value) * 2.54;
    var result = 0;

    var gender = document.querySelector('select[name="gender"]').value;

    if (gender === 'male') {
        result = 66 + (6.23 * weight) + (5 * height) - (6.8 * age);
    } else {
        result = 665.09 + (4.35 * weight) + (1.8 * height) - (4.7 * age);
    }

    result = parseFloat(document.getElementById('style').value) * result;

    var goal = document.getElementById('target').value;
    if (goal === "loseweight") {
        result = result - result * (12 / 100);
    } else if (goal === "gainweight") {
        result = result + 500;
    }

    if (parseInt(result) < 1200) {
        result = 1200;
    }

    result = parseInt(result);

    console.log(result);
    // Prevent the default form submission
    e.preventDefault();
    document.getElementById('final_calorie').innerHTML = result.toString();
        document.getElementById('age').value = '';
        document.querySelector('select[name="gender"]').value = '';
        document.getElementById('height_feet').value = '';
        document.getElementById('height_inches').value = '';
        document.getElementById('weight').value = '';
        document.getElementById('style').value = '';
        document.getElementById('target').value = '';

  };

  return (
    <div className="calloryCalculator">
      <div className="container">
        <div className="calloryHeader">
          <h2>
            Nutrition <span>foR you</span>
          </h2>
          <h3>
            <div className="kcaldiv">
              <svg
                width="26"
                height="35"
                viewBox="0 0 26 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.1173 10.3065C8.41696 5.64819 10.5721 1.78934 11.4819 0.335194C13.5292 15.9153 18.988 12.7993 23.0823 18.4081C27.1766 24.017 25.8033 33.2188 11.4819 33.9882C-0.118628 34.6114 -0.801275 24.6401 1.92837 19.6545C4.42308 15.098 3.29296 10.3065 3.29296 10.3065C3.29296 10.3065 8.8775 14.1181 7.38726 18.4081C5.95403 22.534 11.4824 23.809 12.847 22.1473C14.8942 19.6545 12.1646 15.9153 10.1173 10.3065Z"
                  fill="#FC8329"
                ></path>
              </svg>
              <span id="final_calorie"></span>
            </div>
            Daily Calorie Recommendation
          </h3>
          <button
            className="btn calculateBtn"
            data-href="scrll-section"
            onClick={handleClick}
          >
            Recalculate
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <line
                x1="4.84375"
                y1="12.3824"
                x2="12.8438"
                y2="12.3824"
                stroke="currentColor"
                stroke-width="2"
              ></line>
              <line
                x1="8.84375"
                y1="16.3824"
                x2="8.84375"
                y2="8.3824"
                stroke="currentColor"
                stroke-width="2"
              ></line>
              <line
                x1="20.8438"
                y1="12.3824"
                x2="14.8438"
                y2="12.3824"
                stroke="currentColor"
                stroke-width="2"
              ></line>
              <rect
                x="1.84375"
                y="1.3824"
                width="22"
                height="22"
                stroke="currentColor"
                stroke-width="2"
              ></rect>
            </svg>
          </button>
        </div>
      </div>

      <div
        className="caloriform"
        style={{ display: showContents ? "block" : "none" }}
      >
        <button className="close-btn" onClick={buttonClick}>
          <svg
            aria-hidden="true"
            focusable="false"
            role="presentation"
            className="icon icon-close"
            viewBox="0 0 40 40"
          >
            <path
              d="M23.868 20.015L39.117 4.78c1.11-1.108 1.11-2.77 0-3.877-1.109-1.108-2.773-1.108-3.882 0L19.986 16.137 4.737.904C3.628-.204 1.965-.204.856.904c-1.11 1.108-1.11 2.77 0 3.877l15.249 15.234L.855 35.248c-1.108 1.108-1.108 2.77 0 3.877.555.554 1.248.831 1.942.831s1.386-.277 1.94-.83l15.25-15.234 15.248 15.233c.555.554 1.248.831 1.941.831s1.387-.277 1.941-.83c1.11-1.109 1.11-2.77 0-3.878L23.868 20.015z"
              className="layer"
            ></path>
          </svg>
        </button>
        <Contents  myFunction={handleFormSubmit}
        handleSubmit={handleSubmit}
        errors={errors}
        formData={formData}
        handleChange={(e) => {
          const { id, value } = e.target;
          setFormData({
            ...formData,
            [id]: value,
          });
        }} />
      </div>
    </div>
  );
};

export default Calculator;
