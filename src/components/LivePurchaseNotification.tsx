"use client";

import { useState, useEffect } from "react";
import { products } from "@/lib/products";

const firstNames = [
  "Mason", "Orion", "Magnus", "Alex", "Jordan", "Casey", "Riley", "Taylor",
  "Morgan", "Quinn", "Sage", "Blake", "Avery", "Cameron", "Dakota", "Emery",
  "Finley", "Harper", "Jamie", "Kendall", "Logan", "Morgan", "Noah", "Owen",
  "Parker", "Quinn", "Reese", "Skyler", "Tyler", "Wren"
];

const lastInitials = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function getRandomName() {
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastInitial = lastInitials[Math.floor(Math.random() * lastInitials.length)];
  return `${first} ${lastInitial}.`;
}

function getRandomProduct() {
  return products[Math.floor(Math.random() * products.length)];
}

export function LivePurchaseNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState({
    name: "",
    product: "",
  });

  useEffect(() => {
    const showNotification = () => {
      const name = getRandomName();
      const product = getRandomProduct();
      
      setNotification({
        name,
        product: product.name,
      });
      
      setIsVisible(true);
      
      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(showNotification, 3000);

    // Show subsequent notifications every 8-15 seconds
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 7000 + 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-slide-in-left">
      <div className="bg-white text-black rounded-lg shadow-2xl p-4 max-w-xs">
        <p className="text-sm">
          <span className="text-red-500 font-bold">{notification.name}</span>
          {" "}just purchased the {notification.product}!
        </p>
      </div>
    </div>
  );
}

