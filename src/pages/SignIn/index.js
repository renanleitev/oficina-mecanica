import React, {useState} from "react";
import { MainContainer, Form } from "../../styles";
import Input from '../../components/shared/Input';
import { initialUser } from "../../store/modules/users";

export default function SignIn(){
    const [user, setUser] = useState(initialUser);
    return (
        <MainContainer>
            <Form>
                <h1>Sign in</h1>
                <Input 
                keyName={'name'} 
                keyValue={initialUser.name} 
                data={user} 
                setData={setUser}/>
                <Input 
                keyName={'surname'} 
                keyValue={initialUser.surname} 
                data={user} 
                setData={setUser}/>
                <Input 
                keyName={'address'} 
                keyValue={initialUser.address} 
                data={user} 
                setData={setUser}/>
                <Input 
                keyName={'email'} 
                keyValue={initialUser.email} 
                data={user} 
                setData={setUser}/>
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
                <button>Sign in</button>
            </Form>
        </MainContainer>
    )
}