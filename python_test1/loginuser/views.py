from django.shortcuts import render
from django.template.loader import render_to_string
from django.shortcuts import render_to_response, redirect, render
from django.http import HttpResponse
# Create your views here.





def userlogin(request):
	variables={}
	print "*********************************"
	return render_to_response('index.html',variables)


def authenticateuser(request):
	variables = {}

	username = request.POST.get('username','')
	passwd = request.POST.get('password','')

	print "this is  username and password",username, passwd

	return HttpResponse('Hi i am loggedin')
	