import React,{Component} from 'react';
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        FullName : 'Abir Remadi',
        Profession: 'Mechatronics Engineer & a Web Developer',
        Bio: 'Hello it s me Abir , Welcome to my Profile , Iam 26 years old , iam a mechatronics engineer and a web developer student.' ,
        SrcImg : './profileimg.jpg',
        Show: false,
        button:'Show Profile'
        
    }
  }
  isToggle = () => {
    this.setState(state => ({
      Show : !this.state.Show
    }))
  }

  render() {
    const Show = this.state.Show;
    return (
  <div className='Profile'>
      { Show && (
      <>
        <h1> {this.state.FullName} </h1>
        <h3> {this.state.Profession} </h3>
        <p className='bio'> {this.state.Bio} </p>
        <img src={this.state.SrcImg} alt='profileimge'></img>
      </>
      )}
      
      <br/> <br/>
      <button onClick={this.isToggle}>{Show?'Hide Profile':this.state.button}</button>
  </div>
    )
  }
}

export default App