import classes from './TodoItem.module.css'

const TodoItem: React.FC<{
   text: string, removeTodo: () => void
}> = ({ text, removeTodo }) => {
   return (
      <li className={classes.item} onClick={removeTodo}>
         {text}
      </li>
   )
}

export default TodoItem