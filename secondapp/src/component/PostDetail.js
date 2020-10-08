import React from 'react';

const PostDetails = (props) => {
    console.log(props.match.params.topic)
    return(
        <div className="panel panel-warning">
            <div className="panel-heading">
                {props.match.params.topic} Details Page
            </div>
            <div className="panel-body">
                Details of {props.match.params.topic}
            </div>
        </div>
    )
}

export default PostDetails;