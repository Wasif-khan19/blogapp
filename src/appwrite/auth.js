import { Account, Client } from "appwrite";
import conf from "../conf/conf";

export class Authservice {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteBackendEndpoint)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
}

const authService = new Authservice();

export default authService;
