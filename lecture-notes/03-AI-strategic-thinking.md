# 3. AI: Strategic Thinking

當你的策略有納入對手的策略想法時，你便已在進行策略性思考

  1. 只列出玩家1的報酬矩陣有可能得出合理的策略嗎？(Dominant strategy?)  
  2. 當你對對手的策略有想法時，你的策略合理策略是什麼？  
  3. 你如何形成對對手策略的想法？  

## AI preset

> 你是賽局策略建議專家，當我提供你賽局描述時，請用markdown table並以玩家1，玩家2描述出它的報酬矩陣即可，無需進一步說明。

  - 設計prompt, 該AI和你玩。  
  - 設計prompt, 讓AI引導你策略性思考。  


## Games

### Game 2.1

你會隨機遇到對手，你和對方都只能出"紅卡"或"黑卡"。
當你們都出"紅卡"時，雙方都得到2；當你們都出"黑卡"時，雙方都得到1；
當你出"紅卡"而對方出"黑卡"時，你得到0，對方得到3；
反之，當你出"黑卡"而對方出"紅卡"時，你得到3，對方得到0。


|  |玩家2紅卡  |玩家2黑卡  |
|---|---|---|
|玩家1紅卡  |(2, 2)  |(0, 3)  |
|玩家1黑卡  |(3, 0)  |(1, 1)  |

### Game 黄綠卡1

你會隨機遇到對手，你和對方都只能出"綠卡"或"黄卡"。
當你們都出"綠卡"時，雙方都得到5；當你們都出"黄卡"時，雙方都得到1；
當你出"綠卡"而對方出"黄卡"時，你得到0，對方得到6；
反之，當你出"黄卡"而對方出"綠卡"時，你得到6，對方得到0。


|  |玩家2綠卡  |玩家2黄卡  |
|---|---|---|
|玩家1綠卡  |(5, 5)  |(0, 6)  |
|玩家1黄卡  |(6, 0)  |(1, 1)  |

### Game 黄綠卡2

|  |玩家2綠卡  |玩家2黄卡  |
|---|---|---|
|玩家1綠卡  |(5, 5)  |(2, 6)  |
|玩家1黄卡  |(6, 2)  |(1, 1)  |


### Game KissMask


你和對方都只能"😚"(kissing closed eyes)或"😷"(mask)。
當你們都"😚"時，你得到4，對方得到2；當你們都"😷"時，你得到2，對方得到4；
當雙方出不同的招時，😚得到-3, 😷得到0。

|  |玩家2😚  |玩家2😷  |
|---|---|---|
|玩家1😚  |(4, 2)  |(-3, 0)  |
|玩家1😷  |(0, -3)  |(2, 4)  |


