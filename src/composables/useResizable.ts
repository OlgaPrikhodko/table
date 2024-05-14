import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useEmployeesStore } from "@/stores/employees";

export function useResizable() {
  const employeeStore = useEmployeesStore();
  const { headerTitles } = storeToRefs(employeeStore);

  let startX = 0;
  let startWidth = 0;
  const resizing = ref(false);

  const startResize = (event: MouseEvent, index: number) => {
    startX = event.pageX;
    startWidth = headerTitles.value[index]?.width || 0;
    resizing.value = true;

    const onMouseMove = (event: MouseEvent) => {
      if (resizing) {
        const deltaX = event.pageX - startX;
        headerTitles.value[index].width = Math.max(startWidth + deltaX, 10); // Minimum width of 10px
      }
    };

    const onMouseUp = () => {
      resizing.value = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return { startResize };
}
