import Layout from '../components/Layout/Layout';
import Space from '../components/Space/Space';
import { ButtonList } from '../components/Button/Button';
import Carousel from './components/Carousel';
import styles from './index.less';

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
  return (
    <Layout>
      <Header type="fixed">
        <Space size="large">
          <ButtonList ui={leftButtonListSettings} />
        </Space>
        <ButtonList ui={rightButtonListSettings} />
      </Header>
      <Content>
        <Carousel data={carouselData} />
        <div style={{ height: '1000px' }}></div>
      </Content>
    </Layout>
  );
}
export default Index;
