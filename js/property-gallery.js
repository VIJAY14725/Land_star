(function ($) {
  $(function () {
    var gallery = document.querySelector('.property-image-viewer');
    if (!gallery) {
      return;
    }

    var mainButton = gallery.querySelector('.property-gallery-main');
    if (!mainButton) {
      return;
    }

    var mainImage = mainButton.querySelector('img');
    var counter = mainButton.querySelector('.property-photo-count');
    var thumbnails = Array.prototype.slice.call(gallery.querySelectorAll('.property-gallery-thumbnail'));
    var photos = thumbnails.map(function (thumbnail) {
      return {
        src: thumbnail.getAttribute('data-image'),
        alt: thumbnail.getAttribute('data-alt')
      };
    });
    var currentIndex = 0;
    var visibleCount = 4;

    function showPhoto(index) {
      currentIndex = (index + photos.length) % photos.length;
      var photo = photos[currentIndex];
      mainImage.src = photo.src;
      mainImage.alt = photo.alt;
      mainButton.setAttribute('aria-label', 'View photo ' + (currentIndex + 1) + ': ' + photo.alt);
      counter.textContent = (currentIndex + 1) + ' / ' + photos.length;

      thumbnails.forEach(function (thumbnail, thumbnailIndex) {
        var position = (thumbnailIndex - currentIndex + photos.length) % photos.length;
        thumbnail.hidden = position >= visibleCount;
        thumbnail.style.order = position;
        thumbnail.classList.toggle('is-active', thumbnailIndex === currentIndex);
        thumbnail.setAttribute('aria-pressed', thumbnailIndex === currentIndex ? 'true' : 'false');
      });
    }

    gallery.querySelector('.property-gallery-previous').addEventListener('click', function () {
      showPhoto(currentIndex - 1);
    });
    gallery.querySelector('.property-gallery-next').addEventListener('click', function () {
      showPhoto(currentIndex + 1);
    });
    gallery.querySelector('.property-gallery-thumbnails').addEventListener('click', function (event) {
      var thumbnail = event.target.closest('.property-gallery-thumbnail');
      if (thumbnail) {
        showPhoto(thumbnails.indexOf(thumbnail));
      }
    });

    mainButton.addEventListener('click', function () {
      $.magnificPopup.open({
        items: photos.map(function (photo) {
          return { src: photo.src, title: photo.alt };
        }),
        type: 'image',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },
        image: {
          verticalFit: true
        },
        callbacks: {
          change: function () {
            showPhoto(this.index);
          }
        }
      }, currentIndex);
    });

    mainButton.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') {
        showPhoto(currentIndex - 1);
      } else if (event.key === 'ArrowRight') {
        showPhoto(currentIndex + 1);
      }
    });

    var touchStartX = null;
    mainButton.addEventListener('touchstart', function (event) {
      touchStartX = event.changedTouches[0].screenX;
    }, { passive: true });
    mainButton.addEventListener('touchend', function (event) {
      if (touchStartX === null) {
        return;
      }
      var distance = event.changedTouches[0].screenX - touchStartX;
      touchStartX = null;
      if (Math.abs(distance) > 40) {
        showPhoto(currentIndex + (distance < 0 ? 1 : -1));
      }
    }, { passive: true });

    showPhoto(currentIndex);
  });
}(jQuery));
