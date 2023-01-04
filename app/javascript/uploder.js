const uploadAPIPath = "/admin/images"

export const uploadImage = async (image, csrfToken = document.querySelector("meta[name=csrf-token]").content) => {
    const formData = new FormData()
    formData.append("image", image)
    // Upload image
    const response = await fetch(uploadAPIPath, {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
            "X-CSRF-Token": csrfToken
        }
    })
    return await response.json()
}
