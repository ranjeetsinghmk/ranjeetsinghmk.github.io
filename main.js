'use strict'


const e = React.createElement;

class App extends React.Component {
    render() {
        return e('h1',{},'Working for now')

    }

}

const domContainer = document.querySelector('#_container');
ReactDOM.render(e(App), domContainer);
