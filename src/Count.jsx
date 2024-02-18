import React from "react";
import { useState } from "react";

function Count(props){
    let [cart,setCart] = useState(true);
  let {count,setCount} = props
    return <>
      {/* <!-- Product actions--> */}
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
                <button class="btn btn-outline-dark mt-auto" onClick={()=>{
                    setCart(!cart);
                    {cart?(setCount(count+1)):(setCount(count-1))}
                }}>
                    <a class="btn  mt-auto"  href="#">{cart?"Add to cart" :"Remove from cart"}</a>
            </button>
            </div>                
             </div>
    </>
}

export default Count 