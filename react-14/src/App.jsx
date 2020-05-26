import React from 'react';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import Contact from './components/Contact';

import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contactsAPI: [],
      filteredContacts: [],
      name: '',
      valueName: false,
      valueButton: ''
    };
    this.setContactByName = this.setContactByName.bind(this);
   
  }
   async componentDidMount(){
     await fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then((response) => {
        return response.json();
      }).then((data) => {
        this.setState(() => ({contactsAPI: data}));
      }).catch(erro => {
        throw erro;
      });
  }
  /*pega o valor digitado no input e filtra
    depois guarda no estado com as informações necessarias para mostrar na tela
  */
  setContactByName(name) {
    const {contactsAPI} = this.state;

    const contact = contactsAPI.filter(
      findContact =>  findContact.name.toLowerCase()
      .includes(name.toLowerCase()));
    
    this.setState({
      ...this.state,
      filteredContacts: contact,
      valueName: true
    });
    console.log(this.state.filteredContacts);
  }

  //ordena pelo label do botão
  sortContacts(valueButton) {
    const { contactsAPI} = this.state;
    
    let sortByValue;
    let sortValue;
    
    if(valueButton === 'name'){
      sortValue = '';
      sortByValue = [...contactsAPI];
    }else{
      sortValue = 'name';
      //esse trecho funciona conforme eu passo a variavel para ordenar
      //tenho que ordenar pelo event do botão respectivo :(
      sortByValue = contactsAPI.sort(
        (a, b) => a.value > b.value 
        ? 1: b.value > a.value 
        ? -1 : 0
      );
    }
    this.setState({
      ...this.state,
      contactsAPI: sortByValue,
      valueButton: sortValue,
      valueName: false,
      filteredContacts: []
    });
    console.log();
  }

  //verifica se o input value esta vazio antes de reenderizar
  //depois mostra conforme os dados contidos no array
  render() {
    var outContact ;
    if(!this.state.valueName){
      outContact = this.state.contactsAPI.map(contacts => {
        return (
          <Contact key={contacts.id} data={contacts}/>
        );
      });
      
    }else{
      outContact = this.state.filteredContacts.map(contacts => {
        return (
          <Contact key={contacts.id} data={contacts}/>
        );
      });
    }

    return (
      <React.Fragment>
        <div data-testid="app" className="app">
        <Topbar/>
        <Filters
          search={this.setContactByName}
          sort={this.sortContacts}
          sortBy={this.state.valueButton}
        />
        <Contacts>
          {outContact}
        </Contacts>
        </div>
        
      </React.Fragment>
    )
  }
}

export default App;
