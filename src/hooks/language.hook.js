import { useContext } from 'react';

import {LanguageContext, LanguageContextDispatch} from '../contexts/language.context';

const LanguagesHook = () => {
    const {languagesState } = useContext(LanguageContext);
    const {languagesDispatch } = useContext(LanguageContextDispatch);

    const useLanguageState = () => {
        return languagesState
    }

}