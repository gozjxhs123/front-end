import styled from "styled-components"
import FirstSection from "../components/OnBoarding/Section/FirstSection"
import SecondSection from "../components/OnBoarding/Section/SecondSection"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { toast } from "react-hot-toast"

const Main = () => {
    return (
        <OnBoardingContainer>
            <OnBoardingWrapper>
                <OnBoardingSectionContainer>
                    <Header />
                    <FirstSection />
                    <SecondSection />
                    <Footer />
                </OnBoardingSectionContainer>
            </OnBoardingWrapper>
        </OnBoardingContainer>
    )
}

const OnBoardingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`

const OnBoardingWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`

const OnBoardingSectionContainer = styled.div`
    width: 100%;
    height: 100%;
`
export default Main
