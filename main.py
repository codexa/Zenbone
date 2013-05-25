import webapp2
import mandrill

def main():
	global key
	keyfile=open("key.txt","r");
	key=keyfile.read();
	keyfile.close();

class EmailHandler(webapp2.RequestHandler):
	def post(self):
		message={}
		to_address=[]
		m=mandrill.Mandrill(key)
		to_address.append({"email":str(self.request.get("to"))})
		message["to"]=to_address
		message["from_email"]=str(self.request.get("from"))
		message["subject"]=str(self.request.get("subject"))
		message["text"]=str(self.request.get("contents"))
		self.response.write(m.messages.send(message))
		self.response.write(message)

app = webapp2.WSGIApplication([
	webapp2.Route(r"/email", handler=EmailHandler, name="email")
], debug=True)

if __name__=="main":
	main()