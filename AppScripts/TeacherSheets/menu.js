function onOpen() {
  // Create a custom menu in Google Sheets
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Game Menu') // Menu name
    .addItem('Set game', 'setActiveSheetNameInCellA1') // Menu item and associated function
    .addItem('New result sheet','getCellValueFromActiveGame')
    .addToUi(); // Add the menu to the UI

  ui.createMenu('遊戲處理')
    .addItem('配對','createTeams')
    .addToUi();
}

