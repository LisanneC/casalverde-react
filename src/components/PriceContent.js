import React, {PureComponent} from 'react';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import Done from 'material-ui/svg-icons/action/done';
import Delete from 'material-ui/svg-icons/action/delete';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


class PriceContent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            start_date: this.props.start_date ? this.props.start_date : 'NO START DATE YET',
            end_date: this.props.end_date ? this.props.end_date : 'NO END DATE YET',
            min_days: this.props.min_days ? this.props.min_days : 'NO MIN DAYS YET',
            nightly_price: this.props.nightly_price ? this.props.nightly_price : 'NO NIGHTLY PRICE YET',
            extra_price: this.props.extra_price ? this.props.extra_price : 'NO EXTRA PRICE YET',
            saturdays_only: this.props.saturdays_only ? this.props.saturdays_only : 'NO SATURDAY ONLY YET',
            service_cost: this.props.service_cost ? this.props.service_cost : 'NO SERVICE COST YET',
            edit: false,
        }
    }

    handleOnChange (field, event){
        let newState = {};
        newState[field] = event.target.value;
        this.setState(newState);
    }


    handleMode(){
        if (this.state.edit) {
            this.props.handleOnUpdate({id: this.props.id, heading: this.state.heading, text: this.state.text});
        }
        if (this.props.new) {
            this.props.handleOnSave({id: this.props.id, heading: this.state.heading, text: this.state.text});
        }
        this.setState({
            edit: !this.state.edit,
        })
    }


    render() {
        return (
            <Card >
                {this.state.edit ?
                    <div>
                        <Delete onClick={() => this.props.handleOnDelete(this.props.id)} />
                        <Done onClick={this.handleMode.bind(this)}/>
                    </div>
                :
                    <div>
                        <Delete onClick={() => this.props.handleOnDelete(this.props.id)} />
                        <ModeEdit onClick={this.handleMode.bind(this)}/>
                    </div>
                }
                {/* <CardTitle>
                    {this.state.edit ?
                        <span>
                            <TextField id="text-field-controlled" value={this.state.heading} onChange={this.handleOnChange.bind(this, 'heading')}/>
                        </span>
                    :
                        <h1> {this.state.heading} </h1>
                    }
                </CardTitle> */}
                <CardText>
                    {this.state.edit ?
                        <span>
                          <TextField id="start_date-field-controlled" value={this.state.start_date} onChange={this.handleOnChange.bind(this, 'start_date')}/>
                          <TextField id="end_date-field-controlled" value={this.state.end_date} onChange={this.handleOnChange.bind(this, 'end_date')}/>
                          <TextField id="min_days-field-controlled" value={this.state.min_days} onChange={this.handleOnChange.bind(this, 'min_days')}/>
                          <TextField id="nightly_price-field-controlled" value={this.state.nightly_price} onChange={this.handleOnChange.bind(this, 'nightly_price')}/>
                          <TextField id="extra_price-field-controlled" value={this.state.extra_price} onChange={this.handleOnChange.bind(this, 'extra_price')}/>
                          <TextField id="saturdays_only-field-controlled" value={this.state.saturdays_only} onChange={this.handleOnChange.bind(this, 'saturdays_only')}/>
                          <TextField id="service_cost-field-controlled" value={this.state.service_cost} onChange={this.handleOnChange.bind(this, 'service_cost')}/>
                        </span>
                    :
                        <div>
                          {this.state.start_date}
                          {this.state.end_date}
                          {this.state.min_days}
                          {this.state.nightly_price}
                          {this.state.extra_price}
                          {this.state.saturdays_only}
                          {this.state.service_cost}
                        </div>
                    }
                </CardText>
            </Card>
        )
    }
}

export default PriceContent;
