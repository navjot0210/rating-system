# Rating System React Application

### Welcome to the Rating System React Application! 
With this application, you can dynamically rate items and open/close a dialog box. It allows you to 
give a star rating alongwith a review based on the selected stars. It also has a dialog which is 
created using ```components``` and ```props``` in ```React``` . 

## Structure
The project follows a simple structure, with separate components for the star rating system and the 
dialog box.

- StarRating: This component contains the star rating system. It dynamically renders five Star 
components using the map() method and manages the state of the rating.
```React
{[...Array(5)].map((_, index) => (
  <Star 
    key={index} 
    select={index < rating} 
    onSelect={() => setRating(index + 1)} 
  />
))}
```

- Star: The Star component represents an individual star in the rating system. It receives props 
from the StarRating component, such as select (whether the star is selected) and onClick (function 
to handle click events).
- Dialog: The Dialog component represents a dialog box. It contains a button to close the dialog, 
and receives a function as a prop from its parent component (App) to handle the close action.

## Dependencies
The project utilizes the react-icon package to access the ```FaStar``` icon, which is used to 
represent the stars in the rating system.

## Demo

Click [here](https://navjot0210.github.io/rating-system/) to test the application.