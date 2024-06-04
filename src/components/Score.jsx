import "../styles/score.css"

export default function Score({score, bestScore}){
    return (
       <div className="scoreBoard">
        <h3>Score: {score} </h3>
        <h3>Best Score: {bestScore}</h3>
       </div>
    )
}