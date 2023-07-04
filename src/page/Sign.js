import styled from "styled-components"
import GroupLogo2 from "../assets/GroupLogo2.svg"

const Sign = () => {
    return (
        <SignContainer>
            <SignWrapper>
                <ImageContainer>
                    <Image src={GroupLogo2} />
                </ImageContainer>
                <InputContainer>
                    <InputWrapper>
                        <Label>Name</Label>
                        <Input></Input>
                    </InputWrapper>
                    <InputWrapper>
                        <Label>ID</Label>
                        <Input></Input>
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Password</Label>
                        <Input></Input>
                    </InputWrapper>
                    <ButtonWrapper>
                        <Button>Sign up</Button>
                    </ButtonWrapper>
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

export default Sign
