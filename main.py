import webapp2
import mandrill
import json
import logging

def main():
	global key
	keyfile=open("key.txt","r")
	key=keyfile.read()
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
		to_address=[]
		m=mandrill.Mandrill(key)
		to_address.append({"email":str(self.request.get("to"))})
		message["to"]=to_address
		message["from_email"]=str(self.request.get("from"))
		message["subject"]=str(self.request.get("subject"))
		message["text"]=str(self.request.get("contents"))
		self.response.write(json.dumps(m.messages.send(message)[0]))

app = webapp2.WSGIApplication([
	webapp2.Route(r"/email", handler=EmailHandler, name="email")
])

main()
