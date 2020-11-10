import React from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Dashboard, NewCampaign, Settings} from "./pages";
import {Sidebar, Header} from "./parts";
import theme from "./styles/theme";
import {useAppStyles} from "./styles/styles";
import {UserProvider} from "./contexts/UserContext";

const App = () => {
    const classes = useAppStyles();

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <UserProvider>
                    <div className={classes.root}>
                        <Header/>
                        <Sidebar/>
                        <main className={classes.layout}>
                            <div className={classes.toolbar}/>
                            <Switch>
                                <Route path='/' exact component={Dashboard}/>
                                <Route path='/settings' component={Settings} />
                                <Route path='/new-campaign' component={NewCampaign}/>
                            </Switch>
                        </main>
                    </div>
                </UserProvider>
            </Router>
        </ThemeProvider>
    )
};

export default App
