import React from 'react';
import HeroComponent from './hero'

class HeroListComponent extends React.Component{   
    state = {
        name:"????"
    }

    render(){
        return <div>
            <h1 className="tc">{this.state.name}</h1>
            <HeroComponent id="1" pic="../picture/army.jpg" name="Army" work="Protect Nation" />
            <HeroComponent id="2" pic="../picture/doctor.jpeg" name="Doctors" work="Cure Nation" />
            <HeroComponent id="3" pic="../picture/farmar.jpeg" name="Farmar" work="Feed Nation" />
            <HeroComponent id="4" pic="../picture/police.jpeg" name="Police" work="Protect Area" />
            <button className="flex-justify-center w-100" onClick={this.changeStatus}>Click me</button>
        </div>
    }

    changeStatus = () =>{
        this.setState({
            name:"Heros of Lockdown"  
        });
    }
}

export default HeroListComponent;

