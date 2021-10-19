import React from 'react';
import TodoItem from './TodoItem';
import TodoEdit from './TodoEdit';

const TodoList = props => {
  return (
    <ul className="list-group">
      {props.todos &&
        props.todos.map(t =>
          t.editMode ? (
            <TodoEdit
              key={t.name}
              todo={t}
              toggleEditMode={() => props.toggleEditMode(t.index)}
              editTodo={todo => props.editTodo(todo, t.index)}
            />
          ) : (
            <TodoItem
              key={t.name}
              todo={t}
              deleteTodo={() => props.deleteTodo(t.index)}
              editTodo={todo => props.editTodo(todo, t.index)}
              toggleEditMode={() => props.toggleEditMode(t.index)}
            />
          ),
        )}
    </ul>
  );
};

export default TodoList;
