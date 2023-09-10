import React, { useState, useEffect } from 'react';
import LeaderboardNavBar from './LeaderboardNavBar';
import '../../styles/dashboard/Leaderboard.css'
import { useStore } from 'zustand';
import useTableStore from '../../store/useTableStore';

export default function Leaderboard() {
    const [leaderboardStats, setLeaderboardStats] = useState([]);

    const { leaderboard } = useStore(useTableStore);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/dummyData/leaderboardStats.json');
            const data = await response.json();
            setLeaderboardStats(data);
        };
        fetchData();
    }, [])

    let stats = leaderboardStats[leaderboard]

    return (
        <div className='leaderboardContainer'>
            <LeaderboardNavBar />
            <section className='leaderboardStats'>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Experience</th>
                            <th>Badges</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* eslint-disable-next-line array-callback-return */}
                        {stats && stats.map((element, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{element.username}</td>
                                <td>{element.experience}</td>
                                <td>{element.badges}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

