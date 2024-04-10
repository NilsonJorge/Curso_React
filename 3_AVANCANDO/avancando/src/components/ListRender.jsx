import { useState } from "react"

const ListRender = () => {

    const [list] = useState(['Nilson','Bobo','Bastiao'])
    const [users, setUsers] = useState([
        {id:1, name: 'Nilson', age: 21},
        {id:2, name: 'Bastiao', age: 41},
        {id:3, name: 'Bobo', age: 54},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber!== user.id);
        })
    }

    return(<>
        <ul>
            {list.map((item,i) =>(
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) =>(
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </>
    )
}

export default ListRender