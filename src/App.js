import React, { PureComponent, PropTypes } from 'react';
import Navigation from './components/Navigation';
import AdminContainer from './pages/AdminContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/themes'

import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenuItem: 0,
    }
  }

  setMenuItem(menuNumber){
    this.setState({
      selectedMenuItem: menuNumber,
    })
  }

  render() {
    return (
      <div>
          <Navigation selectedItem={this.state.selectedMenuItem} updateMenuItem={this.setMenuItem.bind(this)}/>
          {this.renderContent()}
      </div>
    );
  }

  renderContent() {
    switch (this.state.selectedMenuItem){
      case 0: 
        return <AdminContainer  />;
      default:
        return '';
    } 
  }
}

export default App;
