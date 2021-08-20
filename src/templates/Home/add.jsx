import CustomCard from "../../common/Card";

const NewList = (props) => (
	<CustomCard action={props.newList} 
		link="/lista/novo" 
		containerClass="new-list-container">
		<div>
			<p className="title">
				Adicionar novas listas
			</p>
		</div>
	</CustomCard>
);

export default NewList;