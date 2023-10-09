import { response } from "@/app/search/page";
import { create } from "zustand";

type SelectedDomain = {
  domainName: string;
} & response;

type AppState = {
  selectedDomain: SelectedDomain | null;
  setSelectedDomain: (response: SelectedDomain | null) => void;
};

const useAppState = create<AppState>((set) => ({
  selectedDomain: null,
  setSelectedDomain: (selectedDomain) => set({ selectedDomain }),
}));

type ModalState = {
  isOpen: boolean;
  toggle: () => void;
};

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export { useModalStore };
export default useAppState;
