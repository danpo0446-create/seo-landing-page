import PageLayout from "@/components/PageLayout";

const Terms = () => (
  <PageLayout>
    <div className="max-w-3xl mx-auto px-6 py-16 notranslate">
      <h1 data-testid="terms-title" className="text-3xl sm:text-4xl font-extrabold mb-8 text-white">Termeni și Condiții</h1>
      <p className="text-xs text-[#52525b] mb-8">Ultima actualizare: Ianuarie 2026</p>

      <div className="space-y-8 text-[#a1a1aa] text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-white mb-3">1. Acceptarea Termenilor</h2>
          <p>Prin accesarea și utilizarea platformei SEO Automation ("Serviciul"), operată de SEO Phoenix Martech Assistance, sunteți de acord cu acești Termeni și Condiții. Dacă nu sunteți de acord cu oricare dintre aceste condiții, vă rugăm să nu utilizați Serviciul.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">2. Descrierea Serviciului</h2>
          <p>SEO Automation este o platformă SaaS care oferă automatizarea conținutului SEO, publicare pe WordPress, cercetare cuvinte-cheie, management backlinks și monitorizare performanță. Serviciul utilizează inteligență artificială pentru generarea de conținut optimizat SEO.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">3. Contul de Utilizator</h2>
          <p>Pentru a utiliza Serviciul, trebuie să vă creați un cont. Sunteți responsabil pentru:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Menținerea confidențialității datelor de autentificare</li>
            <li>Toate activitățile desfășurate sub contul dumneavoastră</li>
            <li>Notificarea imediată a oricărui acces neautorizat</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">4. Abonamente și Plăți</h2>
          <p>Serviciul oferă mai multe planuri de abonament (Starter, Pro, Agency). Prețurile sunt afișate în EUR și nu includ TVA. Abonamentele se reînnoiesc automat la sfârșitul fiecărei perioade de facturare. Puteți anula oricând, iar accesul va continua până la sfârșitul perioadei plătite.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">5. Perioada de Probă</h2>
          <p>Oferim o perioadă de probă gratuită de 7 zile pentru toate planurile, fără a fi necesar un card de credit. La sfârșitul perioadei de probă, contul va fi dezactivat dacă nu alegeți un plan plătit.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">6. Chei API și Costuri Externe</h2>
          <p>Platforma funcționează cu cheile dumneavoastră API proprii (OpenAI, Resend, etc.). Costurile asociate utilizării acestor API-uri sunt responsabilitatea dumneavoastră și sunt plătite direct furnizorilor. Costurile extra estimate: €1-10/lună.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">7. Proprietate Intelectuală</h2>
          <p>Conținutul generat prin platformă vă aparține integral. SEO Automation nu revendică niciun drept asupra articolelor sau materialelor create prin Serviciu. Platforma în sine, inclusiv codul sursă și designul, rămâne proprietatea SEO Phoenix Martech Assistance.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">8. Limitarea Răspunderii</h2>
          <p>Serviciul este furnizat "așa cum este". Nu garantăm rezultate specifice în ceea ce privește clasamentul în motoarele de căutare sau traficul organic. SEO Phoenix Martech Assistance nu va fi răspunzătoare pentru daune indirecte, speciale sau consecvențiale.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">9. Modificări ale Termenilor</h2>
          <p>Ne rezervăm dreptul de a modifica acești termeni în orice moment. Modificările vor fi comunicate prin email și/sau prin notificări în platformă cu cel puțin 30 de zile înainte de intrarea în vigoare.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">10. Contact</h2>
          <p>Pentru orice întrebări legate de acești Termeni și Condiții, ne puteți contacta la adresa de email: <a href="mailto:martechassistance@gmail.com" className="text-[#00D26A] hover:underline">martechassistance@gmail.com</a></p>
        </section>
      </div>
    </div>
  </PageLayout>
);

export default Terms;
