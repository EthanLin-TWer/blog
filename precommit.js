fs = require('fs');
q = require('q');

var key_title_map = [];

q.nfcall(fs.readdir, './_posts')
 .then(data => {
     key_title_map = data.filter(item => item.endsWith('.md'))
        .map(item => {
            q.nfcall(fs.readFile, './_posts/' + item, 'utf-8')
             .then((error, data) => {
                 if (error) return {};

                 var key_title = {};
                 var jekyll_header = data.split('---')[1];

                 key_title.key = item.substring(0, item.lastIndexOf('.'));
                 key_title.title = jekyll_header.substring((jekyll_header.indexOf('title: ') + 'title: '.length), jekyll_header.length).trim();

                 console.log(key_title.key);
                 console.log(key_title.title);

                 return key_title;
             })
        })
 })
 .then(console.log(key_title_map));
