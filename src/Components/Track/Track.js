import React from "react";
import './Track.css'

class Track extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props)

        this.addTrack=this.addTrack.bind(this)
        this.removeTrack=this.removeTrack.bind(this)

    }
    
    renderAction(){
        console.log(this.props.isRemoval)
        if(this.props.isRemoval===true){
           return <button className="Track-action" onClick={this.removeTrack}>-</button>
        }else{
          return  <button className="Track-action" onClick={this.addTrack}>+</button>
        }
    }

    addTrack(){
        this.props.onAdd(this.props.track)
        console.log(this.props.track)
      
        
    }
    removeTrack(){
        this.props.onRemove(this.props.track)
    }
    render() {
        return <div className="Track">
            <div className="Track-information">
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist} | {this.props.track.album}</p>
            </div>
            {this.renderAction()}

        </div>
    }

}

export default Track;