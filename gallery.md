---
layout: default
title: gallery
imagedir: photos/fullres/
thumbsdir: photos/thumbs/
permalink: /gallery/
---

<div class ="image-gallery">
  {% capture imagepath %}{{ site.imagesurl }}{{ page.imagedir }}{% endcapture %}
  {% capture thumbpath %}{{ site.imagesurl }}{{ page.thumbsdir }}{% endcapture %}
  {% for imagefile in site.data.gallerydb %}
    {% capture imagepathfull %}{{ imagepath }}{{ imagefile.filename }}{% endcapture %}
    {% assign file = site.static_files | where: "path", imagepathfull | first %}
    {% if file %}
      <div class="image-box">
        {% for post in site.posts %}
          {% assign posttitle = post.url | split: "/" | last %}
          {% assign postexcerpt = "" %}
          {% assign imagesurl = imagepathfull | relative_url %}
          {% if imagefile.post == posttitle %}
            {% if post.excerpt %}
              {% assign postexcerpt = post.excerpt | strip_html | truncatewords:12 , "... Read more" %}
            {% endif %}
            {% assign imagesurl = post.url %}
            {% break %}
          {% endif %}
        {% endfor %}
        <a href="{{ imagesurl }}" title="{{ imagefile.title }}" class="img-gallery">
          <img src="{{ thumbpath }}{{ file.basename }}.avif" alt="{{ imagefile.title }}" />
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
