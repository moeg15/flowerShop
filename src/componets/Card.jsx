import './card.css';
import PopUp from './PopUp';
import { useState } from 'react';

export default function Card({ price, index, name, description, photoUrl }) {
  const [buttonpopup, setButtonpopup] = useState(false);

  return (
    <div className="box">
      <div className="photo2">
        <img className="photos" src={photoUrl} alt="" />
      </div>
      <div className="title">
        <h1>Name: {name}</h1>
      </div>
      <div className="details">
        <div className="description">
          <button onClick={() => setButtonpopup(true)}>Learn more</button>
        </div>
        <div className="price">{price}</div>
      </div>
      <PopUp trigger={buttonpopup} setTrigger={setButtonpopup}>
        {description}
      </PopUp>
    </div>
  );
}