import React from 'react';
import {Box, Grid} from "@mui/material";
import {IContact} from "../types/contact";
import ContactItem from "./ContactItem";

interface ContactListProps {
    contacts: IContact[];
}

const ContactList: React.FC<ContactListProps> = ({contacts}) => {
    return (
        <Grid container direction='column' sx={{alignItems:'center', display: 'flex'}}>
            <Box p={0}>
                {
                    contacts.map((value,index)=> {
                       return <ContactItem key={value.id} contact={value}/>
                    })
                }
            </Box>
        </Grid>
    );
};

export default ContactList;