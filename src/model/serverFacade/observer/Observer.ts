import Subject from './Subject';

export default interface Observer {
    handleFetchError: () => void;
    id: string;
    subject: Subject;
    update: () => void;
}
