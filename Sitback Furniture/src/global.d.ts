// src/global.d.ts
import '@testing-library/jest-dom'

declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveTextContent(text: string | RegExp): R
    }
  }
}
