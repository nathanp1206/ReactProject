import React, {Component} from 'react';
import Players from './components/player';
import Tokens from './private/appTokens'
import URL from './private/url'

class App extends Component {
    render() {
      if(!this.state.stats) return <div>Loading</div>
        return (
          <Players stats={this.state.stats} player_id={this.state.player_id}/>
        )
    }

    state = {
        stats: null
    };

    componentDidMount() {
      console.log(URL.url)
      fetch(URL.url)
          .then(res => res.json())
          .then((data) => {
              this.setState({ stats: data, player_id: Tokens.playerID})
          })
          .catch(console.log)
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