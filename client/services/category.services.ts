import axios from "axios";
import $api from "../http";
import ICategory from "../models/ICategory";

export default class CategoryServices {
  static async getAll(): Promise<ICategory[]> {
    try {
      const response = await axios.get(
        "http://localhost:5000/category-video/get-all"
      );
      const categories = response.data;
      return categories;
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
