"use client";
import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
const generatePayload = require("promptpay-qr");

export default function Test() {
  const [phoneNumber, setPhoneNumber] = useState("081-808-8711");
  const [amount, setAmount] = useState(2.0);
  const [qrCode, setqrCode] = useState("sample");
  
//   setqrCode(payLoad);

	function genPromptPay() {
		var payLoad = generatePayload("081-808-8711", { amount });
		return payLoad
	}

  return (
    <div>
      Hello World!
      <QRCodeSVG value={genPromptPay()} />
    </div>
  );
}
