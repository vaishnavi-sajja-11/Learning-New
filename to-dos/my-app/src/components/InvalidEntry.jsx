import Modal from './Modal.jsx';

export default function InvalidEntry({isOpen,onCloseModal}){
    return(
        <Modal open={isOpen} onClose={onCloseModal}>
            <h2>Inavlid Entry!</h2>
            <p>Oops!</p>
            <p>Looks like you have entered incorrect values in one or two inputs</p>
            <button id="close">close</button>
        </Modal>
    );
}