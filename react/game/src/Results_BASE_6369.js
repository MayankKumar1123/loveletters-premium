import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Game.css';
import {Container, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';


class Results extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {newRound: false};
	    this.getResults = this.getResults.bind(this);
	    this.getCard = this.getCard.bind(this);
	    this.sendNewRound = this.sendNewRound.bind(this);
	    this.sendNewRoundButton = this.sendNewRoundButton.bind(this);
	}

	getCard(name) {
		if(name===null || name===undefined)
			return require('../assets/cards/displayBlank.png');
		else
			return require('../assets/cards/mini'+name+'.png');

	}

	getResults() {
		const points_display = this.props.points; //tokens won
		let displayIcon = <FontAwesomeIcon icon={faHeart}/>;
    	let spaceIcon = <span>&nbsp;&nbsp;</span>;
		Object.entries(points_display).map(([key,value]) => {
			let icons = [];
			for(let i=0;i<value;i++)
				icons = icons.concat(displayIcon).concat(spaceIcon);
			points_display[key] = icons;
		});
		return points_display;
	}

	sendNewRound() {
		if(this.state.newRound===true)
			this.props.gameCallback(true);
	}

	sendNewRoundButton = () => {
		this.setState({newRound: true});
	}

	
	render() {
		const points_display = this.getResults();
		if(this.state.newRound)
			this.sendNewRound();
		return(
			<Container className="Game-header">
			  	<Row style={{margin: 'auto'}}>
			  		<h3 className='Play-status'>{this.props.allPlayers[this.props.winner]}'s letter reached the Princess!</h3>
			  	</Row>
			  	<hr/>
			  
			  	{this.props.gameWinner!==null?
			  		<div style={{margin: 'auto'}}>
			  			<Row style={{margin: 'auto'}}>
			  				<h2 className='Play-status'>{this.props.allPlayers[this.props.gameWinner]} won the Princess' heart!</h2>
			  			</Row>
			  			<hr/>
			  		</div>: <div></div>}
			  	
			  	<Row style={{margin: 'auto'}}> 
			  		<ListGroup>
			  			{Object.entries(points_display).map(([key,value]) => {
			  				const cardToShow = this.props.cardsAtRoundEnd[key];
							return (<ListGroup.Item key={key} className='List-item-design Container'>
									<Row>
										<Col style={{display: 'inline'}}>
					                        <Card style={{ width: '3rem' , height: (cardToShow===null?'4rem':'auto')}}>
					                          <Card.Body style={{ padding: 0 }}>
					                            <Card.Img src={this.getCard(cardToShow)}/>
					                          </Card.Body>
					                        </Card>
					                     </Col>
										<Col style={{display: 'inline'}}>{this.props.allPlayers[key]}</Col>
										<Col style={{display: 'inline'}}>{value.map((item,i) => {return(<span style={{float: 'right'}}>{item}</span>);})}</Col>
									</Row>
									</ListGroup.Item>)})}
					</ListGroup>
			  	</Row>
			  	{this.props.gameWinner!==null? 
			  		<Row style={{width: '50vw'}}>
			  			<Col><Button size="lg" block className='Confirm-button' onClick={(e) => this.props.gameCallback(true)}>Start New Game</Button></Col>
			  			<Col><Button size="lg" block className='Confirm-button' onClick={(e) => this.props.gameCallback(false)}>Leave Game</Button></Col>
			  		</Row> :
			  		<Row style={{width: '50vw'}}>
			  				<Button size="lg" block className='Confirm-button' disabled={this.props.userID !== this.props.host} 
			  						onClick={this.sendNewRoundButton}>Start Next Round</Button>:
			  		</Row>}
			</Container> 
		);
	}
}

export default Results;
