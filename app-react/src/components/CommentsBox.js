import React, { Component } from 'react';
import CommentsTopLevel from './CommentsTopLevel';

class CommentsBox extends Component {

  constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this)
        this.getMessages = this.getMessages.bind(this) 

        this.state = {          
            body: '',
            messages: [],
            comments: []
          }
  }

  componentDidMount(){
    this.getMessages()
    // console.log(this.props)
  }

    onClick(){  
       fetch('/api/projects/' + this.props.projectId + '/assets/' + this.props.assets + '/comments?token=' + sessionStorage.getItem('token'), { 
           method: 'POST',
              headers:{
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({
              //left hand side is handled by back-end
                body: this.state.body
              })

        })
        .then(response => response.json())
        .then(response => this.getMessages())
        .then(blah => {
             //clear the form fields
            this.setState({
                body: '',
            })
        //Reload Lists
          //  console.log("yeee")
        })
    }

        getMessages(){
            fetch('/api/projects/' + this.props.projectId + '/assets/' + this.props.assets + '?token=' + sessionStorage.getItem('token'))
                .then (response => response.json())
                .then(response => this.setState({messages:response.comments}))
                .then(blah => console.log(this.state.messages))

            }
  render() {
    // console.log(this.props)
    let comments = this.state.messages.map((message, key) => <CommentsTopLevel projectId={this.props.projectId} assetId={this.props.assets} commentId={message.id} body={message.body} firstName={message.user.first_name} lastName={message.user.last_name} key={key}/>)

    return (
      <div>
        <div className="row">
          <div className="col-xs-12 commentsTopLevelCol">
          <a name="comments"></a>
          <h4>Messages</h4>
            <div className="input-group">            
                  <input type="text" className="form-control" value={this.state.body} onChange={(e) => this.setState({body: e.target.value})} />
                    <span className="input-group-btn">
                      <button className="btn messagePost" type="button" onClick={() => this.onClick()}>Post</button>
                    </span>
            </div>
            <br/>
          </div>
          {comments}
        </div>
      </div>
      
    );
  }
}

export default CommentsBox;


  // <input type="text" className="form-control" value ={this.state.body} onChange={(e) => this.setState({body: e.target.value})}/>
  //               <span className="input-group-btn">
  //                 <button className="btn messagePost" type="button" onClick={() => this.onClick()}>Post</button>
  //               </span>



// // import React from 'react';

// // class AddTodo extends React.Component{

// //     constructor(props){
// //         super(props)

// //         this.state = {
// //             description: '',
// //             category: '',
// //             // todoID: '',
// //             // completed: '',
// //             getTodos: props.getTodos
// //         }
// //     }
// //    addTodo(getTodos){                    
// //         //Post to /api/v1/todos
// //         if (this.state.description !== '' && this.state.category !== ''){
// //         fetch('/api/v1/todos', {
// //             method: 'Post',
// //             headers:{
// //                 'Content-Type': 'application/json'
// //             },
// //             body: JSON.stringify({
// //                 todo: this.state.description,
// //                 category: this.state.category,
// //                 // todoID: this.state.id,
// //                 // completed: this.state.completed
// //                 // due_at: this.state.due_at,
// //                 // completed: false

// //             })
// //         })
// //         .then(response => response.json())
// //         .then(response => {
// //              //clear the form fields
// //             this.setState({
// //                 description: '',
// //                 category: '',
// //             })
// //         //Reload Lists
// //         this.state.getTodos(response)
// //         })
// //         }
// //     }

// //     render(){
// //              return (
// //             <div className="container addingtodo">
                
// //                     <div className="col-sm-6">
// //                         <div className="form-group">
// //                             <select className="form-control" value={this.state.category} onChange={(e) => this.setState({category: e.target.value})}>
// //                                 <option value="">Select category...</option>
// //                                 <option value="1">1</option>
// //                                 <option value="2">2</option>
// //                                 <option value="3">3</option>
// //                                 <option value="4">4</option>
// //                                 <option value="5">5</option>
// //                         </select>
// //                         </div>
// //                     </div>
// //                     <div className="col-sm-6">
// //                         <div className="input-group">
// //                             <input type="text" className="form-control" placeholder="Task..." value ={this.state.description} onChange={(e) => this.setState({description: e.target.value})}/>
// //                             <span className="input-group-btn">
// //                             <button className="btn btn-default" type="button" onClick={() => this.addTodo(this.props.getTodos)}>Add Todo</button>
// //                             </span>
// //                         </div>
// //                     </div>
// //                 </div>
           
// //         )
// //     } 
// //  }
                
// export default AddTodo;
