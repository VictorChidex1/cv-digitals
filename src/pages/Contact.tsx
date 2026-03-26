import { ContactHero } from '../components/contact/ContactHero';
import { ContactTerminal } from '../components/contact/ContactTerminal';

export default function Contact() {
  return (
    <main className="w-full bg-slate-950 min-h-screen">
       <ContactHero />
       <ContactTerminal />
    </main>
  );
}
