"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function handleAddToCart(item) {
    setCart((prevCart) => [...prevCart, item]);
    closeModal();
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
      <div className="grid grid-cols-3 gap-4 mt-4">
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
        <div className="col-span-2 rounded-2xl bg-tea-300 p-4 text-green-800">
          <FontAwesomeIcon icon={faShoppingCart} size="xl" />
          <div className="text-green-800 font-bold"></div>
          {cart.length === 0 ? (
            <div className="text-gray-400 pt-2">Cart is empty</div>
          ) : (
            <ul className="text-green-800 text-lg">
              {cart.map((item, index) => (
                <li key={index} className="flex flex-col mb-2">
                  <div className="flex justify-between items-center">
                    {item.name} - {item.price}฿
                    <button
                      className="text-tea-500 bg-tea-200  px-2.5 py-1 rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300"
                      onClick={() => handleRemoveFromCart(index)}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>
                  {/* Display selected options */}
                  <ul className="ml-4 text-sm text-gray-600">
                    {item.options?.map((option, idx) => (
                      <li key={idx}>{option}</li>
                    ))}
                  </ul>
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

const Modal = ({ item, onClose, onAddToCart }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  function toggleOption(option) {
    setSelectedOptions((prevOptions) =>
      prevOptions.includes(option)
        ? prevOptions.filter((o) => o !== option)
        : [...prevOptions, option]
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-5xl">
        <h2 className="text-2xl font-bold mb-4">Options</h2>
        <div className="grid grid-cols-3 gap-4">
          <OptionBox
            title="Extra Chashu Pork"
            price= {70}
            isSelected={selectedOptions.includes("Extra Chashu Pork")}
            onClick={() => toggleOption("Extra Chashu Pork")}
          />
          <OptionBox
            title="Marinated Egg"
            price= {70}
            isSelected={selectedOptions.includes("Marinated Egg")}
            onClick={() => toggleOption("Marinated Egg")}
          />
          <OptionBox
            title="x2 Spicy"
            price= {70}
            isSelected={selectedOptions.includes("x2 Spicy")}
            onClick={() => toggleOption("x2 Spicy")}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <OptionBox
            title="x3 spicy"
            price= {70}
            isSelected={selectedOptions.includes("x3 spicy")}
            onClick={() => toggleOption("x3 spicy")}
          />
          <OptionBox
            title="Pickle"
            price= {70}
            isSelected={selectedOptions.includes("Pickle")}
            onClick={() => toggleOption([title,price])}
          />
          <OptionBox
            title="Extra noodles"
            price={70}
            isSelected={selectedOptions.includes("Extra noodles")}
            onClick={() => toggleOption("Extra noodles")}
          />
        </div>
        <button
          className="bg-green-600 mr-2 mt-4 text-white font-bold py-2 px-4 rounded hover:bg-green-500 transition-all duration-300 mb-2"
          onClick={() => onAddToCart({ ...item, options: selectedOptions })}
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
};

const OptionBox = ({ title, price, isSelected, onClick }) => (
  <div
    className={`flex flex-col justify-between h-28 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
      isSelected ? "bg-green-300 text-white" : "bg-tea-200 text-black"
    }`}
    onClick={onClick}
  >
    <div className="text-lg font-bold">{title}</div>
    <div className="text-md">{price}฿</div>
  </div>
);


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
