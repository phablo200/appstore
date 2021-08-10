import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as FormActions } from '../../store/actions/formAction';

const ListItemFooter = (props) => {
	return (
		<div className="list-card-footer">
			<div className="list-card-footer-actions">
				<FontAwesomeIcon icon={faPen} color="#00b0FF" size="1x" onClick={() => props.startUpdate(props.item, props.list)} />
				<FontAwesomeIcon icon={faTrash} color="#e91e63" size="1x" onClick={() => props.deleteProduct(props.id)} />
			</div>
			<p>Total: R$ {props.total}</p>
    	</div>
	)
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(FormActions, dispatch);
}

export default connect(null, mapDispatchToProps)(ListItemFooter);