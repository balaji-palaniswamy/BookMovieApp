import React from 'react';
import TextField from '@material-ui/core/TextField';


export default function LoginForm(){
    return(
        <div>
            <form>
            <TextField error id="standard-error"  floatingLabelText='Username' defaultValue='Username ' /> <br/>
            <TextField error id="standard-error"  placeholder='Password' />
            </form>
        
        
      </div>
    )
}

