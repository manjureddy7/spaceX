import { ALL_PROGRAMMS } from './url';

export const getSpaceXProgramms = async () => {
    return fetch(ALL_PROGRAMMS).then(res => res.json());
}