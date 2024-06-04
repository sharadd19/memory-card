import "../styles/gameOver.css";
import GameWon from "./GameWon";
import GameLost from "./GameLost";
export default function GameOver({
  setGameOver,
  score,
  bestScore,
  setBestScore,
  handleRestart,
}) {
  function handleRestart() {
    setGameOver(false);
  }

  if (score === 9) {
    setBestScore(0);
    return <GameWon handleRestart={handleRestart} />;
  } else {
    return (
      <GameLost
        score={score}
        bestScore={bestScore}
        handleRestart={handleRestart}
      />
    );
  }
}
