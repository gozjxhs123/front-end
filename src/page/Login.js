import GroupLogo1 from "../assets/GroupLogo1.svg"
import styled from "styled-components"
import { Link } from "react-router-dom"
import useInput from "../hooks/useInput"
import { useEffect } from "react"

const Login = () => {
    const [id, setId, onChangeId] = useInput("")
    const [password, setPassword, onChangePassword] = useInput("")

    useEffect(() => {
        console.log(id)
        console.log(password)
    }, [id, password])

    return (
        <LoginContainer>
            <LoginWrapper>
                <ImageContainer>
                    <Image src={GroupLogo1} />
                </ImageContainer>
                <InputContainer>
                    <TitleWrapper>Sign in to Falltect</TitleWrapper>
                    <InputWrapper>
                        <Label>ID</Label>
                        <Input type="text" value={id} onChange={onChangeId} />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={password}
                            onChange={onChangePassword}
                        />
                    </InputWrapper>
                    <ButtonWrapper>
                        <LoginButton>
                            Sign in
                        </LoginButton>
                    </ButtonWrapper>
                    <SignWrapper>
                        <Span>Not a member?</Span>
                        <Link to="/sign">
                            <SignButton>Sign up now</SignButton>
                        </Link>
                    </SignWrapper>
                </InputContainer>
            </LoginWrapper>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, rgba(99, 232, 135, 0) 0%, #14dd4c 100%);
`

const LoginWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 18.8vw;
`

const ImageContainer = styled.div`
    width: 20.7vw;
    height: 41.2vh;
`

const InputContainer = styled.div`
    width: 24.9vw;
    height: 33.2vh;
    gap: 2.7vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const InputWrapper = styled.div`
    height: 56px;
`

const ButtonWrapper = styled.div``

const Image = styled.img`
    width: 20.7vw;
    height: 41.2vh;
`

const Input = styled.input`
    width: calc(24.9vw - 7px);
    height: 2.7vh;
    background: transparent;
    padding: 1px 2px 1px 2px;
    border-radius: 5px;
    border: 1.5px solid #787878;
`

const LoginButton = styled.button`
    width: 24.9vw;
    height: 4.5vh;
    border: none;
    color: white;
    border-radius: 5px;
    background: var(--main-pink, #ff7283);
`
const TitleWrapper = styled.span`
    text-align: left;
    width: 24.9vw;
`

const Label = styled.span``

const SignButton = styled.button`
    background: transparent;
    border: none;
    padding: none;
    color: #ff7283;
`

const Span = styled.span``

const SignWrapper = styled.div``
