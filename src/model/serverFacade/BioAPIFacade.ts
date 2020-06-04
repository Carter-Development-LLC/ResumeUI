import Subject from './observer/Subject';

export default class BioAPIFacade extends Subject {
    fetchData = async (): Promise<any> => {
        let raw = await fetch(`${process.env.REACT_APP_API_DOMAIN}about/bio`);
        return await raw.json();
    };
}
