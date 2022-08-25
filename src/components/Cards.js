import React, { useState } from "react";
import Card from "./Card";
import css from '../assets/css.png';
import django from '../assets/django.png';
import heroku from '../assets/heroku.png';
import html from '../assets/html.png';
import js from '../assets/js.png';
import qt from '../assets/qt.png';
import react from '../assets/react.png';
import unity from '../assets/unity.jpg';

const Cards = () => {
    const [count, setCount] = useState(0)
  const [items, setItems] = useState(
    [
      { id: 1, img: css, stat: "" },
      { id: 1, img: css, stat: "" },
      { id: 2, img: django, stat: "" },
      { id: 2, img: django, stat: "" },
      { id: 3, img: heroku, stat: "" },
      { id: 3, img: heroku, stat: "" },
      { id: 4, img: html, stat: "" },
      { id: 4, img: html, stat: "" },
      { id: 5, img: js, stat: "" },
      { id: 5, img: js, stat: "" },
      { id: 6, img: qt, stat: "" },
      { id: 6, img: qt, stat: "" },
      { id: 7, img: react, stat: "" },
      { id: 7, img: react, stat: "" },
      { id: 8, img: unity, stat: "" },
      { id: 8, img: unity, stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

    function check(current){
        if (items[current].id === items[prev].id) {
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
            setCount(count+5)
        } else {
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
                setCount(count-1)
            }, 1000)
        }
    }

  function handleClick(id) {
      if (prev === -1) {
          items[id].stat = "active"
          setItems([...items])
          setPrev(id)
      } else {
          check(id)
      }
  }

    return (
    <div>
    <h3>Score: {count}</h3>
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
     </div>
    </div>
  );
};

export default Cards;
