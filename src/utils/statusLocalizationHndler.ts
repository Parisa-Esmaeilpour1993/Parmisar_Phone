import { modallocalization } from "../constants/localization/Localization";

export const statusLocalizationHandler = (status: string) => {
  switch (status) {
    case "inStock":
      return modallocalization["inStock"];
    case "outOfStock":
      return modallocalization["outOfStock"];
    case "comingSoon":
      return modallocalization["comingSoon"];
    case "discontinue":
      return modallocalization["discontinue"];
  }
};
