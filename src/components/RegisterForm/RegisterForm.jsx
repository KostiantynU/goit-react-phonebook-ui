import { Formik } from 'formik';
import { register } from 'redux/auth/authOperations';
import { AddBtn, NameInput } from 'components/PhoneBookForm/PhoneBookFormStyled';
import { LogInFormStyled } from 'components/LogInForm/LogInFormStyled';
import { useDispatch } from 'react-redux';

const RegisterFormStyled = () => {
  const dispatch = useDispatch();
  const validate = values => {
    const errors = {};
    if (!values.userEmail) {
      errors.userEmail = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)) {
      errors.userEmail = 'Invalid email';
    }

    if (!values.userPassword) {
      errors.userPassword = 'Password is required';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(values.userPassword)) {
      errors.userPassword = 'Invalid password';
    }

    if (!values.userName) {
      errors.userName = 'Name is required';
    }

    return errors;
  };

  // const formik = useFormik({
  //   initialValues: {
  //     userEmail: '',
  //     userPassword: '',
  //     userName: '',
  //   },
  //   validate,
  //   onSubmit: values => {
  //     const newUser = { ...values };
  //     dispatch(register(newUser));
  //     formik.handleReset();
  //   },
  // });

  return (
    <Formik
      initialValues={{
        userEmail: '',
        userPassword: '',
        userName: '',
      }}
      validate={validate}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        const newUser = { ...values };
        dispatch(register(newUser));
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <LogInFormStyled onSubmit={handleSubmit}>
          <NameInput
            id="userName"
            type="text"
            name="userName"
            label="Enter your name"
            placeholder="Kostiantyn"
            $marginBottom="1.5rem"
          />
          <NameInput
            id="userEmail"
            type="email"
            name="userEmail"
            label="Enter your e-mail"
            placeholder="example@example.com"
            $marginBottom="1.5rem"
          />
          <NameInput
            id="userPassword"
            type="password"
            name="userPassword"
            label="Enter your password"
            placeholder="Enter password"
            $marginBottom="1.5rem"
          />
          <AddBtn type="submit" $padding="10px 15px" disabled={isSubmitting}>
            Register!
          </AddBtn>
        </LogInFormStyled>
      )}
    </Formik>
    // <LogInFormStyled onSubmit={formik.handleSubmit}>
    //   <label htmlFor="userName">Enter your name</label>
    //   <StyledTextInput
    //     type="text"
    //     name="userName"
    //     {...formik.getFieldProps('userName')}
    //     $formadd="400px"
    //   />
    //   {formik.touched.userName && formik.errors.userName ? (
    //     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    //       <div>{formik.errors.userName}</div>
    //     </motion.div>
    //   ) : null}

    //   <label htmlFor="userEmail">Enter your e-mail</label>
    //   <StyledTextInput
    //     type="email"
    //     name="userEmail"
    //     {...formik.getFieldProps('userEmail')}
    //     $formadd="400px"
    //   />
    //   {formik.touched.userEmail && formik.errors.userEmail ? (
    //     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    //       <div>{formik.errors.userEmail}</div>
    //     </motion.div>
    //   ) : null}

    //   <label htmlFor="userPassword">Enter password</label>
    //   <StyledTextInput
    //     type="password"
    //     name="userPassword"
    //     {...formik.getFieldProps('userPassword')}
    //     $formadd="400px"
    //   />
    //   {formik.touched.userPassword && formik.errors.userPassword ? (
    //     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    //       <div>{formik.errors.userPassword}</div>
    //     </motion.div>
    //   ) : null}

    // <AddBtn type="submit" $padding="10px 15px">
    //   Register!
    // </AddBtn>
    // </LogInFormStyled>
  );
};

// this is for create pass ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
// this is for create pass, less difficulty ("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")

export default RegisterFormStyled;
