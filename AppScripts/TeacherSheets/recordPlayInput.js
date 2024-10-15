function recordPlayInput(sheetname=null, playInput=null) {
  //sheetname = "Prisoner's Dillema"
  //playInput = ["2024-10-13T14:45:08+08:00","(087)林茂廷",0.43,0.57,"黑卡"]
  // Step 1: Obtain result sheet
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var resultSheetName = sheetname + "-result";
  var resultSheet = spreadsheet.getSheetByName(resultSheetName);

  // Check if the result sheet exists
  if (!resultSheet) {
    Logger.log("The result sheet '" + resultSheetName + "' does not exist.");
    return;
  }

// Step 2: Lock the sheet for writing
  var lock = LockService.getScriptLock();
  try {
    // Attempt to acquire the lock, waiting up to 30 seconds
    lock.waitLock(3000);

    // Step 2.1: Read the header row (second row of the result sheet)
    var columnNames = resultSheet.getRange(2, 1, 1, resultSheet.getLastColumn()).getValues()[0];

    // Step 2.2: Find the column index of "timestamp"
    var timestampIndex = columnNames.indexOf("timestamp");

    Logger.log(timestampIndex)
    if (timestampIndex === -1) {
      Logger.log("The 'timestamp' column was not found in the header.");
      return;
    }

    // Step 2.3: Look for the first empty cell in the "timestamp" column
    var timestamps = resultSheet.getRange(3, timestampIndex + 1, 100).getValues();

    var emptyCellIndex = findFirstEmptyCellIndex(timestamps);
    var firstEmptyRow = emptyCellIndex + 3; 
    //resultSheet.getRange(3, timestampIndex + 1, resultSheet.getLastRow() - 2).getValues();


    // Step 2.4: Record the playInput in that row of the timestamp column
    resultSheet.getRange(firstEmptyRow, timestampIndex + 1, 1, playInput.length).setValues([playInput]);

    Logger.log("Recorded playInput: '" + playInput + "' in row " + firstEmptyRow + " of the 'timestamp' column.");
  } catch (e) {
    Logger.log("Could not obtain lock: " + e);
  } finally {
    // Release the lock regardless of success or failure
    lock.releaseLock();
    Logger.log('release lock')
  }
}

function findFirstEmptyCellIndex(array){

  //const array = [["a"], ["bks"], [""], [""]];

  const index = array.findIndex(subArray => subArray.length === 1 && subArray[0] === "");

  //Logger.log(index)
  if (index !== -1) {
    Logger.log("Index of the first empty sub-array: ", index); // Output: 2
  } else {
    Logger.log("No empty sub-array found.");
  }
  return index
}
