import { resolve as _resolve, join } from 'path'

export const entry = './src/index.tsx'
export const output = {
  path: _resolve(__dirname, 'dist'),
  filename: 'bundle.js',
}
export const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss'],
}
export const module = {
  rules: [
    {
      test: /\.tsx?$/, // for ts and tsx files
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader', // Use sass-loader instead of node-sass
      ],
    },
  ],
}
export const devServer = {
  contentBase: join(__dirname, 'dist'),
  port: 3000,
}
