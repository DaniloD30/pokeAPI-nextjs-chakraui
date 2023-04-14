import { Skeleton } from '@chakra-ui/react';

type ISkeletonProps = {
  w: string;
  h: string;
}

function SkeletonLoader({ w, h }: ISkeletonProps) {
  return <Skeleton data-testid="skeleton-test" w={w} h={h} speed={1.5} borderRadius="8px" />;
}

export default SkeletonLoader;
