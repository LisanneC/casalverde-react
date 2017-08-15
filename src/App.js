import React, { PureComponent, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/themes'
import AdminContainer from './pages/AdminContainer'
import Comment from './components/Comment'
import DatePicker from './components/DatePicker'
import Navigation from './components/Navigation'
import TextField from './components/TextField'

const pages = [
  {
    title: 'hoi',
    text: 'even kijken of dit werkt'
  },
]


class App extends PureComponent {
    static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

getChildContext() {
return { muiTheme }
}

  render() {
    return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
          <Navigation /> <br/>
          <DatePicker /> <br/>
          <TextField /> <br/>
         <AdminContainer pages={ pages } />
         <Comment> <input type="text" ref="Paragraph" placeholder="Paragraph 1"/> </Comment>
         <Comment> <input type="text" ref="Paragraph" placeholder="Paragraph 2"/> </Comment>
         <Comment> <input type="text" ref="Paragraph" placeholder="Paragraph 3"/> </Comment>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
