import { useEffect, useState } from 'react';
import styles from './index.less';

function Carousel({ data }) {
  function transformPropToState(info) {
    let ui = JSON.parse(JSON.stringify(info));
    ui.forEach((item, index) => {
      item.isActive = false;
      item.imageClassName = 'image' + index;
    });
    ui[0].isActive = true;

    let activeIndex = 0;
    return { activeIndex, ui };
  }
  const [state, setState] = useState(transformPropToState(data));
  const [isWorking, setisWorking] = useState(true);
  
  useEffect(() => {
    if (isWorking) {
      const id = setTimeout(() => {
        setImg(state.activeIndex + 1);
      }, 3000);

      return () => {
        clearInterval(id);
      };
    }
  }, [state, isWorking]);

  function setImg(index) {
    let { ui, activeIndex } = JSON.parse(JSON.stringify(state));
    if (index > ui.length - 1) index = 0;
    // 1. 更新 state
    //  1.1. 改变 ui
    //   将 全体 设为 false
    ui.forEach((item) => {
      item.isActive = false;
    });
    //   将 index 设为 true
    ui[index].isActive = true;
    //  1.2. 改变 activeIndex
    activeIndex = index;

    // 2. 改变 state
    setState({ ui, activeIndex });
  }

  let handlerSetImg = (index) => () => {
    setImg(index);
  };

  let handlerSetIsWorking = (isWorking) => () => {
    setisWorking(isWorking);
  };

  let images = state.ui.map((item) => {
    let { isActive, imageClassName } = item;
    return (
      <div
        key={imageClassName}
        className={isActive ? styles[imageClassName] : styles.inactiveImg}
        onMouseOver={handlerSetIsWorking(false)}
        onMouseLeave={handlerSetIsWorking(true)}
      />
    );
  });

  let buttons = state.ui.map((item, index) => {
    let { isActive } = item;
    return (
      <div
        key={index}
        className={isActive ? styles.activeButton : styles.inactiveButton}
        onClick={handlerSetImg(index)}
        onMouseOver={handlerSetIsWorking(false)}
        onMouseLeave={handlerSetIsWorking(true)}
      />
    );
  });

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.imageContainer}>{images}</div>
      <div className={styles.buttonContainer}>{buttons}</div>
    </div>
  );
}

export default Carousel;
