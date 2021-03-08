import AutoRotatingCarouselModal from '../../AutoRotatingCarouselModal/AutoRotatingCarouselModal';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useState } from 'react';



const Courses = ({ handleOpen, setHandleOpen }) => {
    console.log("1 " + JSON.stringify(handleOpen))
    const matches = useMediaQuery("(max-width:600px)");

    return (
        <AutoRotatingCarouselModal
            isMobile={matches}
            handleOpen={handleOpen}
            setHandleOpen={setHandleOpen}
        />

    )
}

export default Courses; 