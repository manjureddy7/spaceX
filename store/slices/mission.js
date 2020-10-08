import { createSlice } from '@reduxjs/toolkit';
import { ALL_PROGRAMMS } from '../../api/url'

// Creating slice gives us power to create reducer functions & actions on the fly
// Reduxjs/toolkit under the hood uses immer.js so we can directly mutate our store state

// This is an individual slice


const missionSlice = createSlice({
    name: 'mission',
    initialState: {
        missions: [],
        loading: false,
        error: '',
        selectedyear: '',
        selectedSuccessLaunch: '',
        selectedSuccessLanding: '',
        launchYear: '',
        launchSuccess: ''
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
            state.launchYear = '';
            state.launchSuccess = '';
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
    resetSelections,
    } = missionSlice.actions;
export default missionSlice.reducer;


// This function will be responsible for filtering & getting Data
export const getFilteredLaunchMissions = () => async(dispatch, state) => {
    const selectedYear = state().missions.selectedyear;
    const launchStatus = state().missions.selectedSuccessLaunch;
    const boolVal = launchStatus === 'True' ? true : false;
    try {
        if(selectedYear.toString().length > 0 && launchStatus.length > 0) {
            const url = `${ALL_PROGRAMMS}&launch_success=${boolVal}&launch_year=${selectedYear}`;
            const jsonData = await fetch(url);
            const missions = await jsonData.json();
            dispatch(setMissionData({missions}));
            return;
        }
        if(selectedYear.toString().length > 0) {
            const url = `${ALL_PROGRAMMS}&launch_year=${selectedYear}`;
            const jsonData = await fetch(url);
            const missions = await jsonData.json();
            dispatch(setMissionData({missions}));
            return;
        }
        if(launchStatus.toString().length > 0) {
            const url = `${ALL_PROGRAMMS}&launch_success=${boolVal}`;
            const jsonData = await fetch(url);
            const missions = await jsonData.json();
            dispatch(setMissionData({missions}));
            return;
        }
        const jsonData = fetch(ALL_PROGRAMMS).then(res => res.json());
        const missions = await jsonData;
        dispatch(setMissionData({missions}));
        dispatch(setLoading({loading: false}));

    }catch(error) {
        dispatch(setError({error}));
        dispatch(setLoading({loading: false}));
    }
}

// This function will be responsible to restting the currently applied filters
// so that user can do multiple operations
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