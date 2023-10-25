// src/api.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sua-api.com',
});

export default instance;
