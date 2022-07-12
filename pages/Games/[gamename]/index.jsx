import React from 'react';
import Components from '../../../components';

export default function index() {
    const {
        MainBanner,
        GameDesc,
        GameStory,
        Ratings,
        Requirements,
        Achievements,
        GameList,
        Tags,
        BgImageComponent} = Components()
      return (
        <>
          <MainBanner />
          <GameDesc />
          <div className='second-img-container'>
            <GameStory />
            <Ratings />
            <div className='wrapper'>
              <Requirements />
              <Achievements />
            </div>
            <BgImageComponent />
          </div>
          <GameList name='From The Same Series' />
          <GameList name='From The Same Categories' />
          <Tags />
        </>
      );
}
