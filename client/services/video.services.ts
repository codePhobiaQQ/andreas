import $api from "../http";
import axios, { AxiosResponse } from "axios";
import { IVideo } from "../models/IVideo";

export default class VideoServices {
  static async addVideo(data: any): Promise<AxiosResponse<IVideo>> {
    try {
      const response = await $api.post("/video/add", data);
      return response;
    } catch (e) {
      return e;
    }
  }

  static async getAll(): Promise<IVideo[]> {
    try {
      const response = await axios.get("http://localhost:5000/video/get-all");
      const videos = response.data;
      return videos;
    } catch (e) {
      console.log(e.message);
      return [];
    }
  }

  static async getOne(id: number | undefined): Promise<IVideo> {
    try {
      if (id === undefined) {
        return {} as IVideo;
      }
      const response = await axios.get(
        `http://localhost:5000/video/find-by-id?id=${id}`
      );
      const videos = response.data;
      return videos;
    } catch (e) {
      console.log(e.message);
      return {} as IVideo;
    }
  }

  // static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
  //   return $api.get<IUser[]>("/users");
  // }
  //
  // static async logged(): Promise<any> {
  //   return $api.post("/token/logged");
  // }
  //
  // static findRole(role: string, user: IUser): boolean {
  //   let flag = false;
  //   if (user.roles) {
  //     user.roles.map((el, index) => {
  //       if (el.name !== "admin") {
  //         flag = true;
  //       }
  //     });
  //   }
  //   return flag;
  // }
}
