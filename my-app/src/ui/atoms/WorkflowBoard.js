import React from 'react';

import Box from './Box';
import Avatar from 'material-ui/Avatar';

class WorkflowBoard extends React.Component {

    render() {

        return(
            <div className="workflow-board">
                <h3>{this.props.title}</h3>
                <ul id={this.props.idBoard}>
                    <li>
                        <Box style={{padding:0}}>
                            <Avatar/>
                        </Box>
                    </li>
                </ul>
            </div>
        )
    }
}
export default WorkflowBoard