import React, { PureComponent, PropTypes } from 'react';
import Navigation from './components/Navigation';
import HomeContainer from './containers/HomeContainer';
import PriceContainer from './containers/PriceContainer';
import ReviewContainer from './containers/ReviewContainer';
import PhotoContainer from './containers/PhotoContainer';
import BookingContainer from './containers/BookingContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './assets/styles/themes';
import ImageUploader from './components/ImageUploader';
import ReactPlayer from './components/ReactPlayer';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

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
        return <HomeContainer  />;
      case 1:
        return <PriceContainer />;
      case 2:
        return <ReviewContainer />;
      case 3:
        return <PhotoContainer />;
      case 4:
        return <BookingContainer />;
      default:
        return '';
    }
  }
}

export default App;
