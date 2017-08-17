import * as React from 'react';
import TextField from 'material-ui/TextField';

const HomePage = ({edit, header, parafs, handleOnChange}) => {
    return (
        <div className='homepage'>
        { edit ?
            <div className='form'>
                <div>
                    <TextField id="title" defaultValue={header} onChange={(e)=> handleOnChange(e, 'header')} placeholder='Heading' floatingLabelText='Heading'/>
                </div>
                <div>
                    {parafs.map((item, i) => {
                        return (
                            <TextField
                                id="text"
                                onChange={(e)=> handleOnChange(e, i)}
                                defaultValue={item.text}
                                multiLine={true} rows={3} placeholder='Text' floatingLabelText='Text'
                            />
                        );
                    })};
                </div>

            </div>
        :
            <div>
                <h2>
                    {header}
                </h2>
                {parafs.map(item => <div>{item.text}</div>)}
            </div>
        }
        </div>
    )
}

export default HomePage;
