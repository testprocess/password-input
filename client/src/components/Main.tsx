import React, { useState, useEffect } from "react";
import { Button, Box, Grid, Stack, TextField } from '@mui/material';
import Cookies from 'js-cookie'

import Navbar from './Navbar'
import CircleIcon from '@mui/icons-material/Circle';

function Main() {
    const [isFilled, setFilled] = useState([true,false,false,false,false,false])
    const [text, setText] = useState('')

    const handleKeydown = (e) => {
        const key = e.key
        console.log(e)
        if (e.code == 'Backspace') {
            setText((state) => state.slice(0, -1))
            return 0
        }

        if (e.code == 'Enter') {
            setText((state) => '')
            return 0
        }

        if (e.code.slice(0, 3) != 'Key') {
            return 0
        }
        setText((state) => state + key)
    }

    const fillInput = () => {
        let bool = [false,false,false,false,false,false]
        for (let index = 0; index < bool.length; index++) {
            if (index >= text.length) {
                break
            }
            bool[index] = true
        }

        setFilled(bool)
    }

    const handleClickScreen = () => {
        document.documentElement.requestFullscreen()
    }


    useEffect(() => {
        fillInput()
    }, [text])

    useEffect(() => {
        const keydown = () => {
            window.addEventListener("keydown", handleKeydown);
            window.addEventListener("click", handleClickScreen);

        }

        keydown()
        
    }, [])

    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}>
  
          <Box sx={{ justifyContent: 'center', textAlign: 'center' }}>
  
            <Stack spacing={2}>
                <Grid container spacing={2}>
                    {isFilled.map(element => (
                    <Grid item xs={2} >
                        <InputPassword isFilled={element}></InputPassword>
                    </Grid>
                    ))}

                </Grid>


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
            border: 'none',
            outline: 'none',
            width: '2rem',
            height: '3rem',
            
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
        }}>
            {isFilled ? (
                <CircleIcon sx={{textAlign: 'center', fontSize: '1rem'}}></CircleIcon>
            ) : (
                <></>
            )}
        </div>
    )
}

  
export default Main;