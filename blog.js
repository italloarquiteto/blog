document.addEventListener('DOMContentLoaded', () => {
    const dataAcesso = new Date().toLocaleDateString('pt-BR'); // Data no formato brasileiro

    // Seleciona todos os elementos que devem ter a data de acesso
    const menus = document.querySelectorAll('.data-acesso');

    menus.forEach(menu => {
        menu.textContent = `Último acesso: ${dataAcesso}`; // Define o texto da data de acesso
    });
});

