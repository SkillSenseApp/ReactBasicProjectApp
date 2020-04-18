import React from 'react'
import TodoItems from './components/TodoItems'
import Todo from './components/Todo'
class App extends React.Component {

  constructor() {
    super()
   
    this.state = {
      todos : TodoItems
    }
    this.handleChange = this.handleChange.bind(this)
  }

handleChange(id){
  console.log('changed', id)
  this.setState(prevState => {
    const updatedTodos = prevState.todos.map(looper => {
      if(looper.id === id) {
        looper.flag = !looper.flag
      }
      return looper
    })
      return {
        todos : updatedTodos
      }
  })
}
  render() {
const eachItem =  this.state.todos.map(item => <Todo key = {item.name} value= {item} handleChange={this.handleChange}/>)
   return (
         <div>
           <h3> This is the test</h3>
           {eachItem}
     </div>
   )
   }
} 

export default App