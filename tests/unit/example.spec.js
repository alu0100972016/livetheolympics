import { shallowMount } from "@vue/test-utils";
import Toolbar from "@/components/Toolbar.vue";

describe("Toolbar.vue", () => {
  it("is a Vue instance", () => {
    const wrapper = shallowMount(Toolbar);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
