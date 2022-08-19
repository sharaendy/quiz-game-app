import React from 'react';
import Game from './Game.jsx';
import Result from './Result.jsx';
import questions from './questions.js';
import './styles.scss';

export default function App() {
  const [step, setStep] = React.useState(0);
  const [corrects, setCorrent] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrent(corrects + 1);
    }
    console.log(corrects);
  };

  return (
    <div className="App">
      {step < questions.length ? (
        <Game
          question={question}
          step={step}
          stepsCount={questions.length}
          onClickVariant={onClickVariant}
        />
      ) : (
        <Result correctCount={corrects} stepsCount={questions.length} />
      )}
    </div>
  );
}
