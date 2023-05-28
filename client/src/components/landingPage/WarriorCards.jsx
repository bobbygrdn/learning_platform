import React from "react";
import WarriorCard from "./WarriorCard";
import "../../styles/landingPage/WarriorCard.css";

export default function WarriorCards() {
  return (
    <div className="warriorCards">
      <div className="warriors">
        <WarriorCard warrior="Samurai" />
        <WarriorCard warrior="Legionnaire" />
        <WarriorCard warrior="Spartan" />
        <WarriorCard warrior="Viking" />
      </div>
    </div>
  );
}
