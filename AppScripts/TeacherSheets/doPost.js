function doPost(e) {
  // Retrieve the "play" query parameter
  var playStatus = e.parameter.play; // This gets the "play" parameter and assigns it to playStatus
  
  // Retrieve the raw payload content
  var rawContent = e.postData.contents; // This retrieves the raw JSON string
  Logger.log("Raw POST data: " + rawContent);
  
  // Parse the JSON content, assuming the payload is valid JSON
  try {
    var jsonData = JSON.parse(rawContent);
    Logger.log("Parsed data: " + JSON.stringify(jsonData));
    
    // Access the 'data' property from the JSON object
    if (jsonData.data) {
      var datastring = jsonData.data;
      var sheetname = jsonData.sheetname;

      // create playInput row with timestamp
      var playInput = [getTaiwanTimestamp()];
      playInput.push(...JSON.parse(datastring))
      
      recordPlayInput(sheetname, playInput)
      return ContentService.createTextOutput("playInput: " + JSON.stringify(playInput));
    } else {
      Logger.log("No 'data' parameter found.");
      return ContentService.createTextOutput("No 'data' received").setStatusCode(400);
    }
  } catch (error) {
    Logger.log("Error parsing JSON: " + error.message);
    return ContentService.createTextOutput("Invalid JSON format").setStatusCode(400);
  }

}