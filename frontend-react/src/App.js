import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/users').then(({data}) => setUsers([...data]))
    }, [])

    return (
        <div>
            <h1>Users from React:</h1>
            {
                users.map(user =>
                    (
                        <div key={user.id}>
                            <div>id: {user.id}</div>
                            <div>name: {user.name}</div>
                            <div>age: {user.age}</div>
                        </div>
                    )
                )
            }
        </div>
    );
};

export {App};
