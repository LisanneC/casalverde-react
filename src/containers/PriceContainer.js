import React, { PureComponent } from 'react';
import Title from '../components/Title';
import {connect} from 'react-redux';
import HomePage from '../components/HomePage';
import RaisedButton from 'material-ui/RaisedButton';
import PricePage from '../components/PricePage';
import ImageUploader from '../components/ImageUploader';


class PriceContainer extends PureComponent {
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
          <PricePage edit={this.state.edit} content={this.props.pricePageContent} />
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

const mapStateToProps = ({pricePageContent}) => ({pricePageContent})

export default connect(mapStateToProps)(PriceContainer);
