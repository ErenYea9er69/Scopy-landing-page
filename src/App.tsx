import Header from './components/Header';
import Background from './components/Background';
import Hero from './components/Hero';

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;