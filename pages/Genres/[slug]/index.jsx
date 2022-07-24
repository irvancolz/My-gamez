import React from 'react';
import Components from '../../../components'

export default function GenrePages() {
    const {NestedLayout,GenreHeader} = Components();
    const HeaderContent = {
      "id": 1,
      "name": "Racing",
      "slug": "racing",
      "games_count": 22370,
      "image_background": "https://media.rawg.io/media/screenshots/69b/69bb243ea9896ddfc2e051b58e81624d.jpg",
      "description": "<p>Racing games is the video game genre with a high focus on driving competition. Such games are usually presented from the first-person or a third-person perspective. It is noted that gamepads are generally more suited to control the vehicle than keyboard/mouse pair. Although car avatars may render real-life examples, there are many instances where spaceships, formless mechanisms and other fantastical entities take the role of the avatar. Grand Prix released in 1969 is considered to be the first racing game ever made. Racings is a defining genre of a video game which is, in turn, can be divided into a lot of sub-genres: for instance, a primary focus may be made on destroying enemies&#39; vehicles (FlatOut, Twisted Metal) or crushing as many environments as possible (Split/Second). Those mechanics can alternatively be mixed with open world structure or set in the defined assortment of separate racing events.</p>"
  }
  return (
    <NestedLayout>
        <GenreHeader content={HeaderContent}/>
    </NestedLayout>
  )
}
