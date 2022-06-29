import React from "react";
import Nav from './Nav';
import Header from './Header';
import TopCarousel from "./TopCarousel";
import CarouselTemp from "./CarouselTemp";
import PoliticsCarousel from "./PoliticsCarousel";
import EntCarousel from "./EntertainmentCarousel";
import BuiCarousel from "./BuisenessCarousel";
//081201de61b44af39ce8df42b532dcdb
function App() {






  return (
    <div className="App">
      <Header/>
      <Nav/>
      <h1 className="title-top" id="Top">Top Headlines</h1>
      <TopCarousel/>
      <h1 className="title-sports" id="Sports">Sports</h1>
      <CarouselTemp
      cat="sports"
      />
      <h1 className="title-sports" id ="Health">Health</h1>
      <PoliticsCarousel/>

      <h1 className="title-sports"  id="entertainment">Entertainment</h1>
      <EntCarousel/>

      <h1 className="title-sports" id="Buiseness">Buiseness</h1>
      <BuiCarousel/>



    </div>
  );
}

export default App;
