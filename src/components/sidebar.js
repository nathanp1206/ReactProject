import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import Players from './player'
import 'react-pro-sidebar/dist/css/styles.css';

class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state = {
            stats: {}
        }
    }

    render() {
        return (
                <div className="playerPage">
                        <ProSidebar>
                                <Menu>
                                    <MenuItem>
                                        <Link to="/player">Player</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/clan">Clan</Link>
                                    </MenuItem>
                                    {/* <MenuItem>
                                        <Link to="/players">Players</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/clans">Clans</Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/tournaments">Tournaments</Link>
                                    </MenuItem>
                                    <MenuItem>
                                    <Link to="/hof">Hall of Fame</Link>
                                    </MenuItem> */}
                                </Menu>
                        </ProSidebar>                    
                </div>
        )
    }
}    

export default Sidebar