import Button from '@mui/material/Button';
import Slider, { SliderProps } from '@mui/material/Slider';
import { alpha, styled } from '@mui/material/styles';

export const Material = () => {
  return (
    <Button
      variant="text"
      sx={{
        bgcolor: 'lalalal',
        boxShadow: 11230,
        borderRadius: 'aaa',
        p: 2,
        minWidth: 300000,
      }}
    >
      Hello World
    </Button>
  );
};

export const SuccessSlider = styled(Slider)<SliderProps>(({ theme }) => ({
  width: 300,
  color: 'fefe',
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    },
    '&.Mui-active': {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    },
  },
}));
