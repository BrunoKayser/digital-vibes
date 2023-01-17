

from pagina import views

from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),

    path('qr-code/', views.paginaQRCode),
    path('qr-code/message/', views.random_message),
    path('qr-code/message/new/', views.new_message),

]
