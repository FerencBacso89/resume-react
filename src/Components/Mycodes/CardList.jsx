import'./card.css';
import {cardData} from './cardData';

import React from 'react'

function CardList() {
  return (
    <>
    <section className='codeContainer'>
        <h2 className='codeTitle'>Projects & code snipets</h2>
          <section className="cardList">
            {cardData.map((code) => {
              return (
                <Codecard key={code.id} {...code} ></Codecard>
              )//... spread oerator include all property
            })}
          </section>
      </section>
    </>
  )
}
const Codecard=({img, project, skills, category, description, url})=>{
  //click event handler
const clickHandler = () =>{
    window.open(url,'_blank');
};
    return(
        <article className='card'>
            <img src={img} alt=''></img>
            <h4>{project}</h4>
            <h5>Description:</h5>
            <h5>{description}</h5>
            <button className='link' type="button"  onClick={clickHandler}>View on web</button>
        </article>
        
    )

}

export default CardList
