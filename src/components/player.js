import React, { useEffect, useState } from 'react'
import Tokens from '../private/appTokens'
import URL from '../private/url'


//Use this for other fetches in same way
const Players = ({ player_id }) => {
  const [stat, setStat] = useState(null)
  useEffect(()=>{
    fetch(URL.playerStat)
        .then(res => res.json())
        .then((data) => {
            setStat({ stats: data, player_id: Tokens.playerID})
        })
        .catch(console.log)
  },[])

  if(!stat) return <center><h1>Loading Stats...</h1></center>
  const data = stat.stats.data
  

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
        <div>
          <center><h1>Stats List</h1></center>
          <center><h4>Nickname: {Data.nickname} </h4></center>
          {/* <center><h4>WN8: {} </h4></center> */}
          {/* <center><h4>WN7: {} </h4></center> */}
          <center><h4>Win Ratio: {Data.winRatio} </h4></center>
          <center><h4>Total Battles: {Data.battles} </h4></center>
          <center><h4>Wins: {Data.wins} </h4></center>
          <center><h4>Losses: {Data.losses} </h4></center>
          <center><h4>Last Battle: {Data.lastBattle} </h4></center>
          <center><h4>Damage Ratio: {Data.damageRatio} </h4></center>
          <center><h4>Average Damage Dealt: {Data.avgDamage} </h4></center>
          <center><h4>Average Damage Received: {Data.avgDmgReceived} </h4></center>
          <center><h4>Total Damage Received: {Data.damage} </h4></center>
          <center><h4>Total Damage Received: {Data.dmgReceived} </h4></center>
          <center><h4>K/D: {Data.kdr} </h4></center>
          <center><h4>Kills: {Data.kills} </h4></center>
          <center><h4>Deaths: {Data.deaths} </h4></center>
          <center><h4>Spotted: {Data.spotted} </h4></center>
          <center><h4>Max XP: {Data.maxXP} </h4></center>
          <center><h4>Hit Ratio: {Data.hitRatio} </h4></center>
          <center><h4>Accuracy: {Data.accuracy} </h4></center>
          <center><h4>Shots: {Data.shots} </h4></center>
          <center><h4>Hits: {Data.hits} </h4></center>
          <center><h4>Survived: {Data.survived} </h4></center>
          <center><h4>Win and Survived: {Data.winSurvive} </h4></center>
          <center><h4>Total XP: {Data.totalXP} </h4></center>
          <center><h4>Average XP: {Data.avgXP} </h4></center>
        </div>
      )
    };

    export default Players