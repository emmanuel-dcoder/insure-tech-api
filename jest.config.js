module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@product/(.*)$': '<rootDir>/src/product/$1',
        '^@product-category/(.*)$': '<rootDir>/src/product-category/$1',
        '^src/(.*)$': '<rootDir>/src/$1',
    },
};
//# sourceMappingURL=jest.config.js.map