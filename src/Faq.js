import React from 'react'
import FAQItem from './FaqItem';
import './Faq.css'

const data = [
  {
    question: 'IMPORTANT: BEFORE YOU START',
    answer: 'Warning: the programmes and the exercise routines contained on the OYG Davina Platform may not be suitable for everyone. These routines or any other exercise routines may result in injury, particularly if they are not performed correctly. It is recommended that you consult with your doctor before attempting any of the workouts demonstrated to you in the video. Pre and post natal women need to be especially careful and should consult with their midwife or health visitor before attempting any form of physical exercise contained on the OYG Davina Platform. As this is an ongoing subscription service, if anything in relation to your health or physical condition changes following sign up, we recommend that you seek medical advice before continuing the workouts and/or following a fitness programme on the OYG Davina Platform',
  },
  {
    question: 'WHAT EQUIPMENT DO I NEED?',
    answer: 'On each video page any equipment needed will be shown. Equipment needed includes dumbbells (two filled 500ml water bottles can be used in its place), a mat, a chair and a soft ball (a cushion can be used in its place), kettlebell, mini band, sliders, a step, and a towel. There are also a number of workouts where no equipment is needed.',
  },
  {
    question: 'I FORGOT MY PASSWORD!',
    answer: 'If you have forgotten your password please click forgot your password on the login page. You will be asked to enter your email address so we can send you a link to change your password.  If you have any issues you can contact our support team at',
  },
  {
    question: 'HOW DO I UPDATE MY BILLING INFORMATION IF I JOINED BY THE WEBSITE?',
    answer: 'If you need to amend or change your card details, please contact support@ownyourgoalsdavina.com and we will send you a secure link for you to update.',
  },
  {
    question: 'HOW DO I UPDATE MY BILLING INFORMATION IF I JOINED BY THE APP?',
    answer: 'You can update your billing information at any time in your App Store or Google Play Store',
  },
  {
    question: 'I HAVE USED MY FREE TRIAL PERIOD, WHEN WILL MY FIRST PAYMENT BE TAKEN?',
    answer: 'Your first payment will be taken on the day after your free trial period has ended. If you decide not to continue, you will need to cancel your subscription before the end of your free trial period to avoid any payment being taken.',
  },
  {
    question: 'HOW DO I CANCEL MY SUBSCRIPTION IF I JOINED BY THE WEBSITE?',
    answer: 'You can cancel your subscription at any time on the billing section under "My Account" page. This will take you through the cancellation process and inform you of your subscription end date',
  },
  {
    question: 'HOW DO I CANCEL MY SUBSCRIPTION IF I JOINED UP BY THE APP?',
    answer: 'You can cancel your subscription at any time in your App Store or Google Play Store.',
  },
];


const Faq = () => {
  return (
    <div className="faq-section">
    <h2 className='faq-section' style={{textAlign: 'center'}}>Frequently Asked Questions</h2>
    <div className='faq-items'>
    {data.map((item, index) => (
      <div className='accordion-group'>
        <FAQItem key={index} question={item.question} answer={item.answer} />
      </div>
    ))}
    </div>
  </div>
  )
}

export default Faq
