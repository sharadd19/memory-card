import "./App.css";
import "./components/Cards";
import "./components/Score";
import "./components/GameOver";
import { useEffect, useReducer, useState } from "react";
import Score from "./components/Score";
import Cards from "./components/Cards";
import GameOver from "./components/GameOver";

function App() {
  const FIRE_NATION = "Fire+Nation";
  const WATER_TRIBE = "Water+Tribe";
  const TEAM_AVATAR = "Team+Avatar";
  const EARTH_KINGDOM = "Earth+Kingdom";
  const AIR_NOMADS = "Air+Nomads";
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameType, setGameType] = useState(TEAM_AVATAR);
  const [deck, setDeck] = useState([]);
  const [loading, setLoading] = useState(false);
  
  function handleGameType(gameType) {
    setGameType(gameType)
    setScore(0);
    setBestScore(0);
  }

  // I want my API to be called every time the game type changes so that we hit a custom endpoint depending on game type chosen
  useEffect(() => {
    const avatarCharacters = async (gameType) => {
      try {
        setLoading(true)
        const url =
          "https://last-airbender-api.fly.dev/api/v1/characters?affiliation="+gameType;
        const response = await fetch(url, { mode: "cors" });
        
        let data = await response.json();
        data = data.slice(0, 9);
        setDeck(data);
        console.log("1st render", gameType);
      } catch (error) {
        alert(error);
      }
      finally{
        setLoading(false);
      }
    };
    avatarCharacters(gameType);
  }, [gameType]);


  console.log(loading)
  return (
    <>
      <div className="wrapper">
        <div className="logo">
          <img src="public/images/airbender-logo.svg" alt="" />
        </div>
        {!gameOver && <Score score={score} bestScore={bestScore}></Score>}
        {(!gameOver) && 
        <div className="gameTypes"> 
          <button
            onClick={() => handleGameType(FIRE_NATION)}
            className="fireNation"
          >
            Fire Nation
          </button>
          <button
            onClick={() => handleGameType(WATER_TRIBE)}
            className="waterTribe"
          >
            Water Tribe
          </button>
          <button
            onClick={() => handleGameType(TEAM_AVATAR)}
            className="teamAvatar"
          >
            Team Avatar
          </button>
          <button
            onClick={() => handleGameType(EARTH_KINGDOM)}
            className="earthKingdom"
          >
            Earth Kingdom
          </button>
          <button
            onClick={() => handleGameType(AIR_NOMADS)}
            className="airNomads"
          >
            Air Nomads
          </button>
        </div>}
        

        {!gameOver && (
          <Cards
            initialCards={deck}
            setInitialCards={setDeck}
            score={score}
            setScore={setScore}
            gameOver={gameOver}
            setGameOver={setGameOver}
            bestScore={bestScore}
            setBestScore={setBestScore}
            gameType={gameType}
            loading={loading}
          ></Cards>
        )}
        {gameOver && (
          <GameOver
            setGameOver={setGameOver}
            score={score}
            bestScore={bestScore}
            setBestScore={setBestScore}
          ></GameOver>
        )}
      </div>
    </>
  );
}

export default App;