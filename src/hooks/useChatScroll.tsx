import React from 'react';

export const useChatScroll = <T, A>(firstDep: T, secondDep: A) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [firstDep, secondDep]);

  return ref;
};
