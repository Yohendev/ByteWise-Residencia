import React from 'react';
import Link from 'next/link';
import { 
  Box, 
  Typography, 
  Button, 
  Paper, 
  Avatar, 
  IconButton,
  Grid,
  Divider 
} from '@mui/material';
import { 
  ExitToApp as ExitToAppIcon 
} from '@mui/icons-material';
import { themeColors } from '../styles/auth-styles'; 

const employeeData = {
  profilePic: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop', 
  matricula: 'BTW89754',
  cargo: 'Analista de Dados Pleno',
  name: 'David Jeremias',
  dob: '16/09/1991',
  nationality: 'Recife',
  state: 'PE',
  email: 'davidjere098@gmail.com',
  phone: '81 9 91212-8909',
  zip: '57009-121',
  address: 'Rua de Jesus',
  number: '114',
  neighborhood: 'Casa Amarela',
};

export default function PerfilPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <Paper elevation={1} className="flex items-center justify-between p-4 mb-6">
        <div className="flex items-center">
          <Typography variant="h5" component="div" sx={{ color: themeColors.purpleLogo, fontWeight: 'bold', fontFamily: 'serif' }}>
            B
          </Typography>
          <Typography variant="h6" sx={{ color: themeColors.purpleLogo, letterSpacing: 1, fontWeight: 'bold', fontFamily: 'serif', ml: 1 }}>
            BYTE WISE
          </Typography>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/login" passHref> 
            <Button 
              variant="contained" 
              startIcon={<ExitToAppIcon />} 
              sx={{ bgcolor: themeColors.primaryDark, '&:hover': { bgcolor: '#1a2626' } }}
            >
              Sair
            </Button>
          </Link>
        </div>
      </Paper>

      <Typography variant="h5" className="text-gray-800 font-semibold mb-6">
        Perfil do Funcionário
      </Typography>

      <Paper elevation={1} className="p-6 mb-6">
        <Box className="flex items-center mb-4">
          <Avatar alt={employeeData.name} src={employeeData.profilePic} sx={{ width: 80, height: 80, mr: 3 }} />
          <div>
            <Typography variant="subtitle1" className="text-gray-600">Matrícula do Trabalhador</Typography>
            <Typography variant="h6" className="font-bold mb-1">{employeeData.matricula}</Typography>
            <Typography variant="subtitle1" className="text-gray-600">Cargo</Typography>
            <Typography variant="body1" className="font-medium">{employeeData.cargo}</Typography>
          </div>
        </Box>
        <Typography variant="h6" className="font-bold text-gray-800">{employeeData.name}</Typography>
      </Paper>

      <Paper elevation={1} className="p-6 mb-6">
        <Typography variant="h6" className="text-gray-800 font-semibold mb-4">Dados Pessoais</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" className="text-gray-600">Data de Nascimento:</Typography>
            <Typography variant="body1" className="font-medium">{employeeData.dob}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" className="text-gray-600">Naturalidade:</Typography>
            <Typography variant="body1" className="font-medium">{employeeData.nationality}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" className="text-gray-600">Estado Natal:</Typography>
            <Typography variant="body1" className="font-medium">{employeeData.state}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={1} className="p-6 mb-6">
        <Typography variant="h6" className="text-gray-800 font-semibold mb-4">Contato</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" className="text-gray-600">E-mail:</Typography>
            <Typography variant="body1" className="font-medium">{employeeData.email}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" className="text-gray-600">Telefone:</Typography>
            <Typography variant="body1" className="font-medium">{employeeData.phone}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={1} className="p-6">
        <Typography variant="h6" className="text-gray-800 font-semibold mb-4">Endereço</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" className="text-gray-600">CEP:</Typography>
            <Typography variant="body1" className="font-medium">{employeeData.zip}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" className="text-gray-600">Bairro:</Typography>
            <Typography variant="body1" className="font-medium">{employeeData.neighborhood}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" className="text-gray-600">Logradouro:</Typography>
            <Typography variant="body1" className="font-medium">{employeeData.address}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" className="text-gray-600">Número:</Typography>
            <Typography variant="body1" className="font-medium">{employeeData.number}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
