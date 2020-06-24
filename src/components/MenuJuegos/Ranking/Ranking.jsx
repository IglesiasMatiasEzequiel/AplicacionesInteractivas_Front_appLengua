import React, { Component } from 'react';
import MenuJuegosNavbar from '../MenuJuegosNavbar/MenuJuegosNavbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import InsertChartOutlinedRoundedIcon from '@material-ui/icons/InsertChartOutlinedRounded';
import InsertChartOutlinedOutlinedIcon from '@material-ui/icons/InsertChartOutlinedOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import './Ranking.scss';
import RankingTable from "./CustomComponent/RankingTable";
import { listRanking } from '../../../services/participacionServices';

class Ranking extends Component {
    constructor() {
        super()
        this.state = {
            idJuego: null,
            ranking: null,
            isLoading: true
        }

        listRanking().then((response) => {

            console.log(response.data);

            this.setState(prevState => ({
                ...prevState,
                isLoading: false,
                ranking: response.data
            }));
        })
            .catch(error => {
                console.log(error);
                this.setState(prevState => ({
                    ...prevState,
                    isLoading: false
                }));
            });
    }

    handleChange = (event, newValue) => {
        this.setState({
            idJuego: newValue,
            isLoading: true
        });

        listRanking(newValue).then((response) => {

            this.setState(prevState => ({
                ...prevState,
                isLoading: false,
                ranking: response.data
            }));
        })
            .catch(error => {
                console.log(error);
                this.setState(prevState => ({
                    ...prevState,
                    isLoading: false
                }));
            });
    }

    render() {

        return (
            <div>
                <MenuJuegosNavbar />
                <div className="rankingContainer">
                    <div className="rankingContainer--title">
                        <h1>RANKING</h1>
                        <p>
                            Estas viendo el
                            Ranking {(this.state.idJuego === '1' ? 'Sílabas' :
                                    this.state.idJuego === '2' ? 'Ortografía' :
                                    this.state.idJuego === '3' ? 'C. Lectora' : 'Total')}
                        </p>
                    </div>
                    <div className="rankingContainer--results">
                        <BottomNavigation value={this.state.idJuego} onChange={this.handleChange}>
                            <BottomNavigationAction
                                label="Ranking"
                                value=""
                                icon={<PollOutlinedIcon />}
                            />
                            <BottomNavigationAction
                                label="C. Lectora"
                                value="3"
                                icon={<InsertChartOutlinedRoundedIcon />}
                            />
                            <BottomNavigationAction
                                label="Ortografía"
                                value="2"
                                icon={<InsertChartOutlinedOutlinedIcon />}
                            />
                            <BottomNavigationAction
                                label="Sílabas"
                                value="1"
                                icon={<AssessmentOutlinedIcon />}
                            />
                        </BottomNavigation>
                        <RankingTable isLoading={this.state.isLoading} ranking={this.state.ranking}/>
                    </div>
                </div>

            </div>
        )
    }
}

export default (Ranking);