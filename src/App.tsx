import Header from './components/Header';
import Background from './components/Background';
import Hero from './components/Hero';

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      {/* Content wrapper to ensure it renders above the background */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
        </main>
      </div>
    </div>
  );
}

export default App;