const Cart = ({ selectedCard, remainning, totalCost }) => {
  return (
    <div className="bg-base-100 shadow-xl py-5 px-3 ">
      <h1 className="w-full text-[#2F80ED] text-lg font-bold ">
        Credit Hour Remaining : {remainning}hr
      </h1>
      <hr className="w-full mt-2" />
      <h1 className="text-lg font-bold mt-5">Course Name :</h1>
      {selectedCard.map((card, index) => (
        <div className="text-sm text-[#1c1b1b99] font-medium mt-2">
          <span className="font-lg">{index + 1}. </span>
          {card.title}
        </div>
      ))}
      <hr className="w-full mt-5" />
      <h2 className="mt-2 text-lg font-medium">
        Total Credit Hour : {totalCost}
      </h2>
    </div>
  );
};

export default Cart;
