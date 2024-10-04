const cypress = require("cypress");

const{ defineConfig } = require('cypress')
const MultiReporter = require('cypress-multi-reporters');

module.exports=(on,config)=> {
    const options={
        reporterEnabled: 'spec,mocha-multi-reporters',
        mochaMultiReporterOptions:{
            'spec':{
                output:'cypress/reports/mocha-report.txt',
            }
        }
    }

MultiReporter(on, config,options)
return config
}