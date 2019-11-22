import React from 'react'
import Generate from './Generate'
import NavBar from './NavBar'
import Footer from './Footer'

class App extends React.Component {

    /*
        Renders NavBar, Generator (Where stuff happens), and the <Footer/>
        Footer contains Ads

     */


    render() {

        return (
            <div>

                <NavBar/>

                {/*In order for footer to work*/}
                <div style={{minHeight: '90vh', flex: '1 0 auto'}}>

                    <Generate/>

                </div>

                <Footer/>

            </div>

        )
    }

}

export default App;