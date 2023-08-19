import React from "react";
import "./stats.css";

function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🛫</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed === true).length;
  const packedRatio = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedRatio === 100
          ? "You got everything Ready to go🛫"
          : `You have ${numItems} items on your list, and you already packed
        ${numPackedItems} (%${packedRatio})`}
      </em>
    </footer>
  );
}

export default Stats;
