import { Action, Reducer } from 'redux';
import {
    readFromDocument,
    writeToDocument,
} from '../services/couchbase';
const omit = require('lodash/omit');

const persistKey = 'persist-state-key';

type State = Record<string, unknown>;

function persist(state: State): State {
    setTimeout((): void => {
        writeToDocument(persistKey, state);
    });
    return state;
}

export function preloadState(): State {
    return omit(readFromDocument(persistKey), ['id']);
}

export function persistReducer(reducer): Reducer {
    return (state, action: Action): State => {
        return persist(reducer(state, action));
    };
}
