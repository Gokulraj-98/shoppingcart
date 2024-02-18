import React from "react"
import Count from './Count'
import { useState } from "react";


function Card1(props){
   let {count,setCount} = props
    // const handleButtononClick = () =>{
    //     setCount(count+1)
    // };
    return <>
<div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem" ,right: "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">{props.details.Productname}</h5>
                                    {/* <!-- Product reviews--> */}
                                    {props.details.Productname==="Special Item" || props.details.Productname==="Popular Item" ?
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>: ""
                                    }
                                    {/* <!-- Product price--> */}
                                    <span className= {props.details.Productname!=="Popular Item"?"text-muted text-decoration-line-through":""}>{props.details.Productprice}</span>
                                   {props.details.discountedPrice}
                                </div>
                            </div>
                           <Count count={count} setCount={setCount} ></Count>
             {console.log(count)}
                 
                        </div>
                    </div>
    </>
}
export  {Card1};
