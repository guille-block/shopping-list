import React from "react";
 
class Test extends React.Component {
    constructor(props){
    super(props);

    this.state = {
        left: 0
    }
  }

  handleSwipe(){
    this.setState({left: -350})
  }

  render(){
    return(
        <div className="outter">
            <div className="inner" style={{left: this.state.left}} onTouchStart={touchStartEvent => this.handleTouchStart(touchStartEvent)}>
                 <div className="child"><img src="http://placehold.it/350x150" /></div>
                 <div className="child"><img src="http://placehold.it/350x150" /></div>
                 <div className="child"><img src="http://placehold.it/350x150" /></div>
                 <div className="child"><img src="http://placehold.it/350x150" /></div>
            </div>
      </div>
    )
  }
}


export default Test