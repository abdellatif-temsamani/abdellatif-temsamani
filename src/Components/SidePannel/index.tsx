import { Component } from 'react';
import './SidePannel.css';
import { Card, CardLink } from './Components/'

class SidePannel extends Component {
    render() {
        return (
            <div className="SidePannel" >
                <Card title='Personal Information'>

                    <CardLink title='Phone' >
                        <a>+212 6 17 36 16 10</a>
                    </CardLink>

                    <CardLink title='E-mail' >
                        <a href="mailto:abdellatif.devlog@gmail.com" target="_">abdellatif.devlog@gmail.com</a>
                    </CardLink>

                    <CardLink title='Github' >
                        <a href="https://github.com/abdellatif-temsamani" target="_">abdellatif-temsamani</a>
                    </CardLink>

                    <CardLink title='Linkden' >
                        <a href="https://www.linkedin.com/in/abdellatif-temsamani-399999225/" target="_">abdellatif-temsamani</a>
                    </CardLink>

                </Card>

                <Card title='Skill'>
                    <h3 className="skill-title">Languages</h3>
                    <ul>
                        <li>JavaScript/typescript</li>
                        <li>Python</li>
                        <li>bash</li>
                        <li>HTML/CSS</li>
                        <li>rust</li>
                        <li>SQL</li>
                    </ul>

                    <h3 className="skill-title">Frameworks </h3>
                    <ul>
                        <li>React</li>
                        <li>NodeJS</li>
                        <li>dotnet</li>
                    </ul>

                    <h3 className="skill-title">others</h3>
                    <ul>
                        <li>Linux</li>
                        <li>docker</li>
                        <li>Git</li>
                        <li>GitHub</li>
                    </ul>

                    <h3 className="skill-title">non-technical</h3>
                    <ul>
                        <li>English</li>
                        <li>Communication</li>
                        <li>Teamwork</li>
                        <li>Problem Solving</li>
                    </ul>

                </Card>

            </div>
        )
    }
}

export default SidePannel;

