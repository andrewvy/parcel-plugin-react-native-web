const resolveGlobal = require('resolve-global')
const Bundler = require(resolveGlobal.silent('parcel-bundler')) || require('parcel-bundler')
const Plugin = require('../lib/index')

let bundler = new Bundler('./example/index.html', {
  watch: true,
  minify: false,
  cache: false,
})

Plugin(bundler)

bundler.serve()

//"test": "rm -rf .cache && rm -rf dist && DEBUG=\"parcel-plugin-vue:*\" node test/index.js"

/*
const assert = require('assert');
const mdasset = require('../MarkdownAsset');
const path = require('path');

describe('MarkdownAsset', function() {
    it('should parse markdown correctly.', async function() {
        const result = 'module.exports=`<h1 id="test">Test</h1>\n<h2 id="h2">H2</h2>\n`';
        const instance = new mdasset(path.resolve(__dirname, './index.md'), {}, {});
        const processed = await instance.process();
        
        assert.equal(processed.js, result);
    });
    it('should parse markdown with images correctly.', async function() {
        const result = 'module.exports=`<h1 id="test">Test</h1>\n<h2 id="h2">H2</h2>\n<p><img src="/2fdf41fd143f7af67e0a6b4c11576a45.jpg" alt=""></p>\n`';
        const Parser = require('parcel-bundler/src/Parser');
        const instance = new mdasset(path.resolve(__dirname, './index.img.md'), {}, { 
            parser: new Parser(),
            publicURL: '/' 
        });
        const processed = await instance.process();
        assert.equal(processed.js, result);
    });
});
*/
