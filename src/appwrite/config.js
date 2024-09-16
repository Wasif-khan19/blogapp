import { Client, Databases, ID, Query, Storage } from "appwrite";
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

  //post create functions
  async createPost({ title, slug, Content, featuredimage, status, userid }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteCollectionId,
        conf.appwriteDatabaseId,
        slug,
        {
          title,
          slug,
          Content,
          featuredimage,
          status,
          userid,
        }
      );
    } catch (error) {
      console.log("Appwrite error :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredimage, status }) {
    try {
      await this.databases.updateDocument(
        conf.appwriteCollectionId,
        conf.appwriteDatabaseId,
        slug,
        {
          title,
          content,
          featuredimage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite error :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteCollectionId,
        conf.appwriteDatabaseId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite error :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite error :: getPost :: error", error);
    }
  }

  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteCollectionId,
        conf.appwriteDatabaseId,
        queries
      );
    } catch (error) {
      console.log("Appwrite error :: getAllPosts :: error", error);
    }
  }

  //file upload functions
  async uploadFile(file) {
    try {
      await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file);
    } catch (error) {
      console.log("Appwrite error :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite error :: deleteFile :: error", error);
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }

    getFileDownload(fileId) {
        return this.bucket.getFileDownload(conf.appwriteBucketId, fileId);
}
}

const service = new Service();
export default service;
