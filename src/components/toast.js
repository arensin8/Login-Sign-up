import { toast } from 'react-toastify';

export const notify = (text , type) => {
    if( type === "succses"){
        toast.success(text)
    }else {
        toast.error(text)
    }
};
