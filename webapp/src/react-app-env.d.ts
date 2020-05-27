/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    REACT_APP_THIS_IS_A_TEST_VAR: string
    }
}