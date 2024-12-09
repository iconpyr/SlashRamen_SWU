"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [amount, setAmount] = useState(0); // State to store total price

  const totalPrice = cart.reduce((sum, item) => {
    // Safely calculate total options price for the item
    const totalOptionsPrice = (item.selectedOptions?.reduce(
      (optionSum, option) => optionSum + (option.price || 0),
      0
    )) || 0;
  
    // Add item's base price and total options price to the running total
    return sum + (item.price || 0) + totalOptionsPrice;
  }, 0);
  


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
          price={180}
          ramenname="Ramen & Half-boiled salted egg"
          image="/images/mar22_ramen_12_e4tdxz.webp"
          onButtonClick={() =>
            openModal({ name: "Ramen & Half-boiled salted egg", price: 180 })
          }
        />
        <NewRamenButton
          price={170}
          ramenname="Tonkotsu Ramen"
          image="/images/tonkotsuramenfront.jpg"
          onButtonClick={() =>
            openModal({ name: "Tonkotsu Ramen", price: 170 })
          }
        />
        <NewRamenButton
          price={190}
          ramenname="Shoyu Ramen"
          image="/images/tonkotsuramenfront.jpg"
          onButtonClick={() => openModal({ name: "Shoyu Ramen", price: 190 })}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <NewRamenButton
          price={180}
          ramenname="Ramen & Half-boiled salted egg"
          image="/images/mar22_ramen_12_e4tdxz.webp"
          onButtonClick={() =>
            openModal({ name: "Ramen & Half-boiled salted egg", price: 180 })
          }
        />
        <NewRamenButton
          price={170}
          ramenname="Tonkotsu Ramen"
          image="/images/tonkotsuramenfront.jpg"
          onButtonClick={() =>
            openModal({ name: "Tonkotsu Ramen", price: 170 })
          }
        />
        <NewRamenButton
          price={190}
          ramenname="Shoyu Ramen"
          image="/images/tonkotsuramenfront.jpg"
          onButtonClick={() => openModal({ name: "Shoyu Ramen", price: 190 })}
        />
      </div>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <Modal
          item={selectedItem}
          onClose={closeModal}
          onAddToCart={handleAddToCart}
        />
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
                    {item.name} - {item.totalPrice}฿
                    <button
                      className="text-tea-500 bg-tea-200  px-2.5 py-1 rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300"
                      onClick={() => handleRemoveFromCart(index)}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center text-green-800 font-bold text-xl">
            Total: {totalPrice}฿
          </div>
          <button
            className="w-full mt-2 bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-300"
            onClick={() => alert(`Paying ${totalPrice}฿`)} // Replace with your payment logic
          >
            Pay
          </button>
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

  const totalOptionsPrice = selectedOptions.reduce(
    (sum, option) => sum + option.price,
    0
  );
  const totalPrice = item.price + totalOptionsPrice;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-5xl">
        <h2 className="text-2xl font-bold mb-4">Options</h2>
        <div className="grid grid-cols-3 gap-4">
          <OptionBox
            title="Extra Chashu Pork"
            price={70}
            isSelected={selectedOptions.includes("Extra Chashu Pork")}
            onClick={() =>
              toggleOption({ title: "Extra Chashu Pork", price: 70 })
            }
          />
          <OptionBox
            title="Marinated Egg"
            price={70}
            isSelected={selectedOptions.includes("Marinated Egg")}
            onClick={() => toggleOption({ title: "Marinated Egg", price: 70 })}
          />
          <OptionBox
            title="x2 Spicy"
            price={70}
            isSelected={selectedOptions.includes("x2 Spicy")}
            onClick={() => toggleOption({ title: "x2 Spicy", price: 70 })}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <OptionBox
            title="x3 spicy"
            price={70}
            isSelected={selectedOptions.includes("x3 spicy")}
            onClick={() => toggleOption({ title: "x3 spicy", price: 70 })}
          />
          <OptionBox
            title="Pickle"
            price={70}
            isSelected={selectedOptions.includes("Pickle")}
            onClick={() => toggleOption({ title: "Pickle", price: 70 })}
          />
          <OptionBox
            title="Extra noodles"
            price={70}
            isSelected={selectedOptions.includes("Extra noodles")}
            onClick={() => toggleOption({ title: "Extra noodles", price: 70 })}
          />
        </div>
        <div className="text-xl font-bold mt-4">Total Price: {totalPrice}฿</div>
        <button
          className="bg-green-600 mr-2 mt-4 text-white font-bold py-2 px-4 rounded hover:bg-green-500 transition-all duration-300 mb-2"
          onClick={() =>
            onAddToCart({
              ...item,
              options: selectedOptions.map((option) => option.title),
              totalPrice,
            })
          }
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
