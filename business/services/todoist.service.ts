import { APIRequestContext } from "@playwright/test";
import { Client } from "../client/client";
import { ENDPOINTS } from "../fixtures/base.fixture";

export class TodoistService extends Client {
    
    constructor(context: APIRequestContext, baseURL: string) {
        super(context, baseURL);
    }

    async getProjects() {
        return await this.get(ENDPOINTS.PROJECTS);
    }

    async getProjectById(id: string) {
        return await this.get(`${ENDPOINTS.PROJECTS}/${id}`);
    }

    async createProject(payload: Object) {
        return await this.post(ENDPOINTS.PROJECTS, payload);
    }

    async updateProject(id: string, payload: Object) {
        return await this.post(`${ENDPOINTS.PROJECTS}/${id}`, payload);
    }

    async deleteProject(id: string) {
        return await this.delete(`${ENDPOINTS.PROJECTS}/${id}`);
    }

}