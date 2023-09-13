import React, { useEffect } from "react";
import Cart from "../Cart/Cart";
import "./Home.css"
import { useState } from "react";

const Home = () =>{
    const [allActors, setAllactors] = useState([]);
    const [selectedActors, setSelectedActor] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    useEffect(() => {
        fetch("./data.json")
        .then((res) => res.json())
        .then((data) => setAllactors(data))
    },[]);
     const handleSelectActor =(actor)=>{
        const isExist = selectedActors.find(item => item.id ==actor.id);
        let count = actor.salary;
        if(isExist){
            return alert("already Booked");
        }else{
            selectedActors.forEach(item => {
                count += item.salary;
            });
            const totalRemaining = 20000 - count;
            
            if(count >20000){
                return alert ("Finish Money");
            }else{
                setTotalCost(count);
            setRemaining(totalRemaining);
            setSelectedActor([...selectedActors, actor]);
            }
            
        }
        
     }
    
    return(
        <div className="container">
            <div className="home-container">
                <div className="card-container">
                {
                    allActors.map((actor) => (
                        <div key={actor.id} className="card">
                    <div className="card-img">
                        <img className="photo" src={actor.image} alt="" />
                    </div>
                    <h2>{actor.name} </h2>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Se</small></p>
                    <div className="info">
                        <p>salary: {actor.salary}$</p>
                        <p>{actor.role}</p>
                    </div>
                    <button onClick={() =>handleSelectActor(actor)} className="card-btn">Select</button>
                </div>
                    ))}
                </div>
                
                <div className="cart">
                    <Cart selectedActors ={selectedActors} remaining ={remaining} totalCost={totalCost}></Cart>
                </div>
            </div>
        </div>
    );
};
export default Home;