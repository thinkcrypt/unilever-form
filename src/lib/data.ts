export const formFields = [
  {
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    isRequired: true,
    errorMsg: "Name is required",
    fieldKey: "name", // This key must match a key in formData
  },
  {
    label: "Contact Number",
    type: "number",
    placeholder: "Enter your contact number",
    isRequired: true,
    errorMsg: "Number is required",
    fieldKey: "contact", // This key must match a key in formData
  },
  {
    label: "Age",
    type: "number",
    placeholder: "Enter your age",
    isRequired: true,
    errorMsg: "Age is required",
    fieldKey: "age", // This key must match a key in formData
  },
  {
    label: "Area",
    type: "text",
    placeholder: "Enter your area",
    isRequired: true,
    errorMsg: "Area is required",
    fieldKey: "area", // This key must match a key in formData
  },
];

export const genderField = {
  label: "Gender",
  isRequired: true,
  errorMsg: "Number is required",
  fieldKey: "gender", // This key must match a key in formData
};
