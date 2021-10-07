import { useState, useEffect } from "react";

import useWindowDimensions from "./useWindowDimension";


const useDynamicSectionPadding = ({ sectionImageWidth }) => {
    const { width } = useWindowDimensions();

    const [excessWidth, setExcessWidth] = useState(0);
    const [paddingStyle, setPaddingStyle] = useState({
        paddingLeft: excessWidth, paddingRight: excessWidth
    });

    useEffect(() => {
        if(width >= sectionImageWidth) {
            setExcessWidth(Math.ceil((width - sectionImageWidth) / 2));
        }
    }, [width]);

    useEffect(() => {
        setPaddingStyle({
            paddingLeft: excessWidth, paddingRight: excessWidth
        })
    }, [excessWidth]);

    return { paddingStyle };
}


export default useDynamicSectionPadding;
