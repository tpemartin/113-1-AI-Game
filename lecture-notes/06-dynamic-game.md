# Dynamic Games

The following is a game that is played by two players, A and B. The game is played in two stages. In the first stage, player A chooses between two strategies, A1 and A2. In the second stage, player B chooses between two strategies, B1 and B2. The payoffs are as follows:

![](../img/game-tree.jpg)


```mermaid
flowchart LR

    A1{A} --> B1{B}

    B1 --> B1p1["(4,5)"]
    B1 --> A2{A}
    
    A2 --> A2p1["(12,5)"]
    A2 --> A2p2["(33,0)"]
    A2 --> A2p3["(3,67)"]
    
    A1 --> B2{B}
    B2 --> B1p2["(1,92)"]
    B2 --> B1p3["(69,13)"]

    classDef whiteFill fill:#ffffff,stroke:#ffffff;
    class B1p1,B1p2,B1p3,A2p1,A2p2,A2p3 whiteFill;
```