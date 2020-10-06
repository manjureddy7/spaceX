import { createSlice } from '@reduxjs/toolkit';
import { ALL_PROGRAMMS } from '../../api/url'

const missionSlice = createSlice({
    name: 'mission',
    initialState: {
        missions: [],
        loading: false,
        error: '',
        selectedyear: '',
        selectedSuccessLaunch: '',
        selectedSuccessLanding: ''
    },
    reducers: {
        setLoading(state,action){
            const { loading } = action.payload;
            state.loading = loading;
        },
        setError(state,action){
            const { error } = action.payload;
            state.error = error;
        },
        setMissionData: (state,action) => {
            const { missions } = action.payload;
            state.missions = [];
            state.missions = [...missions];
        },
        setLaunchYearMissionData: (state, action) => {
            const { missions } = action.payload;
            state.missions = [...missions];
        },
        setSuccessLaunchMissionData: (state, action) => {
            const { missions } = action.payload;
            state.missions = [...missions];
        },
        setSelectedYear: (state,action) => {
            const { selectedYear } = action.payload;
            state.selectedyear = selectedYear;
        },
        setSelectedSuccessLaunch: (state,action) => {
            const { selectedSuccessLaunch } = action.payload;
            state.selectedSuccessLaunch = selectedSuccessLaunch;
        },
        setSelectedSuccessLanding: (state,action) => {
            const { selectedSuccessLanding } = action.payload;
            state.selectedSuccessLanding = selectedSuccessLanding;
        },
        resetSelections: (state) => {
            state.selectedyear = '';
            state.selectedSuccessLanding = '';
            state.selectedSuccessLaunch = '';
        }
    }
})

export const { 
    setLoading,
    setError,
    setMissionData,
    setLaunchYearMissionData,
    setSuccessLaunchMissionData,
    setSelectedYear,
    setSelectedSuccessLaunch,
    setSelectedSuccessLanding,
    resetSelections
    } = missionSlice.actions;
export default missionSlice.reducer;


// Call external Api here

export const getAllMissions = () => async(dispatch) => {
    try {
        dispatch(setLoading({loading: true}));
        const jsonData = fetch(ALL_PROGRAMMS).then(res => res.json());
        const missions = await jsonData;
        dispatch(setMissionData({missions}));
        dispatch(setLoading({loading: false}));

    }catch(error) {
        dispatch(setError({error}));
        dispatch(setLoading({loading: false}));
    }
}

export const getLayunchYearMissions = (year) => async(dispatch) => {
    try {
        dispatch(setLoading({loading: true}));
        const jsonData = fetch(`${ALL_PROGRAMMS}&launch_year=${year}`).then(res => res.json());
        const missions = await jsonData;
        dispatch(setMissionData({missions}));
        dispatch(setLoading({loading: false}));

    }catch(error) {
        dispatch(setError({error}));
        dispatch(setLoading({loading: false}));
    }
}

export const getSuccessfulLaunchMissions = (val) => async(dispatch) => {
    const boolVal = val === 'True' ? true : false;
    try {
        dispatch(setLoading({loading: true}));
        const jsonData = fetch(`${ALL_PROGRAMMS}&launch_success=${boolVal}`).then(res => res.json());
        const missions = await jsonData;
        dispatch(setMissionData({missions}));
        dispatch(setLoading({loading: false}));

    }catch(error) {
        dispatch(setError({error}));
        dispatch(setLoading({loading: false}));
    }
}

export const setSelectedYearConfig = (selectedYear) => async(dispatch) => {
    try {
        dispatch(setLoading({loading: true}));
        
        dispatch(setSelectedYear({selectedYear}));
        dispatch(setLoading({loading: false}));

    }catch(error) {
        dispatch(setError({error}));
        dispatch(setLoading({loading: false}));
    }
}

export const setSelectedSuccessLaunchConfig = (selectedSuccessLaunch) => async(dispatch) => {
    try {
        dispatch(setLoading({loading: true}));
        
        dispatch(setSelectedSuccessLaunch({selectedSuccessLaunch}));
        dispatch(setLoading({loading: false}));

    }catch(error) {
        dispatch(setError({error}));
        dispatch(setLoading({loading: false}));
    }
}

export const setSelectedSuccessLandingConfig = (selectedSuccessLanding) => async(dispatch) => {
    try {
        dispatch(setLoading({loading: true}));
        
        dispatch(setSelectedSuccessLanding({selectedSuccessLanding}));
        dispatch(setLoading({loading: false}));

    }catch(error) {
        dispatch(setError({error}));
        dispatch(setLoading({loading: false}));
    }
}

export const resetAllSelections = () => async(dispatch) => {
    try {
        dispatch(setLoading({loading: true}));
        dispatch(resetSelections());
        dispatch(setLoading({loading: false}));

    }catch(error) {
        dispatch(setError({error}));
        dispatch(setLoading({loading: false}));
    }
}