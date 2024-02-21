import React from "react";

const Contents = ({ myFunction, handleSubmit, handleChange, errors, formData }) => {
  return (
    <div className="caloriform">
      <h3 className="titl">Calculate your recomended calorie intake!</h3>
      <form id="recepie-form" className="weight-loss" onSubmit={handleSubmit}>
        <div className="FormBlocks">
          <div className="form-field">
            <label for="age"></label>
            <input
              className="form-control"
              type="text"
              placeholder="Age"
              id="age"
              data-age-required="age is required"
              value={formData.age}
              onChange={handleChange}
            />
           {errors.age && <div className="error-message">{errors.age}</div>}
          </div>
          <div className="form-field">
            <label for="gender"></label>
            <select
              className="form-control"
              name="gender"
              id="gender"
              data-gender-required="gender is required"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="" disabled="" hidden="">
                Sex
              </option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            {errors.gender && <div className="error-message">{errors.gender}</div>}
          </div>
          <div className="form-field">
            <label for="age"></label>
            <input
              className="form-control"
              type="text"
              placeholder="height_feet"
              id="height_feet"
              data-age-required="height is required"
              value={formData.height_feet}
              onChange={handleChange}
            />
            {errors.height && <div className="error-message">{errors.height}</div>}
          </div>
          <div className="form-field">
            <label for="height"></label>
            <input
              className="form-control"
              type="text"
              placeholder="height_inches"
              id="height_inches"
              data-age-required="inches is required"
              value={formData.inches}
              onChange={handleChange}
            />
            {errors.inches && <div className="error-message">{errors.inches}</div>}
          </div>
          <div className="form-field">
            <label for="weight"></label>
            <input
              className="form-control"
              type="text"
              placeholder="Weight(pounds)"
              id="weight"
              data-age-required="weight is required"
              value={formData.weight}
              onChange={handleChange}
            />
            {errors.weight && <div className="error-message">{errors.weight}</div>}
          </div>
          <div className="form-field">
            <label for="style"></label>
            <select
              className="form-control"
              name="style"
              id="style"
              data-gender-required="style is required"
              value={formData.style}
              onChange={handleChange}
            >
              <option value="" disabled="" selected="" hidden="">
                Your Style
              </option>
              <option value="1.375">
                Lightly active (light exercise/sports 1-3 days/week)
              </option>
              <option value="1.55">
                Moderatetely active (moderate exercise/sports 3-5 days/week)
              </option>
              <option value="1.725">
                Very active (hard exercise/sports 6-7 days a week)
              </option>
              <option value="1.9">
                Extra active (very hard exercise/sports &amp; physical job or 2x
                training)
              </option>
            </select>
            {errors.style && <div className="error-message">{errors.style}</div>}
          </div>
          <div className="form-field">
            <label for="target"></label>
            <select className="form-control" name="target" id="target" value={formData.target} onChange={handleChange}>
              <option value="" disabled="" selected="" hidden="">
                Target
              </option>
              <option value="loseweight">Lose Weight</option>
              <option value="maintainweight">Maintain Weight</option>
              <option value="gainweight">Gain Weight</option>
            </select>
            {errors.target && <div className="error-message">{errors.target}</div>}
          </div>
          <div className="from-field">
            <button className="btn2 gg" onClick={myFunction}>
              Calculate
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contents;
