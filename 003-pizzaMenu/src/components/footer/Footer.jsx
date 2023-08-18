import React from "react";
import "./footer.css";
import { Order } from "../index";

function Footer() {
  const hour = new Date().getHours();
  const openingHour = 10;
  const closingHour = 22;
  const isOpen = hour >= openingHour && hour <= closingHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closingHour} openHour={openingHour} />
      ) : (
        <p>
          We're happy to welcome you between {openingHour}:00 and {closingHour}
          :00.
        </p>
      )}
    </footer>
  );
}

export default Footer;
