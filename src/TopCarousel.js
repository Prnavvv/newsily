import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Axios  from "axios";

import Slide from './Slide';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function TopCarousel() {

    const [data, setData] = useState([]);

    React.useEffect(() => {

        Axios.get("https://newsapi.org/v2/top-headlines?country=in&pageSize=10&apiKey=081201de61b44af39ce8df42b532dcdb")

        
        .then((response) => setData(response.data.articles))

        console.log(data);
        console.log("hi");

    }, [])




  return (
    
      <Swiper
      slidesPerView={1}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >

        {data.map(item => (<SwiperSlide>
            <a  href={item.url} target="_blank" className="container">
            <img className="article-img" src={item.urlToImage} alt=""  />
            
                <div className="info-container">
                <p className="title">{item.title}</p>
                <p className="desc">{item.description}</p>
                </div>
            </a>
        </SwiperSlide>))}

       
        
        
        
      </Swiper>
    
  );
}

/*
<SwiperSlide>
            <div className="container">
            <img className="article-img" src="data[0]." alt="" srcset="" />
            
                <div className="info-container">
                <p className="title">{}</p>
                <p>June 27 (Reuters) - Sam Bankman-Fried's FTX crypto exchange said it is not in talks to acquire Robinhood Markets Inc (HOOD.O), after a report on Monday claimed the exchange was exploring such a deal.</p>
                </div>
            </div>
        </SwiperSlide>
*/