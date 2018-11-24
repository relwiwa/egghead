import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import es from 'react-intl/locale-data/es';

import App from './App';
import { flattenMessages } from './utils';
import messages from './messages';

addLocaleData([...en, ...es, ...fr]);

let locale = (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage
  || 'en-US';

if (messages[locale] === undefined) {
  locale = 'en-US';
}

ReactDOM.render(
  <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
