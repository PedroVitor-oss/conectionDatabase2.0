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
    <header class="header-main">
        <button onclick="activeNav()">
            <i class="fa-solid fa-bars"></i>
        </button>
        <h2 id="title-header">
            No select
        </h2>
    </header>
    `,
    formCadastreClients:`
        <div class="fosco">
            <div class="card">
                <div class="hand">
                    <button onclick="deletFosco()">
                        fechar
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <form action="/cadastarClient" method="post">
                    <div>
                    <h3>Nome</h3>
                    <input type="text" name="nome" autocomplete="off" placeholder="nome" required>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <input type="text" name="email" autocomplete="off" placeholder="email" required>
                    </div>
                    <div>
                        <h3>Telefone</h3>
                        <input type="text" name="telefone" autocomplete="off"placeholder=" telefone" required>
                    </div>
                    <div>
                        <h3>Endereço</h3>
                        <input type="text" name="endereco" autocomplete="off" placeholder="Endereçoequired>
                    </div>
                    <div>
                        <h3>CEP</h3>
                        <input type="text" name="cep" autocomplete="off" placeholder="CPE" required>
                    </div>
                    <div>
                        <h3>CNPJ ou CPF</h3>
                        <input type="text" name="cpf" autocomplete="off"placeholder="CPF" required>
                    </div>
                    <div class="cont-button">
                    <button type="submit">Cadastrar</button>
                </div>

                </form>
            </div>
        </div>
    `
    
}