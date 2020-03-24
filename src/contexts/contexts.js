import { createContext } from 'react';

import defaultValues from './defaultValues';

const SnackBarContext = createContext(defaultValues.snackBar);
SnackBarContext.displayName = 'SnackBar';

export { SnackBarContext };
