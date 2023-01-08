import { Controller } from "@hotwired/stimulus"
import * as marked from "marked"
import autosize from 'autosize'
import {addClasses, removeClasses, isImage} from '../utils'
import { uploadImage } from '../uploder'

window.marked = marked

export default class extends Controller {
    connect() {
        const editor = document.getElementById('article_content')
        autosize(editor);

        const eventHandlerDelegate = (dom, eventName, fn) => {
            dom.addEventListener(eventName, event => {
                event.preventDefault()
                event.stopPropagation()
                fn(event)
            }, false)
        }

        [
            { eventName: "dragenter", fn: this.handleEditorDragenter },
            { eventName: "dragleave", fn: this.handleEditorDragleave },
            { eventName: "dragover", fn: this.handleEditorDragover },
            { eventName: "drop", fn: this.handleEditorDrop },
        ].forEach(({ eventName, fn }) => eventHandlerDelegate(editor, eventName, fn.bind(this)))
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
        const editor = event.target
        const files = Array.from(event.dataTransfer.files)
        for (const file of files) {
            if (!isImage(file))  {
                alert("Only image files are supported for now.")
                return
            }
        }

        // Show upload status box.
        this.showImageUploadStatus();

        for (let i = 0; i < files.length; i++) {
            this.updateImageUploadStatusProgressMessage(`${i + 1} / ${files.length} uploading`);
            const file = files[i]
            const { ok, message, url } = await uploadImage(file)
            if (!ok) {
                alert(`Failed to upload image: ${message}, please try again.`)
                this.hiddenImageUploadStatus();
                return
            }
            const imageMarkdown = `![${file.name}](${url})`
            this.append2Editor(editor, imageMarkdown)
        }

        this.hiddenImageUploadStatus();
        removeClasses(editor, ["border-dashed", "border-2", "border-blue-700"])
    }

    showImageUploadStatus() {
        const uploadStatusBox = document.getElementById("image-upload-status");
        removeClasses(uploadStatusBox, ["hidden"])
    }

    hiddenImageUploadStatus() {
        const uploadStatusBox = document.getElementById("image-upload-status");
        addClasses(uploadStatusBox, ["hidden"])
    }

    updateImageUploadStatusProgressMessage(message) {
        document.getElementById("image-upload-status-progress-message").innerHTML = message
    }

    append2Editor(editor, value) {
        if (editor.value === "") {
            editor.value += value;
        } else {
            editor.value += value.startsWith("\n") ? value: `\n${value}`
        }
        autosize.update(editor)
    }

}
