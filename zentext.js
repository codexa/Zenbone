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
    if ( results[0] && results[0].message === "no results yet" ) {
      results.splice(0,1);
    }
    results.push(newResult);
    return newResult;
  };
  
  zentext.checkType = function (address) {
    // Some code to detect the type of message we want to send.  Will return 'mobile' if telephone number, 'email' if email.
    return result('Please teach me how to check an address\'s type.', 'error');
  };
  
  zentext.sendEmail = function (content, subject, address, sender, callback) {
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
    var xhr = new XMLHttpRequest();
    xhr.open("POST","/email",true);
    xhr.onload = function(e) {
      if(callback) {
        if( this.status === 200 ) {
          var JSONResponse = JSON.parse(this.response);
          if(JSONResponse.message === "Queued. Thank you.") {
            callback(result("message has been sent successfully", "success"));
          }
          else {
            callback(result(JSONResponse.message, "error"));
          }
        }
        else {
          callback(result("server responded an error {code}"+this.status+"{/code}{message}"+this.response+"{/message}","error"));
        }
      }
    }
    var sendData = new FormData();
    sendData.append("to",address);
    sendData.append("from",sender);
    sendData.append("subject",subject);
    sendData.append("contents",content);
    xhr.send(sendData);
    return result("sending the email","success");
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
  
  zentext.resetResults = function() {
    results = new Array();
    result("no results yet","error");
  }
  zentext.resetResults();
  
  return zentext;
})();
