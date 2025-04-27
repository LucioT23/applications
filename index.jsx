import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a1929] text-white">
      <div className="flex flex-col items-center justify-center gap-8 p-4 text-center">
        <h1 className="text-5xl font-bold text-[#e9c46a]">Goose & You</h1>
        <h2 className="text-2xl">Jeu Érotique pour Couples</h2>
        
        <a href="game.html" className="mt-8">
          <Button className="bg-[#e9c46a] text-[#0a1929] hover:bg-[#f1c75f] px-8 py-6 text-xl font-semibold">
            Commencer l'Aventure
          </Button>
        </a>
      </div>
    </main>
  );
}
