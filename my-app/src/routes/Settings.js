import React from 'react';
import Select from '../ui/atoms/Select'
import store from '../redux/store'
class Settings extends React.Component {

    selectChange = (e) => {
        store.dispatch({
            type:'SETTING_SELECT',
            payload: {
                status: e
            }
        });
    };
    render() {
        const select = ['Show Avatar','Hide Avatar'];
        return(
            <div className="section-settings">
                <Select data={ select } onChangeSelect={this.selectChange}/>
            </div>
        )
    }
}
export default Settings