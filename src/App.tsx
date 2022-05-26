import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Home } from './views/index';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const App = () => {
  const common = useSelector((state: RootState) => state.common);

  const [open, setOpen] = useState<boolean>(common?.error?.hasError);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    setOpen(common?.error?.hasError)
  }, [common])

  return (
    <>
      <Home />
      <Snackbar
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert
          severity='error'
          sx={{ width: '100%' }}
        >
          {common?.error?.errorLabel}
        </Alert>
      </Snackbar>
    </>
  )
}

export default App;
