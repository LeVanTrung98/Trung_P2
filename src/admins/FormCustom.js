import React from 'react';
import  {useDispatch} from "react-redux";
import { UpdateStateExc } from "../actions/Common";
import { UpdateCateById } from "../actions/ActionCategory";
import PropTypes from "prop-types";

Modal.propTypes = {
    title : PropTypes.string.isRequired,
    children : PropTypes.element.isRequired
}

export default function Modal(props) {
    const dispatch = useDispatch();
    
    return (
        <div className="modal fade" data-keyboard="false" data-backdrop="static" id="modalProduct" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{ props.title }</h5>
                        <button type="button" className="close" onClick={ () => {dispatch(UpdateStateExc(""));dispatch(UpdateCateById())}}  data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {
                            props.children
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" id="close-modal" onClick={ () => {dispatch(UpdateStateExc(""));dispatch(UpdateCateById())}}   className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" onClick={props.formik?.handleSubmit} className="btn btn-primary">{ props.title }</button>
                    </div>
                </div>
            </div>
        </div>

    )
}