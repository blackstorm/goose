import { Controller } from "@hotwired/stimulus"
import * as marked from "marked"
import autosize from 'autosize'

window.marked = marked

function addClasses(target, classes) {
    classes.forEach((c) => target.classList.add(c))
}

function removeClasses(target, classes) {
    classes.forEach((c) => target.classList.remove(c))
}

function eventHandler(dom, eventName, fn) {
    dom.addEventListener(eventName, (event) => {
        event.preventDefault()
        event.stopPropagation()
        fn(event)
    }, false)
}

function isImageType(file) {
    return file && file.type.startsWith("image/")
}

const uploadImage = async (image) => {
    // Get rails csrf token
    const csrfToken = document.querySelector("meta[name=csrf-token]").content
    const formData = new FormData()
    formData.append("image", image)
    // Upload image
    const response = await fetch("/admin/images", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
            "X-CSRF-Token": csrfToken
        }
    })
    return await response.json()
}

export default class extends Controller {
    connect() {
        const editor = document.getElementById('article_content')

        autosize(editor);

        eventHandler(editor, "dragenter", this.handleEditorDragenter)
        eventHandler(editor, "dragleave", this.handleEditorDragleave)
        eventHandler(editor, "dragover", this.handleEditorDragover)
        eventHandler(editor, "drop", this.handleEditorDrop)
    }

    handleEditorDragenter(event) {
        addClasses(event.target, ["border-dashed", "border-2", "border-blue-700"])
    }

    handleEditorDragleave(event) {
        // console.log("dragleave", event)
        removeClasses(event.target, ["border-dashed", "border-2", "border-blue-700"])
    }

    handleEditorDragover(event) {}

    async handleEditorDrop(event) {
        const files = Array.from(event.dataTransfer.files)
        for (const file of files) {
            if (!isImageType(file))  {
                alert("Only image files are supported for now.")
                return
            }
        }
        for (const file of files) {
            const { url } = await uploadImage(file)
            const imageMarkdown = `![${file.name}](${url})`
            const editor = event.target
            const value = editor.value
            editor.value += value.endsWith("\n") ? imageMarkdown : `\n${imageMarkdown}`
            autosize.update(editor)
        }
        removeClasses(event.target, ["border-dashed", "border-2", "border-blue-700"])
    }

}
