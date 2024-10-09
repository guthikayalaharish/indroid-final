// src/components/QRCodeDisplay.js
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRCodeDisplay = () => {
  const url = "http://192.168.1.6:3000/mobile"; // Use your local IP address with the mobile route
  return (
    <div>
      <h2>Scan the QR Code to Join the Game:</h2>
      <QRCodeSVG value={url} size={256} />
    </div>
  );
};

export default QRCodeDisplay;
