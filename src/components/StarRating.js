import Star from './Star';
import { useState } from 'react';

function StarRating() {
  const [rating, setRating] = useState(0);
  const review = ['Bad', 'Ok', 'Good', 'Very Good', 'Excellent'];

  return (
    <>
      <div className='flex'>
        {[...Array(5)].map((_, index) => (
          /* 
            The above part of code is a way to create the five stars without hard-coding them. 

            - [...Array(5)]: It creates an array with 5 undefined elements which spread into a new 
            array via the spread operator ([...])
           
            - map((_, index) => ()): The map() function iterates over each element of the array and 
            applies the provided callback function to each element, where index represents the 
            index of each element, and  _ is just a placeholder for the elements which is ignored 
            because the index of the element is used and not its value.
          */
         
          <Star 
            key={index} 
            select={index < rating} 
            onSelect={() => setRating(index + 1)} 
          />
        ))}
      </div>
      <h2>{rating > 0 ? review[rating - 1] : 'Select stars to give ratings'}</h2>
    </>
  );
}

export default StarRating;