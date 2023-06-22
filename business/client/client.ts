import { APIRequestContext } from "@playwright/test";

export class Client {

    protected context: APIRequestContext;
    protected baseURL: string;

    constructor(context: APIRequestContext, baseURL: string) {
        this.context = context;
        this.baseURL = baseURL;
    }

    protected get(endpoint: string) {
        return this.context.get(this.baseURL+endpoint);
    }

    protected post(endpoint: string, payload: Object) {
        return this.context.post(this.baseURL+endpoint, {
            data: payload
        });
    }

    protected put(endpoint: string, payload: Object) {
        return this.context.put(this.baseURL+endpoint, {
            data: payload
        });
    }
    
    protected delete(endpoint: string) {
        return this.context.delete(this.baseURL+endpoint)
    }

}