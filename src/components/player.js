import React, { useEffect, useState } from 'react'
// import Tokens from '../private/appTokens'
import URL from '../private/url'
import Search from './search'

//Use this for other fetches in same way
const Players = () => {
  const [stat, setStat] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [searchValue, setSearchValue] = useState(null)
  console.log(URL.playerSearch)
  useEffect(()=>{
    if(!searchValue) return
    setIsLoading(true)
    fetch(URL.playerSearch + searchValue)
        .then(res => res.json())
        .then(data=>fetch(URL.playerStat + data.data[0].account_id))
        .then(res => res.json())
        .then((data) => {
          console.log(data)
            setStat({ stats: data })
            // setIsLoading(false)
        })
        .catch(console.log)
  },[searchValue])

  // componentDidMount() {
    //   fetch('https://api.wotblitz.com/wotb/account/list/?application_id=6793a776acfe9cdc9069f95f083331a4&search=' + search.name)
    //       .then(res => res.json())
    //       .then(data=>{fetch('https://api.wotblitz.com/wotb/account/info/?application_id=6793a776acfe9cdc9069f95f083331a4' + '&account_id=' + data.account_id )})
    //       .then((data) => {
    //           this.setState({ stats: data })
    //       })
    //       .catch(console.log)
    // }


  if(!isLoading && !stat) return <div className="player-search"><Search onSubmit={setSearchValue}/></div>
  if(!stat) return <center><h1>Loading Stats...</h1></center>
  const data = stat.stats.data
  const player_id = Object.keys(data)[0]
  console.log(data)

console.log(data)
      const Data = {
        nickname: data[player_id].nickname,
        winRatio: (data[player_id].statistics.all.wins / data[player_id].statistics.all.battles * 100).toFixed(2) + '%',
        wins: data[player_id].statistics.all.wins,
        battles: data[player_id].statistics.all.battles + data[player_id].statistics.rating.battles,
        losses: data[player_id].statistics.all.losses,
        lastBattle: new Date(data[player_id].last_battle_time * 1000).toLocaleString(),
        damageRatio: (data[player_id].statistics.all.damage_dealt / data[player_id].statistics.all.damage_received).toFixed(2),
        avgDamage: (data[player_id].statistics.all.damage_dealt / data[player_id].statistics.all.battles).toFixed(0),
        avgDmgReceived: (data[player_id].statistics.all.damage_received / data[player_id].statistics.all.battles).toFixed(0),
        kdr: (data[player_id].statistics.all.frags / (data[player_id].statistics.all.battles - data[player_id].statistics.all.survived_battles)).toFixed(2),
        kills: data[player_id].statistics.all.frags,
        deaths: data[player_id].statistics.all.battles - data[player_id].statistics.all.survived_battles,
        spotted: (data[player_id].statistics.all.spotted / data[player_id].statistics.all.battles).toFixed(2),
        maxXP: data[player_id].statistics.all.max_xp,
        hitRatio: (data[player_id].statistics.all.shots / data[player_id].statistics.all.hits).toFixed(2),
        accuracy: ((data[player_id].statistics.all.hits / data[player_id].statistics.all.shots) * 100).toFixed(2) + '%',
        shots: data[player_id].statistics.all.shots,
        hits: data[player_id].statistics.all.hits,
        survived: data[player_id].statistics.all.survived_battles,
        winSurvive: data[player_id].statistics.all.win_and_survived,
        totalXP: data[player_id].statistics.all.xp + data[player_id].statistics.rating.xp,
        avgXP:  ((data[player_id].statistics.all.xp)/ data[player_id].statistics.all.battles).toFixed(0),
        damage: data[player_id].statistics.all.damage_dealt,
        dmgReceived: data[player_id].statistics.all.damage_received
      }
      console.log(data)
      return (
        <div className="stats-main">
          <center><h1>{Data.nickname}</h1></center>
          <div className="stats-div">
            
            <div className="main-stats">
              {/* <center>WN8: {} </center> */}
              {/* <center>WN7: {} </center> */}
              <div className="topBlock"></div>
              <div className="filler">
                <center><h2>Main Stats</h2></center>
                <center>Win Ratio: {Data.winRatio} </center>
                <center>Total Battles: {Data.battles} </center>
                <center>Average Damage: {Data.avgDamage} </center>
                <center>Average XP: {Data.avgXP} </center>
                <center>K/D: {Data.kdr} </center>
                <center>Damage Ratio: {Data.damageRatio} </center>
                <center>Hit Ratio: {Data.hitRatio} </center>
                <center>Accuracy: {Data.accuracy} </center>
              </div>
            </div>
            
            <div className="kd">
              <div className="topBlock"></div>
              <div className="filler">
                <center><h2>Secondary Stats</h2></center>
                <center>Wins: {Data.wins} </center>
                <center>Losses: {Data.losses} </center>
                <center>Survived: {Data.survived} </center>
                <center>Win and Survived: {Data.winSurvive} </center>
                <center>Average Damage Received: {Data.avgDmgReceived} </center>
                <center>Total Damage Received: {Data.damage} </center>
                <center>Total Damage Received: {Data.dmgReceived} </center>
                <center>Kills: {Data.kills} </center>
                <center>Deaths: {Data.deaths} </center>
              </div>
            </div>
            <div className="other-stats">
              <div className="topBlock"></div>
              <div className="filler">
                <center><h2>Other Stats</h2></center>
                <center>Spotting Ratio: {Data.spotted} </center>
                <center>Max XP: {Data.maxXP} </center>
                <center>Shots: {Data.shots} </center>
                <center>Hits: {Data.hits} </center>
                <center>Total XP: {Data.totalXP} </center>
                <center>Last Battle: {Data.lastBattle} </center>
              </div>
            </div>
          </div>
        </div>
      )
    };

    export default Players