
import discordImg from '../data/images/discord-logo.png'
import treasureImg from '../data/images/TreasureQuest.PNG'
import unityLogo from '../data/images/unitylogo.png'
import wikiImg from '../data/images/wiki.jpg'
import youtubeLogo from '../data/images/youtube_logo.jpg'

const projects = {
    "discordBot": {
        "title": "Discord Bot",
        "description": "Created a personalized discord bot that can tell the weather, text my personal phone, roll a die, ask a riddle, create a poll, and randomly give out motivational quotes.",
        "image": discordImg,
        "link": "https://github.com/popopo19/daisy-bot"
    },
    "treasureProj": {
        "title": "Python Game",
        "description": "For the intro class at St. Olaf College, my group and I created a game using python along with the pygame library. The game is a rouge-like maze game, meaning the maze is randomly generated everytime you play while guarenteeing that the maze has a end-point.",
        "image": treasureImg,
        "link": "https://github.com/popopo19/Treasure-Quest"
    },
    "videoGames": {
        "title": "Video Game Development",
        "description": "I have made multiple small-scale games with the Unity game engine, ultilizing C#. You can find some of my work here: https://zalk.itch.io/",
        "image": unityLogo,
        "link": "https://zalk.itch.io/"
    },
    "wikiRace": {
        "title": "Wiki Racer App",
        "description": "A mobile app where users can play the game Wiki Racer. In Wiki Racer, players have to get from one wikipedia page to another page using only the links in the pages' contents to navigate.",
        "image": wikiImg,
        "link": "https://github.com/popopo19/wiki-racer"
    },
    "youtubeAPI": {
        "title": "Youtube API",
        "description": "An example of using the Youtube Data API to search for videos.",
        "image": youtubeLogo,
        "link": "/projects/youtube-api"
    }
}

export default projects