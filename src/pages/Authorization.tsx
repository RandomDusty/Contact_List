import React, {useState} from 'react';
import Modal from "../components/Modal/Modal";
import {Button, createTheme, OutlinedInput, ThemeProvider, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useAction} from "../hooks/useActions";
import api from "../api/database";

const Authorization = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#ff7f50',
                contrastText: '#fff'
            }
        },
    });

    const {setIsAuth} = useAction()
    const [loginInput, setLoginInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');


    const auth = async () => {

        const response = await api.get('/users');
        const user = response.data;
        console.log(user[0])
        if (user[0].login === loginInput && user[0].password === passwordInput) {
            setIsAuth("true");
        } else {
            alert('Incorrect login or password');
        }


    }

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Modal active={true}>
                    <Typography component="div" variant="h5">
                        Authorization
                    </Typography>
                    <OutlinedInput
                        placeholder="login"
                        sx={{width: '500px', mb: '15px'}}
                        value={loginInput}
                        onChange={e => setLoginInput(e.target.value)}
                    />
                    <OutlinedInput
                        placeholder="password"
                        sx={{width: '500px', mb: '15px'}}
                        value={passwordInput}
                        onChange={e => setPasswordInput(e.target.value)}
                    />
                    <Link onClick={auth} to={'/contacts'} style={{textDecoration: 'none'}}>
                        <Button variant="contained" sx={{width: '100px'}}>Sign in</Button>
                    </Link>
                </Modal>
            </ThemeProvider>
        </div>
    );
};

export default Authorization;