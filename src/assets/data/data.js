export const dataPL = [
  {
    pageName: "StartPage",
    title: "Sielnus",
    subtitle: "smart plants",
  },
  {
    pageName: "LoginPage",
    title: "Sielnus",
    subtitle: "smart plants",
    infoText: "Nie masz jeszcze konta?",
    linkText: "Załóż konto",
  },
  {
    pageName: "Dashboard",
    headings: ["Moje doniczki", "Moje rośliny", "Kalendarz opieki"],
    filters: [
      {
        name: "Podlewanie",
        src: "",
      },
      {
        name: "Zraszanie",
        src: "",
      },
      {
        name: "Nawożenie",
        src: "",
      },
      {
        name: "Podlewanie",
        src: "",
      },
    ],
    activities: [
      {
        name: "Ola",
        src: "",
        activity: {
          iconSrc: "src",
          text: "text",
        },
      },
      {
        name: "Kuba",
        src: "",
        activity: {
          iconSrc: "src",
          text: "text",
        },
      },
      {
        name: "Amelia",
        src: "",
        activity: {
          iconSrc: "src",
          text: "text",
        },
      },
      {
        name: "Smokkkkk",
        src: "",
        activity: {
          iconSrc: "src",
          text: "text",
        },
      },
    ],
    plants: [
      {
        name: "Paprotka Andrzej",
        state: [
          {
            src: "tear.svg",
            text: "5",
          },
          {
            src: "waterGlass.svg",
            text: "uzupelnij zbiornik",
          },
          {
            src: "plant.svg",
            text: "2 dni temu",
          },
          {
            src: "task_alt.svg",
            text: "zraszanie",
          },
        ],
      },
      {
        name: "Paprotka Ola",
        state: [
          {
            src: "tear.svg",
            text: "1",
          },
          {
            src: "waterGlass.svg",
            text: "kocham cię, mam duzo wody",
          },
          {
            src: "plant.svg",
            text: "100 dni temu",
          },
          {
            src: "task_alt.svg",
            text: "zraszanie",
          },
        ],
      },
    ],
  },
  {
    pageName: "MojeDoniczki",
    headings: [
      "Moje doniczki",
      "Parametry doniczki",
      "Pielęgnacja",
      "Pamietnik rośliny",
    ],
  },
  {
    pageName: "DodajDoniczke",
    headings: ["Dodaj doniczkę"],
    infoText: "Wyszukiwanie urządzenia bluetooth w pobliżu",
    buttonText: "Skanuj",
  },
  {
    pageName: "MojeRośliny",
    headings: ["Moje rośliny", "Pielęgnacja", "Pamietnik rośliny"],
    filters: ["Podlewanie", "Zraszanie", "Nawożenie"],
  },
  {
    pageName: "KontoUżytkownika",
    headings: ["Profil", "Ustawienia"],
    status: [
      {
        name: "Doniczki",
        number: 1,
      },
      {
        name: "Rośliny",
        number: 1,
      },
    ],

    options: [
      {
        option: "Edytuj profil",
        iconSrc: "edit.svg",
      },
      {
        option: "Udostępnij",
        iconSrc: "return.svg",
      },
      {
        option: "Powiadomienia",
        iconSrc: "notifications.svg",
      },
      {
        option: "Zabezpieczenia",
        iconSrc: "lockOpen.svg",
      },
      {
        option: "Pomoc",
        iconSrc: "support.svg",
      },
      {
        option: "O aplikacji",
        iconSrc: "info.svg",
      },
      {
        option: "Oceń",
        iconSrc: "star.svg",
      },
      {
        option: "Wyloguj się",
        iconSrc: "logout.svg",
      },
    ],

    // options: [
    //   "Edytuj profil",
    //   "Udostępnij",
    //   "Powiadomienia",
    //   "Zabezpieczenia",
    //   "Pomoc",
    //   "O aplikacji",
    //   "Oceń",
    //   "Wyloguj się",
    // ],
    // iconSrc: [
    //   "assets/icons/edit.svg",
    //   "assets/icons/return.svg",
    //   "assets/icons/notifications.svg",
    //   "assets/icons/lockOpen.svg",
    //   "assets/icons/support.svg",
    //   "assets/icons/info.svg",
    //   "assets/icons/star.svg",
    //   "assets/icons/logout.svg",
    // ],
  },
  {
    pageName: "KalendarzOpieki",
    headings: ["Kalendarz opieki"],
    filters: ["Podlewanie", "Zraszanie", "Nawożenie"],
  },
  {
    pageName: "ZidentyfikujRoslinę",
    headings: ["identyfikuj roslinę", "Popularne kategorie"],
    filters: [
      "bezpieczne dla zwierząt",
      "rośliny zielone",
      "rosliny jonizujące",
      "rośliny biurowe",
    ],
    buttonText: "Zrób zdjęcie",
  },
  {
    name: "Navbar",
    icons: [
      {
        name: "plant",
        src: "potted_plant.svg",
        isClicked: false,
      },
      {
        name: "calendar",
        src: "calendar.svg",
        isClicked: false,
      },
      {
        name: "camera",
        src: "camera.svg",
        isClicked: false,
      },
      {
        name: "user",
        src: "accountCircle.svg",
        isClicked: false,
      },
    ],
  },
];

//TODO:update dataAng array
export const dataAng = [
  {
    pageName: "StartPage",
    title: "Sielnus",
    subtitle: "smart plants",
  },
  {
    pageName: "LoginPage",
    title: "Sielnus",
    subtitle: "smart plants",
    infoText: "Nie masz jeszcze konta?",
    linkText: "Załóż konto",
  },
  {
    pageName: "Dashboard",
    headings: ["Moje doniczki", "Moje rośliny", "Kalendarz opieki"],
    filters: ["Podlewanie", "Zraszanie", "Nawożenie"],
  },
  {
    pageName: "MojeDoniczki",
    headings: [
      "Moje doniczki",
      "Parametry doniczki",
      "Pielęgnacja",
      "Pamietnik rośliny",
    ],
  },
  {
    pageName: "DodajDoniczke",
    headings: ["Dodaj doniczkę"],
    infoText: "Wyszukiwanie urządzenia bluetooth w pobliżu",
    buttonText: "Skanuj",
  },
  {
    pageName: "MojeRośliny",
    headings: ["Moje rośliny", "Pielęgnacja", "Pamietnik rośliny"],
    filters: ["Podlewanie", "Zraszanie", "Nawożenie"],
  },
  {
    pageName: "KontoUżytkownika",
    headings: ["Profil", "Ustawienia"],
    options: [
      "Edytuj profil",
      "Udostępnij",
      "Powiadomienia",
      "Zabezpieczenia",
      "Pomoc",
      "O aplikacji",
      "Oceń",
      "Wyloguj sie",
    ],
  },
  {
    pageName: "KalendarzOpieki",
    headings: ["Kalendarz opieki"],
    filters: ["Podlewanie", "Zraszanie", "Nawożenie"],
  },
  {
    pageName: "ZidentyfikujRoslinę",
    headings: ["identyfikuj roslinę", "Popularne kategorie"],
    filters: [
      "bezpieczne dla zwierząt",
      "rośliny zielone",
      "rosliny jonizujące",
      "rośliny biurowe",
    ],
    buttonText: "Zrób zdjęcie",
  },
];
