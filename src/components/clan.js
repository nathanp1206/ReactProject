import React, { useEffect, useState } from 'react'
// import Tokens from '../private/appTokens'
import URL from '../private/url'
import Search from './search'

//Use this for other fetches in same way
const Clans = () => {
  const [stat, setStat] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [searchValue, setSearchValue] = useState(null)
  console.log(URL.clanSearch)
  useEffect(()=>{
    if(!searchValue) return
    setIsLoading(true)
    fetch(URL.clanSearch + searchValue)
        .then(res => res.json())
        .then(data=>fetch(URL.clanStat + data.data[0].clan_id))
        // .then(res => res.json())
        // .then((data)=>{
        //   const users = data.data[].members_ids
        //   users.forEach(user => {
        //     fetch(URL.playerStat + users[user])
        //     console.log(user)
        //   });
        // })
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


  if(!isLoading && !stat) return <div className="clan-search"><Search onSubmit={setSearchValue}/></div>
  if(!stat) return <center><h1>Loading Stats...</h1></center>
  const data = stat.stats.data
  const clan_id = Object.keys(data)[0]

      const Data = {
        name: data[clan_id].name,
        tag: data[clan_id].tag,
        leadName: data[clan_id].leader_name,
        motto: data[clan_id].motto,
        desc: data[clan_id].description,
        memCount: data[clan_id].members_count,
        created: new Date(data[clan_id].created_at * 1000).toLocaleString(),
        members: data[clan_id].members_ids
      }
      return (
        <div>
          <center><h1>Stats List</h1></center>
          <center><h4>Name: {Data.name} </h4></center>
          {/* <center><h4>WN8: {} </h4></center> */}
          {/* <center><h4>WN7: {} </h4></center> */}
          <center><h4>Tag: {Data.tag} </h4></center>
          <center><h4>Motto: {Data.motto} </h4></center>
          <center><h4>Description: {Data.desc} </h4></center>
          <center><h4>Members: {Data.memCount} </h4></center>
          <center><h4>Created At: {Data.created}</h4></center>
        </div>
      )
    };

    export default Clans