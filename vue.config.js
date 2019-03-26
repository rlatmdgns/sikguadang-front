"use strict";

module.exports = {
  devServer: {
    proxy: {
      // proxyTable 설정
      "": {
        target: "http://localhost:4000",
        publicPath: {
          "^/api": ""
        }
      }
    }
  }
};
