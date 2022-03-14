---
layout: default
title: gallery
imagepath: /assets/images/photos/
imagethumbpath: /assets/images/photos/thumbs/
imagelist:
  - image_file: photo1.jpg
  - image_file: photo2.jpg
  - image_file: photo3.jpg
  - image_file: photo4.jpg
  - image_file: photo5.jpg
  - image_file: photo6.jpg
  - image_file: photo7.jpg
  - image_file: photo8.jpg
  - image_file: photo9.jpg
permalink: /gallery/
---

<div class="image-gallery">
    {% for image in page.imagelist %}
      <div class="image-box">
        <a href="{{ page.imagepath }}{{ image.image_file }}">
        <img src="{{ page.imagethumbpath }}{{ image.image_file | replace: ".jpg", ".gif"}}" class="img-gallery"/>
        </a>
      </div>
    {% endfor %}
</div>

<!-- TODO : rework gallery similar to this - -->
<!-- https://github.com/mmistakes/made-mistakes-jekyll/blob/master/src/_work/procreate-paintings.md?plain=1 -->
<!-- Last commit when I referred is 9ca2e52. Create 2 categories for artworks, -->
<!-- photographs. Each photo/drawing will have it's own page. Pull in the thumbnail -->
<!-- from the page like { for post in site.categories.photographs } -->
