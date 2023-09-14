import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setCards(data))
    },[])




    return (
        <div className='w-11/12 mx-auto md:flex justify-between gap-5'>
            
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {
                cards.map(card => (
                <Card
                card={card}
                ></Card>))
            }
            </div>
            <div className="mt-5">
                <Cart></Cart>
            </div>

            
        </div>
    );
};

export default Cards;