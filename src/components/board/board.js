import './board.css';
import { useEffect, useState } from "react";
import Section from '../section/section';

function Board() {
  const positions = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const winDict = {'-1': 'Ganaste', '0': 'Empate', '1': 'Ganó la PC'}
  const [boardSymbols, setBoardSymbols] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [loading, setLoading] = useState(false);
  const [winner, setWinner] = useState(-2);
  const [endGame, setEndGame] = useState(false);
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log('iniciando partida');
    setTimeout(() => {
      fetch('http://127.0.0.1:8000/API/V1/action/begin-match')
        .then(response => response.json())
        .then((json) => setBoardSymbols(json.hash_board.slice(1,-1).split(". ").map(Number)))
        .catch(error => setBoardSymbols([0, 0, 0, 0, 1, 0, 0, 0, 0]));
        setLoading(false);
    }, 2000);
  }, [retry]);

  function updateValues(res) {
    console.log(res);
    setBoardSymbols(res.hash_board.slice(1,-1).split(". ").map(Number));
    setEndGame(res.end_game);
    setWinner(res.winner);
  }

  const retryFunction = () => {
    console.log('retry');
    setRetry(!retry);
    setEndGame(false);
    setWinner(-2);
  }

  const handleClick = (pos) => {
    if(boardSymbols[pos] === 0 && !endGame) {
      const position = {
          row: Math.floor(pos/3),
          col: pos%3
      }
      var boardAux = [...boardSymbols];
      boardAux[pos] = -1;
      setBoardSymbols(boardAux);

      setTimeout(() => {
      fetch('http://127.0.0.1:8000/API/V1/action/predict-next-move', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(position)
      })
        .then(response => response.json())
        .then((json) => updateValues(json))
        .catch(error => console.log(error));
      }, 2000);
    } else {
      console.log('lugar ocupado');
    }
  }

  return (
    <>
      <div className='AditionalInfo'>
        {endGame ? 
          winDict[winner]
          : <div>Partida en transcurso...</div>}  
      </div>
      <div className="Board">
        {loading ? 
            <h3 className='Thinking'>Pensando...</h3> :
            boardSymbols.map((symbol, index) => (
              <div key={index} onClick={() => handleClick(positions[index])}>
                <Section 
                  key={index}
                  symbol={symbol}/>
              </div>
            ))}
      </div>
      <div className='Retry' onClick={retryFunction}>Retry</div>
    </>

  );
}

export default Board;