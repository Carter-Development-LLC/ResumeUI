import Subject from './Subject';

export default interface Observer {
    id: string;
    subject: Subject;
    update: () => void;
}
