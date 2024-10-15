function setActiveSheetNameInCellA1() {
  // Get the active spreadsheet
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Get the active sheet
  const activeSheet = activeSpreadsheet.getActiveSheet();
  
  // Get the name of the active sheet
  const activeSheetName = activeSheet.getName();
  
  // Get the "Active game" sheet
  const targetSheet = activeSpreadsheet.getSheetByName("Active game");
  
  // Check if the "Active game" sheet exists
  if (targetSheet) {
    // Set the value of cell A1 to the active sheet name
    targetSheet.getRange("A1").setValue(activeSheetName);
  } else {
    Logger.log('Sheet "Active game" does not exist.');
  }

  createResultSheets(activeSheetName)
}
function getCellValueFromActiveGame() {
  // Spreadsheet URL
  
  // Open the spreadsheet using its ID
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Get the "Active game" sheet
  const targetSheet = spreadsheet.getSheetByName("Active game");
  
  // Check if the "Active game" sheet exists
  if (targetSheet) {
    // Get the value of cell A1
    const cellValue = targetSheet.getRange("A1").getValue();
    
    // Log the value of cell A1
    Logger.log("Value in A1 of 'Active game': " + cellValue);
    createResultSheets(cellValue);
    
    // Optionally, return the cell value
    return cellValue;
  } else {
    Logger.log('Sheet "Active game" does not exist.');
    return null;
  }
  
}
function createSheetIfNotExists(sheetName) {
  // Get the active spreadsheet
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Check if a sheet with the specified name already exists
  const existingSheet = activeSpreadsheet.getSheetByName(sheetName);
  
  // If the sheet already exists, skip execution
  if (existingSheet) {
    Logger.log(`Sheet "${sheetName}" already exists. Skipping creation.`);
    return;
  }
  
  // Create a new sheet with the specified name
  const newSheet = activeSpreadsheet.insertSheet(sheetName);
  
  // Log a message confirming the creation of the new sheet
  Logger.log(`Sheet "${sheetName}" has been created successfully.`);
}

// // Example usage
// function createResultSheet() {
//   const newSheetName = getCellValueFromActiveGame()+"_results"; // Replace with the desired sheet name
//   createSheetIfNotExists(newSheetName);
// }
