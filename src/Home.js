import React from 'react'
import Banner from './banner'
import Calculator from './Calculator';
import Planner from './planner';
import Mealplan from './Mealplan';
import Filter from './filter';

const Home = () => {
  return (
    <div>
    <Banner />
      <Calculator />
      <Planner />
      <Mealplan />
      <Filter />
    </div>
  )
}

export default Home
