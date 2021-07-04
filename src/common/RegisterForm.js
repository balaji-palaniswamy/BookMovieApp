import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { FormControl, InputLabel, Input, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 240,
        maxWidth: 240,
    },
   
    
    pos: {
        marginBottom: 12,
    },

    right:{
        position:'absolute',
        left: '80px',
    },

    button:{
        position:'absolute',
        left:'140px'
    }

}));

export default function RegisterForm() {
    const classes = useStyles();
    
    

    return (
        

        <div>
            <FormControl className={classes.right}>
                    <InputLabel htmlFor="firstname">First Name*</InputLabel>
                    <Input id="firstname" aria-describedby="my-helper-text" />
            </FormControl> <br /><br/>

            <FormControl className={classes.right}>
                    <InputLabel htmlFor="lastname">Last Name*</InputLabel>
                    <Input id="lastname" aria-describedby="my-helper-text" />
            </FormControl><br /><br />

            <FormControl className={classes.right}>
                    <InputLabel htmlFor="email">Email*</InputLabel>
                    <Input id="email" aria-describedby="my-helper-text" />
            </FormControl><br /><br />

            <FormControl className={classes.right}>
                    <InputLabel htmlFor="password">Password*</InputLabel>
                    <Input id="password" aria-describedby="my-helper-text" />
            </FormControl><br /><br />

            <FormControl className={classes.right}>
                    <InputLabel htmlFor="phone">Phone*</InputLabel>
                    <Input id="phone" aria-describedby="my-helper-text" />
            </FormControl><br /><br />




            <Button className={classes.button} color='primary' variant='contained'>  Register</Button>

        </div>
    );
}