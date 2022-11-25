import { useState } from "react";

export function useModal() {
    const [isVisible, setOpenModal] = useState(false);

    function handleCloseModal(){
        setOpenModal(false);
    }

    function handleOpenModal(){
        setOpenModal(true);
    }

    return { 
        handleCloseModal,
        handleOpenModal,
        isVisible
    }
}