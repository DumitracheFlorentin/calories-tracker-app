import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ isOpen, onClose, header, body }) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{header}</h2>
          <button onClick={onClose} className="text-black">
            Close
          </button>
        </div>
        <div className="overflow-auto max-h-[30rem]">{body}</div>
      </div>
    </div>,
    document.getElementById('modal-root'),
  )
}

export default Modal
