import './App.css';
import logo from './images/logo.png';
import avatar from './images/avatar.png';
import shelf from './images/last_block.png';
import book1 from './images/1-book.png';
import book2 from './images/2-book.png';
import book3 from './images/3-book.png';
import book4 from './images/4-book.png';

function App() {
  return (
    <div className="page">
      <div className="top">
          <header className="header">
            <div className="brand">
              <img src={logo} alt="logo" />
              <div>
                NETH<br />BOOKPOINT
              </div>
            </div>

            <nav className="nav">
              <span>Home</span>
              <span>About</span>
              <span>Shop</span>
              <span>Delivery Team</span>
              <span>Sellers</span>
            </nav>

            <div className="user">
              <span className="bell">🔔</span>
              <img src={avatar} alt="user" />
              <span>user@bookpoint.com</span>
            </div>
          </header>

          <div className="hero">
            <h1>The Book Lover's Dreamland Awaits!</h1>
            <p>
              Welcome to the ultimate book lover's paradise! Join our community and contribute to the ever-
              evolving library of stories, where every book has a chance to inspire someone new.
            </p>
            <div className="search">
              <input type="text" placeholder="Search a Book" />
              <button type="button">Search</button>
            </div>
          </div>
      </div>

      <section className="picks">
        <h2>Our Best Picks</h2>

        <div className="books">
          <div className="book">
            <div className="cover">
              <img src={book1} alt="Thunmanhandiya" />
              <button type="button" className="cart">🛒</button>
            </div>
            <h3>Thunmanhandiya</h3>
            <p>Mahagamasekara</p>
          </div>

          <div className="book">
            <div className="cover">
              <img src={book2} alt="Gamperaliya" />
              <button type="button" className="cart">🛒</button>
            </div>
            <h3>Gamperaliya</h3>
            <p>Martin Wickramasinghe</p>
          </div>

          <div className="book">
            <div className="cover">
              <img src={book3} alt="Nectar in a Sieve" />
              <button type="button" className="cart">🛒</button>
            </div>
            <h3>Nectar in a Sieve</h3>
            <p>Kamala Markandaya</p>
          </div>

          <div className="book">
            <div className="cover">
              <img src={book4} alt="Adaraneeya Victoria" />
              <button type="button" className="cart">🛒</button>
            </div>
            <h3>Adaraneeya Victoria</h3>
            <p>Mohan Raj Madawala</p>
          </div>
        </div>

        <div className="dots">
          <span></span>
          <span className="active"></span>
          <span></span>
        </div>
      </section>

      <section className="bottom">
        <img className="shelf" src={shelf} alt="Find magic within the pages" />

      
      </section>
    </div>
  );
}

export default App;
