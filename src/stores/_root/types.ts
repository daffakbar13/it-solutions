import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { store } from './store'

export type MyState = ReturnType<typeof store.getState>

export type MyThunkDispatch = ThunkDispatch<MyState, any, AnyAction>
