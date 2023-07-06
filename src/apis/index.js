import axios from "axios"
import { toast } from "react-hot-toast"
import Cookies from "js-cookie"

const FalltectUrl = "http://192.168.19.169:8080"

export const phoneLoad = axios.create({
    baseURL: `${FalltectUrl}`,
})

export const authLoad = axios.create({
    baseURL: `${FalltectUrl}/auth`,
})

const instanceArr = [phoneLoad, authLoad]

instanceArr.map(instance => {
    instance.interceptors.request.use(
        config => {
            const access_token = Cookies.get("accessToken")
            const refresh_token = Cookies.get("refreshToken")
            access_token && (config.headers["accesstoken"] = `${access_token}`)
            refresh_token &&
                (config.headers["refreshtoken"] = `${refresh_token}`)
            return config
        },
        error => {
            return Promise.reject(error)
        },
    )
    instance.interceptors.response.use(
        config => {
            return Promise.resolve(config)
        },
        async error => {
            if (axios.isAxiosError(error) && error.response) {
                const { config, response } = error
                if (response.status === 403) {
                    try {
                        Cookies.remove("accessToken")
                        const beforeRefresh = Cookies.get("refreshToken")
                        if (!beforeRefresh) throw error

                        const response = await axios.put(
                            `${FalltectUrl}/auth/login`,
                            {},
                            {
                                headers: {
                                    "Refresh-Token": `${beforeRefresh}`,
                                },
                            },
                        )

                        const { access_token, refresh_token } =
                            response.data.data
                        Cookies.set("accessToken", access_token)
                        Cookies.set("refreshToken", refresh_token)
                        if (config.headers)
                            config.headers.Authorization = `${access_token}`

                        return axios(config)
                    } catch (e) {
                        if (
                            error.response.data.status === 403 ||
                            error.response.data.status === 404
                        ) {
                            toast.error("다시 로그인해주세요.")

                            Cookies.remove("accessToken")
                            Cookies.remove("refreshToken")
                        } else {
                            toast.error("관리자에게 문의해주세요.")
                        }
                    }
                } else return Promise.reject(error)
            } else return Promise.reject(error)
        },
    )
})
