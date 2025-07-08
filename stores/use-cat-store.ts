import { createSelectors } from "@/utils/selector-generator";
import { SuffixPathnameNormalizer } from "next/dist/server/normalizers/request/suffix";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ICatBox {
  cats: {
    bigCats: number;
    smallCats: number;
  };
  increaseBigCats: () => void;
  increaseSmallCats: () => void;
  summary: () => string;
}

export const useCatStore = create<ICatBox>()(
  immer((set, get) => ({
    cats: {
      bigCats: 0,
      smallCats: 0,
    },
    increaseBigCats: () =>
      set((state) => ({
        cats: {
          ...state.cats,
          bigCats: state.cats.bigCats + 1,
        },
      })),
    increaseSmallCats: () => {
      set((state) => ({
        cats: {
          ...state.cats,
          smallCats: state.cats.smallCats + 1,
        },
      }));
    },
    summary: () => {
      const totalCats = get().cats.bigCats + get().cats.smallCats;
      return `You have a total of ${totalCats} ${
        totalCats > 1 ? "cats" : "cat"
      }`;
    },
  }))
);

export const useCatStoreImmer = createSelectors(
  create<ICatBox>()(
    immer((set, get) => ({
      cats: {
        bigCats: 0,
        smallCats: 0,
      },
      increaseBigCats: () => {
        set((state) => {
          state.cats.bigCats += 1;
        });
      },
      increaseSmallCats: () => {
        set((state) => {
          state.cats.smallCats += 1;
        });
      },
      summary: () => {
        const totalCats = get().cats.bigCats + get().cats.smallCats;
        return `You have a total of ${totalCats} ${
          totalCats > 1 ? "cats" : "cat"
        }`;
      },
    }))
  )
);
