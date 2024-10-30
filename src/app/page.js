"use client";
import React from "react";
// import Head from 'next/head'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function handleAddToCart(item) {
    setCart((prevCart) => [...prevCart, item]);
    console.log("Added to cart:", item);
    closeModal(); // Close modal after adding to cart
  }

  function handleRemoveFromCart(index) {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  }

  function openModal(item) {
    setSelectedItem(item);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedItem(null);
  }

  return (
    <div className="max-w-6xl p-2 mx-auto h-screen bg-tea-200">
      <div className="text-4xl text-green-800 font-bold mb-2">Slash Ramen</div>

      {/* Ramen Buttons */}
      <div className="grid grid-cols-3 gap-4">
        <NewRamenButton
          price="180"
          ramenname="Ramen & Half-boiled salted egg"
          image="/images/mar22_ramen_12_e4tdxz.webp"
          onButtonClick={() =>
            openModal({ name: "Ramen & Half-boiled salted egg", price: 180 })
          }
        />
        <NewRamenButton
          price="170"
          ramenname="Tonkotsu Ramen"
          image="/images/tonkotsuramenfront.jpg"
          onButtonClick={() => openModal({ name: "Tonkotsu Ramen", price: 170 })}
        />
        <NewRamenButton
          price="190"
          ramenname="Shoyu Ramen"
          image="/images/tonkotsuramenfront.jpg"
          onButtonClick={() => openModal({ name: "Shoyu Ramen", price: 190 })}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <NewRamenButton
          price="180"
          ramenname="Ramen & Half-boiled salted egg"
          image="/images/mar22_ramen_12_e4tdxz.webp"
          onButtonClick={() =>
            openModal({ name: "Ramen & Half-boiled salted egg", price: 180 })
          }
        />
        <NewRamenButton
          price="170"
          ramenname="Tonkotsu Ramen"
          image="/images/tonkotsuramenfront.jpg"
          onButtonClick={() => openModal({ name: "Tonkotsu Ramen", price: 170 })}
        />
        <NewRamenButton
          price="190"
          ramenname="Shoyu Ramen"
          image="/images/tonkotsuramenfront.jpg"
          onButtonClick={() => openModal({ name: "Shoyu Ramen", price: 190 })}
        />
      </div>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <Modal item={selectedItem} onClose={closeModal} onAddToCart={handleAddToCart} />
      )}

      {/* Cart and Pay Button */}
      <div className="pt-6 grid grid-cols-3 gap-4 h-44">
        <div className="col-span-2  rounded-2xl bg-tea-300 p-4 flex-space text-green-800">
          <FontAwesomeIcon icon={faShoppingCart} size="xl" />
          <div className="text-green-800 font-bold "></div>
          {cart.length === 0 ? (
            <div className="text-gray-400 pt-2">Cart is empty</div>
          ) : (
            <ul className="text-green-800 text-lg">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
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
  );
}

const Modal = ({ item, onClose, onAddToCart }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg max-w-5xl ">
      <h2 className="text-2xl font-bold mb-4">Options</h2>
      <div className="grid grid-cols-6 gap-4 pt-4">
        <OptionBox title="Extra Chashu Pork" price="70฿" />
        <OptionBox title="Marinated Egg" price="70฿" />
        <OptionBox title="x2 spicy" price="70฿" />
        <OptionBox title="x3 spicy" price="70฿" />
        <OptionBox title="Extra Chashu Pork" price="70฿" />
        <OptionBox title="Extra Chashu Pork" price="70฿" />
      </div>
      <div className="grid grid-cols-6 gap-4 pt-4">
        <OptionBox title="Extra Chashu Pork" price="70฿" />
        <OptionBox title="Marinated Egg" price="70฿" />
        <OptionBox title="Extra Chashu Pork" price="70฿" />
        <OptionBox title="Extra Chashu Pork" price="70฿" />
        <OptionBox title="Extra Chashu Pork" price="70฿" />
        <OptionBox title="" price="" />
      </div>
      {/* <p className="text-lg mb-4">Price: {item.price}฿</p> */}
      <button
        className="bg-green-600 mr-2 mt-4 text-white font-bold py-2 px-4 rounded hover:bg-green-500 transition-all duration-300 mb-2"
        onClick={() => onAddToCart(item.name)}
      >
        Confirm
      </button>
      <button
        className="bg-tea-300 text-tea-700 font-bold py-2 px-4 rounded hover:bg-tea-200 transition-all duration-300"
        onClick={onClose}
      >
        Cancel
      </button>
    </div>
  </div>
);

const OptionBox = (props) => {
  return (
    <div className="flex flex-col justify-between hover:bg-slate-100 bg-tea-200
     transition-all duration-300 h-28 rounded-xl p-4 cursor-pointer"
    style={{opacity: 1}}
    disabled={true}>
      <div className="text-lg font-bold">{props.title}</div>
      <div className="text-md">{props.price}</div>
    </div>
  );
};

const NewRamenButton = ({ ramenname, price, image, onButtonClick }) => (
  <div className="flex flex-col h-64 rounded-xl overflow-hidden shadow">
    <div
      className="h-4/6 bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    <div className="flex h-2/6">
      <div className="flex flex-col bg-tea-300 w-8/12 p-2 justify-between">
        <p className="text-md text-green-800 font-normal">{ramenname}</p>
        <p className="text-3xl text-right font-bold text-green-800">{price}฿</p>
      </div>
      <div className="flex w-4/12 bg-tea-300 items-center justify-center">
        <button
          className="rounded-lg text-md py-1 px-2 border-8 bg-red-600 border-l-red-500 border-t-red-400 border-b-red-800 border-r-red-700"
          onClick={onButtonClick}
        >
          <FontAwesomeIcon icon={faShoppingCart} className="text-tea-100" />
          <span className="font-bold text-tea-100">Order</span>
        </button>
      </div>
    </div>
  </div>
);
