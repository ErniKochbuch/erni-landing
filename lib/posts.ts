export type Block =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'tip'; text: string }
  | { type: 'cta'; text: string; href: string; label: string };

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: Block[];
};

const h2 = (text: string): Block => ({ type: 'h2', text });
const p = (text: string): Block => ({ type: 'p', text });
const ul = (...items: string[]): Block => ({ type: 'ul', items });
const tip = (text: string): Block => ({ type: 'tip', text });
const cta = (text: string, href: string, label: string): Block => ({
  type: 'cta',
  text,
  href,
  label,
});

export const posts: Post[] = [
  {
    slug: 'was-kochen-bei-hitze',
    title: 'Was kochen bei Hitze? 15 leichte Ideen für heiße Tage',
    category: 'Saisonal',
    date: 'Juli 2026',
    excerpt:
      'Wenn es draußen brütet, soll das Essen erfrischen statt beschweren. Diese leichten Gerichte gelingen mit wenig oder ganz ohne Herd.',
    content: [
      p(
        `Bei 30 Grad hat kaum jemand Lust, stundenlang am heißen Herd zu stehen. Die gute Nachricht: Gerade im Sommer schmeckt einfaches Essen am besten. Wasserreiche Zutaten wie Tomate, Gurke, Zucchini und Melone kühlen von innen und sind schnell zubereitet.`
      ),
      h2('Kalt und ohne Kochen'),
      p(
        `Kalte Suppen sind der Klassiker für heiße Tage: Gazpacho aus Tomate und Paprika, eine kühle Gurkensuppe oder eine fruchtige Melonensuppe brauchen nur einen Mixer. Dazu passen große Salate, Wraps und Sommerrollen aus Reispapier.`
      ),
      ul(
        'Gazpacho oder kalte Gurkensuppe',
        'Bunter Salat mit Feta, Melone und Minze',
        'Sommerrollen mit Gemüse und Erdnusssauce',
        'Caprese mit Tomate, Mozzarella und Basilikum',
        'Wraps mit Hummus und knackigem Gemüse'
      ),
      h2('Lauwarm statt heiß'),
      p(
        `Lauwarme Gerichte verträgt der Körper bei Hitze oft besser als sehr heißes Essen. Pasta al limone, ein schnelles Ratatouille oder gebratene Zucchini mit Zitrone sind in 20 Minuten fertig – am besten früh oder spät gekocht, wenn es kühler ist.`
      ),
      tip(
        `Koch bei Hitze abends vor und iss die Reste am nächsten Tag kalt. Das spart Energie und du hast bei 35 Grad garantiert keine Lust mehr, groß zu kochen.`
      ),
      cta(
        `Keine Idee, was ins kühle Sommergericht passt? Frag einfach Erni – der KI-Coach schlägt dir passende Rezepte nach Wetter, Vorräten und Lust vor.`,
        '/features/ai-coach',
        'KI-Coach entdecken'
      ),
    ],
  },
  {
    slug: 'wochenplanung-vereinfachen',
    title: 'Wochenplanung leicht gemacht: in 15 Minuten die ganze Woche planen',
    category: 'Meal Prep',
    date: 'Juli 2026',
    excerpt:
      'Wer die Woche plant, spart Zeit, Geld und den täglichen Was-koche-ich-Stress. So baust du dir eine Routine, die wirklich hält.',
    content: [
      p(
        `Die tägliche Frage „Was koche ich heute?" kostet mehr Nerven als das Kochen selbst. Ein grober Wochenplan nimmt genau diesen Stress raus – und du kaufst gezielter ein, wirfst weniger weg und sparst bares Geld.`
      ),
      h2('Der 15-Minuten-Plan'),
      p(
        `Nimm dir einmal pro Woche einen festen Moment, zum Beispiel Sonntagabend. Geh in drei Schritten vor:`
      ),
      ul(
        'Termine checken: An welchen Tagen bleibt wenig Zeit? Dort schnelle Gerichte einplanen.',
        'Vorräte sichten: Was muss weg? Danach die ersten Rezepte auswählen.',
        'Reste einplanen: Koch bewusst für zwei Tage – einmal kochen, zweimal essen.'
      ),
      h2('Nicht jeden Tag verplanen'),
      p(
        `Plane bewusst nur fünf statt sieben Tage. Ein bis zwei offene Tage fangen Spontanes ab – Reste, ein Restaurantbesuch oder einfach Appetit auf etwas anderes. So bleibt der Plan realistisch und du hältst ihn wirklich durch.`
      ),
      tip(
        `Bau dir eine kleine Liste aus 10 bis 15 Lieblingsgerichten, die immer funktionieren. Aus diesem Baukasten ist ein Wochenplan in Minuten zusammengesteckt.`
      ),
      cta(
        `Erni übernimmt die Planung für dich: passend zu Saison, deiner Zeit und der Personenzahl – inklusive automatischer Einkaufsliste.`,
        '/features/wochenplaner',
        'Wochenplaner ansehen'
      ),
    ],
  },
  {
    slug: 'rezepte-ordnen',
    title: 'Rezepte ordnen: so bringst du Struktur in deine Sammlung',
    category: 'Organisation',
    date: 'Juni 2026',
    excerpt:
      'Zettel, Screenshots, Kochbücher, Lesezeichen – die meisten Rezepte liegen überall verstreut. So findest du jedes Gericht in Sekunden wieder.',
    content: [
      p(
        `Kennst du das? Das perfekte Rezept ist irgendwo – nur wo? Auf einem Zettel in der Schublade, als Screenshot im Handy, in einem von zehn Kochbüchern. Wer seine Rezepte ordnet, kocht entspannter und abwechslungsreicher.`
      ),
      h2('Ein Ort für alles'),
      p(
        `Der wichtigste Schritt: Sammle alles an einem einzigen Ort statt an fünf. Ob Zettel, Buchseite oder Web-Link – wenn alles in derselben Sammlung landet, musst du nie wieder suchen.`
      ),
      h2('Sinnvoll kategorisieren'),
      p(
        `Ordne nicht zu kleinteilig. Bewährte Kategorien für den Alltag:`
      ),
      ul(
        'Nach Gang: Frühstück, Hauptgericht, Dessert, Snack',
        'Nach Anlass: Schnell unter der Woche, Wochenende, Gäste',
        'Nach Küche: Italienisch, Asiatisch, Deutsch',
        'Favoriten: alles, was du wirklich immer wieder kochst'
      ),
      tip(
        `Eine gute Volltextsuche schlägt jede noch so feine Kategorie. Wenn du „Zitrone" eintippen und sofort jedes passende Rezept sehen kannst, sparst du dir kompliziertes Einsortieren.`
      ),
      cta(
        `In Erni landen gescannte, gespeicherte und selbst eingetragene Rezepte automatisch sortiert an einem Ort – mit Kategorien, Favoriten und schneller Suche.`,
        '/features/kochbuch',
        'Digitales Kochbuch ansehen'
      ),
    ],
  },
  {
    slug: 'was-koche-ich-heute',
    title: 'Was koche ich heute? 7 Wege gegen die tägliche Ratlosigkeit',
    category: 'Tipps & Tricks',
    date: 'Juni 2026',
    excerpt:
      'Jeden Tag dieselbe Frage – und jeden Tag dieselbe Leere im Kopf. Mit diesen Methoden fällt die Entscheidung leicht.',
    content: [
      p(
        `„Was koche ich heute?" ist eine der meistgestellten Fragen im Alltag. Das Problem ist selten fehlende Auswahl, sondern zu viel davon. Wer die Entscheidung strukturiert, kocht schneller und entspannter.`
      ),
      h2('7 einfache Methoden'),
      ul(
        'Wochentag-Prinzip: fester Themen-Tag, z. B. Pasta-Montag, Suppen-Dienstag.',
        'Vom Kühlschrank aus denken: erst schauen, was da ist, dann entscheiden.',
        'Lieblingsliste: 15 sichere Gerichte notieren und daraus wählen.',
        'Saison nutzen: was gerade frisch ist, schmeckt und ist günstig.',
        'Reste-Tag einplanen: einmal pro Woche wird aufgeräumt statt gekocht.',
        'Zeitbudget zuerst: erst festlegen, wie viel Zeit du hast, dann das Rezept.',
        'Frag einfach nach: lass dir Vorschläge machen statt selbst zu grübeln.'
      ),
      tip(
        `Entscheide schon morgens, was es abends gibt. Dann kannst du unterwegs die letzte Zutat besorgen und stehst abends nicht ratlos vor dem offenen Kühlschrank.`
      ),
      cta(
        `Erni beantwortet die Frage für dich: Sag, worauf du Lust hast oder was noch da ist – und bekomm sofort passende Rezeptideen.`,
        '/features/ai-coach',
        'KI-Coach fragen'
      ),
    ],
  },
  {
    slug: 'kochbuch-digitalisieren',
    title: 'Kochbuch digitalisieren: Lieblingsrezepte ohne Abtippen sichern',
    category: 'Anleitung',
    date: 'Juni 2026',
    excerpt:
      'Vergilbte Seiten, handschriftliche Notizen, geliehene Bücher – so überführst du deine Lieblingsrezepte einfach ins Digitale.',
    content: [
      p(
        `Die besten Rezepte stehen oft in alten Kochbüchern oder auf handgeschriebenen Zetteln – genau dort, wo sie schnell verloren gehen. Digitalisieren heißt: einmal sichern, für immer griffbereit, auf jedem Gerät.`
      ),
      h2('Warum überhaupt digitalisieren?'),
      ul(
        'Nichts geht mehr verloren, auch wenn der Zettel verschwindet.',
        'Du hast alle Rezepte unterwegs beim Einkaufen dabei.',
        'Suchen statt blättern – jedes Gericht in Sekunden.',
        'Teilen mit Familie und Freunden per Link.'
      ),
      h2('Der schnellste Weg: scannen'),
      p(
        `Statt jedes Rezept abzutippen, fotografierst du die Seite einfach ab. Moderne Erkennung liest Titel, Zutaten und Zubereitung aus und legt alles strukturiert ab. Am besten klappt das bei gutem Licht, scharfem Foto und klar gedrucktem Text.`
      ),
      tip(
        `Digitalisiere zuerst die zehn Rezepte, die du wirklich am häufigsten kochst. Der Rest kann nach und nach folgen – so ist der Nutzen sofort spürbar.`
      ),
      cta(
        `Mit Erni fotografierst du eine Kochbuchseite und hast das Rezept Sekunden später sauber im digitalen Kochbuch.`,
        '/features/rezepte-scannen',
        'Rezepte scannen ansehen'
      ),
    ],
  },
  {
    slug: 'meal-prep-anfaenger',
    title: 'Meal Prep für Anfänger: der einfache Einstieg',
    category: 'Meal Prep',
    date: 'Mai 2026',
    excerpt:
      'Vorkochen spart unter der Woche Zeit und Geld – ganz ohne komplizierte Systeme. So startest du entspannt.',
    content: [
      p(
        `Meal Prep klingt nach Fitness-Influencern mit zwölf identischen Boxen. Muss es aber nicht sein. Im Kern heißt es einfach: einmal vorbereiten, mehrmals essen. Schon zwei vorgekochte Tage machen die Woche spürbar leichter.`
      ),
      h2('So fängst du an'),
      ul(
        'Klein starten: bereite erst mal nur zwei Tage vor, nicht die ganze Woche.',
        'Komponenten statt fertiger Gerichte: Getreide, Gemüse und Protein getrennt kochen und flexibel kombinieren.',
        'Auf Vielseitiges setzen: Ofengemüse, Reis, Hähnchen oder Linsen passen zu vielem.',
        'Richtig lagern: luftdicht im Kühlschrank hält vieles 3 bis 4 Tage.'
      ),
      h2('Die passende Einkaufsliste'),
      p(
        `Meal Prep steht und fällt mit dem Einkauf. Plane deine zwei bis drei Gerichte, schreib alle Zutaten zusammen auf eine Liste und kauf einmal gezielt ein – das verhindert Spontankäufe und Lebensmittelabfall.`
      ),
      tip(
        `Sonntag ist beliebt zum Vorkochen, muss aber nicht sein. Wähl den Tag, an dem du sowieso am meisten Zeit hast – Hauptsache, es wird zur Routine.`
      ),
      cta(
        `Erni plant deine Woche und fasst alle Zutaten automatisch zu einer Einkaufsliste zusammen – ideal fürs Vorkochen.`,
        '/features/wochenplaner',
        'Wochenplaner ansehen'
      ),
    ],
  },
  {
    slug: 'reste-verwerten',
    title: 'Reste verwerten: aus wenig ein gutes Gericht zaubern',
    category: 'Nachhaltigkeit',
    date: 'Mai 2026',
    excerpt:
      'In deutschen Haushalten landet viel zu viel Essen im Müll. Mit ein paar Grundprinzipien wird aus Resten schnell etwas Leckeres.',
    content: [
      p(
        `Ein halber Paprika, gekochte Nudeln von gestern, ein Rest Sahne – solche Reste landen oft im Müll, obwohl daraus mit wenig Aufwand ein vollwertiges Gericht wird. Reste verwerten spart Geld und schont die Umwelt.`
      ),
      h2('Gerichte, die (fast) alles vertragen'),
      ul(
        'Bratreis oder gebratene Nudeln: Reste-Gemüse, Ei, etwas Sojasauce – fertig.',
        'Frittata oder Omelett: perfekt für Gemüsereste und harten Käse.',
        'Suppe oder Eintopf: alles klein schneiden, aufkochen, würzen.',
        'Bowl: Getreide-Rest, Gemüse, Protein und eine schnelle Sauce.',
        'Auflauf: Reste schichten, mit Käse überbacken.'
      ),
      h2('Richtig lagern hilft'),
      p(
        `Vieles hält länger, als man denkt – vorausgesetzt, es wird luftdicht und kühl gelagert. Ein kurzer Blick in Kühlschrank und Vorrat vor dem Einkauf verhindert, dass Dinge doppelt gekauft werden und verderben.`
      ),
      tip(
        `Leg dir im Kühlschrank ein „Muss weg"-Fach an. Alles, was bald verbraucht werden sollte, kommt dorthin – so gerät nichts in Vergessenheit.`
      ),
      cta(
        `Sag Erni, welche Reste du hast, und lass dir passende Rezepte vorschlagen – so wird aus dem Rest ein richtiges Essen.`,
        '/features/ai-coach',
        'KI-Coach fragen'
      ),
    ],
  },
  {
    slug: 'einkaufsliste-erstellen',
    title: 'Die Einkaufsliste, die wirklich funktioniert',
    category: 'Organisation',
    date: 'Mai 2026',
    excerpt:
      'Ohne Liste kauft man zu viel, zu teuer und vergisst trotzdem das Wichtigste. So schreibst du Listen, die den Einkauf schneller machen.',
    content: [
      p(
        `Wer ohne Liste einkauft, gibt im Schnitt mehr aus, kauft spontan Unnötiges und steht zu Hause trotzdem ohne die eine wichtige Zutat da. Eine gute Einkaufsliste ist der einfachste Hebel für weniger Stress und weniger Kosten.`
      ),
      h2('Nach Sortiment sortieren'),
      p(
        `Der größte Zeitfresser im Supermarkt ist das Hin- und Herlaufen. Sortiere deine Liste nach Bereichen – dann arbeitest du sie in einem Rutsch ab:`
      ),
      ul(
        'Obst & Gemüse',
        'Kühlregal: Milchprodukte, Fleisch, Fisch',
        'Trockenwaren: Nudeln, Reis, Konserven',
        'Tiefkühl',
        'Sonstiges: Haushalt, Getränke'
      ),
      h2('Aus Rezepten ableiten'),
      p(
        `Die zuverlässigste Liste entsteht direkt aus deinem Wochenplan: Jede Zutat aus jedem geplanten Rezept kommt auf die Liste. So vergisst du nichts und kaufst nur, was du wirklich brauchst.`
      ),
      tip(
        `Führe eine dauerhafte Liste für Grundvorräte, die einfach abhakbar ist. Geht das Olivenöl zur Neige, wird es sofort ergänzt statt erst im leeren Moment bemerkt.`
      ),
      cta(
        `Erni erstellt die Einkaufsliste automatisch aus deinem Wochenplan – nach Kategorien sortiert und per WhatsApp teilbar.`,
        '/features/wochenplaner',
        'Wochenplaner ansehen'
      ),
    ],
  },
  {
    slug: 'omas-rezepte-bewahren',
    title: 'Omas Rezepte bewahren: Familienrezepte digital weitergeben',
    category: 'Geschichten',
    date: 'April 2026',
    excerpt:
      'Handgeschriebene Familienrezepte sind ein Schatz – und leider vergänglich. So sicherst du sie für die nächste Generation.',
    content: [
      p(
        `Der Sonntagskuchen von Oma, das Gulasch nach Familienrezept – solche Gerichte tragen Erinnerungen. Oft existieren sie aber nur auf einem einzigen vergilbten Zettel, der verblasst oder verloren geht. Digitalisieren bewahrt sie für immer.`
      ),
      h2('Warum jetzt der richtige Zeitpunkt ist'),
      ul(
        'Handschrift verblasst, Papier vergilbt und reißt.',
        'Rezepte im Kopf gehen verloren, wenn sie niemand aufschreibt.',
        'Digital lassen sich Rezepte mühelos mit der ganzen Familie teilen.'
      ),
      h2('So gehst du vor'),
      p(
        `Fotografiere die handgeschriebenen Zettel ab und übertrage sie ins Digitale. Handschrift ist für die automatische Erkennung anspruchsvoller als Druck – dann ergänzt du fehlende Stellen einfach von Hand. Wichtig ist, den Wortlaut und die kleinen Notizen am Rand mitzunehmen, denn genau die machen ein Familienrezept aus.`
      ),
      tip(
        `Schreib zu jedem Rezept eine kurze Notiz: Von wem stammt es, wann gab es das Gericht? Diese Geschichten sind später oft wertvoller als das Rezept selbst.`
      ),
      cta(
        `In Erni bewahrst du alle Familienrezepte an einem Ort und gibst sie mit einem Link an Kinder und Enkel weiter.`,
        '/features/kochbuch',
        'Digitales Kochbuch ansehen'
      ),
    ],
  },
  {
    slug: 'schnelle-feierabendkueche',
    title: 'Schnelle Feierabendküche: gute Gerichte unter 30 Minuten',
    category: 'Tipps & Tricks',
    date: 'April 2026',
    excerpt:
      'Nach der Arbeit fehlt oft Zeit und Energie. Mit der richtigen Strategie steht trotzdem in einer halben Stunde ein gutes Essen auf dem Tisch.',
    content: [
      p(
        `Feierabend, Hunger, wenig Zeit – die Kombination endet oft bei Lieferdienst oder Tiefkühlpizza. Dabei gelingen viele richtig gute Gerichte in unter 30 Minuten, wenn ein paar Dinge stimmen.`
      ),
      h2('Das Prinzip schneller Küche'),
      ul(
        'Ein-Topf-Gerichte: weniger Abwasch, weniger Aufwand.',
        'Schnelle Sattmacher: Pasta, Gnocchi, Couscous und Eier sind in Minuten gar.',
        'Vorräte nutzen: Konserven wie Tomaten, Kichererbsen und Kokosmilch sind Retter.',
        'Parallel arbeiten: während die Nudeln kochen, die Sauce vorbereiten.'
      ),
      h2('Immer griffbereit im Vorrat'),
      p(
        `Wer ein paar Basics daheim hat, kann fast immer schnell etwas zaubern: Pasta, passierte Tomaten, Zwiebeln, Knoblauch, Eier, Käse und Tiefkühlgemüse reichen für Dutzende schnelle Gerichte.`
      ),
      tip(
        `Halte dir drei bis fünf 20-Minuten-Rezepte parat, die du blind beherrschst. An stressigen Tagen musst du dann nicht überlegen, sondern nur loskochen.`
      ),
      cta(
        `Sag Erni, wie viel Zeit du hast – der KI-Coach schlägt dir Gerichte vor, die genau in dein Zeitfenster passen.`,
        '/features/ai-coach',
        'KI-Coach fragen'
      ),
    ],
  },
  {
    slug: 'guenstig-kochen',
    title: 'Günstig kochen: lecker essen mit kleinem Budget',
    category: 'Ernährung',
    date: 'April 2026',
    excerpt:
      'Gutes Essen muss nicht teuer sein. Mit ein paar Prinzipien kochst du günstig, ohne dass es nach Verzicht schmeckt.',
    content: [
      p(
        `Steigende Lebensmittelpreise treffen jeden. Die gute Nachricht: Viele der günstigsten Zutaten sind zugleich die gesündesten und vielseitigsten. Wer clever plant und einkauft, spart deutlich – bei vollem Geschmack.`
      ),
      h2('Günstige Basics, die satt machen'),
      ul(
        'Hülsenfrüchte: Linsen, Bohnen und Kichererbsen liefern viel Protein für wenig Geld.',
        'Kartoffeln, Reis und Nudeln als sättigende Grundlage.',
        'Saisonales Gemüse ist frischer und billiger als importiertes.',
        'Tiefkühlgemüse: preiswert, lange haltbar und nährstoffreich.',
        'Eier als günstige Eiweißquelle für unzählige Gerichte.'
      ),
      h2('So sparst du beim Einkauf'),
      p(
        `Plane deine Woche und kaufe mit Liste – das ist der wirksamste Spartrick überhaupt. Koche bewusst für zwei Tage, nutze Reste und greife zu Eigenmarken. Und geh nie hungrig einkaufen, sonst wandert zu viel Spontanes in den Wagen.`
      ),
      tip(
        `Rechne den Preis pro Portion statt pro Packung. Der große Sack Linsen wirkt teurer, ist pro Mahlzeit aber oft ein Bruchteil einer Fertigmahlzeit.`
      ),
      cta(
        `Erni plant deine Woche und bündelt alle Zutaten zu einer Liste – so kaufst du gezielt und wirfst weniger weg.`,
        '/features/wochenplaner',
        'Wochenplaner ansehen'
      ),
    ],
  },
  {
    slug: 'saisonkalender-gemuese-obst',
    title: 'Saisonkalender: was hat wann Saison?',
    category: 'Saisonal',
    date: 'März 2026',
    excerpt:
      'Saisonal einzukaufen schmeckt besser, ist günstiger und umweltfreundlicher. Ein Überblick, wann welches Obst und Gemüse frisch ist.',
    content: [
      p(
        `Erdbeeren im Dezember und Spargel das ganze Jahr – im Supermarkt scheint alles immer verfügbar. Doch saisonales Gemüse und Obst aus der Region schmeckt intensiver, kostet weniger und hat eine bessere Umweltbilanz.`
      ),
      h2('Grober Saison-Überblick'),
      ul(
        'Frühling: Spargel, Radieschen, Bärlauch, Rhabarber, Salate.',
        'Sommer: Tomaten, Zucchini, Beeren, Paprika, Gurke, Kirschen.',
        'Herbst: Kürbis, Kohl, Äpfel, Birnen, Pilze, Pastinaken.',
        'Winter: Lagergemüse wie Rote Bete, Sellerie, Grünkohl, Feldsalat.'
      ),
      h2('Warum sich Saison lohnt'),
      p(
        `Saisonware wird reif geerntet statt lange transportiert – das schmeckt man. Gleichzeitig ist sie günstiger, weil das Angebot groß ist. Und sie bringt Abwechslung: Wer nach Saison kocht, isst automatisch vielfältiger übers Jahr.`
      ),
      tip(
        `Orientiere deinen Wochenplan an ein bis zwei Saison-Zutaten. Wenn Kürbis gerade günstig ist, plane zwei Gerichte damit – so nutzt du die ganze Frucht.`
      ),
      cta(
        `Erni bezieht die Saison automatisch in die Wochenplanung ein und schlägt passende Gerichte vor.`,
        '/features/wochenplaner',
        'Wochenplaner ansehen'
      ),
    ],
  },
  {
    slug: 'rezepte-aus-dem-internet-sammeln',
    title: 'Rezepte aus dem Internet sammeln und wiederfinden',
    category: 'Organisation',
    date: 'März 2026',
    excerpt:
      'Screenshots, offene Tabs, gespeicherte Reels – Online-Rezepte gehen schnell unter. So sammelst du sie so, dass du sie auch wiederfindest.',
    content: [
      p(
        `Ein tolles Rezept auf Instagram, ein Blog-Link im Chat, ein Screenshot vom Handy der Freundin: Online-Rezepte sammeln sich blitzschnell an – und verschwinden genauso schnell im digitalen Nirwana.`
      ),
      h2('Das Problem mit Screenshots'),
      p(
        `Screenshots landen ungeordnet in der Galerie zwischen Urlaubsfotos. Gespeicherte Reels sind ohne Zutatenliste kaum kochbar. Lesezeichen-Ordner werden nie wieder geöffnet. Das eigentliche Rezept ist zwar irgendwo gespeichert, aber praktisch verloren.`
      ),
      h2('So sammelst du sinnvoll'),
      ul(
        'Einen festen Ort wählen, an dem alle Online-Rezepte landen.',
        'Beim Speichern gleich Titel und Kategorie vergeben.',
        'Links in echte, strukturierte Rezepte umwandeln statt nur zu bookmarken.',
        'Auf gute Suche setzen, damit du per Stichwort alles wiederfindest.'
      ),
      tip(
        `Wandle einen Rezept-Link direkt in ein strukturiertes Rezept mit Zutatenliste um. Dann kannst du beim Kochen abhaken, statt durch ein Video zu scrollen.`
      ),
      cta(
        `Erni übernimmt Rezepte per Foto, Web-Link oder manuell und legt sie einheitlich strukturiert ab – durchsuchbar an einem Ort.`,
        '/features/rezepte-scannen',
        'Rezepte erfassen ansehen'
      ),
    ],
  },
  {
    slug: 'gesund-kochen-alltag',
    title: 'Gesund kochen im Alltag: einfache Gewohnheiten statt Diät',
    category: 'Ernährung',
    date: 'März 2026',
    excerpt:
      'Gesunde Ernährung scheitert selten am Wissen, sondern am Alltag. Diese kleinen Gewohnheiten sind leichter durchzuhalten als jede Diät.',
    content: [
      p(
        `Gesund essen klingt einfach, scheitert aber oft an Zeit, Stress und fehlender Planung. Der Schlüssel liegt nicht in strengen Diäten, sondern in kleinen Gewohnheiten, die sich mühelos in den Alltag einfügen.`
      ),
      h2('Kleine Stellschrauben mit großer Wirkung'),
      ul(
        'Die halbe Teller-Regel: eine Hälfte Gemüse, der Rest Protein und Beilage.',
        'Selbst kochen statt fertig: du weißt, was drin ist, und sparst nebenbei.',
        'Vorkochen: gesund ist am einfachsten, wenn schon etwas Gutes bereitsteht.',
        'Wasser statt Softdrinks als Standard.',
        'Vollkorn statt hell, wo es sich anbietet.'
      ),
      h2('Planung macht es leichter'),
      p(
        `Wer gesund essen will, sollte es sich einfach machen: Ein Wochenplan mit ausgewogenen Gerichten und ein passender Einkauf sorgen dafür, dass die gesunde Wahl auch die bequemste ist – gerade an stressigen Tagen.`
      ),
      tip(
        `Ändere nicht alles auf einmal. Nimm dir eine einzige Gewohnheit für ein paar Wochen vor, bis sie sitzt – dann die nächste.`
      ),
      cta(
        `Hinterlege deine Ziele und Vorlieben, und Erni berücksichtigt sie bei jedem Vorschlag.`,
        '/features/ai-coach',
        'KI-Coach entdecken'
      ),
    ],
  },
  {
    slug: 'vorratshaltung-tipps',
    title: 'Vorratshaltung: clever bevorraten, weniger wegwerfen',
    category: 'Nachhaltigkeit',
    date: 'Februar 2026',
    excerpt:
      'Ein gut sortierter Vorrat rettet an stressigen Tagen jedes Abendessen. So legst du sinnvoll an, ohne dass etwas verdirbt.',
    content: [
      p(
        `Ein durchdachter Vorrat ist Gold wert: Wenn spontan Gäste kommen oder keine Zeit zum Einkaufen bleibt, zauberst du trotzdem etwas Gutes. Wichtig ist, das Richtige zu bevorraten – und den Überblick zu behalten.`
      ),
      h2('Diese Basics gehören in jeden Vorrat'),
      ul(
        'Trockenwaren: Nudeln, Reis, Linsen, Mehl.',
        'Konserven: Tomaten, Kichererbsen, Kokosmilch, Thunfisch.',
        'Haltbares aus der Küche: Zwiebeln, Knoblauch, Öl, Gewürze.',
        'Tiefkühl: Gemüse, Kräuter, Brot.'
      ),
      h2('First in, first out'),
      p(
        `Die wichtigste Regel gegen Verschwendung: Neu Gekauftes kommt nach hinten, Älteres nach vorne. So verbrauchst du zuerst, was zuerst abläuft. Ein regelmäßiger Blick in den Vorrat verhindert Doppelkäufe und vergessene Lebensmittel.`
      ),
      tip(
        `Prüfe vor jedem Einkauf kurz deinen Vorrat. Das klingt banal, ist aber der beste Schutz davor, das dritte Glas Senf zu kaufen, während die Nudeln ausgehen.`
      ),
      cta(
        `Frag Erni, was sich aus deinen Vorräten kochen lässt – so wird Bevorratetes auch wirklich verbraucht.`,
        '/features/ai-coach',
        'KI-Coach fragen'
      ),
    ],
  },
  {
    slug: 'kochen-mit-kindern',
    title: 'Kochen mit Kindern: Familienküche ohne Stress',
    category: 'Lifestyle',
    date: 'Februar 2026',
    excerpt:
      'Zwischen Job, Terminen und wählerischen Essern ist Familienkochen eine Kunst. Diese Tipps machen es entspannter – und binden die Kinder ein.',
    content: [
      p(
        `Familienessen soll schnell gehen, allen schmecken und möglichst gesund sein – ein hoher Anspruch im Alltag. Mit Planung und ein paar Tricks wird das Kochen mit Kindern entspannter und macht sogar Spaß.`
      ),
      h2('Alltagstaugliche Strategien'),
      ul(
        'Baukasten-Prinzip: Komponenten getrennt anbieten, jeder kombiniert selbst.',
        'Kinder einbinden: Waschen, Rühren, Bestreuen – altersgerecht mithelfen lassen.',
        'Feste Favoriten: ein paar Gerichte, die zuverlässig bei allen ankommen.',
        'Neues in kleinen Dosen: unbekannte Zutaten neben Vertrautem anbieten.'
      ),
      h2('Planung nimmt den Druck'),
      p(
        `Wer die Woche grob plant, muss nicht jeden Abend improvisieren. Plane bewusst schnelle Gerichte für Tage mit vielen Terminen und aufwändigere fürs Wochenende, wenn mehr Zeit ist.`
      ),
      tip(
        `Lass die Kinder reihum ein Gericht der Woche aussuchen. Das reduziert Diskussionen am Tisch – gewählt wird schließlich gemeinsam.`
      ),
      cta(
        `Erni plant die Familienwoche nach eurer Zeit und Personenzahl und erstellt die Einkaufsliste gleich mit.`,
        '/features/wochenplaner',
        'Wochenplaner ansehen'
      ),
    ],
  },
  {
    slug: 'food-trends-2026',
    title: 'Food-Trends 2026: von Hot Honey bis Marry Me Chicken',
    category: 'Trends',
    date: 'Februar 2026',
    excerpt:
      'Süß trifft scharf, Wohlfühlgerichte und viel Protein: Das sind die Food-Trends, die gerade überall gesucht und nachgekocht werden.',
    content: [
      p(
        `Manche Gerichte tauchen plötzlich überall auf – in Feeds, Suchanfragen und auf Speisekarten. Wir haben die Trends zusammengefasst, die aktuell besonders viel gesucht und nachgekocht werden.`
      ),
      h2('Diese Trends sind gerade überall'),
      ul(
        'Hot Honey: Honig mit Chili – süß und scharf zugleich, der „Swicy"-Trend.',
        'Marry Me Chicken: cremiges Hähnchen mit getrockneten Tomaten als Wohlfühlgericht.',
        'Chimichurri: frische Kräutersauce aus Argentinien zu Gegrilltem.',
        'Chia-Pudding: proteinreich und meal-prep-tauglich zum Frühstück.',
        'High-Protein-Rezepte: der anhaltende Trend rund um bewusste Ernährung.'
      ),
      h2('Trends im eigenen Kochbuch'),
      p(
        `Das Schöne an Trends: Man muss sie nicht alle mitmachen, kann aber neugierig bleiben. Wer ein neues Rezept ausprobiert und es mag, sollte es direkt sichern – sonst ist es beim nächsten Feed schon wieder vergessen.`
      ),
      tip(
        `Probier einen Trend mit einer vertrauten Beilage aus. So riskierst du wenig und findest schnell heraus, ob das Gericht ein Keeper ist.`
      ),
      cta(
        `Ein Trend-Rezept entdeckt? Speichere es mit Erni direkt in dein digitales Kochbuch – per Link oder Foto.`,
        '/features/kochbuch',
        'Digitales Kochbuch ansehen'
      ),
    ],
  },
  {
    slug: 'portionen-umrechnen',
    title: 'Portionen umrechnen: Rezepte für 2, 4 oder 6 Personen',
    category: 'Tipps & Tricks',
    date: 'Januar 2026',
    excerpt:
      'Ein Rezept für vier, aber ihr seid nur zwei? So rechnest du Mengen zuverlässig um – und vermeidest typische Fehler.',
    content: [
      p(
        `Die meisten Rezepte sind für vier Personen gedacht. Kochst du für zwei oder plötzlich für sechs, musst du umrechnen. Das ist meist einfach – aber ein paar Zutaten spielen nicht ganz mit.`
      ),
      h2('Die Grundregel'),
      p(
        `Rechne die Ausgangsmenge auf eine Portion herunter und dann auf deine gewünschte Anzahl hoch. Für die meisten Zutaten – Nudeln, Reis, Gemüse, Fleisch – funktioniert dieses lineare Umrechnen zuverlässig.`
      ),
      h2('Diese Zutaten brauchen Fingerspitzengefühl'),
      ul(
        'Gewürze und Salz: nicht einfach verdoppeln, lieber vorsichtig abschmecken.',
        'Backpulver, Hefe, Gelatine: reagieren empfindlich, hier genau bleiben.',
        'Flüssigkeit beim Backen: nicht immer exakt skalierbar, Konsistenz prüfen.',
        'Garzeiten: ändern sich mit der Menge – größere Mengen brauchen oft länger.'
      ),
      tip(
        `Beim Hochskalieren zuerst etwas weniger würzen und am Ende abschmecken. Nachwürzen geht immer, zu viel Salz lässt sich kaum retten.`
      ),
      cta(
        `In Erni stellst du die Portionszahl per Tipp um – die Mengen passen sich automatisch an.`,
        '/features/kochbuch',
        'Digitales Kochbuch ansehen'
      ),
    ],
  },
  {
    slug: 'kalte-suppen-no-cook',
    title: 'Kalte Suppen und No-Cook-Rezepte für heiße Tage',
    category: 'Saisonal',
    date: 'Januar 2026',
    excerpt:
      'Wenn der Herd zu heiß ist, retten Rezepte ohne Kochen den Tag. Erfrischende Ideen, die nur einen Mixer oder ein Messer brauchen.',
    content: [
      p(
        `An den heißesten Tagen des Jahres will niemand am Herd stehen. No-Cook-Rezepte kommen ganz ohne Kochen aus – erfrischend, schnell und trotzdem sättigend.`
      ),
      h2('Kalte Suppen'),
      ul(
        'Gazpacho: pürierte Tomaten, Paprika, Gurke und Olivenöl.',
        'Gurken-Kaltschale mit Joghurt, Dill und Knoblauch.',
        'Melonen-Kaltschale, süß-frisch mit etwas Minze.'
      ),
      h2('Ohne Herd sattmachen'),
      p(
        `Auch ohne Kochen wird man satt: große Salate mit Hülsenfrüchten aus der Dose, Wraps mit Hummus, Caprese, Sommerrollen oder eine schnelle Bowl mit fertig gegartem Getreide. Wer vorgekochte Zutaten im Kühlschrank hat, kombiniert in Minuten ein volles Gericht.`
      ),
      tip(
        `Stell kalte Suppen mindestens eine Stunde in den Kühlschrank. Gut durchgekühlt entfalten sie ihr Aroma erst richtig.`
      ),
      cta(
        `Frag Erni nach No-Cook-Ideen für heiße Tage – passend zu dem, was du gerade da hast.`,
        '/features/ai-coach',
        'KI-Coach fragen'
      ),
    ],
  },
  {
    slug: 'lebensmittel-lagern',
    title: 'Lebensmittel richtig lagern: länger frisch, weniger Abfall',
    category: 'Nachhaltigkeit',
    date: 'Januar 2026',
    excerpt:
      'Vieles verdirbt nur, weil es falsch gelagert wird. Mit den richtigen Handgriffen bleiben Obst, Gemüse und Reste deutlich länger frisch.',
    content: [
      p(
        `Ein großer Teil der weggeworfenen Lebensmittel landet im Müll, weil sie zu früh verderben – oft wegen falscher Lagerung. Mit ein paar einfachen Regeln bleibt vieles deutlich länger frisch.`
      ),
      h2('Was gehört wohin?'),
      ul(
        'Nicht in den Kühlschrank: Tomaten, Kartoffeln, Zwiebeln, Knoblauch, Bananen.',
        'In den Kühlschrank: Blattsalate, Beeren, die meisten offenen Reste.',
        'Getrennt lagern: Äpfel und Bananen lassen anderes Obst schneller reifen.',
        'Kräuter: wie einen Strauß ins Wasser stellen oder feucht einwickeln.'
      ),
      h2('Reste sicher aufbewahren'),
      p(
        `Gekochtes gehört möglichst rasch abgekühlt und luftdicht verschlossen in den Kühlschrank – so hält es meist drei bis vier Tage. Was du nicht rechtzeitig schaffst, kannst du portionsweise einfrieren.`
      ),
      tip(
        `Beschrifte eingefrorene Reste mit Inhalt und Datum. Ohne Etikett landet im Tiefkühler schnell eine anonyme Sammlung, die niemand mehr auftaut.`
      ),
      cta(
        `Plane mit Erni bedarfsgerecht ein, damit gar nicht erst zu viel im Kühlschrank vergammelt.`,
        '/features/wochenplaner',
        'Wochenplaner ansehen'
      ),
    ],
  },
];

