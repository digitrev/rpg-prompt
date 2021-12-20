import { randInt } from '../Helpers/Functions';
import { A, B, C, D } from './Tables';

export const R1 = () => {
  const n = randInt(6);

  if (n < 1) {
    return `The players are ${A().result}.`;
  } else if (n < 2) {
    const dp1 = A();
    let dp2 = A();
    while (dp1.subtable === dp2.subtable) dp2 = A();

    return `The players are both ${dp1.result} and ${dp2.result}.`;
  } else if (n < 3) {
    const dp1 = A();
    const dp2 = A();

    return `The players belong to a faction of ${dp1.result}, while the antagonists belong to a faction of ${dp2.result}`;
  } else if (n < 4) {
    const dp1 = A();
    let dp2 = A();
    while (dp1.subtable === dp2.subtable) dp2 = A();
    let dp3 = A();
    while (dp1.subtable === dp3.subtable || dp2.subtable === dp3.subtable)
      dp3 = A();

    return `The players have affinities, alignments, or attributes of ${dp1.result}; ${dp2.result}; and ${dp3.result}.`;
  } else if (n < 5) {
    const dp1 = A();
    let dp2 = A();
    while (dp1.result === dp2.result) dp2 = A();
    let dp3 = A();
    while (dp1.result === dp3.result || dp2.result === dp3.result) dp3 = A();
    let dp4 = A();
    while (
      dp1.result === dp4.result ||
      dp2.result === dp4.result ||
      dp3.result === dp4.result
    )
      dp4 = A();

    return `The core character classes are ${dp1.result}; ${dp2.result}; ${dp3.result}; and ${dp4.result}.`;
  } else {
    const dp1 = A();
    let dp2 = A();
    while (dp1.result === dp2.result) dp2 = A();
    let dp3 = A();
    while (dp1.result === dp3.result || dp2.result === dp3.result) dp3 = A();
    let dp4 = A();
    while (
      dp1.result === dp4.result ||
      dp2.result === dp4.result ||
      dp3.result === dp4.result
    )
      dp4 = A();
    let dp5 = A();
    while (
      dp1.result === dp5.result ||
      dp2.result === dp5.result ||
      dp3.result === dp5.result ||
      dp4.result === dp5.result
    )
      dp5 = A();

    return `The playable factions are ${dp1.result}; ${dp2.result}; ${dp3.result}; ${dp4.result}; and ${dp5.result}`;
  }
};

export const R2 = () => {
  const n = randInt(6);

  if (n < 1) {
    return `The players' obejctive is to ${B()}.`;
  } else if (n < 3) {
    const p1 = B();
    let p2 = B();
    while (p1 === p2) p2 = B();

    return `The players' objective is to ${p1}. They accomplish this by attempting to ${p2}.`;
  } else if (n < 5) {
    const p1 = B();
    let p2 = B();
    while (p1 === p2) p2 = B();

    return `The players have two competing priorities: to ${p1}; and to ${p2}.`;
  } else {
    const p1 = B();
    let p2 = B();
    while (p1 === p2) p2 = B();
    let p3 = B();
    while (p1 === p3 || p2 === p3) p3 = B();

    return `The playable archetypes are to ${p1}, to ${p2}, and to ${p3}.`;
  }
};

export const R3 = () => {
  const n = randInt(6);

  if (n < 2) {
    return `The feel of the game is ${C()}.`;
  } else if (n < 4) {
    const g1 = C();
    let g2 = C();
    while (g1 === g2) g2 = C();

    return `The feel of the game is a blend of ${g1} and ${g2}.`;
  } else {
    const g1 = C();
    let g2 = C();
    while (g1 === g2) g2 = C();

    return `The feel of the game switches back and forth between ${g1} and ${g2}.`;
  }
};

export const R4 = () => {
  const t1 = D();
  let t2 = D();
  while (t2.result === t1.result) t2 = D();

  return [t1, t2];
};
