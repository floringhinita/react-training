import DashboardIcon from "@material-ui/icons/Dashboard";
import AddIcon from "@material-ui/icons/Add";
import GamesIcon from "@material-ui/icons/Games";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import SettingsIcon from "@material-ui/icons/Settings";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import {Box} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {useSidebarStyles} from "../../styles/styles";

const menuItems = [
    {
        label: 'Dashboard',
        icon: <DashboardIcon />,
        link: '/'
    },
    {
        label: 'New Campaign',
        icon: <AddIcon />,
        link: '/new-campaign'
    },
    {
        label: 'Integration',
        icon: <GamesIcon />,
        link: '/integration'
    },
    {
        label: 'Subscribers',
        icon: <RssFeedIcon />,
        link: '/subscribers'
    },
    {
        label: 'Settings',
        icon: <SettingsIcon />,
        link: '/settings'
    }
];

const Sidebar = () => {
    const classes = useSidebarStyles();

    return <>
        <CssBaseline />
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <Box>Leads Builder</Box>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {menuItems.map((item, i) => (
                    <ListItem button component='a' key={i} href={item.link}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.label} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    </>
}

export default Sidebar
