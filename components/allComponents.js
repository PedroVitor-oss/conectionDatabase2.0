module.exports = {
    navigate:`
    <nav>
    <ul>
        <div class="title-nav">
            <h1>Imper Sul</h1>
            <button onclick="activeNav()">
                <i class="fa-solid fa-arrow-left"></i>
            </button>
        </div>
        <li>
            <i class="fa-solid fa-users"></i>
            Clientes
        </li>
        <li>
            <i class="fa-solid fa-hammer"></i>
            Serviços
        </li>
        <li>
            <i class="fa-solid fa-briefcase"></i>
            Vendas
        </li>
        <li>
            <i class="fa-solid fa-credit-card"></i>
            Pagamentos
        </li>
        <li>
            <i class="fa-solid fa-file-lines"></i>
            Relatorios
        </li>
    </ul>
</nav>
    `,
    header:`
    <header>
        <button onclick="activeNav()">
            <i class="fa-solid fa-bars"></i>
        </button>
    </header>
    `
    
}