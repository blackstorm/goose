export const addClasses = (target, classes) => {
    classes.forEach((c) => target.classList.add(c))
}

export const removeClasses = (target, classes) => {
    classes.forEach((c) => target.classList.remove(c))
}

export const isImage = (file) => file && file.type.startsWith("image/")
