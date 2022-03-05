---
layout: default
title: gallery
images:
  - image_path: /assets/images/photos/photo1.jpg
  - image_path: /assets/images/photos/photo2.jpg
  - image_path: /assets/images/photos/photo3.jpg
  - image_path: /assets/images/photos/photo4.jpg
  - image_path: /assets/images/photos/photo5.jpg
  - image_path: /assets/images/photos/photo6.jpg
  - image_path: /assets/images/photos/photo7.jpg
  - image_path: /assets/images/photos/photo8.jpg
  - image_path: /assets/images/photos/photo9.jpg
permalink: /gallery/
---

<div class="image-gallery">
    {% for image in page.images %}
      <div class="image-box">
        <img src="{{ image.image_path }}" class="img-gallery"/>
      </div>
    {% endfor %}
</div>
