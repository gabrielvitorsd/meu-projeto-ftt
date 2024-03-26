import React from "react"; /*Importa a biblioteca do React*/

/*MINHAS IMPORTAÇÕES = importa as funcionalidades de outros arquivos. Neste caso do CSS.*/
import styles from './styles.css';

export default function Elips({ size, opacity, style }){ /*Importando o componente "Elipse" e suas propriedades 'size, opacity, style*/
    //OBJETO DE ESTILO
    const circleStyle = {
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity,
    }
    
/*Um <div> é renderizado com o estilo circleStyle aplicado a ele.*/
    return(
        <div style={circleStyle} className={`circle ${styles}`}></div>
    );
}
