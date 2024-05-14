import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useHeaderTitlesStore } from "@/stores/headerTitles";

export function useResizable() {
  const headerTitlesStore = useHeaderTitlesStore();
  const { headerTitles } = storeToRefs(headerTitlesStore);

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
        const newWidth = Math.max(startWidth + deltaX, 10);
        headerTitles.value[index].width = newWidth;
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
