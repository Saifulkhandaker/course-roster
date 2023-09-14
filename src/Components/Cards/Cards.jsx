import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState([]);
    const [remainning, setRemainning] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    const handleCard = (card) =>{
        const isExist = selectedCard.find(item => item.id === card.id);

        let count = card.credit;
        if(isExist){
            return alert('Course alreay exist');
        }
        else{
            selectedCard.forEach(item => {
                count = count + item.credit;
            });
            const totalRemaining = 20 - count;
            setTotalCost(count);
            setRemainning(totalRemaining);
            setSelectedCard([...selectedCard, card]);
            
        }
        
    }



    return (
        <div className='w-11/12 mx-auto md:flex justify-between gap-5'>
            
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {
                cards.map(card => (
                <Card
                card={card}
                handleCard={handleCard}
                ></Card>))
            }
            </div>
            <div className="mt-5">
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