import React from 'react'
// Il faudra rappeler se composant dans la page ou on veut l'utiliser
function Faq({ question, answer }) {
  return (
          <div className="question-answer-wrap">
            <div className="question">
              <h3>{question}</h3>
            </div>
            <div className="answer">
              <p>{answer}</p>
            </div>
          </div>
        );
      };
    
      
export default Faq