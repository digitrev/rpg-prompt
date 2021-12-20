/** @jsxImportSource @emotion/react */
import React from 'react';
import { R1, R2, R3, R4 } from './tables/Rules';

const App: React.FC = () => {
  const r1 = R1();
  const r2 = R2();
  const r3 = R3();
  const r4 = R4();

  return (
    <div>
      <h1>Indie RPG Generator v0.1</h1>
      <p>{r1}</p>
      <p>{r2}</p>
      <p>{r3}</p>
      <ul>
        {r4.map((toy) => (
          <li key={toy.result}>
            {toy.result}: {toy.description}.
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Generate another?
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
