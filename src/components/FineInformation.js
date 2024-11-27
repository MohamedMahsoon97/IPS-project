import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Select,
  MenuItem,
  List,
  ListItem,
  Divider,
} from '@mui/material';
import InfiIcon from '../assets/svg/InfoIcon';
import cardImg from '../assets/images-(5).png';
const FineInformation = ({ setActiveItem }) => {
  return (
    <Box sx={{ p: 0 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 6 }}
        backgroundColor="#fff"
        borderRadius={3}
        padding={2}
      >
        <Box>
          <Typography variant="h7">الرئيسية / </Typography>
          <Typography variant="h7">المخالفات الحالية / </Typography>
          <Typography variant="h7">تأكيد البيانات /</Typography>
          <Typography variant="h7" color="text.secondary">
            معلومات الغرامة
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          padding: '40px',
          gap: '12px',
        }}
        backgroundColor="#fff"
        display="flex"
        gap="20px"
      >
        <Box
          sx={{
            width: '50%',
          }}
        >
          <List
            sx={{
              listStyleType: 'disc',
              paddingLeft: 0,
              margin: 0,
              '& li::marker': {
                color: '#ccc',
                fontSize: '.8rem',
              },
            }}
          >
            <ListItem
              sx={{
                display: 'list-item',
                textAlign: 'start',
                borderBottom: '1px solid #ccc',
                listStylePosition: 'inside',
                paddingBottom: '20px',
                marginBottom: '20px',
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                component="span"
              >
                موديل السيارة
              </Typography>

              <Typography
                variant="body2"
                textAlign="right"
                fontWeight="bold"
                component="span"
              >
                : هيونداي
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                display: 'list-item',
                textAlign: 'start',
                borderBottom: '1px solid #ccc',
                listStylePosition: 'inside',
                paddingBottom: '20px',
                marginBottom: '20px',
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                component="span"
              >
                رقم اللوحة
              </Typography>

              <Typography
                variant="body2"
                textAlign="right"
                fontWeight="bold"
                component="span"
              >
                : 4353564
              </Typography>
            </ListItem>

            <ListItem
              sx={{
                display: 'list-item',
                textAlign: 'start',
                borderBottom: '1px solid #ccc',
                listStylePosition: 'inside',
                paddingBottom: '20px',
                marginBottom: '20px',
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                component="span"
              >
                نوع الترخيص
              </Typography>

              <Typography
                variant="body2"
                textAlign="right"
                fontWeight="bold"
                component="span"
              >
                : خصوصي
              </Typography>
            </ListItem>

            <ListItem
              sx={{
                display: 'list-item',
                textAlign: 'start',
                borderBottom: '1px solid #ccc',
                listStylePosition: 'inside',
                paddingBottom: '20px',
                marginBottom: '20px',
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                component="span"
              >
                المدينة
              </Typography>

              <Typography
                variant="body2"
                textAlign="right"
                fontWeight="bold"
                component="span"
              >
                : كركوم
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                display: 'list-item',
                textAlign: 'start',
                borderBottom: '1px solid #ccc',
                listStylePosition: 'inside',
                paddingBottom: '20px',
                marginBottom: '20px',
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                component="span"
              >
                سنة الصنع
              </Typography>

              <Typography
                variant="body2"
                textAlign="right"
                fontWeight="bold"
                component="span"
              >
                : 2000
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            width: '1px',
            backgroundColor: '#ccc',
          }}
        />

        <Box
          sx={{
            width: '50%',
          }}
        >
          <Card
            sx={{
              boxShadow: 'none',
            }}
          >
            <CardMedia
              component="img"
              height="230"
              image={cardImg}
              alt="image"
              sx={{
                borderRadius: '20px',
                padding: '0 10px',
              }}
            />
            <CardContent
              sx={{ direction: 'rtl', padding: '12px 10px', height: '175px' }}
              fontSize={2}
            >
              <Box
                display="flex"
                sx={{
                  backgroundColor: '#f5f9fd',
                  border: ' 2px solid #8ac2eb',
                  borderRadius: '10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '12px 0',
                  marginTop: '20px',
                }}
              >
                <Box sx={{ width: '70%' }}>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: '15px', lineHeight: '1.6' }}
                  >
                    أذا كنت تعتقد بأن الغرامة غير صحيحة يمكنك
                    <br /> التظلم على الغرامة بعد الدفع
                  </Typography>
                </Box>

                <Box>
                  <InfiIcon />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Box display="flex" justifyContent="end" alignItems="center" mt={10}>
        <Button
          variant="contained"
          sx={{
            mx: 2,
            backgroundColor: '#4a4244',
            color: '#fff',
            borderRadius: '10px',
            width: '130px',
            height: '37px',
            border: 'none',
          }}
        >
          دفع
        </Button>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: '#fff',
            color: '#4a4244',
            borderRadius: '10px',
            width: '130px',
            height: '37px',
            border: 'none',
          }}
          onClick={() => setActiveItem('confirmData')}
        >
          رجوع
        </Button>
      </Box>
    </Box>
  );
};

export default FineInformation;
