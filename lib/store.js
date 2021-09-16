import { useLayoutEffect } from "react";
import create from "zustand";
import createContext from "zustand/context";
import { persist } from "zustand/middleware";

let store;

const initialState = {
  notes: [],
};

const actions = (set) => {
  return {
    getNotes: (notes) => {
      set({ notes });
    },
    addNote: (newNote) => {
      set((state) => ({
        notes: [...state.notes, newNote],
      }));
    },
    updateNote: (updatedNote) => {
      set((state) => {
        const index = state.notes.findIndex(
          (note) => note.id === updatedNote.id
        );
        state.notes[index] = updatedNote;

        return {
          notes: [...state.notes],
        };
      });
    },
    deleteNote: (id) => {
      set((state) => {
        const filteredData = state.notes.filter((note) => note.id !== id);

        return {
          notes: filteredData,
        };
      });
    },
  };
};

const zustandContext = createContext();
export const ZustandProvider = zustandContext.Provider;

export const useStore = zustandContext.useStore;

export const initializeStore = (preloadedState = {}) => {
  return create(
    persist(
      (set, get) => ({
        ...initialState,
        ...preloadedState,
        ...actions(set),
      }),
      { name: "zustand-persist" }
    )
  );
};

export const useHydrate = (initialState) => {
  let _store = store ?? initializeStore(initialState);

  if (typeof window !== "undefined") {
    if (!store) {
      store = _store;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLayoutEffect(() => {
      if (initialState && store) {
        store.setState({
          ...store.getState(),
          ...initialState,
        });
      }
    }, [initialState]);
  }

  return _store;
};
