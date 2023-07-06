import axios from "axios"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"

export const useSignupMutation = () => {
    const navigate = useNavigate()
    return useMutation(
        async params =>
            await axios.post("http://192.168.19.169:8080/auth/createAcc", {
                ...params,
            }),
        {
            onError: () => {
                toast.error("나중에 다시 이용해주세요")
            },
            onSuccess: res => {
                console.log(res)
                navigate("/login")
                toast.success("회원가입이 완료되었습니다")
            },
        },
    )
}

export const useLoginMutation = () => {
    const navigate = useNavigate()

    return useMutation(
        async params =>
            await axios.post("http://192.168.19.169:8080/auth/login", {
                ...params,
            }),
        {
            onSuccess: res => {
                const { accessToken, refreshToken } = res.data.data
                Cookies.set("accessToken", accessToken)
                Cookies.set("refreshToken", refreshToken)
                console.log(Cookies.get("accessToken"))
                toast.success("로그인에 성공하였습니다")
                navigate("/live")
            },
            onError: () => {
                toast.error("다시 이용해주세요")
            },
        },
    )
}
