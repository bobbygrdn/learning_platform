/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { Image } from "react-bootstrap";

export default function WarriorCard({ warrior }) {
  const [warrior1, setWarrior1] = React.useState("");
  const [warrior2, setWarrior2] = React.useState("");
  const [isHovered, setIsHovered] = React.useState(false);

  useEffect(() => {
    switch (warrior) {
      case "Samurai":
        setWarrior1(process.env.PUBLIC_URL + "/resources/male_meijin.jpg");
        setWarrior2(process.env.PUBLIC_URL + "/resources/female_meijin.jpg");
        break;
      case "Legionnaire":
        setWarrior1(process.env.PUBLIC_URL + "/resources/female_imperator.jpg");
        setWarrior2(process.env.PUBLIC_URL + "/resources/male_imperator.jpg");
        break;
      case "Spartan":
        setWarrior1(process.env.PUBLIC_URL + "/resources/male_king.jpg");
        setWarrior2(process.env.PUBLIC_URL + "/resources/female_king.jpg");
        break;
      default:
        setWarrior1(
          process.env.PUBLIC_URL + "/resources/female_vikingking.jpg"
        );
        setWarrior2(process.env.PUBLIC_URL + "/resources/male_vikingking.jpg");
        break;
    }
  }, [warrior]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="warriorCard">
      <h1 className="warriorTitle">{warrior}</h1>
      <Image
        className="card"
        src={isHovered ? warrior1 : warrior2}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-testid="card"
        alt="warrior image"
      />
    </div>
  );
}
