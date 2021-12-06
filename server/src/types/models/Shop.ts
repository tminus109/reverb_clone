import Country from "../enums/Country";
import Currency from "../enums/Currency";

type Shop = {
  userId: number;
  shopName: string;
  country?: Country;
  currency?: Currency;
};

export default Shop;
