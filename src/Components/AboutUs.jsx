import React from "react";
import { Hero } from "../data";

const AboutUs = () => {
  return (
    <>
      <div className=" w-full mt-10">
        <p className="font-bold text-3xl text-center pt-5 underline">About us</p>
        <div className="grid sm:grid-cols-2 grid-cols-1 px-10 py-5 gap-10 text-justify text-md font-thin w-full">
          <div className="">
            {/* <img src={Hero} alt="" className="w-full sm:w-[90%]"/> */}
          </div>
          <div className="items-center justify-items-center">
            <p className="">
              Welcome to
              <span className="pl-1 font-bold">My Abinchi Store</span>
              , your go-to destination for delicious food delivered straight to
              your door. We are passionate about providing convenient and
              high-quality dining experiences for our customers, offering a
              diverse selection of cuisines from local restaurants in your area.
              At
              <span className="pl-1 font-bold">
              My Abinchi Store
              </span>
              , we understand the importance of convenience and reliability when
              it comes to ordering food online. That's why we've built a
              seamless platform that allows you to browse menus, place orders,
              and track deliveries with ease. </p>
          </div>
         <p className="bg-orange-500 p-5 text-white rounded-lg text-center">
          Choose <span className=" pl-1 font-bold">
                My Abinchi Store
              </span> for all your food delivery
          needs!
        </p>
        <div></div>
        </div>
        
      </div>
    </>
  );
};

export default AboutUs;
