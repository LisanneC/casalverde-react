import React, { PureComponent } from 'react';
import Title from '../components/Title';
import {connect} from 'react-redux';
import PhotoPage from '../components/PhotoPage';
import RaisedButton from 'material-ui/RaisedButton';
import ImageUploader from '../components/ImageUploader';


class PhotoContainer extends PureComponent {
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
          <PhotoPage edit={this.state.edit} content={this.props.photoPageContent} />
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

const mapStateToProps = ({photoPageContent}) => ({photoPageContent})

export default connect(mapStateToProps)(PhotoContainer);
