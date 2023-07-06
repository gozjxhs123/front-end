import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import Logo from "../../assets/Logo.svg"
import Cookies from "js-cookie"
import { authLoad, phoneLoad } from "../../apis"
import { useState } from "react"

const Header = () => {
    const [phone, setPhone] = useState("")
    const navigate = useNavigate()

    const onLogout = () => {
        authLoad.delete("/logout", {
            headers: {
                accesstoken: Cookies.get("accessToken"),
                refreshtoken: Cookies.get("refreshToken"),
            },
        })
        Cookies.remove("accessToken")
        Cookies.remove("refreshToken")
    }

    const NavContent = () => {
        if (Cookies.get("accessToken")) {
            const fetch = async () =>
                phoneLoad.get("/record").then(({ data }) => {
                    setPhone(data.data.userPhone.substr(7))
                })
            fetch()
            return (
                <>
                    <Link to="/">
                        <LoginButton onClick={() => onLogout()}>
                            로그아웃
                        </LoginButton>
                    </Link>
                    <SignupButton>{phone}</SignupButton>
                </>
            )
        } else {
            return (
                <>
                    <Link to="/login">
                        <LoginButton>로그인</LoginButton>
                    </Link>
                    <Link to="/sign">
                        <SignupButton>회원가입</SignupButton>
                    </Link>
                </>
            )
        }
    }

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Icon>
                    <HomeButton onClick={() => navigate("/")}>
                        <IconImg src={Logo} />
                    </HomeButton>
                </Icon>
                <Nav>
                    <NavContent />
                </Nav>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header

const HomeButton = styled.button`
    border: none;
    background: transparent;
`

const HeaderContainer = styled.div`
    width: 100vw;
    height: 6.2vh;
    top: 0;
    position: absolute;
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
