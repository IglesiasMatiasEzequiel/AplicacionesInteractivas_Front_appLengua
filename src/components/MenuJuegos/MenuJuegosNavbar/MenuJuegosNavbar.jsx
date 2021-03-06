import React, {Component} from 'react';
import './MenuJuegosNavbar.scss'
import {withStyles} from '@material-ui/core/styles';
import {withRouter, Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { logOut } from "../../../services/authenticationServices";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        background: '#45B39D',
    },
    title: {
        flexGrow: 1,
    },
});

class MenuJuegosNavbar extends Component {

    signOut = (e) => {
        e.preventDefault();
        logOut();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <AppBar position="static" className={this.props.classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" className={this.props.classes.title}>
                            Virtu
                        </Typography>
                        <ul className="MenuGames">
                            <li>
                                <Button
                                    component={Link}
                                    to="/ranking"
                                    className="MenuNavbarButton"
                                    startIcon={<BarChartRoundedIcon/>}>
                                    Ranking
                                </Button>
                            </li>
                            <li>
                                <Button
                                    component={Link}
                                    to="/games"
                                    className="MenuNavbarButton"
                                    startIcon={<SportsEsportsOutlinedIcon/>}>
                                    Juegos
                                </Button>
                            </li>
                            <li>
                                <Button
                                    onClick={this.signOut}
                                    startIcon={<ExitToAppIcon/>}
                                    className="MenuNavbarButton">
                                   <span>Salir</span>
                                </Button>
                            </li>
                        </ul>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(useStyles)(withRouter(MenuJuegosNavbar));