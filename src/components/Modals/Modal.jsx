import "./Modal.css";

export const Modal = ({ children, isOpen, closeModal }) => {
  const handlePropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handlePropagation}>
        <button className="modal-close" onClick={closeModal}>
          <i className="bx bx-log-out" style={{color:"#ffe8d6"}}></i>
        </button>
        {children}
      </div>
    </article>
  );
};
