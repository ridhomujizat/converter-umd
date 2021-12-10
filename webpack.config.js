const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "formik-umd.js",
    library: "formik",
    libraryTarget: "umd",
    libraryExport: "default",
  },
  externals: {
    react: 'react',
  },
};
