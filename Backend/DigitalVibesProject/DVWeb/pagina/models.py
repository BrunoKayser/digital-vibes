from django.db import models

# Create your models here.

class Mensagem(models.Model):    
    mensagem = models.TextField(max_length=250, null=False, blank=False)
    nome = models.CharField(max_length=70, null=True, blank=True)
    data_input = models.DateTimeField(auto_now=True, null=False, blank=False)
    rave = models.CharField(max_length=25, null=True, blank=True)
    
    
    class Meta:
        db_table = 'Mensagens'
        
        
    def __str__(self):
        return self.nome