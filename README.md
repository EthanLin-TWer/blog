# Linesh's Blog
This is a blog forked from the template here: https://github.com/aigarsdz/brume. I'm starting to write my own blog and probably will further rewrite it myself using angular or something. 

## Usage

**Important:** The latest version of brume uses `site.baseurl` for links, therefore, if you want to put your site in a subdirectory, update the *_config.yml* file!

- Download the ZIP file and extract it's contents.
- Open *_config.yml* file and enter your site's URL and add additional configuration or update the existing one if needed.
- Open *_data/brume.yml* file and fill in values for site name (site title), author (your name) and description (blog description). This file contains all the custom information about your page. You can access it using `site.data.brume` object.
- Open *about/index.md* file and add information about you or your site. You can delete this file and directory if not needed.
- Open *_data/links.yml* and add additional links or update the existing ones that you want to be displayed in the navigation menu.
- If you don't want to use CC BY-NC 4.0 licence for the content, then you should change the footer text, which is located in *_layouts/default.html*.
- Generate your site and be happy!

## Theme customization

This theme has 4 predefined colors that can be used for links:

- azul
- ruby
- amber
- avocado

![Color Examples](https://dl.dropboxusercontent.com/u/9924988/colors_new.png)

By default it uses *azure*, but if you want to select another one just change the second class of `container` div in *_layouts/default.html* to one of the provided names.
