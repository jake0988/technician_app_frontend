import React from "react"
import { DirectUpload } from "@rails/activestorage"

class Uploader {
  constructor(file, url) {
    this.upload = new DirectUpload(this.file, this.url, this)
  }

  upload(file) {
    this.upload.create((error, blob) => {
      if (error) {
        // Handle the error
      } else {
        // Add an appropriately-named hidden input to the form
        // with a value of blob.signed_id
      }
    })
  }

  directUploadWillStoreFileWithXHR(request) {
    request.upload.addEventListener("progress",
      event => this.directUploadDidProgress(event))
  }

  directUploadDidProgress(event) {
    // Use event.loaded and event.total to update the progress bar
  }
}

export default Uploader