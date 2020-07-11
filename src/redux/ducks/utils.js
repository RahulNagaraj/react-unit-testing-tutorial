export const API = 'API';

export const INIT = 'INIT';

export const createActionTypes = (namespace, type) => [`${namespace}/${type}_REQUEST`, `${namespace}/${type}_SUCCESS`, `${namespace}/${type}_FAILURE`];
