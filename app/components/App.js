import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LyricsGenerator from "./SongGenerator/Generate";
import NavBar from "./NavBar";
import Footer from "./Footer";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar/>
                    <Switch>
                        <Route component={LyricsGenerator}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;