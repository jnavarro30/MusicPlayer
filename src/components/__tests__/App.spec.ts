import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import App from "../../App.vue";

describe("App.vue", () => {
    it("should render properly", () => {
        const wrapper = shallowMount(App);
        expect(wrapper.vm).toBeTruthy();
    })
})
