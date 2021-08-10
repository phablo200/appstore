import './style.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/Card';
import { CardActions, Divider } from '@material-ui/core';
import P from 'prop-types';
import { Link } from 'react-router-dom';
import { CardMedia } from '@material-ui/core';

const CustomCard = (props) => {
	return (
		<div className={props.containerClass}>  
			<Link to={props.link}>  
				<Card className="card">
					<CardActionArea className="card-action-area">
						{props.image && (
							<CardMedia component="img" 
								className="card-img" 
								height="100" 
								image={props.image} 
								title="image"/>
						)}
						<CardContent className="card-content">
							{props.children}
						</CardContent>
					</CardActionArea>
					{ props.footer && (
						<>
							<Divider/>
							<CardActions className="card-footer">
								{props.footer}
							</CardActions>
						</>
					)}
				</Card>
			</Link>
		</div>
	);
};

CustomCard.propTypes = {
	containerClass: P.string.isRequired,
	children: P.element.isRequired,
	footer: P.element,
	link: P.string.isRequired,
	image: P.string
};

export default CustomCard;
