import React, { useEffect, useState } from 'react'

import {Videos, ChannelCard} from '../components'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchfromAPI';
import { Box } from '@mui/material';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);
  

  const {id} = useParams();



  useEffect(()=>{
    const fetchData = async() =>{
      try {
        const channelData = await fetchFromAPI(`channels?part=snippet&id=${id}`);
        
        setChannelDetail(channelData?.items[0]);

        const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`);

        setChannelVideos(videosData?.items);

      } catch (error) {
        console.error(error);
        
      }

    }

    fetchData();
  }, [id])


  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 71%, rgba(252, 176, 69, 1) 100%)',
          zIndex: 10,
          height:'300px'
        }}>

        </div>
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
        
      </Box>
      <Box
      display={'flex'}
      p={2}>
        <Box sx={{mr:{sm:'100px'}}}/>
        <Videos videos={channelVideos}/>
      </Box>

    </Box>
  )
}

export default ChannelDetail