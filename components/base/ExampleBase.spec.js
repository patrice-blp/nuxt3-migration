import { mount } from "@vue/test-utils";
import ExampleBase from "@/components/base/ExampleBase.vue";

test("HelloWorld Component renders the correct text", () => {
  const wrapper = mount(ExampleBase);
  expect(wrapper.text()).toBe("A base component sample");
});
