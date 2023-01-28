import { baseUrl } from "../../../config"
import { loggedInUserId } from "../../../utils/loggedInUserId"


// request to add image
export const addImageRequest = async (binary) => {
    try {
        const response = await fetch(`${baseUrl}/images`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: loggedInUserId,
                title: "image",
                image: binary
            })

        })
        const data = await response.json()
        return data

    } catch (err) {
        console.error("error in adding image: ", err)
    }
}

// request to get all images
export const getAllImagesRequest = async (binary) => {
    try {
        const res = await fetch(`${baseUrl}/images/${loggedInUserId}`)
        const data = await res.json()
        return data

    } catch (err) {
        console.error("error in getting image: ", err)
    }
}

// request to delete image
export const deleteImageRequest = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/images`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: loggedInUserId,
                id: id
            })

        })
        const data = await response.json()
        return data

    } catch (err) {
        console.error("error in adding image: ", err)
    }
}