import React, { useEffect, useState } from "react";

export default function BullCoinLanding() {
  const [timeLeft, setTimeLeft] = useState({});
  const [language, setLanguage] = useState('pt');

  const translations = {
    pt: {
      title: 'O touro acordou.',
      subtitle: 'A nova era do mercado começou.',
      cta: 'Investir Agora',
      message: 'Você não precisa mudar tudo. Às vezes, $10 mudam tudo.',
      roadmap: 'Roteiro do Projeto',
      tokenomics: 'Tokenomics',
    },
    en: {
      title: 'The bull has awakened.',
      subtitle: 'A new market era has begun.',
      cta: 'Invest Now',
      message: "You don't need to change everything. Sometimes, $10 change it all.",
      roadmap: 'Project Roadmap',
      tokenomics: 'Tokenomics',
    }
  };

  useEffect(() => {
    const userLang = navigator.language.startsWith('pt') ? 'pt' : 'en';
    setLanguage(userLang);

    const launchDate = new Date("2025-05-01T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = launchDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const t = translations[language];

  return (
    <div
      className="bg-cover bg-center min-h-screen text-white font-sans"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="bg-black/70 min-h-screen">
        <header className="text-center py-12 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-400">{t.title}</h1>
          <p className="text-xl md:text-2xl mt-4 text-gray-200">{t.subtitle}</p>
          <p className="mt-6 text-lg text-gray-300">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </p>
          <a href="#" className="inline-block mt-8 px-6 py-3 bg-cyan-400 text-black font-bold rounded-xl hover:bg-cyan-300 transition">
            {t.cta}
          </a>
        </header>

        <section className="max-w-3xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-semibold text-white mb-6">{t.message}</h2>
        </section>

        <section className="bg-gray-900 py-12 px-4 text-center">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">{t.tokenomics}</h2>
          <div className="text-gray-200 space-y-2">
            <p>Total Supply: 1.000.000.000 BULL</p>
            <p>1% Burn • 2% Marketing • 1% Dev</p>
          </div>
        </section>

        <footer className="py-12 px-4 text-center text-sm text-gray-500 bg-black/90">
          &copy; {new Date().getFullYear()} Bull Coin – bullcoin.exchange
          <p className="mt-2">management@bullcoin.exchange</p>
        </footer>
      </div>
    </div>
  );
}
