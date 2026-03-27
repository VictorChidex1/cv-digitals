import { PrivacyHero } from '../components/privacy/PrivacyHero';
import { PrivacyContent } from '../components/privacy/PrivacyContent';

export default function Privacy() {
  return (
    <main className="w-full bg-slate-950 min-h-screen">
       <PrivacyHero />
       <PrivacyContent />
    </main>
  );
}
