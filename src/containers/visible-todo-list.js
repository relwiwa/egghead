import React, { Component } from 'react';

import TodoList from '../components/todo-list';
import { store } from '../todo-app';

class VisibleTodoList extends Component {
  componentDidMount() {
    // subscribe returns way to unsubscribe
    this.unsubscribe = store.subscribe(() => this.forceUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  
  getVisibleTodos(todos, filter) {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(
          t => t.completed
        );
      case 'SHOW_ACTIVE':
        return todos.filter(
          t => !t.completed
        );
    }
  };
  
  render() {
    const state = store.getState();
    return <TodoList
      todos={this.getVisibleTodos(
        state.todos,
        state.visibilityFilter
      )}
      onTodoClick={id => store.dispatch({
        type: 'TOGGLE_TODO',
        id
      })}
    />
  }
}

export default VisibleTodoList;
