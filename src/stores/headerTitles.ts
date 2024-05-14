import type { Employee } from "@/lib/types";
import { defineStore } from "pinia";

type HeaderTitle = { name: keyof Employee; title: string; width: number };

export const headerTitles: HeaderTitle[] = [
  { name: "title", title: "Full name / Health check", width: 300 },
  { name: "code", title: "Code", width: 100 },
  { name: "expiration", title: "Expiration", width: 120 },
  { name: "status", title: "Status", width: 100 },
  { name: "department", title: "Department", width: 120 },
  { name: "userStatus", title: "User status", width: 100 },
  { name: "jobTitle", title: "Job title", width: 150 },
];

export const useHeaderTitlesStore = defineStore("headerTitlesStore", {
  state: (): { headerTitles: HeaderTitle[] } => ({
    headerTitles: headerTitles,
  }),
  actions: {
    setWidth(index: number, width: number) {
      this.headerTitles[index].width = width;
    },
  },
});
