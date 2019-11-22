import React from 'react'
import LyricsGenerator from './SongGenerator/Generate'
import HappyBirthday from './HappyBirthday/Generate'
import NavBar from './NavBar'
import Footer from './Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends React.Component {

    /*
        Renders NavBar, Generator (Where stuff happens), and the <Footer/>
        Footer contains Ads

     */

    render() {

        return (
            <Router>
                <div>
                    <NavBar/>

                    <Switch>

                        <Route exact path='/angelica' component={HappyBirthday}/>

                        {/*404 catch all*/}
                        <Route component={LyricsGenerator}/>
                    </Switch>

                    <Footer/>

                </div>
            </Router>

        )
    }

}

export default App;