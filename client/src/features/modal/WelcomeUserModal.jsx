import React from "react";
//import { Context } from "contexts/Context";
import togetherLogo from "../.././assets/images/togetherLogo.svg";



const WelcomeUserModal = ({ handleClose }) => {
  return (
    <div className="flex flex-col items-center py-0 px-2rem rounded-xl bg-white pb-4">
        <button
          className="w-auto h-8 mt-5 px-2 border-solid border-2 border-gray outline-none rounded font-semibold text-lg hover:bg-teal-600 active:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-300"
          onClick={handleClose}
        >
          Close
        </button>
      <div className="w-4/6 mt-3 flex flex-col">
        <img className="w-12 pr-2" src={togetherLogo} alt="" /> 
        <h2 className="mb-1 border-solid border-b-2 border-black font-semibold">
        </h2>
        <div>
         <h3>Hello, {auth.user.displayName}, welcome to Together!</h3>
        </div>
      </div>
    </div>
  );
};

  export default WelcomeUserModal;