import styled from "styled-components"
import { Link } from "react-router-dom"
import Logo from "../../assets/Logo.svg"

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Icon>
                    <IconImg src={Logo} />
                </Icon>
                <Nav>
                    <Link to="/login">
                        <LoginButton>로그인</LoginButton>
                    </Link>
                    <Link to="/sign">
                        <SignupButton>회원가입</SignupButton>
                    </Link>
                </Nav>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    width: 100vw;
    height: 6.2vh;
    border-bottom: 1px solid #ff7283;
`

const HeaderWrapper = styled.div`
    width: calc(100% - 22.5vw);
    height: 100%;
    display: flex;
    padding: 0 11.5vw 0 11.5vw;
    flex-direction: row;
    justify-content: space-between;
`

const Icon = styled.div`
    width: 70%;
`

const IconImg = styled.img``

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LoginButton = styled.button`
    color: #000;
    font-size: 1rem;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: transparent;
    border: none;
    height: 4.4vh;
    width: 5.3vw;
`

const SignupButton = styled.button`
    color: #000;
    font-size: 1rem;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: rgba(99, 232, 135, 0.5);
    border: none;
    height: 4.4vh;
    width: 5.3vw;
`
