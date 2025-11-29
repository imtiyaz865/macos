import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '#constants';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useWindowStore = create(
    immer((set) => ({
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

        openWindow: (windowKey, data = null) => {
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) {
                    console.error(`Window with key "${windowKey}" does not exist.`);
                    return; // Exit if the window does not exist
                }

                win.isOpen = true;
                win.zIndex = state.nextZIndex++;
                win.data = data ?? {};
            });
        },

        closeWindow: (windowKey) => {
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) return state;

                win.isOpen = false;
                return state;
            });
        },

        focusWindow: (windowKey) => {
            set((state) => {
                const win = state.windows[windowKey];
                if (!win) return;

                win.zIndex = state.nextZIndex++;
            });
        }
    })),
);

export default useWindowStore;