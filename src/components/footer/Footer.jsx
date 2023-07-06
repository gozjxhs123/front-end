import styled from "styled-components"
import GLogo from "../../assets/GroupLogo.svg"
import Git from "../../assets/Git.svg"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <LeftFooter>
                    <GroupLogo>
                        <GroupLogoImg src={GLogo} />
                    </GroupLogo>
                    <TabGroup>
                        <Tab>
                            <JobName>PM</JobName>
                            <PersonName>하태라</PersonName>
                        </Tab>
                        <Tab>
                            <JobName>Design</JobName>
                            <PersonName>양지원</PersonName>
                        </Tab>
                        <Tab>
                            <JobName>Developers</JobName>
                            <PersonName>하태라 유나현 조문성 이은성</PersonName>
                        </Tab>
                    </TabGroup>
                </LeftFooter>
                <RightFooter>
                    <GitMessage>GET TO KNOW US</GitMessage>
                    <GitHub>
                        <GitImg src={Git} />
                    </GitHub>
                </RightFooter>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer

const TabGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const GitHub = styled.div`
    display: flex;
    width: 5.9vw;
    height: 1.1vw;
    flex-direction: row-reverse;
`

const GitImg = styled.img`
    width: 1.1vw;
`

const GitMessage = styled.span`
    width: 5.9vw;
    color: #000;
    text-align: center;
    font-size: 0.75rem;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const FooterContainer = styled.div`
    width: 100vw;
    height: 21.174vh;
    background: #d9d9d9;
`

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 11.5vw 0 11.5vw;
    width: calc(100% - 23vw);
    height: 100%;
`

const GroupLogo = styled.div``

const GroupLogoImg = styled.img``

const LeftFooter = styled.div`
    display: flex;
    width: 50%;
    flex-direction: row;
`

const RightFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
    justify-content: space-between;
    width: 5.9vw;
`

const JobName = styled.span`
    color: #000;
    text-align: center;
    font-size: 0.75rem;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const PersonName = styled.span`
    text-align: left;
    display: flex;
    color: #000;
    width: 7vw;
    text-align: center;
    font-size: 0.625rem;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const Tab = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 300px;
`
