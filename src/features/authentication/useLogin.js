import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      // Redirect to dashboard
      navigate('/dashboard');
    },
    onError: (err) => {
      // Show error message
      console.log('Error', err);
      toast.error(
        'Provided email or password are incorrect. Please try again.'
      );
    },
  });
  return { login, isLoading };
}
