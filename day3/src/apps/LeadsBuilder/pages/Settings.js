import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {useFormStyles} from "../styles/styles";
import Grid from "@material-ui/core/Grid";
import {useUserDispatch} from "../contexts/UserContext";

const Settings = () => {
    const classes = useFormStyles();
    const dispatch = useUserDispatch()

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: ''
    })

    const handleOnChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    const handleOnSave = () => {
        dispatch({type: 'user.set', payload: user})
    }

    return (
        <Paper className={classes.root} elevation={3}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="First name"
                        id="firstName"
                        name="firstName"
                        value={user.firstName}
                        fullWidth
                        onChange={handleOnChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Last name"
                        id="lastName"
                        name="lastName"
                        value={user.lastName}
                        fullWidth
                        onChange={handleOnChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email Address"
                        id="email"
                        name="email"
                        value={user.email}
                        fullWidth
                        onChange={handleOnChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Username"
                        id="username"
                        name="username"
                        value={user.username}
                        fullWidth
                        onChange={handleOnChange}
                    />
                </Grid>
            </Grid>
            <div className={classes.buttons}>
                <Button variant="contained" color="primary" className={classes.button} onClick={handleOnSave}>
                    Save
                </Button>
            </div>
        </Paper>
    )
}

export default Settings
