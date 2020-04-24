Tournament Bracket
===================

Features
---------

* Decoupled design for easier testing.
* Object mocks for testing provided.
  - src/bracket/mock.ts
  - src/game/mock.ts
* Synchronous and async execution models.
* Customizable bracket setup.
* Customizable game setup.
* Fully typed with Typescript.

Shortcomings
-------------

* Heavier implementation than necessary for a simple demo.
* No unit testing, didn't have time.

Provided Games
---------------

**Game of Chance**

You never know who will win! Skill has nothing to do with it. A winner is selected randomly for each match.

**Game of Skill**

The player with the most skill will always win!

Samples
-------

* `npm run chance`: Runs an asynchronous tournament of chance.
* `npm run skill`: Runs an asynchronous tournament of skill.
* `npm run skill-sync`: Runs a synchronous tournament of skill.
* `npm run similar-skill`; Runs a similiarly player matched tourney of skill.
