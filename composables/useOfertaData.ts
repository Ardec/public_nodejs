type Category = {
    name: string;
    text: string;
    path: string;
  };

  export default function useOfertaData(): { categories: Category[] } {
    const categories: Category[] = [
      {
        name: "Stomatologia zachowawcza",
        text: "Przeprowadzamy kompleksowe badanie jamy ustnej poprzedzone wywiadem oraz diagnostyką RTG. Wykonujemy wypełnienia światłoutwardzalnym materiałem kompozytowym, dbając przede wszystkim o estetykę uzębienia.",
        path: "/"
      },
      {
        name: "Stomatologia dziecięca",
        text: "Leczenie zębów mlecznych oraz stałych ze względu na młody wiek pacjentów. Indywidualne podejście do każdego dziecka oraz wizyty adaptacyjne to nasza specjalność!",
        path: "/"
      },
      {
        name: "Wybielanie",
        text: "Oferujemy dwie metody wybielania czyli leczenia przebarwień - nakładkową oraz lampą bejond.",
        path: "/"
      },
      {
        name: "Endodoncja",
        text: "Jest to leczenie kanałowe czyli dokładne mechaniczne opracowanie kanału zębowego, a następnie jego szczelne wypełnienie. Podczas zabiegu korzystamy z nowoczesnych technik i materiałów.",
        path: "/"
      },
      {
        name: "Chirurgia stomatologiczna",
        text: "Podczas zabiegów chirurgicznych dbamy o to, by pacjent nie odczuwał bólu i czuł się bezpiecznie. Nasi specjaliści w tej dziedzinie stale podnoszą swoje kwalifikacje oraz kompetencje.",
        path: "/"
      },
      {
        name: "Ortodoncja",
        text: "Leczeniem ortodontycznym obejmujemy pacjentów w każdym wieku. Korygujemy wady zgryzu oraz wszelkie nieprawidłowości zębowe. Oferujemy zarówno aparaty stałe jak i ruchome.",
        path: "/"
      },
      {
        name: "Protetyka",
        text: "Zajmujemy się uzupełnieniem brakujących zębów oraz odbudową straconych tkanek uzębienia. Leczymy bruksizm oraz zaburzenia w stawie skroniowo-żuchwowym.",
        path: "/"
      },
      {
        name: "Implantologia",
        text: "Wszczepianie implantów czyli pełna rekonstrukcja uzębienia na najwyższym poziomie. Decydując się u nas na leczenie implantologiczne zyskujesz gwarancje na długotrwały efekt.",
        path: "/"
      },
    ];

    return { categories };
  }
