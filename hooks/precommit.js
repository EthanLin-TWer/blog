fs = require('fs');

// Fetch all posts and populate post info for posts_meta and posts_content separate use
var posts_info = fs.readdirSync('./_posts').filter(item => item.endsWith('.md'))
    .map(post_path => {
        var contents = fs.readFileSync('./_posts/' + post_path, 'utf-8');
        var jekyll_front_matter = contents.split('---')[1];

        return {
            'key': post_path.substring(0, post_path.lastIndexOf('.')),
            'name': post_path,
            'title': jekyll_front_matter.substring((jekyll_front_matter.indexOf('title: ') + 'title: '.length), jekyll_front_matter.length).trim(),
            'contents': contents.split('---')[2]
        }
    });

var posts_meta = posts_info.map(info => {
    return {
        'key': info.key,
        'date': info.name.substring(0, 10), // should be 2013-03-28-article-name.md like
        'title': info.title
    }
})

fs.writeFileSync('posts-meta.json', JSON.stringify(posts_meta).trim(), 'utf-8');

var posts_content = posts_info.map(info => {
    return {
        'key': info.key,
        'title': info.title,
        'contents': info.contents
    }
})

fs.writeFileSync('posts-content.json', JSON.stringify(posts_content).trim(), 'utf-8');
