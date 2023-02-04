import {FC} from 'react';
import {User} from './../../types/types';
import {observer} from 'mobx-react-lite';


const UserItem:FC<Omit<User, 'id'>> = ({name,avatar}) => {

    return (<>
        <img src={avatar} alt='avatar'/>
        <span>{name}</span>
        </>)
}

export default observer(UserItem)