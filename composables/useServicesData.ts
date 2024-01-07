type Service = {
    name: string;
    value: number;
  };

  export default function useServicesData(): { services: Service[] } {
    const services: Service[] = [
      {
        name: "Piaskowanie",
        value: 200
      },
      {
        name: "Leczenie",
        value: 400
      },
      {
        name: "Leczenie kanałowe",
        value: 600
      },
      {
        name: "Usuwanie zęba",
        value: 250
      },

    ];

    return { services };
  }