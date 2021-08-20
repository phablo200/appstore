import './style.css';
import List from './list';
import NewList from './add';
import { connect } from 'react-redux';
import { getListTotal, getClosedItems, getOpenedItems } from '../../store/reducers/listReducer';
import { bindActionCreators } from 'redux';
import { Creators as ListActions } from '../../store/actions/listAction';

const Home = (props) => {
    return (
        <div className='home-image page-container'>
            <NewList newList={props.newList} />
            {
                props.list.items.length > 0 && ( 
                    <List description={props.list.list} 
                        total={props.total} 
                        openedItems={props.openedItems}
                        closedItems={props.closedItems}
                        date={props.list.date}
                    />
                )
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        list: state.listReducer,
        total: getListTotal(state),
        openedItems: getOpenedItems(state),
        closedItems: getClosedItems(state),
    };
};

const mapDispatchToPtops = (dispatch) => {
    return bindActionCreators(ListActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToPtops)(Home);