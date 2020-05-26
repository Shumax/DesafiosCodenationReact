import React from 'react';

class Contact extends React.Component {
  render() {
    const { data } = this.props;
    return (
      
				
      <article  className="contact" data-testid="contact">
        <span data-testid="contact__avatar" className="contact__avatar">
          <img src={data.avatar} alt={data.name}/>
        </span>
        <span data-testid="contact__name" className="contact__data" >{data.name}</span>
        <span data-testid="contact__phone" className="contact__data">{data.phone}</span>
        <span data-testid="contact__country" className="contact__data">{ data.country }</span>
        <span data-testid="contact__date" className="contact__data">{new Date(data.admissionDate).toLocaleDateString('pt-BR')}</span>
        <span data-testid="contact__company" className="contact__data">{data.company}</span>
        <span data-testid="contact__department" className="contact__data">{data.departament}</span>
      </article>
     
      
    );
  }
}

export default Contact;
