import React, {PureComponent} from 'react';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import Done from 'material-ui/svg-icons/action/done';
import Delete from 'material-ui/svg-icons/action/delete';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


class HomeContent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            heading: this.props.heading ? this.props.heading : 'NO HEADING YET',
            text: this.props.text ? this.props.text : 'NO TEXT YET',
            editableHeader: false,
            editableText: false,
        }
    }
    handleOnEditChange(type, done) {
        if (type === 'heading'){
            this.setState({ editableHeader: !this.state.editableHeader});
        } else {
            this.setState({ editableText: !this.state.editableText});
        }
        if (done){
            if(this.props.new){
                this.props.handleOnSave({id: this.props.id, heading: this.state.heading, text: this.state.text});
            } else {
                this.props.handleOnUpdate({id: this.props.id, heading: this.state.heading, text: this.state.text});
            }
        }
    }

    handleHeadingOnChange (event){
        this.setState({
            heading: event.target.value
        })
    }
    handleTextOnChange (event){
        this.setState({
            text: event.target.value
        })
    }


    render() {
        return (
            <Card >
                {this.props.new ? "Add a new Record" : 
                    <Delete onClick={() => this.props.handleOnDelete(this.props.id)} />
                }
                <CardTitle>
                    {this.state.editableHeader ? 
                        <span> 
                            <TextField id="text-field-controlled" value={this.state.heading} onChange={this.handleHeadingOnChange.bind(this)}/>  
                            <Done onClick={this.handleOnEditChange.bind(this, 'heading', true)} />
                        </span>
                    :
                        <h1> {this.state.heading}  <ModeEdit onClick={this.handleOnEditChange.bind(this, 'heading', false)}/></h1>
                    }
                </CardTitle>
                <CardText>
                    {this.state.editableText ? 
                        <span> 
                            <TextField id="text-field-controlled" value={this.state.text} onChange={this.handleTextOnChange.bind(this)}/>  
                            <Done onClick={this.handleOnEditChange.bind(this, 'text', true)} />
                        </span>
                    :
                        <div> {this.state.text}  <ModeEdit onClick={this.handleOnEditChange.bind(this, 'text', false)}/></div>
                    }
                </CardText>
            </Card>
        )
    }
}

export default HomeContent;