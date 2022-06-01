import { Component } from 'react';
import { Header, RightSidePannel, LeftSidePannel } from './Components';

class App extends Component {
    render() {
        return (
            <div className="App" >
                <Header />
                <div className="flex">
                    <LeftSidePannel />
                    <RightSidePannel />

                </div>
            </div>
        )
    }
}

export default App;
