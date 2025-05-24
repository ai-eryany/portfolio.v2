import Animation from '@/animations/Animation';
import type { Props } from '@/types/shared.type';

export default function NotFoundLayout(props: Props<'div'>) {
  const { children } = props;
  return <Animation.Page>{children}</Animation.Page>;
}
