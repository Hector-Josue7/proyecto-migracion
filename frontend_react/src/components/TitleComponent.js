import React from 'react';
import { TitleComponentStyled } from '../assets/css/TitleComponetStyled';

export const TitleComponent = ({label}) => {
 
    return <TitleComponentStyled>
        {label}
    </TitleComponentStyled>
};

export default TitleComponent;
