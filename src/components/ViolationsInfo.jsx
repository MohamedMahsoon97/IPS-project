import React, { useState } from 'react';
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
import PaymentModal from './PaymentModal';
const ViolationsInfo = ({ setActiveItem }) => {
  const [open, setOpen] = useState(false);
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
          <Typography component="span">الرئيسية / </Typography>
          <Typography component="span">المخالفات الحالية / </Typography>
          <Typography component="span">تأكيد البيانات /</Typography>
          <Typography component="span" color="text.secondary">
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
                الإسم :
              </Typography>

              <Typography
                variant="body2"
                textAlign="right"
                fontWeight="bold"
                component="span"
              >
                محمد محسون
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
                رقم الهاتف :
              </Typography>

              <Typography
                variant="body2"
                textAlign="right"
                fontWeight="bold"
                component="span"
              >
                7664353564
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
                نوع الغرامه :
              </Typography>

              <Typography
                variant="body2"
                textAlign="right"
                fontWeight="bold"
                component="span"
              >
                وقوف خاطئ
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
                مكان الغرامة :
              </Typography>

              <Typography
                variant="body2"
                textAlign="right"
                fontWeight="bold"
                component="span"
              >
                حي طيبه
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
                تاريخ و وقت الغرامة :
              </Typography>

              <Typography
                variant="body2"
                textAlign="right"
                fontWeight="bold"
                component="span"
              >
                20-11-2024 / 12:00
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
                قيمة الغرامة :
              </Typography>

              <Typography
                variant="body2"
                textAlign="right"
                fontWeight="bold"
                component="span"
              >
                500 دينار
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
                حالة الدفع /
              </Typography>

              <Typography
                variant="body2"
                textAlign="right"
                fontWeight="bold"
                component="span"
              >
                غير مدفوع
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
      <Box
        display="flex"
        justifyContent="end"
        alignItems="center"
        gap={2}
        mt={5}
      >
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
          onClick={() => setActiveItem('confirmData')}
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
          onClick={() => setOpen(true)}
        >
          دفع
        </Button>
      </Box>

      <PaymentModal open={open} setOpen={setOpen}/>
    </Box>
  );
};

export default ViolationsInfo;
