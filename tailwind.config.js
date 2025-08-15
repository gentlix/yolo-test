/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ensure this points to your source code
    "./{app,components,actions}/**/*.{js,tsx,ts,jsx}",
    // If you use a `src` directory, add: './src/**/*.{js,tsx,ts,jsx}'
    // Do the same with `components`, `hooks`, `styles`, or any other top-level directories
  ],
  theme: {
    extend: {
      colors: {
        systemBlue: "var(--apple-systemBlue)",
        systemBrown: "var(--apple-systemBrown)",
        systemCyan: "var(--apple-systemCyan)",
        systemGreen: "var(--apple-systemGreen)",
        systemIndigo: "var(--apple-systemIndigo)",
        systemMint: "var(--apple-systemMint)",
        systemOrange: "var(--apple-systemOrange)",
        systemPink: "var(--apple-systemPink)",
        systemPurple: "var(--apple-systemPurple)",
        systemRed: "var(--apple-systemRed)",
        systemTeal: "var(--apple-systemTeal)",
        systemYellow: "var(--apple-systemYellow)",
        systemGray: "var(--apple-systemGray)",
        systemGray2: "var(--apple-systemGray2)",
        systemGray3: "var(--apple-systemGray3)",
        systemGray4: "var(--apple-systemGray4)",
        systemGray5: "var(--apple-systemGray5)",
        systemGray6: "var(--apple-systemGray6)",
        label: "var(--apple-label)",
        secondaryLabel: "var(--apple-secondaryLabel)",
        tertiaryLabel: "var(--apple-tertiaryLabel)",
        quaternaryLabel: "var(--apple-quaternaryLabel)",
        systemFill: "var(--apple-systemFill)",
        secondarySystemFill: "var(--apple-secondarySystemFill)",
        tertiarySystemFill: "var(--apple-tertiarySystemFill)",
        quaternarySystemFill: "var(--apple-quaternarySystemFill)",
        placeholderText: "var(--apple-placeholderText)",
        systemBackground: "var(--apple-systemBackground)",
        secondarySystemBackground: "var(--apple-secondarySystemBackground)",
        tertiarySystemBackground: "var(--apple-tertiarySystemBackground)",
        systemGroupedBackground: "var(--apple-systemGroupedBackground)",
        secondarySystemGroupedBackground:
          "var(--apple-secondarySystemGroupedBackground)",
        tertiarySystemGroupedBackground:
          "var(--apple-tertiarySystemGroupedBackground)",
        separator: "var(--apple-separator)",
        opaqueSeparator: "var(--apple-opaqueSeparator)",
        link: "var(--apple-link)",
        darkText: "var(--apple-darkText)",
        lightText: "var(--apple-lightText)",
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
