import axios from 'axios';

const sendEmail = async (email, message,name,betreff,checkbox) => {
  return axios({
    method: 'post',
    url: '/api/send-mail',
    data: {
      name: name,
      email: email,
      betreff: betreff,
      message: message,
      checkbox: checkbox,
    },
  });
};

export default sendEmail;