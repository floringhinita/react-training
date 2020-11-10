import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
    large: {
        width: theme.spacing(9),
        height: theme.spacing(9),
    },
}));

const CampaignDetails = (props) => {
    const classes = useStyles();
    const {campaign: {details, stats}} = props;

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                <Grid
                    container
                    wrap="nowrap"
                    spacing={2}
                    direction='row'
                    justify='flex-start'
                    alignItems='center'
                >
                    <Grid item xs={2}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                    </Grid>
                    <Grid item xs={4} container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                {details.name}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {details.type}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {details.startDate.toLocaleDateString("en-US")}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                {details.status} End Date: {details.endDate.toLocaleDateString("en-US")}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                        <Box borderRadius="50%">
                            Visitors
                            {stats.visitors}
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box borderRadius="50%">
                            Entrants
                            {stats.entrants}
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box borderRadius="50%">
                            Conv. Rate
                            {stats.conversionRate}
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        actions
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
};

const initialCampaigns = [
    {
        details: {
            name: 'First campaign',
            type: 'type1',
            status: 'ONGOING',
            startDate: new Date(2020, 3, 4),
            endDate: new Date(2021, 3, 4),
        },
        stats: {
            visitors: 100,
            entrants: 100,
            conversionRate: 40,
        }
    },
    {
        details: {
            name: 'Second campaign',
            type: 'type2',
            status: 'FINISHED',
            startDate: new Date(2020, 3, 4),
            endDate: new Date(2021, 3, 4),
        },
        stats: {
            visitors: 100,
            entrants: 100,
            conversionRate: 40,
        }
    },
];

const Dashboard = () => {
    const [campaigns, setCampaigns] = useState(initialCampaigns);

    return (
        <section>
            {campaigns.map((item, i) => (<CampaignDetails key={i} campaign={item}/>))}
        </section>
    );
};

export default Dashboard
