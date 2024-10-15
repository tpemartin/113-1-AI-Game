function preparePlayPostData(sheetname, data) {
  
  // Retrieve the "user" value from the script properties
  const scriptProperties = PropertiesService.getScriptProperties();
  const user = scriptProperties.getProperty("user");

  //const sheetname = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getSheetName();

  // Concatenate the user value with the input data array
  // Ensure the user is included as the first element in the new array
  const dataWithUser = [user, ...data]; // Prepend the user to the array

  // Create the payload for the POST request
  const payload = {
    sheetname: sheetname,
    data: JSON.stringify(dataWithUser) // Convert the concatenated array to JSON string
  };

  Logger.log(payload)
  return payload
}
