import { Component } from 'react';
import './SidePannel.css';

class SidePannel extends Component {
    render() {
        return (
            <div className="SidePannel" >
                <h1>Personal Information</h1>

                <h3><b>Phone:</b> +212 6 17 36 16 10</h3>
                <h3><b>Email:</b> abdellatif.devlog@gmail.com</h3>
            </div>
        )
    }
}

export default SidePannel;

