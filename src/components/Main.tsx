import React, { useState, useEffect, useRef } from "react";
import { Button, Box, Grid, Stack, TextField } from '@mui/material';

import CircleIcon from '@mui/icons-material/Circle';

function Main() {

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

                <InputPasswordForm></InputPasswordForm>

            </Stack>
  
          </Box>
        </Grid>
    );
}


function InputPasswordForm() {
    const [isFilled, setFilled] = useState([true,false,false,false,false,false])
    const [isWrong, setWrongText] = useState(false)
    const [isCorrect, setCorrectText] = useState(false)

    
    const [text, setText] = useState('')

    const handleKeydown = (e) => {
        const key = e.key
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

    const checkPassword = () => {
        if (text.length == 6 && text != 'aaaaaa') {
            setWrongText(true)

            setTimeout(() => {
                setWrongText(false)
                setText((state) => '')
            }, 500)

            return 0
        }

        if (text.length >= 7) {
            setTimeout(() => {
                setWrongText(false)
                setText((state) => '')
            }, 500)
            return 0
        }

        if (text == 'aaaaaa') {
            setCorrectText(true)

            setTimeout(() => {
                setCorrectText(false)

                setText((state) => '')
            }, 500)
        }


    }

    const handleClickScreen = () => {
        document.documentElement.requestFullscreen()
    }


    useEffect(() => {
        fillInput()
        checkPassword()
    }, [text])

    useEffect(() => {
        const keydown = () => {
            window.addEventListener("keydown", handleKeydown);
            window.addEventListener("click", handleClickScreen);

        }

        keydown()
        
    }, [])


    return (
        <Grid container spacing={2}>
            {isFilled.map(element => (
            <Grid item xs={2} >
                <InputPassword isCorrect={isCorrect} isWrong={isWrong} isFilled={element}></InputPassword>
            </Grid>
            ))}

        </Grid>
    )
}


function InputPassword({ isFilled, isWrong, isCorrect }) {

    const [iconStyle, setIconStyle] = useState({})

    useEffect(() => {
        if (isWrong == false) {
            setIconStyle({})
        } else {
            setIconStyle({ 
                color: "#ded7d7",
                animationName: 'struggle',
                animationDuration: '0.5s',
                animationIterationCount: 1
            })
        }


    }, [isWrong])

    useEffect(() => {
        if (isCorrect) {
            setIconStyle({ 
                color: "#1aeb7f"
            })
        } else {
            setIconStyle({ 

            })
        }
    }, [isCorrect])

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
                <CircleIcon sx={{textAlign: 'center', fontSize: '1rem', position: "relative", ...iconStyle }}></CircleIcon>
            ) : (
                <></>
            )}
        </div>
    )
}

  
export default Main;