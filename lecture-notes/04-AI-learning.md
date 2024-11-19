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

### Microsoft Copilot 

<details>
<summary>Copilot's answer</summary>

*** 

Sure! Let's design a 2x2 game where there is no pure strategy Nash equilibrium. Here's an example:

#### Game Matrix

|          | Player B: Left | Player B: Right |
|----------|----------------|-----------------|
| **Player A: Up**    | (2, 1)          | (0, 0)           |
| **Player A: Down**  | (0, 0)          | (1, 2)           |

#### Explanation

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

### GPT 4o mini  

<details>
<summary>GPT 4o mini</summary>


***

In game theory, a 2x2 game is represented by a payoff matrix involving two players, each with two strategies. To create a game with no pure strategy Nash equilibrium, we need to design it so that for each combination of strategies, at least one player would prefer to deviate to the other strategy.

Let's define two players, Player A and Player B. Each player has two strategies:

- Player A: Strategy 1 (A1) and Strategy 2 (A2)
- Player B: Strategy 1 (B1) and Strategy 2 (B2)

The payoff matrix might look as follows:

|         | B1         | B2         |
|---------|------------|------------|
| A1      | (2, 2)     | (0, 3)     |
| A2      | (3, 0)     | (1, 1)     |

#### Payoff Explanation:
- **(2, 2)**: If Player A chooses A1 and Player B chooses B1.
- **(0, 3)**: If Player A chooses A1 and Player B chooses B2.
- **(3, 0)**: If Player A chooses A2 and Player B chooses B1.
- **(1, 1)**: If Player A chooses A2 and Player B chooses B2.

#### Analyzing the Payoffs:
1. If both players choose (A1, B1): 
   - Player A gets 2, but would get 3 by switching to A2 (deviation).
2. If both players choose (A1, B2):
   - Player B gets 3, but would get 2 by switching to B1 (deviation).
3. If both players choose (A2, B1):
   - Player A gets 3, but would get 1 by switching to A1 (deviation).
4. If both players choose (A2, B2):
   - Player B gets 1, but would get 2 by switching to B1 (deviation).

#### Conclusion:
In all scenarios, at least one player has an incentive to deviate from the strategy they are currently using. Therefore, there is no combination of strategies (no pure strategy Nash equilibrium) where both players can choose a strategy and have no incentive to unilaterally change their strategy.

This type of game is often used to illustrate concepts in mixed strategies, where players randomize over their choices. In this particular game, both players would find it optimal to randomize between their strategies to reach a mixed strategy Nash equilibrium.

***

</details>

<details>

### GPT 4o

<summary>GPT 4o</summary>

***

To design a 2x2 game with no pure strategy Nash equilibrium, we need a game where players can never settle on a single strategy pair that is best responding to each other. One common example of such a game is the Matching Pennies game.

**Game Description:**

- Two players, Player A and Player B.
- Each player has two strategies: Heads (H) or Tails (T).
- Player A wins if both players choose the same strategy (both choose Heads or both choose Tails).
- Player B wins if the players choose different strategies (one chooses Heads and the other chooses Tails).

Here is the payoff matrix for the game:

|           | Player B: H | Player B: T |
|-----------|-------------|-------------|
| **Player A: H** | 1, -1      | -1, 1      |
| **Player A: T** | -1, 1      | 1, -1      |

**Analysis:**

- If Player A chooses H and Player B chooses H, Player A earns 1 and Player B earns -1. 
- If Player A chooses H and Player B chooses T, Player A earns -1 and Player B earns 1.
- If Player A chooses T and Player B chooses H, Player A earns -1 and Player B earns 1.
- If Player A chooses T and Player B chooses T, Player A earns 1 and Player B earns -1.

In this game, there is no pair of pure strategies where both players are best responding to each other. If Player A chooses a strategy, Player B will always want to choose the opposite strategy and vice versa. Thus, no pure strategy Nash equilibrium exists in this game.

***

</details>

### Claude sonnet 3.5

<details>

<summary>Claude sonnet 3.5</summary>

***

Here's a simple 2x2 game with no pure strategy Nash equilibrium:

Player 2
           Left     Right
Up     (2,1)    (1,2)
Down   (1,2)    (2,1)

Player 1's payoffs are listed first in each cell, Player 2's payoffs second.

Let's verify there's no pure strategy Nash equilibrium:
1. (Up, Left): Not stable because Player 2 wants to switch to Right
2. (Up, Right): Not stable because Player 1 wants to switch to Down
3. (Down, Left): Not stable because Player 1 wants to switch to Up
4. (Down, Right): Not stable because Player 2 wants to switch to Left

This game does have a mixed strategy Nash equilibrium where both players play each strategy with probability 1/2.

Note: This is similar to the "Matching Pennies" game, a classic example of a game with no pure strategy Nash equilibrium.

***

</details>

### Gemini 1.5 flash  

<summary>

<details>Gemini 1.5 flash</details>


***

**A 2x2 Game with No Pure Strategy Nash Equilibrium**

Let's consider a game between two players, Player A and Player B. Each player has two strategies: Strategy 1 and Strategy 2.

**Payoff Matrix:**

|        | Player B |
|--------|-----------|
| Player A | S1 | S2 |
|--------|-----------|
|  S1    | 2, 1 | 0, 0 |
|  S2    | 0, 0 | 1, 2 |

**Understanding the Payoff Matrix:**

* **Row Player (Player A):** Chooses a row (S1 or S2).
* **Column Player (Player B):** Chooses a column (S1 or S2).
* **Payoff:** The numbers in each cell represent the payoffs for Player A (first number) and Player B (second number).

**Why there's no Pure Strategy Nash Equilibrium:**

A Nash equilibrium is a strategy profile where no player has an incentive to deviate unilaterally. In other words, both players are playing their best response to each other's strategy.

In this game:

1. **If Player A chooses S1:**
   * Player B's best response is S1.
2. **If Player A chooses S2:**
   * Player B's best response is S2.
3. **If Player B chooses S1:**
   * Player A's best response is S1.
4. **If Player B chooses S2:**
   * Player A's best response is S2.

As you can see, there's no combination of strategies where both players are simultaneously playing their best response to each other. Therefore, there's no pure strategy Nash equilibrium in this game.

**To find a solution, we'd need to consider mixed strategies, where players randomize their choices.** This would involve calculating probabilities for each strategy and finding a combination that leaves no player with an incentive to deviate. 

Would you like to explore mixed strategy Nash equilibria or other game theory concepts?

***

</details>

<summary>

### Gemini in Colab

<details>Gemini in Colab</details>

***

Okay, here's a design for a 2x2 game with no pure strategy Nash equilibrium, along with an explanation:

The Game:

Consider a game with two players, Player 1 and Player 2. Each player has two strategies: A and B. The payoffs for each player are represented in the following matrix:

 
Player 2
          A      B
   Player 1
      A   (0,0)  (1,-1)
      B  (-1,1) (0,0)
Use code with caution
Explanation:

Payoffs: The numbers in each cell represent the payoffs for each player. The first number is the payoff for Player 1, and the second number is the payoff for Player 2. For example, if Player 1 chooses strategy A and Player 2 chooses strategy B, Player 1 gets a payoff of 1 and Player 2 gets a payoff of -1.

No Pure Strategy Nash Equilibrium: A pure strategy Nash equilibrium is a situation where neither player can improve their payoff by unilaterally changing their strategy. In this game:

If Player 1 chooses A, Player 2 is better off choosing B.

If Player 1 chooses B, Player 2 is better off choosing A.

If Player 2 chooses A, Player 1 is better off choosing B.

If Player 2 chooses B, Player 1 is better off choosing A.

Since there is always an incentive for one player to switch strategies, there is no pure strategy Nash equilibrium.

Intuition:

This game is similar to the classic "Matching Pennies" game. Each player wants to outguess the other. There is no stable outcome where both players are satisfied with their choices. This type of game often leads to cyclical behavior where players constantly switch strategies.

Additional Notes:

This game does have a mixed strategy Nash equilibrium, where players randomly choose their strategies with certain probabilities.
This is just one example of a 2x2 game with no pure strategy Nash equilibrium. There are other possible designs.
I hope this helps! Let me know if you have any other questions.

***

</details>

## Role play interaction

:exclamation: :exclamation: :exclamation: Validation is the key. (驗證是AI助理品質的關鍵)

<https://github.com/tpemartin/113-1-AI-Game/blob/7929d3f7bbea83e624360dfb7956b4232763e4fb/chat/AI-training-GPT-4O-mini.txt#L1-L13>

  - 請AI說明他所懂的部份，再配合自己的知識去validate AI的答案。  
  - AI並非全知，他和人一樣需要學習。  

<https://github.com/tpemartin/113-1-AI-Game/blob/7929d3f7bbea83e624360dfb7956b4232763e4fb/chat/AI-training-GPT-4O-mini.txt#L15-L23>

