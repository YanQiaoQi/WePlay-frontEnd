import styles from './PopUpWindow.less';

/**
 *
 * @param {*} param0
 *    @property {state} mode 弹框模式
 *    @property {setState} setMode 设置弹窗模式
 *    @property {array} inputTitles 请求数据
 * @returns
 */
function PopUpWindow({ mode, setMode, inputTitles, confirmCallback = null }) {
  let { isActive = false, info = null } = mode;
  let getReguestBody = (titleArr) => {
    let res = {};
    for (let i = 0; i < titleArr.length; i++) {
      res[titleArr[i].reqKey] = '';
    }
    return res;
  };
  let requestBody = getReguestBody(inputTitles);

  let setStyle = (event, key, value) => {
    event.target.style[key] = value;
  };
  let inputHandler = (type) => (e) => {
    switch (type) {
      case 'focus': {
        setStyle(e, 'borderColor', '#007fff');
        break;
      }
      case 'blur': {
        setStyle(e, 'borderColor', '#e9e9e9');
        let key = e.target.name;
        let value = e.target.value;
        requestBody[key] = value;
        console.log(requestBody);
        break;
      }
      default: {
        console.error('请设定');
      }
    }
  };
  let closeBtnHandler = (type) => (e) => {
    switch (type) {
      case 'click': {
        setMode({ isActive: false, info: null });
        break;
      }
      case 'mouseEnter': {
        setStyle(e, 'opacity', 0.4);
        break;
      }
      case 'mouseLeave': {
        setStyle(e, 'opacity', 1);
        break;
      }
      default:
        break;
    }
  };
  let inputGroups = inputTitles.map((item) => {
    let { title, reqKey, type } = item;
    return (
      <div key={reqKey} className={styles.itemContainer}>
        <input
          className={styles.itemInput}
          type={type}
          autoComplete="off"
          name={reqKey}
          placeholder={title}
          onFocus={inputHandler('focus')}
          onBlur={inputHandler('blur')}
        ></input>
      </div>
    );
  });

  return isActive ? (
    <div className={styles.activeContainer}>
      <div className={styles.windowContainer}>
        <div className={styles.windowTopContainer}>
          <div className={styles.windowTitle}>
            {info ? info : '请输入以下信息'}
          </div>
          <div
            className={styles.windowCloseBtn}
            onClick={closeBtnHandler('click')}
            onMouseEnter={closeBtnHandler('mouseEnter')}
            onMouseLeave={closeBtnHandler('mouseLeave')}
          ></div>
        </div>
        <div className={styles.windowInputContainer}>{info ? null : inputGroups}</div>
        <div
          className={styles.windowBtnContainer}
          onClick={confirmCallback(requestBody)}
        >
          确认
        </div>
      </div>
    </div>
  ) : null;
}

export default PopUpWindow;
