import {Action} from "redux";
import {readFromDocument, writeToDocument} from "../services/couchbase";

const persistKey = "persist-state-key";

function persist(state: Object) {
    setTimeout(() => {
        writeToDocument(persistKey, state)
    });
    return state
}

export function preloadState() {
    return readFromDocument(persistKey)
}

export function persistReducer(reducer) {
    return (state, action: Action) => {
        return persist(
            reducer(state, action)
        )
    }
}