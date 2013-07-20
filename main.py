import webapp2
import requests
import json
import logging
import cgi

def main():
	global KEY
	keyfile=open("key.txt","r")
	KEY=keyfile.read()
	keyfile.close()

class EmailHandler(webapp2.RequestHandler):
	def handle_exception(self, exception, debug):
		# Log the error.
		logging.exception(exception)
		
		# Set a custom message.
		self.response.write(exception)
		
		# If the exception is a HTTPException, use its error code.
		# Otherwise use a generic 500 error code.
		if isinstance(exception, webapp2.HTTPException):
			self.response.set_status(exception.code)
		else:
			self.response.set_status(500)
	
	def post(self):
		message={}
		message["from"] = self.request.get("from")
		message["subject"] = self.request.get("subject")
		message["text"] = self.request.get("contents")
		
		to_address = [];
		to_address.append(self.request.get("to"))
		message["to"] = to_address
		
		mail_response = requests.post(
			"https://api.mailgun.net/v2/zentext.mailgun.org/messages",
			auth = ("api", KEY),
			data = message
		)
		try:
			response_json = mail_response.json()
		except ValueError:
			response_json = {}
			response_json["message"] = cgi.escape(mail_response.text)
		response_json["responseCode"] = mail_response.status_code
		
		self.response.write(json.dumps(response_json))

app = webapp2.WSGIApplication([
	webapp2.Route(r"/email", handler=EmailHandler, name="email")
])

main()
