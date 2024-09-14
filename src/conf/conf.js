const conf = {
    appwriteBackendEndpoint:String(import.meta.env.VITE_APPWRITE_BACKEND_ENDPOINT),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteRteApiKey:String(import.meta.env.VITE_RTE_API_KEY)
}

export default conf;