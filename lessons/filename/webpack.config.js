module.exports = {
  entry: {
    app: "./app.js",
    home: { import: './contact.js', filename: 'pages/[name].js' },
    about: { import: './about.js', filename: 'pages/[name].js' },
  },
  output: {
    path: __dirname + "/dist",
    clean: true, // 在生成文件之前清空 output 目录
  }
}