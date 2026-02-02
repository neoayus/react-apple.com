import { useState } from "react";
import Poster from "./Poster";
import "./Slider.css";

export default function Slider(){

  const [index, setIndex] = useState(0);

  return(
    <>
      <div className="slider">
        <SliderTrack index={index}/> 
        <SliderNav index={index} setIndex={setIndex}/>
      </div>
      <Pagination index={index} setIndex={setIndex}/>
    </>
  )  
}

function SliderTrack({index}) {
  const vw = window.innerWidth;
  return(
    <div className="sliderTrack" style={{translate: `${-(index * vw)}px`}}>
      <Poster
        image="/poster01.png"
        genre="Comedy"
        desc={<>A heartful comedy about life and <br/> other hazard</>}
      />
      <Poster
        image="/poster02.jpg"
        genre="Thriller"
        desc="There's more to wrok than life."
      />
      <Poster
        image="/poster03.jpg"
        // genre="Comedy"
        desc="Live MLB games, every Friday."
      />
      <Poster
        image="/poster04.jpg"
        genre="Action"
        desc={<>It's only a legend until you <br/> discover it.</>}
      />
      <Poster
        image="/poster05.jpg"
        genre="Comedy"
        desc="Kindness makes a Comeback."
      />
      <Poster
        image="/poster06.jpg"
        genre="Serial"
        desc={<>A search for serial arsonists <br/> ignites a twisted games of secrets <br/> and suspicions.</>}
      />
      <Poster
        image="/poster07.jpg"
        genre="Drama"
        desc="Live your best lief."
      />
      <Poster
        image="/poster08.jpg"
        // genre="Comedy"
        desc={<>Watch every club, every match, <br/> live-all season long.</>}
      />
      <Poster
        image="/poster09.jpg"
        genre="Drama"
        desc="New Season."
      />
      <Poster
        image="/poster10.jpg"
        genre="Sci-Fi"
        desc={<>Build to destroy, Forced to <br/> connect. </>}
      />
    </div>
  );
}

function SliderNav({index, setIndex}){
  
  function handleLeftClick(){
    if(index === 0) return ; 
    setIndex((index)=> index-1)
  }
  function handleRightClick(){
    if(index >= 9) return ; 
    setIndex((index)=> index+1)
  }

  return(
    <div className="slider-nav">
      <div className="slider-button left icon" onClick={handleLeftClick}>
        <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.49587 12.605L13.6924 1.74033C14.0966 1.34812 14.1033 0.705584 13.7074 0.30508C13.3106 -0.0962698 12.662 -0.102021 12.2586 0.290195L0.307656 11.8874C0.110124 12.0799 -0.000848749 12.3432 4.88865e-06 12.6174C0.00171216 12.8915 0.115075 13.1542 0.315168 13.3441L12.2661 24.7167C12.4645 24.9058 12.7204 25 12.9755 25C13.2447 25 13.5131 24.8951 13.714 24.6878C14.1059 24.2839 14.0934 23.6414 13.6848 23.2534L2.49587 12.605Z" fill="#6C6C6D"/>
        </svg>
      </div>
      <div className="slider-button right icon" onClick={handleRightClick}>
        <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5041 12.6049L0.307642 1.74032C-0.0966407 1.34811 -0.103299 0.705579 0.292618 0.305078C0.689389 -0.0962691 1.33798 -0.10202 1.74141 0.290193L13.6923 11.8873C13.8899 12.0798 14.0008 12.3431 14 12.6173C13.9983 12.8914 13.8849 13.1541 13.6848 13.344L1.7339 24.7167C1.53552 24.9058 1.27959 25 1.02453 25C0.75529 25 0.486906 24.8951 0.28596 24.6878C-0.10586 24.2839 -0.0933969 23.6414 0.315154 23.2534L11.5041 12.6049Z" fill="#6C6C6D"/>
        </svg>
      </div>
    </div>
  )
}

function Pagination({index, setIndex}){
  return(
    <div className="pagination">
      <PDot index={index} pIndex={0} setIndex={setIndex}/> 
      <PDot index={index} pIndex={1} setIndex={setIndex}/> 
      <PDot index={index} pIndex={2} setIndex={setIndex}/> 
      <PDot index={index} pIndex={3} setIndex={setIndex}/> 
      <PDot index={index} pIndex={4} setIndex={setIndex}/> 
      <PDot index={index} pIndex={5} setIndex={setIndex}/> 
      <PDot index={index} pIndex={6} setIndex={setIndex}/> 
      <PDot index={index} pIndex={7} setIndex={setIndex}/> 
      <PDot index={index} pIndex={8} setIndex={setIndex}/> 
      <PDot index={index} pIndex={9} setIndex={setIndex}/> 
    </div>
  ) 
}

function PDot({index, pIndex, setIndex}){

  function handleClick(){
    setIndex(()=>pIndex);
  } 

  return(
    <div className="dot" onClick={handleClick} style={{backgroundColor : `${index == pIndex ? "#1e1e1e" : "#6c6c6d"}`}}></div>
  )    
}