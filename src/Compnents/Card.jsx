import React from 'react';

const Card = (props) => {
  return (
    <>
        <div className="container">
            <div className="card">
                <h2>{props.firstName}</h2>
                <p>{props.pera}</p>
                 <ul>
                     <li key={props.toString()}>
                         {props.li1}
                     </li>
                     <li>
                     {props.li2}
                     </li>
                     <li>
                     {props.li3}
                     </li>
                     <li>
                     {props.li4}
                     </li>
                 </ul>
                 <a href={props.link} target="_blank">
                 {props.atribute}
                 </a>
            </div>
        </div>
    </>
  )
}

export default Card;