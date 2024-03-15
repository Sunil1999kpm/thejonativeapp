import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { ArrowRightCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  gap: '20px', // Adjusted gap for smaller screens
});

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '500px',
});

const InputField = styled(TextField)({
  width: '100%',
});

const TemperatureInputPage = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      temperature: formData.get('temperature'),
      temperature2: formData.get('temperature2'),
      temperature3: formData.get('temperature3'),
      tolerance: formData.get('tolerance'),
      pressure: formData.get('pressure'),
      pressure2: formData.get('pressure2'),
      pressure3: formData.get('pressure3'),
      tolerance2: formData.get('tolerance2'),
      time: formData.get('time'),
    };
    console.log(data);
  };

  return (
    <div
      style={{
        backgroundColor: "#dad7cd",
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container>
        <FormContainer component="form" noValidate onSubmit={handleSubmit}>
          <Typography variant="h4" component="h1" gutterBottom>
            Set Temperatures
          </Typography>
          <InputField required id="temperature" name="temperature" label="Temperature-1 °C" variant="outlined" />
          <InputField required id="temperature2" name="temperature2" label="Temperature-2 °C " variant="outlined" />
          <InputField required id="temperature3" name="temperature3" label="Temperature-3 °C" variant="outlined" />
          <InputField required id="tolerance" name="tolerance" label="Tolerance  (±) °C" variant="outlined" />
        </FormContainer>

        <FormContainer component="form" noValidate onSubmit={handleSubmit}>
          <Typography variant="h4" component="h1" gutterBottom>
            Set Pressures
          </Typography>
          <InputField required id="pressure" name="pressure" label="Pressure-1 bar" variant="outlined" />
          <InputField required id="pressure2" name="pressure2" label="Pressure-2 bar" variant="outlined" />
          <InputField required id="pressure3" name="pressure3" label="Pressure-3 bar" variant="outlined" />
          <InputField required id="tolerance2" name="tolerance2" label="Tolerance (±) bar" variant="outlined" />
        </FormContainer>

        <FormContainer component="form" noValidate onSubmit={handleSubmit}>
          <Typography variant="h4" component="h1" gutterBottom>
            Set Curing Time
          </Typography>
          <InputField required id="time" name="time" label="Curing Time" variant="outlined" />
          <Button component={Link} to="/Heatingplates" variant="contained" sx={{ backgroundColor: "#3a5a40", mt: 2 }} endIcon={<ArrowRightCircle size="20" />}>
            Heat Plate Selection
          </Button>
        </FormContainer>
      </Container>
    </div>
  );
};

export default TemperatureInputPage;
