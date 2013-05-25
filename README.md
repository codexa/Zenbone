#Backbone

Backbone is the Zentext API.  This API will allow web apps to send messages over text or email.  Future versions will allow video conferencing.


##Sending Messages
You can send a message by calling <code>zentext.send(a, b, c);</code>.
<br /><b>a</b> is the content (in HTML or Text form).
<br /><b>b</b> is the address to send to.
<br /><b>c</b> is the type of message you are sending.  Accepted types are <b>email</b> and <b>mobile</b>.

<b>Note:</b> Not all messaging methods support HTML, on those that do not, Zentext will automatically convert it to Plain Text.


##Getting the results of an operation
You can get an operation's results by doing <code>foo = zentext.results(a);</code>.
<br /><b>a</b> tells Zentext how to format the result list.  Current values are <b>plain</b>, <b>array</b> and <b>html</b>.

<b>Note:</b> If you do not specify a format, Zentext will return results in a Plain Text format.


##Checking the type of an address
You can find out what kind of address a user has entered by doing <code>foo = Zentext.checkType();</code>.
<br>Zentext will return the string <b>'mobile'</b> if it is a telephone number or <b>'email'</b> if it is an email.


##Testing
These are the required steps to test out the app:
1. [download](http://www.python.org/download/) the latest python 2.7.x release
2. download the [Google App Engine SDK](https://developers.google.com/appengine/downloads) for python for your operating system
3. for the email functionality:
	1. [sign up](http://mandrill.com/signup/) for manrill
	2. create a new api key
	3. paste the key into a file in the root directory of the repo called key.txt
