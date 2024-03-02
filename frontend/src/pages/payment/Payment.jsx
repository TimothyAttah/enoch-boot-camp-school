import React, { useState } from 'react';
import { Container } from '../../styles/globalStyles';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './PaymentStyles';
// import PaystackPop from '@paystack/inline-js';
import { startPayment } from '../../redux/actions/paymentActions ';
import { useDispatch } from 'react-redux';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    amount: '',
  });
  const dispatch = useDispatch();

  const handleInputs = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  // const startPaymentMethod = async (paymentData) => {
  //   const api = `http://localhost:8080/api/pay`;

  //   try {
  //     const { data } = await axios.post(api, paymentData);
  //     console.log(data);
  //     // const redirectUrl = JSON.stringify(data).data.authorization_url;
  //     const redirectUrl = data.data.data;

  //     console.log(redirectUrl);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   if (
  //     paymentData.amount !== '' &&
  //     paymentData.email !== '' &&
  //     paymentData.name !== ''
  //   ) {
  //     setTimeout(() => {
  //       navigate('/confirm-payment');
  //     }, 8000);
  //   }
  // }, [paymentData, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      paymentData.amount !== '' &&
      paymentData.email !== '' &&
      paymentData.firstname !== '' &&
      paymentData.lastname !== ''
    ) {
      console.log(paymentData);
      dispatch(startPayment(paymentData));
      navigate('/confirm-payment');
    }

    // setTimeout(() => {
    //   return navigate('/confirm-payment');
    // }, 2000);

    // dispatch(getPayment());

    // const paystack = new PaystackPop();

    // paystack.newTransaction({
    //   key: 'pk_test_07c16182445b8c7bf4c69e83f9d78738abdbd50c',
    //   amount: paymentData.amount * 100,
    //   email: paymentData.email,
    //   name: paymentData.name,

    //   onSuccess(transaction) {
    //     console.log(transaction);
    //     let message = `Payment Complete! Reference ${transaction.reference}`;
    //     alert(message);

    //     // navigation(transaction.redirecturl);
    //   },

    //   onCancel() {
    //     alert('You have canceled the transaction.');
    //   },
    // });
  };
  return (
    <Styles.PaymentContainer>
      <Container>
        <FadeIn delay={0.2} direction='down'>
          <h1>Payment Information</h1>
        </FadeIn>
        <div>
          <form onSubmit={handleSubmit}>
            <Styles.PaymentInput>
              <FadeIn delay={0.4} direction='down'>
                <label htmlFor='amount'>Amount</label>
              </FadeIn>
              <FadeIn delay={0.4} direction='down'>
                <input
                  type='text'
                  name='amount'
                  value={paymentData.amount}
                  required
                  onChange={handleInputs}
                />
              </FadeIn>
            </Styles.PaymentInput>
            <Styles.PaymentInput>
              <FadeIn delay={0.6} direction='down'>
                <label htmlFor='name'>First Name</label>
              </FadeIn>
              <FadeIn delay={0.6} direction='down'>
                <input
                  type='text'
                  name='firstname'
                  required
                  value={paymentData.firstname}
                  onChange={handleInputs}
                />
              </FadeIn>
            </Styles.PaymentInput>
            <Styles.PaymentInput>
              <FadeIn delay={0.6} direction='down'>
                <label htmlFor='name'>Last Name</label>
              </FadeIn>
              <FadeIn delay={0.6} direction='down'>
                <input
                  type='text'
                  name='lastname'
                  required
                  value={paymentData.lastname}
                  onChange={handleInputs}
                />
              </FadeIn>
            </Styles.PaymentInput>
            <Styles.PaymentInput>
              <FadeIn delay={0.8} direction='down'>
                <label htmlFor='email'>Email</label>
              </FadeIn>
              <FadeIn delay={0.8} direction='down'>
                <input
                  type='text'
                  name='email'
                  required
                  value={paymentData.email}
                  onChange={handleInputs}
                />
              </FadeIn>
            </Styles.PaymentInput>

            <div>
              <Styles.PaymentCardContainer>
                <FadeIn delay={0.6} direction='up'>
                  <button
                    className='btn btn-primary rounded-pill'
                    type='submit'
                  >
                    Make Payment
                  </button>
                </FadeIn>
              </Styles.PaymentCardContainer>
            </div>
          </form>
        </div>
      </Container>
    </Styles.PaymentContainer>
  );
};

export default Payment;
