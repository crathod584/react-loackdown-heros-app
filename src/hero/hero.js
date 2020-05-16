import React from 'react';
import './my.css'
import 'tachyons';

class HeroComponent extends React.Component{
    render(){
        return <div className="mini ma4 dib bg-light-blue grow shadow-4">
          <img src={this.props.pic} alt="hero" />
          <h4 className="tc">{this.props.name}</h4>
          <h4 className="tc">{this.props.work}</h4>
        </div>
    }
}

export default HeroComponent;