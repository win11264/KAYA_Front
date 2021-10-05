import React from "react";
import BackHomeBtn from "../components/backhome/BackHomeBtn";

const BackHome = () => {
  return (
    <div className='w-100 bg-white d-flex flex-column align-items-center justify-content-center py-4'>
      <BackHomeBtn title='Homepage System' />
      <BackHomeBtn title='Exchange System' />
      <BackHomeBtn title='User System' />
      <BackHomeBtn title='Contact System' />
    </div>
  );
};

export default BackHome;
