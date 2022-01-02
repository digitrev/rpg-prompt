/** @jsxImportSource @emotion/react */
import React from 'react';
import { R1, R2, R3, R4, R5 } from './tables/Rules';

const App: React.FC = () => {
  const r1 = R1();
  const r2 = R2();
  const r3 = R3();
  const r4 = R4();
  const r5 = R5();

  return (
    <div>
      <h1>Indie RPG Generator v0.2</h1>
      <p>{r1}</p>
      <p>{r2}</p>
      <p>{r3}</p>
      <p>Mechanics:</p>
      <ul>
        {r4.map((toy) => (
          <li key={toy.result}>
            <b>{toy.result}</b>: {toy.description}.
          </li>
        ))}
      </ul>
      <p>{r5.desc}</p>
      <ul>
        {r5.mileus.map((mileu) => (
          <li key={mileu.result}>
            <b>{mileu.result}</b>: {mileu.description}
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Generate another
      </button>
      <p>
        Source:{' '}
        <a href="https://penguinking.com/indie-rpg-prompt-generator/">
          Indie RPG Prompt Generator
        </a>{' '}
        by David J. Prokopetz
      </p>
    </div>
  );
};

export default App;
