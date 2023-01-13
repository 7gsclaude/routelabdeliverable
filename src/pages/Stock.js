import React from 'react'
import { useState, useEffect } from 'react';
import stocks from '../data';
import { useParams } from 'react-router';


const Stock = (props) => {

    const [stock, setStock] = useState(null)
     // Grabbing the Currency symbol from the URL Param
  const { symbol } = useParams();

    // const function (params) {
    //     // useparams basically means use whats after the /  
    // function params and symbol params have nothing to do with eachtoher }

   
    const getStock = () => { 
        //.find returns a boolean until it finds a match 
        //.find looks for something thats true 
        const findStock = stocks.find(stock => symbol === stock.symbol)
            //^symbol is found from the useparams hook, and checks if its super equal to stock.symbol. looks at each key name and in this case matches symbol 
 //find looks for something that returns true. for whatever is inside of paranethesis 
    //find is iterator method. goes through each object 
        setStock(findStock);

        ///setStock becomes what it did on line 21
    }

    
    useEffect(() => {
          //fires once
    getStock();
  }, []);

    
    const loaded = () => {
    return (
      <div>
        <h1>
          {stock.lastPrice}/{stock.lastPrice}
        </h1>
        <h2>{stock.symbol}</h2>
      </div>
    );
  };
  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  // If coin has data, run the loaded function, otherwise, run loading
    //js hits this line first before aanything 
    //
  return stock ? loaded() : loading();
};

    


export default Stock