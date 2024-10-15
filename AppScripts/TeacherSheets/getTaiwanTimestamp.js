function getTaiwanTimestamp() {
  // Get the current date
  var date = new Date();

  // Format the date to ISO 8601 in Taiwan timezone (UTC+8)
  var options = { 
    timeZone: 'Asia/Taipei', // Specify the timezone
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: false 
  };

  // Format the date to a string using toLocaleString
  var formattedDate = date.toLocaleString('sv-SE', options);

  // Replace the space with 'T' to match the ISO 8601 format
  formattedDate = formattedDate.replace(" ", "T");

  // Append 'Z' to indicate it's in local timezone. However, Taiwan is UTC+8.
  // If desired, you can also directly append '+08:00'.
  formattedDate += '+08:00'; // This indicates the offset for Taiwan Time

  Logger.log("ISO 8601 Timestamp in Taiwan Timezone: " + formattedDate);
  return formattedDate
}
