import { Drawer, useTheme } from '@mui/material';
import { Box } from '@mui/system';

export const MenuLateral: React.FC = ({ children }) => {
  const theme = useTheme();
  return (
    <>
      <Drawer variant='permanent'>
        <Box width={theme.spacing(28)}>
         Menu Lateral
        </Box>
      </Drawer>    

      <Box height='100vh' marginLeft={theme.spacing(28)}>

        {children}
      </Box>
    </>
  );
};