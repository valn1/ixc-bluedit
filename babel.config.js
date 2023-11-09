module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
        "babel-plugin-styled-components",
        "react-native-reanimated/plugin",
    ],
    env: {
        test: {
            plugins: ["@babel/plugin-transform-modules-commonjs"],
        },
    },
};
