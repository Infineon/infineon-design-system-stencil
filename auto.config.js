const npmOptions = {
  exact: true,
};

module.exports = function rc() {
    return {
        plugins: [
            [ "npm", npmOptions ],
            "released"
        ],
        author: {
            name: "github-actions[bot]",
            email: "github-actions[bot]@users.noreply.github.com"
        }
    };
};