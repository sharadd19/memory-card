export default function GameWon({ handleRestart }) {
  return (
    <div className="gameWon">
      <div>
        <h2>Well Done!!</h2>
      </div>
      <div>
        <h2>You got them all, you have amazing memory :O"</h2>
      </div>
      <div>

        <button onClick={handleRestart} className="restart">
          Restart
        </button>
      </div>
      
    </div>
  );
}
