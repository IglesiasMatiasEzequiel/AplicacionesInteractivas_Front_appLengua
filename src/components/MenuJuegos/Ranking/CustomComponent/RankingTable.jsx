import React,{Component} from 'react';
import './RankingTable.scss'
import { Container } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TrofeoOro from '../../../../assets/Images/RankingTrofeos/oro.png'
import TrofeoPlata from '../../../../assets/Images/RankingTrofeos/plata.png'
import TrofeoBronce from '../../../../assets/Images/RankingTrofeos/bronce.png'
import CountUp from 'react-countup';


import '../Ranking.scss';

class InteractiveList extends Component{
    constructor(props){
        super(props);
    }

    witchBadge(index){
        if (index === 0 ){
            return(
                <img src={TrofeoOro} alt=""/>
            )}
        else if (index === 1){
            return(
                <img src={TrofeoPlata} alt=""/>
            )}
        else if(index === 2){
            return(
                <img src={TrofeoBronce} alt=""/>
            )}
    }

    render(){

        return(
            <div className="rankingTable">
                <Container maxWidth="md" maxHe>
                    <Paper className="root">
                    {!this.props.isLoading && <Table className="table">
                            <TableHead className="tableHead">
                                <TableRow>
                                    <TableCell className="tableCell">Posición</TableCell>
                                    <TableCell className="tableCell">Nickname</TableCell>
                                    <TableCell className="tableCell" numeric>Puntaje</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.ranking && this.props.ranking.map((posicion, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row" className="TableCell">
                                                {(index<=2) ? this.witchBadge(index) : index+1}
                                            </TableCell>
                                            <TableCell className="tableCell" numeric>{posicion?.usuario?.username ?? '-'}</TableCell>
                                            <TableCell className="tableCell" numeric>
                                                <CountUp end={posicion?.puntajeTotal ?? 0} duration={3}/>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    }
                    </Paper>
                </Container>


            </div>
        )
    }
}
export default (InteractiveList);
