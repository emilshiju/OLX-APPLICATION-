import React, { useEffect ,useState} from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import Shimmer from '../shimmer';
function Home(props) {

  const [first,second]=useState(true)
  useEffect(()=>{
    second(false)
  },[])
  
  return (
    <>
    {first ? <Shimmer/>:
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
}
    </>
  );
}

export default Home;