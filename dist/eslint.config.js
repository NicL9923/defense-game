"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_plugin_1 = __importDefault(require("@typescript-eslint/eslint-plugin"));
const parser_1 = __importDefault(require("@typescript-eslint/parser"));
const eslint_plugin_react_1 = __importDefault(require("eslint-plugin-react"));
const eslint_plugin_react_hooks_1 = __importDefault(require("eslint-plugin-react-hooks"));
const config = [
    {
        ignores: ['dist', 'node_modules'],
    },
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: parser_1.default,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
        },
        plugins: {
            '@typescript-eslint': eslint_plugin_1.default,
            react: eslint_plugin_react_1.default,
            'react-hooks': eslint_plugin_react_hooks_1.default,
        },
        settings: {
            react: { version: 'detect' },
        },
        rules: {
            ...(eslint_plugin_1.default.configs.recommended?.rules ?? {}),
            ...(eslint_plugin_react_1.default.configs.recommended?.rules ?? {}),
            ...(eslint_plugin_react_hooks_1.default.configs.recommended?.rules ?? {}),
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            'react/react-in-jsx-scope': 'off',
        },
    },
];
exports.default = config;
//# sourceMappingURL=eslint.config.js.map