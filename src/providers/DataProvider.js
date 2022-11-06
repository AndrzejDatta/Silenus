import { createContext, useState, useEffect } from "react";
import { dataPL } from "assets/data/data";
import axios from "axios";

export const dataContext = createContext({
  StartPage: {},
  LoginPage: {},
  Dashboard: {},
  MojeDoniczki: {},
  DodajDoniczke: {},
  MojeRośliny: {},
  KalendarzOpieki: {},
  KontoUżytkownika: {},
  ZidentyfikujRośline: {},
  Details: {},
  Navbar: {},
  NotFoundPage: {},
  images: {},
  navIcons: {},
  potIcons: {},
  categoryIcons: {},
  navIconsColor: [],
  plantsData: {},
  setNavIconColor: () => {},
  changeColor: () => {},
  importAll: () => {},
});

const objectName = [
  "StartPage",
  "LoginPage",
  "Dashboard",
  "MojeDoniczki",
  "DodajDoniczke",
  "MojeRośliny",
  "KontoUżytkownika",
  "KalendarzOpieki",
  "ZidentyfikujRośline",
  "Details",
  "Navbar",
  "NotFoundPage",
];

export const DataProvider = ({ children }) => {
  const [plantsData, setPlantsData] = useState([]);
  useEffect(() => {
    axios
      .get("/plants")
      .then((data) => setPlantsData(data.data))
      .then((data) => console.log(data.data))
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, []);

  console.log(plantsData);
  for (let i = 0; i < dataPL.length; i++) {
    objectName[i] = { ...dataPL[i] };
  }
  const [
    StartPage,
    LoginPage,
    Dashboard,
    MojeDoniczki,
    DodajDoniczke,
    MojeRośliny,
    KontoUżytkownika,
    KalendarzOpieki,
    ZidentyfikujRośline,
    Details,
    Navbar,
    NotFoundPage,
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
        StartPage,
        LoginPage,
        Dashboard,
        DodajDoniczke,
        MojeDoniczki,
        MojeRośliny,
        KalendarzOpieki,
        KontoUżytkownika,
        ZidentyfikujRośline,
        Details,
        Navbar,
        NotFoundPage,
        images,
        navIcons,
        potIcons,
        categoryIcons,
        navIconsColor,
        plantsData,
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
