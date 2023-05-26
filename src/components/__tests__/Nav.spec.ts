import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Nav from "../Nav.vue";

describe("Nav.vue", () => {
    const wrapper = shallowMount(Nav);
    it("should render properly", () => {
        expect(wrapper.vm).toBeTruthy();
    })
})
