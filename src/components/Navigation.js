import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import ActionHome from 'material-ui/svg-icons/action/home';
import EuroSymbol from 'material-ui/svg-icons/action/euro-symbol';
import Favorite from 'material-ui/svg-icons/action/favorite';
import AddAPhoto from 'material-ui/svg-icons/image/add-a-photo';
import Event from 'material-ui/svg-icons/action/event';
import NoteAdd from 'material-ui/svg-icons/action/note-add';


const actionHome = <ActionHome />
const price = <EuroSymbol />
const review = <Favorite />
const photo = <AddAPhoto />
const booking = <Event />
const addPage = <NoteAdd />

class BottomNavigationExampleSimple extends Component {

  select = (index) => this.props.updateMenuItem(index);

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.props.selectedItem}>
          <BottomNavigationItem
            label="Home Page"
            icon={actionHome}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Prices"
            icon={price}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Reviews"
            icon={review}
            onClick={() => this.select(2)}
          />
          <BottomNavigationItem
            label="Photo's"
            icon={photo}
            onClick={() => this.select(3)}
          />
          <BottomNavigationItem
            label="Bookings"
            icon={booking}
            onClick={() => this.select(4)}
          />
          <BottomNavigationItem
            label="Add a Page"
            icon={addPage}
            onClick={() => this.select(5)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationExampleSimple;
