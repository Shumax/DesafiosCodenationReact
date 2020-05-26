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
      filteredContacts: []
    };
  }
   async componentDidMount(){
     await fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then((response) => {
        return response.json();
      }).then((data) => {
        this.setState(() => ({contactsAPI: data, filteredContacts: data}));
      }).catch(erro => {
        throw erro;
      });
      console.log(this.state);
  }
  setContacts = (contacts) => {

    this.setState(() => ({ filteredContacts: contacts }))

  }
  
  render() {
    return (
      <React.Fragment>
        <Topbar/>
        <Filters
          contactsAPI={this.state.contactsAPI}
          filteredContacts={this.state.filteredContacts}
          setContacts={this.setContacts}
        />
        <Contacts/>
        {this.state.contactsAPI.map(contacts => {
          return (
            <Contact key={contacts.id} data={contacts}/>
          );
        })}
        
        
      </React.Fragment>
    )
  }
}

export default App;
