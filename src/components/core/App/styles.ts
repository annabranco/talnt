import styled from 'styled-components';

interface SWrapperElementProps extends React.ComponentPropsWithoutRef<'div'> {
  color: string;
}

export const SWrapperElement = styled.div<SWrapperElementProps>`
  background: rgba(100, 100, 100, 0.1);
  filter: blur(2);
  border-radius: 40px;
  margin: 50px auto;
  height: ${`${window.innerHeight * 0.8}px`};
  width: 90%;
  box-shadow: 0 0 50px 10px rgba(100, 100, 100, 0.6),
    inset 0 0 10px rgba(100, 100, 100, 0.6);
  padding: 40px;
`;
SWrapperElement.displayName = 'SWrapperElement';

export const SAppContainer = styled(SWrapperElement)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
SAppContainer.displayName = 'SAppContainer';

export const SMainArea = styled(SWrapperElement)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  max-height: 80%;
`;
SMainArea.displayName = 'SMainArea';

export const FakeElement = styled.div``;
FakeElement.displayName = 'FakeElement';
