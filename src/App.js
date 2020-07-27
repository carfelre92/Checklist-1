import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.notes = [
      {
        id: 1,
        text: 'watch youtube',
        type: 'relax',
      },
      {
        id: 2,
        text: 'watch netflix',
        type: 'relax',
      },
      {
        id: 3,
        text: 'do nothing',
        type: 'work',
      },
      {
        id: 4,
        text: 'do react',
        type: 'study',
      },
      {
        id: 5,
        text: 'practice git',
        type: 'study',
      }
    ]
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
                this.notes.map(function (note) {
                  return (
                    <div className="col-sm-12 col-md-10 col-lg-3">
                      <div className="todo-container">
                        <div className="checkbox">
                          <div className="box"></div>
                        </div>
                        <div className="todo-texts">
                          <div className="text-container">
                            <h2>{note.text}</h2>
                            <h3>{note.type}</h3>
                          </div>
                        </div>
                        <div className="todo-star">
                          <div className="star-five">
                            <i className="fas fa-star"></i>
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
      </div>




      // <div className="wrap">
      //   <div className="container">
      //     <div className="notes">
      //       {
      //         this.notes.map(function(note){
      //           return(
      //             <div className="note">
      //               <div className="note-body">
      //                 <i className="far fa-times-circle note-remove"></i>
      //                 <div className="note-text">
      //                   {note.text}
      //                 </div>
      //               </div>
      //             </div>
      //           )
      //         })
      //       }

      //       <div className="note new-note">

      //         <form className="note-body">
      //           <div className="form-group">
      //             <label htmlFor="note-input">New note</label>
      //             <input type="text" className="form-control" id="note-input"></input>
      //           </div>

      //           <button type="submit" className="btn btn-primary">Add</button>
      //         </form>

      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }

}



export default App;
