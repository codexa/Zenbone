#Backbone

Backbone is the Chatterbox API.  This API will allow web apps to send messages over text or email.  Future versions will allow video conferencing.


##Sending Messages
You can send a message by calling <code>chatterbox.send(a, b, c, d);</code>.
<br /><b>a</b> is the content (in HTML or Text form).
<br /><b>b</b> is the address to send to.
<br /><b>c</b> is the type of message you are sending.

<b>Note:</b> Not all messaging methods support HTML, on those that do not, Chatterbox will automatically convert it to Plain Text.


##Getting the results of an operation
You can get an operation's results by calling <code>chatterbox.results(a);</code>.
<br /><b>a</b> tells chatterbox how to format the result list.  Current values are <b>plain</b> and <b>html</b>.
