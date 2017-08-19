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
            edit: false,
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
        console.log('this.props', this.props);
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
                            <TextField id="text-field-controlled" value={this.state.heading} onChange={this.handleHeadingOnChange.bind(this)}/>  
                        </span>
                    :
                        <h1> {this.state.heading} </h1>
                    }
                </CardTitle>
                <CardText>
                    {this.state.edit ? 
                        <span> 
                            <TextField id="text-field-controlled" value={this.state.text} onChange={this.handleTextOnChange.bind(this)}/>  
                        </span>
                    :
                        <div> {this.state.text} </div>
                    }
                </CardText>
            </Card>
        )
    }
}

export default HomeContent;