import React from 'react';
import './../ui/workflow/Workflow.css'
import WorkflowBoard from './../ui/atoms/WorkflowBoard'


class Workflow extends React.Component {
    render() {
        return(
            <div className="section-workflow">
                <ul className="workflow-list">
                    <li className="workflow-list-item">
                        <WorkflowBoard  title={'To Do'} idBoard={'A'} />
                    </li>
                    <li className="workflow-list-item">
                        <WorkflowBoard title={'In Progress'} idBoard={'B'} />
                    </li>
                    <li className="workflow-list-item">
                        <WorkflowBoard title={'Completed'} idBoard={'C'} />
                    </li>
                </ul>
            </div>
        )
    }
}
export default Workflow