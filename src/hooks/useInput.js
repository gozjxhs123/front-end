import { useCallback, useState } from "react"

const useInput = initialize => {
    const [value, setValue] = useState(initialize)
    const handle = useCallback(e => {
        setValue(e.target.value)
    }, [])
    return [value, setValue, handle]
}

export default useInput
