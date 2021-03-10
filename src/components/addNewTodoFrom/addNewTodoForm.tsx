import React , {useState} from 'react'
import { ITask } from '../../interfaces/interfaces';
import './addNewTodoForm.scss';
import mainStore from '../../stores/mainStore';


const AddNewTodoForm = () => {
    const [inputValue,setInputValue] = useState<string>('');

    const {addNewTask} = mainStore

    const handleClick = () => {
        console.log(inputValue)
        if(!inputValue.trim()) {
            return
        }
        const newTask: ITask = {
            task:inputValue,
            completed:false,
            date:Date.now(),
            id: Math.floor(Math.random()*1000).toString()
        }
        addNewTask(newTask)
        setInputValue('')
    }
    return(
        <div className ="add-todo-form" >
            <p>
                there should have been instructions but ....
                there should have been instructions but ....
                there should have been instructions but ....
                there should have been instructions but ....
                there should have been instructions but ....
                there should have been instructions but ....
                there should have been instructions but ....
                there should have been instructions but ....
                there should have been instructions but ....
                there should have been instructions but ....
                there should have been instructions but ....
                there should have been instructions but ....
            </p>
            <input type="text" value = {inputValue} placeholder = 'Add new task' onChange = {(e)=>setInputValue(e.target.value)}/>
            <label onClick={()=>handleClick()}>Add new task</label>
        </div>
    )
}
export default AddNewTodoForm;