import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Axios  from "axios";
import Slide from './Slide';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";



export default function CarouselTemp() {

    

    const [data, setData] = useState([]);
   

    

    React.useEffect(() => {


        Axios.get("https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=10&apiKey=081201de61b44af39ce8df42b532dcdb")
        .then((response) => setData(response.data.articles))
        .catch(function (err) {
            console.log('ERROR: ', err)
          })

        console.log(data);

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
            <a href={item.url} target="_blank" className="container">
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