import { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="Header" >
                <img src="/profile.jpeg" alt="profile" />
                <div>
                    <h3>Abdellatif Mkared Temsamani</h3>
                    <p>software engineer</p>
                </div>
            </header>
        )
    }
}

export default Header;

