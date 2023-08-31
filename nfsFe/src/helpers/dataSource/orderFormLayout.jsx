// orderFormData.js
// 1-abstracting the repeated form inputs using an array and mapping through it is a great way to reduce redundancy and improve readability.
// 2-Using an array structure like this, it becomes simpler to add, modify, or remove fields without altering the main JSX structure.
// 3-By adding the position attribute, we're now able to filter components based on their desired position ("left" or "right") and then map through them, rendering the appropriate components while respecting the HTML structure.
// 4-if a component in the formData array has a wrapper attribute, it will be wrapped with the specified div class when rendered. If not, it'll be rendered as usual.
const orderFormData = [
  {
    label: "Customer",
    inputId: "selCustomer",
    inputType: "select",
    optionsData: ["A", "B", "C"],
    name: "selCustomer",
    showLabel: false,
    placeholder: undefined,
    required: false,
    position: "left",
  },
  {
    label: "Shipping Adress",
    inputId: "shipAdress",
    inputType: "text",
    required: true,
    name: "shipAdress",
    placeholder: "placeholder",
    position: "left",
  },
  {
    label: "Shipping City",
    inputId: "shipCity",
    inputType: "text",
    required: true,
    name: "shipCity",
    placeholder: "placeholder",
    position: "left",
  },
  {
    label: "Shipping Mode",
    inputId: "shipMode",
    component: "ShippingModeInput",
    position: "left",
  },
  {
    label: "State",
    inputId: "selStatus",
    inputType: "select",
    optionsData: ["Pending", "Delivered", "Canceled"],
    name: "selStatus",
    showLabel: false,
    placeholder: undefined,
    required: false,
    position: "left",
  },

  {
    inputId: "grpOrderRows",
    component: "GrpOrderRows",
    position: "right",
    wrapper: "grpOrderRowsWrapper",
  },

  {
    inputId: "discountSelect",
    component: "DiscountSelect",
    position: "right",
    wrapper: "discountSelectWrapper",
  },
];

export default orderFormData;
