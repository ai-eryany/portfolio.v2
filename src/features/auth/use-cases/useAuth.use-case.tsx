import Hook from '@/libs/Hook.lib';
import type { Maybe } from '@/types/shared.type';

type P = {
  isSubmit: Maybe<boolean>;
  payload: Maybe<any>;
};

export default function useAuth(props: P) {
  const { isSubmit, payload } = props;
  return Hook.useRequest({
    isSubmit,
    method: 'POST',
    payload: payload,
    url: '/auth',
  });
}
