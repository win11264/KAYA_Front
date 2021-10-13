import Kayadescription from "../components/home/KayaDescription";
import Partner from "../components/home/Partner";
import Popularproduct from "../components/home/PopularProduct";
import Promotion from "../components/home/Promotion";
import Quicklink from "../components/home/QuickLink";
import ReturnTop from "../components/overviews/ReturnTop";

function Home(props) {
  return (
    <div className='bg-white' style={{ minHeight: "712px" }}>
      <Kayadescription />
      <div className='d-flex'>
        <Quicklink id='1' title='KAYA' subtitle='Exchange' link='exchange' />
        <Quicklink id='2' title='KAYA' subtitle='Mall' link='mall' />
      </div>
      {/* <Promotion pro='pro1' />
      <Popularproduct /> */}
      {/* <Partner /> */}
      {/* <ReturnTop /> */}
    </div>
  );
}
export default Home;
