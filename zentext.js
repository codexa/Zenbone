// This script is by the Zentext contributors.

var zentext = (function () {
  var results = new Array();
  var zentext = new Object();
  
  function zentextResult(text, type) {
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
      return zentextResult('Address not specified.', 'error');
    }
    if (content == '' || content == null || content == undefined) {
      return zentextResult('Nothing to send.', 'error');
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
    zentextResult('The send function completed.', 'success');
    zentextResult('Sent ' + sendMethod + ' message.', 'success');
  };
  
  zentext.checkType = function (address) {
    // Some code to detect the type of message we want to send.  Will return 'mobile' if telephone number, 'email' if email.
    return zentextResult('Please teach me how to check an address\'s type.', 'error');
  };
  
  zentext.sendEmail = function (content, address) {
    if (address == '' || address == null || address == undefined) {
      return zentextResult('Address not specified.', 'error');
    }
    if (content == '' || content == null || content == undefined) {
      return zentextResult('Nothing to send.', 'error');
    }
    // Some code to send email.
    return zentextResult('Please teach me how to send email.', 'error');
  };
  
  zentext.sendText = function (content, address) {
    if (address == '' || address == null || address == undefined) {
      return zentextResult('Address not specified.', 'error');
    }
    if (content == '' || content == null || content == undefined) {
      return zentextResult('Nothing to send.', 'error');
    }
    // Some code to send a text.
    return zentextResult('Please teach me how to send texts.', 'error');
  };
  
  zentext.makeCall = function (content, address) {
    if (address == '' || address == null || address == undefined) {
      return zentextResult('Address not specified.', 'error');
    }
    if (content == '' || content == null || content == undefined) {
      return zentextResult('Nothing to send.', 'error');
    }
    // Some code to make a call.
    results.push('error: Please teach me how to call people.');
    return zentextResult('Please teach me how to call people.', 'error');
  };
  
  zentext.results = function(format) {
    var resultString = 'No results yet!';
    if (results == '' || results == null || results == undefined) {
      return resultString;
    }
    if (format == 'html') {
      resultString = results.toString().replace(/{success}/g, '<div style="background: #50A251;">').replace(/{error}/g, '<div style="background: #a35151;">').replace(/{result}/g, '<div>').replace(/{end}/g, '</div>').replace(/,/g, '');
    } else if (format == 'array') {
      resultString = results;
    } else {
      resultString = results.join("");
    }
    return resultString;
  };
  
  return zentext;
})();
