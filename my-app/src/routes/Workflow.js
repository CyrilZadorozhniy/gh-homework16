import React from 'react';
import './../ui/workflow/Workflow.css'
import Box from '../ui/atoms/Box';
import Avatar from 'material-ui/Avatar';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Workflow extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [
                { _id:'asd3wvaasdv3', category:'toDo', name:'New website for JCD.pl', deadLine: '5 days left'},
                { _id:'ajb93fbs9r23', category:'toDo', name:'Free PSD Template vol. 3', deadLine: '6 days left'},
                { _id:'dflgp045jkfk', category:'toDo', name:'New logo for Google', deadLine: '7 days left'},
                { _id:'asdfsdfsaas3', category:'toDo', name:'New website for Windu.org', deadLine: '5 days left'},
                { _id:'ajb93fdsfgg3', category:'inProgress', name:'New logo for Apple', deadLine: '6 days left'},
                { _id:'dfsdfggdjkfk', category:'inProgress', name:'Daily UI Kit', deadLine: '7 days left'},
                { _id:'asd3sdfggfd3', category:'completed', name:'Free PSD Template vol. 1', deadLine: '5 days left'},
                { _id:'dfgdfgsdfg23', category:'completed', name:'Iconset vol. 1', deadLine: '6 days left'},
                { _id:'dflgdfsddfdk', category:'completed', name:'New website vol. 1', deadLine: '7 days left'},
            ]
        }
    };
    onDragStart = (ev, id) => {
        console.log(ev);
        ev.dataTransfer.setData("id", id);
    };
    onDragOver = (ev) => {
        ev.preventDefault();
    };

    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");
        let tasks = this.state.tasks.filter((task) =>{
            if (task._id == id) {
                task.category = cat
            }
            return task
        });
        this.setState({
            ...this.state,
            tasks
        })
    };
    render() {
        let tasks= {
            toDo: [],
            inProgress: [],
            completed: []
        };
        this.state.tasks.forEach((t) => {
            tasks[t.category].push(
                <li key={t._id}
                    className="draggable"
                    draggable
                    onDragStart={(e) => this.onDragStart(e, t._id)}
                >

                    <Box style={{padding:0}}>
                        <span className="task-img" style={{width: 50,height: 50,borderRadius: '50%', backgroundColor: '#5584ff',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:21,fontWeight:500}}>
                            {t.name.charAt(0)}
                        </span>
                        <div className="content-wrap">
                            <h4 style={{fontSize:16}}>{t.name}</h4>
                            <p style={(t.category === 'completed') ? {display:'flex',alignItems:'center',color:'#00BF1B'}:{display:'flex',alignItems:'center',color:'#8492AF'}}><i className="material-icons" style={{display:'flex',paddingRight: 5}}>access_time</i>{(t.category === 'completed')?'Completed!':t.deadLine}</p>
                        </div>
                        <IconMenu
                            iconButtonElement={<IconButton><MoreVertIcon size={12} /></IconButton>}
                            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                            targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        >
                            <MenuItem primaryText="Refresh" />
                            <MenuItem primaryText="Send feedback" />
                            <MenuItem primaryText="Settings" />
                            <MenuItem primaryText="Help" />
                            <MenuItem primaryText="Sign out" />
                        </IconMenu>
                    </Box>
                </li>
            )
        })
        return(
            <div className="section-workflow">
                <ul className="workflow-list">
                    <li className="workflow-list-item"
                        onDragOver={(e) => this.onDragOver(e)}
                        onDrop={(e) => this.onDrop(e, 'toDo')}
                    >
                        <div className="workflow-board">
                            <h3>To Do<span>({tasks.toDo.length})</span></h3>
                            <ul>
                                {tasks.toDo}
                            </ul>
                        </div>
                    </li>
                    <li className="workflow-list-item"
                        onDragOver={(e) => this.onDragOver(e)}
                        onDrop={(e) => this.onDrop(e, 'inProgress')}
                    >
                        <div className="workflow-board">
                            <h3>In Progress<span>({tasks.inProgress.length})</span></h3>
                            <ul>
                                {tasks.inProgress}
                            </ul>
                        </div>
                    </li>
                    <li className="workflow-list-item"
                        onDragOver={(e) => this.onDragOver(e)}
                        onDrop={(e) => this.onDrop(e, 'completed')}
                    >
                        <div className="workflow-board">
                            <h3>Completed <span>({tasks.completed.length})</span></h3>
                            <ul>
                                {tasks.completed}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Workflow