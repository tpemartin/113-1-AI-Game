# AI learning

當你的策略有納入對手的策略想法時，你便已在進行策略性思考

  1. 只列出玩家1的報酬矩陣有可能得出合理的策略嗎？(Dominant strategy?)  
  2. 當你對對手的策略有想法時，你的策略合理策略是什麼？  
  3. 你如何形成對對手策略的想法？  

> 如何讓AI學習策略性思考？


## AI preset

  - 報酬是什麼？

### Game 黄綠卡3

|  |玩家2綠卡  |玩家2黄卡  |
|---|---|---|
|玩家1綠卡  |(5, 2)  |(3, 6)  |
|玩家1黄卡  |(6, 3)  |(2, 5)  |

### Game 黄綠卡2

|  |玩家2綠卡  |玩家2黄卡  |
|---|---|---|
|玩家1綠卡  |(7, 5)  |(2, 6)  |
|玩家1黄卡  |(6, 2)  |(5, 1)  |

# Which AI is better? 

## Design a game

> Design a 2x2 game where there is no pure strategy Nash equilibrium.

<details>
<summary>Copilot's answer</summary>

*** 

Sure! Let's design a 2x2 game where there is no pure strategy Nash equilibrium. Here's an example:

### Game Matrix

|          | Player B: Left | Player B: Right |
|----------|----------------|-----------------|
| **Player A: Up**    | (2, 1)          | (0, 0)           |
| **Player A: Down**  | (0, 0)          | (1, 2)           |

### Explanation

In this game:
- If Player A chooses Up and Player B chooses Left, the payoff is (2, 1).
- If Player A chooses Up and Player B chooses Right, the payoff is (0, 0).
- If Player A chooses Down and Player B chooses Left, the payoff is (0, 0).
- If Player A chooses Down and Player B chooses Right, the payoff is (1, 2).

To check for pure strategy Nash equilibria, we need to see if there are any strategies where neither player can improve their payoff by unilaterally changing their strategy.

1. **Player A: Up, Player B: Left** - Player B can switch to Right to get a higher payoff (2 instead of 1).
2. **Player A: Up, Player B: Right** - Player A can switch to Down to get a higher payoff (1 instead of 0).
3. **Player A: Down, Player B: Left** - Player B can switch to Right to get a higher payoff (2 instead of 0).
4. **Player A: Down, Player B: Right** - Player A can switch to Up to get a higher payoff (2 instead of 1).

Since in each case, at least one player can improve their payoff by changing their strategy, there is no pure strategy Nash equilibrium in this game.

Would you like to explore more about mixed strategy Nash equilibria or any other game theory concepts?

*** 

</details>