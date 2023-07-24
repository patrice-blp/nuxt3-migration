import { mount } from "@vue/test-utils";
import ExampleBase from "@/components/base/ExampleBase.vue";

test("should render the correct text", () => {
  const wrapper = mount(ExampleBase);
  expect(wrapper.text()).toBe("A base component sample");
});
