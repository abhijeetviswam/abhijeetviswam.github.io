---
layout: default
title: gallery
imgagedir: photos/fullres/
thumbsdir: photos/thumbs/
permalink: /gallery/
---


<div class ="image-gallery">
  {% capture imagepath %}{{ site.imagesurl }}{{ page.imgagedir }}{% endcapture %} 
  {% capture thumbpath %}{{ site.imagesurl }}{{ page.thumbsdir }}{% endcapture %} 
  {% assign sorted = site.static_files | sort: 'date' | reverse %}
  {% for file in sorted %}
    {% if file.path contains imagepath %}
      {% if file.extname == '.jpg' %}
        {% assign filenameparts = file.path | split: "/" %}
        {% assign filename = filenameparts | last | replace: file.extname,"" %}
        <div class="image-box">
          <a href="{{ file.path | relative_url }}" title="{{ filename }}" class="img-gallery">
          <img src="{{ thumbpath }}{{ file.name }} " alt="{{ filename }}" /></a>
          <div class="card-info">
            <h3>{{ filename }}</h3>
          </div>
        </div>
      {% endif %}
    {% endif %}
  {% endfor %}
 </div>

<!-- TODO : rework gallery similar to this - -->
<!-- https://github.com/mmistakes/made-mistakes-jekyll/blob/master/src/_work/procreate-paintings.md?plain=1 -->
<!-- Last commit when I referred is 9ca2e52. Create 2 categories for artworks, -->
<!-- photographs. Each photo/drawing will have it's own page. Pull in the thumbnail -->
<!-- from the page like { for post in site.categories.photographs } -->
