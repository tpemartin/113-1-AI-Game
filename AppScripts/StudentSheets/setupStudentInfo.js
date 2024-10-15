
function setupStudentInfo() {
  var ui = SpreadsheetApp.getUi();
  
  // Prompt user for Student ID and validate it
  var studentId;
  var validId = false;
  
  while (!validId) {
    studentId = ui.prompt('Enter your Student ID (numbers only):').getResponseText();
    
    // Check if the input is purely digits
    if (/^\d+$/.test(studentId)) {
      validId = true; // The input is valid
    } else {
      ui.alert('Invalid Student ID! Please enter only digits.');
    }
  }

  // Prompt user for Name
  var name = ui.prompt('Enter your Name:').getResponseText();
  
  // Create the formatted string for storage
  var lastThreeDigits = studentId.slice(-3); // Get the last three digits of the Student ID
  var userString = `(${lastThreeDigits})${name}`; // Construct the string
  
  // Store the string in script properties
  var scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty('user', userString);

  // You can also append the Student ID and Name to the spreadsheet if desired
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([studentId, name]); // Append Student ID and Name to the next available row
  
  ui.alert('Setup complete!\nStudent ID: ' + studentId + '\nName: ' + name + '\nStored as: ' + userString);
}
