import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/themes'
import PagesContainer from './pages/PagesContainer'
import Comment from './pages/Comment'

const pages = [
  {
    title: 'hoi',
    text: 'even kijken of dit werkt'
  },
]


class App extends PureComponent {
  render() {
    return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>

         <PagesContainer pages={ pages } />
         <Comment> <input type="text" ref="Paragraph" placeholder="Paragraph 1"/> </Comment>
         <Comment> <input type="text" ref="Paragraph" placeholder="Paragraph 2"/> </Comment>
         <Comment> <input type="text" ref="Paragraph" placeholder="Paragraph 3"/> </Comment>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
