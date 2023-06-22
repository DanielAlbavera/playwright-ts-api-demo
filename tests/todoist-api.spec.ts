import { test, expect, APIResponse } from '@playwright/test';
import { TodoistService } from '../business/services/todoist.service';
import { ProjectModel } from '../business/models/project.model';
import { PROJECT_PAYLOAD, UPDATED_PROJECT_PAYLOAD } from '../business/fixtures/project.fixture';

test.describe('Todoist API', () => {
    
    let todoistService: TodoistService;
    let projectId: string;

    test.beforeAll( ({request, baseURL}) => {
        todoistService = new TodoistService(request, baseURL!);
    }); 

    test('GET - return all projects', async () => {
        const response: APIResponse = await todoistService.getProjects();
        const projects: ProjectModel[] = await response.json();
        expect(response).toBeOK();
        expect(Array.isArray(projects)).toBeTruthy();
        expect(projects.length).toBe(2);
    });

    test('POST - create a new project', async () => {
        const response: APIResponse = await todoistService.createProject(PROJECT_PAYLOAD);
        expect(response).toBeOK();
        const project: ProjectModel = await response.json();
        expect(project.name).toBe(PROJECT_PAYLOAD.name);
        projectId = project.id;
    });

    test('GET - project by ID', async () => {
        const response: APIResponse = await todoistService.getProjectById(projectId);
        expect(response).toBeOK();
        const project: ProjectModel = await response.json();
        expect(project.id).toBe(projectId);
        expect(project.name).toBe(PROJECT_PAYLOAD.name);
    });

    test('POST - update project name', async () => {
        const response: APIResponse = await todoistService.updateProject(projectId, UPDATED_PROJECT_PAYLOAD);
        expect(response).toBeOK();
        const project: ProjectModel = await response.json();
        expect(project.id).toBe(projectId);
        expect(project.name).toBe(UPDATED_PROJECT_PAYLOAD.name);
    });

    test('DELETE - delete a project by Id', async () => {
        const response: APIResponse = await todoistService.deleteProject(projectId);
        expect(response).toBeOK();
    });

});
