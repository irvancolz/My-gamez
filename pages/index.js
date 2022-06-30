import Components from '../components';

export default function Home() {
  const {
    Layout, 
    Topnav, 
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
    <Layout home>
      <Topnav />
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
    </Layout>
  );
}