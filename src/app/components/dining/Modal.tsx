
"use client"

import ModalGallery from "./GalleryModal";

const Modal = ({ photos }: any) => {
  return (
    <div className="modal fade galleryModal" id="galleryModal" tabIndex={-1} aria-labelledby="Gallery Modal" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"></button>
          <div className="modal-body">
            <ModalGallery photos={photos} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal