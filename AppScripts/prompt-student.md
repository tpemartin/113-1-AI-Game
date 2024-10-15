

create `playOneRound()` when called:

  - Read the sheet (called `gameSheet`) of the active sheet data.   
  - Read the second row of the `gameSheet` to get the column names, called `columnNames`.
  - The values before the string "實現招式" in `columnNames` are the player's `feasibleMoves`.  
  - Read the last row of the `gameSheet`, called `lastRow`, to get the current game state.
    - the values before the string "實現招式" in `lastRow` are the player's probilities (called `moveProbabilities`) of playing each value of `feasibleMoves`.- 
  - If the column value of "實現招式" is empty in `lastRow`, then draw a value from `feasibleMoves` based on `moveProbabilities` and write it (called `actualMove` ) to the "實現招式" column of `lastRow`.
  - If the column value of "實現招式" is not empty in `lastRow`, then do nothing.
  - return an array of concatenated strings of `moveProbabilities` and `actualMove`.

create `preparePlayPostData(data)` where `data` is an array of strings: 
  - create a POST request
  - get script property "user" string value and concatenate it with the `data` input array, the concatenated array will be called `dataWithUser`;
  - `dataWithUser` is the data payload for the POST request;
  - the request url is "https://script.google.com/macros/s/AKfycbzhH41vv-AUxpKG1hPg8t7_7_2AofW0ZZNN92ga46Yg3UOi_tfQD0PWxqMPufnQB1h_/exec?play=true";