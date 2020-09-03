import React, {Component} from 'react';
import Tokens from '../private/appTokens'
// import URL from '../private/url'
import Sidebar from './Sidebar';
import Players from './player'
import Clans from './clan'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Data extends Component {
    constructor(props){
        super(props)
        this.state = {
            stats: null
        };
    }

    render() {
        return (
            <Router>
                <div className="stats">
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <div className="switch">
                        <Switch>
                            <Route path="/player">
                                <Players player_id={Tokens.playerID} />
                            </Route>
                            <Route path="/clan">
                                <Clans clan_id={Tokens.clanID} />
                            </Route>
                            <Route path="/players">
                            </Route>
                            <Route path="/clans">
                            </Route>
                            <Route path="/tournaments">
                            </Route>
                            <Route path="/hof">
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
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

export default Data;