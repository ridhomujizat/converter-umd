const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "rappid-umd.js",
    library: "rappid",
    libraryTarget: "umd",
    libraryExport: "default",
  },
  externals: {
    react: 'react',
  },
};
