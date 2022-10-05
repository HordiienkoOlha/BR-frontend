import s from './ReadingNowMobile.module.css';
import { useTranslation } from 'react-i18next';

const ReadingNowMobile = ({ readingNowListBooks }) => {
  const { t } = useTranslation();

  return (
    <section className={s.readingNowMobileSection}>
      <h2 className={s.title}>{t('library.reading')}</h2>
      <ul className={s.card}>
        {readingNowListBooks.map(
          ({ _id, bookTitle, author, publicationDate, amountOfPages }) => {
            return (
              <li className={s.cardBook} key={_id}>
                <div className={s.cardBookWrapper}>
                  <h3 className={s.cardTitle}>{bookTitle}</h3>

                  <table className={s.cardTable}>
                    <tbody>
                      <tr className={s.cardTableBody}>
                        <th className={s.tableTitle}>{t('library.author')}:</th>
                        <td className={s.tableContent}>{author}</td>
                      </tr>
                      <tr className={s.cardTableBody}>
                        <th className={s.tableTitle}>{t('library.year')}:</th>
                        <td className={s.tableContent}>{publicationDate}</td>
                      </tr>
                      <tr className={s.cardTableBody}>
                        <th className={s.tableTitle}>{t('library.pages')}:</th>
                        <td className={s.tableContent}>{amountOfPages}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

export default ReadingNowMobile;
