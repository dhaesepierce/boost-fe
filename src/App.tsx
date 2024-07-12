import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import BoostItem from './components/BoostItem';

interface Event {
  appLink: string,
  imagePath: string,
  name: string,
  description: string,
  network: string,
  contractAddress: string,
  creatorAddress: string,
  actionFee: string,
  projectFee: string,
  reward:{
    type: string,
    amount: string,
    token: string,
    s3Link: string,
  },
  actionParams:{
    type: string,
    data:{
      chainId: string,
      tokenId: string,
      contractAddress: string
    },
    totalParticipants: number,
    numberMinted: number
  }
}

function App() {
  let [events,setEvents] = React.useState<Array<Event>>([])
  let [search,setSearch] = React.useState<string>("")
  
  const fetchData = async () => {
    const res = await axios.get(`http://localhost:3000/events?name=${search}`)
    setEvents(res.data)
  }

  useEffect(()=>{
    fetchData()
  },[search])

  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://assets.boost.xyz/assets/boost-logo.png'}/>
        <TextField label="Search" variant="filled" value={search} onChange={(event)=>{setSearch(event.target.value)}}/>
        <Grid spacing={2} container xs={12} direction='column' alignItems='center' justifyContent='center' margin={2}>
          {events.map(event=> (
            BoostItem(event)
          ))}
        </Grid>
      </header>
    </div>
  );
}

export default App;
