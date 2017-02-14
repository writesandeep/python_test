from django.conf.urls import include, url, patterns
from django.conf.urls.static import static
from django.conf import settings
from loginuser.views import *

urlpatterns = patterns('loginuser.views',

	url(r'^authenticateuser/',authenticateuser, name='authenticateuser'),
) 