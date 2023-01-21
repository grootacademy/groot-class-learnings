import { toast } from "react-toastify";
import Navigator from "../../components/utils/Navigator";
import { notify } from "../../components/utils/toast";
import { loginRequest, signupRequest } from "../backend/auth/auth";

export const loginService = async (data) => {

    const res = await loginRequest(data)

    if (res.email) {
        localStorage.setItem("my-image-editor", JSON.stringify(res))
        notify("Welcome to the editor", toast.TYPE.SUCCESS)
        window.location.href = "/"
        return { errors: [] }
    } else {
        return res
    }
}

export const signupService = async (data) => {

    const res = await signupRequest(data)

    if (res.email) {
        localStorage.setItem("my-image-editor", JSON.stringify(res))
        notify("Created account successfully", toast.TYPE.SUCCESS)
        notify("Please, Login here", toast.TYPE.SUCCESS)
        return { errors: [] }
    } else {
        return res
    }
}