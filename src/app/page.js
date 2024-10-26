"use client"; // This is a client component
import Head from 'next/head'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


export default function Home() {
  const [ramenButton1, setRamenButton1] = useState(false);
  const [ramenButton2, setRamenButton2] = useState(false);
  const [ramenButton3, setRamenButton3] = useState(false);
  const [cart, setCart] = useState([]);

  function handleAddToCart(item) {
    setCart((prevCart) => [...prevCart, item]); // Adds the clicked item to the cart
    console.log("Added to cart:", item);
  }

  function handleRemoveFromCart(index) {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index)); // Removes item by index
  }

  return (
    <div>

      <div className="max-w-6xl p-2 mx-auto h-screen bg-tea-200">
        <div className="text-4xl text-green-800 font-bold mb-2">
          Slash Ramen
          
        </div>

        <div className="grid grid-cols-3 gap-4">
          <NewRamenButton
            price = "180"
            ramenname="Ramen & Half-boiled salted egg"
            image="/images/mar22_ramen_12_e4tdxz.webp"
            onAddToCart={() =>
              handleAddToCart("Ramen & Half-boiled salted egg")
            }
          />
          <NewRamenButton
            price = "170"
            ramenname="Tonkotsu Ramen"
            image="/images/tonkotsuramenfront.jpg"
            onAddToCart={() => handleAddToCart("Tonkotsu Ramen")}
          />
          <NewRamenButton
            price = "190"
            ramenname="Shoyu Ramen"
            image="/images/tonkotsuramenfront.jpg"
            onAddToCart={() => handleAddToCart("Shoyu Ramen")}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 pt-4">
          <NewRamenButton
            price = "180"
            ramenname="Ajitama"
            image="/images/mar22_ramen_12_e4tdxz.webp"
            onAddToCart={() =>
              handleAddToCart("Ramen & Half-boiled salted egg")
            }
          />
          <NewRamenButton
            price = "170"
            ramenname="Miso"
            image="/images/tonkotsuramenfront.jpg"
            onAddToCart={() => handleAddToCart("Tonkotsu Ramen")}
          />
          <NewRamenButton
            price = "190"
            ramenname="Spicy"
            image="/images/tonkotsuramenfront.jpg"
            onAddToCart={() => handleAddToCart("Shoyu Ramen")}
          />
        </div>

        <div className="grid grid-cols-6 gap-4 pt-4">
          <OptionBox
            title="Extra Chashu Pork"
            price="70฿"
            disabled={!ramenButton1}
          />
          <OptionBox
            title="Marinated Egg"
            price="70฿"
            disabled={!ramenButton2}
          />
          <OptionBox
            title="Extra Chashu Pork"
            price="70฿"
            disabled={!ramenButton3}
          />
          <OptionBox title="Extra Chashu Pork" price="70฿" disabled={true} />
          <OptionBox title="Extra Chashu Pork" price="70฿" disabled={true} />
          <OptionBox title="Extra Chashu Pork" price="70฿" disabled={true} />
        </div>

        <div className="grid grid-cols-6 gap-4 pt-4">
          <OptionBox title="3X Spicy" price="30฿" disabled={!ramenButton2} />
          <OptionBox title="2X Spicy" price="20฿" disabled={!ramenButton3} />
          <OptionBox title="1X Spicy" price="" disabled={!ramenButton1} />
          <OptionBox title="" price="" disabled={true} />
          <OptionBox title="" price="" disabled={true} />
          <OptionBox title="" price="" disabled={true} />
        </div>

        <div className="pt-6">
          <div className="grid grid-cols-3 gap-4 h-44">
            <div className="col-span-2 border-2 rounded-2xl bg-gray-200 p-4 flex-space text-green-800">
              <div>
                <FontAwesomeIcon icon={faShoppingCart} size="xl" />
              </div>
              <div className="text-green-800 font-bold "></div>
              {cart.length === 0 ? (
                <div className="text-gray-400 pt-2">Cart is empty</div>
              ) : (
                <ul className="text-green-800 text-lg">
                  {cart.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      {item}
                      <button
                        className="text-red-500 bg-white border-2 px-2.5 py-1 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300"
                        onClick={() => handleRemoveFromCart(index)}
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="font-bold cursor-pointer text-xl bg-green-600 hover:bg-green-500 
            transition-all duration-300 block h-20 content-center text-center rounded-2xl text-tea-200">
              Pay Button
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const OptionBox = (props) => {
  return (
    <div
      className={`flex flex-col justify-between ${
        props.disabled ? "bg-gray-200" : "hover:bg-slate-100 bg-green-200"
      }
     transition-all duration-300 h-28 rounded-xl p-4 cursor-pointer`}
      style={{ opacity: props.disabled ? 0.5 : 1 }}
      disabled={props.disabled}
    >
      <div className="text-md font-bold">{props.title}</div>
      <div className="text-md">{props.price}</div>
    </div>
  );
};
const NewRamenButton = (props) => {
  return (
    <div className="flex flex-col h-64 rounded-xl overflow-hidden shadow">
      <div
        className="h-4/6 bg-cover"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="flex h-2/6">
        <div className="flex flex-col bg-tea-300 w-8/12 p-2 justify-between">
          <p className="text-md text-green-800 font-normal">{props.ramenname}</p>
          <p className="text-3xl text-right font-bold text-green-800">{props.price}฿</p>
        </div>
        <div className="flex w-4/12 bg-tea-300 items-center justify-center">
          <button
            className="rounded-lg text-md py-1 px-2 border-8 bg-red-600 border-l-red-500 border-t-red-400 border-b-red-800 border-r-red-700"
            onClick={props.onAddToCart}
          >
            {/* <div className="bg-red-500 py-1 px-2 rounded-full"> */}
            <FontAwesomeIcon icon={faShoppingCart} className='text-tea-100'/>{" "}
            <span className="font-bold text-tea-100">Order</span>
            {/* </div> */}
          </button>
        </div>
      </div>
    </div>
  );
};

