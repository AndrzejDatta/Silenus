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

export const DataProvider = ({ children }) => {
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
  const startPage = {
    ...dataPL[0],
  };
  const loginPage = {
    ...dataPL[1],
  };
  const Dashboard = {
    ...dataPL[2],
  };
  const MojeDoniczki = {
    ...dataPL[3],
  };
  const DodajDoniczke = {
    ...dataPL[4],
  };
  const MojeRośliny = {
    ...dataPL[5],
  };
  const KalendarzOpieki = {
    ...dataPL[7],
  };
  const KontoUżytkownika = {
    ...dataPL[6],
  };
  const ZidentyfikujRośline = {
    ...dataPL[8],
  };
  const Navbar = {
    ...dataPL[9],
  };

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
