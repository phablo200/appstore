import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import P from 'prop-types';

const ListItem = (props) => (
	<div className="list-card-item">
		<FontAwesomeIcon icon={props.icon} />
		<p>{props.text}</p>
	</div>
);

ListItem.propTypes = {
	icon: P.object.isRequired,
	text: P.string.isRequired
};

export default ListItem;