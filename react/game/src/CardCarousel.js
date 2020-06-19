import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
import {Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Game.css';


class CardCarousel extends React.Component {
	
	getCard(name) {
		return require('../assets/cards/mini'+name+'.png');
	}

	scrollToBottom = () => {
		this.lastCard.scrollIntoView({ behavior: "smooth" });
	}

	componentDidUpdate () {
		this.scrollToBottom();
	}

	render() {
		let playedCardlist = [];
		if(this.props.allCardsDiscarded!==undefined)
			playedCardlist = this.props.allCardsDiscarded;
		return(
			<div>
				<Col style={{margin: '0px 0px auto 0px'}}>
					<div id="top-row" style={{display: 'flex', flexDirection: 'row'}}>
						<Card className="Card-carousel-num">
			                <Card.Body style={{ padding: 0, textAlign: 'center', backgroundColor: 'gray'}}>
			                  <Card.Text>{this.props.num_cards_left}</Card.Text>
			                </Card.Body>
		              	</Card>
		              	<div className='Card-carousel' style={{overflowX: 'scroll'}}> 
						  	{playedCardlist.map((item, index) => 
						  		<div key={item}>
			                    	<Card style={{ width: '3.7vw', marginLeft: '1px' }}>
								      <Card.Body style={{ padding: 0 }}>
								        <Card.Img src={this.getCard(item)}/>
								      </Card.Body>
								    </Card>
								</div>
							)}
							<div id="last-card" ref={(e) => {this.lastCard=e;}}></div>
					  	</div>
				  	</div>
			  	</Col>
			  	<div>
		            <ListGroup style={{minWidth: 'max-content', float: 'right'}}>
		                {Object.entries(this.props.all_players).map(([key,value]) => {
			                return <ListGroup.Item style={{textAlign: 'center !important',
				                                            backgroundColor: 'dimgray',
				                                            color: '#f1e4d7',
				                                            borderTop: '1px solid black',
				                                            minWidth: 'max-content'}}
			                                        key={key}>
			                          {this.props.currentPlayer===key?
			                          	<FontAwesomeIcon icon={faLongArrowAltRight}/>:<div></div>}
			                          <span>&nbsp;&nbsp;</span>
			                          {value}
			                        </ListGroup.Item>})}
		            </ListGroup>
	            </div>
		    </div>
		);
	}
}

export default CardCarousel;

