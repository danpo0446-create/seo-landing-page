import PageLayout from "@/components/PageLayout";

const Privacy = () => (
  <PageLayout>
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 data-testid="privacy-title" className="text-3xl sm:text-4xl font-extrabold mb-8 text-white">Politica de Confidențialitate</h1>
      <p className="text-xs text-[#52525b] mb-8">Ultima actualizare: Ianuarie 2026</p>

      <div className="space-y-8 text-[#a1a1aa] text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-white mb-3">1. Introducere</h2>
          <p>SEO Phoenix Martech Assistance ("noi", "al nostru") respectă confidențialitatea datelor dumneavoastră. Această politică descrie modul în care colectăm, utilizăm și protejăm informațiile personale când utilizați platforma SEO Automation.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">2. Date Colectate</h2>
          <p>Colectăm următoarele tipuri de date:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong className="text-white">Date de înregistrare:</strong> nume, adresă email, parolă (criptată)</li>
            <li><strong className="text-white">Date de utilizare:</strong> articole generate, site-uri conectate, setări de automatizare</li>
            <li><strong className="text-white">Date tehnice:</strong> adresă IP, tip browser, pagini vizitate, timp petrecut</li>
            <li><strong className="text-white">Date de plată:</strong> procesate securizat prin furnizorul de plăți (nu stocăm datele cardului)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">3. Scopul Prelucrării</h2>
          <p>Utilizăm datele dumneavoastră pentru:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Furnizarea și îmbunătățirea Serviciului</li>
            <li>Procesarea plăților și gestionarea abonamentelor</li>
            <li>Trimiterea de notificări privind articolele publicate și rapoarte</li>
            <li>Comunicări de marketing (cu consimțământul dumneavoastră)</li>
            <li>Analiza utilizării pentru optimizarea platformei</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">4. Chei API și Date Terți</h2>
          <p>Cheile API pe care le furnizați (OpenAI, Google, Resend, etc.) sunt stocate criptat și utilizate exclusiv pentru funcționalitățile platformei. Nu partajăm aceste chei cu terți și nu le utilizăm în alte scopuri.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">5. Securitatea Datelor</h2>
          <p>Implementăm măsuri tehnice și organizatorice pentru protecția datelor, inclusiv:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Criptare SSL/TLS pentru toate conexiunile</li>
            <li>Criptare AES-256 pentru datele sensibile stocate</li>
            <li>Backup-uri regulate și plan de recuperare</li>
            <li>Acces restricționat pe bază de roluri</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">6. Drepturile Dumneavoastră (GDPR)</h2>
          <p>Conform Regulamentului General privind Protecția Datelor (GDPR), aveți dreptul la:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong className="text-white">Acces</strong> - să solicitați o copie a datelor dumneavoastră</li>
            <li><strong className="text-white">Rectificare</strong> - să corectați datele inexacte</li>
            <li><strong className="text-white">Ștergere</strong> - să solicitați ștergerea datelor ("dreptul de a fi uitat")</li>
            <li><strong className="text-white">Portabilitate</strong> - să primiți datele într-un format structurat</li>
            <li><strong className="text-white">Opoziție</strong> - să vă opuneți prelucrării datelor pentru marketing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">7. Cookie-uri</h2>
          <p>Utilizăm cookie-uri esențiale pentru funcționarea platformei și cookie-uri analitice pentru îmbunătățirea serviciului. Puteți gestiona preferințele cookie din setările browserului.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">8. Retenția Datelor</h2>
          <p>Păstrăm datele dumneavoastră atât timp cât aveți un cont activ. După închiderea contului, datele sunt șterse în termen de 30 de zile, cu excepția celor necesare din motive legale sau contabile.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">9. Contact DPO</h2>
          <p>Pentru exercitarea drepturilor sau întrebări privind confidențialitatea, contactați responsabilul cu protecția datelor: <a href="mailto:martechassistance@gmail.com" className="text-[#00D26A] hover:underline">martechassistance@gmail.com</a></p>
        </section>
      </div>
    </div>
  </PageLayout>
);

export default Privacy;
