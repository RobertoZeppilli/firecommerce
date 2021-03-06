import React from 'react'
import { Modal } from 'react-bootstrap'

import { EditForm } from '../components-provider/components-provider'

const EditModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.closeModal}>
            <Modal.Body>
                <EditForm productToEdit={props.productToEdit} setProductToEdit={props.setProductToEdit} />
            </Modal.Body>
            <Modal.Footer>
                <button className="myBtn" variant="secondary" onClick={props.closeModal}>
                    Close
                </button>
                <button className="myBtn" variant="primary" onClick={() => props.editProductFromDB(props.productToEdit, props.setLoading, props.closeModal, props.setAdminProducts)}>
                    Edit
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditModal