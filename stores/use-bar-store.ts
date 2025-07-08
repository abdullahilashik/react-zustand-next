import {create} from 'zustand';

interface IBearState {
    bears: number,
    addBear: () => void,
    removeBear: () => void
}

export const useBearState = create<IBearState>()((set=> ({
    bears: 0,
    addBear: () => set( state => ({bears: state.bears + 1}) ),
    removeBear: () => set (state => ({bears: --state.bears}))
})));