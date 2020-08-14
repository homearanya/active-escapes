import React, { useRef } from 'react'

import useOnClickOutside from '../../utils/hooks/useOnClickOutside'

interface ModalProps {
  modalTitle: string
  closeHandler: () => void
  children: React.ReactNode
  open: boolean
  style: React.CSSProperties
}

const Modal = ({
  children,
  closeHandler,
  modalTitle,
  open,
  style,
}: ModalProps) => {
  const outsideRef = useRef(null)
  useOnClickOutside(outsideRef, () => open && closeHandler())
  return (
    <div
      className={`modal fade${open ? ' in' : ''}`}
      id="myModal11"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myModalLabel"
      style={{ display: 'block', paddingRight: '17px', ...style }}
    >
      <div className="modal-dialog" role="document">
        <div ref={outsideRef} className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => closeHandler()}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title" id="myModalLabel">
              {modalTitle}
            </h4>
          </div>
          <div className="modal-body text-left">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary btn-md"
              data-dismiss="modal"
              onClick={() => closeHandler()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
