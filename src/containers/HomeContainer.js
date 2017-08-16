import React, { PureComponent } from 'react';
import Title from '../components/Title';
import {connect} from 'react-redux';
import HomePage from '../components/HomePage';
import RaisedButton from 'material-ui/RaisedButton';
import ImageUploader from '../components/ImageUploader';


class HomeContainer extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      edit: false,
      buttonName: 'Edit',
    }
  }

  render() {
    return(
      <div className="Pages wrapper">
        <main>
          <ImageUploader />
          <HomePage edit={this.state.edit} content={this.props.homePageContent} />
          <RaisedButton label={this.state.buttonName} primary={true} onClick={this.handleOnClick.bind(this)} />
        </main>
      </div>
    )
  }

  handleOnClick() {
    if(this.state.edit){
      this.setState({
        edit: false,
        buttonName: 'Edit'
      });
    }else {
      this.setState({
        edit: true,
        buttonName: 'Save'
      });

    }
  }
}

const mapStateToProps = ({homePageContent}) => ({homePageContent})

export default connect(mapStateToProps)(HomeContainer);
