import { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="Header" >
                <div className="right">
                    <img src="/profile.jpeg" alt="profile" />
                </div>
                <div>
                    <h3>Abdellatif Mkaref Temsamani</h3>
                    <p>software engineer</p>
                </div>
            </header>
        )
    }
}

export default Header;

