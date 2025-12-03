import { LevelData } from "../../types";
import { t, s } from "../../utils/levelHelpers";

export const LEVEL_4_POOL: LevelData[] = [
  {
    difficultyLevel: 4,
    description: "Cantar de mio Cid",
    totalErrors: 6,
    timeLimit: 90,
    originalText: "De los sus ojos tan fuertemente llorando, tornaba la cabeza y estábalos catando.",
    bookTitle: "Cantar de mio Cid",
    bookAuthor: "Anónimo",
    tokens: [
      t("De"), s(), t("los"), s(), t("sus"), s(), 
      t("o"), t("jos"), s(),
      t("tam", "tan"), s(), // Error: tam -> tan
      t("fuer"), t("ti", "te"), t("men"), t("te"), s(), // Error: ti -> te
      t("yo", "llo"), t("ran"), t("do"), t(","), s(), // Error: yo -> llo
      t("tor"), t("na"), t("va", "ba"), s(), // Error: va -> ba
      t("la"), s(),
      t("ca"), t("ve", "be"), t("za"), s(), // Error: ve -> be
      t("y"), s(),
      t("es"), t("ta", "tá"), t("ba"), t("los"), s(), // Error: ta -> tá
      t("ca"), t("tan"), t("do"), t(".")
    ]
  },
];