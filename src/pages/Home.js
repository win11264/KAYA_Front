import Kayadescription from "../components/home/KayaDescription";
import Partner from "../components/home/Partner";
import Popularproduct from "../components/home/PopularProduct";
import Promotion from "../components/home/Promotion";
import Quicklink from "../components/home/QuickLink";
import ReturnTop from "../components/overviews/ReturnTop";

function Home(props) {
  return (
    <div>
      <Kayadescription />
      <div className='d-flex'>
        <Quicklink id='1' title='KAYA' subtitle='Exchange' />
        <Quicklink id='2' title='KAYA' subtitle='Mall' />
      </div>
      <Promotion pro='pro1' />
      <Popularproduct />
      <Partner />
      <ReturnTop />
    </div>
  );
}
export default Home;
