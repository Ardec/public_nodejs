type Person = {
    name: string;
    job: string;
    path: string;
  };

  export default function usePersonelData(): { persons: Person[] } {
    const persons: Person[] = [
      {
        name: "Aleksandra Domańska",
        job: "Lekarz",
        path: "/"
      },
      {
        name: "Ewa Ryszka",
        job: "Lekarz",
        path: "/"
      },
      {
        name: "Firas Abozid",
        job: "Lekarz",
        path: "/"
      },
      {
        name: "Igor Prawda",
        job: "Lekarz",
        path: "/"
      },
      {
        name: "Karolina Sroka",
        job: "Lekarz",
        path: "/"
      },  
       {
        name: "Krzysztof Furman",
        job: "Lekarz",
        path: "/"
      },  
       {
        name: "Magdalena Fatyga",
        job: "Lekarz",
        path: "/"
      },
      {
        name: "Martyna Lasek",
        job: "Lekarz",
        path: "/"
      },
      {
        name: "Natasza Furman",
        job: "Lekarz",
        path: "/"
      },
      {
        name: "Piotr Stępień",
        job: "Lekarz",
        path: "/"
      },
      {
        name: "Sergiusz Połuchtowicz-Hański",
        job: "Lekarz",
        path: "/"
      },
      {
        name: "Viktoriia Pankevych",
        job: "Lekarz",
        path: "/"
      },
      {
        name: "Elżbieta Skotnicka",
        job: "Lekarz",
        path: "/"
      },
      {
        name: "Grażyna Zyguła",
        job: "Lekarz",
        path: "/"
      },
      {
        name: "Karolina Meus",
        job: "Asysta",
        path: "/"
      },
      {
        name: "Magdalena Fatyga",
        job: "Asysta",
        path: "/"
      },
      {
        name: "Małgorzata Pancerz",
        job: "Asysta",
        path: "/"
      },
      {
        name: "Małgorzata Pancerz",
        job: "Asysta",
        path: "/"
      },
      {
        name: "Patrycja Oracz",
        job: "Asysta",
        path: "/"
      },
      {
        name: "Stepan Yasnyskyy",
        job: "Asysta",
        path: "/"
      },
      {
        name: "Tatsiana Zinkevich",
        job: "Asysta",
        path: "/"
      },
      {
        name: "Natalia Krysa",
        job: "Recepcja",
        path: "/"
      },
      {
        name: "Natalia Orędarz",
        job: "Recepcja",
        path: "/"
      },
      {
        name: "Nicol Binko",
        job: "Recepcja",
        path: "/"
      },
      {
        name: "Nikola Zając",
        job: "Recepcja",
        path: "/"
      },
      {
        name: "Weronika Banasiak",
        job: "Recepcja",
        path: "/"
      },

    ];

    return { persons };
  }
