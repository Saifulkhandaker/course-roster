import { IoBookSharp } from 'react-icons/io5';


const Card = ({ card }) => {
  const { title, image, description, price, credit } = card;
  return (
    <div>
      {/* cards */}
      <div className="card text-center bg-base-100 shadow-xl ">
        <figure className="pt-6">
          <img 
            src={image}
            alt="Shoes"
            className="w-11/12"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-lg font-bold">{title}</h2>
          <p className='text-lg'>{description}</p>
          <div className='flex gap-20'>
            <p className='font-medium text-xl'>$ Price : {price}</p>
           
           <div className='flex gap-2 mb-3'>
           <p className='mt-2 text-xl text-gray-400'><IoBookSharp></IoBookSharp></p>
            <p className='font-medium text-xl'>Credit : {credit}hr</p>
           </div>
            
          </div>
            <button className="btn w-full text-lg text-white font-semibold bg-[#2F80ED]">Select</button>
        </div>
      </div>
    </div>
  );Name
};

export default Card;
