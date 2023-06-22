import dotenv from 'dotenv';
dotenv.config();

export const BASE_URL = process.env.BASE_URL || 'BASE UTR not provided';
export const API_TOKEN = process.env.API_TOKEN || 'API TOKEN not provided';
export const ENDPOINTS = {
    PROJECTS: '/projects'
}