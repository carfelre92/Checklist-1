import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      notes: [

      ],
      titleInput: '',
      typeInput: '',
    }
  }
  //method handles inputs from Title input
  handleTitleInput = (e) => {
    this.setState({ titleInput: e.target.value })
    console.log(e.target.value)
  }
  //method handles inputs from Type input
  handleTypeInput = (e) => {
    this.setState({ typeInput: e.target.value })
    console.log(e.target.value)
  }

  addTodo = (e) => {
    e.preventDefault()

    if(this.state.titleInput!='' && this.state.typeInput!='' ){
      let note = {
        id: Date.now(),
        titleInput:this.state.titleInput,
        typeInput:this.state.typeInput,
      }
  
      let newNotes=[note,...this.state.notes]
      this.setState({
        notes:newNotes,
        titleInput: '',
        typeInput: '',
      })
    } else {
      console.log('asdasd')
    }

    
  }

  deleteNote = (e) =>{
    let noteIdToDelete = parseInt(e.target.id)
    let notes = this.state.notes

    let filteredNotes = notes.filter((item)=>{
      return item.id !== noteIdToDelete
    })
    console.log({filteredNotes})

    this.setState({notes:filteredNotes})
  }



    render() {
      return (
        <div className="wrap">
          <section className="section1">
            <div className="container-lg container-todo-list">
              <div className="heading">
                <h1>My tasks</h1>
              </div>

              <div className="row todo-list">
                {
                  this.state.notes.map((notes)=>{
                    return (
                      <div className="col-sm-12 col-md-10 col-lg-3" key={notes.id}>
                        <div className="todo-container">
                          <div className="checkbox">
                            <div id={notes.id} className="box" onClick={this.deleteNote}></div>
                          </div>
                          <div className="todo-texts">
                            <div className="text-container">
                              <h2>{notes.titleInput}</h2>
                              <h3>{notes.typeInput}</h3>
                            </div>
                          </div>
                          <div className="todo-star">
                            <div className="star-five">
                              <i className="fas fa-star"></i>
                              <FontAwesomeIcon icon={faStar} />
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </section>

          <section className="section2">
            <div className="container-lg form-note">
              <div className="row">
                <form className="note-container">
                  <div className="col-12 heading-title">
                    Create new To-do
                </div>
                  <input type="text" className="col-12 input-title" placeholder="To-do title" value={this.state.titleInput} onChange={this.handleTitleInput}></input>
                  <div className="line-container">
                    <div className="line"></div>
                  </div>
                  <input type="text" className="col-12 input-type" placeholder="To-do type" value={this.state.typeInput} onChange={this.handleTypeInput}></input>
                  <div className="col-12 button-container">
                    <button type="submit" className="button button-confirm" onClick={this.addTodo}>
                      Confirm
                  </button>
                  <button className="button button-cancel">
                      Cancel
                  </button>
                </div>
              </form>


              </div>
            </div>
          </section>
        </div>

      );
    }

  }

export default App;
