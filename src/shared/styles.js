export const sectionStyles = {
  padding: '16px 24px',
  backgroundColor: '#FBFAFF',
};

export const inputStyles = {
  width: '308px !important',
  borderRadius: '12px',
  borderColor: 'purple.stroke',

  '&:hover, .MuiOutlinedInput-root:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: 'purple.primary',
    },
  },

  '& .MuiOutlinedInput-input, & .MuiOutlinedInput-root': {
    fontWeight: 500,
    fontSize: '12px',
    color: 'text.hint',
    fontFamily: 'Poppins',
    backgroundColor: 'white',
    borderColor: '#dbd3f0 !important',
  },

  '& .MuiOutlinedInput-input:-webkit-autofill': {
    boxShadow: (theme) =>
      `0px 48px ${theme.palette.background.paper} inset !important`,
  },

  'input, & .MuiOutlinedInput-notchedOutline, .MuiTextField-root': {
    borderRadius: '12px',
    borderColor: '#dbd3f0 !important',
  },

  '&.Mui-focused, & .Mui-focused': {
    borderColor: 'purple.primary',

    '& .MuiOutlinedInput-notchedOutline': {
      border: '2px solid #5B31AA !important',
    },
  },

  '&.Mui-focused.Mui-error': { color: '#f44336' },

  '& .MuiInputLabel-shrink, & .MuiInputLabel-root.Mui-focused': {
    color: '#211835',
    fontWeight: '500',
    fontFamily: 'Poppins',
  },

  '& .MuiInputLabel-root.Mui-focused.Mui-error': {
    color: '#f44336',
  },

  '.Mui-error': {
    fontFamily: 'Poppins',
  },
};

export const menuItemStyles = {
  '&.MuiMenuItem-root': {
    padding: '5px 14px',
    borderRadius: '10px',

    '&.Mui-selected': {
      backgroundColor: 'purple.stroke',
    },

    '&:hover': {
      backgroundColor: 'input.fill',
    },
  },
};

export const inputStyleWithoutWidth = {
  label: {
    fontWeight: '600',
  },
  'input': {
    backgroundColor:'#fff',
    color: '#000 !important',
    height: '20px'
  },
  'input, & .MuiOutlinedInput-notchedOutline, .MuiTextField-root': {
    borderRadius: '12px',
    borderColor: '#dbd3f0 !important',
    color: '#000 !important',
  },
  '&.Mui-focused, & .Mui-focused': {
    borderColor: 'purple.primary',

    '& .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #5B31AA !important',
      
    },
  },

  '& .MuiInputLabel-root.Mui-focused': {
    color: 'text.primary',
  },
};

export const inputStylesInSignUp = {
  marginBottom: 1.5,

  '& label': {
    fontWeight: '500',
    fontSize: '12px',
    color: '#211835',
    mt: '2px',
    paddingLeft: '5px',
    fontFamily: 'Poppins !important',
  },

  '& .MuiInputBase-root': {
    height: '46px',

    '& .MuiInputBase-input': {
      padding: '12px 14px',
    },
  },

  '& .MuiOutlinedInput-root': {
    '& input:-webkit-autofill': {
      '-webkit-box-shadow': '0 0 0 100px #f8fafc inset !important',
      '-webkit-text-fill-color': 'black !important',
    },

    '& fieldset': {
      borderColor: '#DBD3F0',
      transition: 'all .2s ease-in-out',
    },

    '&:hover fieldset': {
      borderColor: '#DBD3F0',
      backgroundColor: '#ede7f680',
    },

    '&.Mui-focused fieldset': {
      borderColor: '#DBD3F0',
    },
  },

  '& .MuiInputLabel-root.Mui-focused': {
    color: 'text.primary',
  },

  '.Mui-error': {
    margin: '4px 0 !important',
    fontFamily: 'Poppins',
  },
};

export const inputStylesInStudentSignUp = {
  flexGrow: 1,

  '& label': {
    fontWeight: '500',
    fontSize: '12px',
    color: '#211835',
    marginLeft: '5px',
    fontFamily: 'Poppins',
  },

  '& .MuiOutlinedInput-input, & .MuiOutlinedInput-root': {
    backgroundColor: 'white',

    '& input:-webkit-autofill': {
      '-webkit-text-fill-color': '#0C1122 !important',
    },

    '& fieldset': {
      borderColor: '#0C1122',
      transition: 'all .2s ease-in-out',
    },

    '&:hover fieldset': {
      borderColor: '#0C1122',
      backgroundColor: '#dbd3f050',
    },

    '&.Mui-focused fieldset': {
      borderColor: '#0C1122',
    },
  },

  '& .MuiInputLabel-root.Mui-focused': {
    color: 'text.primary',
    backgroundColor: 'white',
  },

  '.Mui-error': {
    fontFamily: 'Poppins',
  },
};
