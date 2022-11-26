import React from 'react';

const extraBanner = () => {
    return (
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://s3b.cashify.in/gpro/uploads/2019/07/07100717/Samsung-Galaxy-A70.jpg"
            className="max-w-screen-md "
            alt=""
          />
          <div>
            <h1 className="text-5xl mt-20 my-4 font-bold">
              Buy Your Mobile in Half Price!
            </h1>
            <ul className="steps steps-vertical">
              <li className="step step-primary">Register</li>
              <li className="step step-primary">Choose Product</li>
              <li className="step">Book</li>
              <li className="step">Receive Product</li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default extraBanner;
