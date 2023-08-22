import React, { useState, useEffect } from "react";
import { Button, Box, Grid, Stack } from '@mui/material';
import Cookies from 'js-cookie'

import Navbar from './Navbar'

function Main() {
    const [isFilled, setFilled] = useState([true,false,false,false,false,false])


    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}>
  
          <Box sx={{ justifyContent: 'center', textAlign: 'center' }}>
  
            <h1>단순 게시판이 아닌데요</h1>
  
            <Stack spacing={2}>
            <Grid container spacing={2}>
                <Grid item xs={2} >
                    <InputPassword isFilled={isFilled[0]}></InputPassword>
                </Grid>
                <Grid item xs={2} >
                    <InputPassword isFilled={isFilled[1]}></InputPassword>
                </Grid>
            </Grid>
                  
              <Button variant="text"  disableElevation>이메일로 로그인 </Button>
            </Stack>
  
  
  
          </Box>
        </Grid>


    );
}


function InputPassword({ isFilled }) {



    return (
        <div style={{
            backgroundColor: "#16181c",
            color: '#ffffff',
            cursor: 'none',
            caretColor: 'transparent',
            fontSize: "4rem",
            border: 'none',
            outline: 'none',
            width: '2rem',
            height: '3rem'
        }}></div>
    )
}

  
export default Main;