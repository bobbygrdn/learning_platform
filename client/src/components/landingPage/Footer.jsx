import React from 'react';
import '../../styles/landingPage/Footer.css';

export default function Footer() {
    return (
        <footer data-testid="footer">
            <p className="copyright" data-testid="copyright">Copyright © 2023 Valor Academy. All rights reserved.</p>
            <p className="media" data-testid="media">Follow us on social media for news, updates, and promotions.</p>
            <ul data-testid="ul">
                <li data-testid="li">
                    <a href="/terms" data-testid="anchor">Terms of Service</a>
                </li>
                <li data-testid="li">
                    <a href="/privacy" data-testid="anchor">Privacy Policy</a>

                </li>
                <li data-testid="li">
                    <a href="https://github.com/bobbygrdn/robert_gordon_capstone.git" data-testid="anchor">GitHub</a>
                </li>
                <li data-testid="li">
                    <a href="https://bobbygrdn.atlassian.net/wiki/spaces/VA/pages/7012354/Documentation?atlOrigin=eyJpIjoiODRkZmIzNWU2YjIxNGEyYjliZDAyMTVlYjExN2QyN2QiLCJwIjoiaiJ9" data-testid="anchor">Jira</a>
                </li>
            </ul>
        </footer>
    )
}
