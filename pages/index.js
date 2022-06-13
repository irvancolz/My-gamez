import { useEffect } from 'react';
import Components from '../components';

export default function Home() {
  const key = '6ea40549a69642da96e954d2c0aec0f1';
  const {
    Layout, 
    Topnav, 
    MainBanner,
    GameDesc,
    GameStory,
    Reviews} = Components()

  function getGames(){
    fetch(`https://rawg.io/api/games/622492/achievements?&key=${key}`)
    .then(response => response.json())
    .then(data => console.log(data))

  }
  useEffect(() =>{
    // getGames()
  })
  return (
    <Layout home>
      <Topnav />
      <MainBanner />
      <GameDesc />
      <GameStory />
      <Reviews />
      <p>requirements</p>
      <p>achievements</p>
      <p>same series</p>
      <p>same categories</p>
      <p>tags</p>
    </Layout>
  );
}