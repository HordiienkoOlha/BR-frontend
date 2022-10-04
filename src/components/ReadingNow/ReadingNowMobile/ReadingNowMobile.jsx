import PropTypes from 'prop-types';

import s from './ReadingNowMobile.module.css';

const ReadingNowMobile = ({ readingNowListBooks }) => {
  return (
    <section className={s.readingNowMobileSection}>
      <h2 className={s.title}>Reading now</h2>
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
                        <th className={s.tableTitle}>Author:</th>
                        <td className={s.tableContent}>{author}</td>
                      </tr>
                      <tr className={s.cardTableBody}>
                        <th className={s.tableTitle}>Year:</th>
                        <td className={s.tableContent}>{publicationDate}</td>
                      </tr>
                      <tr className={s.cardTableBody}>
                        <th className={s.tableTitle}>Pages:</th>
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

ReadingNowMobile.propTypes = {
  readingNowListBooks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      bookTitle: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publicationDate: PropTypes.number.isRequired,
      amountOfPages: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      rating: PropTypes.number,
      review: PropTypes.string,
    })
  ),
};

export default ReadingNowMobile;
