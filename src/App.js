import React, {Component} from 'react';
import Data from './components/Data'
import './App.css'

class App extends Component {
    render() {
        return (
          <Data />
        )
    }
}

    // componentDidMount() {
    //   fetch('https://api.wotblitz.com/wotb/account/list/?application_id=6793a776acfe9cdc9069f95f083331a4&search=' + search.name)
    //       .then(res => res.json())
    //       .then(data=>{fetch('https://api.wotblitz.com/wotb/account/info/?application_id=6793a776acfe9cdc9069f95f083331a4' + '&account_id=' + data.account_id )})
    //       .then((data) => {
    //           this.setState({ stats: data })
    //       })
    //       .catch(console.log)
    // }

export default App;