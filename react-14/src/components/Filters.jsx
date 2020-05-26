import React from 'react';
import './Filters.scss';

class Filters extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  name: '',
		}
	}
	//trata o evento com o parametro passado pela app
	//inicializa o input com valor diferente de undefined
	setContactByName (event) {
		const { search } = this.props;  
		const { value } = event.target || "";
	
		this.setState({ name: value }); 
		search(value);
	}
	
	render() {
		const { name } = this.state;
		const { sort , sortBy } = this.props;
		return (
			<div className="container" data-testid="filters"> 
			<section className="filters">
			  <div className="filters__search">
				<input 
					type="text" 
					className="filters__search__input" 
					placeholder="Pesquisar" 
					value={name || ""}
					onChange={(event) => this.setContactByName(event)}
				/>
  
				<button className="filters__search__icon">
				  <i className="fa fa-search"/>
				</button>
			  </div>

			  <button className={`filters__item ${sortBy === 'name' && 'is-selected'}`}
				  onClick={() => sort('name')}
			  >
				Nome <i className="fas fa-sort-down" />
			  </button>
			
  
			  <button className="filters__item"
			  	onClick={sort}
			  >
				País <i className="fas fa-sort-down" />
			  </button>
  
			  <button className="filters__item"
			  	onClick={sort}
			  >
				Empresa <i className="fas fa-sort-down" />
			  </button>
  
			  <button className="filters__item"
			  	onClick={sort}
			  >
				Departamento <i className="fas fa-sort-down" />
			  </button>
  
			  <button className="filters__item"
			  	onClick={sort}
			  >
				Data de admissão <i className="fas fa-sort-down" />
			  </button>
			</section>
		  </div>
		);
	}
}

export default Filters;
