import Country from "../enums/Country";
import Currency from "../enums/Currency";

type Shop = {
  id: number;
  userId: number;
  gearId?: number;
  shopName: string;
  country?: Country;
  currency?: Currency;
};

export default Shop;
