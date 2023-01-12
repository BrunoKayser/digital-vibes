from django.contrib import admin
from .models import Mensagem


class MensagemAdmin(admin.ModelAdmin):
    list_display = ('id', 'mensagem', 'nome', 'data_input', 'rave')


admin.site.register(Mensagem)


# Register your models here.
