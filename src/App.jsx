import "./App.css";
import instagramIcon from "./assets/instagram.png";
import gmailIcon from "./assets/gmail.png";
import vitrineImg from "./assets/vitrine.png";
import portfolioImg from "./assets/portfolio.png";

function App() {
  return (
    <div className="app">

      <header className="navbar">
        <div className="logo">
          João Vitor de Oliveira
        </div>

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
          Técnico em Mecatrônica e estudante de Análise e Desenvolvimento de Sistemas
        </p>

        <button>Ver Projetos</button>
      </section>

      <section className="sobre" id="sobre">
        <h2>Sobre Mim</h2>

        <p>
          Sou um entusiasta da tecnologia com formação técnica em Mecatrônica e atualmente cursando Análise e Desenvolvimento de Sistemas. Tenho paixão por criar soluções inovadoras e estou sempre buscando aprender novas tecnologias para aprimorar minhas habilidades.
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
            <h3>Vitrine Virtual</h3>

            <p>
              Projeto acadêmico desenvolvido em React para
              apresentação de produtos e integração de uma nova marca no mercado digital.
            </p>
          </div>

          <div className="projeto-card">
            <h3>Portfólio React</h3>

            <p>
              Site pessoal para apresentar habilidades e projetos.
            </p>
          </div>

        </div>
      </section>

    <section className="contato" id="contato">
      <h2>Contato</h2>

      <div className="social-links">

        {/* GMAIL */}
        <a
          href="mailto:joaovitor.oliveira05@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={gmailIcon}
            alt="Gmail"
          />
        </a>

        {/* INSTAGRAM */}
        <a
          href="https://instagram.com/oliveirajao_wb"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={instagramIcon}
            alt="Instagram"
          />
        </a>

      </div>

    </section>

    </div>
  );
}

export default App;