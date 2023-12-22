import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://server-site-ochre.vercel.app'
});

const useAXiosPublic = () => {
    return instance
};

export default useAXiosPublic;