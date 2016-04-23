fs = require('fs');

var posts_meta = fs.readdirSync('./_posts').filter(item => item.endsWith('.md'))
    .map(item => {
        var contents = fs.readFileSync('./_posts/' + item, 'utf-8');
        var jekyll_header = contents.split('---')[1];

        return {
            'key': item.substring(0, item.lastIndexOf('.')),
            'title': jekyll_header.substring((jekyll_header.indexOf('title: ') + 'title: '.length), jekyll_header.length).trim()
        }
    });

fs.writeFileSync('posts-meta.json', JSON.stringify(posts_meta).trim(), 'utf-8');
