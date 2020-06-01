import BaseModel from './BaseModel';

export default class Bio extends BaseModel {
    content: string;

    constructor(id: string, content: string) {
        super(id);
        this.content = content;
    }
}
