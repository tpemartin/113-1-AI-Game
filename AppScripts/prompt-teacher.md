
create `createResultSheets(sheetname)`: given sheetname, create a new sheet in the active spreadsheets. 

  1. the new sheet name is `sheetname`+"-result".  
  2. the new sheet has the same content as the original sheet from `sheetname` sheet of the active spreadsheet.  
  3. Insert the following columns names in row 2 in the new sheet in front the column A of the newly created sheet: "team id", "player id", "user".
  
create `recordPlayInput(sheetname, playInput)`:  

  1. Obtain result sheet which is a sheet name `sheetname`+"-result" in the active spreadsheet.
  2. Record the `playInput` in the result sheet.  
     2.1. Read the header row of the result sheet, called `columnNames`, which is the second row of the result sheet.  
     2.2. Find the column index of "timestamp" in `columnNames`. Look for the its first empty cell in the column. And record the `playInput` in that row.  

create `sortTimeStamp()`:
For the active sheet, the current first four columns of the sheet is like:
|         |           |                           |          |
| ------- | --------- | ------------------------- | -------- |
| team id | player id | timestamp                 | user     |
| ------- | --------- | ------------------------- | -------- |
|         |           | 2024-10-13T14:45:08+08:00 | (087)林茂廷 |
|         |           | 2024-10-13T14:45:08+08:00 | (089)林茂廷 |
|         |           | 2024-10-13T14:45:08+08:00 | (087)林茂  |
|         |           | 2024-10-13T14:45:08+08:00 | (087)林茂廷 |
|         |           | 2024-10-13T15:14:12+08:00 | (087)林茂廷 |
The header row is in row 2. Therefore, the first column is "team id", the second column is "player id". The "timestamp" column is in the third column, and the "user" column is in the fourth column.

  1. Freeze the first two rows (header rows), and Sort the sheet by "timestamp" in descending order.

create `removeDuplicateUsers()`:
For the active sheet, the current first four columns of the sheet is like:
|         |           |                           |          |
| ------- | --------- | ------------------------- | -------- |
| team id | player id | timestamp                 | user     |
| ------- | --------- | ------------------------- | -------- |
|         |           | 2024-10-13T14:45:08+08:00 | (087)林茂廷 |
|         |           | 2024-10-13T14:45:08+08:00 | (089)林茂廷 |
|         |           | 2024-10-13T14:45:08+08:00 | (087)林茂  |
|         |           | 2024-10-13T14:45:08+08:00 | (087)林茂廷 |
|         |           | 2024-10-13T15:14:12+08:00 | (087)林茂廷 |
The header row is in row 2. Therefore, the first column is "team id", the second column is "player id". The "timestamp" column is in the third column, and the "user" column is in the fourth column. The first two rows are frozen. For the non-frozen rows, 
  1. Remove the duplicate rows based on the "user" column.


create `createTeams()`:   
It will populate values of "team id",	"player id" columns in the active sheet.  For the active sheet, the current first four columns of the sheet is like:
|         |           |                           |          |
| ------- | --------- | ------------------------- | -------- |
| team id | player id | timestamp                 | user     |
| ------- | --------- | ------------------------- | -------- |
|         |           | 2024-10-13T14:45:08+08:00 | (087)林茂廷 |
|         |           | 2024-10-13T14:45:08+08:00 | (089)林茂廷 |
|         |           | 2024-10-13T14:45:08+08:00 | (087)林茂  |
|         |           | 2024-10-13T14:45:08+08:00 | (087)林茂廷 |
|         |           | 2024-10-13T15:14:12+08:00 | (087)林茂廷 |
The header row is in row 2. Therefore, the first column is "team id", the second column is "player id". The "timestamp" column is in the third column, and the "user" column is in the fourth column. The first two rows are frozen. For the non-frozen rows, 
Then populate the "team id" and "player id" columns with the following rules:
  
1. Only populate those non-frozen rows that have "user" column not empty.
2. When creating "team id", it consists of 4 digits using only alphabet and numbers.  
3. For the 1st non-frozen row, if the "user" is not empty and "team id" is not empty, then create "team id" and set "player id" equal to 1.
4. For other non-frozen rows, if the "team id" is not empty, skip this row. 
5. For other non-frozen rows, if the "team id" is empty and the previous row's "player id" is equal to 1, then set "team id" equal to the previous row's "team id" and "player id" equal to 2. If the "team id" is empty and the previous row's "player id" is equal to 2, create a new "team id" and set "player id" equal to 1.

     2.1. If the "user" is empty, then the "team id" and "player id" are empty.  
     2.2. If the "user" is not empty, then check if the previous row has "player id" equal to 1, if it is, then "team id" is the same as the previous row, and "player id" is 2. Otherwise, "team id" should be a randomly generated ID consisting of 4 digits using only alphabet and numbers. And "player id" is 1.

create `createPublicSheet()`:
  . Obtain `activeGameSheetName` from `getCellValueFromActiveGame()` return value.  
  . Set `activeGameResultSheetname` to `activeGameSheetName` + "-result".  
  . Read the `activeGameResultSheetname` sheet's data range values.     
    . The first two rows are frozen as header rows.  
    . Header names are in the second row.  
  . Select the columns "team id", "player id", and "實現招式" from the data range values. 
  . Write the selected columns to a sheet called "public" in the active spreadsheet, if the sheet does not exist, create it. Otherwise, overwrite the existing sheet.



It will create a sheet name "public" if it does not exist in the active spreadsheet
It will populate values of "team id",	"player id" columns in the active sheet.  For the active sheet, the current first four columns of the sheet is like:
|         |           |                           |          |
| ------- | --------- | ------------------------- | -------- |
| team id | player id | timestamp                 | user     |
| ------- | --------- | ------------------------- | -------- |
|         |           | 2024-10-13T14:45:08+08:00 | (087)林茂廷 |
|         |           | 2024-10-13T14:45:08+08:00 | (089)林茂廷 |
|         |           | 2024-10-13T14:45:08+08:00 | (087)林茂  |
|         |           | 2024-10-13T14:45:08+08:00 | (087)林茂廷 |
|         |           | 2024-10-13T15:14:12+08:00 | (087)林茂廷 |
The header row is in row 2. Therefore, the first column is "team id", the second column is "player id". The "timestamp" column is in the third column, and the "user" column is in the fourth column. The first two rows are frozen. For the non-frozen rows, 
Then populate the "team id" and "player id" columns with the following rules:
