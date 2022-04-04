function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    extends: {
      colors: {
        primary: withOpacityValue('--my-color'),
        secondary: withOpacityValue('--color-secondary'),

      }
    }
  },

};
