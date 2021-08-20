import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomCard from "../../common/Card";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as FormActions } from '../../store/actions/formAction';

const NewItem = (props) => {
    return (
        <CustomCard link="#" action={() => props.startAdd(props.list)} containerClass="list-item">
            <div className="new-item">
                <p className="title">Novo produto</p>
                <FontAwesomeIcon icon={faPlusCircle} color="#e4e4e4" size="8x" />
            </div>
        </CustomCard>
    );
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(FormActions, dispatch);
};

export default connect(null, mapDispatchToProps)(NewItem);