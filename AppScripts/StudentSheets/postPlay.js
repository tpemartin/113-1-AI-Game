function postPlay() {
  // Define the URL for the POST request with the query parameter "play=true"
  const url = "https://script.google.com/macros/s/AKfycbytuhKaPq6ayYxkOkL4nRJ4arR0vEMUGNX4wN4yEIqBSrEOCZIQOEUsO7PnPmEb2BN1/exec?play=true";

  const [sheetname, dataPlay] = playOneRound();

  const payload = preparePlayPostData(sheetname, dataPlay);

  
  if(JSON.parse(payload.data).length===1) return //no new play data to post
  // Create the options for the POST request
  const options = {
    method: "post",
    contentType: "application/json", // Use JSON for payload content type
    payload: JSON.stringify(payload),
    muteHttpExceptions: true // Optional: suppress HTTP exceptions
  };

  // Make the POST request and handle the response
  try {
    const response = UrlFetchApp.fetch(url, options);
    Logger.log("Response: " + response.getContentText());
    return response.getContentText(); // Return the response text if needed
  } catch (error) {
    Logger.log("Error: " + error.message);
    return null; // Handle the error as needed
  }
}
