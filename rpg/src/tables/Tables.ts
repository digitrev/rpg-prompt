import { ensure, pickFromArray, randInt } from '../Helpers/Functions';
import { DramatisPersonae } from '../Helpers/Interfaces';
import { MileuLookup, RulesToysLookup } from './Lookup';
import {
  A1,
  A10,
  A11,
  A12,
  A13,
  A14,
  A15,
  A16,
  A17,
  A18,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  D1,
  D2,
  D3,
  D4,
  D5,
  D6,
  D7,
  D8,
  D9,
} from './Subtables';

export const A = (): DramatisPersonae => {
  const r1 = randInt(6);
  const r2 = randInt(6);
  if (r1 < 1) {
    if (r2 < 2) return { subtable: 'A1', result: A1() };
    else if (r2 < 4) return { subtable: 'A2', result: A2() };
    else return { subtable: 'A3', result: A3() };
  } else if (r2 < 2) {
    if (r2 < 2) return { subtable: 'A4', result: A4() };
    else if (r2 < 4) return { subtable: 'A5', result: A5() };
    else return { subtable: 'A6', result: A6() };
  } else if (r2 < 3) {
    if (r2 < 2) return { subtable: 'A7', result: A7() };
    else if (r2 < 4) return { subtable: 'A8', result: A8() };
    else return { subtable: 'A9', result: A9() };
  } else if (r2 < 4) {
    if (r2 < 2) return { subtable: 'A10', result: A10() };
    else if (r2 < 4) return { subtable: 'A11', result: A11() };
    else return { subtable: 'A12', result: A12() };
  } else if (r2 < 5) {
    if (r2 < 2) return { subtable: 'A13', result: A13() };
    else if (r2 < 4) return { subtable: 'A14', result: A14() };
    else return { subtable: 'A15', result: A15() };
  } else {
    if (r2 < 2) return { subtable: 'A16', result: A16() };
    else if (r2 < 4) return { subtable: 'A17', result: A17() };
    else return { subtable: 'A18', result: A18() };
  }
};

export const B = () =>
  pickFromArray([
    'attack and kill god (or other higher spiritual power)',
    'become wealthy',
    'battle others of your kind for supremacy',
    'collect (human?) souls',
    'combat invisible monsters',
    'come of age',
    'conceal your true natures',
    'defend your community',
    'discover meaning',
    'explore arcane mysteries',
    'evade the long arm of the law',
    'exact revenge upon the wicked',
    'fight crime',
    'find love',
    'fulfull your destinies',
    'get in touch with your inner selves',
    'indulge in sports, games or other hobbies',
    'prevent dangerous or forbidden knowledge from becoming public',
    'navigate political tensions',
    'obtain freedom',
    'race against certain doom (e.g., looming apocalypse, terminal illness, etc.)',
    'raid the ruins of lost civilisations',
    'recover lost memories',
    'resist an oppressive regime',
    'search for a place to call home',
    'seek spiritual enlightenment',
    'serve authority',
    'steal treasures',
    'strive for acceptance',
    'struggle against the beast within',
    'suffer for your art',
    'summon elder gods (or other inimical powers)',
    'take the law into your own hands',
    'try to survive',
    'uncover terrible truths',
    'uphold your honour',
  ]);

export const C = () =>
  pickFromArray([
    'action',
    'comedy',
    'crime drama',
    'dungeon crawl',
    'epic fantasy or science fiction',
    'family-friendly or young adult fiction',
    'film noir',
    'grindhouse',
    'horror',
    'magical realism',
    'martial arts or sports drama',
    'post-modernist or deconstruction',
    'pulp adventure',
    'romance',
    'slice of life',
    'surrealist',
    'thriller',
    'tragedy',
  ]);

export const D = () => {
  const res = pickFromArray([
    D1(),
    D2(),
    D3(),
    D4(),
    D5(),
    D6(),
    D7(),
    D8(),
    D9(),
  ]);

  return ensure(RulesToysLookup.find((rt) => rt.result === res));
};

export const E = () => pickFromArray(MileuLookup);
