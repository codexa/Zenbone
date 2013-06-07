// This script is by the Zentext contributors.

var zentext = (function () {
  var results = new Array();
  var zentext = new Object();
  
  function result(text, type) {
    if (type != 'error' && type != 'success') {
      type = 'result';
    }
    text = ('{'+type+'}'+text+'{end}');
    results.push(text);
    return text;
  }
  
  zentext.send = function (content, address, type, sendMethod) {
    results = new Array();
    if (address == '' || address == null || address == undefined) {
      return result('Address not specified.', 'error');
    }
    if (content == '' || content == null || content == undefined) {
      return result('Nothing to send.', 'error');
    }
    if (type == '' || type == null || type == undefined) {
      type = this.checkType(address);
    }
    // Delegates based on type
    if (type == 'email') {
      this.sendEmail(content, address);
    } else if (type == 'mobile') {
      if (sendMethod == 'text') {
        this.sendText(content, address);
      } else {
        this.makeCall(content, address);
      }
    }
    result('The send function completed.', 'success');
    result('Sent ' + sendMethod + ' message.', 'success');
  };
  
  zentext.checkType = function (address) {
    // Some code to detect the type of message we want to send.  Will return 'mobile' if telephone number, 'email' if email.
    return result('Please teach me how to check an address\'s type.', 'error');
  };
  
  zentext.sendEmail = function (content, subject, address, sender) {
    if !( address && typeof address === "string" ) {
      return result('Address not specified or not in an acceptable format.', 'error');
    }
    if !( content && typeof content === "string" ) {
      return result('Nothing to send or data is not in an acceptable format.', 'error');
    }
    if !( sender && typeof sender === "string" ) {
      return result('Sender not specified or not in an acceptable format','error');
    }
    if ( subject === null || subject === undefined ) {
      subject = "";
    }
    if !( typeof subject === "string" ) {
      return result('Subject not in an acceptable format','error')
    }
    // Some code to send email.
    return result('Please teach me how to send email.', 'error');
  };
  
  zentext.sendText = function (content, address) {
    if !( address && typeof address === "string" ) {
      return result('Address not specified or not in an acceptable format.', 'error');
    }
    if !( content && typeof content === "string" ) {
      return result('Nothing to send or data is not in an acceptable format.', 'error');
    }
    // Some code to send a text.
    return result('Please teach me how to send texts.', 'error');
  };
  
  zentext.makeCall = function (content, address) {
    if !( address && typeof address === "string" ) {
      return result('Address not specified or not in an acceptable format.', 'error');
    }
    if !( content && typeof content === "string" ) {
      return result('Nothing to send or data is not in an acceptable format.', 'error');
    }
    // Some code to make a call.
    results.push('error: Please teach me how to call people.');
    return result('Please teach me how to call people.', 'error');
  };
  
  zentext.results = function(format) {
    var returnResult = 'No results yet!';
    if ( results.length === 0 ) {
      return returnResult;
    }
    if (format === 'html') {
      returnResult = results.toString().replace(/{success}/g, '<div style="background: #50A251;">').replace(/{error}/g, '<div style="background: #a35151;">').replace(/{result}/g, '<div>').replace(/{end}/g, '</div>').replace(/,/g, '');
    } else if (format === 'array') {
      returnResult = results;
    } else {
      returnResult = results.join("");
    }
    return returnResult;
  };
  
  return zentext;
})();
