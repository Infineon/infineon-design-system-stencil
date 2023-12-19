import { createStore } from "@stencil/store";

const { state } = createStore({
  showNumber: false,
  activeStep: 1
});

export default state;