import React from "react";
import KayaCode from "../components/payment/KayaCode";
import AddressSelect from "../components/payment/AddressSelect";
import ContactSelect from "../components/payment/ContactSelect";
import SumPay from "../components/payment/SumPay";
import ConfirmPay from "../components/payment/ConfirmPay";

const Payment = () => {
  return (
    <div className='w-100'>
      <SumPay />
      <AddressSelect />
      <ContactSelect title='Email' detail='winthitisan@gmail.com' />
      <ContactSelect title='Mobile No.' detail='086-368-7138' />
      <KayaCode />
      <ConfirmPay />
    </div>
  );
};

export default Payment;
