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

                <Card title='Summary'>
                    <p>
                        he/him <br />
                        software engineer student<br />

                    </p>


                </Card>

            </div>
        )
    }
}

export default SidePannel;

