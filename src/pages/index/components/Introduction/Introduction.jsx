import styles from './Introduction.less';

function IntroItem({ title, description, gameType, index }) {
  let className = "item_contaienr"+index;
  return (
    <div
      className={styles[className]}
    >
      <div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
      <div>{gameType}</div>
    </div>
  );
}

function Introduction({ title1, title2, items }) {
  let intros = items.map((item) => {
    return <IntroItem key={item.title} {...item} />;
  });
  return (
    <div className={styles.intro_contaienr}>
      <div>{title1}</div>
      <div>{title2}</div>
      <div className={styles.items_contaienr}>{intros}</div>
    </div>
  );
}

export default Introduction;
