function onOpen() {
  // Create a custom menu in Google Sheets
  const ui = SpreadsheetApp.getUi();

  ui.createMenu('Game environment')
    .addItem('Setup', 'setupStudentInfo')
    .addItem('New game', 'setNewGame') // Menu item and associated function
    .addToUi();

  ui.createMenu('玩遊戲')
    .addItem('出招','postPlay')
    .addToUi();
}

