import { Checkbox, Typography } from "@material-ui/core";
import CustomCard from "../../common/Card";
import ListItemFooter from "./ListItemFooter";

const ListItem = (props) => {
	return (
		<CustomCard link="#" 
			containerClass="list-item" 
			footer={<ListItemFooter list={props.list} item={props.item} id={props.id} total={props.total}  deleteProduct={props.deleteProduct} />}
			image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG"
			>
			<div>
				<div className="list-item-header">
					<Typography variant="subtitle1" component="h2">
						{props.product}
					</Typography>
					<Checkbox onClick={() => props.toggleProduct(props.id)} checked={props.checked} />
				</div>
				<Typography component="p">{props.quantity} {props.unit}</Typography>
				<Typography component="p">R$ {props.price}</Typography>
			</div>
		</CustomCard>
	);
}

export default ListItem;