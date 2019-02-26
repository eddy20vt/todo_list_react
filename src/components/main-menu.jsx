import React from 'react';
import '../style/main_menu.css';
import { Button } from 'reactstrap';

const MainMenuItem = (props) => {
    return(
        <Button className='main_menu_item' color='primary'>{props.title}</Button>
    );
};

export class MainMenu extends React.Component {

    render(){
        return(
            <div className='main_menu'>
                <MainMenuItem title='Menu 1'/>
                <MainMenuItem title='Menu 2'/>
                <MainMenuItem title='Menu 3'/>
            </div>
        );
    }
}


export default MainMenu