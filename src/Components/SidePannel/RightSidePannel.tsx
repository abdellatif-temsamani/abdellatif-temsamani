import { Component } from 'react';
import './SidePannel.css';
import { Card } from './Components/'

class RightSidePannel extends Component {
    render() {
        return (
            <div className="SidePannel Right" >
                <Card title='Skill'>
                    <div className="flex">

                        <div className='skillCard'>
                            <h3 className="skill-title">Languages</h3>
                            <ul>
                                <li>JavaScript/typescript</li>
                                <li>Python</li>
                                <li>bash</li>
                                <li>HTML/CSS</li>
                                <li>rust</li>
                                <li>SQL</li>
                            </ul>
                        </div>

                        <div className='skillCard'>
                            <h3 className="skill-title">Frameworks </h3>
                            <ul>
                                <li>React</li>
                                <li>NodeJS</li>
                                <li>dotnet</li>
                            </ul>
                        </div>

                    </div>

                    <div className="flex">

                        <div className='skillCard'>
                            <h3 className="skill-title">others</h3>
                            <ul>
                                <li>Linux</li>
                                <li>docker</li>
                                <li>Git</li>
                                <li>GitHub</li>
                            </ul>
                        </div>

                        <div className='skillCard'>
                            <h3 className="skill-title">non-technical</h3>
                            <ul>
                                <li>English</li>
                                <li>Communication</li>
                                <li>Teamwork</li>
                                <li>Problem Solving</li>
                            </ul>
                        </div>

                    </div>
                </Card>

            </div>
        )
    }
}

export default RightSidePannel;

