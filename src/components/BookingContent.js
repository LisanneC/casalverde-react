import React, {PureComponent} from 'react';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import Done from 'material-ui/svg-icons/action/done';
import Delete from 'material-ui/svg-icons/action/delete';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


class BookingContent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            heading: this.props.title ? this.props.title : 'NO HEADING YET',
            text: this.props.first_name ? this.props.first_name : 'NO TEXT YET',
            text: this.props.last_name ? this.props.last_name : 'NO TEXT YET',
            text: this.props.phone ? this.props.phone : 'NO TEXT YET',
            text: this.props.email ? this.props.email : 'NO TEXT YET',
            text: this.props.street_name ? this.props.street_name : 'NO TEXT YET',
            text: this.props.street_number ? this.props.street_number : 'NO TEXT YET',
            text: this.props.city ? this.props.city : 'NO TEXT YET',
            text: this.props.zip_code ? this.props.zip_code : 'NO TEXT YET',
            text: this.props.people ? this.props.people : 'NO TEXT YET',
            text: this.props.total_price ? this.props.total_price : 'NO TEXT YET',
            text: this.props.confirmed ? this.props.confirmed : 'NO TEXT YET',
            text: this.props.paid ? this.props.paid : 'NO TEXT YET',
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
                <CardTitle>
                    {this.state.edit ?
                        <span>
                            <TextField id="text-field-controlled" value={this.state.heading} onChange={this.handleOnChange.bind(this, 'heading')}/>
                        </span>
                    :
                        <h1> {this.state.heading} </h1>
                    }
                </CardTitle>
                <CardText>
                    {this.state.edit ?
                        <span>
                            <TextField id="text-field-controlled" value={this.state.title} onChange={this.handleOnChange.bind(this, 'title')}/>
                            <TextField id="text-field-controlled" value={this.state.first_name} onChange={this.handleOnChange.bind(this, 'first name')}/>
                            <TextField id="text-field-controlled" value={this.state.last_name} onChange={this.handleOnChange.bind(this, 'last name')}/>
                            <TextField id="text-field-controlled" value={this.state.email} onChange={this.handleOnChange.bind(this, 'email')}/>
                            <TextField id="text-field-controlled" value={this.state.street_name} onChange={this.handleOnChange.bind(this, 'street name')}/>
                            <TextField id="text-field-controlled" value={this.state.street_number} onChange={this.handleOnChange.bind(this, 'street number')}/>
                            <TextField id="text-field-controlled" value={this.state.city} onChange={this.handleOnChange.bind(this, 'city')}/>
                            <TextField id="text-field-controlled" value={this.state.zip_code} onChange={this.handleOnChange.bind(this, 'zip code')}/>
                            <TextField id="text-field-controlled" value={this.state.people} onChange={this.handleOnChange.bind(this, 'people')}/>
                            <TextField id="text-field-controlled" value={this.state.total_price} onChange={this.handleOnChange.bind(this, 'total price')}/>
                            <TextField id="text-field-controlled" value={this.state.confirmed} onChange={this.handleOnChange.bind(this, 'confirmed')}/>
                            <TextField id="text-field-controlled" value={this.state.paid} onChange={this.handleOnChange.bind(this, 'paid')}/>
                        </span>
                    :
                        <div>
                        {this.state.title}
                        {this.state.first_name}
                        {this.state.last_name}
                        {this.state.phone}
                        {this.state.email}
                        {this.state.street_name}
                        {this.state.street_number}
                        {this.state.city}
                        {this.state.zip_code}
                        {this.state.people}
                        {this.state.total_price}
                        {this.state.confirmed}
                        {this.state.paid}
                        </div>
                    }
                </CardText>
            </Card>
        )
    }
}

export default BookingContent;
