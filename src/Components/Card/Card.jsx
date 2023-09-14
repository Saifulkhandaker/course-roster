import { IoBookSharp } from "react-icons/io5";

const Card = ({ card, handleCard }) => {
  const { title, image, description, price, credit } = card;
  return (
    <div>
      {/* cards */}
      <div className="card text-center bg-base-100 shadow-xl ">
        <figure className="pt-6">
          <img src={image} alt="Shoes" className="w-11/12" />
        </figure>
        <div className="card-body items-left text-left">
          <h2 className="card-title text-lg font-bold">{title}</h2>
          <p className="text-lg">{description}</p>
          <div className="flex">
            <p className="font-medium text-lg">$ Price : {price}</p>

            <div className="flex gap-2 mb-3">
              <p className="mt-2 text-xl text-gray-400">
                <IoBookSharp></IoBookSharp>
              </p>
              <p className="font-medium text-lg">Credit : {credit}hr</p>
            </div>
          </div>
          <button
            onClick={() => handleCard(card)}
            className="btn w-full text-lg text-white font-semibold bg-[#2F80ED]"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
