import { Component } from 'react';
import { InputAdornment } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FormActions } from '../../store/actions/formAction';

const units = ['Quilos', 'Litros', 'Unidades'];

const initialState = {
	list: '',
	product: '',
	quantity: '',
	unit: '',
	price: '',
	showErrors: false
}

class Form extends Component {
	state = { ...initialState };

	componentDidUpdate (prevProps) {
		if (this.props.form.action === 'update' && prevProps.form.productToUpdate !== this.props.form.productToUpdate) {
			const { product, quantity, unit, price } = this.props.form.productToUpdate;
			
			this.setState({
				product,
				quantity,
				unit,
				price,
				showErrors: false,
			})
		}
	}

	handleChange = (event) => {
		this.setState({ ...this.state, [event.target.name]: event.target.value })
	}

	handleSubmit = () => {
		const { list, product, quantity, unit, price } = this.state;
		if (!list || !product || !quantity || !unit) {
			this.setState({ ...this.state, showErrors: true })
		} else {
			this.props.form.action === 'new'
				? this.addItem({ product, quantity, unit, price }, list)
				: this.updateItem({ product, quantity, unit, price }, list);
		}
	}

	addItem = (product, list) => {
		this.props.addProduct(product, list);
		this.clearState();
	}

	updateItem = (product, list) => {
		const { id, checked } = this.props.form.productToUpdate;
		this.props.updateProduct({ ...product, id, checked }, list);
		this.props.finishUpdate();
		this.clearState();
	}

	clearState = () => {
		this.setState({ ...initialState });
	}

	render () {
		return (
			<form className="form-container">
				<div className="form-row">
					<TextField 
						label="Lista"
						name="list"
						value={this.state.list}
						onChange={this.handleChange}
						margin="normal"
						required
						error={!this.state.list && this.state.showErrors}
					/>
					
					<Button onClick={this.handleSubmit} variant="outlined" color="secondary">
						Salvar
					</Button>
				</div>
				<div className="form-row">
					<TextField 
						label="Produto"
						name="product"
						value={this.state.product}
						onChange={this.handleChange}
						margin="normal"
						required
						error={!this.state.product && this.state.showErrors}
					/>
					<TextField 
						label="Quantidade"
						name="quantity"
						value={this.state.quantity}
						onChange={this.handleChange}
						margin="normal"
						required
						error={!this.state.quantity && this.state.showErrors}
					/>
					<TextField 
						select
						label="Unidade"
						name="unit"
						value={this.state.unit}
						onChange={this.handleChange}
						margin="normal"
						required
						error={!this.state.unit && this.state.showErrors}
					>
						{
							units.map(option => (
								<MenuItem key={option} value={option}>
									{option}
								</MenuItem>
							))
						}
					</TextField>
					<TextField 
						label="Preço"
						name="price"
						value={this.state.price}
						onChange={this.handleChange}
						margin="normal"
						InputProps={{
							startAdornment: <InputAdornment position="start">R$</InputAdornment>
						}}
					/>
				</div>
			</form>
		);
	}
};

const mapStateToProps = state => {
	return {
		form: state.formReducer
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(FormActions, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);