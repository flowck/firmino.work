import Vue from "vue";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(LocalizedFormat);

Vue.filter("formatDate", (date: Date): string => {
  return date ? dayjs(date).format("LL") : "";
});
