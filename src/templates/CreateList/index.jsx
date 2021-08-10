import { Creators as ListActions } from '../../store/actions/listAction'; 
import './Form.css';
import Form from './Form';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const CreateList = (props) => {
    return (
        <div className="page-container">
            <Form addProduct={(product, list) => props.addProduct(product, list)} updateProduct={props.updateProduct} />
            <div className="list-items-container">
                { props.list.items.map((item, index) => <ListItem key={item.id} 
                    { ...item }
                    item={item}
                    list={props.list.list}
                    toggleProduct={props.toggleProduct}
                    deleteProduct={props.deleteProduct} />) }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        list: state.listReducer,
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ListActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);