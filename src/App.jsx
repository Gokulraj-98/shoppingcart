import React, { useState } from "react";
import { Card1 } from './Card1'
import Cart from './Cart'

function App() {

  let [count, setCount] = useState(0)


  const data = [
    {
      Productname: "Fancy Product",
      Productprice: "$40.00 ",
      discountedPrice: "- $80.00",
      Productactions: "View options"
    },
    {
      Productname: "Special Item",
      Productprice: "$20.00 ",
      discountedPrice: "- $18.00",
      Productactions: "Add to cart"
    },
    {
      Productname: "Sale Item",
      Productprice: "$50.00 ",
      discountedPrice: "- $25.00",
      Productactions: "Add to cart"
    },
    {
      Productname: "Popular Item",
      Productprice: "$40.00",
      Productactions: "Add to cart"
    },
    {
      Productname: "Sale Item",
      Productprice: "$50.00 ",
      discountedPrice: "- $25.00",
      Productactions: "Add to cart"
    },
    {
      Productname: "Fancy Product",
      Productprice: "$120.00 ",
      discountedPrice: "- $280.00",
      Productactions: "View options"
    },
    {
      Productname: "Special Item",
      Productprice: "$20.00",
      discountedPrice: "- $18.00",
      Productactions: "Add to cart"
    },
    {
      Productname: "Popular Item",
      Productprice: "$40.00",
      Productactions: "Add to cart"
    },


  ]
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>

          {/* Navbar toggler for mobile view */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible navbar content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Cart Icon: Visible by default and positioned at the top-right corner */}
          <div className="d-flex ms-auto">
            <button className="btn btn-outline-dark position-relative" type="button">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {count}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/*Header*/}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>
      </header>
      {/*Section*/}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              data.map((e, i) => {
                return <Card1 details={e} key={i} count={count} setCount={setCount} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default App
