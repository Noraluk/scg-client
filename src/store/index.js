import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        xyz: {
            x: null,
            y: null,
            z: null,
        },
        bc: {
            b: null,
            c: null,
        },
        lineNoti: {
            message: '',
        }
    },

    getters: {
        XYZ: state => {
            return state.xyz
        },
        BC: state => {
            return state.bc
        }
    },

    mutations: {
        SET_XYZ: (state, payload) => {
            state.xyz.x = payload.X
            state.xyz.y = payload.Y
            state.xyz.z = payload.Z
        },
        SET_BC: (state, payload) => {
            state.bc.b = payload.B
            state.bc.c = payload.C
        },
    },

    actions: {
        GET_XYZ: async (context) => {
            let { data } = await Axios.get("http://localhost:5000/find-xyz")
            context.commit('SET_XYZ', data)
        },
        GET_BC: async (context) => {
            let { data } = await Axios.get("http://localhost:5000/find-bc")
            context.commit('SET_BC', data)
        },
    }
})