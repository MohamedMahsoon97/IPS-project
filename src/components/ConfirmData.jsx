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

const ConfirmData = ({ setActiveItem }) => {
  return (
    <Box sx={{ p: 0 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
        backgroundColor="#fff"
        borderRadius={3}
        padding={2}
      >
        <Box>
          <Typography variant="h7">الرئيسية / </Typography>
          <Typography variant="h7">المخالفات الحالية / </Typography>
          <Typography variant="h7" color="text.secondary">
            تأكيد البيانات
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
        borderRadius={3}
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
                شاسيه
              </Typography>

              <Typography
                variant="body2"
                textAlign="right"
                fontWeight="bold"
                component="span"
              >
                : 4765656545
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
                موتور
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
                تاريخ إنتهاء الرخصة
              </Typography>

              <Typography
                variant="body2"
                textAlign="right"
                fontWeight="bold"
                component="span"
              >
                : 23-4-2025
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box display="flex" justifyContent="end" alignItems="center" gap={2} mt={5}>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: '#fff',
            color: '#4a4244',
            borderRadius: '15px',
            width: '150px',
            height: '50px',
            border: 'none',
          }}
          onClick={() => setActiveItem('currentViolations')}
        >
          رجوع
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#4a4244',
            color: '#fff',
            borderRadius: '15px',
            width: '150px',
            height: '50px',
            border: 'none',
          }}
          onClick={() => setActiveItem('fineInformation')}
        >
          التالي
        </Button>
      </Box>
    </Box>
  );
};

export default ConfirmData;
