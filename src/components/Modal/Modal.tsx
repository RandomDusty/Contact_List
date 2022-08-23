import React, {PropsWithChildren} from 'react';
import './Modal.css'
import {useAction} from "../../hooks/useActions";

interface ModalProps {
    active: boolean;
}


const Modal: React.FC<PropsWithChildren<ModalProps>> = ({children, active}) => {
    const {setActive, setUpdateID, setFirstInput, setLastInput} = useAction()

    const hideModal = () => {
        setActive(false);
        setFirstInput('');
        setLastInput('')
        setUpdateID('')
    }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={hideModal}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;