import React from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';



import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';


class Tabel extends React.Component {
    dataFormat = (cell ,row) => {
    return (
     <div style={{display:'flex',alignItems: 'center'}}>
         <Badge
             style={{padding: 0, paddingRight: 20}}
             secondary={true}
             badgeStyle={row.active ?{top: 4, right: 19, border: '3px solid #ffffff',backgroundColor:'#00bf1b',width: 14,height:14}:{display: 'none'}}
         >
             <Avatar src={row.url} size={50} style={{marginLeft: 10}}/>
         </Badge>
         <div className='wrap-info' style={{marginLeft: 20}}>
             <p style={{lineHeight: '15px', margin: 0,color:'#0e1a35',fontWeight: 500}}>{row.name}</p>
             <span style={{color:'#8492af',fontSize: 15}}>{row.position}</span>
         </div>
     </div>
    )};
    iconMenu = (cell,row) => {
      return (
          <div  style={{display:'flex',alignItems: 'center',justifyContent: 'center'}}>
              <IconMenu
                  iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                  anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                  targetOrigin={{horizontal: 'left', vertical: 'top'}}
              >
                  <MenuItem primaryText="Refresh" />
                  <MenuItem primaryText="Send feedback" />
                  <MenuItem primaryText="Settings" />
                  <MenuItem primaryText="Help" />
                  <MenuItem primaryText="Sign out" />
              </IconMenu>
          </div>
      )
    };
    lastActivity = (cell,row) => {
      return <span style={row.active ? {display:'flex',alignItems: 'center',marginLeft: 15,color: '#00bf1b'}:{display:'flex',alignItems: 'center',marginLeft: 15,color: '#8492af'}}><i className="material-icons" style={{padding: 5}}>access_time</i>{row.lastActivity}</span>
    };
    render() {
        return(
                <BootstrapTable
                    data={ this.props.users }
                    options={this.props.options}
                    pagination
                    tableStyle={{border:'none',fontFamily: 'Roboto'}}
                    bodyStyle={{border: '1px solid #dee2e6',borderTop: 'none', background: '#fff'}}>
                    <TableHeaderColumn dataField='id' dataFormat={ this.dataFormat} thStyle={ {border: 'none',color:'#8492af'} } isKey>Name</TableHeaderColumn>
                    <TableHeaderColumn dataFormat={ this.lastActivity} thStyle={ {border: 'none', color:'#8492af'} } tdStyle={ {lineHeight:'50px'} }>Last activity</TableHeaderColumn>
                    <TableHeaderColumn dataField='mail' thStyle={ {border: 'none',color:'#8492af'} } tdStyle={ {lineHeight:'50px',color:'#0e1a35',fontWeight: 500} }>Mail</TableHeaderColumn>
                    <TableHeaderColumn dataField='phone' thStyle={ {border: 'none',color:'#8492af'} } tdStyle={ {lineHeight:'50px',color:'#0e1a35',fontWeight: 500} }>Phone</TableHeaderColumn>
                    <TableHeaderColumn dataFormat={this.iconMenu} width='7%' thStyle={ {border: 'none'} }> </TableHeaderColumn>
                </BootstrapTable>
        )
    }
}
export default Tabel

