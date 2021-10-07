import { useState, useEffect } from "react";

import useWindowDimensions from "./useWindowDimension";


const useCalculateHeightRation = ({ sectionImageHeight }) => {
    const { width } = useWindowDimensions();

    const [heightRatio, setHeightRatio] = useState({ height: 0 });

    useEffect(() => {
        setHeightRatio(
            {
                height: Math.ceil((sectionImageHeight.height / sectionImageHeight.width) * width)
            });
    }, [width]);

    return { heightRatio };
}


export default useCalculateHeightRation;
