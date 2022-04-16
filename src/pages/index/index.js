import Layout from '../components/Layout/Layout';
import Space from '../components/Space/Space';
import Logo from '../components/Logo/Logo';
import { ButtonList } from '../components/Button/Button';
import Carousel from './components/Carousel';
import Introduction from './components/Introduction/Introduction';

const { Header, Content } = Layout;

function Index() {
  let carouselData = [
    {
      content: '物理机',
      key: 'image1',
      imageUrl: '',
    },
    {
      content: '虚拟',
      key: 'image2',
      imageUrl: '',
    },
    {
      content: '随便',
      key: 'image3',
      imageUrl: '',
    },
  ];
  let leftButtonListSettings = [
    { title: '主页', action: function () {}, type: 'common' },
    { title: '视频介绍', action: function () {}, type: 'common' },
    { title: 'SFE3', action: function () {}, type: 'common' },
    { title: 'qq群指令', action: function () {}, type: 'common' },
    { title: '联系我们', action: function () {}, type: 'common' },
  ];
  let rightButtonListSettings = [
    {
      title: 'Login',
      action: function () {},
      type: 'common',
    },
    {
      title: 'Sign Up',
      action: function () {},
      type: 'signUp',
    },
  ];
  let introductionSettings = {
    title1: '支持多种游戏',
    title2: '赶紧来玩吧',
    items: [
      {
        title: '我的世界',
        description: 'Mojang Studios',
        gameType: '生存、创造',
        index: 0,
      },
      {
        title: '铁锈战争',
        description: 'Corroding Games',
        gameType: '战争',
        index: 1,
      },
      {
        title: '像素工厂',
        description: 'AnukenDev',
        gameType: '策略',
        index: 2,
      },
      {
        title: '泰拉瑞亚',
        description: 'Re-Logic',
        gameType: '动作，冒险',
        index: 3,
      },
    ],
  };
  return (
    <Layout>
      <Header
        type="absolute"
        headerHeight="120px"
        headerWidth="1350px"
        style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.07)' }}
      >
        <Space size="large">
          <Logo type="IMG" />
          <ButtonList ui={leftButtonListSettings} style={{ color: 'white' }} />
        </Space>
        <ButtonList ui={rightButtonListSettings} style={{ color: 'white' }} />
      </Header>
      <Content>
        <Carousel data={carouselData} />
        <Introduction {...introductionSettings} />
      </Content>
    </Layout>
  );
}
export default Index;
