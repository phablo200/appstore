import './style.css';
import List from './list';
import NewList from './add';
import { connect } from 'react-redux';
import { getListTotal, getClosedItems, getOpenedItems } from '../../store/reducers/listReducer';

const Home = (props) => {
    return (
        <div className="page-container">
            <NewList />
            {
                props.list.items.length > 0 && ( 
                    <List description={props.list.list} 
                        total={props.total} 
                        openedItems={props.openedItems}
                        closedItems={props.closedItems}
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

export default connect(mapStateToProps)(Home);