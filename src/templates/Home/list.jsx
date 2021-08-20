import { faCheck, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import CustomCard from "../../common/Card";
import ListItem from '../Home/item';
import Footer from "./footer";

const List = (props) => {
    console.log('props', props);
    return (
        <CustomCard link="/lista/edicao" containerClass="list-container"
            footer={<Footer total={props.total} date={props.date} />}
            cardClass={props.openedItems < 1 ? 'closed-list' : 'opened-list'}
            >
            <div>
                <p className="title">{props.description}</p>
                <div className="list-card-body">
                    <ListItem text={props.openedItems + " Item(s) Restante"}  icon={faShoppingBasket} />
                    <ListItem text={props.closedItems + " Item(s) Comprados"} icon={faCheck} />
                </div>
            </div>
        </CustomCard>
    );
};

export default List;