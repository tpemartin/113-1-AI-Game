# AI learning

> How to train AI to play games?

  - Train and validate AI first. 
  
## Find Pure Strategy Nash equilibrium

<https://github.com/tpemartin/113-1-AI-Game/blob/b8c3d5b6c9c1f151f87f3b078847de8c8850c431/chat/Nash-equilibrium.txt#L52-L59>


> :exclamation: 確認AI的認知是否正確，並且能夠解釋AI的答案。

### Exercise (SML-game)

Find Pure Strategy Nash equilibrium.

```
|          | Player 2: S | Player 2: M | Player 2: L |
|----------|------------------|------------------|------------------|
| Player 1: S | (6, 4)          | (4, 6)          | (1, 0)          |
| Player 1: M | (2, 3)          | (5, 3)          | (3, 6)          |
| Player 1: L | (12, 9)         | (10, 11)        | (4, 5)          |
```

<https://github.com/tpemartin/113-1-AI-Game/blob/1849a843fee74c25df66d24d3f38daee0a226bec/chat/Pure-strategy-Nash-equilibrium.txt#L51-L132>

> :exclamation: The answer is not write. 

## Strategy suggestion

Nash equilibrium does not always give you the best outcome since people are not fully rational. In practice, You may want to simulate the play with AI or ask AI his suggestion given the information of the opponent.

### Dominant strategy

  - :exclamation: Ask AI for dominant strategy first. 
  - Dominant strategy is always the best strategy. 

### Pure Strategy Nash equilibrium

  - Pure strategy in Nash equilibrium is not always your best strategy in practice, unless ... . 


## Prompt for Pure strategy Nash equilibrium

When ask to fine pure strategy Nash equilibrium, to verify whether a cell is a Nash equilibrium, you need to compute each player's deviation's best benefit. (i.e. the highest payoff for the player when he/she deviates from the current strategy minus the current payoff.) Write the deviation benefit as a tuple (player1's deviation benefit, player2's deviation benefit) in your explanation. The cell is a Nash equilibrum only the tuple is less than or equal to (0, 0).

> Why does the prompt work? (Vague memory in the long past. Deviation benefit tuple hold the valuable information in a closer sentence.)

### Game 黄綠卡2

```
|  |玩家2綠卡  |玩家2黄卡  |
|---|---|---|
|玩家1綠卡  |(5, 5)  |(2, 6)  |
|玩家1黄卡  |(6, 2)  |(1, 1)  |
```


## Customized AI

#### Training AI

:exclamation: :exclamation: :exclamation: Validation is the key. (驗證是AI助理品質的關鍵 -- 你還是需要有基本賽局知識。) 

<https://github.com/tpemartin/113-1-AI-Game/blob/7929d3f7bbea83e624360dfb7956b4232763e4fb/chat/AI-training-GPT-4O-mini.txt#L1-L13>

  - 請AI說明他所懂的部份，再配合自己的知識去validate AI的答案。  
  - AI並非全知，他和人一樣需要學習。  

<https://github.com/tpemartin/113-1-AI-Game/blob/7929d3f7bbea83e624360dfb7956b4232763e4fb/chat/AI-training-GPT-4O-mini.txt#L15-L23>

*** 

第一次AI學習

<https://github.com/tpemartin/113-1-AI-Game/blob/7929d3f7bbea83e624360dfb7956b4232763e4fb/chat/AI-training-GPT-4O-mini.txt#L25-L43>

***

第二次AI學習

<https://github.com/tpemartin/113-1-AI-Game/blob/7929d3f7bbea83e624360dfb7956b4232763e4fb/chat/AI-training-GPT-4O-mini.txt#L45-L51>

> :exclamation: :exclamation: :exclamation: "跟我解釋為什麼你的出招是你的最佳策略。" 在prompt中加入可以validate AI理性思維合理性的指示，方便後續調教AI。

***

... 七回合之後, 想提升AI的策略性思考，希望它能回顧對手過去的策略，並思考對手的策略來調整自己的策略。

<https://github.com/tpemartin/113-1-AI-Game/blob/7929d3f7bbea83e624360dfb7956b4232763e4fb/chat/AI-training-GPT-4O-mini.txt#L195-L222>

> :exclamation: 有記憶錯誤。你如何更正？

***

#### Use the Trained AI 

再次驗證AI的策略性思考，如果合理，透過prompt指示AI使用它被訓練完後的策略理性思考來進行以後遊戲的對局。

<https://github.com/tpemartin/113-1-AI-Game/blob/7929d3f7bbea83e624360dfb7956b4232763e4fb/chat/AI-training-GPT-4O-mini.txt#L288-L315>

***

<https://github.com/tpemartin/113-1-AI-Game/blob/7929d3f7bbea83e624360dfb7956b4232763e4fb/chat/AI-training-GPT-4O-mini.txt#L317-L335>

## Exercise

### SML-game-2

Consider the following 3x3 game:
   
   ```
   |          | Player 2: S | Player 2: M | Player 2: L |
   |----------|------------------|------------------|------------------|
   | Player 1: S | (6, 4)          | (4, 6)          | (1, 0)          |
   | Player 1: M | (2, 3)          | (5, 3)          | (3, 6)          |
   | Player 1: L | (12, 9)         | (10, 11)        | (4, 5)          |
   ```

### SML-game-3

Consider the following 3x3 game: 

   ```
   |          | Player 2: S | Player 2: M | Player 2: L |
   |----------|------------------|------------------|------------------|
   | Player 1: S | (1, -1)         | (0, 0)          | (0, 0)          |
   | Player 1: M | (0, 0)          | (1, -1)         | (0, 0)          |
   | Player 1: L | (0, 0)          | (0, 0)          | (1, -1)         |
   ```

### 剪刀石頭布

Consider the following 3x3 game: 

   ```
   |          | Player 2: 剪刀 | Player 2: 石頭 | Player 2: 布 |
   |----------|------------------|------------------|------------------|
   | Player 1: 剪刀 | (0, 0)          | (-1, 1)         | (1, -1)         |
   | Player 1: 石頭 | (1, -1)         | (0, 0)          | (-1, 1)         |
   | Player 1: 布 | (-1, 1)         | (1, -1)         | (0, 0)          |
   ```

## Which AI is better? 

### Design a game

> Design a 2x2 game where there is no pure strategy Nash equilibrium.

#### Microsoft Copilot 

<details>
<summary>Copilot's answer</summary>

*** 

Sure! Let's design a 2x2 game where there is no pure strategy Nash equilibrium. Here's an example:

##### Game Matrix

|          | Player B: Left | Player B: Right |
|----------|----------------|-----------------|
| **Player A: Up**    | (2, 1)          | (0, 0)           |
| **Player A: Down**  | (0, 0)          | (1, 2)           |

##### Explanation

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

#### GPT 4o mini  

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

##### Payoff Explanation:
- **(2, 2)**: If Player A chooses A1 and Player B chooses B1.
- **(0, 3)**: If Player A chooses A1 and Player B chooses B2.
- **(3, 0)**: If Player A chooses A2 and Player B chooses B1.
- **(1, 1)**: If Player A chooses A2 and Player B chooses B2.

##### Analyzing the Payoffs:
1. If both players choose (A1, B1): 
   - Player A gets 2, but would get 3 by switching to A2 (deviation).
2. If both players choose (A1, B2):
   - Player B gets 3, but would get 2 by switching to B1 (deviation).
3. If both players choose (A2, B1):
   - Player A gets 3, but would get 1 by switching to A1 (deviation).
4. If both players choose (A2, B2):
   - Player B gets 1, but would get 2 by switching to B1 (deviation).

##### Conclusion:
In all scenarios, at least one player has an incentive to deviate from the strategy they are currently using. Therefore, there is no combination of strategies (no pure strategy Nash equilibrium) where both players can choose a strategy and have no incentive to unilaterally change their strategy.

This type of game is often used to illustrate concepts in mixed strategies, where players randomize over their choices. In this particular game, both players would find it optimal to randomize between their strategies to reach a mixed strategy Nash equilibrium.

***

</details>

<details>

#### GPT 4o

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

#### Claude sonnet 3.5

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

#### Gemini 1.5 flash  

<details>

<summary>Gemini 1.5 flash</summary>


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

<details>

#### Gemini in Colab

<summary>Gemini in Colab</summary>

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
