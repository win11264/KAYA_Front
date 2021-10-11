import React from "react";
import { Link } from "react-router-dom";
import BackHomeBtn from "../../components/backhome/BackHomeBtn";

const BackHome = () => {
  return (
    <div
      className='w-100 bg-white d-flex flex-column align-items-center justify-content-center py-4'
      style={{ minHeight: "712px" }}>
      <BackHomeBtn title='Promotion System' />
      <BackHomeBtn title='Partner System' link='/backpartner' />
      <BackHomeBtn title='Product System' link='/backproduct' />

      <BackHomeBtn title='Exchange System' link='/backexc' />

      <BackHomeBtn title='User System' />
      <BackHomeBtn title='Contact System' />
    </div>
  );
};

export default BackHome;
