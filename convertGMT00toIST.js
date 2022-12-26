const getCurrentTimeInIST = () => {
    // Get the current time in GMT
    const gmtTime = new Date();
    // console.log('gmt')
    // console.log(gmtTime)
    // Get the time offset for the IST time zone
    // const timeOffset = gmtTime.getTimezoneOffset();
  
    // Calculate the IST time by subtracting the time offset from the GMT time
    const istTime = new Date(gmtTime - (-330) * 60 * 1000);
    // console.log('istime')
    // console.log(istTime)
    // Format the IST time as a string in the 12-hour clock format
    const formattedTime = istTime.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    });
    // console.log('formatted time')
    // console.log(formattedTime)
    // Return the formatted IST time with the "IST" string appended
    return `${formattedTime} IST`;

// // for local system
//     const DateNow = Date.now();
//     return Date(DateNow).toString()


  };

  module.exports = {getCurrentTimeInIST}