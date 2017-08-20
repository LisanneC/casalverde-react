import React, {PureComponent} from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class NCard extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
        }
        this.initial();
    }

    initial() {
        let content = this.props.content;
        let keys = Object.keys(content);
        keys.map(key => {
            this.state[key] = key;
        })
    }

    handleOnSave() {
        this.props.handleOnSave(this.state);
        this.initial();
    }

    handleOnChange (field, event){
        let newState = {};
        newState[field] = event.target.value;
        this.setState(newState);
    }

    renderContent() {
        let content = this.props.content;
        let keys = Object.keys(content);
        return keys.map((key,i) => {
            if(key !== "id" && key !== "page_id"){
                return (
                    <div key={i} style={{marginTop: '40px', background: '#EEEEEE', padding: '1em 0.53em'}}>
                        <TextField fullWidth={true} id="text-field-controlled" value={this.state[key]} onChange={this.handleOnChange.bind(this, key)}/>  
                    </div>
                )
            }
        })
    }


    render() {
        console.log('NCared', this.props, this.state);
        return (
            <Card style={{width: "45vw", display: 'inline-block', margin: '2vw'}}>
                <CardTitle  style={{background: '#EF5350', color: '#fff', padding:'1.5em'}}>
                    {this.props.title}
                </CardTitle>
                <CardText>
                    {this.renderContent()}
                </CardText>
                <CardActions>
                        <FlatButton secondary={true} label="SAVE" onClick={this.handleOnSave.bind(this) } />
                </CardActions>
            </Card>
        )
    }
}

export default NCard;