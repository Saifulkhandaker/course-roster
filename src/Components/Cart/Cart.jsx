const Cart = ({ selectedCard, remainning, totalCost }) => {
  return (
    <div className="bg-base-100 shadow-xl py-5 px-3">
      <h1 className="w-full text-[#2F80ED] text-lg font-bold px-2">
        Credit Hour Remainning:{remainning}{" "}
      </h1>
      <hr className="w-full mt-2" />
      <h1 className="text-lg font-bold mt-5">Course Name:</h1>
      {selectedCard.map((card) => (
        <li className="text-sm text-[#1c1b1b99] font-medium mt-2">
          {card.title}
        </li>
      ))}
      <hr className="w-full mt-5" />
      <h2 className="mt-2 text-sm font-medium">
        Total Credit Hour:{totalCost}{" "}
      </h2>
    </div>
  );
};

export default Cart;
