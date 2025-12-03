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
          <Typography variant="h4" component="div" sx={{ color: themeColors.purpleLogo, fontWeight: 'bold', fontFamily: 'serif' }}>
            B
          </Typography>
          <Typography variant="h5" sx={{ color: themeColors.purpleLogo, letterSpacing: 1, fontWeight: 'bold', fontFamily: 'serif', ml: 0.5 }}>
            YTE WISE
          </Typography>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/login" passHref>
            <Button 
              variant="contained"
              startIcon={<ExitToAppIcon />} 
              sx={{ bgcolor: '#E0E0E0', color: '#000', borderRadius: 2, textTransform: 'none', px: 2.5, py: 0.75, '&:hover': { bgcolor: '#D5D5D5' } }}
            >
              Sair
            </Button>
          </Link>
        </div>
      </Paper>

      <Typography variant="h4" sx={{ color: '#333333', fontWeight: 'bold', letterSpacing: 0.2, mb: 3 }}>
        Perfil do Funcionário
      </Typography>

      <Paper elevation={1} sx={{ p: 3, mb: 6 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '160px 1fr' }, gap: 3, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar alt={employeeData.name} src={employeeData.profilePic} sx={{ width: 140, height: 140 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>{employeeData.name}</Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>Matrícula do Trabalhador</Typography>
            <Typography variant="body1" sx={{ color: '#616166', mb: 1 }}>{employeeData.matricula}</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>Cargo</Typography>
            <Typography variant="body1" sx={{ color: '#616166' }}>{employeeData.cargo}</Typography>
          </Box>
        </Box>
      </Paper>

      <Paper elevation={1} sx={{ p: 3, mb: 6 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>Dados Pessoais</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Data de Nascimento:</Typography>
            <Typography variant="body1" sx={{ color: '#616166' }}>{employeeData.dob}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Naturalidade:</Typography>
            <Typography variant="body1" sx={{ color: '#616166' }}>{employeeData.nationality}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Estado Natal:</Typography>
            <Typography variant="body1" sx={{ color: '#616166' }}>{employeeData.state}</Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ color: '#1976D2', fontWeight: 'bold', mb: 1 }}>Contato</Typography>
          <Box sx={{ pl: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>E-mail:</Typography>
            <Typography variant="body1" sx={{ color: '#616166', mb: 1 }}>{employeeData.email}</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Telefone:</Typography>
            <Typography variant="body1" sx={{ color: '#616166' }}>{employeeData.phone}</Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ color: '#1976D2', fontWeight: 'bold', mb: 1 }}>Endereço</Typography>
          <Grid container spacing={2} sx={{ pl: 1 }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>CEP:</Typography>
              <Typography variant="body1" sx={{ color: '#616166' }}>{employeeData.zip}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Bairro:</Typography>
              <Typography variant="body1" sx={{ color: '#616166' }}>{employeeData.neighborhood}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Logradouro:</Typography>
              <Typography variant="body1" sx={{ color: '#616166' }}>{employeeData.address}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Número:</Typography>
              <Typography variant="body1" sx={{ color: '#616166' }}>{employeeData.number}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <></>

      <></>
    </div>
  );
}
