/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react'

export default function WarriorCard({ warrior }) {
    const [warrior1, setWarrior1] = React.useState(null);
    const [warrior2, setWarrior2] = React.useState(null);
    const [isHovered, setIsHovered] = React.useState(false);

    useEffect(() => {
        switch (warrior) {
            case "Samurai":
                setWarrior1(process.env.PUBLIC_url + '/resources/male_samurai.png');
                setWarrior2(process.env.PUBLIC_url + '/resources/female_samurai.png');
                break;
            case "Legionnaire":
                setWarrior1(process.env.PUBLIC_url + '/resources/female_legionnaire.png');
                setWarrior2(process.env.PUBLIC_url + '/resources/male_legionnaire.png');
                break;
            case "Spartan":
                setWarrior1(process.env.PUBLIC_url + '/resources/male_spartan.png');
                setWarrior2(process.env.PUBLIC_url + '/resources/female_spartan.png');
                break;
            default:
                setWarrior1(process.env.PUBLIC_url + '/resources/female_viking.png');
                setWarrior2(process.env.PUBLIC_url + '/resources/male_viking.png');
                break;
        }
    }, [warrior]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <>
            <img className="card-img-top" src={isHovered ? warrior1 : warrior2} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} alt='warrior image' />
        </>
    )
}
