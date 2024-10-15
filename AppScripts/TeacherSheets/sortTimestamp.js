function sortTimeStamp(descending=true) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Freeze the first two rows (header rows)
  sheet.setFrozenRows(2);
  
  // Get the data range starting from the second row (to include headers)
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  // Sort data by timestamp (third column)
  values.sort(function(a, b) {
    return descending ? new Date(b[2]) - new Date(a[2]) : new Date(a[2]) - new Date(b[2]);
  });
  
  // Clear the existing content and write sorted data back to sheet
  // Clear from row 3 down to preserve headers
  sheet.getRange(3, 1, sheet.getMaxRows() - 2, sheet.getLastColumn()).clearContent();
  
  // Set the sorted values back to the sheet
  sheet.getRange(3, 1, values.length - 2, values[0].length).setValues(values.slice(2)); // Skip headers
}
