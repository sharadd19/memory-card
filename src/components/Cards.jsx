import { useState } from "react";
import { useEffect } from "react";
import "../styles/cards.css";
import Card from "./Card";

export default function Cards({
  initialCards,
  setInitialCards,
  score,
  setScore,
  bestScore,
  setBestScore,
  gameOver,
  setGameOver,
  loading,
}) {
  const [clickedCards, setClickedCards] = useState([]);

  // When component mounts, shuffle the cards
  useEffect(() => {
    /* We set the score to 0 here so that we can display the gameOver page with our score first, before we erase the score. 
    If we didn't do this, then when the game over screen appears, the score will already have been set to 0 */
    setScore(0);
    //setCards(shuffleCards([...initialCards]));
  }, [gameOver]);

  function shuffleCards(deck) {
    for (let i = 0; i < deck.length; i++) {
      // picks the random number between 0 and length of the deck
      let shuffle = Math.floor(Math.random() * deck.length);

      //swap the current with a random position
      [deck[i], deck[shuffle]] = [deck[shuffle], deck[i]];
    }

    return deck;
  }

  function handleCardClick(cardId) {
    if (clickedCards.includes(cardId)) {
      setGameOver(true);
      setClickedCards([]);
    } else {
      setInitialCards(shuffleCards([...initialCards]));
      
      let newScore;
      newScore = score + 1;
      setScore(newScore); // We want our score to increment after the second render not first

      if (newScore >= bestScore) {
        setBestScore(newScore);
      }
      if (score === 9) {
        // If we get all of them correct, then we restart game
        setGameOver(true);
      }
      setClickedCards([...clickedCards, cardId]);
    }
  }

  if (loading) {
    return (
      <div className="loading">
        <h3>Loading...</h3>
      </div>
    );
  } else {
    return (
      <>
        <div className="allCards">
          {initialCards.map((card) => (
            <Card
              key={card._id}
              handleCardClick={() => handleCardClick(card._id)}
              card={card}
            />
          ))}
        </div>
      </>
    );
  }
}
