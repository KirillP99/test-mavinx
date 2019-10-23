import React from 'react';
import Styles from './MainContent.module.scss';

const MainContentList = () => {
  console.log(Styles);
  const listData = [
    {
      id: 1,
      title: 'Дизайн сайта UI и UX',
      desc: 'Рекламные компании говорят, что реклама необходима и важна',
      tags: [
        {
          id: 1,
          title: '#landing page',
        },
        {
          id: 2,
          title: '#Логотип',
        },
        {
          id: 3,
          title: '#Промо сайт',
        },
      ],
      price: ' 1 840$',
      time: '1-2 месяца',
    },
    {
      id: 2,
      title: 'Дизайн сайта UI и UX',
      desc: 'Рекламные компании говорят, что реклама необходима и важна',
      tags: [
        {
          id: 1,
          title: '#landing page',
        },
        {
          id: 2,
          title: '#Логотип',
        },
        {
          id: 3,
          title: '#Промо сайт',
        },
      ],
      price: ' 1 840$',
      time: '1-2 месяца',
    },
    {
      id: 3,
      title: 'Дизайн сайта UI и UX',
      desc: 'Рекламные компании говорят, что реклама необходима и важна',
      tags: [
        {
          id: 1,
          title: '#landing page',
        },
        {
          id: 2,
          title: '#Логотип',
        },
        {
          id: 3,
          title: '#Промо сайт',
        },
      ],
      price: ' 1 840$',
      time: '1-2 месяца',
    },
    {
      id: 4,
      title: 'Дизайн сайта UI и UX',
      desc: 'Рекламные компании говорят, что реклама необходима и важна',
      tags: [
        {
          id: 1,
          title: '#landing page',
        },
        {
          id: 2,
          title: '#Логотип',
        },
        {
          id: 3,
          title: '#Промо сайт',
        },
      ],
      price: ' 1 840$',
      time: '1-2 месяца',
    },
    {
      id: 5,
      title: 'Дизайн сайта UI и UX',
      desc: 'Рекламные компании говорят, что реклама необходима и важна',
      tags: [
        {
          id: 1,
          title: '#landing page',
        },
        {
          id: 2,
          title: '#Логотип',
        },
        {
          id: 3,
          title: '#Промо сайт',
        },
      ],
      price: ' 1 840$',
      time: '1-2 месяца',
    },
  ];

  return (
    <section className={Styles.List}>
      <h2 className={Styles.List__Title}>Найдено <span>(192 дизайн)</span></h2>
      {
          listData.map(item => (
            <article key={item.id} className={Styles.List__Item}>
              <div className={Styles.List__Desc}>
                <h2 className={Styles.List__ItemTitle}>{item.title}</h2>
                <p>{item.desc}</p>
                <p className={Styles.List__Tags}>
                  {
                    item.tags.map(tag => (
                      <span className={Styles.List__Span} key={tag.id}>{tag.title}</span>
                    ))
                  }
                </p>
              </div>
              <div className={Styles.List__Total}>
                <p>{item.price}</p>
                <p>{item.time}</p>
              </div>
            </article>
          ))
        }
    </section>
  );
};

export default MainContentList;
