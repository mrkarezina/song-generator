import React from 'react'
import Generate from './Generate'

class App extends React.Component {

    /*
        Structure:
        The Welcome component parses the dataset name from the url

        NOTE: Specify the default dataset in the Welcome page component.

        Home page calls Welcome component and if no dataset specified in URL defualt in used.
        After the OnboardingSlides slides are shown, app redirects to explorer using the dataset passed to it
        The explorer route parses url and renders the graph explorer
        The Demo component then fetches the right dataset and displays the vizualizer.
     */

    render() {

        return (
            <div>

                <Generate/>

            </div>

        )
    }

}

export default App;