
# Memory Card 
_Date: Jun 2024_

You can find the deployed website [here](https://avatar-memory-game.vercel.app/)
## Description 
This project was part of one of the projects to complete in [_The Odin Project_](https://www.theodinproject.com/lessons/node-path-react-new-memory-card) course for full-stack web development. 

The goal of this application was to build a simple web application to allow users to test their memory by playing a game where you have to remember all the cards you've selected. If you select a card you've already selected, you lose!

## Built with
- React 

## Key concepts and learnings
- **State management** in React to keep track of cards we've clicked on
- Dynamic **API** call depending on gameType **state**
- **Lifting the state** by putting states in `app.jsx`
- Conditional rendering depending on whether the game is over or won

## Challenges
- Using a loading state to allow the results of the API to load after the state of the game changes
- Introducing different game types to call different API endpoints

## Project Structure 
```
memory-card
├── public
│   ├── images
├── src
│   ├── assets
│   ├── components
│   ├── styles
│   ├── App.jsx
│   ├── main.jsx
│   ├── ...
├── .gitignore
├── README.md
├── Planning.md
├── package.json
├── vite.config.js
├── ...

```

## How to run the project
1. Clone this repo on your local machine

2. Navigate to the project
```bash
cd memory-card
```

3. Install dependencies using node package manager:
```bash
npm install
```

4. After this you can run the project in development:
```bash
npm run dev
```
