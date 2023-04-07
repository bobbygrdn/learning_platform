import React from 'react';
import '../../styles/landingPage/Footer.css';

export default function Footer() {
    return (
        <footer>
            <p className="copyright">Copyright © 2023 Valor Academy. All rights reserved.</p>
            <p className="media">Follow us on social media for news, updates, and promotions.</p>
            <ul>
                <li>
                    <a href="/terms">Terms of Service</a>
                </li>
                <li>
                    <a href="/privacy">Privacy Policy</a>

                </li>
                <li>
                    <a href="https://github.com/bobbygrdn/robert_gordon_capstone.git">GitHub</a>
                </li>
                <li>
                    <a href="https://bobbygrdn.atlassian.net/wiki/spaces/VA/pages/7012354/Documentation?atlOrigin=eyJpIjoiODRkZmIzNWU2YjIxNGEyYjliZDAyMTVlYjExN2QyN2QiLCJwIjoiaiJ9">Jira</a>
                </li>
            </ul>
        </footer>
    )
}
