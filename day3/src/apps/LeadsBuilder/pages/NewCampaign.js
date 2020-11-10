import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";
import {useFormStyles} from "../styles/styles";
import Grid from "@material-ui/core/Grid";

const NewCampaign = () => {
    const classes = useFormStyles();
    const handleOnSave = () => {}

    return (
        <Paper className={classes.root} elevation={3}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <TextField
                        fullWidth
                        id="campaignName"
                        label="Name"
                        placeholder="Enter campaign name"
                        margin="normal"
                        style={{ margin: 8 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel shrink htmlFor="campaignType">
                            Type
                        </InputLabel>
                        <NativeSelect
                            onChange={() => {}}
                            inputProps={{
                                name: 'campaignType',
                                id: 'campaignType',
                            }}
                        >
                            <option value="">None</option>
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="test"
                        label="Test"
                        placeholder="Test"
                        margin="normal"
                        style={{ margin: 8 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
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

export default NewCampaign
