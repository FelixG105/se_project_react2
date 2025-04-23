import "./ModalWithForm.css"

function ModalWithForm({ children, buttonText, title, activeModal, onClose }) {
    return (
      <div className={`modal ${activeModal === "add-garment" && "modal_opened"}`}>
        <div className="modal__content">
            <h2 className="modal__title">{title}</h2>
            <button 
                onClick={onClose} 
                className="modal__close">CLOSE</button>
            <form 
                className="modal__form">
                { children }
                <button className="modal__submit" type="submit">
                    {buttonText}
                </button>
            </form>

        </div>
        
      </div>
    )
  }
  
  export default ModalWithForm;