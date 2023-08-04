import { GetColorScheme } from "./GetColorScheme.js";

const getColorScheme = new GetColorScheme();

const getColors = (color, option) => {
  try {
    getColorScheme
      .get(
        `https://www.thecolorapi.com/scheme?hex=${color}&mode=${option}&count=5`
      )
      .then((data) => {
        //   console.log(data.colors[0].hex.value);
        document.getElementById("colorOne").style.backgroundColor =
          data.colors[0].hex.value;
        document.getElementById("colorTwo").style.backgroundColor =
          data.colors[1].hex.value;
        document.getElementById("colorThree").style.backgroundColor =
          data.colors[2].hex.value;
        document.getElementById("colorFour").style.backgroundColor =
          data.colors[3].hex.value;
        document.getElementById("colorFive").style.backgroundColor =
          data.colors[4].hex.value;
      })
      .catch((err) => console.error(err));
  } catch {
    console.error("Something happened!");
  }
};

export { getColors };
