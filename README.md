Planning
- Have a screen with a bunch of cards 
- When we click on a card we get presented with a new arrangement of cards 
- We need to click on new cards everytime to increase our score 
- If we click on a card we've already click on since the start of the game, then we lose 
- We need a score and best score tracker  
- We get the characters from an api that we can display on the card using grid


When we click on a card: 
- Check the local storage to see if the clicked item exists
- If it does then the game is over - we can do this by resetting the best score and having a popup that tells us game over 
- Otherwise:
    - We shuffle the cards in a new order
    - Increment the score and best score
    - Send the character id to local storage
  

Components
- Card with props that come from the API (Name, Id, Image)
- Score to track best score

State
- score, setBestScore
- Everytime we click on a new card, we setBestScore = score += 1
- There is no need for a useEffect hook since we want new cards to be re-rendered everytime setBestScore state is updated
