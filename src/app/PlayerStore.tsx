/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer } from "react";

type PlayersType = {
  name: string;
  // totalMatch: number;
  // matchWin: number;
  // matchLose: number;
  // NoOfChampion: number;
}

type State = {
  players: PlayersType[];
}

type Action = 
  | { type: 'ADD_PLAYER'; payload: string }
  | { type: 'SET_PLAYERS'; payload: string }

const initialState: State = {
  players: []
}

const reducer = (state: State, action: Action) => {
  switch(action.type) {
    case 'ADD_PLAYER':
      return {
        ...state,
        players: [ ...state.players, { name: action.payload } ]
      }
    case 'SET_PLAYERS':
      return {
        ...state,
        players: [ ...state.players, { name: action.payload } ]
      }
    default:
      return state
  }
}

type PlayerContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </PlayerContext.Provider>
  )
} 

export function usePlayerContext() {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }

  return context;
}

