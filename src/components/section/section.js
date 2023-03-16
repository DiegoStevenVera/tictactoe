import './section.css';
import { useState, useEffect } from "react";

function Section(props) {
    const [symbol, setSymbol] = useState(null);

    useEffect(() => {
        setSymbol(props.symbol);
    }, [props.symbol]);

    // const onclick = () => {
    //     const position = {
    //         row: Math.floor(props.pos/3),
    //         col: props.pos%3
    //     }
    //     setSymbol(-1);
    //     // setLoading(true);
    //     setTimeout(() => {
    //     fetch('http://127.0.0.1:8000/API/V1/action/predict-next-move', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(position)
    //     })
    //         .then(response => response.json())
    //         .then((json) => console.log(json));
    //         // setLoading(false);
    //     }, 2000);
    // }


    return (
        <div className="Section">
            {symbol === 1 ? 'X' : 
                symbol === -1 ? 'O' : ''}
        </div>
    );
}

export default Section;