import path from "path"
import { fileURLToPath } from 'url';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  resolve: {
    alias: {
      // 创建模块别名
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
    // 配置模块解析
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'source-map', // 生成源映射
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'public'),
    // } 该写法和下面的是等效的，下面的是简写，用于指定静态文件的目录
    static: path.join(__dirname, 'dist'), // 本地服务器的根目录
    hot: true,
    compress: true,
    port: 9000, // 服务器端口
  },
  experiments: {
    outputModule: false, // 关闭 outputModule
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 添加 HMR 插件
  ],
}

/**
 * 注意事项：
 * HMR 目前对 outputModule 的支持有限，因此需要关闭 outputModule
 */