import './assets/css/App.css';
import logo from './assets/img/logo.png';
import profile from './assets/img/profile.jpg';
import { FaEye, FaAngleRight, FaAngleUp, FaHome, FaUserAlt, FaRegMoneyBillAlt, FaHistory } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <div class="content">

{/* Sidebar */}

      <div class="wrapper">
        <div class="sidebar">
            <div class="profile">
              <img src={logo} />
              <h3>Carl Johnson</h3>
              <p>Web Developer & Ethical Hacker</p>
              </div>
              <ul>

                <li>
                  <a href="#" class="active">
                    <span class="icon"><FaHome /></span>
                    <span class="item">Início</span>
                    </a>
                </li>

                <li>
                  <a href="#">
                    <span class="icon"><FaUserAlt /></span>
                    <span class="item">Seu perfil</span>
                    </a>
                </li>

                <li>
                  <a href="#">
                    <span class="icon"><FaRegMoneyBillAlt /></span>
                    <span class="item">Seu dinheiro</span>
                    </a>
                </li>

                <li>
                  <a href="#">
                    <span class="icon">< FaHistory/></span>
                    <span class="item">Atividades</span>
                    </a>
                </li>

              </ul>
          </div>
        </div>

{/* Finisth Sidebar */}

          <div class="menu-balance">
            <div id="balance-content">
              
              <span class="balance-information">

                <div class="profitability">
                  <p>Dinheiro rendendo disponível</p>
                  <a href="#" class="card-info">Seus dados</a>
                </div>
                        {/* Separando */}
                <div class="info-money">
                  <h4>R$ 100<span>00</span> <FaEye id="eye-it" /></h4>
                  <h6>R$ 100 a liberar</h6>
                </div>

                <div class="line-bottom"></div>

              </span>

              <div class="cdi">
                <h4>R$ 3,36 gerado no total</h4> 
                <a href="#" id="cdi-bttn"><FaAngleUp />100% CDI</a>     
                <FaAngleRight />              
                </div>
          
              <div class="line-bottom"></div>

              </div>
              <div class="buttons">
                <a href="#" id="bttn">Depositar dinheiro</a>
                <a href="#" id="bttn">Transferir dinheiro</a>
              </div>
            </div>

            <section id="extract">
              <div class="extract-infos">
                <div class="menu-header">
                  <h3>Seu histórico de atividades</h3>
                  </div>
                  <div class="search-menu">
                    <input placeholder="Buscar" class="input-search"/>
                    </div>
                  <div class="extract-menu">

                    <span id="payment">
                      <img src={logo} class="avatar_logo" />
                      <p>Você recebeu um pagamento de John Doe Marx</p>
                      <h4>R$50,00 <time>Segunda</time></h4>
                    </span>

                    <span id="payment">
                      <img src={logo} class="avatar_logo" />
                      <p>Você recebeu um pagamento de John Doe Marx</p>
                      <h4>R$50,00 <time>Segunda</time></h4>
                    </span>

                    <span id="payment">
                      <img src={logo} class="avatar_logo" />
                      <p>Você enviou um pagamento para Marta Kalinux</p>
                      <h4>- R$74,00 <time>Quinta</time></h4>
                    </span>

                    <span id="payment">
                      <img src={logo} class="avatar_logo" />
                      <p>Você comprou uma blusa na Blue Shop Online</p>
                      <h4>- R$89,99 <time>Sábado</time></h4>
                    </span>

                    </div>
                    {/* Footer */}
                </div>
            </section>
        </div>
    </div>
  );
}

export default App;
