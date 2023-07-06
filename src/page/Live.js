import Webcam from "react-webcam"
import { useCallback, useEffect, useRef, useState, Fragment } from "react"
import styled from "styled-components"
import axios from "axios"
import Header from "../components/header/Header"
import { phoneLoad } from "../apis"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"

const Live = () => {
    const webcamRef = useRef(null)
    const [url, setURL] = useState("")
    const [value, setValue] = useState(1)
    const [log, setLog] = useState([])

    const navigate = useNavigate()

    const handleKeyPress = event => {
        if (event.key === "k" || event.key === "K") {
            setTimeout(() => {
                console.log("5초 뒤 K")
                const fetchPhone = () =>
                    phoneLoad.get("/record").then(({ data }) => {
                        const fetch = () =>
                            axios.post(
                                `http://localhost:8000/fall?phone=${data.data.userPhone}`,
                            )
                        fetch()
                    })
                fetchPhone()
                const now = new Date()
                const year = now.getFullYear()
                const month = now.getMonth() + 1
                const date = now.getDate()
                const hour = now.getHours()
                const minutes = now.getMinutes()
                toast("사람이 쓰러졌습니다", {
                    duration: 2000,
                })
                setLog(prevLog => [
                    ...prevLog,
                    {
                        id: prevLog.length + 1,
                        data: year + "/" + month + "/" + date,
                        time: hour + "/" + minutes,
                    },
                ])
            }, 100)
        }
    }

    useEffect(() => {
        console.log(log)
    }, [log])

    useEffect(() => {
        if (!Cookies.get("accessToken")) {
            navigate("/")
        }
    }, [])

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress)

        return () => {
            window.removeEventListener("keydown", handleKeyPress)
        }
    }, [])

    const capture = () => {
        console.log(1)
        setValue(e => e + 1)
        const imgsrc = webcamRef.current.getScreenshot()
        console.log(imgsrc)
    }

    useEffect(() => {
        const capturetick = () => setTimeout(capture, 50000)
        // time : 5000
        const tick = capturetick()
        return () => clearTimeout(tick)
    }, [value])

    return (
        <>
            <Header />
            <Total>
                <WebcamSpace>
                    <Webcam className="LiveCam" audio={false} ref={webcamRef} />
                </WebcamSpace>
                <Right>
                    <Box>
                        <Top>
                            <DateLocate>
                                <Dates>날짜</Dates>
                            </DateLocate>
                            <HourLocate>
                                <Hour>시간</Hour>
                            </HourLocate>
                        </Top>
                        <Bottom>
                            {log.map(e => (
                                <Div key={e.id}>
                                    <DateLocates>
                                        <Datess>{e.data}</Datess>
                                    </DateLocates>
                                    <HourLocates>
                                        <Hours>{e.time}</Hours>
                                    </HourLocates>
                                </Div>
                            ))}
                        </Bottom>
                    </Box>
                </Right>
            </Total>
        </>
    )
}

export default Live

const Div = styled.div`
    display: flex;
    flex-direction: row;
`

const Hours = styled.span``

const Datess = styled.span``

const Total = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: space-evenly;
    align-items: center;
`

const WebcamSpace = styled.div`
    & > .LiveCam {
        width: 80%;
    }
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 40%;
    height: 100%;
`

const Box = styled.div`
    border: 3px solid var(--main-green, #63e887);
    border-radius: 10px;
    box-shadow: 0px 4px 12px 1px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    width: 30vw;
    height: 45vh;
    flex-direction: column;
    display: flex;
`

const Top = styled.div`
    width: 100%;
    height: 12%;
    border-bottom: 3px solid var(--main-green, #63e887);
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const DateLocate = styled.div`
    display: flex;
    text-align: left;
    width: 50%;
    padding-left: 3vw;
`

const DateLocates = styled.div`
    display: flex;
    height: 4vh;
    text-align: left;
    border-bottom: 2px solid red;
    align-items: center;
    width: 50%;
    margin-left: 3vw;
    margin-right: 3vw;
`

const Dates = styled.span``

const HourLocate = styled.div`
    display: flex;
    text-align: left;
    width: 50%;
    padding-left: 3vw;
`

const HourLocates = styled.div`
    display: flex;
    height: 4vh;
    text-align: left;
    border-bottom: 2px solid red;
    align-items: center;
    width: 50%;
    margin-left: 3vw;
    margin-right: 3vw;
`

const Hour = styled.span``

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
