from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    # Examples:
    # url(r'^$', 'python_test.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'loginuser.views.userlogin', name='userlogin'),
    url(r'^loginuser/', include('loginuser.urls')),
]

