import { Component } from 'react';
import './SidePannel.css';
import { Card } from './Components/'
import { GitHub, Mail, Linkedin, Phone, MessageCircle } from 'react-feather';

class RightSidePannel extends Component {
    age: number = new Date().getFullYear() - 2002;
    render() {
        return (
            <div className="SidePannel Left" >

                <Card title='Summary'>

                    <table>
                        <tr>
                            <td>Name:</td>
                            <td>Abdellatif Temsamani</td>
                        </tr>

                        <tr>
                            <td>Age:</td>
                            <td>{this.age}</td>
                        </tr>

                        <tr>
                            <td>Status:</td>
                            <td>Student</td>
                        </tr>

                        <tr>
                            <td>university:</td>
                            <td>Cardiff Metropolitian University</td>
                        </tr>

                        <tr>
                            <td>Major:</td>
                            <td>software engineering</td>
                        </tr>

                    </table>

                </Card>

                <Card title='Personal Information'>

                    <a href="tel:+212617361610">
                        <Phone color="var(--black)" size={64} className="Icon" />
                    </a>

                    <a href="sms:+212617361610">
                        <MessageCircle color="var(--black)" size={64} className="Icon" />
                    </a>

                    <a href="mailto:abdellatif.devlog@gmail.com" target="_">
                        <Mail color="var(--black)" size={64} className="Icon" />
                    </a>

                    <a href="https://github.com/abdellatif-temsamani" target="_">
                        <GitHub color="var(--black)" size={64} className="Icon" />
                    </a>

                    <a href="https://www.linkedin.com/in/abdellatif-temsamani-399999225/" target="_">
                        <Linkedin color="var(--black)" size={64} className="Icon" />
                    </a>

                </Card>

            </div>
        )
    }
}

export default RightSidePannel;

