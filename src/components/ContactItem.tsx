import {Box, Card, IconButton, Typography} from '@mui/material';
import React from 'react';
import {IContact} from "../types/contact";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useAction} from "../hooks/useActions";

interface ContactItemProps {
    contact: IContact;
}

const ContactItem: React.FC<ContactItemProps> = ({contact}) => {

    const {deleteContact, setUpdateID, setActive, setFirstInput, setLastInput} = useAction();

    const deleteThisContact = () => {
        deleteContact(contact.id);
    }

    const updateThisContact = () => {
        setActive(true);
        setFirstInput(contact.firstname);
        setLastInput(contact.lastname);
        setUpdateID(contact.id);
    }

    return (
        <Card sx={{width: '500px', mb: '10px', background: '#ff7f50', color: '#ffffff'}}>
            <Box p={3} sx={{display: 'flex', flexDirection: 'row'}}>
                <Typography component="div" variant="h5">
                    {contact.firstname + ' ' + contact.lastname}
                </Typography>
                <Box sx={{marginLeft: "auto"}}>
                    <IconButton sx={{color: '#ffffff'}} onClick={updateThisContact}>
                        <EditIcon color="inherit"/>
                    </IconButton>
                    <IconButton sx={{color: '#ffffff'}} onClick={deleteThisContact}>
                        <DeleteIcon color="inherit"/>
                    </IconButton>
                </Box>
            </Box>
        </Card>
    );
};

export default ContactItem;