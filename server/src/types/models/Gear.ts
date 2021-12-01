import Category from "../enums/Category";
import Condition from "../enums/Condition";
import GearStatus from "../enums/GearStatus";

type Gear = {
  id: number;
  shopId: number;
  imageId?: number;
  status: GearStatus;
  category: Category;
  listingTitle: string;
  brand: string;
  model: string;
  condition: Condition;
  price: number;
};

export default Gear;
