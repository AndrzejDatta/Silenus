import { createContext, useState } from "react";
import { dataPL } from "assets/data/data";

export const dataContext = createContext({
  startPage: {},
  loginPage: {},
  Dashboard: {},
  MojeDoniczki: {},
  DodajDoniczke: {},
  MojeRośliny: {},
  KalendarzOpieki: {},
  KontoUżytkownika: {},
  ZidentyfikujRośline: {},
  PotDetails: {},
  PlantDetails: {},
  Navbar: {},
  images: {},
  navIcons: {},
  potIcons: {},
  categoryIcons: {},
  navIconsColor: [],
  setNavIconColor: () => {},
  changeColor: () => {},
  importAll: () => {},
});

const objectName = [
  "startPage",
  "loginPage",
  "Dashboard",
  "MojeDoniczki",
  "DodajDoniczke",
  "MojeRośliny",
  "KalendarzOpieki",
  "KontoUżytkownika",
  "ZidentyfikujRośline",
  "PotDetails",
  "PlantDetails",
  "Navbar",
];

export const DataProvider = ({ children }) => {
  for (let i = 0; i < dataPL.length; i++) {
    objectName[i] = { ...dataPL[i] };
  }
  const [
    startPage,
    loginPage,
    Dashboard,
    MojeDoniczki,
    DodajDoniczke,
    MojeRośliny,
    KalendarzOpieki,
    KontoUżytkownika,
    ZidentyfikujRośline,
    PotDetails,
    PlantDetails,
    Navbar,
  ] = objectName;

  const [navIconsColor, setNavIconColor] = useState([
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
  ]);

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context(
      "assets/icons/userAccountOption",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const navIcons = importAll(
    require.context("assets/icons/navIcons", false, /\.(png|jpe?g|svg)$/)
  );

  const potIcons = importAll(
    require.context("assets/icons/potStatus", false, /\.(png|jpe?g|svg)$/)
  );

  const categoryIcons = importAll(
    require.context("assets/icons/categoryIcons", false, /\.(png|jpe?g|svg)$/)
  );

  function changeColor(nameElement) {
    setNavIconColor((prevData) =>
      prevData.map((item) => {
        if (item.name === nameElement && !item.isClicked) {
          return {
            ...item,
            isClicked: true,
          };
        } else {
          return {
            ...item,
            isClicked: false,
          };
        }
      })
    );
  }

  return (
    <dataContext.Provider
      value={{
        startPage,
        loginPage,
        Dashboard,
        DodajDoniczke,
        MojeDoniczki,
        MojeRośliny,
        KalendarzOpieki,
        KontoUżytkownika,
        ZidentyfikujRośline,
        PotDetails,
        PlantDetails,
        Navbar,
        images,
        navIcons,
        potIcons,
        categoryIcons,
        navIconsColor,
        setNavIconColor,
        changeColor,
        importAll,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

//TODO:improve way
