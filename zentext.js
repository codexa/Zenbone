// This script is by the Zentext contributors.

var zentext = (function () {
  var results = new Array();
  var zentext = new Object();
  
  function result(text, type) {
    if (typeof text !== "string") {
      text = "";
    }
    if (type !== 'error' && type !== 'success') {
      type = 'result';
    }
    newResult = {
        type: type,
        message: text
    };
    results.push(newResult);
    return newResult;
  };
  
  zentext.checkType = function (address) {
    // Some code to detect the type of message we want to send.  Will return 'mobile' if telephone number, 'email' if email.
    return result('Please teach me how to check an address\'s type.', 'error');
  };
  
  zentext.sendEmail = function (content, subject, address, sender) {
    if (!( address && typeof address === "string" )) {
      return result('Address not specified or not in an acceptable format.', 'error');
    }
    if (!( content && typeof content === "string" )) {
      return result('Nothing to send or data is not in an acceptable format.', 'error');
    }
    if (!( sender && typeof sender === "string" )) {
      return result('Sender not specified or not in an acceptable format','error');
    }
    if ( subject === null || subject === undefined ) {
      subject = "";
    }
    if (!( typeof subject === "string" )) {
      return result('Subject not in an acceptable format','error')
    }
    // Some code to send email.
    return result('Please teach me how to send email.', 'error');
  };
  
  zentext.sendText = function (content, address) {
    if (!( address && typeof address === "string" )) {
      return result('Address not specified or not in an acceptable format.', 'error');
    }
    if (!( content && typeof content === "string" )) {
      return result('Nothing to send or data is not in an acceptable format.', 'error');
    }
    // Some code to send a text.
    return result('Please teach me how to send texts.', 'error');
  };
  
  zentext.makeCall = function (address) {
    if (!( address && typeof address === "string" )) {
      return result('Address not specified or not in an acceptable format.', 'error');
    }
    if (!( content && typeof content === "string" )) {
      return result('Nothing to send or data is not in an acceptable format.', 'error');
    }
    // Some code to make a call.
    return result('Please teach me how to call people.', 'error');
  };

  zentext.results = function(format) {
    var returnResult = "";
    if ( results.length === 0 ) {
      result("no results yet","error");
    }
    switch (format) {
      case 'html':
        for ( var i = 0; i < results.length; i++ ) {
          switch (results[i].type) {
            case "success":
              returnResult += '<div class="zentext-success">';
              break;
            case "error":
              returnResult += '<div class="zentext-error">';
              break;
            case "result":
              returnResult += '<div class="zentext-result">';
              break;
          }
          returnResult += results[i].message;
          returnResult += '</div>';
        }
        break;
      case 'json':
          returnResult = results;
        break;
      default:
        returnResult = result("invalid format","error")
    }
    return returnResult;
  };
  
  return zentext;
})();
