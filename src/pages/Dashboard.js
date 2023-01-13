import React from 'react'
import { Link } from 'react-router-dom';
import stocks from '../data'

const Dashboard = (props) => {
    return (
        <div className="stocks">
            
                {stocks.map((s) => {
                    const { name, symbol } = s;
                    
                    return (
                        //only use a colon for parameters and routes 
                        <Link to={`/${symbol}`}>
                            <h2>{name }</h2>

                        </Link>
                    )
                })}
            
    </div>
)

};

export default Dashboard