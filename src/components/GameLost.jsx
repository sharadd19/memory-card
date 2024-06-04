export default function GameLost({ score, bestScore, handleRestart }) {
  return (
      <div className="gameLost">
        <div>
          <h2>Game Over...</h2>
        </div>
        <div className="score">
          <h2>Score: {score}</h2>
          <h2>Best Score: {bestScore}</h2>
        </div>
        <div>
          <button onClick={handleRestart} className="restart">
            Restart
          </button>
        </div>
      </div>
  );
}
