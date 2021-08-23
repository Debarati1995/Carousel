import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';

import List from './List';
import './Todo.css';

class Todo extends Component {
    constructor() {
        super();

        // Initializing local state
        this.state = {
            task: '',
            items: []
        };
    }

    componentWillMount() {

        // fetch the list from localstorage
        const taskList = localStorage.getItem('my_list') ? JSON.parse(localStorage.getItem('my_list')) : [];

        // Setting default value of local state
        this.setState({
            items: [
                ...taskList
            ]
        });
    }

    /* FUNCTION to handle user input while adding new task */
    handleOnChange = e => {

        const {target: {value}} = e;

        // set input value to local state task
        this.setState(
            {
                task: value
            }
        );

    }

    /* FUNCTION to handle while submitting the form */
    handleOnSubmit = e => {

        // prevent default to avoid actual form submit
        e.preventDefault();

        // after submitting, need to reset form and push the new task to items array
        if (this.state.task.trim() !== '') {
            this.setState(
                {
                    task: '',
                    items: [
                        ...this.state.items,
                        {
                            id: uuidv4(),
                            task: this.state.task,
                            completed: false
                        }
                    ]
                }
            );

            this.storeList();
        }
    }
    
    /* FUNCTION to mark item as completed */
    markAsCompleted = id => {

        // first find the task from the list
        const foundTask = this.state.items.find(task => task.id === id);

        // now change the status of completed key of the found task
        foundTask.completed = true;

        // update local state variable with newly updated task
        this.setState(
            {
                items: [
                    ...this.state.items
                ]
            }
        );

        this.storeList();
    }   

    /* FUNCTION to remove task from the list */
    removeTask = id => {

        // filter out the list by removing specific task
        const filteredList = this.state.items.filter(task => task.id !== id);

        // updating local state with filtered list of tasks
        this.setState(
            {
                items: [
                    ...filteredList
                ]
            }, () => {
                this.storeList();
            } 
        );

    }

    /* FUNCTION to save the list in localstorage */
    storeList() {
        localStorage.setItem('my_list', JSON.stringify(this.state.items));
    }

    render() {
        return (
            <div className="Todo">
                <h1>New Task:</h1>

                <form onSubmit={this.handleOnSubmit} >
                    <input value={this.state.task} onChange={this.handleOnChange} />
                </form>

                <List items={this.state.items} markAsCompleted={this.markAsCompleted} removeTask={this.removeTask} />
            </div>
        );
    }
}

export default Todo;