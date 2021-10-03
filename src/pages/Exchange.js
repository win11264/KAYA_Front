import React from "react";
import ExcCard from "../components/exchange/ExcCard";
import ExcDescription from "../components/exchange/ExcDescription";
import ExcList from "../components/exchange/ExcList";
import SummaryCard from "../components/exchange/SummaryCard";
import SearchBar from "../components/overviews/SearchBar";

const Exchange = () => {
  return (
    <div>
      <SearchBar />
      <ExcDescription />
      <ExcList className=''>
        <ExcCard title='Plastic Bottle' rate='3' />
        <ExcCard title='Paper' rate='1' />
        <ExcCard title='Aluminium Can' rate='4' />

        <SummaryCard total={100} />
      </ExcList>
    </div>
  );
};

export default Exchange;
