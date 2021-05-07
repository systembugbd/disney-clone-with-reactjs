import React, {useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import {useHistory} from 'react-router-dom';
 

const alanAPI = '2d40053dc8c4d9b680196a63b05a5c982e956eca572e1d8b807a3e2338fdd0dc/stage';
const newsAPI = 'df623f27e1e6439694f16d953ccf572c';

const Alan = (props) => {
     const history = useHistory();

     useEffect(() => {
          alanBtn({
              key: alanAPI,
              onCommand: ({command, articles}) => {
                   if(command == 'newArticles'){
                        console.log(articles)
                   }
               }
          });
      }, []);

     
 

     return (
       <div></div>
     );

}

export default Alan












         // Voice script
//     intent("go back","go back to the previous screen", (p) => {
//      p.play("Navigating to the previous screen");
//      p.play({command:"go:back"});
//    });
 
// useEffect(() => {

// // Client-side script
// var alanBtnInstance = alanBtn({
// key: '2d40053dc8c4d9b680196a63b05a5c982e956eca572e1d8b807a3e2338fdd0dc/stage',
// onCommand: function (commandData) {
//   if (commandData.command === "go:back") {
//     // Call client code that will react to the received command
//   }
// },
//  rootEl: document.getElementById("alan-btn"),
// });


// }, []);



// intent('What does this app do?', 'What can I do here?', 
//       reply('This is a news project.'));

// const API_KEY = '2d40053dc8c4d9b680196a63b05a5c982e956eca572e1d8b807a3e2338fdd0dc';
// let savedArticles = [];

// // News by Source
// intent('Give me the news from $(source* (.*))', (p) => {
//     let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
    
//     if(p.source.value) {
//         NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(" ").join('-')}`
//     }
    
//     api.request(NEWS_API_URL, (error, response, body) => {
//         const { articles } = JSON.parse(body);
        
//         if(!articles.length) {
//             p.play('Sorry, please try searching for news from a different source');
//             return;
//         }
        
//         savedArticles = articles;
        
//         p.play({ command: 'newHeadlines', articles });
//         p.play(`Here are the (latest|recent) ${p.source.value}.`);
  
//         p.play('Would you like me to read the headlines?');
//         p.then(confirmation);
//     });
// })
