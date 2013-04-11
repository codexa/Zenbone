// This script is by the Chatterbox contributors.

var chatterbox = {};
var results = new Array();

chatterbox.send = function (content, address, type, sendMethod) {
  results = new Array();
  if (address == '' | address == null | address == undefined) {
    results.push('error: address not specified.');
    return 'error: address not specified.';
  }
  if (content == '' | content == null | content == undefined) {
    results.push('error: nothing to send.');
    return 'error: nothing to send.';
  }
  if (type == '' | type == null | type == undefined) {
    type = chatterbox.checkType(address);
  }
  // Delegates based on type
  if (type == 'email') {
    chatterbox.sendEmail(content, address);
  } else if (type == 'mobile') {
    if (sendMethod == 'text') {
      chatterbox.sendText(content, address);
    } else {
      chatterbox.makeCall(content, address);
    }
  }
  results.push('success: The send function completed.  Sent ' + sendMethod + ' message.');
};

chatterbox.checkType = function (address) {
  // Some code to detect the type of message we want to send.  Will return 'mobile' if telephone number, 'email' if email.
  results.push('error: Please teach me how to check an address\'s type.');
};

chatterbox.sendEmail =  function (content, address) {
  if (address == '' | address == null | address == undefined) {
    results.push('error: address not specified.');
    return 'error: address not specified.';
  }
  if (content == '' | content == null | content == undefined) {
    results.push('error: nothing to send.');
    return 'error: nothing to send.';
  }
  // Some code to send email.
  results.push('error: Please teach me how to send email.');
  return 'error: Please teach me how to send email.';
};

chatterbox.sendText =  function (content, address) {
  if (address == '' | address == null | address == undefined) {
    results.push('error: address not specified.');
    return 'error: address not specified.';
  }
  if (content == '' | content == null | content == undefined) {
    results.push('error: nothing to send.');
    return 'error: nothing to send.';
  }
  // Some code to send a text.
  results.push('error: Please teach me how to send texts.');
  return 'error: Please teach me how to send texts.';
};

chatterbox.makeCall =  function (content, address) {
  if (address == '' | address == null | address == undefined) {
    results.push('error: address not specified.');
    return 'error: address not specified.';
  }
  if (content == '' | content == null | content == undefined) {
    results.push('error: nothing to send.');
    return 'error: nothing to send.';
  }
  // Some code to make a call.
  results.push('error: Please teach me how to call people.');
  return 'error: Please teach me how to call people.';
};

chatterbox.results = function(format) {
  if (results == '' | results == null | results == undefined) {
    return 'No results yet';
  }
  results.toString();
  if (format == 'html') {
    results = results.replace(/,/, '<br />');
  }
  return results;
};
