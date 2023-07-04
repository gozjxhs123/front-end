import styled from "styled-components"
import FirstSection from "../components/OnBoarding/Section/FirstSection"
import SecondSection from "../components/OnBoarding/Section/SecondSection"

const Main = () => {
    return (
        <OnBoardingContainer>
            <OnBoardingWrapper>
                <OnBoardingSectionContainer>
                    <Hs style={{ height: "6.2vh" }}></Hs>
                    <FirstSection />
                    <SecondSection />
                </OnBoardingSectionContainer>
            </OnBoardingWrapper>
        </OnBoardingContainer>
    )
}

const Hs = styled.div`
    position: absolute;
    width: 100%;
    border: 2px solid black;
`

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
