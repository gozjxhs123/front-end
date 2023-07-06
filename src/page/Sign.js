import styled from "styled-components"
import GroupLogo2 from "../assets/GroupLogo2.svg"
import { useSignupMutation } from "../apis/account"
import useInput from "../hooks/useInput"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"
import Header from "../components/header/Header"

const Sign = () => {
    const [phone, setPhone, onChangePhone] = useInput("")
    const [id, setId, onChangeId] = useInput("")
    const [password, setPassword, onChangePassword] = useInput("")

    const { mutate: SignMutate } = useSignupMutation()

    const onSignup = () => {
        SignMutate({
            userStrID: id,
            userPhone: phone,
            userPW: password,
        })
    }

    useEffect(() => {
        console.log(id)
        console.log(password)
    }, [id, password])

    return (
        <SignContainer>
            <SignWrapper>
                <Header />
                <ImageContainer>
                    <Image src={GroupLogo2} />
                </ImageContainer>
                <InputContainer>
                    <InputWrapper>
                        <Label>phone</Label>
                        <Input
                            type="text"
                            value={phone}
                            onChange={onChangePhone}
                        ></Input>
                    </InputWrapper>
                    <InputWrapper>
                        <Label>ID</Label>
                        <Input
                            type="text"
                            value={id}
                            onChange={onChangeId}
                        ></Input>
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={password}
                            onChange={onChangePassword}
                        ></Input>
                    </InputWrapper>
                    <ButtonWrapper
                        onClick={
                            id && password && phone
                                ? onSignup
                                : () => toast.error("모두 입력해주세요")
                        }
                    >
                        <Button>Sign up</Button>
                    </ButtonWrapper>
                    <SigninWrapper>
                        <Span>Are you a member?</Span>
                        <Link to="/login">
                            <SignButton>Sign in now</SignButton>
                        </Link>
                    </SigninWrapper>
                </InputContainer>
            </SignWrapper>
        </SignContainer>
    )
}

const SignContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #fff 0%, #14dd4c 100%);
`

const SignWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 18.8vw;
    align-items: center;
    justify-content: space-evenly;
`

const ImageContainer = styled.div`
    width: 20.7vw;
    height: 41.2vh;
    padding-bottom: 5vh;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 24.9vw;
    height: 337px;
`

const InputWrapper = styled.div``

const ButtonWrapper = styled.div`
    height: 50px;
    width: 430px;
`

const Image = styled.img`
    width: 20.7vw;
    height: 41.2vh;
`

const Label = styled.span``

const Input = styled.input`
    width: calc(24.9vw - 7px);
    height: 2.7vh;
    background: transparent;
    border-radius: 5px;
    border: 1.5px solid #787878;
    padding: 1px 2px 1px 2px;
`

const Button = styled.button`
    height: 4.5vh;
    width: 430px;
    border-radius: 5px;
    background: var(--main-pink, #ff7283);
    color: white;
    border: none;
`

const SignButton = styled.button`
    background: transparent;
    border: none;
    padding: none;
    color: #ff7283;
`

const Span = styled.span``

const SigninWrapper = styled.div``

export default Sign
