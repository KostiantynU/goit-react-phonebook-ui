import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { selectItems } from 'redux/contacts/selectors';
import { addContactWB } from 'redux/contacts/operationsWithBackend';
import { BookForm, NameInput, AddBtn, Label, Div, TelInput, ErrorDiv } from './PhoneBookFormStyled';

function PhoneBookForm() {
  const contactsItems = useSelector(selectItems);
  const dispatch = useDispatch();

  const validate = values => {
    const errors = {};
    if (!values.contactName) {
      errors.contactName = 'Required';
    } else if (
      !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(values.contactName)
    ) {
      errors.contactName = 'Invalid contactName';
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = 'Required';
    } else if (
      !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
        values.phoneNumber
      )
    ) {
      errors.phoneNumber = 'Invalid phoneNumber';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: { contactName: '', phoneNumber: '' },
    validate,
    onSubmit: values => {
      const newContact = {
        contactName: values.contactName,
        phoneNumber: values.phoneNumber,
      };

      if (
        contactsItems.some(el => {
          return el.contactName.toLowerCase().includes(newContact.contactName.toLowerCase());
        })
      ) {
        formik.handleReset();
        return alert(`${newContact.contactName} is already in list!`);
      }

      dispatch(addContactWB(newContact));
      formik.handleReset();
    },
  });

  return (
    <BookForm onSubmit={formik.handleSubmit}>
      <Div>
        <Label htmlFor="contactName">Name</Label>
        <NameInput
          id="name"
          name="contactName"
          type="text"
          title="ContactName may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.contactName}
          $formadd="300px"
        />
        {formik.touched.contactName && formik.errors.contactName ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ErrorDiv>{formik.errors.contactName}</ErrorDiv>
          </motion.div>
        ) : null}

        <Label htmlFor="phoneNumber">Number</Label>
        <TelInput
          id="number"
          name="phoneNumber"
          type="tel"
          title="Phone number may contains \'+\' and numbers"
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
          $formadd="300px"
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ErrorDiv>{formik.errors.phoneNumber}</ErrorDiv>
          </motion.div>
        ) : null}

        <AddBtn type="submit">Submit</AddBtn>
      </Div>
    </BookForm>
  );
}

export default PhoneBookForm;
