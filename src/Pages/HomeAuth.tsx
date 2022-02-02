import { Link } from 'react-router-dom';
import "../Assets/Styles/HomeAuth.css";
import Footer from '../Layouts/Footer';

function Home() {
    return (
        <div id ="Info1">

            <Link className="Login" to="/Profile">Profile</Link>
          
            <h1 id="Title1">Traveling Tic Tac Toe</h1>
            <h2 className="Moto">Have fun with your friends</h2>

            <Link className="Album1" to="/game">Click to play our game</Link>
          
            <img src={require("../Assets/Images/dubai.jpg")} id="Dubai" alt="logo" />
            
            <h3>When did you play Tic Tac Toe for the last time?<br></br><br></br></h3>

            <p>This game is specially made for Photo lovers because it offers you the opportunity to see more beutiful pictures from amzing places.<br></br><br></br></p>

            <p> 
                This pandemic situation is the result of sedentary lifestyles. After this long time the best way of entertain is traveling, but if you don't have enough possibilites for visiting other places you can see other artistical picture. In that way you can also find some good photographers and artists that could inspire you on you daily activities. In addition, you can discover a lot of new places that you will be able to visit when the time comes. <br></br><br></br>

                Our game aims both to present you some wonderful works of photographic art, as well as to spend a quality time with friends and enjoying the nostalgia of childhood games.<br></br><br></br>

                Why did we choose to combine the classic tic tac toe with gorgeous images from different parts of the world?<br></br><br></br>

                The answer to this question is very simple and is due to our passion for the arts, but especially for photography. We chose the most beautiful pictures, giving our game a modern, friendly look that reminds people to leave the house and observe the wonderful things that surround them. We thus advise photography enthusiasts to send us their pictures to the email address in the description, and as a reward, we will integrate them in the following projects because we want the relationship with the users of our projects to be as open as possible.<br></br><br></br>
            </p>
        
            <div id ="Info2">
                <img src={require("../Assets/Images/paris.jpg")} id="Paris" alt="logo" />
            
                <p>
                With the move of all online activities and the massive reduction of social activities we needed something to keep our minds busy, but also to be a source of entertainment so we decided to combine our passion for photography with a game in 2 that to be able to play it from a short distance and to detach us from external events. We were a little skeptical when we first had this idea, but we decided to take it to the end because it was a good way to have fun and learn new things at the same time. The result was according to our wishes and fulfilled its purpose of keeping our minds occupied during the national quarantine. This project means for us the beginning of a productive period, we hope, and we are waiting for you with other new projects in the future.
                </p>
            
            <div id ="Info3">
                <img src={ require("../Assets/Images/newyork.jpg") } id="NewYork" alt="logo" />
                
                <p>
                Chromatics and its importance in the game<br></br><br></br>

                You probably think that for the games like this, the aesthetic aspect of the game is not so important, but for us this aspect also mattered a lot. First of all, through the warmest and most welcoming aspect for the user, we show the respect we have for him. For example: When you access a page, you will have the first contact with the interface, if it looks unkempt, your desire to revisit that page will not be stimulated, regardless of its usefulness or complexity, as opposed to one where extra effort was made to stylize. The associated color combinations are in line with the associated images, creating a more eye-friendly transition and creating the illusion of a continuous flow.
                
                Even the font has been chosen so that it integrates perfectly with the modern look of the page. Younger people will consider the font irrelevant or maybe even trivial, but it is inspired by old newspapers. This is a subtle reference to the aesthetic masterpieces present, not long ago, in our daily lives. This combination of modern style and light vintage look gives the page a unique look. An attempt is made to bring the user closer to the page due to the common and modern style at the same time.
                </p>
                <div id = "footer">
                   <img src={ require("../Assets/Images/dubai.jpg") } id="Shanghai" alt="logo" />
                    <Footer />  
                </div>
            </div>
          </div>
      </div>
    );
  }
  
export default Home;