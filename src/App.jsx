import "./App.css";
import instagramIcon from "./assets/instagram.png";
import gmailIcon from "./assets/gmail.png";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">João Vitor de Oliveira</div>

        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="hero">
        <h1>João Vitor</h1>

        <p>
          Técnico em Mecatrônica e estudante de Análise e Desenvolvimento
          de Sistemas
        </p>

        <button>Ver Projetos</button>
      </section>

      <section className="sobre" id="sobre">
        <h2>Sobre Mim</h2>

        <p>
          Sou técnico em Mecatrônica e atualmente curso Análise e
          Desenvolvimento de Sistemas. Tenho interesse pela área de
          desenvolvimento web e busco aprimorar meus conhecimentos por meio
          de projetos práticos e novas tecnologias.
        </p>
      </section>

      <section className="tecnologias" id="tecnologias">
        <h2>Tecnologias</h2>

        <div className="cards-tech">
          <div className="card">React</div>
          <div className="card">JavaScript</div>
          <div className="card">HTML</div>
          <div className="card">CSS</div>
        </div>
      </section>

      <section className="projetos" id="projetos">
        <h2>Projetos</h2>

        <div className="cards-projetos">
          <div className="projeto-card">
            <h3>Vitrine Virtual - Normith Tacos</h3>

            <p>
              Projeto desenvolvido em React durante o projeto de extensão.
              O site funciona como uma vitrine virtual para a empresa
              Normith Tacos, apresentando os produtos, informações da marca
              e formas de contato.
            </p>

            <a
              href="https://vitrine-virtual-a6ts.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Acessar projeto
            </a>
          </div>

          <div className="projeto-card">
            <h3>Meus Jogos Favoritos</h3>

            <p>
              Projeto criado em React para praticar componentes, props e
              children. A aplicação apresenta uma lista de jogos favoritos
              utilizando cards reutilizáveis e organização por componentes.
            </p>

            <a
              href="https://jogos-favoritos-phi.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Acessar projeto
            </a>
          </div>

          <div className="projeto-card">
            <h3>Projeto 05 - Vitrine de Livros</h3>

            <p>
              Aplicação desenvolvida em React para colocar em prática o uso
              de componentes, props e children. O projeto exibe livros com
              informações como autor, preço, estoque e avaliações.
            </p>

            <a
              href="https://aula-06.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Acessar projeto
            </a>
          </div>
        </div>
      </section>

      <section className="contato" id="contato">
        <h2>Contato</h2>

        <div className="social-links">
          <a
            href="mailto:joaovitor.oliveira05@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gmailIcon} alt="Gmail" />
          </a>

          <a
            href="https://instagram.com/oliveirajao_wb"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;