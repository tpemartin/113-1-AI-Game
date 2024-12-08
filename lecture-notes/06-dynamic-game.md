# Dynamic Games

The following is a game that is played by two players, A and B. The game is played in two stages. In the first stage, player A chooses between two strategies, A1 and A2. In the second stage, player B chooses between two strategies, B1 and B2. The payoffs are as follows:


```mermaid
graph TD
    A1(A)
    B1(B)
    A2(A)
    
    A1 --> B1
    A1 --> A2
    
    B1 --> (4, 5)
    B1 --> (12, 5)
    
    A2 --> (1, 92)
    A2 --> (33, 0)
    A2 --> (3, 67)
    A2 --> (69, 13)

```
