import React from "react";
import "./Cart.css"

const Cart = ({selectedActors, remaining, totalCost}) =>{
    return(
        <div>

            <h3>Total actor:{selectedActors.length}</h3>
            <h3>Total cost :{totalCost}</h3>
            <h3>Remaining :{remaining}</h3>
            {
                selectedActors.map((actor) =>(
                    <li key={actor.id}>{actor.name}</li>
                    ))}
        </div>
    );
};
export default Cart;