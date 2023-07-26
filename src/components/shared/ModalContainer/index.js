import React, { useEffect, useState } from "react";
import { Modal, Placeholder, Button } from 'rsuite';
import AddUser from "../../../pages/Admin/Users/AddUser";
import EditUser from "../../../pages/Admin/Users/EditUser";
import DeleteUser from "../../../pages/Admin/Users/DeleteUser";
import ExportUser from "../../../pages/Admin/Users/ExportUser";
import AddEmployee from "../../../pages/Admin/Employees/AddEmployee";
import EditEmployee from "../../../pages/Admin/Employees/EditEmployee";
import DeleteEmployee from "../../../pages/Admin/Employees/DeleteEmployee";
import ExportEmployee from "../../../pages/Admin/Employees/ExportEmployee";
import AddProduct from "../../../pages/Admin/Products/AddProduct";
import EditProduct from "../../../pages/Admin/Products/EditProduct";
import DeleteProduct from "../../../pages/Admin/Products/DeleteProduct";
import ExportProduct from "../../../pages/Admin/Products/ExportProduct";
import AddRequest from "../../../pages/Admin/Requests/AddRequest";
import EditRequest from "../../../pages/Admin/Requests/EditRequest";
import DeleteRequest from "../../../pages/Admin/Requests/DeleteRequest";
import ExportRequest from "../../../pages/Admin/Requests/ExportRequest";
import { startCase } from "lodash";

export default function ModalContainer(props) {
    const open = props.open;
    const handleClose = props.handleClose;
    const title = props.title;
    const button = startCase(props.button);
    const [content, setContent] = useState(<Placeholder.Paragraph />);
    useEffect(() => {
        switch (title) {
            case 'Employees':
                switch(button){
                    case 'Add':
                        setContent(<AddEmployee/>);
                        break;
                    case 'Edit':
                        setContent(<EditEmployee/>);
                        break;
                    case 'Delete':
                        setContent(<DeleteEmployee/>);
                        break;
                    case 'Export':
                        setContent(<ExportEmployee/>);
                        break;
                    default:
                        break;
                }
                break;
            case 'Products':
                switch(button){
                    case 'Add':
                        setContent(<AddProduct/>);
                        break;
                    case 'Edit':
                        setContent(<EditProduct/>);
                        break;
                    case 'Delete':
                        setContent(<DeleteProduct/>);
                        break;
                    case 'Export':
                        setContent(<ExportProduct/>);
                        break;
                    default:
                        break;
                }
                break;
            case 'Users':
                switch(button){
                    case 'Add':
                        setContent(<AddUser/>);
                        break;
                    case 'Edit':
                        setContent(<EditUser/>);
                        break;
                    case 'Delete':
                        setContent(<DeleteUser/>);
                        break;
                    case 'Export':
                        setContent(<ExportUser/>);
                        break;
                    default:
                        break;
                }
                break;
            case 'Requests':
                switch(button){
                    case 'Add':
                        setContent(<AddRequest/>);
                        break;
                    case 'Edit':
                        setContent(<EditRequest/>);
                        break;
                    case 'Delete':
                        setContent(<DeleteRequest/>);
                        break;
                    case 'Export':
                        setContent(<ExportRequest/>);
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }, [title, button]);
    return (
        <Modal open={open} onClose={handleClose}>
            <Modal.Header>
                <Modal.Title>{button} {title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {content}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose} appearance="primary">
                    Ok
                </Button>
                <Button onClick={handleClose} appearance="subtle">
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
}