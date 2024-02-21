import React, { useState, useEffect } from 'react';
import Cream3 from './cream3.jpg'
import Cream1 from './cream1.jpg'
import Cream2 from './cream2.jpg'
import Modal from './Modal';

const Mealplan = () => {

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [modal1Content, setModal1Content] = useState([]);
    const [modal2Content, setModal2Content] = useState([]);


    useEffect(() => {
        // Fetch data from the API
        const fetchModal1Data  = async () => {
          try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setModal1Content(data);
          } catch (error) {
            console.error('Error fetching data for Modal 1:', error);
          }
        };

          const fetchModal2Data = async () => {
            try {
              const response = await fetch('https://dummyjson.com/products');
              const data2 = await response.json();
              // console.log('Modal 2 Data:', data2); // Log the fetched data
              setModal2Content(data2);
            } catch (error) {
              console.error('Error fetching data for Modal 2:', error);
            }
          };
    
        fetchModal1Data ();
        fetchModal2Data ();
      }, []);
    
      const ModalContent = ({ onHide, content, className }) => (
        <div className={`product-list ${className}`}>
           <button className='close-btn' onClick={onHide}><span>
           <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.949219 10.0959C0.949219 10.4778 1.09033 10.7932 1.39746 11.092L9.71484 19.1438C9.95557 19.3845 10.2544 19.509 10.5947 19.509C11.3003 19.509 11.8564 18.9529 11.8564 18.2556C11.8564 17.8987 11.7153 17.5916 11.4663 17.3425L3.9458 10.0876L11.4663 2.84106C11.7153 2.60034 11.8564 2.27661 11.8564 1.93628C11.8564 1.23901 11.3003 0.682861 10.5947 0.682861C10.2461 0.682861 9.95557 0.799072 9.71484 1.03979L1.39746 9.09985C1.09033 9.39868 0.949219 9.70581 0.949219 10.0959Z" fill="black"></path>
            </svg> </span>
           Preprepared plans</button>
         <div class="row">
          {content}
          </div>
        </div>
      );
      

  return (
    <div className="block-planner container">
      <div className='row' id="WeeklyplanerHide">
        <div className='col-md-4 px-2' onClick={() => setShowModal1(true)}>
            <div className='PlannerBlock modalOpener'>
                <div className='res_img'>
                    <img src={Cream3} alt=''/>
                </div>
                <div className='contentBlock'>
                <h4>Select A Prepared Plan</h4>
                <p>Hand picked by one of our professionals</p>
                <div className='moreInfo'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L15.3431 4.92893C14.9526 4.53841 14.3195 4.53841 13.9289 4.92893C13.5384 5.31946 13.5384 5.95262 13.9289 6.34315L19.5858 12L13.9289 17.6569C13.5384 18.0474 13.5384 18.6805 13.9289 19.0711C14.3195 19.4616 14.9526 19.4616 15.3431 19.0711L21.7071 12.7071ZM3 13H21V11H3V13Z" fill="currentColor"></path>
              </svg>
                </div>
                </div>
            </div>
        </div>
        <div className='col-md-4 px-2' onClick={() => setShowModal2(true)}>
            <div className='PlannerBlock modalOpener'>
                <div className='res_img'>
                    <img src={Cream1} alt=''/>
                </div>
                <div className='contentBlock'>
                <h4>Select One Of Your Meal Plans</h4>
                <p>Select one of your previously created meal plans</p>
                <div className='moreInfo'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L15.3431 4.92893C14.9526 4.53841 14.3195 4.53841 13.9289 4.92893C13.5384 5.31946 13.5384 5.95262 13.9289 6.34315L19.5858 12L13.9289 17.6569C13.5384 18.0474 13.5384 18.6805 13.9289 19.0711C14.3195 19.4616 14.9526 19.4616 15.3431 19.0711L21.7071 12.7071ZM3 13H21V11H3V13Z" fill="currentColor"></path>
              </svg>
                </div>
                </div>
            </div>
        </div>
        <div className='col-md-4 px-2' onClick={() => setShowModal3(true)}>
            <div className='PlannerBlock modalOpener'>
                <div className='res_img'>
                    <img src={Cream2} alt=''/>
                </div>
                <div className='contentBlock'>
                <h4>Create Your Own Meal Plan</h4>
                <p>Create A New Meal Plan Based On Recipes From Our Recipe Bank</p>
                <div className='moreInfo'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L15.3431 4.92893C14.9526 4.53841 14.3195 4.53841 13.9289 4.92893C13.5384 5.31946 13.5384 5.95262 13.9289 6.34315L19.5858 12L13.9289 17.6569C13.5384 18.0474 13.5384 18.6805 13.9289 19.0711C14.3195 19.4616 14.9526 19.4616 15.3431 19.0711L21.7071 12.7071ZM3 13H21V11H3V13Z" fill="currentColor"></path>
              </svg>
                </div>
                </div>
            </div>
        </div>
      </div>

      <Modal show={showModal1} onHide={() => setShowModal1(false)}>
        <ModalContent
          content={modal1Content.map((product) => (
            <div key={product.id} className='col-md-4 product-item'>
              <p>{product.title}</p>
              <img src={product.image} alt={product.title} className='pro-img'/>
            </div>
          ))}
          onHide={() => setShowModal1(false)}
          className="modal1"
        />
      </Modal>
      
      <Modal show={showModal2} onHide={() => setShowModal2(false)}>
  <ModalContent
    content={(modal2Content && modal2Content.products) ? (
      modal2Content.products.map((product) => (
        <div key={product.id} className='col-md-4 product-item'>
          <p>{product.title}</p>
          <img src={product.thumbnail} alt={product.title} className='pro-img' />
        </div>
      ))
    ) : null}
    onHide={() => setShowModal2(false)}
    className="modal2"
  />
</Modal>

      <Modal show={showModal3} onHide={() => setShowModal3(false)}>
      <ModalContent
          content={<h2>Modal 3 Content</h2>}
          onHide={() => setShowModal3(false)} 
          className="modal3"
        />
      </Modal>
    </div>
  )
}

export default Mealplan;
