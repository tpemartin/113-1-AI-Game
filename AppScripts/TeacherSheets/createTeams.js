function createTeams() {
  sortTimeStamp();
  removeDuplicateUsers();
  sortTimeStamp(false);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  // Create a function to generate a random team ID (4 characters long)
  function generateTeamId() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var teamId = '';
    for (var i = 0; i < 4; i++) {
      teamId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return teamId;
  }
  
  // Iterate through the non-frozen rows (starting from row 3, which is index 2)
  for (var i = 2; i < values.length; i++) {
    var user = values[i][3]; // Get the user from the fourth column
    var teamId = values[i][0]; // Get the existing team ID from the first column
    var playerId = values[i][1]; // Get the existing player ID from the second column
    
    // Only process rows where the user is not empty
    if (user) {
      if (i === 2 && !teamId) {
        // 1st non-frozen row (index 2)
        teamId = generateTeamId(); // Create a new team ID
        playerId = 1;               // Set player ID to 1
      } else if (!teamId) {
        // For other non-frozen rows
        if (values[i - 1][1] === 1) {
          // If previous row's player ID is 1
          teamId = values[i - 1][0]; // Link the team ID from previous row
          playerId = 2;               // Set player ID to 2
        } else if (values[i - 1][1] === 2) {
          // If previous row's player ID is 2
          teamId = generateTeamId();  // Create a new team ID
          playerId = 1;               // Set player ID to 1
        }
      }
      
      // Update the team ID and player ID back to the values array
      values[i][0] = teamId; // Set team ID
      values[i][1] = playerId; // Set player ID
    }
  }
  
  // Clear the existing data in team id and player id columns (except for the headers)
  sheet.getRange(3, 1, sheet.getMaxRows() - 2, 2).clearContent();
  
  // Set the updated values back to the sheet
  sheet.getRange(3, 1, values.length - 2, values[0].length).setValues(values.slice(2)); // Skip headers
  
}
