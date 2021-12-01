import Category from "./Category";
import Condition from "./Condition";
import GearStatus from "./GearStatus";

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
