import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Stack
} from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function NotFound() {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        bgcolor: 'grey.50'
      }}
    >
      <Card sx={{ maxWidth: 480, width: '100%', mx: 2 }}>
        <CardContent sx={{ pt: 3 }}>
          <Stack direction="row" spacing={2} alignItems="center" mb={2}>
            <ErrorOutlineIcon sx={{ fontSize: 32, color: 'error.main' }} />
            <Typography variant="h5" fontWeight="bold" color="text.primary">
              404 Page Not Found
            </Typography>
          </Stack>

          <Typography 
            variant="body2" 
            color="text.secondary" 
            mt={2}
          >
            Did you forget to add the page to the router?
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
