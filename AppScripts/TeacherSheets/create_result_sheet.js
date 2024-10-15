function createResultSheets(sheetname) {
  // Get the active spreadsheet
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  // Get the original sheet by name
  var originalSheet = spreadsheet.getSheetByName(sheetname);
  if (!originalSheet) {
    Logger.log("The sheet with the name '" + sheetname + "' does not exist.");
    return;
  }

  // Create a new sheet with the modified name
  var newSheetName = sheetname + "-result";
  var newSheet = spreadsheet.getSheetByName(newSheetName);
  
  // Check if the new sheet already exists
  if (newSheet) {
    Logger.log("A sheet named '" + newSheetName + "' already exists.");
    return;
  }

  newSheet = spreadsheet.insertSheet(newSheetName);

  // Get the range of the original sheet and copy the values to the new sheet
  var originalData = originalSheet.getDataRange().getValues();
  newSheet.getRange(1, 1, originalData.length, originalData[0].length).setValues(originalData);

  // Insert 3 new columns at the start (which is column A)
  newSheet.insertColumns(1, 3); // Inserts 3 new columns starting at column 1

  // Set column names in row 2 of the new sheet
  newSheet.getRange(2, 1, 1, 3).setValues([["team id", "player id", "user"]]);

  Logger.log("New sheet '" + newSheetName + "' created successfully.");
}
