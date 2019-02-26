import React from 'react';
import Task from './task.jsx'
import '../style/todo_list.css';
export class TodoList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            new_field: '',
            todos: [],
        };
        this.createTaskClick = this.createTaskClick.bind(this);
        this.removeTaskClick = this.removeTaskClick.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.defaultText = 'Empty list!!!';
    }

    updateInput ({ target: { name, value } }) {
        this.setState({
            [name]: value,
        });
    }

    createTaskClick(value){
        const list = this.state.todos;
        list.push(value)
        this.setState({
            todos:list,
            new_field:''
        })
    }

    removeTaskClick(value){
        const list = this.state.todos;
        const index =list.indexOf(value);
        if (index > -1) {
            list.splice(index, 1);
        }
        this.setState({todos:list})
    }

    render(){

        return( 
            <div className='todo_list_main_wraper'>
                <div className='todo_list_header'>
                    {'MyTodo'}
                </div>
                <div className='todo_list_content'>
                    <form>
                        {
                        this.state.todos.length<1
                        ? this.defaultText
                        :this.state.todos.map((item,index) =>
                            <Task 
                                className='existing_task' 
                                value={item} 
                                key={index} 
                                buttonText='Remove'
                                placeholder=''
                                onClick={()=>this.removeTaskClick(item)}
                                readOnly
                            />
                        )
                        }
                    </form> 
                </div>
                <div>
                    <div>{'Add a new task'}</div>
                    <Task 
                        className='new_task'
                        value={this.state.new_field}
                        name='new_field'
                        placeholder='Write a task here'
                        buttonText='Create Task'
                        onChange={this.updateInput}
                        onClick={()=>this.createTaskClick(this.state.new_field)}
                    />
                </div>
            </div>
        );
    }
}


export default TodoList