import * as React from 'react';
import TextField from 'material-ui/TextField';

const ReviewPage = ({edit, content}) => {
    return (
        <div className='reviewpage'>
        { edit ?
            <div className='form'>
                <TextField defaultValue={content.name} />
                <div>
                    <TextField defaultValue={content.stars} />
                </div>
                <div>
                    <TextField
                        defaultValue={content.review}
                        multiLine={true}
                    />
                </div>

            </div>
        :
            <div>
                 {content.name} 
                <h1>
                    {content.stars}
                </h1>
                <div>
                    {content.review}
                </div>
            </div>
        }
        </div>
    )
}

export default ReviewPage;
