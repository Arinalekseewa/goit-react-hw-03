import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Мінімум 3 символи')
      .max(50, 'Максимум 50 символів')
      .required("Ім'я обов'язкове"),
    number: Yup.string()
      .min(3, 'Мінімум 3 символи')
      .max(50, 'Максимум 50 символів')
      .required('Номер обов’язковий'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles['contact-form']}>
        <div>
          <label htmlFor="name" className={styles['contact-label']}>Name</label>
          <Field id="name" name="name"  className={styles['contact-input']}/>
          <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
        </div>

        <div>
          <label htmlFor="number" className={styles['contact-label']}>Number</label>
          <Field id="number" name="number"  className={styles['contact-input']}/>
          <ErrorMessage name="number" component="div" style={{ color: 'red' }} />
        </div>

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
