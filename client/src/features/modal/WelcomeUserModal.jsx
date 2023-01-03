import React, { useContext } from "react";
import { Context } from "contexts/Context";
import togetherLogo from "../.././assets/images/togetherLogo.svg";
import WelcomeUser from "features/auth/WelcomeUser";

const WelcomeUserModal = ({ handleClose }) => {
  const [context] = useContext(Context)
  return (
    <div className="flex flex-col items-center py-0 px-2rem rounded-xl bg-white pb-4">
      <button
        className="w-auto h-12 mt-5 px-2 border-solid border-2 border-gray outline-none rounded font-semibold text-xl hover:bg-teal-600 active:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-300"
        onClick={handleClose}
      >
        Close
      </button>
      <div className="w-4/6 mt-3 flex flex-col">
        <h2 className=" flex mb-1 border-solid border-b-2 border-black font-semibold">
          <img className="w-8 pr-2" src={togetherLogo} alt="" /> 
        </h2>
         {
           <WelcomeUser displayName={context.user.displayName} />
        }
      </div>
    </div>
  );
};

export default WelcomeUserModal;
