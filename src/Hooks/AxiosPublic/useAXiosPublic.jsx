import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000'
});

const useAXiosPublic = () => {
    return instance
};

export default useAXiosPublic;