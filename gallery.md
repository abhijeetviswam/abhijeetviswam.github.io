---
layout: default
title: gallery
permalink: /gallery/
---

<div class ="image-gallery">
  {% for imagefile in site.data.gallerydb %}
    {% capture filepath %}{{ site.imagepath.fullres }}{{ imagefile.filename }}{% endcapture %}
    {% assign file = site.static_files | where: "path", filepath | first %}
    {% if file %}
      <div class="image-box">
        {% for post in site.posts %}
          {% assign posttitle = post.url | split: "/" | last %}
          {% assign postexcerpt = "" %}
          {% assign imagesurl = filepath | relative_url %}
          {% if imagefile.post == posttitle %}
            {% if post.excerpt %}
              {% assign postexcerpt = post.excerpt | strip_html | truncatewords:12 , "... Read more" %}
            {% endif %}
            {% assign imagesurl = post.url %}
            {% break %}
          {% endif %}
        {% endfor %}
        <a href="{{ imagesurl }}" title="{{ imagefile.title }}" class="img-gallery">
          <img class="lazyload blur-up"
               data-sizes="auto"
               src="{{ site.imagepath.thumbs }}{{ file.basename }}-lq{{ file.extname }}" alt="{{ imagefile.title }}" style="width:100%"
               data-src="{{ site.imagepath.thumbs }}{{ file.basename }}-768{{ file.extname }}"
               data-srcset="{{ site.imagepath.thumbs }}{{ file.basename }}-320{{ file.extname }} 320w,
                            {{ site.imagepath.thumbs }}{{ file.basename }}-768{{ file.extname }} 768w,
                            {{ site.imagepath.thumbs }}{{ file.basename }}-1024{{ file.extname }} 1024w,
                            {{ site.imagepath.thumbs }}{{ file.basename }}-1920{{ file.extname }} 1920w"/>
        </a>
        <div class="card-info">
          <h3>{{ imagefile.title }}</h3>
          {{ postexcerpt }}
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>

<!-- TODO : rework gallery similar to this - -->
<!-- https://github.com/mmistakes/made-mistakes-jekyll/blob/master/src/_work/procreate-paintings.md?plain=1 -->
<!-- Last commit when I referred is 9ca2e52. Create 2 categories for artworks, -->
<!-- photographs. Each photo/drawing will have it's own page. Pull in the thumbnail -->
<!-- from the page like { for post in site.categories.photographs } -->
