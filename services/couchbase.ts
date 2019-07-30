import { Couchbase } from 'nativescript-couchbase-plugin';
import * as applicationSettings from 'tns-core-modules/application-settings';

const mainDB = 'Main';

export const database = new Couchbase(mainDB);

function getPersistDocumentId(key: string) {
    return applicationSettings.getString(key);
}

function setPersistDocumentId(key: string, id: string) {
    return applicationSettings.setString(key, id);
}

export function readFromDocument(name: string) {
    const documentId = getPersistDocumentId(name);

    if (documentId) {
        return database.getDocument(documentId);
    }
    return undefined;
}

export function writeToDocument(name: string, data: any) {
    const documentId = getPersistDocumentId(name);

    if (documentId) {
        database.updateDocument(documentId, data);
    } else {
        setPersistDocumentId(
            name,
            database.createDocument(data),
        );
    }
}
