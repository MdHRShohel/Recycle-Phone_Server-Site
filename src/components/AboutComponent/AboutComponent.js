import React from "react";

const AboutComponent = () => {
  return (
    <div className="container mx-auto lg:mt-14 p-6">
      <div className="flex flex-col lg:flex-row justify-around items-center">
        <div className="mt-12">
          <h2 className="text-4xl text-left  font-bold">About Recycle Phone</h2>
          <p className="text-xl  mt-4 lg:w-[900px] text-justify bolck mx-auto">
            Recycle Phone is a platform where you can buy and sell your old
            phones. Recycle Phone is developed by Md. Habibur Rahman Shohel. He
            is a student of Bangladesh University of Business and Technology (BUBT). He did his graduation in Computer Science and Engineering (CSE). He is a passionate developer. He loves to develop web
            applications. Hope you will like his project. Thank you.
          </p>
        </div>
        <div className="text-center mt-10 ">
          <div className="container mx-auto flex justify-center items-center flex-col shadow-lg p-10 rounded-lg">
            <div>
              <img
                src="https://i.ibb.co/fdgmMVY/3-Custom.jpg"
                className="w-[150px] rounded-full mb-4"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">Md. Habibur Rahman Shohel</h2>
              <h2>MERN Stack Developer</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
