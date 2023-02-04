import {observer} from 'mobx-react-lite';
import styles from './User.module.scss';
import {FC, useState} from 'react';
import {NewOptions, UserType} from '../../../../../types/types';
import Select, {OnChangeValue} from "react-select";
import todoStore from "../../../../../store/todoStore";



type UserProps = {
    user: UserType | null,
    id:string,
}

const User:FC<UserProps> = ({user,id}) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    const options:NewOptions[] = todoStore.users.map(user => ({
        value: user.name, label: user.name
    }))

    const onClick = () => {
        if(user) {
            todoStore.deleteUser(id, user.name)
            setEditMode(!editMode)
        }
    }

    if (user) {
        return (<div className={styles.user}>
            <span><img src={user.avatar} alt='ava'/></span>
            <span>{user.name}</span>
            <span onClick={onClick}> X</span>
        </div>)
    }

    const onChange = (newValue:OnChangeValue<NewOptions, boolean>) => {
       todoStore.choseUser(id,(newValue as NewOptions).value)
        console.log(todoStore)
    }

    return (<div>
        {
            editMode ? <div className={styles.select}>
                            <Select options={options}
                                    placeholder={'Add worker'}
                                    onChange={onChange}

                            /></div> :
                <span onClick={()=>setEditMode(!editMode)}>&#128104;</span>
        }
    </div>)
}


export default observer(User)