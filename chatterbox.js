// This script is by the Chatterbox contributors.

var chatterbox = {};
var results = new Array();

chatterbox.send = function (content, address, type, sendMethod) {
  results = new Array();
  if (address == '' | address == null | address == undefined) {
    return chatterboxResult('Address not specified.', 'error');
  }
  if (content == '' | content == null | content == undefined) {
    return chatterboxResult('Nothing to send.', 'error');
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
  chatterboxResult('The send function completed.', 'success');
  chatterboxResult('Sent ' + sendMethod + ' message.', 'success');
};

chatterbox.checkType = function (address) {
  // Some code to detect the type of message we want to send.  Will return 'mobile' if telephone number, 'email' if email.
  return chatterboxResult('Please teach me how to check an address\'s type.', 'error');
};

chatterbox.sendEmail =  function (content, address) {
  if (address == '' | address == null | address == undefined) {
    return chatterboxResult('Address not specified.', 'error');
  }
  if (content == '' | content == null | content == undefined) {
    return chatterboxResult('Nothing to send.', 'error');
  }
  // Some code to send email.
  return chatterboxResult('Please teach me how to send email.', 'error');
};

chatterbox.sendText =  function (content, address) {
  if (address == '' | address == null | address == undefined) {
    return chatterboxResult('Address not specified.', 'error');
  }
  if (content == '' | content == null | content == undefined) {
    return chatterboxResult('Nothing to send.', 'error');
  }
  // Some code to send a text.
  return chatterboxResult('Please teach me how to send texts.', 'error');
};

chatterbox.makeCall =  function (content, address) {
  if (address == '' | address == null | address == undefined) {
    return chatterboxResult('Address not specified.', 'error');
  }
  if (content == '' | content == null | content == undefined) {
    return chatterboxResult('Nothing to send.', 'error');
  }
  // Some code to make a call.
  results.push('error: Please teach me how to call people.');
  return chatterboxResult('Please teach me how to call people.', 'error');
};

chatterbox.results = function(format) {
  var resultString = 'No results yet!';
  if (results == '' | results == null | results == undefined) {
    return resultString;
  }
  if (format == 'html') {
    resultString = results.toString().replace(/{success}/g, '<div style="background: #50A251;">').replace(/{error}/g, '<div style="background: #a35151;">').replace(/{result}/g, '<div>').replace(/{end}/g, '</div>').replace(/,/g, '');
  } else if (format == 'array') {
    resultString = results;
  } else {
    resultString = results.toString().replace(/,/g, '');
  }
  return resultString;
};

function chatterboxResult(text, type) {
  if (type != 'error' && type != 'success') {
    type = 'result';
  }
  text = ('{'+type+'}'+text+'{end}');
  results.push(text);  
  return text;
}
