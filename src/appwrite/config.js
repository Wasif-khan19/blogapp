import { Client, Databases, Storage } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  bucket;
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteBackendEndpoint)
      .setProject(conf.appwriteProjectId);
    this.bucket = new Storage(this.client);
    this.databases = new Databases(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteCollectionId,
        conf.appwriteDatabaseId,
        slug,
        {
          title,
          slug,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite error :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteCollectionId,
        conf.appwriteDatabaseId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite error :: updatePost :: error", error);
    }
  }
}

const service = new Service();
export default service;
