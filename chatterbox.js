// This script is by the Chatterbox contributors.

var chatterbox = {};

chatterbox.send = function (content, address, type, sendMethod) {
  if (address === '' | address == null | address == undefined) {
    return 'error: address not specified.';
  }
  if (content === '' | content == null | content == undefined) {
    return 'error: nothing to send.';
  }
  if (type === '' | type == null | type == undefined) {
    type = chatterbox.checkType(address);
  }
  // Delegates based on type
  if (type === 'email') {
    chatterbox.sendEmail(content, address);
  } else if (type === 'mobile') {
    if (sendMethod === 'text') {
      chatterbox.sendText(content, address);
    } else {
      chatterbox.makeCall(content, address);
    }
  }
}

chatterbox.checkType = function (address) {
  // Some code to detect the type of message we want to send.  Will return 'mobile' if telephone number, 'email' if email.
}

chatterbox.sendEmail =  function (content, address) {
  if (address === '' | address == null | address == undefined) {
    return 'error: address not specified.';
  }
  if (content === '' | content == null | content == undefined) {
    return 'error: nothing to send.';
  }
  // Some code to send email.
}

chatterbox.sendText =  function (content, address) {
  if (address === '' | address == null | address == undefined) {
    return 'error: address not specified.';
  }
  if (content === '' | content == null | content == undefined) {
    return 'error: nothing to send.';
  }
  // Some code to send a text.
}

chatterbox.makeCall =  function (content, address) {
  if (address === '' | address == null | address == undefined) {
    return 'error: address not specified.';
  }
  if (content === '' | content == null | content == undefined) {
    return 'error: nothing to send.';
  }
  // Some code to make a call.
}