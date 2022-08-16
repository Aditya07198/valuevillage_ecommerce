/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  future: {
    webpack5: true,
  },
  webpack: function (config, options) {
    config.experiments = {
      ...config.experiments,
      layers:true,
    };
    config.resolve = {
      ...config.resolve,

      fallback: {
        // fs: false,
        // net:false,
        // dns:false,
        // tls:false,
        // child_process:false,
        // async_hooks:false,
    }
    }
    return config;
  },
}

module.exports = nextConfig
