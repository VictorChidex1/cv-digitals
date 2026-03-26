import { AboutHero } from '../components/about/AboutHero';
import { AboutBio } from '../components/about/AboutBio';
import { AboutPhilosophy } from '../components/about/AboutPhilosophy';
import { AboutStack } from '../components/about/AboutStack';
import { CTA } from '../components/home/CTA';

export default function About() {
  return (
    <main className="w-full bg-slate-950 min-h-screen">
       <AboutHero />
       <AboutBio />
       <AboutPhilosophy />
       <AboutStack />
       <CTA />
    </main>
  );
}
