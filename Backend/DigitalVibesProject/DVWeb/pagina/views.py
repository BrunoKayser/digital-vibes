from django.shortcuts import render, redirect



def paginaQRCode(request):
    return render(request, 'index.html')


def random_message(request):
    return render(request, 'message.html')


def new_message(request):
    return render(request, 'new-message.html')

def save_form(request):
    nome = request.POST.get('nome')

    data = {
        'nome': nome
    }



    return render(request, 'thanks.html', data)