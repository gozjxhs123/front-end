import axios from "axios"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-hot-toast"

export const useSignupMutation = () => {
    return useMutation(
        async params =>
            await axios.post("http://192.168.1.122:8080/auth/createAcc", {
                ...params,
            }),
        {
            onError: () => {
                toast.error("나중에 다시 이용해주세요")
            },
            onSuccess: res => {
                console.log(res)
                toast.success("회원가입이 완료되었습니다")
            },
        },
    )
}
