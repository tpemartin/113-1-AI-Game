function removeDuplicateUsers() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Get the full data range
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  // Create an object to track unique users
  var uniqueUsers = {};
  var filteredValues = [];

  // Loop through the values starting from row 3 to skip headers (1-based index)
  for (var i = 2; i < values.length; i++) { // Start from row index 2 (which is the 3rd row)
    var user = values[i][3]; // Get the user from the fourth column
    if (user && !uniqueUsers[user]) { // Check that the user is not already recorded
      uniqueUsers[user] = true; // Mark this user as seen
      filteredValues.push(values[i]); // Add the unique row to the results
    }
  }


  Logger.log(filteredValues)
  // Clear existing data in the sheet, except the first two header rows
  sheet.getRange(3, 1, sheet.getMaxRows() - 2, sheet.getLastColumn()).clearContent();
  
  // If there are unique values, set them back into the sheet
  if (filteredValues.length > 0) {
    // Add back the existing header row
    //filteredValues.unshift(values[1]); // Add footer headers back (the first set of headers)
    sheet.getRange(3, 1, filteredValues.length, filteredValues[0].length).setValues(filteredValues);
  }
  
}
