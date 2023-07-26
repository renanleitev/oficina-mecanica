import React, { useState } from "react";
import { MainContainer, Form } from "../../styles";
import InputData from '../../components/shared/InputData';
import { initialUser } from "../../store/modules/users";
import { FlexRowContainer, FlexColumnContainer } from "../../styles";

export default function SignIn() {
    const [user, setUser] = useState(initialUser);
    return (
        <MainContainer>
            <Form>
                <h1>Sign in</h1>
                <FlexRowContainer>
                    <FlexColumnContainer>
                        <InputData
                            keyName={'name'}
                            keyValue={initialUser.name}
                            data={user}
                            setData={setUser} />
                        <InputData
                            keyName={'surname'}
                            keyValue={initialUser.surname}
                            data={user}
                            setData={setUser} />
                        <InputData
                            keyName={'address'}
                            keyValue={initialUser.address}
                            data={user}
                            setData={setUser} />
                    </FlexColumnContainer>
                    <FlexColumnContainer>
                        <InputData
                            keyName={'email'}
                            keyValue={initialUser.email}
                            data={user}
                            setData={setUser} />
                        <InputData
                            keyName={'username'}
                            keyValue={initialUser.username}
                            data={user}
                            setData={setUser} />
                        <InputData
                            keyName={'password'}
                            keyValue={initialUser.password}
                            data={user}
                            setData={setUser} />
                    </FlexColumnContainer>
                </FlexRowContainer>
                <button>Sign in</button>
            </Form>
        </MainContainer>
    )
}