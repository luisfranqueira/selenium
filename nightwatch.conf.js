require('babel-core/register');

const config = require('config');
const path = require('path');

const binPath = path.resolve(__dirname, 'node_modules', 'nightwatch', 'bin');

module.exports = {
  globals_path: './globals',
  output_folder: 'reports',
  page_objects_path: 'src/e2e/pages',
  selenium: {
    cli_args: {
      'webdriver.chrome.driver' : path.resolve(__dirname, 'node_modules', 'nightwatch', 'bin', 'chromedriver')
    },
    host: '127.0.0.1',
    port: 4444,
    server_path: path.resolve(__dirname, 'node_modules', 'nightwatch', 'bin', 'selenium.jar'),
    start_process: true
  },
  src_folders: ["src/e2e"],
  test_runner: 'mocha',
  test_settings: {
    default: {
      desiredCapabilities: {
        acceptSslCerts: true,
        browserName: 'chrome',
        javascriptEnabled: true
      },
      launch_url: config.get('server.hostname')
    },
    headless: {
      desiredCapabilities: {
        acceptSslCerts: true,
        browserName: 'chrome',
        chromeOptions : {
          args : ["headless", "no-sandbox", "disable-gpu"]
        },
        javascriptEnabled: true
      },
      launch_url: config.get('server.hostname'),
      silent: true
    }
  }
}

/**
 * The `selenium-download` does exactly what it's name suggests:
 * It downloads (or updates) the version of Selenium (& chromedriver)
 * on your localhost where it will be used by Nightwatch.
 * The following code checks for the existence of `selenium.jar` before trying to run our tests.
 */

require('fs').stat(path.resolve(binPath, 'selenium.jar'), (err, stat) => {
  if(err || !stat || stat.size < 1) {
    require('selenium-download').ensure(binPath, (error) => {
      if(error) {
        throw new Error(error);
      }
    });
  }
});

