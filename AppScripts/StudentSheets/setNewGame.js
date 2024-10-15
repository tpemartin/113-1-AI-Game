function copySheetFromTeacher(spreadsheetUrl, sheetName) {
  // Extract the spreadsheet ID from the URL
  const spreadsheetId = spreadsheetUrl.match(/d\/([a-zA-Z0-9-_]+)/)[1];

  // Get the teacher spreadsheet
  const teacherSpreadsheet = SpreadsheetApp.openById(spreadsheetId);

  // Get the specified sheet from the teacher's spreadsheet
  const sourceSheet = teacherSpreadsheet.getSheetByName(sheetName);
  
  // Check if the source sheet exists
  if (!sourceSheet) {
    Logger.log(`Sheet "${sheetName}" does not exist in the teacher's spreadsheet.`);
    return;
  }

  // Get the active spreadsheet
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Check if a sheet with the same name already exists in the active spreadsheet
  const existingSheet = activeSpreadsheet.getSheetByName(sheetName);
  
  // If it exists, delete the existing sheet
  if (existingSheet) {
    activeSpreadsheet.deleteSheet(existingSheet);
  }

  // Create a copy of the source sheet in the active spreadsheet
  const copy = sourceSheet.copyTo(activeSpreadsheet);
  
  // Set the name of the copied sheet to the specified name
  copy.setName(sheetName);

  Logger.log(`Sheet "${sheetName}" has been copied successfully.`);
}

// Example usage
function setNewGame() {
  const teacherSpreadsheetUrl = "https://docs.google.com/spreadsheets/d/156LwvEYdeaJaa2u0e_62ND1i6I7DUw_XSLBtCInKrUo/edit?gid=1111281704#gid=1111281704";
  const sheetNameToCopy = getCellValueFromActiveGame(); // Replace with the name of the sheet to copy
  copySheetFromTeacher(teacherSpreadsheetUrl, sheetNameToCopy);
}
