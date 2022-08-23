import React, {useEffect, useState} from 'react';
import ContactList from "../components/ContactList";
import '../styles/contacts.css';
import {Box, Button, createTheme, IconButton, OutlinedInput, ThemeProvider} from "@mui/material";
import Modal from "../components/Modal/Modal";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useAction} from "../hooks/useActions";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import {red} from "@mui/material/colors";

const Contacts = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: red[500]
            }
        },
    });

    const {contacts} = useTypeSelector(state => state.contacts)
    const {
        fetchContacts,
        addContact,
        setActive,
        setLastInput,
        setFirstInput,
        setUpdateID,
        updateContact,
        searchContacts,
        setIsAuth
    } = useAction()
    const {active, firstNameInput, lastNameInput, updateID} = useTypeSelector(state => state.modal);

    const [searchInput, setSearchInput] = useState('');
    const [isSearch, setIsSearch] = useState(false);

    useEffect(() => {
        fetchContacts();
    }, [])

    const addValidContact = () => {
        if (firstNameInput === '' || lastNameInput === '') {
            alert('Fill in all fields');
            return;
        }

        addContact(firstNameInput, lastNameInput)

        setFirstInput('');
        setLastInput('')
        setActive(false);
    }

    const updateValidContact = () => {
        if (firstNameInput === '' || lastNameInput === '') {
            alert('Fill in all fields');
            return;
        }

        updateContact({id: updateID, firstname: firstNameInput, lastname: lastNameInput});

        setUpdateID('');
        setFirstInput('');
        setLastInput('')
        setActive(false);
    }

    const search = () => {
        if (isSearch || searchInput !== '') {
            if (isSearch) {
                searchContacts('');
                setSearchInput('');
            } else {
                searchContacts(searchInput);
            }
            setIsSearch(!isSearch);
        }
    }

    const exit = () => {
        setIsAuth('false');
    }

    return (
        <div className='App'>
            <ThemeProvider theme={theme}>
                <Button variant="contained" onClick={exit} sx={{position: 'absolute', right: 5, top: 5}}>Exit</Button>
            </ThemeProvider>
            <div className='contactsBody'>
                <div className='contactsTop'>

                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <OutlinedInput
                            placeholder="search by firstname"
                            value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                        />
                        <IconButton onClick={search}>
                            {
                                isSearch ? <ClearIcon/> : <SearchIcon/>
                            }
                        </IconButton>
                    </Box>
                    <Button variant="contained" onClick={() => setActive(true)}>Add contact</Button>
                </div>
                <ContactList contacts={contacts}/>
                <Modal active={active}>
                    <OutlinedInput
                        placeholder="Firstname"
                        sx={{width: '500px', mb: '15px'}}
                        value={firstNameInput}
                        onChange={(e) => setFirstInput(e.target.value)}
                    />
                    <OutlinedInput
                        placeholder="Lastname"
                        sx={{width: '500px', mb: '15px'}}
                        value={lastNameInput}
                        onChange={(e) => setLastInput(e.target.value)}
                    />
                    {updateID
                        ?
                        <Button variant="contained" sx={{width: '80px'}} onClick={updateValidContact}>Update</Button>
                        :
                        <Button variant="contained" sx={{width: '80px'}} onClick={addValidContact}>Add</Button>
                    }
                </Modal>
            </div>
        </div>
    );
};

export default Contacts;