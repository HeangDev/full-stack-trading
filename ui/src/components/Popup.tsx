import React from "react";
import ReactDom from "react-dom"

interface PopupProps {
    open: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    closeOnBackdropClick?: boolean;
}

const Popup: React.FC<PopupProps> = ({
    open,
    onClose,
    children,
    closeOnBackdropClick = true,
}) => {
    const [container, setContainer] = React.useState<HTMLElement | null>(null);

    React.useEffect(() => {
        const wrap = document.querySelector<HTMLElement>(".wrap");
        if (!wrap) return;
        setContainer(wrap);
    }, []);

    if (!open || !container) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget && closeOnBackdropClick) {
            onClose();
        }
    };

    const modalContent = (
        <div className="popup" onClick={handleBackdropClick}>
            <div className="popup__dialog">
                <div className="popup__content">
                    {children}
                </div>
            </div>
        </div>
    )

    return ReactDom.createPortal(modalContent, container)
}

export default Popup