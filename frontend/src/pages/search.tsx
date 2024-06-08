import { Box, Button, CircularProgress, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import MuiMarkdown from "mui-markdown";
import React, { useState } from "react";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getSuggestions = async () => {
    setIsLoading(true);
    const url = `http://${process.env["REACT_APP_BACKEND_HOST"]}:${process.env["REACT_APP_BACKEND_PORT"]}/getrecommendations?location=${location}&keyword=${keyword}`;
    const response = await fetch(url);
    const json = await response.json();
    setSuggestions(json.suggestions);
    setIsLoading(false);
  };

  return (
    <Grid
      container
      width="100%"
      height="100%"
      paddingTop={5}
      paddingX={15}
      justifyContent="center"
    >
      <Stack alignItems="center">
        <Typography variant="h1">Voluntario</Typography>
        <Typography variant="caption" color="grey" fontStyle="italic">Find out how you can change the world!</Typography>
      </Stack>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        marginY={4}
      >
        <Stack
          direction="column"
          width="30%"
          spacing={5}
          alignItems="center"
        >
          <TextField
            variant="standard"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="What's your keyword?"
            fullWidth
          /> 
          <TextField
            variant="standard"
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where do you want to search in?"
            fullWidth
          />  
          {!isLoading ? (
            <Button onClick={() => getSuggestions()}>Find Volunteering Opportunities!</Button>
          ) : (
            <CircularProgress />
          )}
        </Stack>
      </Grid>
      {suggestions && (
        <Box
          sx={{ borderRadius: "3%" }}
          bgcolor="#e9edc9"
          padding={10}
          color="#495057"
        >
          <MuiMarkdown>{suggestions}</MuiMarkdown>
        </Box>
      )}
    </Grid>
  );
};

export default Search;