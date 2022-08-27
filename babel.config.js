const presets = [
    [
      "@babel/preset-react",
      { targets: { browsers: ["last 2 versions", ">= 5% in KR"] } },
    ],
    "@babel/preset-env",
  ];
  
  const plugins = [];
  
  //   const env = {
  //     development: {
  //       plugins: ["babel-plugin-styled-components"],
  //     },
  //   };
  
  module.exports = { presets, plugins };
  