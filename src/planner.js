import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MonthSlider = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 7, // Number of days to show at once
    slidesToScroll: 7,
  };

  const daysArray = [];
  for (let monthOffset = 0; monthOffset < 12; monthOffset++) {
    const daysInMonth = new Date(currentYear, currentMonth + monthOffset + 1, 0).getDate();
    const monthDays = Array.from({ length: daysInMonth }, (_, index) => {
      const dayOfMonth = index + 1;
      return {
        dayOfMonth,
        date: new Date(currentYear, currentMonth + monthOffset, dayOfMonth),
      };
    });
    daysArray.push(...monthDays);
  }

  // Find the index of the current date
  const currentDayIndex = daysArray.findIndex(
    (dayObj) =>
      dayObj.date.getDate() === currentDate.getDate() &&
      dayObj.date.getMonth() === currentDate.getMonth() &&
      dayObj.date.getFullYear() === currentDate.getFullYear()
  );

  return (
    <div class="meal-planner">
    <div className='container'>
      <div className='secHeader row'>
        <h2 className='playlistHeading'>
          My Weekly Planner
          <span className="modalOpener" data-modal-id="playListModal">?</span>
        </h2>
        <div className='sliderDiv'>
          <Slider {...sliderSettings} initialSlide={currentDayIndex}>
            {daysArray.map((dayObj, index) => (
              <div
                key={dayObj.dayOfMonth + index}
                className={`day-slide ${index === currentDayIndex ? 'slick-active current-date' : ''}`}
              >
                <div className="day-info">
                  <div className="day-name">{dayObj.date.toLocaleString('en-US', { weekday: 'short' })}</div>
                  <div className="day-number">{dayObj.dayOfMonth}</div>
                  <div className="month-name">{dayObj.date.toLocaleString('default', { month: 'short' })}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MonthSlider;
