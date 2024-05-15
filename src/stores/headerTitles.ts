import type { Employee } from "@/lib/types";
import { defineStore } from "pinia";

type Header<T extends keyof Employee | "checkbox" | "group" | "actions"> = {
  name: T;
  title: string;
  width: number;
};

type HeaderTitle = Header<keyof Employee>;
type HeaderCol = Header<keyof Employee | "checkbox" | "group" | "actions">;

export const headerTitles: HeaderTitle[] = [
  { name: "title", title: "Full name / Health check", width: 300 },
  { name: "code", title: "Code", width: 100 },
  { name: "expiration", title: "Expiration", width: 120 },
  { name: "status", title: "Status", width: 100 },
  { name: "department", title: "Department", width: 120 },
  { name: "userStatus", title: "User status", width: 120 },
  { name: "jobTitle", title: "Job title", width: 150 },
];

type HeaderTitlesStore = {
  headerTitles: HeaderTitle[];
};

export const useHeaderTitlesStore = defineStore("headerTitlesStore", {
  state: (): HeaderTitlesStore => ({
    headerTitles: headerTitles,
  }),
  getters: {
    headerCols(state): HeaderCol[] {
      return [
        { name: "checkbox", title: "", width: 50 },
        { name: "group", title: "", width: 40 },
        ...state.headerTitles,
        { name: "actions", title: "", width: 50 },
      ];
    },
    tableWidth(state): number {
      return this.headerCols.reduce((res, { width }) => res + width, 0);
    },
  },
  actions: {
    setWidth(index: number, width: number) {
      this.headerTitles[index].width = width;
    },
  },
});
