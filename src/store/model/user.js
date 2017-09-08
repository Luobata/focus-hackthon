const state = {
    userName: ''
};

const mutations = {
    login (state, data) {
        state.userName = data.showname;
        console.log(data);
    }
};

const actions = {
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
