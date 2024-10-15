function playOneRound() {
  // Get the active spreadsheet and the 'gameSheet'
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var sheetname = sheet.getSheetName();
  var data = sheet.getDataRange().getValues(); // Read all data from the sheet
  
  // Read the second row to get column names
  var columnNames = data[1]; // Second row (index 1) contains the column names
  
  // Find the index of "實現招式" column
  var moveColumnIndex = columnNames.indexOf("實現招式");
  
  // If the "實現招式" column is not found, exit the function
  if (moveColumnIndex === -1) {
    Logger.log("Column '實現招式' not found.");
    return;
  }

  // Get the last row of data (the last row in the sheet)
  var lastRow = data[data.length - 1];

  // Read feasible moves and probabilities
  var feasibleMoves = columnNames.slice(0, moveColumnIndex); // Get column names before "實現招式"
  var moveProbabilities = lastRow.slice(0, moveColumnIndex); // Get last row values before "實現招式"
  
  // Check if the "實現招式" value is empty in the last row
  if (lastRow[moveColumnIndex] === "") {
    // Convert moveProbabilities to numbers
    moveProbabilities = moveProbabilities.map(Number);
    
    // Normalize probabilities (if needed), making sure they are appropriate for random selection
    var totalProbability = moveProbabilities.reduce((a, b) => a + b, 0);
    
    // If totalProbability is zero, we cannot draw a random value
    if (totalProbability === 0) {
      Logger.log("Move probabilities sum to zero; cannot make a selection.");
      return [];
    }

    // Draw a random move based on the probabilities
    // Create a cumulative probability array
    var cumulativeProbabilities = [];
    for (var i = 0; i < moveProbabilities.length; i++) {
      cumulativeProbabilities[i] = (cumulativeProbabilities[i - 1] || 0) + moveProbabilities[i];
    }

    var randomValue = Math.random() * totalProbability; // Random value between 0 and totalProbability
    var actualMove;

    // Select move based on cumulative probabilities
    for (var i = 0; i < cumulativeProbabilities.length; i++) {
      if (randomValue < cumulativeProbabilities[i]) {
        actualMove = feasibleMoves[i];
        break;
      }
    }

    // Write the selected move (actualMove) to the "實現招式" column of the last row
    lastRow[moveColumnIndex] = actualMove; // Update lastRow with selected move
    sheet.getRange(data.length, moveColumnIndex + 1).setValue(actualMove); // Write to the correct position in the sheet
     
    Logger.log("Selected move: " + actualMove);
  } else {
    Logger.log("The '實現招式' column is not empty; no action taken.");
    return [];
  }
  
  // Create and return an array of concatenated strings of moveProbabilities and actualMove
  var result = moveProbabilities.map(function(prob, index) {
    return prob;
  });
  
  // Add the actualMove to the result
  result.push(actualMove);
  
  Logger.log(result)
  return [sheetname, result];
}
