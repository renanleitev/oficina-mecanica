import React, {useState} from "react";
import { MainContainer, Form } from "../../styles";
import Input from '../../components/shared/InputData';
import { initialUser } from "../../store/modules/users";

export default function Login(){
    const [user, setUser] = useState(initialUser);
    return (
        <MainContainer>
            <Form>
                <h1>Login</h1>
                <Input 
                keyName={'username'} 
                keyValue={initialUser.username} 
                data={user} 
                setData={setUser}/>
                <Input 
                keyName={'password'} 
                keyValue={initialUser.password} 
                data={user} 
                setData={setUser}/>
                <button>Login</button>
            </Form>
        </MainContainer>
    )
}