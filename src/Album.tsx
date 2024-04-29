import PhotoAlbum from "react-photo-album";
import photos from "./photos";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Album = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div>
        <h2>Álbum de Fotos</h2>
        <div className="album">
          <PhotoAlbum layout="masonry" photos={photos} onClick={({ index }) => setIndex(index)}  />
        </div>

        <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  )
}

export default Album