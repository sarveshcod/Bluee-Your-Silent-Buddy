
import './App.css'

function App() {
  return (
    <main className="blue-app">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mascot">🐙</div>
          <div>
            <h2>Blue</h2>
            <p>Your Silent Buddy</p>
          </div>
        </div>
        <button className="heart-button" aria-label="Favourite">
          ♡
        </button>
      </header>

      <section className="welcome">
        <div className="welcome-content">
          <span className="eyebrow">A LITTLE SPACE JUST FOR YOU</span>

          <h1>
            Hey there,
            <br />
            <span>I'm Blue.</span>
          </h1>

          <p>
            You don't have to pretend here.
            You can laugh, talk, be quiet,
            or simply be yourself.
          </p>

          <button className="start-button">
            Come talk to me <span>→</span>
          </button>
        </div>

        <div className="mascot-area">
          <div className="soft-circle"></div>
          <div className="mascot">🐙</div>
          <div className="mascot-caption">
            <span>♡</span> Right here with you.
          </div>
        </div>
      </section>

      <section className="little-note">
        <span className="note-icon">☁</span>
        <p>
          You don't have to be happy to be here.
          <br />
          <strong>I'm just happy you're here.</strong>
        </p>
      </section>

      <footer>
        Made with a little love <span>♡</span>
      </footer>
    </main>
  )
}

export default App
