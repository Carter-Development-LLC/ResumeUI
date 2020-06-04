import Observer from './Observer';

export default abstract class Subject {
    data: any;
    observer: Observer | null;

    constructor() {
        this.observer = null;
    }

    subscribe = (observer: Observer): void => {
        this.observer = observer;
    };

    unSubscribe = (observer: Observer): void => {
        if (this.observer!.id === observer.id) this.observer = null;
    };

    notify = (): void => this.observer!.update();

    abstract async fetchData(): Promise<any>;

    getData = async (errorHandler: () => void): Promise<void> => {
        try {
            this.data = await this.fetchData();
            this.notify();
        } catch (error) {
            console.log(error);
            errorHandler();
        }
    };
}
