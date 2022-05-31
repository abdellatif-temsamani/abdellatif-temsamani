import { Component } from 'react';
import { Header, SidePannel } from './Components';

class App extends Component {
    render() {
        return (
            <div className="App" >
                <Header />
                <div className="flex">
                    <SidePannel />
                    <SidePannel />

                </div>
            </div>
        )
    }
}

export default App;
