import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchfromAPI";
import { categories } from "../utils/contants";


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [videos, setVideos] = useState([]);

  useEffect(() => {



    const fetchData = async ()=> {
      try {
        const data = await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
        setVideos(data.items || []);
      } catch (error) {
        console.error(error);
        
      }
    }

    fetchData();
  }, [selectedCategory]);

console.log(videos);


  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#F31503" }}> videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
