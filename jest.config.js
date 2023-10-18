export default {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
	"^.+\\.svelte$": [
		"jest-transform-svelte",
		{
			"preprocess": true
		}
	]
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
};
