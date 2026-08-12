function toggleDetalhes(id) {
    const detalheElemento = document.getElementById(`detalhe-${id}`);
    
    if (detalheElemento.classList.contains('escondido')) {
        detalheElemento.classList.remove('escondido');
    } else {
        detalheElemento.classList.add('escondido');
    }
}
