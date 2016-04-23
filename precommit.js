fs = require('fs');
var posts = fs.readdirSync('./_posts').filter(item => item.endsWith('.md'));
/*
    Fetch post information and write to 'posts-meta.json'
*/
var posts_meta = posts.map(item => {
    var contents = fs.readFileSync('./_posts/' + item, 'utf-8');
    var jekyll_header = contents.split('---')[1];

    return {
        'key': item.substring(0, item.lastIndexOf('.')),
        'title': jekyll_header.substring((jekyll_header.indexOf('title: ') + 'title: '.length), jekyll_header.length).trim()
    }
});

fs.writeFileSync('posts-meta.json', JSON.stringify(posts_meta).trim(), 'utf-8');

var posts_content = posts.map(item => {
    var contents = fs.readFileSync('./_posts/' + item, 'utf-8');
    var jekyll_header = contents.split('---')[1];

    return {
        'key': item.substring(0, item.lastIndexOf('.')),
        'title': jekyll_header.substring((jekyll_header.indexOf('title: ') + 'title: '.length), jekyll_header.length).trim(),
        'contents': contents.split('---')[2]
    }
});

fs.writeFileSync('posts-content.json', JSON.stringify(posts_content).trim(), 'utf-8');
