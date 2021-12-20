import { pickFromArray, randInt } from '../Helpers/Functions';
import { DramatisPersonae, RulesToys } from '../Helpers/Interfaces';
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
    'family-friendly',
    'film noir',
    'grindhouse',
    'horror',
    'magical realism',
    'martial arts or sports drama',
    'pulp adventure',
    'romance',
    'satire or parody',
    'slice of life',
    'surrealist',
    'thriller',
    'tragedy',
  ]);

export const D = () =>
  pickFromArray([
    {
      result: 'Adverse advancement',
      description:
        "Some aspect of a player character's mechanical capabilities gets weaker when they “level up” rather than stronger",
    },
    {
      result: 'Agency-based outcomes',
      description:
        'The task or conflict resolution rules decide how much narrative control the acting player has over the outcome, rather than – or in addition to – deciding success or failure',
    },
    {
      result: 'Alignment',
      description:
        "Player characters' moral or philosopical stances have mechanical weight",
    },
    {
      result: 'Colour coding',
      description:
        'The colour of dice, tokens or other components of play is important to the rules',
    },
    {
      result: 'Communication barriers',
      description:
        'Player characters are either unable to communicate with non-player characters, or face large mechanical obstacles to doing so; this may reflect a literal language barrier, or it may reflect social barriers that hinder effective communication',
    },
    {
      result: 'Dating sim mechanics',
      description:
        'The rules keep track of (not necessarily romantic) relationships between players characters, and offer mechanical rewards for cultivating and maintaining those relationships	',
    },
    {
      result: 'Destructible components',
      description:
        'Resource tokens or other tools of play are physically destroyed, or possibly eaten – for example, candy as magic points – in the course of play',
    },
    {
      result: "Devil's bargains",
      description:
        'Players are able to “buy” desired outcomes by agreeing to have something bad happen, usually (but not always) to their own character; the desired outcome may happen immediately, or the player may receive tokens that can be spent at a later date',
    },
    {
      result: 'Diceless resolution',
      description:
        "The game features no randomisers of any kind; if dice, cards, etc. are present, they're used in a way that doesn't generate random outcomes",
    },
    {
      result: 'Downtime',
      description:
        'Play alternates between “zoomed in” action phases where events are played out moment by moment, and “zoomed out” downtime phases where events are handled more abstractly',
    },
    {
      result: 'Emotional stats',
      description:
        "Each player character's current emotional state and/or particular facets of their self-image are given mechanical values that play a role in task or conflict resolution",
    },
    {
      result: 'Enforced endgame',
      description:
        'The mechanics that govern individual character advancement, the progress of the campaign, or both have a definite end point beyond which play is no longer possible',
    },
    {
      result: 'Factions as characters',
      description:
        'Political entities and organisations – possibly including the player character group itself – are treated as characters in their own right, and have their own stats and character sheets',
    },
    {
      result: 'Gift economy',
      description:
        "The game's resource economy is driven by tokens awarded to players by other players in response to particular actions; for example, providing assistance, provoking laughter, etc.",
    },
    {
      result: 'GMPCs',
      description:
        "The GM's role is personified by a specific non-player character, usually an authority figure or adversary; in games without a GM, control of this character may rotate or be shared by the group",
    },
    {
      result: 'Group worldbuilding',
      description:
        "Some dimension of the game's setting is defined by the group, either during a dedicated worldbuilding session before play begins, or using fact-declaration mechanics during play",
    },
    {
      result: 'Inheritance',
      description:
        "Each player is expected to go through multiple characters in the course of a session or campaign; their current character's actions influence the mechanical traits of their next character",
    },
    {
      result: 'Lexical traits',
      description:
        'Player characters are defined by collections of keywords rather than (or in addition to) numerical stats, with the effectiveness of their actions determined by how many relevant keywords they can bring to bear',
    },
    {
      result: 'Live action elements',
      description:
        'Players are expected to get up and physically act out certain types of in-character activities',
    },
    {
      result: 'Modular characters',
      description:
        "Player characters' rules-based traits can be modified easily and rapidly, and doing so “on the fly” is a major focus of play",
    },
    {
      result: 'Non-traditional GM role',
      description:
        'The game strays from the conventional “many players, one Gamemaster” arrangement; roll 1d6 – 1–2: the GM role rotates among players over time; 2–4: there is no GM, and all decisions and rulings are made collaboratively; 5–6: there are multiple GMs with authority over different aspects of play',
    },
    {
      result: 'One shot',
      description:
        'The game is intended to be played from start to finish in a single session, and does not support long-form campaigns',
    },
    {
      result: 'Player skill',
      description:
        "Some dimension of the game's task or conflict resolution rules depend on player skill or dexterity rather than character statistics; e.g., tumbling blocks, trivia questions, etc.",
    },
    {
      result: 'Player versus player',
      description:
        'The players compete against each other for resources, to accomplish a goal, or simply to survive; the players may be divided into teams, or it may be every player for themselves',
    },
    {
      result: 'Playing cards',
      description:
        "The game's rules make use of poker-style playing cards, as randomisers or as resource tokens; a held hand of cards may play both roles",
    },
    {
      result: "Prisoner's dilemmas",
      description:
        'The rules creative incentives for player characters to harm or double cross one another; often a feature of player versus player games, but not exclusively so',
    },
    {
      result: 'Resource bidding',
      description:
        'Some or all conflicts are resolved by bidding resource tokens, typically either by wagering them on the outcomes of random events, or by bidding in order to “purchase” desired outcomes',
    },
    {
      result: 'Retroactive continuity',
      description:
        'Player characters are able to take action in the past as well as the present, with or without a cost; this may represent literal time travel, though more commonly it takes the form of flashbacks',
    },
    {
      result: 'Reverse death spirals',
      description:
        'Player characters become more capable the closer they are to being removed from play, or vice versa',
    },
    {
      result: 'Shared control',
      description:
        "Players have the ability to directly influence the actions of other players' characters; for example, each player might take on the role of another player character's supernatural “dark side” in addition to directing their own character",
    },
    {
      result: 'Sharing feelings',
      description:
        "The game's mechanics – usually its resource economy – explicitly reward players for talking about their feelings",
    },
    {
      result: 'Social combat',
      description:
        'Goal-based social interaction is handled in the same way that most games handle physical combat, and characters can be compelled to take certain actions by “defeating” them',
    },
    {
      result: 'Solo play',
      description:
        'The game explicitly supports play by a single person acting the part of both player and GM; conventional group play may or may not also be supported',
    },
    {
      result: 'Tactical combat',
      description:
        'Conflict resolution places heavy importance on “positioning”; this often takes the form either of literal position on a grid, or of position within a complex resource economy',
    },
    {
      result: 'Troupe play',
      description:
        'Each player directs more than one player character, either on an ongoing basis, or by withdrawing playable characters from a shared pool at need',
    },
    {
      result: 'Weapon tables',
      description:
        'The game features long, complicated tables of (not necessarily physical) weapon statistics',
    },
  ] as RulesToys[]);

export const something = () => {
  const x = pickFromArray([
    {
      result: 'test',
      description: 'seomthing',
    },
  ] as RulesToys[]);
  console.log(x);
};
