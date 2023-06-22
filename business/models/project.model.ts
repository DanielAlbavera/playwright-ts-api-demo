export class ProjectModel {

    id: string;
    name: string;
    comment_count: number;
    color: string;
    is_shared: boolean;
    order: number;
    is_favorite: boolean;
    is_inbox_project: boolean;
    is_team_inbox: boolean;
    view_style: string;
    url: string;
    parent_id: null;

    constructor(
        id: string,
        name: string,
        comment_count: number,
        color: string,
        is_shared: boolean,
        order: number,
        is_favorite: boolean,
        is_inbox_project: boolean,
        is_team_inbox: boolean,
        view_style: string,
        url: string,
        parent_id: null) {
        this.id = id;
        this.name = name;
        this.comment_count = comment_count;
        this.color = color,
        this.is_shared = is_shared;
        this.order = order,
        this.is_favorite = is_favorite;
        this.is_inbox_project = is_inbox_project;
        this.is_team_inbox = is_team_inbox;
        this.view_style = view_style;
        this.url = url;
        this.parent_id = parent_id;
    }

}