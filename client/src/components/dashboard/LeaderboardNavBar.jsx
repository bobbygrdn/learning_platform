import React from 'react';
import '../../styles/dashboard/LeaderboardNavBar.css'
import { useStore } from 'zustand';
import useTableStore from '../../store/useTableStore';

export default function LeaderboardNavBar() {

    const { setLeaderboard } = useStore(useTableStore);

    const handleRadioChange = (event) => {
        setLeaderboard(event.target.value);
    }

    return (
        <div className="radio-input">
            <label>
                <input value="0" name="value-radio" id="value-1" type="radio" defaultChecked onChange={handleRadioChange}></input>
                <span>Daily</span>
            </label>
            <label>
                <input value="1" name="value-radio" id="value-2" type="radio" onChange={handleRadioChange}></input>
                <span>Weekly</span>
            </label>
            <label>
                <input value="2" name="value-radio" id="value-3" type="radio" onChange={handleRadioChange}></input>
                <span>Monthly</span>
            </label>
            <label>
                <input value="3" name="value-radio" id="value-3" type="radio" onChange={handleRadioChange}></input>
                <span>All-Time</span>
            </label>
            <span className="selection"></span>
        </div>
    )
}
