"use client"

import CatBox from '@/components/cat-box';
import { useBearState } from '@/stores/use-bar-store'
import React from 'react'

const BearPage = () => {
    const bears = useBearState(state => state.bears); // get the total bear
    const addBear = useBearState(state => state.addBear); // add a new bear
    const removeBear = useBearState( state => state.removeBear); // remove a bear
  return (
    <>
        <div className="flex flex-col items-start p-12 gap-4">
            <h1 className='text-5xl font-semibold'>Bears: {bears}</h1>
            <div className="flex items-center gap-x-4">
                <button className='bg-green-600 text-white rounded shadow p-4 hover:bg-green-700 duration-300' onClick={addBear}>Add</button>
                <button className='bg-red-600 text-white rounded shadow p-4 hover:bg-red-700 duration-300' onClick={removeBear}>Remove</button>
            </div>
        </div>

        <CatBox />
    </>
  )
}

export default BearPage