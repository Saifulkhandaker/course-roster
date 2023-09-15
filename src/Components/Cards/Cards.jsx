import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [remainning, setRemainning] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleCard = (card) => {
    const isExist = selectedCard.find((item) => item.id === card.id);

    let count = card.credit;
    if (isExist) {
      return toast("Course already in cart");
    } else {
      selectedCard.forEach((item) => {
        count = count + item.credit;
      });
      const totalRemaining = 20 - count;
      if (count > 20) {
        return toast("sorry your credit limit crossed");
      } else {
        setTotalCost(count);
        setRemainning(totalRemaining);
        setSelectedCard([...selectedCard, card]);
      }
    }
  };

  return (
    <div className="w-11/12 mx-auto lg:flex gap-5 mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {cards.map((card) => (
          <Card card={card} handleCard={handleCard}
          ></Card>
        ))}
      </div>
      <div className="mt-5 lg:mt-0">
        <Cart
          selectedCard={selectedCard}
          remainning={remainning}
          totalCost={totalCost}
        ></Cart>
      </div>
    </div>
  );
};

export default Cards;
