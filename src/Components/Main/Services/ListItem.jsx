import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

export default function ListItem({ list , heading}) {
  const { t } = useTranslation();
  return (
    <div>
    <h3 className="text-xl font-bold md:text-2xl lg:text-3xl mb-5">{t(heading)}</h3>
      <ul className='lg:ml-5 min-h-[300px] sm:min-h-[215px] md:min-h-[190px] lg:min-h-[345px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1'>
        {list.map((item) => (
          <li
            key={item}
            className="flex lg:items-center gap-3 text-xs xs:text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-3 w-3 text-[#2c84f7]"
            >
              <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z"></path>
            </svg>
            <p>{t(item)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

ListItem.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    heading : PropTypes.string.isRequired,
  };