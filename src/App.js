import React, { Component } from 'react';
import './App.css';
import img from './dist/profile.jpg' 
import * as mainPanel from './MainPanel'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {display: 'ABOUTME'}
    this.mainPanel = <mainPanel.AboutMe/>
  }

// [ other projects: [], 
// flash notes : [idea, node server, 
//                react-native client ], 
// development blog ]

  componentWillUpdate(nextProps, nextState){
    switch (nextState.display){
      case 'ABOUTME':
        this.mainPanel = <mainPanel.AboutMe/>
        break;
      default:
        this.mainPanel = <mainPanel.Error/> 
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Flash notes</h1>
          <h1 className="App-title">Raz Kronenberg</h1>
        </header>

        <div className="appPanel">

          <div className="mainPanel">
            {this.mainPanel}
          </div>

          <div className="infoPanel">

          <img src={img}
           height="160" width="160"/> 

          </div>

        </div>
      </div>
    );
  }
}





// const BoldButton = (props) => {
//   return (
//     <button key={props.text} style={{color: 'blue'}}>
//       {props.text} 
//     </button>
//   )
// }

// class LinkButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(e) {
//     e.preventDefault();
//     this.props.viewCategory(this.props.text)
//     console.log('The link was clicked.')
//   }

//   render(){
//     return (
//       <button key={this.props.text} onClick={this.handleClick}> 
//         {this.props.text} 
//       </button>
//     )
//   }
// }

// const CategoryLink = (props) => {
//   let linkButton = null;
//   if (props.text === props.currentCategory){
//     linkButton = <BoldButton text={props.category} viewCategory={props.viewCategory}/>
//   }
//   else{
//     linkButton = <LinkButton text={props.category} viewCategory={props.viewCategory}/>
//   }
//   return (
//     <div key={props.category}>
//       {linkButton}
//     </div>
//   )
// }

export default App;
