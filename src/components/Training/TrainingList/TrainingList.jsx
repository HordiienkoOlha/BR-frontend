import s from './TrainingList.module.css';
import sprite from './sprite.svg';

const TrainingList = ({
  trainingBooks,
  isActiveTraining,
  deleteBookFromList,
}) => {
  const headerList = ['Title', 'Author', 'Year', 'Pages'];
  return (
    <div className={s.trainingWrapper}>
      <ul className={s.header}>
        {headerList.map(title => (
          <li className={s.header_item} key={title}>
            {title}
          </li>
        ))}
      </ul>
      <ul className={s.list}>
        {trainingBooks?.map(
          (
            {
              _id: id,
              bookTitle: title,
              author,
              amountOfPages: pages,
              publicationDate: date,
            },
            index
          ) => (
            <li className={s.item} key={index}>
              <p>
                <svg className={s.icon} width="22" height="17">
                  <use href={`${sprite}#icon-grey-book`}></use>
                </svg>
                {title}
              </p>
              <p>{author}</p>
              <p>{date}</p>
              <p>{pages}</p>{' '}
              <button
                type="button"
                onClick={() => {
                  deleteBookFromList(id);
                }}
                className={s.delete}
              >
                <svg className={s.icon} width="22" height="17">
                  <use href={`${sprite}#icon-delete`}></use>
                </svg>
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default TrainingList;
