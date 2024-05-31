import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';



const TitleCards = ({tittle,category}) => {

  const[apiData,setApiData]=useState([]); 

  const cardsRef=useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmU3ZmNiMjIyN2JhNTMyNWZhMjRkMjA1OGNhYjhkMiIsInN1YiI6IjY2NThjOGE0OThmZjNmM2VlNDZjMmU1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LeNhGLiEGTX1HP5y1vT4uzXOLhp0mT5P0LMJ7rgj6No'
    }
  };
  
 



// const handlewheel =(event)=>{
//   event.preventDefault();
//   cardsRef.current.scrollLeft += event.delataY;
// }


const handleWheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
};




useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));

//   cardsRef.current.addEventListener('wheel',handlewheel);
// },[]);


const currentRef = cardsRef.current;
if (currentRef) {
  currentRef.addEventListener('wheel', handleWheel);
}

return () => {
  if (currentRef) {
    currentRef.removeEventListener('wheel', handleWheel);
  }
};
}, [category]);




  return (
    <div className='titlecards'>
      <h2>{tittle?tittle:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        } )}
      </div>
    </div>
  )
}

export default TitleCards
