import BaseInput from "../common /BaseInput/BaseInput";
import todoStore from "../../store/todoStore";
import {useState} from "react";
import {observer} from 'mobx-react-lite';




const CreateTask = ()=> {
    const [value,setValue] = useState<string>('')

    const handleClick = ()=> {
        todoStore.addTodo(value)
        setValue('')
    }

    return (<div>
        <BaseInput
            placeholder={'New task'}
            button={'+'}
            value={value}
            onChange={e=> {
            setValue(e.target.value)}
        }
        handleClick={handleClick}
        />
    </div>)
}

export default observer(CreateTask)