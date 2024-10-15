function getCellValueFromActiveGame() {
  // Spreadsheet URL
  const spreadsheetUrl = "https://docs.google.com/spreadsheets/d/156LwvEYdeaJaa2u0e_62ND1i6I7DUw_XSLBtCInKrUo/edit?gid=1111281704#gid=1111281704";
  
  // Extract the spreadsheet ID from the URL
  const spreadsheetId = spreadsheetUrl.match(/d\/([a-zA-Z0-9-_]+)/)[1];
  
  // Open the spreadsheet using its ID
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  
  // Get the "Active game" sheet
  const targetSheet = spreadsheet.getSheetByName("Active game");
  
  // Check if the "Active game" sheet exists
  if (targetSheet) {
    // Get the value of cell A1
    const cellValue = targetSheet.getRange("A1").getValue();
    
    // Log the value of cell A1
    Logger.log("Value in A1 of 'Active game': " + cellValue);
    
    // Optionally, return the cell value
    return cellValue;
  } else {
    Logger.log('Sheet "Active game" does not exist.');
    return null;
  }
}
